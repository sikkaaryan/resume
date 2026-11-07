"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/github", label: "GitHub" },
  { href: "/technology", label: "Technology" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

type Theme = "system" | "dark" | "light";

export default function SiteNav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light" || saved === "system") setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => setOpen(false), [pathname]);

  function cycleTheme() {
    setTheme((current) => current === "system" ? "dark" : current === "dark" ? "light" : "system");
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-logo" href="/home" aria-label="Aryan Sikka home">AS<span>.</span></Link>
        <nav className="site-nav-desktop" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === "/writing" && pathname.startsWith("/blog")) || (link.href === "/projects" && pathname.startsWith("/projects/"));
            return <Link key={link.href} href={link.href} className={active ? "site-nav-link is-active" : "site-nav-link"}>{link.label}</Link>;
          })}
        </nav>
        <div className="site-header__actions">
          <button type="button" className="theme-cycle" onClick={cycleTheme} aria-label={`Theme set to ${theme}; change theme`} title={`Theme: ${theme}`}>
            {theme === "system" ? "◐" : theme === "dark" ? "☾" : "☼"}
          </button>
          <a className="nav-resume" href="/Aryan-Sikka-Resume.pdf" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
          <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"} <span>{open ? "−" : "+"}</span></button>
        </div>
      </div>
      {open && <nav id="mobile-site-nav" className="site-nav-mobile" aria-label="Mobile navigation">
        {links.map((link, index) => <Link key={link.href} href={link.href}><span>0{index + 1}</span>{link.label}<b>↗</b></Link>)}
        <a href="/Aryan-Sikka-Resume.pdf" target="_blank" rel="noreferrer">Download résumé <b>↓</b></a>
      </nav>}
    </header>
  );
}
