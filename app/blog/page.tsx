import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on engineering, AI, and game systems.",
};

export default function BlogIndex() {
  return (
    <main id="top">
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <Reveal>
          <p className="mono text-xs uppercase tracking-[0.25em] text-accent mb-2">
            Writing
          </p>
          <SectionHeading title="Notes" />
        </Reveal>
        <Reveal delay={80}>
          <p className="text-muted mb-12 max-w-xl">
            Occasional notes on engineering, AI workflows, slot game systems,
            and whatever else I'm thinking about.
          </p>
        </Reveal>

        <ul className="space-y-1">
          {posts.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block py-5 border-t border-border last:border-b hover:border-accent/40 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <span className="mono text-[11px] text-muted whitespace-nowrap">
                    {formatDate(p.date)}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{p.summary}</p>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-muted">
                  <span>{p.minutes} min read</span>
                  <span>·</span>
                  <span className="flex gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="mono px-1.5 py-0.5 rounded border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
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
