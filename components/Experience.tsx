import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-anchor max-w-5xl mx-auto px-6 py-20"
    >
      <SectionHeading prompt="cat experience.log" title="Experience" />
      <ol className="relative border-l border-border ml-2 space-y-10">
        {experience.map((job) => (
          <li key={job.company} className="pl-6 relative">
            <span
              className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full ring-4 ring-bg ${
                job.current ? "bg-accent" : "bg-border"
              }`}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">
                {job.role}
                <span className="text-muted font-normal"> · {job.company}</span>
              </h3>
              {job.current && (
                <span className="mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-accent/40 text-accent">
                  current
                </span>
              )}
            </div>
            <p className="mono text-xs text-muted mt-1">
              {job.period} <span className="mx-1 text-border">·</span>{" "}
              {job.location}
            </p>
            {job.blurb && (
              <p className="mt-3 text-sm text-muted italic">{job.blurb}</p>
            )}
            <ul className="mt-4 space-y-2 text-sm md:text-[15px] leading-relaxed">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mono select-none mt-1">▸</span>
                  <span className="text-text/90">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span
                  key={s}
                  className="mono text-[11px] px-2 py-1 rounded border border-border text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
