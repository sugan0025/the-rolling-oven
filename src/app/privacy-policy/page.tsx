import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | The Rolling Oven',
  description: 'Privacy policy and data protection disclosures for The Rolling Oven.',
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">
          ← Back to Bakery Home
        </Link>
        <div className="legal-card">
          <span className="legal-badge">Data Protection</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-date">Last updated: August 2026</p>

          <div className="legal-content">
            <p>
              At <strong>The Rolling Oven</strong>, we are committed to respecting and protecting the privacy of our customers and website visitors. This policy explains how we collect, store, and process your personal information.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you interact with our website, order freshly baked items, or submit an inquiry, we may collect the following details:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, email address, and active phone / WhatsApp number.</li>
              <li><strong>Delivery Information:</strong> Physical street address, landmark, and postal pincode for accurate dispatch.</li>
              <li><strong>Order Data:</strong> Selected baked goods, special baking instructions, notes, and checkout preferences.</li>
              <li><strong>Payment Identifiers:</strong> Razorpay transaction IDs and payment status (we do <em>not</em> store your credit card numbers or banking PINs).</li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <p>We use your information exclusively for legitimate bakery operations:</p>
            <ul>
              <li>Fulfilling, baking, and safely delivering your fresh orders.</li>
              <li>Sending automated order receipts, delivery status updates, and WhatsApp confirmations.</li>
              <li>Recovering abandoned shopping carts to ensure you never miss your favorite treats.</li>
              <li>Improving our bakery menu, seasonal creations, and website performance.</li>
            </ul>

            <h2>3. Payment Security & Encryption</h2>
            <p>
              All online payments are securely processed through <strong>Razorpay</strong>, which adheres to strict PCI-DSS compliance standards. Payment data is encrypted via 256-bit SSL protocols during transmission.
            </p>

            <h2>4. Third-Party Disclosures & Cookies</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We use standard analytical cookies (Google Analytics 4) to monitor website health, user engagement, and traffic patterns.
            </p>

            <div className="legal-highlight-box">
              <strong>Data Inquiries & Privacy Requests:</strong>
              <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                If you wish to update, review, or delete your contact details from our records, please contact our Data Protection Officer at <a href="mailto:therollingoven26@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>therollingoven26@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
