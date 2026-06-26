import Reveal from "./Reveal";

const items = [
  {
    title: "AI workflows & agent pipelines",
    body: "Automating game code generation across new modules — cutting boilerplate, accelerating delivery, and letting the team focus on math and design.",
    tag: "Automation",
  },
  {
    title: "Agent-driven RTP verification",
    body: "Using AI agents to automatically verify Return-to-Player math and fix common logic defects — catching regressions before they hit QA.",
    tag: "Quality",
  },
];

export default function NowWorking() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 -mt-6 mb-8">
      <Reveal>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-surface/80 via-surface/40 to-bg/60 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 pulse-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="mono text-xs uppercase tracking-[0.2em] text-accent">
              Now Working On
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100}>
                <div className="lift h-full rounded-xl border border-border bg-bg/40 p-5 hover:border-accent/40">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-base font-semibold text-text">
                      {it.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-fuchsia-400/30 text-fuchsia-300 bg-fuchsia-400/5">
                      {it.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
