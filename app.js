/**
 * VIS GALLERY - Product Showcase Application
 * Neo Brutalism Style Gallery with Category Navigation
 * Version: 1.0.1 (Auto-deployment Test)
 */

// ==========================================
// Real Projects - 실제 개발한 프로젝트들
// ==========================================
const realProducts = [
    {
        id: 1,
        name: 'VISGROVE 자산관리 통합시스템',
        category: 'web',
        categoryName: '웹 애플리케이션',
        categoryIcon: '🌐',
        badgeClass: 'badge-blue',
        description: '대규모 복합시설 VISGROVE를 위한 엔터프라이즈급 자산관리 통합 플랫폼입니다. 임대, 매출, 주차, 시설관리(FM), 청구, 마케팅 등 분산된 업무 프로세스를 하나의 시스템으로 통합하여 관리 효율을 극대화합니다.',
        techStack: ['Next.js 14', 'TypeScript', 'Cloudflare D1', 'Tailwind CSS'],
        date: '2026-01-25',
        image: 'https://picsum.photos/seed/visgrove-asset/600/400',
        demoUrl: 'https://visgrove.com',
        repoUrl: '#',
        isReal: true,
        featured: true,
        features: [
            '계약 및 임대 관리',
            '매출 정산 및 VAN 연동',
            '실시간 주차 모니터링',
            '시설물 점검 및 VOC 관리',
            '공과금 청구 및 세금계산서',
            '이벤트/프로모션 관리'
        ]
    }
];

// ==========================================
// Sample Product Data (100+ items)
// ==========================================
const products = [...realProducts, ...generateSampleProducts()];

