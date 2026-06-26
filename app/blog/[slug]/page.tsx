import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { getPost, posts } from "@/lib/posts";
import { postBodies } from "../posts-content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const Body = postBodies[post.slug];

  return (
    <main id="top">
      <Nav />
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <Link
          href="/blog"
          className="mono text-xs text-muted hover:text-accent transition-colors"
        >
          ← All notes
        </Link>
        <header className="mt-8 mb-10">
          <p className="mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            {formatDate(post.date)} · {post.minutes} min read
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.summary}</p>
        </header>
        <div className="prose prose-invert max-w-none text-[15px] leading-[1.75] text-text/90">
          {Body ? <Body /> : <p className="text-muted">Post body coming soon.</p>}
        </div>
        <footer className="mt-16 pt-8 border-t border-border text-sm text-muted flex items-center justify-between">
          <Link href="/blog" className="hover:text-accent transition-colors">
            ← More notes
          </Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">
            Get in touch →
          </Link>
        </footer>
      </article>
    </main>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
