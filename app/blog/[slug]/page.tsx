import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteFrame from "@/components/portfolio/SiteFrame";
import { getPost, posts } from "@/lib/posts";
import { postBodies } from "../posts-content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
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
    <SiteFrame section="WRITING / ARTICLE">
      <article className="blog-article">
        <Link href="/writing" className="text-link">← All notes</Link>
        <header>
          <p className="page-eyebrow">{formatDate(post.date)} · {post.minutes} MIN READ</p>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </header>
        <div className="blog-article__body">
          {Body ? <Body /> : <p>Article coming soon.</p>}
        </div>
        <footer><Link href="/writing">← More notes</Link><Link href="/contact">Get in touch ↗</Link></footer>
      </article>
    </SiteFrame>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
