export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  minutes: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "agents-for-rtp-verification",
    title: "Making game-math checks repeatable",
    date: "2026-06-26",
    summary:
      "A practical note on making repeated game-math checks easier to run and review.",
    minutes: 4,
    tags: ["Game Development", "Verification"],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
