import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-surface-light/95 px-6 py-3 backdrop-blur dark:bg-surface-dark/95 dark:border-gray-800 lg:px-10">
      <div className="flex items-center gap-4">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary-dark dark:bg-primary/20 dark:text-primary">
          <span className="material-symbols-outlined">layers</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
          VisSoft
        </h2>
      </div>
      <div className="hidden flex-1 justify-end gap-8 md:flex">
        <div className="flex items-center gap-6">
          <MegaMenu />
          <Link
            className="text-sm font-medium text-text-main hover:text-primary-dark dark:text-gray-200 dark:hover:text-primary transition-colors"
            href="#"
          >
            앱 등록하기
          </Link>
          <Link
            className="text-sm font-medium text-text-main hover:text-primary-dark dark:text-gray-200 dark:hover:text-primary transition-colors"
            href="#"
          >
            로그인
          </Link>
        </div>
        <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-primary-gradient px-4 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg">
          <span className="truncate">회원가입</span>
        </button>
      </div>
      <div className="flex md:hidden">
        <button className="text-text-main dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
