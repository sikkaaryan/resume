import Link from "next/link";
import SiteFrame from "./SiteFrame";
import Avatar from "@/components/Avatar";
import { education, experience, skillGroups, certifications, featuredProjects } from "@/lib/data";
import { githubProjects } from "@/lib/github-projects";
import { posts } from "@/lib/posts";

const careerHighlights = [
  "Build and maintain mobile game modules for Android and iOS.",
  "Work across C#, TypeScript, Unity-based architecture, and backend APIs.",
  "Contributed to several production titles, including Buffalo Link.",
  "Built a reusable game template that reduced setup and development time by around 30%.",
];

const cavissonHighlights = [
  "Worked on ASP.NET MVC and ASP.NET Core applications.",
  "Used Entity Framework, dependency injection, and SOLID principles.",
  "Maintained .NET applications using MSSQL and Oracle.",
  "Ran JMeter tests to check application performance under load.",
];

function PageIntro({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="page-intro">
      <p className="page-eyebrow">{kicker}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  );
}

export function HomePage() {
  return (
    <SiteFrame section="HOME / OVERVIEW">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="page-eyebrow"><i /> SOFTWARE ENGINEER II · NOIDA, INDIA</p>
          <h1>Hi, I’m Aryan.<br /><em>I build software.</em></h1>
          <p className="home-lede">I work on mobile games, .NET applications, and tools that make development work a little easier.</p>
          <div className="page-actions">
            <Link className="button-primary" href="/projects">See my projects <span>↗</span></Link>
            <Link className="text-link" href="/experience">Where I’ve worked <span>↗</span></Link>
          </div>
          <div className="home-facts">
            <div><span>01</span><strong>Game development</strong><small>Android · iOS · Unity</small></div>
            <div><span>02</span><strong>Application development</strong><small>C# · .NET · TypeScript</small></div>
            <div><span>03</span><strong>Tools & automation</strong><small>Frameworks · Developer tools</small></div>
          </div>
        </div>
        <div className="home-portrait-wrap">
          <div className="home-portrait"><Avatar /></div>
          <div className="portrait-caption"><span>ARYAN SIKKA</span><span>SOFTWARE ENGINEER</span></div>
          <div className="portrait-coordinate">28° N / 77° E</div>
        </div>
      </section>

      <section className="home-next">
        <div className="section-title-row"><div><p className="page-eyebrow">A FEW THINGS I’VE BUILT</p><h2>Selected work</h2></div><Link className="text-link" href="/projects">All projects ↗</Link></div>
        <div className="compact-project-grid">
          <article><span>01 / PROFESSIONAL</span><h3>Production game modules</h3><p>Gameplay features and systems for cross-platform mobile games.</p><Link href="/projects#professional">Read more ↗</Link></article>
          <article><span>02 / PROFESSIONAL</span><h3>Reusable game framework</h3><p>A shared foundation that made setting up new titles quicker.</p><Link href="/projects#framework">Read more ↗</Link></article>
          <article><span>03 / PERSONAL</span><h3>StayMatch</h3><p>A search tool for finding stays against a set of must-have requirements.</p><Link href="/github#staymatch">View project ↗</Link></article>
        </div>
      </section>

      <section className="home-writing">
        <div><p className="page-eyebrow">WRITING & NOTES</p><h2>Things I’ve been working through.</h2><p>Notes on code, game systems, and the problems behind the work.</p></div>
        <Link className="button-outline" href="/writing">Read the notes <span>↗</span></Link>
      </section>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame section="ABOUT / BACKGROUND">
      <PageIntro kicker="ABOUT ME" title={<>A little about<br /><em>how I work.</em></>} copy="I’m a software engineer based in Noida. Most of my work has been around mobile games and .NET applications, with a growing interest in tools that improve the way software gets built." />
      <div className="about-page-grid">
        <div className="about-note"><span>01 / WHAT I DO</span><h2>I like building things that solve a real problem.</h2><p>I’ve worked on features from the first implementation through testing and release. That has meant writing game logic, connecting APIs, fixing bugs, and making common code easier for the rest of the team to use.</p></div>
        <div className="about-note"><span>02 / WHAT I ENJOY</span><h2>Understanding how the pieces fit together.</h2><p>I enjoy debugging difficult issues, improving existing code, and working out where a reusable solution makes sense. I’m also interested in game technology, backend systems, and practical uses of AI in development.</p></div>
        <div className="about-note about-note--wide"><span>03 / OUTSIDE THE DAY JOB</span><h2>I build small projects to try ideas.</h2><p>Some are dashboards and mobile-first web apps. Others are game prototypes or tools for a specific job. They give me room to experiment with a different stack and learn by making something usable.</p></div>
      </div>
      <div className="inline-cta"><span>Want the work history?</span><Link href="/experience">View experience ↗</Link></div>
    </SiteFrame>
  );
}

