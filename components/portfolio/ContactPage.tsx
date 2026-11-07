import SiteFrame from "./SiteFrame";
import MailtoForm from "./MailtoForm";
import { profile } from "@/lib/data";

export default function ContactPage() {
  return (
    <SiteFrame section="CONTACT / GET IN TOUCH">
      <div className="contact-page-grid">
        <div>
          <p className="page-eyebrow">CONTACT</p>
          <h1>Let’s talk<br /><em>about the work.</em></h1>
          <p className="contact-page-copy">For roles, collaborations, or a good technical conversation, send me a note.</p>
          <div className="contact-direct">
            <a href={`mailto:${profile.email}`}><span>EMAIL</span>{profile.email} ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span>Connect ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span>GITHUB</span>See my repositories ↗</a>
          </div>
        </div>
        <MailtoForm />
      </div>
    </SiteFrame>
  );
}
