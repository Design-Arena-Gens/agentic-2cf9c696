import Image from "next/image";
import { suggestions } from "@/data/mockData";

export function SuggestionsPanel() {
  return (
    <aside className="sticky top-0 hidden w-80 shrink-0 flex-col gap-6 pt-10 xl:flex">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80"
              alt="Your profile avatar"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">designerly</span>
            <span className="text-xs text-zinc-500">Esther Howard</span>
          </div>
        </div>
        <button className="text-sm font-semibold text-sky-500 hover:text-sky-600">
          Switch
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span>Suggested for you</span>
          <button className="font-semibold hover:text-zinc-700">See All</button>
        </div>

        <ul className="flex flex-col gap-3">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={suggestion.avatar}
                    alt={`${suggestion.username} avatar`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {suggestion.username}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {suggestion.reason}
                  </span>
                </div>
              </div>
              <button className="text-xs font-semibold text-sky-500 hover:text-sky-600">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>

      <footer className="text-xs text-zinc-400">
        <p className="mb-3">
          About · Help · Press · API · Careers · Privacy · Terms ·
          Locations · Language
        </p>
        <p>© {new Date().getFullYear()} Instagram Clone by Codex</p>
      </footer>
    </aside>
  );
}
