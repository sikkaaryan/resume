import Reveal from "./Reveal";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/sikkaaryan/repos?sort=updated&per_page=12",
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as Repo[];
    return data
      .filter((r) => !r.fork && !r.archived)
      .slice(0, 4);
  } catch {
    return [];
  }
}

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - then);
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

const langColor: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "C#": "#178600",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00ADD8",
};

export default async function GitHubActivity() {
  const repos = await getRepos();
  if (!repos.length) return null;

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-20">
      <Reveal>
        <div className="flex items-end justify-between mb-7 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-75 pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent2" />
              </span>
              <span className="mono text-xs uppercase tracking-[0.2em] text-accent">
                Live from GitHub
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Recent Repositories
            </h2>
          </div>
          <a
            href="https://github.com/sikkaaryan"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors whitespace-nowrap"
          >
            @sikkaaryan ↗
          </a>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((r, i) => (
          <Reveal as="article" key={r.id} delay={i * 80}>
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="lift group block h-full rounded-xl border border-border bg-surface/40 p-5 hover:border-accent/40 hover:bg-surface/70"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors truncate">
                  {r.name}
                </h3>
                <div className="mono text-[11px] text-muted flex items-center gap-3 shrink-0">
                  <span>★ {r.stargazers_count}</span>
                  {r.forks_count > 0 && <span>⑂ {r.forks_count}</span>}
                </div>
              </div>
              {r.description && (
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                  {r.description}
                </p>
              )}
              <div className="mt-4 flex items-center gap-4 text-[11px] text-muted">
                {r.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{
                        background: langColor[r.language] || "#8a93a6",
                      }}
                    />
                    {r.language}
                  </span>
                )}
                <span>Updated {timeAgo(r.updated_at)}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
