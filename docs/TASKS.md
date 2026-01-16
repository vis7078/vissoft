# AI 개발 태스크 (M0 - M5)

본 문서는 `docs/design/code.html`에 정의된 구글 스티치 디자인을 실제 Next.js 애플리케이션으로 구현하기 위한 단계별 지침서입니다. 각 태스크는 AI 코딩 파트너가 수행할 수 있도록 구체적인 자연어로 작성되었습니다.

## M0: 프로젝트 초기화
- [ ] **Next.js & Supabase 설정**
    - `TRD.md`에 정의된 스택(Next.js App Router, TypeScript, Tailwind CSS)으로 프로젝트를 초기화해.
    - `docs/design/code.html`의 11~43라인에 있는 `tailwind.config` 설정을 `tailwind.config.ts`에 그대로 이식해줘. 특히 `colors` (primary, secondary 등)와 `backgroundImage` 설정을 정확히 코드로 옮겨야 해.
    - Google Fonts(`Manrope`, `Noto Sans`)와 `Material Symbols Outlined` 아이콘을 `app/layout.tsx`에 로드하도록 설정해.

## M1: UI 및 디자인 시스템 구축
- [ ] **레이아웃 및 헤더 컴포넌트 구현**
    - `docs/design/code.html`의 `<header>` 섹션(라인 65~92)을 참조하여 `Header.tsx` 컴포넌트를 만들어.
    - 로고 영역, "Browse Categories" 드롭다운 트리거, "Sign Up" 버튼의 스타일을 HTML 그대로 구현해줘.
    - 모바일 반응형 처리를 위해 `md:hidden` 클래스가 적용된 햄버거 메뉴 버튼도 포함되어야 해.
- [ ] **히어로 섹션 구현**
    - `docs/design/code.html`의 Hero Section(라인 96~122)을 참조하여 `Hero.tsx` 컴포넌트를 구현해.
    - 배경 그라데이션(`bg-hero-gradient`)과 장식용 블러 원형 요소(라인 120~121)가 정확히 렌더링되도록 CSS를 작성해줘.
    - 중앙의 검색바 디자인(그림자효과, 둥근 모서리)을 그대로 살려야 해.
- [ ] **사이드바 필터 컴포넌트 구현**
    - `docs/design/code.html`의 `<aside>` 섹션(라인 126~167)을 참조하여 `Sidebar.tsx`를 만들어.
    - "Filters"와 "Tags" 섹션을 구분하고, 태그의 체크박스 스타일과 호버 효과를 동일하게 적용해줘.

## M2: 데이터베이스 및 어드민, 데이터 시딩
- [ ] **스키마 및 데이터 설정**
    - `DATABASE_DESIGN.md`를 참조하여 Supabase에 `apps`와 `categories` 테이블을 생성해.
    - 디자인 파일(`docs/design/code.html`)에 있는 8개의 예시 앱 데이터(RenderEngine, StructFlow 등)를 초기 데이터(Seed Data)로 넣어줘. 각 앱의 이미지 URL과 태그 정보도 그대로 사용해.

## M3: 핵심 기능 개발 (MVP)
- [ ] **FEAT-1: 계층형 카테고리 메뉴 (Mega Menu)**
    - `Header.tsx`의 "Browse Categories"에 마우스를 올렸을 때 펼쳐지는 메가 메뉴를 구현해.
    - `PRD.md`와 `USER_FLOW.md`에 명시된 대로 "교보문고 스타일"의 밀도 높은 계층 구조를 보여줘야 해. 디자인 파일에는 드롭다운 내부가 없으므로, `DESIGN_SYSTEM.md`의 스타일을 따라 확장해서 구현해줘.
- [ ] **FEAT-2: 앱 그리드 및 카드 구현**
    - `docs/design/code.html`의 App Grid 섹션(라인 170~)과 Card HTML(라인 172~220)을 참조하여 `AppCard.tsx`를 만들어.
    - **핵심 요구사항:**
        - 이미지 비율 `aspect-[4/3]` 준수.
        - **UAID 뱃지(#001)**가 이미지 우측 상단에 절대 위치로 고정되어야 해.
        - 마우스 호버 시 카드가 위로 살짝 떠오르는(`-translate-y-1`) 인터랙션을 반드시 구현해.
    - 카드를 클릭했을 때 `window.open()`을 사용하여 외부 링크가 **새 탭**에서 열리도록 처리해줘.
- [ ] **FEAT-3: 검색 기능 연동**
    - Hero 섹션의 검색바(Input)에 입력된 키워드로 Supabase에서 앱을 실시간으로 필터링하는 기능을 `useSearch` 훅으로 구현해.

## M4: 마무리 및 배포
- [ ] **반응형 및 디테일 점검**
    - 모바일 화면에서 사이드바가 어떻게 동작할지 결정하고 구현해 (디자인 파일에는 데스크탑 사이드바만 있음, 모바일에서는 숨기거나 드로어 메뉴로 변환 필요).
    - `Pagination` 버튼(라인 303)을 구현하여 "Load More" 기능을 활성화해.
    - Vercel에 배포하고, 모든 이미지가 정상적으로 최적화(`next/image`)되어 로딩되는지 확인해.

## 자가 수정(Self-Correction) 지침
- 개발 과정에서 생성된 화면이 `docs/design/screen.png` (참조용 스크린샷) 및 `docs/design/code.html`의 구조와 일치하는지 수시로 확인해.
- 특히 **보라색 그라데이션**과 **폰트 스타일(Manrope, Noto Sans)**이 원본 디자인과 다르게 적용되지 않도록 주의해.
