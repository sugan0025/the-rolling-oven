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
    default: "The Rolling Oven | Artisan Bakery in Tamil Nadu (Chennai, Coimbatore, Theni)",
    template: "%s | The Rolling Oven"
  },
  description: "Freshly baked artisan treats, custom cakes, cupcakes, and desserts made with love. Serving Chennai, Coimbatore, Theni, Sathyamangalam, and Erode in Tamil Nadu.",
  keywords: [
    "The Rolling Oven", 
    "Artisan Bakery Tamil Nadu", 
    "Custom cakes Chennai", 
    "Best cupcakes Coimbatore", 
    "Fresh desserts Theni",
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
    description: 'Freshly baked artisan treats, custom cakes, cupcakes, and desserts. Serving Chennai, Coimbatore, Theni, Sathyamangalam, and Erode.',
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
              "telephone": "+919876543210",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Theni",
                "Chennai",
                "Coimbatore",
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
                "https://instagram.com/therollingoven"
              ]
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${dancingScript.variable}`}>
        {children}
        <Script src="/main.js" strategy="lazyOnload" type="module" />
      </body>
    </html>
  );
}
