import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { orderSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY!;

export async function POST(request: Request) {
  const supabase = createClient(SUPABASE_URL || 'dummy', SUPABASE_KEY || 'dummy');
  try {
    // Basic IP Rate Limiting (Using x-forwarded-for if behind proxy)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    // Max 3 orders per minute
    if (!checkRateLimit(`order_${ip}`, 3, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    
    // Validate with Zod
    const validatedData = orderSchema.parse(body);
    
    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('orders')
      .insert([validatedData]);

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
        to_email: validatedData.customer_email, // If template To is set to {{to_email}}
        owner_email: process.env.OWNER_EMAIL, // If they want to CC themselves
        customer_name: validatedData.customer_name,
        customer_email: validatedData.customer_email,
        customer_phone: validatedData.customer_phone,
        order_items: validatedData.items.map((i: any) => `${i.name} (x${i.qty}) - ₹${i.price || 0}`).join(' | '),
        total_amount: validatedData.total_amount,
        notes: validatedData.special_instructions || 'None'
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
  } catch (err: any) {
    console.error('API Error:', err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
