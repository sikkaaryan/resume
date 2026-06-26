import Link from "next/link";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#top" className="mono text-sm">
          <span className="text-accent">~/</span>
          <span className="text-text">aryan-sikka</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 mono text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mono text-xs px-3 py-1.5 rounded border border-border hover:border-accent hover:text-accent transition-colors"
        >
          resume.pdf
        </a>
      </nav>
    </header>
  );
}
