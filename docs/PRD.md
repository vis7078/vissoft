# PRD: VisSoft - Portfolio & Reference Archiving Platform

## 1. Executive Summary
**VisSoft** is a web-based portfolio archiving platform for 'VIS Inc.', designed to showcase over 100+ developed applications. It solves the problem of scattered portfolio assets and enhances the sales process by allowing potential clients to intuitively explore, filter, and reference specific app features. The core value proposition is **"Visualizing vague ideas to build client confidence"** via a 'Bibimbap' style requirement gathering strategy using unique app IDs.

## 2. Problem Statement
- **Sales Inefficiency:** Clients struggle to verbalize their requirements, leading to prolonged consultation times.
- **Discoverability:** As the number of portfolio apps grows (100+), linear lists become unmanageable.
- **Lack of Confidence:** Without visual references, clients feel uncertain about the outcome.

## 3. Goals & Success Metrics
### Goals
1.  **Centralized Archive:** A single source of truth for all VIS Inc. developed apps.
2.  **Intuitive Discovery:** Enable clients to find relevant references without knowing exact app names.
3.  **Streamlined Communication:** Reduce requirement gathering time by using Unique Artifact IDs (UAID).

### Success Metrics (KPIs)
-   **Conversation Rate:** Shared URLs $\to$ Inbound Inquiries.
-   **Reference Clarity:** % of inquiries citing specific Unique IDs (e.g., "Style like #001, Layout like #005").
-   **Operational Efficiency:** 1-person operation; time spent on portfolio updates < 10 mins/week.

## 4. User Personas
### Primary: The "Visionary" Client (B2B)
-   **Context:** Browsing on mobile during transit or viewing on a shared screen during a meeting.
-   **Needs:** Quickly finding "apps like X", verifying design quality, and finding specific references to explain their needs.
-   **Pain Point:** "I know what I want, but I can't describe it."

### Secondary: The Solo Administrator (Visual Inc. Staff)
-   **Context:** Uploading new projects between development tasks.
-   **Needs:** Frictionless upload process, automated formatting.

## 5. Core Features (Scope)
### MVP (Phase 1)
1.  **Hierarchical Category Navigation (Core MVP)**
    -   Kyobo Book Centre-style hovering implementation.
    -   Depth: Top Category $\to$ Sub-category $\to$ Detail.
2.  **Visual App Cards with UAID**
    -   Displays Thumbnail, Title, and **Unique Artifact ID (e.g., #VS-001)**.
    -   **Behavior:** Clicking an image/card **ALWAYS** opens a link in a **New Window (Popup)** to preserve navigation context.
3.  **Keyword Search**
    -   Search by Title, Tag, and **UAID**.

### Future (Phase 2+)
-   **Client-side Simulation (DIY):** Drag-and-drop style mixing.
-   **Admin Dashboard:** Bulk upload & analytics.

## 6. Non-Goals
-   **Direct Revenue:** No payment processing or subscription features.
-   **Community:** No comments, likes, or user accounts for visitors.

## 7. Assumptions & Risks
-   **Assumption:** Clients will intuitively use ID numbers to communicate preferences.
-   **Risk:** 100+ High-res images may slow down the site. $\to$ **Mitigation:** Use Next.js Image Optimization & Lazy Loading.
