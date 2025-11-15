import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  PlusSquare,
  Menu,
} from "lucide-react";

const navigation = [
  { label: "Home", icon: Home, href: "#" },
  { label: "Search", icon: Search, href: "#" },
  { label: "Explore", icon: Compass, href: "#" },
  { label: "Reels", icon: Clapperboard, href: "#" },
  { label: "Messages", icon: MessageCircle, href: "#" },
  { label: "Notifications", icon: Heart, href: "#" },
  { label: "Create", icon: PlusSquare, href: "#" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-neutral-950 lg:flex lg:flex-col lg:justify-between">
      <div>
        <Link
          href="/"
          className="mb-8 block text-3xl font-semibold tracking-tight"
        >
          <span className="font-semibold text-black dark:text-white">
            Instagram
          </span>
        </Link>

        <nav className="flex flex-col gap-3">
          {navigation.map(({ label, icon: Icon }) => (
            <Link
              key={label}
              href="#"
              className="flex items-center gap-4 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <Icon size={22} strokeWidth={1.6} />
              <span>{label}</span>
            </Link>
          ))}

          <Link
            href="#"
            className="flex items-center gap-4 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80"
                alt="Profile avatar"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span>Profile</span>
          </Link>
        </nav>
      </div>

      <button className="flex items-center gap-4 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900">
        <Menu size={22} strokeWidth={1.6} />
        More
      </button>
    </aside>
  );
}

export function SidebarSpacer() {
  return <div className="hidden w-64 shrink-0 lg:block" aria-hidden />;
}
