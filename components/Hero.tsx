"use client";

import { useSearchStore } from "@/store/searchStore";

export default function Hero() {
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <div className="relative w-full border-b border-gray-200 bg-hero-gradient px-4 py-16 dark:border-gray-800 dark:bg-none dark:bg-surface-dark lg:px-10 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent dark:from-white dark:to-gray-400 sm:text-5xl lg:text-6xl">
          엄선된 창의적 아키텍처.
        </h1>
        <h2 className="max-w-2xl text-lg font-medium text-text-muted dark:text-gray-400 sm:text-xl">
          시각적 작업과 기술적 아키텍처를 위한 최고의 도구를 발견하세요. 현대 창작자를 위한 특별한 컬렉션입니다.
        </h2>
        <div className="mt-4 w-full max-w-[560px]">
          <label className="relative flex h-14 w-full items-center overflow-hidden rounded-lg bg-white shadow-lg shadow-primary/5 ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-primary dark:bg-surface-dark dark:ring-gray-700">
            <div className="flex h-full w-14 items-center justify-center text-text-muted">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="h-full w-full border-none bg-transparent px-0 text-base font-medium text-text-main placeholder:text-gray-400 focus:ring-0 dark:text-white focus:outline-none"
              placeholder="앱 이름 또는 UAID로 검색"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="pr-2">
              <button className="flex h-10 cursor-pointer items-center justify-center rounded-md bg-primary-gradient px-6 text-sm font-bold text-white transition-opacity hover:opacity-90">
                검색
              </button>
            </div>
          </label>
        </div>
      </div>
      <div className="pointer-events-none absolute left-10 top-10 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/5"></div>
    </div>
  );
}

