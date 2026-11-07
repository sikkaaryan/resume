"use client";

import { useEffect } from "react";
import { startPortfolioAudio } from "@/lib/portfolio-audio";

export default function AmbientSoundProvider() {
  useEffect(() => {
    let audio: ReturnType<typeof startPortfolioAudio> | null = null;
    let started = false;

    const start = async () => {
      if (started) return;
      started = true;
      try {
        audio = startPortfolioAudio();
        await audio.context.resume();
        if (audio.context.state !== "running") started = false;
      } catch {
        started = false;
      }
    };

    // Browsers may block audible autoplay. Try immediately, then resume
    // automatically on the visitor's first interaction—without a sound toggle.
    void start();
    window.addEventListener("pointerdown", start, { once: true });
    window.addEventListener("keydown", start, { once: true });
    window.addEventListener("touchstart", start, { once: true });

    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("touchstart", start);
      if (audio) {
        audio.master.gain.setTargetAtTime(0.0001, audio.context.currentTime, 0.4);
        window.setTimeout(() => {
          audio?.sources.forEach((source) => { try { source.stop(); } catch {} });
          void audio?.context.close();
        }, 1500);
      }
    };
  }, []);

  return null;
}
