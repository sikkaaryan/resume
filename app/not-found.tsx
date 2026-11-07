import Link from "next/link";
import SiteFrame from "@/components/portfolio/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame section="404 / NOT FOUND">
      <div className="not-found-page">
        <p className="page-eyebrow">ERROR / 404</p>
        <h1>That page<br /><em>isn’t here.</em></h1>
        <p>The address may have changed, or the page may no longer exist.</p>
        <div className="page-actions">
          <Link className="button-primary" href="/home">Back home <span>↗</span></Link>
          <Link className="text-link" href="/projects">Browse projects ↗</Link>
        </div>
      </div>
    </SiteFrame>
  );
}
