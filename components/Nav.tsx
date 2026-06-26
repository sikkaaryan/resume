import Link from "next/link";
import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/#top"
          className="text-sm font-semibold tracking-tight hover:text-accent transition-colors"
        >
          Aryan Sikka
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link hover:text-text transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-xs px-3.5 py-1.5 rounded-md border border-accent/40 text-accent hover:bg-accent hover:text-bg transition-colors"
          >
            Resume
          </a>
          <MobileMenu links={links} resumeUrl={profile.resumeUrl} />
        </div>
      </nav>
    </header>
  );
}
