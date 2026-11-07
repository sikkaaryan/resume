"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";

export default function MailtoForm() {
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
    <form className="contact-form contact-form--page" onSubmit={onSubmit}>
      <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
      <label>Subject<input name="subject" placeholder="What is this about?" /></label>
      <label>Message<textarea name="message" rows={6} required placeholder="Write a few lines…" /></label>
      <div className="form-bottom"><small>This opens your email app. Nothing is sent through this website.</small><button className="button-primary" type="submit">Prepare email <span>↗</span></button></div>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
