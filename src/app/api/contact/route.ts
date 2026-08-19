import { NextResponse } from 'next/server';
import { checkRateLimit } from '../../../lib/rate-limit';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(150),
  phone: z.string().min(5).max(20),
  product: z.string().max(100),
  message: z.string().max(1000).optional(),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`contact_${ip}`, 5, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send inquiry notification to owner via EmailJS
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: 'template_p0g9s8k',
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          customer_name: data.name,
          customer_email: data.email,
          customer_phone: data.phone,
          order_items: `Inquiry about: ${data.product}`,
          total_amount: 'N/A (Inquiry)',
          notes: data.message || 'No message provided',
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('EmailJS contact error:', text);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
