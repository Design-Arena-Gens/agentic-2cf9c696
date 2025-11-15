import Image from "next/image";
import { Search, Heart } from "lucide-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-zinc-800 dark:bg-neutral-950/90 lg:hidden">
      <h1 className="text-2xl font-semibold">Instagram</h1>
      <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
        <button
          type="button"
          className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          aria-label="Search"
        >
          <Search size={22} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          aria-label="Activity"
        >
          <Heart size={22} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          className="relative rounded-full p-[2px]"
          aria-label="Messages"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80"
              alt="Direct messages"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="absolute -right-1 -top-1 inline-flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-[5px] text-[10px] font-semibold text-white">
            3
          </span>
        </button>
      </div>
    </header>
  );
}