function generateSampleProducts() {
    const categories = [
        { id: 'web', name: '웹 애플리케이션', icon: '🌐', color: 'blue' },
        { id: 'mobile', name: '모바일 앱', icon: '📱', color: 'green' },
        { id: 'desktop', name: '데스크톱 앱', icon: '🖥️', color: 'orange' },
        { id: 'api', name: 'API/백엔드', icon: '⚡', color: 'pink' },
        { id: 'ai', name: 'AI/ML 솔루션', icon: '🤖', color: 'purple' },
        { id: 'other', name: '기타 도구', icon: '🔧', color: 'cyan' }
    ];

    const techStacks = [
        ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS'],
        ['Angular', 'RxJS', 'NgRx', 'Material UI'],
        ['Node.js', 'Express', 'MongoDB', 'Redis'],
        ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        ['Flutter', 'Dart', 'Firebase', 'SQLite'],
        ['React Native', 'Expo', 'Redux', 'AsyncStorage'],
        ['Electron', 'React', 'Node.js', 'SQLite'],
        ['Python', 'TensorFlow', 'OpenAI API', 'NumPy'],
        ['Go', 'Gin', 'PostgreSQL', 'gRPC']
    ];

    const projectNames = {
        web: [
            'VISGROVE 자산관리 시스템', 'VisSoft 포트폴리오', 'Excel-Markdown 변환기',
            '소크라테스 문서 생성기', '블로그 랜딩페이지', 'CRM 대시보드',
            'E-Commerce 플랫폼', '실시간 채팅 앱', '프로젝트 관리 도구',
            '온라인 예약 시스템', '이벤트 관리 플랫폼', '학습 관리 시스템',
            '팀 협업 도구', '문서 편집기', '칸반 보드', '포럼 커뮤니티',
            '온라인 설문조사', '기업 인트라넷', 'HR 관리 시스템', '재고 관리'
        ],
        mobile: [
            'KakaoTTS 앱', '헬스 트래커', '습관 형성 앱', '할일 관리 앱',
            '가계부 앱', '날씨 알림 앱', '음악 스트리밍', '뉴스 리더',
            '언어 학습 앱', '명상 & 휴식 앱', '레시피 북', '피트니스 코치',
            '여행 플래너', '독서 기록 앱', '사진 갤러리', '소셜 미디어 클론'
        ],
        desktop: [
            '파일 동기화 도구', 'PDF 편집기', '화면 녹화 앱', '코드 에디터',
            'DB 관리 도구', '이미지 리사이저', '백업 유틸리티', '시스템 모니터',
            '마크다운 에디터', 'FTP 클라이언트', 'SSH 터미널', '미디어 플레이어'
        ],
        api: [
            'OAuth 인증 서버', 'RESTful API 게이트웨이', 'GraphQL 서버',
            '결제 처리 API', '알림 서비스 API', '파일 업로드 서비스',
            '이메일 발송 API', 'SMS 알림 서비스', '실시간 WebSocket 서버',
            '데이터 분석 API', 'PDF 생성 API', '이미지 처리 API'
        ],
        ai: [
            'Solo Leveling 영어 게임', '챗봇 어시스턴트', '이미지 분류기',
            '감성 분석 도구', '문서 요약 AI', '번역 서비스', '음성 인식 시스템',
            '추천 엔진', '얼굴 인식 시스템', '자동 태깅 도구', 'OCR 서비스',
            '코드 자동완성'
        ],
        other: [
            'CLI 도구 모음', 'VS Code 익스텐션', 'Chrome 확장 프로그램',
            'Slack 봇', 'Discord 봇', 'GitHub Actions', 'Webpack 플러그인',
            'NPM 패키지', 'Docker 이미지', 'Terraform 모듈', 'K8s Helm 차트',
            'CI/CD 파이프라인'
        ]
    };

    const descriptions = [
        '최신 기술을 활용한 효율적인 솔루션으로, 사용자 경험을 극대화하고 비즈니스 목표를 달성합니다.',
        '직관적인 UI/UX 디자인과 강력한 성능을 갖춘 애플리케이션입니다.',
        '확장 가능하고 유지보수가 용이한 아키텍처로 구축되었습니다.',
        '보안과 성능을 최우선으로 고려하여 개발된 솔루션입니다.',
        '실시간 데이터 처리와 분석이 가능한 고성능 시스템입니다.',
        '사용자 피드백을 바탕으로 지속적으로 개선되는 제품입니다.',
        '클라우드 네이티브 환경에 최적화된 마이크로서비스 아키텍처입니다.',
        '자동화된 테스트와 배포 파이프라인을 갖춘 신뢰성 높은 시스템입니다.'
    ];

    const products = [];
    let id = 1;

    // Generate products for each category
    for (const category of categories) {
        const names = projectNames[category.id];
        for (let i = 0; i < names.length; i++) {
            const date = new Date();
            date.setDate(date.getDate() - Math.floor(Math.random() * 365));

            products.push({
                id: id++,
                name: names[i],
                category: category.id,
                categoryName: category.name,
                categoryIcon: category.icon,
                badgeClass: `badge-${category.color}`,
                description: descriptions[Math.floor(Math.random() * descriptions.length)],
                techStack: techStacks[Math.floor(Math.random() * techStacks.length)],
                date: date.toISOString().split('T')[0],
                image: `https://picsum.photos/seed/${id}/600/400`,
                demoUrl: '#',
                repoUrl: '#'
            });
        }
    }

    // Add more products to reach 100+
    const additionalCount = 120 - products.length;
    for (let i = 0; i < additionalCount; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 365));

        products.push({
            id: id++,
            name: `${category.name} 프로젝트 #${id}`,
            category: category.id,
            categoryName: category.name,
            categoryIcon: category.icon,
            badgeClass: `badge-${category.color}`,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            techStack: techStacks[Math.floor(Math.random() * techStacks.length)],
            date: date.toISOString().split('T')[0],
            image: `https://picsum.photos/seed/${id}/600/400`,
            demoUrl: '#',
            repoUrl: '#'
        });
    }

    return products;
}

// ==========================================
// State Management
// ==========================================
const state = {
    currentCategory: 'all',
    searchQuery: '',
    sortBy: 'newest',
    viewMode: 'grid',
    displayedItems: 12,
    itemsPerPage: 12
};

