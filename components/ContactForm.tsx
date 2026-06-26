"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const subject = (data.get("subject") as string) || "Hello from your portfolio";
    const message = (data.get("message") as string) || "";

    const body = `${message}\n\n— ${name}${email ? ` <${email}>` : ""}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <Field>
          <label className="contact-label">Name</label>
          <input
            name="name"
            required
            className="contact-input"
            placeholder="Your name"
          />
        </Field>
        <Field>
          <label className="contact-label">Email</label>
          <input
            name="email"
            type="email"
            required
            className="contact-input"
            placeholder="you@example.com"
          />
        </Field>
      </div>
      <Field>
        <label className="contact-label">Subject</label>
        <input
          name="subject"
          className="contact-input"
          placeholder="What's this about?"
        />
      </Field>
      <Field>
        <label className="contact-label">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="contact-input resize-y"
          placeholder="Tell me a bit about what you're working on…"
        />
      </Field>
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-[11px] text-muted">
          Opens your email client with the message pre-filled.
        </p>
        <button
          type="submit"
          className="group/btn text-sm px-5 py-2.5 rounded-md bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
        >
          {sent ? "Opening mail…" : "Send"}{" "}
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5">{children}</div>;
}
