import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: {
    default: "The Rolling Oven | Artisan Bakery in Sathyamangalam, Erode",
    template: "%s | The Rolling Oven"
  },
  description: "Freshly baked artisan treats, custom cakes, cupcakes, and desserts made with love. Serving Sathyamangalam, Erode, and Tamil Nadu.",
  keywords: [
    "The Rolling Oven", 
    "Artisan Bakery Tamil Nadu", 
    "Custom cakes Sathyamangalam", 
    "Best cupcakes Erode", 
    "Fresh desserts Tamil Nadu",
    "Bakery Sathyamangalam",
    "Donuts Erode",
    "Local bakery near me"
  ],
  authors: [{ name: "The Rolling Oven" }],
  creator: "The Rolling Oven",
  publisher: "The Rolling Oven",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://the-rolling-oven.vercel.app/',
  },
  openGraph: {
    title: 'The Rolling Oven | Artisan Bakery',
    description: 'Freshly baked artisan treats, custom cakes, cupcakes, and desserts. Serving Sathyamangalam, Erode, and Tamil Nadu.',
    url: 'https://the-rolling-oven.vercel.app',
    siteName: 'The Rolling Oven',
    images: [
      {
        url: 'https://the-rolling-oven.vercel.app/images/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'The Rolling Oven Artisan Bakery Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rolling Oven | Artisan Bakery',
    description: 'Freshly baked artisan treats, custom cakes, cupcakes, and desserts in Tamil Nadu.',
    images: ['https://the-rolling-oven.vercel.app/images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css"
        />
        
        {/* Google Analytics - The Rolling Oven */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GWTWBBBDQ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GWTWBBBDQ2');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "The Rolling Oven",
              "image": "https://the-rolling-oven.vercel.app/images/logo.jpeg",
              "url": "https://the-rolling-oven.vercel.app",
              "email": "therollingoven26@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sathyamangalam",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Sathyamangalam",
                "Erode"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/the_rolling_oven_26"
              ]
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${dancingScript.variable}`}>

        {/* ===== PARTICLES CANVAS ===== */}
        <canvas id="particles-canvas"></canvas>

        {/* ===== NAVBAR (Shared across all pages) ===== */}
        <nav id="main-nav" className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-brand" id="nav-home-link">
              <img src="/images/logo.jpeg" alt="The Rolling Oven" className="nav-logo" />
              <span className="nav-brand-text">The Rolling Oven</span>
            </a>
            <ul className="nav-links">
              <li><a href="/#hero" className="nav-link active" data-nav="home">Home</a></li>
              <li><a href="/#showcase" className="nav-link" data-nav="bakes">Our Bakes</a></li>
              <li><a href="/#about" className="nav-link" data-nav="about">About</a></li>
              <li><a href="/#contact" className="nav-link" data-nav="contact">Contact</a></li>
            </ul>
            <button className="nav-cta" id="nav-order-btn" style={{"display":"none"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span>Order Now</span>
              <span className="cart-badge" id="cart-badge" style={{"display":"none"}}>0</span>
            </button>
            <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>

        {/* ===== MOBILE MENU ===== */}
        <div className="mobile-menu-overlay" id="mobile-menu-overlay">
          <ul className="mobile-nav-links">
            <li><a href="/#hero" className="mobile-nav-link">Home</a></li>
            <li><a href="/#showcase" className="mobile-nav-link">Our Bakes</a></li>
            <li><a href="/#about" className="mobile-nav-link">About</a></li>
            <li><a href="/#contact" className="mobile-nav-link">Contact</a></li>
          </ul>
        </div>

        {/* ===== CART SIDEBAR ===== */}
        <div className="cart-overlay" id="cart-overlay"></div>
        <aside className="cart-sidebar" id="cart-sidebar" data-lenis-prevent="true">
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button className="cart-close-btn" id="cart-close-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="cart-items" id="cart-items">
            <div className="cart-empty" id="cart-empty">
              <span className="cart-empty-icon">🧁</span>
              <p>Your cart is empty</p>
              <span className="cart-empty-sub">Add some delicious treats!</span>
            </div>
          </div>
          <div className="cart-footer" id="cart-footer" style={{"display":"none"}}>
            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total-price" id="cart-total-price">₹0</span>
            </div>
            <button className="btn btn-primary btn-full" id="place-order-btn">
              <span>Place Order</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </aside>

        {/* ===== CHECKOUT MODAL ===== */}
        <div className="modal-overlay" id="order-modal-overlay">
          <div className="modal glass-card" id="order-modal" data-lenis-prevent="true">
            <button className="modal-close" id="order-modal-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 className="form-title">Complete Your Order</h3>
            <p className="modal-subtitle">We'll confirm your order via email shortly.</p>
            <form className="contact-form" id="order-form">
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
              <div className="form-group">
                <textarea id="order-notes" className="form-input form-textarea" placeholder=" " rows={2}></textarea>
                <label htmlFor="order-notes" className="form-label">Special Instructions (Optional)</label>
              </div>
              <div className="order-summary-box" id="order-summary-box"></div>
              <button type="submit" className="btn btn-primary btn-full" id="submit-order-btn">
                <span>Confirm & Send Order</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>

        {/* ===== PAGE CONTENT ===== */}
        {children}

        {/* ===== TOAST CONTAINER ===== */}
        <div className="toast-container" id="toast-container"></div>

        {/* ===== FOOTER (Shared across all pages) ===== */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-brand">
              <img src="/images/logo.jpeg" alt="The Rolling Oven - Artisan Bakery Logo" className="footer-logo" loading="lazy" />
              <p className="footer-tagline">Your Cravings, Our Creations</p>
              <p className="footer-desc">
                Sathyamangalam, Erode<br />
                therollingoven26@gmail.com
              </p>
            </div>
            <div className="footer-links-group">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/" className="footer-nav-link">Home</a></li>
                <li><a href="/#showcase" className="footer-nav-link">Our Bakes</a></li>
                <li><a href="/#about" className="footer-nav-link">About Us</a></li>
                <li><a href="/#contact" className="footer-nav-link">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <h4 className="footer-heading">Our Bakes</h4>
              <ul className="footer-links">
                <li><a href="/category/cupcakes" className="footer-nav-link">Cupcakes</a></li>
                <li><a href="/category/cookies" className="footer-nav-link">Cookies</a></li>
                <li><a href="/category/muffins" className="footer-nav-link">Muffins</a></li>
                <li><a href="/category/croissants" className="footer-nav-link">Croissants</a></li>
                <li><a href="/category/donuts" className="footer-nav-link">Donuts</a></li>
                <li><a href="/category/chocholava" className="footer-nav-link">Chocholava</a></li>
                <li><a href="/category/tiramisu" className="footer-nav-link">Tiramisu</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <h4 className="footer-heading">Hours</h4>
              <ul className="footer-links footer-hours">
                <li><span>Mon - Sat</span><span>9 AM – 8 PM</span></li>
                <li><span>Sunday</span><span>10 AM – 6 PM</span></li>
                <li><span>Orders</span><span>24hr advance</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 The Rolling Oven. All rights reserved. Made with ❤️</p>
          </div>
        </footer>

        <Script src="/main.js" strategy="lazyOnload" type="module" />
      </body>
    </html>
  );
}
