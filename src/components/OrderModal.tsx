export default function OrderModal() {
  return (
    <div className="modal-overlay" id="order-modal-overlay">
      <div className="modal glass-card" id="order-modal" data-lenis-prevent="true">
        <button className="modal-close" id="order-modal-close" aria-label="Close order modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <h3 className="form-title">Complete Your Order</h3>
        <p className="modal-subtitle">We'll prepare your freshly baked items with love.</p>
        <form className="contact-form" id="order-form">
          {/* Anti-spam Honeypot */}
          <input
            type="text"
            name="b_website"
            id="order-hp"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <div className="form-group">
            <input type="text" id="order-name" className="form-input" placeholder=" " required />
            <label htmlFor="order-name" className="form-label">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="order-email" className="form-input" placeholder=" " required />
            <label htmlFor="order-email" className="form-label">Email Address</label>
          </div>
          <div className="form-group">
            <input type="tel" id="order-phone" className="form-input" placeholder=" " required />
            <label htmlFor="order-phone" className="form-label">Phone Number</label>
          </div>
          
          {/* Delivery Details */}
          <div className="form-group">
            <input type="text" id="order-address" className="form-input" placeholder=" " required />
            <label htmlFor="order-address" className="form-label">Delivery Address (Door / Street / Area)</label>
          </div>
          <div className="form-group">
            <input type="text" id="order-pincode" className="form-input" placeholder=" " required />
            <label htmlFor="order-pincode" className="form-label">Pincode (e.g. 638401)</label>
          </div>

          <div className="form-group">
            <textarea id="order-notes" className="form-input form-textarea" placeholder=" " rows={2}></textarea>
            <label htmlFor="order-notes" className="form-label">Special Instructions (Optional)</label>
          </div>
          
          {/* Payment Method Selection */}
          <div className="payment-method-group">
            <h4 className="payment-method-title">Select Payment Method</h4>
            <div className="payment-options">
              <label className="payment-option">
                <input type="radio" name="payment_method" value="online" defaultChecked />
                <span className="payment-option-content">
                  <span className="payment-icon">
                    <img src="/images/icons/card-3d.png" alt="Pay Online" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </span>
                  <span className="payment-text">Pay Online (UPI / Card)</span>
                </span>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment_method" value="cod" />
                <span className="payment-option-content">
                  <span className="payment-icon">
                    <img src="/images/icons/cash-3d.png" alt="Cash on Delivery" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </span>
                  <span className="payment-text">Cash on Delivery</span>
                </span>
              </label>
            </div>
            {/* Sandbox Demo Notice */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              marginTop: '12px',
              marginBottom: '4px',
              background: 'rgba(212, 160, 23, 0.08)',
              border: '1px solid rgba(212, 160, 23, 0.25)',
              borderRadius: '10px',
              fontSize: '0.8rem',
              lineHeight: '1.4',
              color: 'var(--text-secondary)'
            }}>
              <span style={{ fontSize: '1.1rem' }}>🛡️</span>
              <span>
                <strong style={{ color: 'var(--gold)' }}>Sandbox Demo:</strong> No real money charged. Use test UPI or card <code style={{ color: 'var(--gold)', background: 'rgba(0,0,0,0.3)', padding: '2px 5px', borderRadius: '4px' }}>4111 2222 3333 4444</code>.
              </span>
            </div>
          </div>

          <div className="order-summary-box" id="order-summary-box"></div>
          <button type="submit" className="btn btn-primary btn-full" id="submit-order-btn">
            <span>Confirm & Send Order</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
