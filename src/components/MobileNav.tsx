import Link from "next/link";
import {
  Home,
  Search,
  Clapperboard,
  PlaySquare,
  CircleUser,
} from "lucide-react";

const links = [
  { label: "Home", icon: Home },
  { label: "Search", icon: Search },
  { label: "Reels", icon: Clapperboard },
  { label: "Shop", icon: PlaySquare },
  { label: "Profile", icon: CircleUser },
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex h-16 items-center justify-around border-t border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-neutral-950/95 lg:hidden">
      {links.map(({ label, icon: Icon }) => (
        <Link
          key={label}
          href="#"
          className="flex flex-col items-center text-xs font-medium"
        >
          <Icon size={22} strokeWidth={1.8} />
        </Link>
      ))}
    </nav>
  );
}
