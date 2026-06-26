import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import Avatar from "./Avatar";
import Counter from "./Counter";
import HeroSpotlight from "./HeroSpotlight";

const stats = [
  { value: "~4", short: "Years", long: "Years experience" },
  { value: "5–6", short: "Modules", long: "Production modules" },
  { value: "~30%", short: "Faster", long: "Faster team delivery" },
];

export default function Hero() {
  return (
    <section id="about" className="section-anchor relative overflow-hidden">
      <HeroSpotlight />
      <div className="hero-mesh" />
      <div className="reel-bg" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Text column */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-border bg-surface/60 text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-75 pulse-ring" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent2" />
                </span>
                Currently at Aristocrat Technologies
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="mono text-xs uppercase tracking-[0.25em] text-accent mt-7 mb-4">
                {profile.role}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-br from-text via-text to-muted bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 text-base md:text-lg text-muted">
                <span className="text-text">{profile.role}</span>
                <span className="mx-2 text-border">·</span>
                {profile.location}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="group/btn text-sm px-5 py-2.5 rounded-md bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
                >
                  View Experience <span className="btn-arrow">→</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-5 py-2.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  Download Resume
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-5 py-2.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-5 py-2.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Avatar column */}
          <Reveal delay={200} className="order-first md:order-last">
            <Avatar />
          </Reveal>
        </div>

        {/* Stats strip */}
        <div className="mt-14 md:mt-16 grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 max-w-2xl">
          {stats.map((s, i) => (
            <Reveal key={s.long} delay={460 + i * 80}>
              <div className="rounded-lg border border-border bg-surface/40 px-3 sm:px-4 py-4 sm:py-5">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text">
                  <Counter value={s.value} />
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] md:text-xs text-muted uppercase tracking-wider">
                  <span className="sm:hidden">{s.short}</span>
                  <span className="hidden sm:inline">{s.long}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
