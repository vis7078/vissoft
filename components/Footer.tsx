import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-surface-light py-10 dark:border-gray-800 dark:bg-surface-dark">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
            <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-300">
              layers
            </span>
          </div>
          <span className="text-lg font-bold text-text-main dark:text-white">
            VisSoft
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            className="text-sm font-medium text-text-muted hover:text-primary dark:hover:text-primary-dark"
            href="#"
          >
            소개
          </Link>
          <Link
            className="text-sm font-medium text-text-muted hover:text-primary dark:hover:text-primary-dark"
            href="#"
          >
            개인정보 처리방침
          </Link>
          <Link
            className="text-sm font-medium text-text-muted hover:text-primary dark:hover:text-primary-dark"
            href="#"
          >
            제출 가이드라인
          </Link>
          <Link
            className="text-sm font-medium text-text-muted hover:text-primary dark:hover:text-primary-dark"
            href="#"
          >
            API
          </Link>
        </div>
        <p className="text-xs text-gray-400">
          © 2024 VisSoft. All rights reserved. Curated for creators.
        </p>
      </div>
    </footer>
  );
}
