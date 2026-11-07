"use client";

import { useEffect, useState } from "react";

export default function DigitalCore() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const onMove = (event: PointerEvent) => {
      const bounds = document.getElementById("digital-core")?.getBoundingClientRect();
      if (!bounds) return;
      setPointer({
        x: Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100)),
        y: Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100)),
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      id="digital-core"
      className="core-stage"
      style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` } as React.CSSProperties}
      role="img"
      aria-label="Abstract mechanical core made of concentric titanium rings, a central illuminated rotor, and precision components"
    >
      <div className="core-ambient" />
      <div className="core-grid" />
      <div className="core-orbit core-orbit--outer"><span /><i /><b /></div>
      <div className="core-orbit core-orbit--middle"><span /><i /><b /></div>
      <div className="core-orbit core-orbit--inner"><span /><i /></div>
      <div className="core-ring core-ring--back" />
      <div className="core-ring core-ring--front" />
      <div className="core-spoke core-spoke--one" />
      <div className="core-spoke core-spoke--two" />
      <div className="core-spoke core-spoke--three" />
      <div className="core-rotor">
        <div className="core-rotor__teeth" />
        <div className="core-rotor__disc">
          <div className="core-rotor__hub"><span /></div>
        </div>
      </div>
      <div className="core-light" />
      <div className="core-label core-label--top">DC / 001 <span>ENGINEERING CORE</span></div>
      <div className="core-label core-label--bottom"><span>PRECISION SYSTEMS</span> <b>ONLINE</b></div>
      <div className="core-crosshair core-crosshair--one" />
      <div className="core-crosshair core-crosshair--two" />
    </div>
  );
}
