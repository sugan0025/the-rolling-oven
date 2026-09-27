import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { checkRateLimit, getClientIp } from '../../../../lib/rate-limit';

// Standard Indian DLT-Compliant SMS Templates (≤ 160 Characters)
export const SMS_TEMPLATES = {
  order_confirmation: (name: string, orderId: string, total: string) =>
    `Hi ${name || 'Customer'}, your order #${orderId || 'TRO'} for Rs.${total} at The Rolling Oven is confirmed! Freshly baking now. Helpline: 916383645415`,

  abandoned_cart: (name: string, discountCode: string = 'BAKE10') =>
    `Craving sweet treats? You left items in your cart at The Rolling Oven! Use code ${discountCode} for 10% off. Order: https://the-rolling-oven.vercel.app`,

  order_out_for_delivery: (name: string, orderId: string) =>
    `Ding dong! Your Rolling Oven order #${orderId || 'TRO'} is out for delivery. Hot & fresh bakes reaching your doorstep shortly! 916383645415`,
};

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(`sms_${ip}`, 10, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();
    const { phone, type, name, orderId, total, customMessage } = body;

    const cleanPhone = phone ? String(phone).replace(/\D/g, '').slice(-10) : '';
    if (!cleanPhone || cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'Valid 10-digit Indian phone number required' }, { status: 400 });
    }

    // Determine message text
    let messageText = customMessage;
    if (!messageText) {
      if (type === 'order_confirmation') {
        messageText = SMS_TEMPLATES.order_confirmation(name, orderId, total);
      } else if (type === 'abandoned_cart') {
        messageText = SMS_TEMPLATES.abandoned_cart(name);
      } else if (type === 'order_out_for_delivery') {
        messageText = SMS_TEMPLATES.order_out_for_delivery(name, orderId);
      } else {
        messageText = SMS_TEMPLATES.abandoned_cart(name);
      }
    }

    const fast2smsKey = process.env.FAST2SMS_API_KEY;
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuth = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

    let sent = false;
    let provider = 'mock';

    // Provider 1: Fast2SMS (India Bulk Route)
    if (fast2smsKey) {
      try {
        const res = await fetch('https://www.fast2sms.com/dev/bulkV2', {
          method: 'POST',
          headers: {
            'authorization': fast2smsKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            route: 'q',
            message: messageText,
            language: 'english',
            flash: 0,
            numbers: cleanPhone,
          }),
        });
        const data = await res.json();
        sent = data.return === true;
        provider = 'fast2sms';
      } catch (e) {
        console.error('Fast2SMS dispatch error:', e);
      }
    }
    // Provider 2: Twilio SMS
    else if (twilioSid && twilioAuth && twilioPhone) {
      try {
        const auth = Buffer.from(`${twilioSid}:${twilioAuth}`).toString('base64');
        const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: `+91${cleanPhone}`,
            From: twilioPhone,
            Body: messageText,
          }).toString(),
        });
        sent = res.ok;
        provider = 'twilio';
      } catch (e) {
        console.error('Twilio SMS dispatch error:', e);
      }
    } else {
      // Safe fallback: Log to Supabase / console for presentation demo
      console.log(`[SMS MOCK DISPATCH] To: +91${cleanPhone} | Message: "${messageText}"`);
      sent = true;
      provider = 'demo_mode (Add FAST2SMS_API_KEY to activate live SMS)';
    }

    // Optional: Log SMS event in Supabase
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from('leads').update({
          updated_at: new Date().toISOString(),
        }).eq('phone', cleanPhone);
      }
    } catch (_) {}

    return NextResponse.json({
      success: sent,
      provider: provider,
      phone: `+91${cleanPhone}`,
      message: messageText,
      char_count: messageText.length,
    });
  } catch (err: any) {
    console.error('SMS API Route Error:', err);
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}
