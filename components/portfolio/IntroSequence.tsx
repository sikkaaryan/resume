"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DigitalCore from "./DigitalCore";
import AmbientSoundToggle from "./AmbientSoundToggle";
import { markIntroCompleted } from "./intro-navigation";

const INTRO_MS = 18000;

export default function IntroSequence() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function enter() {
    if (leaving) return;
    setLeaving(true);
    markIntroCompleted();
    window.setTimeout(() => router.replace("/home"), 650);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      enter();
      return;
    }
    const timer = window.setTimeout(enter, INTRO_MS);
    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className={leaving ? "intro-screen is-leaving" : "intro-screen"}>
      <div className="intro-backdrop" aria-hidden="true">
        <div className="intro-stars" />
        <div className="intro-sweep" />
        <div className="intro-vignette" />
      </div>

      <div className="intro-topline">
        <span className="intro-brandmark">AS<span> / </span>001</span>
        <span>INDEPENDENT ENGINEERING PORTFOLIO</span>
        <span className="intro-top-status"><i /> SYSTEMS ONLINE</span>
      </div>

      <div className="intro-stage">
        <div className="intro-stamp" aria-hidden="true">A S</div>
        <div className="intro-side-note intro-side-note--left">DESIGN<br />BUILD<br />REPEAT</div>
        <div className="intro-side-note intro-side-note--right">EST. 2022<br />NEW DELHI / IN</div>

        <div className="intro-sequence intro-sequence--one" aria-hidden="true">
          <span className="intro-kicker">A MIND FOR SYSTEMS</span>
          <strong>IDEAS INTO<br /><em>EXPERIENCES.</em></strong>
          <span className="intro-sequence-line" />
        </div>
        <div className="intro-sequence intro-sequence--two" aria-hidden="true">
          <span className="intro-kicker">ENGINEERED WITH INTENT</span>
          <strong>BUILT TO<br /><em>MOVE YOU.</em></strong>
          <span className="intro-sequence-line" />
        </div>

        <div className="intro-reactor">
          <div className="intro-reactor-halo" />
          <div className="intro-core"><DigitalCore /></div>
          <span className="intro-reactor-label intro-reactor-label--top">CORE REACTOR <b>01</b></span>
          <span className="intro-reactor-label intro-reactor-label--bottom">POWER / CREATIVITY / PRECISION</span>
        </div>

        <div className="intro-title-lockup">
          <span className="intro-overline">SOFTWARE ENGINEER II <i /> CREATIVE TECHNOLOGIST</span>
          <h1><span>ARYAN</span><em>SIKKA.</em></h1>
          <p className="intro-caption">MOBILE GAMES <i /> .NET <i /> DEVELOPER TOOLS</p>
          <span className="intro-title-rule" />
        </div>

        <div className="intro-final-line" aria-hidden="true">THINK DEEP. BUILD BOLD. SHIP WITH PURPOSE.</div>
      </div>

      <div className="intro-bottom">
        <div className="intro-progress"><span /></div>
        <span className="intro-bottom-label">A NEW CHAPTER IS LOADING</span>
        <div className="intro-controls">
          <AmbientSoundToggle />
          <button type="button" onClick={enter}>SKIP INTRO <b>↗</b></button>
        </div>
      </div>
      <a className="intro-skip-fallback" href="/home">Skip intro</a>
    </main>
  );
}
