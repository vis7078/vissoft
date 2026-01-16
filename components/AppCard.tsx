import Link from "next/link";
import Image from "next/image";

interface AppCardProps {
  uaid: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  externalLink: string;
}

export default function AppCard({
  uaid,
  title,
  description,
  thumbnailUrl,
  category,
  externalLink,
}: AppCardProps) {
  return (
    <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-md border border-gray-200 bg-surface-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-surface-dark">
      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Link href={externalLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
            <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </Link>
        <div className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white backdrop-blur-md">
          UAID #{uaid.replace("VS-", "")}
        </div>
      </div>
      {/* Content Area */}
      <div className="flex flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-bold text-text-main dark:text-white">{title}</h3>
          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary-dark dark:bg-primary/20 dark:text-primary">
            {category}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-text-muted dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
