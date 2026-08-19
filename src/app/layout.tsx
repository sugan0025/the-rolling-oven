import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
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
  title: "The Rolling Oven - Artisan Bakery",
  description: "Freshly baked artisan treats made with love in every bite.",
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
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${dancingScript.variable}`}>
        {children}
        {/* We load the vanilla main.js via Next.js script component to preserve exact behavior */}
        <script type="module" src="/main.js"></script>
      </body>
    </html>
  );
}
