import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import OrderModal from "../components/OrderModal";
import ToastContainer from "../components/ToastContainer";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CookieConsent from "../components/CookieConsent";
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
    default: "The Rolling Oven | Homemade Bakery in Sathyamangalam, Erode",
    template: "%s | The Rolling Oven"
  },
  description: "Freshly baked homemade treats, custom birthday cakes, cupcakes, brownies, cookies, donuts, and desserts made with love. Handcrafted daily in Sathyamangalam, Erode, Tamil Nadu.",
  keywords: [
    "The Rolling Oven",
    "The Rolling Oven Bakery",
    "Bakery in Sathyamangalam",
    "Best bakery in Erode",
    "Order cakes online Sathyamangalam",
    "Online cake delivery Erode",
    "Custom birthday cakes Sathyamangalam",
    "Best cupcakes Sathyamangalam",
    "Eggless cakes Sathyamangalam",
    "Chocolate lava cake Tamil Nadu",
    "Fresh donuts Sathyamangalam",
    "Authentic croissants Erode",
    "Tiramisu dessert Tamil Nadu",
    "Homemade cookies Sathyamangalam",
    "Blueberry muffins Erode",
    "Home baker Sathyamangalam",
    "Bakery shop Gobichettipalayam",
    "Fresh dessert doorstep delivery Tamil Nadu"
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
    title: 'The Rolling Oven | Homemade Bakery in Sathyamangalam, Erode',
    description: 'Freshly baked homemade treats, custom cakes, cupcakes, and desserts. Handcrafted daily in Sathyamangalam, Erode, Tamil Nadu.',
    url: 'https://the-rolling-oven.vercel.app',
    siteName: 'The Rolling Oven',
    images: [
      {
        url: 'https://the-rolling-oven.vercel.app/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'The Rolling Oven Bakery Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rolling Oven | Homemade Bakery in Sathyamangalam, Erode',
    description: 'Freshly baked homemade treats, custom cakes, cupcakes, and desserts in Tamil Nadu.',
    images: ['https://the-rolling-oven.vercel.app/images/logo.webp'],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1A0F08" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css"
        />

        {/* Preconnect to third-party origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://checkout.razorpay.com" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Google Consent Mode v2 + Analytics Initialization */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}

            var savedConsent = null;
            try {
              savedConsent = localStorage.getItem('tro_cookie_consent');
            } catch(e) {}

            if (savedConsent === 'accepted') {
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            } else {
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              if (savedConsent === 'declined') {
                window['ga-disable-G-GWTWBBBDQ2'] = true;
              }
            }

            gtag('js', new Date());
            gtag('config', 'G-GWTWBBBDQ2', {
              'anonymize_ip': true
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GWTWBBBDQ2"
          strategy="afterInteractive"
        />

        {/* Structured Data (Schema.org Entity Disambiguation for Food Bakery) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Bakery", "FoodEstablishment"],
              "name": "The Rolling Oven",
              "alternateName": "The Rolling Oven Bakery",
              "description": "Handcrafted homemade bakery, custom cakes, cupcakes, cookies, and desserts in Sathyamangalam, Erode, Tamil Nadu.",
              "image": "https://the-rolling-oven.vercel.app/images/logo.webp",
              "url": "https://the-rolling-oven.vercel.app",
              "telephone": "+916383645415",
              "email": "therollingoven26@gmail.com",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash on Delivery, UPI, Credit Card, Debit Card",
              "servesCuisine": "Bakery, Desserts, Pastries, Custom Cakes",
              "hasMenu": "https://the-rolling-oven.vercel.app/#showcase",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.5034,
                "longitude": 77.2393
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sathyamangalam",
                "addressRegion": "Tamil Nadu",
                "postalCode": "638401",
                "addressCountry": "IN"
              },
              "areaServed": [
                { "@type": "City", "name": "Sathyamangalam" },
                { "@type": "City", "name": "Erode" },
                { "@type": "City", "name": "Gobichettipalayam" },
                { "@type": "City", "name": "Bhavanisagar" },
                { "@type": "State", "name": "Tamil Nadu" }
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
        {/* Skip-to-content link for keyboard/screen reader users (WCAG 2.1) */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Inject Environment Variables to legacy frontend script */}
        <Script id="env-vars" strategy="beforeInteractive">
          {`window.RAZORPAY_KEY = "${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}";`}
        </Script>

        {/* ===== PARTICLES CANVAS ===== */}
        <canvas id="particles-canvas" aria-hidden="true"></canvas>

        {/* ===== NAVBAR ===== */}
        <Navbar />

        {/* ===== CART DRAWER ===== */}
        <CartDrawer />

        {/* ===== CHECKOUT MODAL ===== */}
        <OrderModal />

        {/* ===== PAGE CONTENT ===== */}
        {children}

        {/* ===== TOAST CONTAINER ===== */}
        <ToastContainer />

        {/* ===== FOOTER ===== */}
        <Footer />

        {/* ===== FLOATING WHATSAPP BUTTON ===== */}
        <FloatingWhatsApp />

        {/* ===== COOKIE CONSENT ===== */}
        <CookieConsent />

        {/* ===== PWA SERVICE WORKER REGISTRATION ===== */}
        <Script id="pwa-sw" strategy="lazyOnload">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(reg) {
                    console.log('PWA ServiceWorker registered with scope:', reg.scope);
                  })
                  .catch(function(err) {
                    console.warn('PWA ServiceWorker registration failed:', err);
                  });
              });
            }
          `}
        </Script>

        <Script src="/main.js?v=9" strategy="lazyOnload" type="module" />
      </body>
    </html>
  );
}
