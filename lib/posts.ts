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
    title: "Using AI Agents to Verify Slot Game RTP",
    date: "2026-06-26",
    summary:
      "Why hand-verifying RTP doesn't scale, and how a small agent pipeline catches math regressions before QA ever sees them.",
    minutes: 4,
    tags: ["AI", "Agents", "Game Math", "RTP"],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
