"use client";

import AppCard from "@/components/AppCard";
import { useSearchStore } from "@/store/searchStore";
import { useEffect } from "react";

// Mock Data (Simulating Database Fetch)
const initialApps = [
  {
    uaid: "VS-001",
    title: "RenderEngine",
    description: "실시간 시각화를 위한 고해상도 레이 트레이싱 엔진입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwqWlQpF5-ACN0hYRAmGNhaRKC7_rrL0wa-DG2ssxT6NWf3CnpgOqoQLvO2tJ_nRbl57t9PRzKkxUwjiz4R8fK03w81tnCnNvPkK-fi3NLqAzxzM9VQ6yQ_elGCRuMQsp9xGWC-hHpZmXCrbY1yeY-C_AHGdAWUb7LMsvuQj5zLdrNoz6HS2OL69fYg7qjB4uyyv_qrbhtx0LwtyQlr8iZtMDUTy5YGvu6qYf05aEIjA2nrhSDJEzpaC6-AMcBcZioXxKbVNSvISA",
    category: "렌더링",
    externalLink: "#"
  },
  {
    uaid: "VS-002",
    title: "StructFlow",
    description: "복잡한 구조 시스템을 위한 파라메트릭 모델링 도구입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV_1gII_pmcHVCdQzDHtKkQOLvu4_TiP2uZR3DZ6T40NGu4yFEtfzlZDxTwGPFwM2WXo7QCApPQNeYzSB9e8ohjvgD0H052E6-wHKfXAqJuSeqhSJU6xFkNMQCVpQefSl_u1DCtOTTE8tIv0PkM5-_Ry7aNtgobikgC8O88LVEVVnXzCEJX7MvtYby6M4PqhV0UPP4IlEZFLxh1H-KfuutguQwKdedFW-cmbrjQCYa3SETR-x2IvUbRWov3vEHyJgWVGoxRhjdlHc",
    category: "아키텍처",
    externalLink: "#"
  },
  {
    uaid: "VS-003",
    title: "VoxelStudio",
    description: "디지털 아티스트를 위한 직관적인 복셀 기반 조각 도구입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaUyYdxFk3UpHdjp_m8CR0cLZNQ7yRibwvCpyvb4bWG2YSGZo177q51gFYjF4w9Y9H8kE5-aPEhHQMT4UIZClRNr2IwyPJtABerDb3bzXFYQ7s6JbMJxnN9RmQ4jwUHienItxzpbUD9sIegC0fedPmE8O_Xd1vEqw8x5cn-n1IxNpbQDj2x9YRIRI2miKz1y9We98HabpTu1BdgGyDZpivZ6aieGb8QGkBM41Lt0UTC7ubbo7_koKPXVK_PnU8GzDHW4utNf_qdSc",
    category: "크리에이티브",
    externalLink: "#"
  },
  {
    uaid: "VS-004",
    title: "CodeStream",
    description: "원격 팀을 위한 실시간 협업 코딩 환경입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA18ngbwi_CGCo_j2pQJUE4KLsFH4xE5Whf8qjMCyeuNYEhX5CPd5Ks4Py5aveNlDzdyOvFewZhX1TQyC03kzSbNDua0SEwTpuFmc8l6Ub3DuJ7RoWNT1N1ag3RXsXljdO_tqwOJBjNDhIKS2dQ0mIbKAirm0NMYaMVbFg5zUO4OeNC5k6gnY7WFFFjvB8Xks4aMLzFGVjZ7ks-ee4egt9LxhOHa9HBbAq2VLRK02wJozRBXUjebC12pShiUbXtkVTVKNx88vgCUTE",
    category: "데브옵스",
    externalLink: "#"
  },
  {
    uaid: "VS-005",
    title: "PixelPerfect",
    description: "UI/UX 전문가를 위한 벡터 기반 디자인 도구입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNUt98_t3W6SsnwN97NVGzKuOyOKR5HaxgXQP-l7wszM1UrbsvjOeOgkeKQmx3_0Dn_xAPqPGFYxhg0FmVSmfeJEOjHzocY6yp0tbuP95sUmYGWsTIgzQkOFwxMY2AYBAJjbowP2YQkGGLLfzI1MQFpyv90Z7hRXfXB5zKuBZ1A7AM6cg7c_wxqin6KQW0qIAaOfpUNc5R_p-ppQ9qmU-3-AaukYd3b-TVzripDES1moPAGWW5FdiEx38NO33FK7djiCIiP0IooN8",
    category: "디자인",
    externalLink: "#"
  },
  {
    uaid: "VS-006",
    title: "CloudScale",
    description: "확장 가능한 클라우드 인프라 관리 플랫폼입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB8bROLim1NaFKcmXTuagWoA60sn1Asxe6BmALCTGSnq1g57uQqy2I9m0n70Kl-wpMfy-hFfAzyzJPRJFwjLY9IN5CEoGI6r5Q0Rx81TmSjIlo6bHNnEyYiuMmXCTveFeN1Q1EPTSCuFTp6s7lM9pR6lIPAu6NlPLOZPmDEMya5Hv6xxu8lRqaJVjS2BL1yg3aGko8qxrgBv5TLlDhjRk2RHyuTx7ft6z20Wn028e9XoPA5j4LNSj8cRR5RwrvqefPJSZf2NF71sE",
    category: "인프라",
    externalLink: "#"
  },
  {
    uaid: "VS-007",
    title: "HueShift",
    description: "고급 색 보정 및 컬러 그레이딩 스위트입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFQpFAzc1HDEH4iqJIKuUrjn1u1uLY5eViNwdKN6Q4Ajqw9zlpP7wyc9TXZmrpNfD8BNRxtPsQUBoHIZQ7hN5Kc8j33_9vh-ZGPdKbyUO-8uqgA_H8IhzucqH3rFrp6bSTOLrz0L49Xrjwu6cQH8DPtBzBJm7mGj_vD_THtizAmXRRG6CPZzn-8Ufeke65S_IevGPOKSzM1xuKK_s6Qmtw8TzItbldKjuD1AW346F9vFXF1UfdDC0u2jxuNk6E4SDFKBxKw24llEE",
    category: "비주얼",
    externalLink: "#"
  },
  {
    uaid: "VS-008",
    title: "UrbanPlan",
    description: "실제 데이터를 통합한 도시 계획 시뮬레이션입니다.",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzSALv9wa-0XfI2PNV_7WV5Fn8YRXvNlJDwv_-TM2C0nJsAje4mmGRvz7AIoqP4gA9KAa8RVNrcx0yJ8VGSnKex8bUDN4R7otjka3XIimJDHV1qzWUDYOEdQ0VB8kwfWoCie35pY1n8OOlfvCKUNIR_oHaQDrPoTvX9xYsJnyZYt37tHvQrXYPm5qCrprKXMI7hgyBGf359_XEFwmLJjvgFJnlSShrU0jLxWguQ3Zqcr2y3KLnP8PeHBW1Pi1pPdKSb88_pMPZ064",
    category: "아키텍처",
    externalLink: "#"
  }
];

export default function AppGrid() {
  const { setApps, filteredApps } = useSearchStore();

  useEffect(() => {
    setApps(initialApps);
  }, [setApps]);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {filteredApps.map((app) => (
        <AppCard key={app.uaid} {...app} />
      ))}
      {/* Pagination / Load More */}
        <div className="col-span-full mt-12 flex justify-center">
        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-surface-light px-6 py-2.5 text-sm font-bold text-text-main shadow-sm transition-colors hover:bg-gray-50 hover:text-primary dark:border-gray-700 dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800">
            더 보기
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
        </button>
        </div>
    </div>
  );
}
