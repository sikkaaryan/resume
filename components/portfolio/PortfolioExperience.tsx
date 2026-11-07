"use client";

import { useEffect, useState, type FormEvent } from "react";
import DigitalCore from "./DigitalCore";
import { certifications, education, experience, featuredProjects, profile, skillGroups } from "@/lib/data";

const experienceHighlights: Record<string, string[]> = {
  "Aristocrat Technologies": [
    "Develop production mobile game modules for Android and iOS using C#, TypeScript, and a Unity-based architecture.",
    "Own product features across gameplay systems, UI flows, backend integrations, analytics, and production fixes.",
    "Contributed to 5–6 shipped game modules, including Buffalo Link.",
    "Built a reusable TypeScript game-template framework that reduced new-title development time by approximately 30%.",
    "Develop internal AI-assisted workflows for code generation and automated quality checks.",
    "Investigate production and QA issues while collaborating across engineering, QA, design, and product teams.",
  ],
  "Cavisson Systems Inc": [
    "Enhanced enterprise ASP.NET MVC and ASP.NET Core applications, focusing on reliability and performance.",
    "Applied Entity Framework and dependency-injection patterns to improve application architecture.",
    "Built and maintained .NET applications backed by MSSQL and Oracle databases.",
    "Performed load and performance testing with JMeter and collaborated through Git and GitLab.",
  ],
};

const navItems = [
  ["intro", "Overview", "01"],
  ["about", "About", "02"],
  ["experience", "Experience", "03"],
  ["work", "Selected work", "04"],
  ["stack", "Technology", "05"],
  ["contact", "Contact", "06"],
] as const;

type Theme = "system" | "dark" | "light";

