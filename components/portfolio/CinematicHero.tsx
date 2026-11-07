import Link from "next/link";
import DigitalCore from "./DigitalCore";

export default function CinematicHero() {
  return (
    <section className="cinematic-hero">
      <div className="cinematic-hero__copy">
        <p className="page-eyebrow"><i /> SOFTWARE ENGINEER II · NOIDA, INDIA</p>
        <p className="cinematic-hero__index">PORTFOLIO / 2026 <span>AVAILABLE FOR SELECT PROJECTS</span></p>
        <h1>Engineering<br /><em>what comes next.</em></h1>
        <p className="cinematic-hero__lede">I build mobile game experiences, application systems, and tools that make complex development work simpler.</p>
        <div className="page-actions">
          <Link className="button-primary" href="/projects">Explore selected work <span>↗</span></Link>
          <Link className="text-link" href="/experience">Follow my journey <span>↗</span></Link>
        </div>
        <div className="cinematic-hero__facts">
          <span><b>01</b> GAME ENGINEERING</span><span><b>02</b> APPLICATION SYSTEMS</span><span><b>03</b> DEVELOPER TOOLS</span>
        </div>
      </div>
      <div className="cinematic-hero__visual">
        <DigitalCore />
        <div className="cinematic-hero__visual-caption"><span>DC / 001 — DIGITAL CORE</span><span>INTERACTIVE SYSTEM</span></div>
      </div>
      <div className="cinematic-hero__scroll"><span /> SCROLL TO EXPLORE</div>
    </section>
  );
}
