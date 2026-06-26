"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type LinkItem = { href: string; label: string };

export default function MobileMenu({
  links,
  resumeUrl,
}: {
  links: LinkItem[];
  resumeUrl: string;
}) {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="md:hidden theme-toggle relative"
      >
        <span className="sr-only">Toggle menu</span>
        <span className="relative block w-4 h-3.5">
          <span
            className={`absolute left-0 top-0 w-4 h-px bg-current transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] w-4 h-px bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 bottom-0 w-4 h-px bg-current transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`md:hidden fixed inset-0 top-16 z-30 bg-bg/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sheet */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-3 mt-2 rounded-xl border border-border bg-bg/95 backdrop-blur-md shadow-xl overflow-hidden">
          <ul className="py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-base text-text hover:bg-surface/80 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-border mt-1 pt-1">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-base text-accent hover:bg-surface/80 transition-colors"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
