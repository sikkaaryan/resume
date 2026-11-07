"use client";

import { useState, type FormEvent } from "react";
import SiteFrame from "./SiteFrame";
import { profile } from "@/lib/data";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const message = String(data.get("message") || "");
    const body = `${message}\n\n— ${name} <${email}>`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message filled in.");
  }

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
        <form className="contact-form contact-form--page" onSubmit={onSubmit}>
          <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          <label>Subject<input name="subject" placeholder="What is this about?" /></label>
          <label>Message<textarea name="message" rows={6} required placeholder="Write a few lines…" /></label>
          <div className="form-bottom"><small>This opens your email app. Nothing is sent through this website.</small><button className="button-primary" type="submit">Prepare email <span>↗</span></button></div>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </SiteFrame>
  );
}
