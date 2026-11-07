"use client";

import { useEffect, useRef, useState } from "react";

type AudioRig = { context: AudioContext; master: GainNode; oscillators: OscillatorNode[] };

export default function AmbientSoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const rig = useRef<AudioRig | null>(null);

  function stop() {
    const current = rig.current;
    if (!current) return;
    rig.current = null;
    try {
      current.master.gain.setTargetAtTime(0.0001, current.context.currentTime, 0.25);
      window.setTimeout(() => {
        current.oscillators.forEach((osc) => { try { osc.stop(); } catch {} });
        void current.context.close();
      }, 1100);
    } catch { void current.context.close(); }
    setEnabled(false);
  }

  async function toggle() {
    if (rig.current) { stop(); return; }
    try {
      const AudioContextClass = window.AudioContext;
      if (!AudioContextClass) throw new Error("Web Audio is unavailable");
      const context = new AudioContextClass();
      await context.resume();
      const master = context.createGain();
      master.gain.setValueAtTime(0.0001, context.currentTime);
      master.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 2);
      master.connect(context.destination);
      const oscillators: OscillatorNode[] = [];
      const layers = [
        { frequency: 55, type: "sine" as OscillatorType, volume: 0.62, detune: -3 },
        { frequency: 82.41, type: "sine" as OscillatorType, volume: 0.28, detune: 2 },
        { frequency: 110, type: "triangle" as OscillatorType, volume: 0.12, detune: 4 },
        { frequency: 164.81, type: "sine" as OscillatorType, volume: 0.08, detune: -5 },
      ];
      layers.forEach((layer) => {
        const osc = context.createOscillator();
        const gain = context.createGain();
        const filter = context.createBiquadFilter();
        osc.type = layer.type;
        osc.frequency.value = layer.frequency;
        osc.detune.value = layer.detune;
        filter.type = "lowpass";
        filter.frequency.value = 420;
        gain.gain.value = layer.volume;
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(master);
        osc.start();
        oscillators.push(osc);
      });
      rig.current = { context, master, oscillators };
      setEnabled(true);
      setUnavailable(false);
    } catch {
      setUnavailable(true);
      setEnabled(false);
    }
  }

  useEffect(() => () => {
    const current = rig.current;
    if (!current) return;
    current.oscillators.forEach((osc) => { try { osc.stop(); } catch {} });
    void current.context.close();
    rig.current = null;
  }, []);

  return (
    <button className="ambient-sound-toggle" type="button" onClick={toggle} aria-pressed={enabled} title={unavailable ? "Audio is unavailable in this browser" : "Toggle ambient portfolio sound"}>
      <span className={enabled ? "ambient-sound-toggle__pulse is-on" : "ambient-sound-toggle__pulse"} />
      {unavailable ? "AUDIO UNAVAILABLE" : enabled ? "SOUND ON" : "SOUND OFF"}
      <span aria-hidden="true">{enabled ? "◖))" : "◖×"}</span>
    </button>
  );
}
