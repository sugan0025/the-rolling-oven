import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { orderSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`order_${ip}`, 3, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const validatedData = orderSchema.parse(body);

    // Explicitly map to Supabase column structure
    const dbRow = {
      customer_name: validatedData.customer_name,
      customer_email: validatedData.customer_email,
      customer_phone: validatedData.customer_phone,
      special_instructions: validatedData.special_instructions || null,
      order_type: validatedData.order_type || 'Cart Checkout',
      items: validatedData.items,
      total_amount: String(validatedData.total_amount),
    };

    // Build email params (shared between both templates)
    const emailParams = {
      customer_name: validatedData.customer_name,
      customer_email: validatedData.customer_email,
      customer_phone: validatedData.customer_phone,
      order_items: validatedData.items
        .map((i: any) => `${i.name} (x${i.qty}) - ₹${i.price || 0}`)
        .join(' | '),
      total_amount: String(validatedData.total_amount),
      notes: validatedData.special_instructions || 'None',
    };

    // Fire BOTH emails simultaneously
    const emailPromise = Promise.allSettled([
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: validatedData.customer_email,
            ...emailParams,
          },
        }),
      }),
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: 'template_p0g9s8k',
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: emailParams,
        }),
      }),
    ]);

    // Insert into Supabase (don't block on failure)
    let dbPromise = Promise.resolve({ error: null as any });
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      dbPromise = supabase.from('orders').insert([dbRow]);
    } else {
      console.error('Supabase env vars missing — skipping DB insert');
    }

    // Wait for both
    const [emailResults, dbResult] = await Promise.all([emailPromise, dbPromise]);

    // Log email errors
    emailResults.forEach((res, i) => {
      const label = i === 0 ? 'Customer' : 'Owner';
      if (res.status === 'rejected') {
        console.error(`EmailJS ${label} rejected:`, res.reason);
      } else if (!res.value.ok) {
        res.value.text().then((t: string) => console.error(`EmailJS ${label} error:`, t));
      }
    });

    // Log DB errors but don't fail the request
    if (dbResult.error) {
      console.error('Supabase insert error:', dbResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Order API Error:', err?.message || err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}
