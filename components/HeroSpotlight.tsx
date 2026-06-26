"use client";

import { useEffect, useRef } from "react";

export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(pointer: coarse)").matches)
    ) {
      return;
    }
    const parent = ref.current?.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
      el.style.setProperty("--spot-opacity", "1");
    };
    const onLeave = () => {
      ref.current?.style.setProperty("--spot-opacity", "0");
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "50%",
          "--spot-opacity": "0",
          opacity: "var(--spot-opacity)",
          background:
            "radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(34,211,238,0.18), transparent 70%)",
        } as React.CSSProperties
      }
    />
  );
}
