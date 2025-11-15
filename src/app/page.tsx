import { Sidebar, SidebarSpacer } from "@/components/Sidebar";
import { StoryCarousel } from "@/components/StoryCarousel";
import { PostFeed } from "@/components/PostFeed";
import { SuggestionsPanel } from "@/components/SuggestionsPanel";
import { MobileNav } from "@/components/MobileNav";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-zinc-50 dark:bg-neutral-950">
        <Sidebar />
        <SidebarSpacer />

        <div className="flex w-full flex-col">
          <TopBar />

          <main className="flex w-full justify-center gap-8 px-0 pb-24 pt-4 lg:px-6">
            <div className="flex w-full max-w-xl flex-col gap-6 lg:max-w-2xl">
              <StoryCarousel />
              <PostFeed />
            </div>

            <SuggestionsPanel />
          </main>
        </div>
      </div>
      <MobileNav />
    </>
  );
}
