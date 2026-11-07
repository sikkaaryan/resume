"use client";

import { useEffect, useRef, useState } from "react";
import { startPortfolioAudio, stopPortfolioAudio, type PortfolioAudio } from "@/lib/portfolio-audio";

export default function AmbientSoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const rig = useRef<PortfolioAudio | null>(null);

  async function toggle() {
    if (rig.current) {
      const current = rig.current;
      rig.current = null;
      stopPortfolioAudio(current);
      setEnabled(false);
      return;
    }
    try {
      const audio = startPortfolioAudio();
      rig.current = audio;
      await audio.context.resume();
      setEnabled(true);
      setUnavailable(false);
    } catch {
      setUnavailable(true);
      setEnabled(false);
    }
  }

  useEffect(() => () => {
    if (rig.current) stopPortfolioAudio(rig.current);
    rig.current = null;
  }, []);

  return (
    <button className="ambient-sound-toggle" type="button" onClick={toggle} aria-pressed={enabled} title={unavailable ? "Audio is unavailable in this browser" : "Toggle cinematic ambient sound"}>
      <span className={enabled ? "ambient-sound-toggle__pulse is-on" : "ambient-sound-toggle__pulse"} />
      {unavailable ? "AUDIO UNAVAILABLE" : enabled ? "AMBIENCE ON" : "AMBIENCE OFF"}
      <span aria-hidden="true">{enabled ? "◖))" : "◖×"}</span>
    </button>
  );
}
