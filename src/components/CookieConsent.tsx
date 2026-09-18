'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    [key: string]: any;
  }
}

const GA_MEASUREMENT_ID = 'G-GWTWBBBDQ2';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('tro_cookie_consent');
      if (!consent) {
        // Small delay so it doesn't compete with initial page load
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Ignore localStorage access errors
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem('tro_cookie_consent', 'accepted');
    } catch (e) {}

    if (typeof window !== 'undefined') {
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted',
        });
      }
    }
    setVisible(false);
  }

  function decline() {
    try {
      localStorage.setItem('tro_cookie_consent', 'declined');
    } catch (e) {}

    if (typeof window !== 'undefined') {
      // 1. Disable GA4 for this session and future hits
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

      // 2. Inform Google Consent Mode of denial
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
        });
      }

      // 3. Purge any Google Analytics cookies already placed
      try {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookieName = cookies[i].split('=')[0].trim();
          if (cookieName.startsWith('_ga') || cookieName.startsWith('_gid')) {
            const hostname = window.location.hostname;
            document.cookie = `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
            document.cookie = `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=${hostname};`;
            document.cookie = `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=.${hostname};`;
          }
        }
      } catch (e) {
        // Safe failover
      }
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-content">
        <p>
          <strong>🍪 Cookie Preferences:</strong> We use cookies to analyze site traffic and improve your browsing experience.
          By clicking &quot;Accept All&quot;, you consent to analytics cookies.{' '}
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
