import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { CATEGORIES } from '@/lib/products';

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // 1. Server-Side Price Calculation (Tamper-Proof)
    let total = 0;
    const allProducts = Object.values(CATEGORIES).flatMap(c => c.items);

    for (const item of items) {
      const product = allProducts.find(p => p.name === item.name);
      if (!product) {
        return NextResponse.json({ error: `Invalid item: ${item.name}` }, { status: 400 });
      }
      total += product.price * item.quantity;
    }

    if (total <= 0) {
      return NextResponse.json({ error: 'Invalid total amount' }, { status: 400 });
    }

    // 2. Create Razorpay Order
    // amount in paisa (total * 100)
    const options = {
      amount: total * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      total_inr: total,
    });
  } catch (error) {
    console.error('Razorpay Create Order Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
