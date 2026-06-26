import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects, featuredProjects } from "@/lib/data";

const accentMap = {
  cyan: {
    border: "hover:border-accent/60",
    text: "text-accent",
    bg: "bg-accent/5",
    chip: "border-accent/30 text-accent bg-accent/5",
    glow: "from-accent/20 to-transparent",
  },
  violet: {
    border: "hover:border-fuchsia-400/60",
    text: "text-fuchsia-300",
    bg: "bg-fuchsia-400/5",
    chip: "border-fuchsia-400/30 text-fuchsia-300 bg-fuchsia-400/5",
    glow: "from-fuchsia-400/20 to-transparent",
  },
  emerald: {
    border: "hover:border-emerald-400/60",
    text: "text-emerald-300",
    bg: "bg-emerald-400/5",
    chip: "border-emerald-400/30 text-emerald-300 bg-emerald-400/5",
    glow: "from-emerald-400/20 to-transparent",
  },
} as const;

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-anchor max-w-5xl mx-auto px-6 py-24"
    >
      <Reveal>
        <SectionHeading title="Featured Work" />
      </Reveal>

      {/* Featured cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((p, i) => {
          const a = accentMap[p.accent];
          return (
            <Reveal as="article" key={p.name} delay={i * 110}>
              <div
                className={`group lift h-full relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 ${a.border}`}
              >
                <div
                  className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl bg-gradient-to-br ${a.glow} opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className={`text-3xl font-bold tracking-tight ${a.text}`}>
                      {p.metric}
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${a.chip}`}
                    >
                      {p.context}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted uppercase tracking-wider">
                    {p.metricLabel}
                  </p>

                  <h3 className="mt-5 text-lg font-semibold leading-snug text-text group-hover:text-text">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10.5px] px-2 py-0.5 rounded border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Other projects */}
      <Reveal delay={200} className="mt-16">
        <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-5">
          More Projects
        </h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 90}>
            <div className="group lift h-full rounded-xl border border-border bg-surface/40 p-5 hover:border-accent/40 hover:bg-surface/70">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-semibold leading-snug group-hover:text-accent transition-colors">
                  {p.name}
                </h4>
                <span
                  className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                    p.context === "work"
                      ? "border border-accent/30 text-accent bg-accent/5"
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
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
