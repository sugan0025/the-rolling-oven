import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | The Rolling Oven',
  description: 'Get in touch with The Rolling Oven bakery in Sathyamangalam, Erode, Tamil Nadu for orders and inquiries.',
};

export default function ContactPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">
          ← Back to Bakery Home
        </Link>
        <div className="legal-card">
          <span className="legal-badge">Get in Touch</span>
          <h1 className="legal-title">Contact Our Bakery</h1>
          <p className="legal-date">We are here to make your sweet cravings a reality</p>

          <div className="legal-content">
            <p>
              Whether you need a custom birthday cake, catering for a celebration, or have questions regarding an existing order, we are always delighted to connect with you!
            </p>

            <h2>Direct Contact Channels</h2>
            <div className="legal-highlight-box">
              <p style={{ margin: '0 0 10px', fontSize: '1rem', color: 'var(--cream)' }}>
                📍 <strong>Bakery Address:</strong> Sathyamangalam, Erode District, Tamil Nadu — 638401
              </p>
              <p style={{ margin: '0 0 10px', fontSize: '1rem', color: 'var(--cream)' }}>
                📞 <strong>WhatsApp / Phone:</strong> <a href="https://wa.me/916383645415" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>+91 63836 45415</a>
              </p>
              <p style={{ margin: '0', fontSize: '1rem', color: 'var(--cream)' }}>
                ✉️ <strong>Official Email:</strong> <a href="mailto:therollingoven26@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>therollingoven26@gmail.com</a>
              </p>
            </div>

            <h2>Bakery Operating Hours</h2>
            <ul>
              <li><strong>Monday to Saturday:</strong> 9:00 AM – 8:00 PM</li>
              <li><strong>Sunday:</strong> 10:00 AM – 6:00 PM</li>
              <li><strong>Online Orders & WhatsApp Booking:</strong> Open 24/7 (Processed during morning baking cycles)</li>
            </ul>

            <h2>Custom Cake Inquiries</h2>
            <p>
              For custom multi-tier wedding cakes, customized fondant sculptures, or corporate gifting boxes, please reach out at least 24 to 48 hours in advance so our head chef can craft your dessert to perfection.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
