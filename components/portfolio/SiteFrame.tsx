import type { ReactNode } from "react";
import SiteNav from "./SiteNav";
import AmbientSoundToggle from "./AmbientSoundToggle";

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
        <div className="site-footer__links"><AmbientSoundToggle /><a href="https://github.com/sikkaaryan" target="_blank" rel="noreferrer">GITHUB ↗</a></div>
      </footer>
    </div>
  );
}