// ==========================================
// DOM Elements
// ==========================================
const elements = {
    categoryNav: document.getElementById('categoryNav'),
    galleryGrid: document.getElementById('galleryGrid'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    sortSelect: document.getElementById('sortSelect'),
    gridView: document.getElementById('gridView'),
    listView: document.getElementById('listView'),
    currentCategory: document.getElementById('currentCategory'),
    itemCount: document.getElementById('itemCount'),
    totalCount: document.getElementById('totalCount'),
    emptyState: document.getElementById('emptyState'),
    loadMore: document.getElementById('loadMore'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebarToggle'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage')
};

// ==========================================
// Category Management
// ==========================================
function getCategories() {
    const categoryCounts = {};

    products.forEach(product => {
        if (!categoryCounts[product.category]) {
            categoryCounts[product.category] = {
                id: product.category,
                name: product.categoryName,
                icon: product.categoryIcon,
                count: 0
            };
        }
        categoryCounts[product.category].count++;
    });

    return Object.values(categoryCounts);
}

function renderCategories() {
    const categories = getCategories();

    let html = `
        <div class="category-group">
            <div class="category-item ${state.currentCategory === 'all' ? 'active' : ''}" 
                 data-category="all">
                <span class="category-name">
                    <span class="category-icon">📁</span>
                    전체 보기
                </span>
                <span class="category-count">${products.length}</span>
            </div>
        </div>
        <div class="category-group">
            <div class="category-title">분류</div>
    `;

    categories.forEach(cat => {
        html += `
            <div class="category-item ${state.currentCategory === cat.id ? 'active' : ''}" 
                 data-category="${cat.id}">
                <span class="category-name">
                    <span class="category-icon">${cat.icon}</span>
                    ${cat.name}
                </span>
                <span class="category-count">${cat.count}</span>
            </div>
        `;
    });

    html += '</div>';
    elements.categoryNav.innerHTML = html;

    // Add click handlers
    elements.categoryNav.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            state.currentCategory = item.dataset.category;
            state.displayedItems = state.itemsPerPage;
            renderCategories();
            renderGallery();
            updateHeader();

            // Close sidebar on mobile
            if (window.innerWidth <= 1024) {
                elements.sidebar.classList.remove('open');
            }
        });
    });

    // Update total count
    elements.totalCount.textContent = products.length;
}

// ==========================================
// Gallery Rendering
// ==========================================
function getFilteredProducts() {
    let filtered = [...products];

    // Filter by category
    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === state.currentCategory);
    }

    // Filter by search query
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.techStack.some(tech => tech.toLowerCase().includes(query))
        );
    }

    // Sort
    switch (state.sortBy) {
        case 'newest':
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
            break;
    }

    return filtered;
}

function renderGallery() {
    const filtered = getFilteredProducts();
    const toDisplay = filtered.slice(0, state.displayedItems);

    if (toDisplay.length === 0) {
        elements.galleryGrid.innerHTML = '';
        elements.emptyState.style.display = 'block';
        elements.loadMore.style.display = 'none';
        return;
    }

    elements.emptyState.style.display = 'none';

    let html = '';
    toDisplay.forEach(product => {
        const featuredClass = product.featured ? 'featured' : '';
        const liveLabel = product.isReal ? '<span class="live-badge">🔴 LIVE</span>' : '';
        html += `
            <article class="gallery-card ${featuredClass}" data-id="${product.id}">
                <div class="card-image-container">
                    <img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy">
                    <span class="card-badge ${product.badgeClass}">${product.categoryIcon} ${product.category}</span>
                    ${liveLabel}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-description">${product.description}</p>
                    <div class="card-meta">
                        <span class="card-category">${product.categoryName}</span>
                        <span class="card-date">${formatDate(product.date)}</span>
                    </div>
                </div>
            </article>
        `;
    });

    elements.galleryGrid.innerHTML = html;

    // Show/hide load more button
    if (filtered.length > state.displayedItems) {
        elements.loadMore.style.display = 'block';
    } else {
        elements.loadMore.style.display = 'none';
    }

    // Add click handlers
    elements.galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => {
            const product = products.find(p => p.id === parseInt(card.dataset.id));
            openModal(product);
        });
    });
}

function updateHeader() {
    const filtered = getFilteredProducts();
    const categoryName = state.currentCategory === 'all'
        ? '전체 프로젝트'
        : products.find(p => p.category === state.currentCategory)?.categoryName || '프로젝트';

    elements.currentCategory.textContent = categoryName;
    elements.itemCount.textContent = `(${filtered.length}개)`;
}

