import Link from 'next/link';

export const metadata = {
  title: 'Cancellation & Refund Policy | The Rolling Oven',
  description: 'Cancellation and refund policies for perishable bakery orders at The Rolling Oven.',
};

export default function RefundPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">
          ← Back to Bakery Home
        </Link>
        <div className="legal-card">
          <span className="legal-badge">Customer Assurance</span>
          <h1 className="legal-title">Cancellation & Refund Policy</h1>
          <p className="legal-date">Last updated: August 2026</p>

          <div className="legal-content">
            <p>
              At <strong>The Rolling Oven</strong>, we take immense pride in handcrafting every pastry, cupcake, and custom cake with the freshest ingredients. Because our products are perishable and baked on-demand, the following cancellation and refund terms apply.
            </p>

            <h2>1. Order Cancellations</h2>
            <p>
              You may cancel your order within <strong>1 hour</strong> of placement. Once baking has commenced or custom icing/piping has begun, cancellations cannot be accepted as the baked goods cannot be repurposed.
            </p>

            <h2>2. Eligibility for Refunds or Replacements</h2>
            <p>We are delighted to offer a full refund, credit voucher, or immediate freshly baked replacement in the following rare events:</p>
            <ul>
              <li><strong>Incorrect Item Delivered:</strong> The items received do not match your confirmed order summary.</li>
              <li><strong>Transit Damage:</strong> The cake or pastries suffered substantial physical damage during local courier transit.</li>
              <li><strong>Quality Defect:</strong> The product received was spoiled or did not meet our high culinary standards upon delivery.</li>
            </ul>

            <h2>3. Claim Procedure & Verification</h2>
            <p>
              To claim a refund or replacement, please notify us within <strong>2 hours of receiving your delivery</strong>. Send clear photographs or a short video of the damaged item along with your Order ID to our team via WhatsApp at <a href="https://wa.me/916383645415" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>+91 63836 45415</a> or email <a href="mailto:therollingoven26@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>therollingoven26@gmail.com</a>.
            </p>

            <h2>4. Refund Processing Time</h2>
            <p>
              Approved refunds for online payments (UPI, Card, Net Banking) will be refunded to your original payment method via Razorpay within <strong>5 to 7 business days</strong>. For Cash on Delivery orders, refunds will be issued via direct UPI transfer.
            </p>

            <div className="legal-highlight-box">
              <strong>Bakery Guarantee:</strong>
              <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Your satisfaction is our utmost priority. We handle every customer case with warmth and fairness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
