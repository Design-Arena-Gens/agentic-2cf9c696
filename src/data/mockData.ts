export type Story = {
  id: string;
  username: string;
  avatar: string;
  isLive?: boolean;
};

export type Post = {
  id: string;
  user: {
    username: string;
    name: string;
    avatar: string;
    location?: string;
    verified?: boolean;
  };
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  likes: number;
  caption: string;
  timestamp: string;
  commentsCount: number;
};

export type Suggestion = {
  id: string;
  username: string;
  name: string;
  avatar: string;
  reason: string;
};

export const stories: Story[] = [
  {
    id: "1",
    username: "Your story",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    username: "devonlane",
    avatar:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&auto=format&fit=crop&q=80",
    isLive: true,
  },
  {
    id: "3",
    username: "esther",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    username: "designcode",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    username: "travelist",
    avatar:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    username: "chefmode",
    avatar:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "7",
    username: "wildlife",
    avatar:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "8",
    username: "artdaily",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
  },
];

export const posts: Post[] = [
  {
    id: "post-1",
    user: {
      username: "esther",
      name: "Esther Howard",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
      location: "Oslo, Norway",
      verified: true,
    },
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&auto=format&fit=crop&q=80",
      alt: "Colorful designer workspace",
    },
    likes: 28456,
    caption:
      "Minimalist studio update. New palette, lots of natural light, and my favorite chair made it in. What do you think?",
    timestamp: "2 hours ago",
    commentsCount: 612,
  },
  {
    id: "post-2",
    user: {
      username: "travelist",
      name: "Courtney Henry",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
      location: "Kyoto, Japan",
    },
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop&q=80",
      alt: "Foggy forest mountain landscape",
    },
    likes: 19321,
    caption:
      "Morning hikes through the Arashiyama bamboo forest. Kyoto always rewrites my sense of calm. 🌿",
    timestamp: "5 hours ago",
    commentsCount: 231,
  },
  {
    id: "post-3",
    user: {
      username: "chefmode",
      name: "Kristin Watson",
      avatar:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&auto=format&fit=crop&q=80",
      location: "Lisbon, Portugal",
    },
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80",
      alt: "Tapas and sangria on a wooden table",
    },
    likes: 12784,
    caption:
      "Tapas tasting menu is live! Tried to keep every bite playful yet rooted in tradition. Recipe drops tonight.",
    timestamp: "1 day ago",
    commentsCount: 189,
  },
];

export const suggestions: Suggestion[] = [
  {
    id: "s-1",
    username: "fable.studio",
    name: "Fable Studio",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&auto=format&fit=crop&q=80",
    reason: "Followed by designcode + 2 more",
  },
  {
    id: "s-2",
    username: "minimalism",
    name: "Minimalism Now",
    avatar:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&auto=format&fit=crop&q=80",
    reason: "Popular",
  },
  {
    id: "s-3",
    username: "wanderlust",
    name: "Wanderlust",
    avatar:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&auto=format&fit=crop&q=80",
    reason: "Suggested for you",
  },
  {
    id: "s-4",
    username: "soundwaves",
    name: "Sound Waves",
    avatar:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=200&auto=format&fit=crop&q=80",
    reason: "Followed by esther",
  },
];
