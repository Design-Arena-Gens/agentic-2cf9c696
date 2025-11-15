import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Smile,
} from "lucide-react";
import { posts } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function PostFeed() {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-100/50 dark:border-zinc-800 dark:bg-neutral-950 dark:shadow-none"
        >
          <header className="flex items-center gap-3 px-4 py-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
              <Image
                src={post.user.avatar}
                alt={`${post.user.username} avatar`}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>{post.user.username}</span>
                {post.user.verified && (
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-1.5 text-[10px] font-bold uppercase leading-4 text-white">
                    Verified
                  </span>
                )}
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {post.user.location}
              </span>
            </div>
            <button
              type="button"
              aria-label="More"
              className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <MoreHorizontal size={20} strokeWidth={1.6} />
            </button>
          </header>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
            <Image
              src={post.media.src}
              alt={post.media.alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconButton ariaLabel="Like">
                  <Heart size={24} strokeWidth={1.8} />
                </IconButton>
                <IconButton ariaLabel="Comment">
                  <MessageCircle size={24} strokeWidth={1.8} />
                </IconButton>
                <IconButton ariaLabel="Share">
                  <Send size={24} strokeWidth={1.8} />
                </IconButton>
              </div>
              <IconButton ariaLabel="Save">
                <Bookmark size={24} strokeWidth={1.8} />
              </IconButton>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <span className="font-semibold">
                {post.likes.toLocaleString()} likes
              </span>
              <p>
                <span className="font-semibold">{post.user.username}</span>{" "}
                {post.caption}
              </p>
              <button className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                View all {post.commentsCount} comments
              </button>
              <span className="text-xs uppercase tracking-wide text-zinc-400">
                {post.timestamp}
              </span>
            </div>

            <form className="flex items-center gap-3 border-t border-zinc-100 pt-3 dark:border-zinc-800">
              <Smile size={20} strokeWidth={1.6} className="text-zinc-500" />
              <input
                placeholder="Add a comment..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="text-sm font-semibold text-sky-500 hover:text-sky-600"
              >
                Post
              </button>
            </form>
          </div>
        </article>
      ))}
    </div>
  );
}

function IconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "rounded-full p-1 transition-colors hover:bg-zinc-100",
        "dark:hover:bg-zinc-900"
      )}
    >
      {children}
    </button>
  );
}
