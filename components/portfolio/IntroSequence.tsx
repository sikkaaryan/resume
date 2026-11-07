"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DigitalCore from "./DigitalCore";

const INTRO_MS = 5000;

export default function IntroSequence() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<{ context: AudioContext; oscillators: OscillatorNode[]; master: GainNode } | null>(null);

  function stopSound() {
    const audio = audioRef.current;
    if (!audio) return;
    audioRef.current = null;
    try {
      audio.master.gain.setTargetAtTime(0.0001, audio.context.currentTime, 0.15);
      window.setTimeout(() => {
        audio.oscillators.forEach((oscillator) => { try { oscillator.stop(); } catch {} });
        void audio.context.close();
      }, 650);
    } catch { void audio.context.close(); }
    setSoundEnabled(false);
  }

  async function toggleSound() {
    if (audioRef.current) { stopSound(); return; }
    try {
      const context = new window.AudioContext();
      await context.resume();
      const master = context.createGain();
      master.gain.setValueAtTime(0.0001, context.currentTime);
      master.gain.exponentialRampToValueAtTime(0.045, context.currentTime + 1.25);
      master.connect(context.destination);
      const oscillators: OscillatorNode[] = [];
      [
        { frequency: 55, type: "sine" as OscillatorType, gain: 0.7 },
        { frequency: 82.41, type: "sine" as OscillatorType, gain: 0.22 },
        { frequency: 164.81, type: "triangle" as OscillatorType, gain: 0.045 },
      ].forEach((layer) => {
        const oscillator = context.createOscillator();
        const volume = context.createGain();
        oscillator.type = layer.type;
        oscillator.frequency.value = layer.frequency;
        volume.gain.value = layer.gain;
        oscillator.connect(volume);
        volume.connect(master);
        oscillator.start();
        oscillators.push(oscillator);
      });
      audioRef.current = { context, oscillators, master };
      setSoundEnabled(true);
    } catch { setSoundEnabled(false); }
  }

  function enter() {
    if (leaving) return;
    setLeaving(true);
    stopSound();
    try { window.sessionStorage.setItem("portfolio-intro-seen", "1"); } catch {}
    window.setTimeout(() => router.replace("/home"), 420);
  }

  useEffect(() => {
    let timer: number | undefined;
    try {
      if (window.sessionStorage.getItem("portfolio-intro-seen") === "1") {
        router.replace("/home");
        return;
      }
    } catch {}
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      enter();
      return;
    }
    timer = window.setTimeout(enter, INTRO_MS);
    return () => {
      if (timer) window.clearTimeout(timer);
      const audio = audioRef.current;
      if (audio) {
        audio.oscillators.forEach((oscillator) => { try { oscillator.stop(); } catch {} });
        void audio.context.close();
        audioRef.current = null;
      }
    };
  }, [router]);

  return (
    <main className={leaving ? "intro-screen is-leaving" : "intro-screen"}>
      <div className="intro-noise" />
      <div className="intro-topline"><span>AS / 001</span><span>PERSONAL ENGINEERING PORTFOLIO</span></div>
      <div className="intro-center">
        <div className="intro-core"><DigitalCore /></div>
        <p className="intro-overline">SOFTWARE ENGINEER II</p>
        <h1>Aryan<br /><em>Sikka.</em></h1>
        <p className="intro-caption">MOBILE GAMES <i /> .NET <i /> DEVELOPER TOOLS</p>
      </div>
      <div className="intro-bottom">
        <div className="intro-progress"><span /></div>
        <span>ENTERING PORTFOLIO</span>
        <button className="intro-sound-toggle" type="button" onClick={toggleSound} aria-pressed={soundEnabled}>
          {soundEnabled ? "SOUND ON" : "ENABLE SOUND"} <b>{soundEnabled ? "◖))" : "◖×"}</b>
        </button>
        <button type="button" onClick={enter}>SKIP INTRO <b>↗</b></button>
      </div>
      <a className="intro-skip-fallback" href="/home">Skip intro</a>
    </main>
  );
}
