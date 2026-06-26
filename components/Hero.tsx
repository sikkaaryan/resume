import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="about"
      className="section-anchor relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <p className="mono text-sm text-accent mb-6">
          <span className="text-muted">$</span> whoami
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-muted">
          <span className="text-text">{profile.role}</span>
          <span className="mx-2 text-border">/</span>
          {profile.location}
        </p>
        <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="mono text-sm px-4 py-2 rounded bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
          >
            view experience →
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mono text-sm px-4 py-2 rounded border border-border hover:border-accent hover:text-accent transition-colors"
          >
            download resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mono text-sm px-4 py-2 rounded border border-border hover:border-accent hover:text-accent transition-colors"
          >
            github ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mono text-sm px-4 py-2 rounded border border-border hover:border-accent hover:text-accent transition-colors"
          >
            linkedin ↗
          </a>
        </div>
      </div>
    </section>
  );
}
