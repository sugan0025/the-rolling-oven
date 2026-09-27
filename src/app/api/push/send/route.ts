import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// Pre-built notification templates with real emojis (not unicode escapes)
const NOTIFICATION_TEMPLATES = {
  abandoned_cart: {
    title: '🧁 The Rolling Oven',
    body: 'You left some treats in your cart! Your sweet tooth is calling — complete your order before they\'re gone.',
    tag: 'tro-abandoned-cart',
    url: '/',
  },
  flash_sale: {
    title: '🔥 Flash Sale — The Rolling Oven',
    body: 'Weekend special! All croissants at ₹149 today only. Buttery, flaky, and ready to steal your heart. 🥐',
    tag: 'tro-flash-sale',
    url: '/#showcase',
  },
  new_arrival: {
    title: '🆕 New on the Menu!',
    body: 'We just added something special to our collection. Be the first to try it! 🍰',
    tag: 'tro-new-arrival',
    url: '/#favorites',
  },
  re_engagement: {
    title: '👋 We miss you!',
    body: 'It\'s been a while! Your favourite treats are freshly baked and waiting. Order now and treat yourself 😌',
    tag: 'tro-re-engagement',
    url: '/',
  },
  order_ready: {
    title: '🎉 Order Ready!',
    body: 'Your order from The Rolling Oven is ready for delivery! We\'re on our way 🛵',
    tag: 'tro-order-ready',
    url: '/',
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, customTitle, customBody, customUrl } = body;

    // Validate VAPID keys exist
    const vapidPublic = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    const vapidPrivate = process.env.VAPID_PRIVATE_KEY;

    if (!vapidPublic || !vapidPrivate) {
      return NextResponse.json({ error: 'VAPID keys not configured' }, { status: 500 });
    }

    webpush.setVapidDetails(
      'mailto:therollingoven26@gmail.com',
      vapidPublic,
      vapidPrivate
    );

    // Build notification payload
    const template = NOTIFICATION_TEMPLATES[type as keyof typeof NOTIFICATION_TEMPLATES] || NOTIFICATION_TEMPLATES.re_engagement;
    const payload = JSON.stringify({
      title: customTitle || template.title,
      body: customBody || template.body,
      icon: '/images/logo.jpeg',
      badge: '/icon-192.png',
      tag: template.tag,
      url: customUrl || template.url,
      requireInteraction: false,
    });

    // Fetch all active subscriptions from Supabase
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: subscriptions, error: dbError } = await supabase
      .from('push_subscriptions')
      .select('*')
      .eq('active', true);

    if (dbError) {
      console.error('Failed to fetch subscriptions:', dbError);
      return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
    }

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ sent: 0, message: 'No active subscribers' });
    }

    // Send to all subscribers
    let sent = 0;
    let failed = 0;
    const expiredEndpoints: string[] = [];

    const results = await Promise.allSettled(
      subscriptions.map(async (sub: any) => {
        const pushSubscription = {
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.keys_p256dh,
            auth: sub.keys_auth,
          },
        };

        try {
          await webpush.sendNotification(pushSubscription, payload);
          sent++;
        } catch (err: any) {
          if (err.statusCode === 410 || err.statusCode === 404) {
            // Subscription expired or unsubscribed — mark as inactive
            expiredEndpoints.push(sub.endpoint);
          }
          failed++;
        }
      })
    );

    // Clean up expired subscriptions
    if (expiredEndpoints.length > 0) {
      await supabase
        .from('push_subscriptions')
        .update({ active: false })
        .in('endpoint', expiredEndpoints);
    }

    return NextResponse.json({
      sent,
      failed,
      total: subscriptions.length,
      expired_cleaned: expiredEndpoints.length,
    });
  } catch (err: any) {
    console.error('Push send error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