// ==========================================
// Modal Management
// ==========================================
function openModal(product) {
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalBadge').textContent = `${product.categoryIcon} ${product.category}`;
    document.getElementById('modalBadge').className = `modal-badge ${product.badgeClass}`;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalCategory').textContent = product.categoryName;
    document.getElementById('modalDate').textContent = formatDate(product.date);

    // Update demo link
    const demoLink = document.getElementById('modalDemoLink');
    demoLink.href = product.demoUrl;
    if (product.isReal && product.demoUrl !== '#') {
        demoLink.textContent = '🔴 사이트 방문';
        demoLink.style.background = 'var(--color-green)';
    } else {
        demoLink.textContent = '데모 보기';
        demoLink.style.background = '';
    }

    document.getElementById('modalRepoLink').href = product.repoUrl;

    // Render tech stack
    const techStackHtml = product.techStack.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    document.getElementById('modalTechStack').innerHTML = techStackHtml;

    // Render features if available
    const featuresContainer = document.getElementById('modalFeatures');
    if (product.features && product.features.length > 0) {
        const featuresHtml = `
            <div class="meta-item">
                <span class="meta-label">주요 기능</span>
                <ul class="features-list">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        `;
        featuresContainer.innerHTML = featuresHtml;
        featuresContainer.style.display = 'block';
    } else {
        featuresContainer.style.display = 'none';
    }

    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('active');

    setTimeout(() => {
        elements.toast.classList.remove('active');
    }, 3000);
}

// ==========================================
// Utility Functions
// ==========================================
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// Event Listeners
// ==========================================
function initEventListeners() {
    // Search
    const handleSearch = debounce(() => {
        state.searchQuery = elements.searchInput.value;
        state.displayedItems = state.itemsPerPage;
        renderGallery();
        updateHeader();
    }, 300);

    elements.searchInput.addEventListener('input', handleSearch);
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Sort
    elements.sortSelect.addEventListener('change', () => {
        state.sortBy = elements.sortSelect.value;
        renderGallery();
    });

    // View Toggle
    elements.gridView.addEventListener('click', () => {
        state.viewMode = 'grid';
        elements.galleryGrid.classList.remove('list-view');
        elements.gridView.classList.add('active');
        elements.listView.classList.remove('active');
    });

    elements.listView.addEventListener('click', () => {
        state.viewMode = 'list';
        elements.galleryGrid.classList.add('list-view');
        elements.listView.classList.add('active');
        elements.gridView.classList.remove('active');
    });

    // Load More
    elements.loadMoreBtn.addEventListener('click', () => {
        state.displayedItems += state.itemsPerPage;
        renderGallery();
        showToast('더 많은 프로젝트를 불러왔습니다');
    });

    // Modal
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Prevent modal from closing when clicking on links
    document.getElementById('modalDemoLink').addEventListener('click', (e) => {
        e.stopPropagation();
    });
    document.getElementById('modalRepoLink').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Sidebar Toggle
    elements.sidebarToggle.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            elements.sidebar.classList.toggle('open');
        } else {
            elements.sidebar.classList.toggle('collapsed');
        }
    });

    // Mobile menu button (header logo click)
    document.querySelector('.logo').addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            elements.sidebar.classList.toggle('open');
        }
    });
}

// ==========================================
// Initialize Application
// ==========================================
function init() {
    // Video intro handlers
    const introOverlay = document.getElementById('introOverlay');
    const introVideo = document.getElementById('introVideo');
    const skipBtn = document.getElementById('skipBtn');
    const startBtn = document.getElementById('startBtn');
    const startScreen = document.getElementById('startScreen');
    const videoScreen = document.getElementById('videoScreen');

    function hideIntro() {
        introOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Start button - plays video with sound
    startBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        videoScreen.style.display = 'flex';
        introVideo.play();
    });

    // Hide intro when video ends
    introVideo.addEventListener('ended', hideIntro);

    // Skip button
    skipBtn.addEventListener('click', () => {
        introVideo.pause();
        hideIntro();
    });

    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';

    // Initialize gallery
    renderCategories();
    renderGallery();
    updateHeader();
    initEventListeners();

    console.log(`VIS Gallery initialized with ${products.length} products`);
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

