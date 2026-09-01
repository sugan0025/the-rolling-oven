import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | The Rolling Oven',
  description: 'Terms and conditions for The Rolling Oven online bakery orders and website usage.',
};

export default function TermsAndConditions() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">
          ← Back to Bakery Home
        </Link>
        <div className="legal-card">
          <span className="legal-badge">Legal Documentation</span>
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="legal-date">Last updated: August 2026</p>

          <div className="legal-content">
            <p>
              Welcome to <strong>The Rolling Oven</strong>. By accessing our website, browsing our handcrafted catalog, or placing an order, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our services.
            </p>

            <h2>1. Fresh Bakery Products & Ingredients</h2>
            <p>
              All our bakery items—including custom cakes, cupcakes, muffins, croissants, cookies, donuts, and desserts—are prepared fresh daily in small batches in Sathyamangalam, Erode, Tamil Nadu. We use premium, food-grade ingredients. 
            </p>
            <p>
              <strong>Allergy Disclaimer:</strong> Our bakery handles dairy, gluten, eggs, and tree nuts (such as almonds, pistachios, and walnuts). If you have severe food allergies, please contact our team via WhatsApp prior to placing an order.
            </p>

            <h2>2. Orders & Payment Integrity</h2>
            <p>
              Orders placed on our website can be fulfilled through online payments (UPI, Debit/Credit Cards, Net Banking via Razorpay) or Cash on Delivery (COD).
            </p>
            <ul>
              <li>Prices listed in our online menu are in Indian National Rupees (INR) and are subject to change without prior notice.</li>
              <li>Any unauthorized attempt to modify cart totals or bypass payment gateways will result in immediate cancellation of the order.</li>
              <li>For custom or bulk catering orders, an advance deposit may be required before baking commences.</li>
            </ul>

            <h2>3. Delivery & Local Pickup</h2>
            <p>
              We deliver within designated delivery zones in Sathyamangalam, Gobichettipalayam, Erode, and surrounding areas. Delivery timeframes provided are estimates and may occasionally vary due to weather, traffic, or fresh baking cycles.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, all product photographs, brand logos, recipes, taglines, and digital assets on this website are the proprietary property of <strong>The Rolling Oven</strong>. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
            </p>

            <h2>5. Governing Law & Jurisdiction</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to our website or orders shall be subject to the exclusive jurisdiction of the courts in Erode, Tamil Nadu.
            </p>

            <div className="legal-highlight-box">
              <strong>Need clarification?</strong>
              <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Reach out directly to our bakery support team at <a href="mailto:therollingoven26@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>therollingoven26@gmail.com</a> or message us on WhatsApp at <a href="https://wa.me/916383645415" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>+91 63836 45415</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
