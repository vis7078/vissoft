# User Flow: VisSoft Recommendation Journey

```mermaid
graph TD
    A[Start: Visit VisSoft] --> B{Discovery Method}
    
    %% Keyword Search Flow
    B -->|Search Keyword/ID| C[Search Results Page]
    
    %% Category Browse Flow (MVP Core)
    B -->|Hover Main Menu| D[Mega Menu Expand]
    D -->|Select Sub-Category| E[Category List Page]
    
    %% List Interaction
    E -->|View App Grid| F[App Card]
    C -->|View App Grid| F
    
    %% Card Detail & Action
    F -->|Visual Visuals| G[Check UAID #001]
    F -->|Click Image| H[Open External Link in NEW TAB]
    
    %% Conversion Loop
    G --> I[Copy UAID]
    I --> J[Contact Sales w/ IDs]
    J --> K[End: Successful Inquiry]
    
    %% Admin Flow (Behind Auth)
    L[Admin Login] --> M[Dashboard]
    M --> N[Upload New App]
    N -->|Input Data + Upload Img| O[Update DB/Storage]
    O --> E
```

## Key Flows
1.  **The "Browsing" Loop:** Landing $\to$ Hierarchy Menu $\to$ Filtered Grid $\to$ Popup View.
2.  **The "Reference" Loop:** Spot App $\to$ Note #UAID $\to$ Contact.
