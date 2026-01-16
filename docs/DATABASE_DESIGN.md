# Database Design

## ER Diagram
```mermaid
erDiagram
    ADMIN_USERS ||--o{ APPS : manages
    CATEGORIES ||--o{ APPS : classifies
    CATEGORIES ||--o{ CATEGORIES : parent_of

    APPS {
        uuid id PK
        string uaid UK "Unique Artifact ID (e.g. VS-001)"
        string title
        text description
        string thumbnail_url
        string[] gallery_urls
        string external_link "Target URL"
        uuid category_id FK
        timestamp created_at
        jsonb metadata "Tags, Colors, Style attributes"
    }

    CATEGORIES {
        uuid id PK
        string name
        uuid parent_id FK "Self-referencing for Hierarchy"
        int display_order
        string slug
    }

    ADMIN_USERS {
        uuid id PK
        string email
        string password_hash
        string role
    }
```

## Schema Details

### 1. `apps` Table
-   **Storage:** Stores metadata. Actual images are in Supabase Storage buckets (`/apps/{uaid}/*`).
-   **`uaid`:** Human-readable ID (String 6-8 chars). Critical for the "Bibimbap" strategy.
-   **`external_link`:** The destination URL opened in a new tab.

### 2. `categories` Table
-   **Adjacency List Model:** Uses `parent_id` to create infinite depth (though UI limits to 2-3 levels).
-   **`slug`:** For SEO-friendly URLs (e.g., `/game/rpg`).

### 3. Storage Buckets
-   `public-assets`: For UI elements.
-   `portfolio-images`: Read-public, Write-Admin-only.
