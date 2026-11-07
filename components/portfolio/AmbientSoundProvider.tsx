"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { startPortfolioAudio, stopPortfolioAudio, type PortfolioAudio } from "@/lib/portfolio-audio";

type AmbientContextValue = { enabled: boolean; unavailable: boolean; toggle: () => Promise<void> };
const AmbientContext = createContext<AmbientContextValue | null>(null);

export function useAmbientSound() {
  const value = useContext(AmbientContext);
  if (!value) throw new Error("useAmbientSound must be used inside AmbientSoundProvider");
  return value;
}

export default function AmbientSoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const audioRef = useRef<PortfolioAudio | null>(null);
  const transitionRef = useRef(false);

  const toggle = useCallback(async () => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    try {
      if (audioRef.current) {
        const current = audioRef.current;
        audioRef.current = null;
        setEnabled(false);
        await stopPortfolioAudio(current);
        return;
      }
      const audio = await startPortfolioAudio();
      audioRef.current = audio;
      setEnabled(true);
      setUnavailable(false);
    } catch {
      setUnavailable(true);
      setEnabled(false);
      if (audioRef.current) {
        audioRef.current.element.pause();
        audioRef.current = null;
      }
    } finally {
      transitionRef.current = false;
    }
  }, []);

  useEffect(() => () => {
    const current = audioRef.current;
    audioRef.current = null;
    if (current) {
      current.element.pause();
      current.element.src = "";
    }
  }, []);

  const value = useMemo(() => ({ enabled, unavailable, toggle }), [enabled, unavailable, toggle]);
  return <AmbientContext.Provider value={value}>{children}</AmbientContext.Provider>;
}
