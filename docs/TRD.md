# TRD: VisSoft Technical Architecture

## 1. System Architecture Overview
The system follows a **Serverless jamstack** architecture to support 1-person operation and low maintenance costs.
-   **Frontend:** Next.js (App Router)
-   **Backend/DB:** Supabase (PostgreSQL + Auth + Storage)
-   **Deployment:** Vercel

## 2. Technology Stack
### Frontend
-   **Framework:** **Next.js 14+ (App Router)** - Best for SEO and performance.
-   **Language:** TypeScript - For type safety.
-   **Styling:** **Tailwind CSS** - Rapid UI development with "Creative Violet/Gradient" theme.
-   **State Management:** Zustand (if complex state needed) or React Context.
-   **Iconography:** Lucide React.

### Backend & Database (Supabase)
-   **Database:** PostgreSQL (Relationally structured for Categories/Apps).
-   **Auth:** Supabase Auth (Email/Password) - Admin access only.
-   **Storage:** Supabase Storage - Hosting high-res app screenshots.

### Infrastructure
-   **Hosting:** Vercel (Auto-deploy from GitHub).
-   **Image Optimization:** `next/image` allowing external source (Supabase).

## 3. Key Technical Decisions
-   **Routing Strategy:** Dynamic routes for categories `/[category]/[subcategory]`.
-   **Image Performance:** Since "Visuals" are key, use `blur` placeholders and lazy loading.
-   **Search Implementation:**
    -   Phase 1: Database `ILIKE` query (sufficient for <500 items).
    -   Phase 2: PostgreSQL Full Text Search or external search engine.

## 4. Non-Functional Requirements
-   **Performance:** LCP (Largest Contentful Paint) < 1.2s even with image grids.
-   **Mobile Responsiveness:** "Mobile-First" CSS approach. All navigation must work on touch devices (Hover menus adapt to Click/Tap).
-   **Reliability:** 99.9% Uptime (Vercel/Supabase SLA).

## 5. Security & Permissions
-   **Public Access:** Read-only access to all App lists and details.
-   **Admin Access:** Write/Delete/Update access restricted to Authenticated Admin Users via RLS (Row Level Security) policies.

## 6. Data Lifecycle
-   **Retention:** Indefinite (Portfolio data).
-   **Backup:** Supabase Point-in-Time Recovery (PITR).
