import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFrame from "@/components/portfolio/SiteFrame";
import { getGithubProject, githubProjects } from "@/lib/github-projects";

export function generateStaticParams() {
  return githubProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getGithubProject(slug);
  if (!project) notFound();

  return (
    <SiteFrame section={`GITHUB / ${project.repository.toUpperCase()}`}>
      <div className="project-detail">
        <p className="page-eyebrow">{project.kind.toUpperCase()}</p>
        <h1>{project.name}</h1>
        <p className="project-detail__intro">{project.description}</p>
        <div className="project-detail__actions">
          <a className="button-primary" href={project.url} target="_blank" rel="noreferrer">Open repository <span>↗</span></a>
          {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project ↗</a>}
        </div>
        <section className="project-detail__section">
          <p className="page-eyebrow">WHAT IT DOES</p>
          <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </section>
        <section className="project-detail__section">
          <p className="page-eyebrow">TECHNOLOGY</p>
          <div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </section>
        <Link href="/github" className="text-link">← Back to GitHub projects</Link>
      </div>
    </SiteFrame>
  );
}
