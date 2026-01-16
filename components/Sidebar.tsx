"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className="w-full shrink-0 lg:w-64">
      {/* Mobile Toggle Button (Visible only on mobile) */}
      <button 
        className="mb-4 flex items-center gap-2 rounded-md bg-white p-2 text-sm font-medium text-text-main shadow-sm dark:bg-surface-dark dark:text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined">filter_list</span>
        {isOpen ? "필터 숨기기" : "필터 보기"}
      </button>

      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-surface-light p-5 shadow-lg transition-transform duration-300 dark:bg-surface-dark lg:static lg:block lg:transform-none lg:bg-transparent lg:p-0 lg:shadow-none ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col gap-6 sticky top-24 rounded-lg border border-gray-100 bg-surface-light p-5 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
            필터
          </h3>
          <p className="text-xs text-text-muted">카테고리별 보기</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            className="group flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary-dark transition-colors dark:bg-primary/20 dark:text-primary"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">apps</span>
            <span className="text-sm font-bold">모든 앱</span>
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-md px-3 py-2 text-text-muted transition-colors hover:bg-gray-50 hover:text-text-main dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              palette
            </span>
            <span className="text-sm font-medium">비주얼</span>
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-md px-3 py-2 text-text-muted transition-colors hover:bg-gray-50 hover:text-text-main dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              architecture
            </span>
            <span className="text-sm font-medium">아키텍처</span>
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-md px-3 py-2 text-text-muted transition-colors hover:bg-gray-50 hover:text-text-main dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              terminal
            </span>
            <span className="text-sm font-medium">데브옵스</span>
          </Link>
        </div>
        <div className="h-px w-full bg-gray-100 dark:bg-gray-700"></div>
        <div className="flex flex-col gap-1">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-text-muted">
            태그
          </h3>
          <label className="flex items-center gap-2 py-1">
            <input
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
              type="checkbox"
            />
            <span className="text-sm text-text-main dark:text-gray-300">
              오픈 소스
            </span>
          </label>
          <label className="flex items-center gap-2 py-1">
            <input
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
              type="checkbox"
            />
            <span className="text-sm text-text-main dark:text-gray-300">
              엔터프라이즈
            </span>
          </label>
          <label className="flex items-center gap-2 py-1">
            <input
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
              type="checkbox"
            />
            <span className="text-sm text-text-main dark:text-gray-300">
              베타
            </span>
          </label>
        </div>
      </div>
      </div>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </aside>
  );
}
