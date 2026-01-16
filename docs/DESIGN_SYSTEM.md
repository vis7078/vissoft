# Design System: Creative Violet

## 1. Visual Identity
-   **Keywords:** Structured, Reliable, Creative, Innovative.
-   **Inspiration:** Kyobo Book Centre (Layout) + Modern SaaS (Color).

## 2. Color Palette
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Primary** | `linear-gradient(135deg, #6B46C1, #9F7AEA)` | Main Actions, Brand Headers |
| **Secondary** | `#805AD5` (Violet-600) | Hover states, Accents |
| **Background** | `#F7FAFC` (Slate-50) | App Background (Clean) |
| **Surface** | `#FFFFFF` | Cards, Modals |
| **Text Primary** | `#1A202C` (Gray-900) | Headings, Titles |
| **Text Secondary** | `#718096` (Gray-500) | Descriptions, Meta info |
| **Border** | `#E2E8F0` (Gray-200) | Dividers, Card Outlines |

## 3. Typography
-   **Font Family:** `Pretendard` (Web Variable). Excellent Korean/English readability.
-   **Scale:**
    -   H1: 2.5rem (Bold) - Main Pages
    -   H2: 1.5rem (SemiBold) - Section Titles
    -   Body: 1rem (Regular) - General Text
    -   Caption: 0.875rem (Medium) - **UAID Tags**

## 4. Components
### Card (App Item)
-   **Layout:** Vertical Stack (Image Top / Info Bottom).
-   **Behavior:** Scale up 102% on Hover + Shadow-lg.
-   **Badge:** UAID Badge on Top-Right (always visible).

### Navigation (Mega Menu)
-   **Desktop:** Top Bar. Hovering categories expands full-width dropdown (Mega Menu).
-   **Mobile:** Hamburger Menu $\to$ Accordion Slide-out.

### Modal/Popup
-   **Not used for detailed view in MVP.** Clicking image directly triggers `window.open(url, '_blank')`.
