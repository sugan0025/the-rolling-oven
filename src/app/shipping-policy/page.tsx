import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Delivery Policy | The Rolling Oven',
  description: 'Delivery radius, shipping charges, and handling policies for The Rolling Oven.',
};

export default function ShippingPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">
          ← Back to Bakery Home
        </Link>
        <div className="legal-card">
          <span className="legal-badge">Fulfillment & Logistics</span>
          <h1 className="legal-title">Shipping & Delivery Policy</h1>
          <p className="legal-date">Last updated: August 2026</p>

          <div className="legal-content">
            <p>
              Thank you for ordering with <strong>The Rolling Oven</strong>. We strive to deliver our warm, freshly baked treats straight from our ovens to your doorstep in pristine condition.
            </p>

            <h2>1. Delivery Areas & Service Radius</h2>
            <p>
              We provide express doorstep delivery across <strong>Sathyamangalam, Gobichettipalayam, Erode, and adjoining regions in Tamil Nadu</strong>. For specialty bulk orders or wedding cake catering in Coimbatore or Tirupur, please contact us in advance to arrange custom refrigerated transport.
            </p>

            <h2>2. Baking Cycles & Dispatch Times</h2>
            <p>
              Because our bakes are handcrafted without artificial preservatives:
            </p>
            <ul>
              <li><strong>Standard Menu Items (Cupcakes, Cookies, Muffins, Chocolava):</strong> Dispatched within 2 to 4 hours of confirmation.</li>
              <li><strong>Custom Tiered Birthday & Celebration Cakes:</strong> Require at least 24 hours advance notice for intricate design and temperature setting.</li>
            </ul>

            <h2>3. Delivery Charges</h2>
            <p>
              Delivery fees are computed based on travel distance from our central kitchen in Sathyamangalam (Pincode: 638401). Orders exceeding our promotional threshold qualify for complimentary free delivery.
            </p>

            <h2>4. Delivery Protocol & Handover</h2>
            <p>
              Our delivery personnel will contact you via phone or WhatsApp upon arrival. Please ensure someone is available at the provided address to receive the fresh baked goods promptly, particularly temperature-sensitive items like chocolava, tiramisu, and fresh buttercream cakes.
            </p>

            <div className="legal-highlight-box">
              <strong>Order Inquiries & Live Tracking:</strong>
              <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Have a question about your active delivery? WhatsApp our dispatcher directly at <a href="https://wa.me/916383645415" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>+91 63836 45415</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
