import SectionHeading from "./SectionHeading";
import { skillGroups, education, certifications } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-anchor max-w-5xl mx-auto px-6 py-20"
    >
      <SectionHeading prompt="cat skills.json" title="Skills" />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-lg border border-border bg-surface/60 p-5"
          >
            <h3 className="mono text-xs uppercase tracking-wider text-accent mb-3">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-[13px] px-2.5 py-1 rounded border border-border text-text/90 bg-bg/40"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 mt-8">
        <div className="rounded-lg border border-border bg-surface/60 p-5">
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
        <div className="rounded-lg border border-border bg-surface/60 p-5">
          <h3 className="mono text-xs uppercase tracking-wider text-accent mb-3">
            Certifications
          </h3>
          <ul className="space-y-1.5 text-sm">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-accent mono select-none">▸</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
