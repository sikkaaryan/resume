"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DigitalCore from "./DigitalCore";
import { startPortfolioAudio, stopPortfolioAudio, type PortfolioAudio } from "@/lib/portfolio-audio";

const INTRO_MS = 5000;

export default function IntroSequence() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<PortfolioAudio | null>(null);

  function stopSound() {
    if (!audioRef.current) return;
    stopPortfolioAudio(audioRef.current);
    audioRef.current = null;
    setSoundEnabled(false);
  }

  async function toggleSound() {
    if (audioRef.current) { stopSound(); return; }
    try {
      const audio = startPortfolioAudio();
      audioRef.current = audio;
      await audio.context.resume();
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
      if (audioRef.current) {
        stopPortfolioAudio(audioRef.current);
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
          {soundEnabled ? "AMBIENCE ON" : "ENABLE AMBIENCE"} <b>{soundEnabled ? "◖))" : "◖×"}</b>
        </button>
        <button type="button" onClick={enter}>SKIP INTRO <b>↗</b></button>
      </div>
      <a className="intro-skip-fallback" href="/home">Skip intro</a>
    </main>
  );
}
