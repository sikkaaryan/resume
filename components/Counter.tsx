"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value.replace(/\d+/g, "0"));
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      startedRef.current = true;
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || startedRef.current) continue;
          startedRef.current = true;
          io.disconnect();
          const start = performance.now();
          const targets = (value.match(/\d+/g) || []).map(Number);
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            let i = 0;
            const next = value.replace(/\d+/g, () => {
              const target = targets[i++] ?? 0;
              return String(Math.round(target * eased));
            });
            setDisplay(next);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
