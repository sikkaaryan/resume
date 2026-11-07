"use client";

import { useAmbientSound } from "./AmbientSoundProvider";

export default function AmbientSoundToggle() {
  const { enabled, unavailable, toggle } = useAmbientSound();
  return (
    <button className="ambient-sound-toggle" type="button" onClick={() => void toggle()} aria-pressed={enabled} title={unavailable ? "Audio is unavailable in this browser" : "Toggle cinematic ambient sound"}>
      <span className={enabled ? "ambient-sound-toggle__pulse is-on" : "ambient-sound-toggle__pulse"} />
      {unavailable ? "AUDIO UNAVAILABLE" : enabled ? "AMBIENCE ON" : "AMBIENCE OFF"}
      <span aria-hidden="true">{enabled ? "◖))" : "◖×"}</span>
    </button>
  );
}
