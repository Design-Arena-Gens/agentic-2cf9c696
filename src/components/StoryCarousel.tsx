import Image from "next/image";
import { stories } from "@/data/mockData";

export function StoryCarousel() {
  return (
    <section className="hide-scrollbar flex gap-4 overflow-x-auto px-4 py-5 sm:px-6">
      {stories.map((story) => (
        <button
          key={story.id}
          className="flex flex-col items-center gap-2 focus:outline-none"
        >
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-red-500 to-amber-400 p-[2px]">
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white p-0.5 dark:bg-neutral-950">
              <Image
                src={story.avatar}
                alt={`${story.username} avatar`}
                fill
                sizes="64px"
                className="rounded-full object-cover"
              />
            </span>
            {story.isLive && (
              <span className="absolute -bottom-1 w-full text-center">
                <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-[2px] text-[10px] font-semibold uppercase text-white shadow-md">
                  Live
                </span>
              </span>
            )}
          </span>
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
            {story.username}
          </span>
        </button>
      ))}
    </section>
  );
}
