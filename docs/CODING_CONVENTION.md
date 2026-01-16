# Coding Convention & AI Collaboration Guide

## 1. Core Principles
-   **Trust but Verify:** Always check the rendered output against the "Creative Violet" design system.
-   **Mobile First:** Write CSS for mobile screens first, then add `md:`, `lg:` breakpoints.
-   **Type Safety:** `any` type is strictly forbidden. Define interfaces for `App` and `Category`.

## 2. Project Structure
```
/app
  /(public)      # Public facing routes
    /page.tsx    # Home
    /[category]  # Dynamic Category Pages
  /(admin)       # Authenticated routes
    /admin       # Dashboard
/components
  /ui            # Atoms (Buttons, Inputs)
  /features      # Molecules/Organisms (AppCard, MegaMenu)
/lib
  supabase.ts    # DB Client
  utils.ts       # Helpers
```

## 3. Communication Rules (Prompting)
-   **Context Injection:** When asking for code, always reference the specific functionality from `TASKS.md` (e.g., "Implement FEAT-1 MegaMenu").
-   **Visual Check:** After generating UI code, ask: "Does this match the Kyobo-style density requirement?"

## 4. Code Quality
-   **Naming:**
    -   Components: PascalCase (`AppCard.tsx`)
    -   Functions: camelCase (`fetchApps`)
    -   Constants: UPPER_SNAKE_CASE (`MAX_IMAGE_SIZE`)
-   **Server Components:** Use React Server Components (RSC) by default. Add `"use client"` only when interaction (hooks) is needed.

## 5. Security Checklist
-   [ ] Env vars are prefixed with `NEXT_PUBLIC_` only if non-sensitive.
-   [ ] RLS policies on Supabase are enabled.
-   [ ] No hardcoded admin credentials in code.
