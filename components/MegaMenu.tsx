"use client";

import Link from "next/link";
import { useState } from "react";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Example Category Structure
  const categories = [
    {
      name: "비주얼",
      subcategories: ["렌더링", "색 보정", "영상 편집", "사진 촬영"],
    },
    {
      name: "아키텍처",
      subcategories: ["모델링", "BIM", "도시 계획", "인테리어 디자인"],
    },
    {
      name: "데브옵스",
      subcategories: ["CI/CD", "인프라", "모니터링", "보안"],
    },
    {
      name: "디자인",
      subcategories: ["UI/UX", "그래픽 디자인", "타이포그래피", "일러스트레이션"],
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary-dark dark:text-gray-200 dark:hover:text-primary transition-colors focus:outline-none py-4">
        카테고리 탐색
        <span className="material-symbols-outlined text-[18px]">
          expand_more
        </span>
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute left-0 top-full z-50 w-[600px] origin-top-left rounded-lg border border-gray-200 bg-white p-6 shadow-xl transition-all duration-200 dark:border-gray-800 dark:bg-surface-dark ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-dark dark:text-primary">
                {category.name}
                <span className="h-px flex-1 bg-gray-100 dark:bg-gray-700"></span>
              </h3>
              <ul className="flex flex-col gap-1">
                {category.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-main dark:text-gray-400 dark:hover:text-white"
                    >
                      <span className="block h-1 w-1 rounded-full bg-gray-300 transition-colors group-hover:bg-primary dark:bg-gray-600"></span>
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
