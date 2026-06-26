import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";
import { skillGroups, education, certifications } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-anchor max-w-5xl mx-auto px-6 py-24"
    >
      <Reveal>
        <SectionHeading title="Skills" />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 70}>
            <div className="lift rounded-xl border border-border bg-surface/50 p-5 hover:border-accent/40">
              <h3 className="mono text-xs uppercase tracking-wider text-accent mb-3">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 text-[13px] px-2.5 py-1 rounded-md border border-border text-text/90 bg-bg/40 hover:border-accent/40 hover:text-accent transition-colors"
                  >
                    <TechIcon name={s} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 mt-8">
        <Reveal delay={120}>
          <div className="lift rounded-xl border border-border bg-surface/50 p-5 hover:border-accent/40 h-full">
            <h3 className="mono text-xs uppercase tracking-wider text-accent mb-3">
              Education
            </h3>
            <p className="font-medium">
              {education.degree}
              <span className="text-muted font-normal"> · {education.school}</span>
            </p>
            <p className="mono text-xs text-muted mt-1">
              {education.period} · {education.location} · {education.result}
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="lift rounded-xl border border-border bg-surface/50 p-5 hover:border-accent/40 h-full">
            <h3 className="mono text-xs uppercase tracking-wider text-accent mb-3">
              Certifications
            </h3>
            <ul className="space-y-1.5 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-accent select-none">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