export function ExperiencePage() {
  return (
    <SiteFrame section="EXPERIENCE / CAREER">
      <PageIntro kicker="WORK EXPERIENCE" title={<>The work,<br /><em>so far.</em></>} copy="A look at the teams I’ve worked with and the kind of work I’ve been doing." />
      <div className="career-list">
        <article className="career-entry">
          <div className="career-dates"><span>OCT 2024 — PRESENT</span><i>CURRENT ROLE</i></div>
          <div className="career-details">
            <p className="career-company">ARISTOCRAT TECHNOLOGIES</p><h2>Software Engineer II</h2><p className="career-location">Noida, India</p>
            <ul>{careerHighlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="tag-row"><span>C#</span><span>TypeScript</span><span>Unity</span><span>Android</span><span>iOS</span><span>GitLab CI/CD</span></div>
          </div>
        </article>
        <article className="career-entry">
          <div className="career-dates"><span>JUL 2022 — OCT 2024</span><i>PREVIOUS ROLE</i></div>
          <div className="career-details">
            <p className="career-company">CAVISSON SYSTEMS INC.</p><h2>Software Engineer</h2><p className="career-location">Noida, India</p>
            <ul>{cavissonHighlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="tag-row"><span>C#</span><span>.NET Core</span><span>ASP.NET MVC</span><span>Entity Framework</span><span>MSSQL</span><span>Oracle</span><span>JMeter</span></div>
          </div>
        </article>
      </div>
      <div className="experience-result"><span>ONE THING I’VE LEARNED</span><p>Shipping is only part of the job. The code also has to be supportable, testable, and understandable by the next person who works on it.</p></div>
      <div className="inline-cta"><span>See selected work and personal projects</span><Link href="/projects">View projects ↗</Link></div>
    </SiteFrame>
  );
}

export function ProjectsPage() {
  return (
    <SiteFrame section="PROJECTS / SELECTED WORK">
      <PageIntro kicker="SELECTED WORK" title={<>A few projects<br /><em>worth a look.</em></>} copy="A mix of work from my day job and things I’ve built on my own. The professional work is described at a high level; the public repositories have more detail." />
      <section className="project-feature-list" id="professional">
        <div className="subsection-label">01 / PROFESSIONAL WORK</div>
        <article className="feature-work"><div className="feature-work__number">01</div><div><p>ARISTOCRAT TECHNOLOGIES</p><h2>Mobile game development</h2><p>Development of production game modules for Android and iOS, working across gameplay features, game configuration, UI flows, and backend integration.</p><div className="tag-row"><span>C#</span><span>TypeScript</span><span>Unity</span><span>Mobile</span></div></div><span className="feature-work__side">PRODUCTION</span></article>
        <article className="feature-work" id="framework"><div className="feature-work__number">02</div><div><p>INTERNAL DEVELOPMENT TOOLS</p><h2>Reusable game framework</h2><p>A shared game foundation with configurable components. It helped reduce repeated setup work and cut new-title development time by around 30%.</p><div className="tag-row"><span>TypeScript</span><span>Framework design</span><span>Reusable components</span></div></div><span className="feature-work__side">~30% LESS SETUP TIME</span></article>
        <article className="feature-work"><div className="feature-work__number">03</div><div><p>PERSONAL / EXPERIMENTAL</p><h2>AI-assisted development workflows</h2><p>Small internal workflows exploring where code generation and automated checks can remove repetitive work. Details are kept high-level because the work is internal.</p><div className="tag-row"><span>AI tooling</span><span>Automation</span><span>Developer workflows</span></div></div><span className="feature-work__side">INTERNAL TOOLING</span></article>
      </section>
      <section className="github-project-preview">
        <div className="section-title-row"><div><p className="page-eyebrow">PUBLIC REPOSITORIES</p><h2>Things I’ve built myself</h2></div><Link className="text-link" href="/github">All GitHub projects ↗</Link></div>
        <div className="github-card-grid">{githubProjects.slice(0, 3).map((project) => <article className="github-project-card" key={project.slug}><span>{project.kind}</span><h3>{project.name}</h3><p>{project.description}</p><Link href={`/github#${project.slug}`}>Project details ↗</Link></article>)}</div>
      </section>
    </SiteFrame>
  );
}

export function GitHubPage() {
  return (
    <SiteFrame section="GITHUB / PUBLIC PROJECTS">
      <PageIntro kicker="PUBLIC REPOSITORIES" title={<>Built, tested,<br /><em>and shared.</em></>} copy="These are public projects from my GitHub. Open a repository to see the code and its history." />
      <div className="github-project-grid">
        {githubProjects.map((project, index) => (
          <article className="github-project-card" id={project.slug} key={project.slug}>
            <div className="github-card-top"><span>0{index + 1} / {project.kind}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.repository} repository`}>↗</a></div>
            <h2>{project.name}</h2><p>{project.description}</p>
            <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="github-card-actions"><a href={project.url} target="_blank" rel="noreferrer">View source <b>↗</b></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Open live app <b>↗</b></a>}</div>
          </article>
        ))}
      </div>
      <p className="github-footnote">Some repositories are experiments and small utilities rather than polished products. The source code is the best place to see their current state.</p>
      <div className="inline-cta"><span>More repositories and activity</span><a href="https://github.com/sikkaaryan?tab=repositories" target="_blank" rel="noreferrer">Open GitHub profile ↗</a></div>
    </SiteFrame>
  );
}

export function TechnologyPage() {
  return (
    <SiteFrame section="TECHNOLOGY / TOOLKIT">
      <PageIntro kicker="TECHNOLOGY" title={<>The tools I<br /><em>work with.</em></>} copy="The languages, frameworks, and tools I’ve used across my work and side projects." />
      <div className="technology-grid">
        {skillGroups.map((group, index) => <section className="technology-group" key={group.title}><div><span>0{index + 1}</span><h2>{group.title}</h2></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
      </div>
      <section className="education-block"><div><p className="page-eyebrow">EDUCATION</p><h2>{education.degree}</h2><p>{education.school} · {education.location}</p><span>{education.period}</span></div><strong>{education.result}</strong></section>
      <section className="certification-block"><p className="page-eyebrow">CERTIFICATIONS</p><div className="certification-row">{certifications.map((cert, index) => <article key={cert}><span>0{index + 1}</span><strong>{cert}</strong></article>)}</div></section>
    </SiteFrame>
  );
}

export function WritingPage() {
  return (
    <SiteFrame section="WRITING / NOTES">
      <PageIntro kicker="WRITING & NOTES" title={<>Notes from<br /><em>the work.</em></>} copy="A place for longer notes about engineering problems, tools, and things I’ve learned while building." />
      <div className="writing-list">
        {posts.map((post, index) => <article className="writing-entry" key={post.slug}><span>0{index + 1} / ARTICLE</span><div><h2>{post.title}</h2><p>{post.summary}</p><div className="writing-meta"><span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span><span>{post.minutes} min read</span><span>{post.tags.join(" · ")}</span></div></div><Link href={`/blog/${post.slug}`}>Read note ↗</Link></article>)}
      </div>
      <div className="writing-bottom"><span>I’ll add to this section as I have something worth writing down.</span><a href="https://github.com/sikkaaryan" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div>
    </SiteFrame>
  );
}