export default function PortfolioExperience() {
  const [theme, setTheme] = useState<Theme>("system");
  const [active, setActive] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mailState, setMailState] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme") as Theme | null;
    if (stored === "dark" || stored === "light" || stored === "system") setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const nodes = navItems.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0.05, 0.2, 0.45] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const message = String(data.get("message") || "");
    const body = `${message}\n\n— ${name} <${email}>`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailState("Your email app should open with the message ready to send.");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell" id="top">
      <a className="skip-link" href="#intro">Skip to content</a>
      <aside className="desktop-rail" aria-label="Main navigation">
        <a href="#intro" className="rail-mark" aria-label="Back to top">AS<span>.</span></a>
        <div className="rail-line" />
        <nav className="rail-nav">
          {navItems.map(([id, label, number]) => (
            <a key={id} href={`#${id}`} className={active === id ? "rail-link is-active" : "rail-link"} aria-label={label} title={label}>
              <span>{number}</span><i />
            </a>
          ))}
        </nav>
        <div className="rail-bottom">
          <button className="rail-theme" type="button" onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")} aria-label={`Theme: ${theme}. Change theme`} title={`Theme: ${theme}`}>
            {theme === "dark" ? "☾" : theme === "light" ? "☼" : "◐"}
          </button>
          <span className="rail-status"><i /> AVAILABLE FOR CONVERSATION</span>
        </div>
      </aside>

      <header className="mobile-bar">
        <a href="#intro" className="mobile-brand">AS<span>.</span></a>
        <div className="mobile-actions">
          <button className="rail-theme" type="button" onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")} aria-label="Change theme">{theme === "dark" ? "☾" : theme === "light" ? "☼" : "◐"}</button>
          <button className="menu-trigger" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE" : "MENU"} <span>{menuOpen ? "−" : "+"}</span></button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-menu">{navItems.map(([id, label, number]) => <a key={id} href={`#${id}`} onClick={closeMenu}><span>{number}</span>{label}<b>↗</b></a>)}</nav>}
      </header>

      <div className="portfolio-content">
        <section id="intro" className="hero-section">
          <div className="hero-topline"><span>INDEPENDENT ENGINEERING PORTFOLIO</span><span>NOIDA, IN <i /> IST</span></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-mark" /> SOFTWARE ENGINEER II <span className="eyebrow-divider">/</span> ARISTOCRAT TECHNOLOGIES</p>
              <h1>Engineering<br /><em>what’s next.</em></h1>
              <p className="hero-intro">I’m <strong>Aryan Sikka</strong> — a software engineer building production systems, game experiences, and intelligent tools that make complex work simpler.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">Explore selected work <span>↗</span></a>
                <a className="button-quiet" href={profile.resumeUrl} target="_blank" rel="noreferrer">Download résumé <span>↓</span></a>
              </div>
              <div className="hero-metrics">
                <div><strong>04<span>+</span></strong><small>YEARS BUILDING</small></div>
                <div><strong>05<span>–06</span></strong><small>PRODUCTION MODULES</small></div>
                <div><strong>30<span>%</span></strong><small>FASTER DELIVERY</small></div>
              </div>
            </div>
            <div className="hero-visual"><DigitalCore /><div className="visual-caption"><span>FIG. 01</span><span>THE DIGITAL CORE — A STUDY IN SYSTEMS</span></div></div>
          </div>
          <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-indicator">↓</span><span>DESIGNING · BUILDING · REFINING</span></div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="section-index"><span>01 / ABOUT</span><span>THE APPROACH</span></div>
          <div className="section-grid">
            <h2>Curiosity,<br /><em>made useful.</em></h2>
            <div className="about-copy">
              <p className="lead-copy">I enjoy working where engineering discipline meets creative problem-solving — from the architecture behind a game to the systems that help teams build them.</p>
              <p>My experience spans cross-platform game development, .NET applications, reusable frameworks, backend integrations, and AI-assisted automation. I care about the details users never see: reliable state, predictable systems, clear abstractions, and thoughtful performance.</p>
              <div className="principles"><div><span>01</span><strong>Build with intent</strong><small>Start with the problem, not the tool.</small></div><div><span>02</span><strong>Make it reusable</strong><small>Good systems make the next release easier.</small></div><div><span>03</span><strong>Own the outcome</strong><small>Quality means more than code that compiles.</small></div></div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <div className="section-index"><span>02 / EXPERIENCE</span><span>THE JOURNEY SO FAR</span></div>
          <div className="section-heading-row"><h2>Built through<br /><em>real work.</em></h2><p>From enterprise performance software to production mobile game experiences — learning by shipping, debugging, and improving.</p></div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-entry" key={job.company}>
                <div className="timeline-meta"><span>0{index + 1}</span><small>{job.period}</small></div>
                <div className="timeline-body">
                  <div className="timeline-title"><div><h3>{job.company}</h3><p>{job.role} <span>·</span> {job.location}</p></div>{job.current && <span className="current-tag"><i /> CURRENT</span>}</div>
                  {job.blurb && <p className="job-blurb">{job.blurb}</p>}
                  <ul>{(experienceHighlights[job.company] || job.bullets.slice(0, 4)).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <div className="tag-row">{job.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="content-section work-section">
          <div className="section-index"><span>03 / SELECTED WORK</span><span>FEATURED PROJECTS</span></div>
          <div className="section-heading-row"><h2>Ideas into<br /><em>systems.</em></h2><p>A focused selection of engineering work. Each project is presented through its problem, contribution, and outcome — without exposing proprietary implementation details.</p></div>
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <article className={`project-row project-${project.accent}`} key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-main"><div className="project-type">{project.context === "work" ? "PROFESSIONAL WORK" : "PERSONAL PROJECT"}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <div className="project-outcome"><strong>{project.metric}</strong><span>{project.metricLabel}</span><i>↗</i></div>
              </article>
            ))}
          </div>
          <p className="project-note"><span>NOTE</span> Professional project descriptions are intentionally high-level to respect internal and proprietary information.</p>
        </section>

        <section id="stack" className="content-section stack-section">
          <div className="section-index"><span>04 / TECHNOLOGY</span><span>TOOLS OF THE TRADE</span></div>
          <div className="section-heading-row"><h2>A versatile<br /><em>toolkit.</em></h2><p>Technology is a means to an end. I choose tools based on the system, the constraints, and the people who will maintain it.</p></div>
          <div className="skill-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><div className="skill-group-top"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
          <div className="education-strip"><div><span className="micro-label">EDUCATION</span><h3>{education.degree}</h3><p>{education.school} · {education.location}</p></div><div className="education-result"><strong>{education.result}</strong><span>{education.period}</span></div></div>
          <div className="cert-list"><span className="micro-label">CERTIFICATIONS & LEARNING</span>{certifications.map((cert) => <span key={cert}>{cert}</span>)}</div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="section-index"><span>05 / CONTACT</span><span>START A CONVERSATION</span></div>
          <div className="contact-layout">
            <div><p className="eyebrow"><span className="eyebrow-mark" /> OPEN TO GOOD CONVERSATIONS</p><h2>Have a good<br /><em>problem?</em></h2><p className="contact-intro">I’m always interested in thoughtful conversations about engineering, game technology, automation, and ideas worth building.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label>Subject<input name="subject" placeholder="A project, an idea, an opportunity…" /></label>
              <label>Message<textarea name="message" rows={4} required placeholder="Tell me what you're thinking about." /></label>
              <div className="form-bottom"><small>Opens your email app with the message pre-filled.</small><button className="button-primary" type="submit">Prepare email <span>↗</span></button></div>
              {mailState && <p className="form-status" role="status">{mailState}</p>}
            </form>
          </div>
        </section>

        <footer className="portfolio-footer"><a href="#intro" className="footer-mark">AS<span>.</span></a><span>DESIGNED & ENGINEERED WITH INTENT.</span><span>© {new Date().getFullYear()} ARYAN SIKKA</span><a href="/blog">WRITING & NOTES ↗</a></footer>
      </div>
    </main>
  );
}
