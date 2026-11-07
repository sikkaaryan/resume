import type { ReactNode } from "react";
import SiteNav from "./SiteNav";

export default function SiteFrame({
  children,
  section,
}: {
  children: ReactNode;
  section: string;
}) {
  return (
    <div className="portfolio-shell">
      <SiteNav />
      <main className="page-main">
        <div className="page-section-label"><span>{section}</span><span>ARYAN SIKKA · SOFTWARE ENGINEER</span></div>
        {children}
      </main>
      <footer className="site-footer">
        <a className="footer-logo" href="/home">AS<span>.</span></a>
        <span>NOIDA, INDIA</span>
        <span>© {new Date().getFullYear()} ARYAN SIKKA</span>
        <a href="https://github.com/sikkaaryan" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </footer>
    </div>
  );
}
