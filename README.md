<div align="center">

# 🥐 The Rolling Oven — Artisan Bakery & D2C Analytics Platform

[![Live Platform](https://img.shields.io/badge/Live_Deployment-the--rolling--oven.vercel.app-E28743?style=for-the-badge&logo=vercel&logoColor=white)](https://the-rolling-oven.vercel.app)
[![Next.js 16](https://img.shields.io/badge/Next.js_16-App_Router-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Database-Supabase_PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![GA4 Telemetry](https://img.shields.io/badge/Analytics-Google_Analytics_4-E37400?style=for-the-badge&logo=google-analytics&logoColor=white)](https://analytics.google.com/)

<p align="center">
  <b>A high-performance, direct-to-consumer e-commerce storefront engineered with Next.js 16, Supabase PostgreSQL, and Google Analytics 4 telemetry.</b><br>
  Built with sub-second SSG compile times, zero aggregator commissions, and real-time business intelligence tracking.
</p>

[Explore Live Storefront](https://the-rolling-oven.vercel.app) • [View Architecture](#-system-architecture) • [Analytics Telemetry](#-analytics--business-intelligence) • [Tech Stack](#-technology-stack)

</div>

---

## 📌 Executive Overview

**The Rolling Oven** is an artisan-grade homemade bakery platform serving Sathyamangalam, Erode, Gobichettipalayam, and Coimbatore in Tamil Nadu, India. 

Designed as a **Full-Stack D2C Commerce & Growth Analytics Engine**, the platform eliminates the 25%–35% commission fees imposed by third-party delivery aggregators while retaining 100% first-party customer ownership, automated order processing, and conversion rate optimization (CRO) telemetry.

### 🌟 Key Performance Metrics
* ⚡ **Sub-Second SSG Build:** Full static-site generation (SSG) of 15 dynamic routes in **<900ms**.
* 🎯 **Top-of-Funnel Conversion:** Verified **83.33%** transition rate from storefront landing to category exploration.
* 🛡️ **Zero-Trust Price Integrity:** Server-side price recalculation preventing client-side DevTools tampering.
* 📦 **Zero Asset Waste:** 54 verified high-res product assets with 100% disk-to-catalog synchronization.

---

## 🏗️ System Architecture

```mermaid
graph TD
    User([Customer / Mobile Browser]) -->|HTTPS / Next.js SSG| CDN[Vercel Edge Network]
    
    subgraph "Frontend Layer (Next.js 16 App Router)"
        CDN --> Home[Homepage / Hero Showcase]
        CDN --> CatRoute[/category/[slug] Dynamic SSG Hubs/]
        CDN --> Cart[Persistent localStorage Cart]
        CDN --> Checkout[1-Step Checkout Modal]
    end
    
    subgraph "Analytics & Telemetry Layer"
        User -.->|Event Stream| GA4[Google Analytics 4: G-GWTWBBBDQ2]
        GA4 --> Funnel[Funnel Exploration & Attribution Modeling]
    end

    subgraph "API & Security Layer (/api/order)"
        Checkout -->|POST Order Payload| RateLimit[Sliding-Window IP Rate Limiter]
        RateLimit --> HoneyPot{Honeypot Triggered?}
        HoneyPot -->|Yes (Bot)| SilentDrop[200 OK Silent Drop]
        HoneyPot -->|No| ZodValidator[Zod Schema Validation]
        ZodValidator --> PriceEngine[Server-Side Price Recalculation Engine]
    end

    subgraph "Persistence & Dispatch Layer"
        PriceEngine --> DB[(Supabase PostgreSQL Ledger)]
        PriceEngine --> PromiseAll[Promise.allSettled Multi-Dispatch]
        PromiseAll --> EmailCustomer[EmailJS: Customer Receipt]
        PromiseAll --> EmailOwner[EmailJS: Owner Order Dispatch]
    end
```

---

## 📈 Analytics & Business Intelligence (GA4 & SQL)

The platform integrates end-to-end e-commerce telemetry mapped to an **MBA Analytics & Funnel Optimization Framework**:

### 1. Funnel Telemetry Architecture
* `view_item_list` ➔ Tracked across category hubs and the infinite showcase belt.
* `select_item` ➔ Measured on modal item inspection and flavor selections.
* `add_to_cart` ➔ Real-time cart state synchronization with quantity controls.
* `begin_checkout` ➔ Form focus and checkout modal engagement.
* `purchase` ➔ Verified order generation with server-validated transaction value.

### 2. Multi-Touch Attribution Modeling
Standardized UTM parameters capture traffic sources across Instagram Reels, Meta Ads, WhatsApp VIP groups, and local Google Search packs:
```
utm_source=instagram & utm_medium=reel_organic & utm_campaign=chocolava_viral
```

### 3. Geographic Demand Clustering
Telemetry captures regional intent across Western Tamil Nadu to optimize local fulfillment logistics:
* **Sathyamangalam:** Core 30-minute hyper-local delivery ring.
* **Coimbatore & Erode:** High Average Order Value (AOV) pre-order batches and weekend celebration gifting.

---

## 🛡️ Senior Security & Engineering Highlights

| Feature | Implementation | Business / Security Impact |
|---|---|---|
| **Server-Side Price Validation** | Strict lookup against `src/lib/products.ts` | Prevents malicious client-side price tampering during checkout. |
| **DDoS Rate Limiting** | Sliding-window IP limiter on all API routes | Protects order and inquiry endpoints against spam floods. |
| **Invisible Honeypot** | Hidden `b_website` input field | Silently drops automated spambot form submissions. |
| **Dual Email Proxy** | `Promise.allSettled` via EmailJS API | Guarantees customer receipt delivery without dropping orders if quotas surge. |
| **Structured Microdata** | Schema.org `Bakery`, `ItemList`, `Product` | Maximizes Google Search rich snippet visibility for local bakery queries. |

---

## 🗂️ Project Structure

```
the-rolling-oven/
├── public/
│   ├── images/products/       # 54 authentic high-res bakery assets
│   ├── favicon.ico / .png     # Circular multi-format branding icons
│   └── main.js                # Client-side UI interactions & toast handlers
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/       # Rate-limited inquiry API
│   │   │   ├── feedback/      # Review moderation API
│   │   │   └── order/         # Order validation & multi-dispatch pipeline
│   │   ├── category/[slug]/   # 7 SSG category routes with frosted glass backdrops
│   │   ├── globals.css        # Zero-framework luxury CSS design system
│   │   ├── layout.tsx         # Root layout with GA4 & Schema.org JSON-LD
│   │   ├── page.tsx           # High-converting modular homepage
│   │   ├── robots.ts          # Search engine crawler directives
│   │   └── sitemap.ts         # Dynamic XML sitemap indexing all 15 routes
│   ├── components/            # Reusable UI modules (Navbar, Cart, Modal, Footer)
│   └── lib/
│       ├── products.ts        # Single Source of Truth (SSOT) 54-item catalog
│       ├── rate-limit.ts      # Sliding-window IP rate limiter
│       └── validations.ts     # Strict Zod validation schemas
```

---

## 💻 Local Development Setup

### Prerequisites
* Node.js 18+ or 20+
* npm or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/sugan0025/the-rolling-oven.git
cd the-rolling-oven

# 2. Install dependencies
npm install

# 3. Configure environment variables (.env.local)
cp .env.example .env.local
# Add your NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ANON_KEY, and EMAILJS keys

# 4. Start local Turbopack development server
npm run dev
```
Visit `http://localhost:3000` to preview the live application.

---

## 👨‍💻 Author & Engineering Credits

* **Developer & Analyst:** [Suganesan S (Sugan)](https://github.com/sugan0025)
* **Academic Background:** MBA Candidate in Business Analytics & Marketing, *School of Management Studies, BIT Sathy*
* **Specialization:** E-Commerce Growth Engineering, GA4 Web Telemetry, SQL Data Warehousing & Modern Next.js Applications.

---

<div align="center">
  <sub>Engineered with precision for The Rolling Oven. Handcrafted with Next.js & Supabase.</sub>
</div>
