import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { checkRateLimit, getClientIp } from '../../../lib/rate-limit';

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(`abandon_cart_${ip}`, 10, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();
    const phone = body.phone ? String(body.phone).replace(/\D/g, '').slice(-10) : '';
    const email = body.email && body.email.includes('@') ? body.email.trim() : '';
    const name = body.name ? String(body.name).trim() : '';
    const cart = Array.isArray(body.cart) ? body.cart : [];
    const total = Number(body.total) || 0;

    if (!phone && !email) {
      return NextResponse.json({ error: 'Either valid phone or email is required' }, { status: 400 });
    }

    // 1. Sync to Supabase Leads Table (for abandoned cart phone/SMS recovery)
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const leadPhone = phone || `email_${email.split('@')[0]}`;

        const { error: dbError } = await supabase.from('leads').upsert(
          {
            phone: leadPhone,
            name: name,
            email: email,
            cart_snapshot: cart,
            cart_total: total,
            captured_at: new Date().toISOString(),
            converted: false,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'phone' }
        );

        if (dbError) {
          console.warn('Supabase lead upsert warning:', dbError.message);
        }
      }
    } catch (dbErr) {
      console.warn('Supabase lead capture skipped:', dbErr);
    }

    // 2. EmailJS recovery email (if email provided and credentials exist)
    if (email && process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_PUBLIC_KEY) {
      try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: {
              to_email: email,
              customer_name: name || 'Valued Shopper',
              cart_total: total ? `₹${total}` : '',
            },
          }),
        });
      } catch (emailErr) {
        console.warn('EmailJS abandoned cart dispatch skipped:', emailErr);
      }
    }

    return NextResponse.json({ success: true, captured: { phone: !!phone, email: !!email } });
  } catch (err: any) {
    console.error('Abandoned cart route error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
