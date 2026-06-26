import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-anchor max-w-5xl mx-auto px-6 py-20"
    >
      <SectionHeading prompt="ls ./projects" title="Selected Projects" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group rounded-lg border border-border bg-surface/60 p-5 hover:border-accent/50 hover:shadow-glow transition-all"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold leading-snug">{p.name}</h3>
              <span
                className={`mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                  p.context === "work"
                    ? "border border-accent/30 text-accent"
                    : "border border-border text-muted"
                }`}
              >
                {p.context}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="mono text-[11px] px-2 py-1 rounded border border-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
