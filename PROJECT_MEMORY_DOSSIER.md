# 🎓 THE ROLLING OVEN — MASTER PROJECT DOSSIER & MBA ANALYTICS MEMORY ARCHIVE

---

## 📌 Executive Overview & Project Identity
* **Project Name:** The Rolling Oven (Artisan Bakery E-Commerce & Analytics Platform)
* **Live Deployment:** [https://the-rolling-oven.vercel.app](https://the-rolling-oven.vercel.app)
* **Repository:** `https://github.com/sugan0025/the-rolling-oven.git` (Branch: `master`)
* **Technology Stack:** Next.js (App Router, Turbopack, SSG), TypeScript, Vanilla CSS (Design System v2), Supabase (PostgreSQL), Google Analytics 4 (`G-GWTWBBBDQ2`), Google Search Console, EmailJS Proxy Architecture.
* **Target Market:** Sathyamangalam, Erode, Gobichettipalayam, Coimbatore, Tamil Nadu, India.
* **Student Focus:** MBA in Business Analytics & Marketing Management.

---

## ⏱️ Project Metrics & Scope of Work
* **Total Time Invested:** ~28–32 hours of active engineering, debugging, UI design iteration, and digital marketing pipeline authoring across 26+ major milestones.
* **Total Commits & Deploys:** 40+ production deployments verified on Vercel.
* **Pages Generated:** 15 pre-rendered Static (SSG) pages (Homepage, 7 Category Landing Hubs, Robots, Sitemap, API proxies).

---

## 📂 File Complexity & Engineering Breakdown

### 1. File Worked on the Most:
* **`public/main.js` (1,046 lines | ~42 KB):**
  * *Role:* Core client-side business engine.
  * *Components Handled:* Dynamic `localStorage` cart state, Lenis smooth scrolling integration, 3D particle canvas system, interactive Today's Favorites carousel, dynamic URL hash synchronization via `history.replaceState()`, instant double-submission prevention lock, and GA4 event dispatchers (`view_item_list`, `add_to_cart`, `remove_from_cart`, `purchase`, `generate_lead`).

### 2. Primary Architectural Files:
* **`src/app/layout.tsx` (357 lines):** Global persistent layout containing shared Navbar, Mobile Drawer, Slide-out Cart Sidebar, Checkout Modal with Address & Honeypot traps, Footer, and Schema.org `Bakery` LocalBusiness JSON-LD structured data.
* **`src/app/category/[slug]/page.tsx` (215 lines):** Dynamic SSG routes rendering dedicated landing pages for each product category with unique SEO metadata, Open Graph cards, Product `ItemList` schema, and `BreadcrumbList` rich snippets.
* **`src/app/page.tsx` (247 lines):** High-converting landing page hub featuring Hero, Infinite Category Showcase Belt, Story, Testimonials, and Contact Inquiry Form.
* **`src/app/api/order/route.ts` (145 lines):** Secure backend order handler. Features IP rate limiting, Zod schema validation, honeypot anti-spam filtering, server-side catalog price recalculation against `products.ts`, dual EmailJS dispatches (Customer Receipt + Owner Notification), and Supabase database insertion.
* **`src/lib/products.ts` (185 lines):** Single Source of Truth (SSOT) catalog module powering both frontend SSR/SSG rendering and backend price integrity checks.
* **`src/app/globals.css` (1,158 lines):** Custom CSS design system (v2) with zero framework bloat, tailored dark luxury palette (`--brown-deep`, `--gold`, `--cream`), glassmorphism, responsive grid breakpoints, and animations.

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

## 📈 MBA BUSINESS ANALYTICS & MARKETING FRAMEWORK

When we begin our new session, here are the core MBA analytical frameworks and metrics we will explore using your live data:

```
      AWARENESS (Instagram / SEO)
          │  [Sessions, First User Source, UTM Campaign]
          ▼
      INTEREST & ENGAGEMENT
          │  [Engagement Time, Page Views, view_item_list]
          ▼
     CONSIDERATION
          │  [add_to_cart, Cart Abandonment Rate]
          ▼
      CONVERSION (The Order)
          │  [Conversion Rate %, Customer Acquisition Cost (CAC), Order Value]
          ▼
      RETENTION & LTV
             [Repeat Order Rate, Customer Lifetime Value (CLV)]
```

### Key Business Metrics to Interpret:
1. **CAC (Customer Acquisition Cost):** How much marketing effort/spend was required to acquire a customer via Instagram vs. organic search.
2. **Conversion Rate (CR %):** `(Total Completed Orders / Total Site Sessions) * 100`.
3. **Cart Abandonment Rate:** `(1 - (Purchases / Add to Carts)) * 100`.
4. **ROAS (Return on Ad Spend) & Attribution:** Multi-touch vs. First-touch attribution modeling using UTM parameters (`utm_source=instagram`, `utm_medium=bio`, `utm_campaign=cupcakes`).
5. **Geographic Clustering Analysis:** Evaluating regional demand density (e.g. Coimbatore vs. Sathyamangalam vs. Erode).

---

## 🚀 Status for the Next Session
* All code is committed, build verified, and running live on production.
* Google Analytics 4 is actively logging live traffic from Tamil Nadu and tracking key events.
* Memory is preserved in this master dossier.
