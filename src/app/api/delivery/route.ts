import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const items = searchParams.get('items');

  if (!name || !email) {
    return new NextResponse('Missing parameters (name or email required)', { status: 400 });
  }

  try {
    // Send "Order Delivered & Review Request" email to customer
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        // The owner must create this template in EmailJS to send to the customer!
        // We will tell them to create 'template_delivery'
        template_id: process.env.EMAILJS_DELIVERY_TEMPLATE_ID || 'template_delivery', 
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: email,
          customer_name: name,
          order_items: items || 'Your treats',
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('EmailJS Delivery error:', errorText);
      return new NextResponse(`Failed to send email via EmailJS: ${errorText}`, { status: 500 });
    }

    return new NextResponse(`
      <html>
        <body style="font-family: system-ui, -apple-system, sans-serif; text-align: center; padding: 50px; background: #1a0f08; color: #fff;">
          <div style="max-width: 600px; margin: 0 auto; background: rgba(255,255,255,0.05); border: 1px solid rgba(201,169,110,0.3); padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="font-size: 60px; margin-bottom: 20px;">✅</div>
            <h1 style="color: #c9a96e; margin-bottom: 10px;">Order Marked as Delivered!</h1>
            <p style="color: #ccc; font-size: 18px; line-height: 1.5; margin-bottom: 30px;">
              An email has been successfully sent to <strong>${name} (${email})</strong> letting them know their order has arrived.
            </p>
            <button onclick="window.close()" style="padding: 12px 24px; background: #c9a96e; border: none; border-radius: 8px; cursor: pointer; color: #1a0f08; font-weight: bold; font-size: 16px; transition: 0.2s;">Close Window</button>
          </div>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (err: any) {
    console.error('Delivery API Error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
