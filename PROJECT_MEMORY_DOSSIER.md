# 🎓 THE ROLLING OVEN — MASTER PROJECT DOSSIER & MBA ANALYTICS MEMORY ARCHIVE

---

## 📌 Executive Overview & Project Identity
* **Project Name:** The Rolling Oven (Artisan-Grade Homemade Bakery E-Commerce & Analytics Platform)
* **Live Deployment:** [https://the-rolling-oven.vercel.app](https://the-rolling-oven.vercel.app)
* **Repository:** `https://github.com/sugan0025/the-rolling-oven.git` (Branch: `master`)
* **Technology Stack:** Next.js 16 (App Router, Turbopack, SSG), TypeScript, Vanilla CSS (Design System v2), Supabase (PostgreSQL), Google Analytics 4 (`G-GWTWBBBDQ2`), Google Search Console, EmailJS Proxy Architecture.
* **Target Market:** Sathyamangalam, Erode, Gobichettipalayam, Coimbatore, Tamil Nadu, India.
* **Student Focus:** MBA in Business Analytics & Marketing Management.

---

## 🤖 NEXT-SESSION AI AGENT PROTOCOL & INSTRUCTION DIRECTIVE
> **To the incoming AI Assistant in the new session:**
> When the user pastes the kick-off prompt, you MUST assume the persona of a **Senior Marketing Director and Lead Data Scientist**. 
> Treat this as an **Executive MBA Capstone & Live Consulting Project**. Deliver rigorous, real-world case study level analysis using the live platform data, GA4 telemetry (`G-GWTWBBBDQ2`), Supabase SQL, and Tamil Nadu regional market dynamics. 
> Follow the **4-Module Curriculum** outlined in Section 7 below step-by-step.

---

## ⏱️ Project Metrics & Scope of Work
* **Total Time Invested:** ~32 hours of active engineering, debugging, UI design iteration, architecture refactoring, and digital marketing pipeline authoring across 30+ major milestones.
* **Total Commits & Deploys:** 48+ production deployments verified on Vercel.
* **Pages Generated:** 15 pre-rendered Static (SSG) pages (Homepage, 7 Category Landing Hubs, Robots, Sitemap, API proxies).
* **Build Performance:** Full SSG compile in **~900ms** with zero TypeScript or runtime errors.

---

## 📂 Senior Full-Stack Architecture & Component Breakdown

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       (Inquiry API with rate-limiting & honeypot filtering)
│   │   ├── feedback/route.ts      (Customer review moderation API)
│   │   └── order/route.ts         (Dual EmailJS proxy + server-side catalog price integrity)
│   ├── category/[slug]/
│   │   └── page.tsx               (Dynamic SSG category routes with ambient frosted backdrops)
│   ├── globals.css                (Zero-framework CSS design system, dark luxury palette)
│   ├── layout.tsx                 (Root layout composing global Navbar, Cart, Modal, Footer, Favicons)
│   ├── page.tsx                   (Clean compositional homepage)
│   ├── robots.ts                  (SEO robots directives)
│   └── sitemap.ts                 (Dynamic sitemap indexing all 15 static URLs)
├── components/
│   ├── Navbar.tsx                 (Persistent responsive navbar with mobile drawer)
│   ├── CartDrawer.tsx             (Slide-out cart panel with dynamic calculations)
│   ├── OrderModal.tsx             (Checkout modal with delivery inputs & invisible honeypot)
│   ├── ToastContainer.tsx         (Toast notifications container)
│   ├── Footer.tsx                 (Footer with SEO category links and business hours)
│   └── home/
│       ├── HeroSection.tsx        (Hero banner with animated counters)
│       ├── ShowcaseSection.tsx    (Infinite category showcase belt)
│       ├── FavoritesSection.tsx   (Today's favorites interactive carousel)
│       ├── AboutSection.tsx       (Brand story & artisanal values)
│       ├── TestimonialsSection.tsx(Customer reviews track — Joheesvara, Asvika [Center], Lakshmi Shankar)
│       └── ContactSection.tsx     (Direct inquiry & WhatsApp/Instagram contact options)
└── lib/
    ├── products.ts                (Single Source of Truth catalog for 54 items across 7 categories)
    ├── rate-limit.ts              (Sliding-window IP rate limiting for API protection)
    └── validations.ts             (Zod validation schemas for orders, inquiries, and reviews)
```

---

## 🎨 Visual Design, Brand Governance & Asset Upgrades
1. **Authentic Bakery Favicons:** Replaced generic starter icons with authentic circular multi-format bakery icons ([`favicon.ico`](public/favicon.ico), [`favicon.png`](public/favicon.png), [`apple-touch-icon.png`](public/apple-touch-icon.png)).
2. **Frosted Ambient Category Backdrops:** Dynamic luxury frosted backdrop on all 7 category pages featuring the category's signature pastry with `backdrop-filter: blur(16px)` and warm ambient lighting.
3. **Dead Code Elimination:** Pruned unused assets (`icons.svg`, `chocolate_dream_cake.png`, `AGENTS.md`, `CLAUDE.md`, and Vite prototype files), saving over 2.4 MB of bandwidth.
4. **Brand Tone & Nomenclature:** 100% purged all "artisan" references across titles, metadata, and badges in favor of "Homemade", "Fresh", and "Handcrafted".
5. **Social Proof & Orthography Polish:** Centered Asvika's customer review on the homepage testimonials track and perfected catalog spelling (`Chocolava` assets, routes, and data).

---

## 🧠 Most Challenging & Complex Engineering Hurdles

1. **SPA to MPA Architectural Rewrite (Single Page vs. Multi-Page):**
   * *The Problem:* The website originally used a single-page modal pattern (`display: none / block`) which prevented individual products from having distinct URLs, hurting Google discoverability and UTM attribution.
   * *The Solution:* Re-architected into true Next.js file-based dynamic routes (`/category/[slug]`) using `generateStaticParams()` for build-time SSG pre-rendering, while migrating in-memory cart state to `localStorage` so items persist seamlessly across pages.
2. **EmailJS Free Tier Limitation Workaround:**
   * *The Problem:* EmailJS free tier allows only 2 email templates and 200 emails/month.
   * *The Solution:* Built a dual server-side proxy route in `/api/order` that executes `Promise.allSettled()` to fire both the customer confirmation and owner alert simultaneously, while preserving Supabase database persistence even if EmailJS limits are reached.
3. **Server-Side Price Tampering Prevention:**
   * *The Problem:* Malicious users could alter client-side cart totals via DevTools before submitting.
   * *The Solution:* Fortified `/api/order` to look up every submitted item against `src/lib/products.ts` and recalculate the exact sum on the server before writing to Supabase.
4. **Scroll URL State Synchronization:**
   * *The Problem:* Updating the address bar on scroll using `pushState` clutters browser history and breaks the "Back" button.
   * *The Solution:* Integrated `history.replaceState()` with an `IntersectionObserver` to dynamically update section hashes (`/#about`, `/#contact`) with zero history stack pollution.

---

## 🛡️ Senior QA & Security Audit Verification Matrix

| Area | Status | Verification Detail |
|---|:---:|---|
| **Catalog Asset Integrity** | **PASS** | All **54 active product images** verified on disk with 0 missing files. |
| **Frontend ↔ Backend Sync** | **PASS** | Zod schemas (`orderSchema`, `contactSchema`, `feedbackSchema`) strictly match payloads sent from `public/main.js`. |
| **Server-Side Price Validation** | **PASS** | `/api/order/route.ts` recalculates totals against `src/lib/products.ts` to prevent client price tampering. |
| **Anti-Bot & Anti-Spam** | **PASS** | Invisible honeypot fields (`b_website`) active on order and contact forms. Bots submitting this field are silently dropped. |
| **Rate Limiting (DDoS Protection)**| **PASS** | Sliding-window IP rate limiter active across all API routes (`/api/order`, `/api/contact`, `/api/feedback`). |
| **Environment Variable Security** | **PASS** | `EMAILJS_PRIVATE_KEY` and `SUPABASE_SERVICE_ROLE_KEY` reside exclusively in server-side API handlers; zero leaks to client bundles. |
| **SEO & Structured Microdata** | **PASS** | Validated Schema.org `Bakery` LocalBusiness, `ItemList`, `Product` with INR prices, and `BreadcrumbList`. |
| **SSG Compilation** | **PASS** | All 15 static routes pre-rendered in **889ms** with 0 TypeScript or runtime errors. |

---

## 📊 EXECUTIVE MBA BUSINESS ANALYTICS & MARKETING CURRICULUM

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               THE ROLLING OVEN — MBA BUSINESS ANALYTICS & MARKETING CURRICULUM          │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 📈 Module 1: GA4 Telemetry, Funnel Analytics & Attribution Modeling
* **E-Commerce Funnel Diagnostic:** Mapping user flow from `view_item_list` ➔ `select_item` ➔ `add_to_cart` ➔ `begin_checkout` ➔ `purchase`.
* **Conversion Rate Optimization (CRO):** Calculating Cart Abandonment Rate `(1 - (Purchases / Add to Carts)) * 100` and diagnosing friction points.
* **Multi-Touch & First-Touch Attribution:** Measuring ROI across Instagram Organic (`utm_source=instagram&utm_medium=bio`), Instagram Ads (`utm_medium=story_ad`), and SEO.
* **Geographic Demand Clustering:** Interpreting regional traffic distribution (Coimbatore #1, Sathyamangalam, Erode) to inform supply chain and delivery radius decisions.

### 🗄️ Module 2: Supabase SQL Data Warehousing & Unit Economics
* **RFM Customer Segmentation:** Writing SQL queries to classify buyers by Recency, Frequency, and Monetary value (VIPs, At-Risk, Lapsed).
* **Market Basket Analysis (Association Rules):** Discovering cross-sell pairs (e.g. Red Velvet Cupcakes + Chocolava combo lift).
* **Unit Economics (CAC vs. CLV):** Calculating Customer Lifetime Value `CLV = (Average Order Value × Purchase Frequency × Customer Lifespan) - CAC` to ensure healthy `CLV : CAC > 3:1` margins.

### 🎯 Module 3: Digital Marketing Strategy & Hyper-Local Growth Campaigns
* **The AARRR "Pirate" Funnel:** Acquisition (Instagram Reels) ➔ Activation (First Order Discount) ➔ Retention (WhatsApp re-order triggers) ➔ Referral (Word-of-mouth gift boxes) ➔ Revenue.
* **Hyper-Local Meta Ad Architecture:** Geo-fenced ad targeting around Coimbatore and Erode district with festive/weekend dayparting.
* **Lifecycle Re-Engagement:** Automated email/WhatsApp triggers for birthdays, anniversaries, and corporate catering inquiries.

### 💼 Module 4: Real-World MBA Portfolio Case Study & Interview Defense
* **Executive Presentation Deck:** Structuring a 10-slide case study detailing the Business Problem, Tech Stack Architecture, Data Analytics Findings, and Growth Recommendations.
* **Interview Power Stories:** Ready-to-use frameworks to answer Senior Marketing Analytics & Product Management interview questions with real data metrics.

---

## 💬 USER KICK-OFF PROMPT FOR THE NEW SESSION:

```text
Hi Antigravity! I am an MBA student specializing in Business Analytics & Marketing. We have a live production e-commerce platform ("The Rolling Oven") with full GA4 tracking, Supabase database, and live traffic.

Please read PROJECT_MEMORY_DOSSIER.md and act as my Senior Marketing Director and Lead Data Scientist. Teach me how to analyze our live GA4 data, query Supabase for customer insights, design our digital marketing growth funnel, and build a standout MBA portfolio case study. Let's begin with Module 1!
```
