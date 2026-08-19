import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('orders')
      .insert([body]);

    if (dbError) {
      console.error('Supabase Error:', dbError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // 2. Send email via EmailJS HTTP API (server-side)
    const emailPayload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: process.env.OWNER_EMAIL,
        from_name: body.customer_name,
        from_email: body.customer_email,
        phone: body.customer_phone,
        items: JSON.stringify(body.items, null, 2),
        total: body.total_amount,
        instructions: body.special_instructions || 'None'
      }
    };

    const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailPayload)
    });

    if (!emailRes.ok) {
      const text = await emailRes.text();
      console.error('EmailJS Error:', text);
      // We don't fail the order if email fails, but we log it
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
