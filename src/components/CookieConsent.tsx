'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tro_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't compete with page load
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem('tro_cookie_consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('tro_cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-content">
        <p>
          <strong>🍪 We use cookies</strong> to enhance your experience, analyze traffic, and serve relevant ads.
          By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
          <a href="/privacy-policy" className="cookie-link">Privacy Policy</a>
        </p>
        <div className="cookie-actions">
          <button onClick={decline} className="cookie-btn cookie-btn-decline" type="button">
            Decline
          </button>
          <button onClick={accept} className="cookie-btn cookie-btn-accept" type="button">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
