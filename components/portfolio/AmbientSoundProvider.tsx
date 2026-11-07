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

  const toggle = useCallback(async () => {
    if (audioRef.current) {
      const current = audioRef.current;
      audioRef.current = null;
      stopPortfolioAudio(current);
      setEnabled(false);
      return;
    }
    try {
      const audio = startPortfolioAudio();
      audioRef.current = audio;
      await audio.context.resume();
      if (audio.context.state !== "running") throw new Error("Audio context did not start");
      setEnabled(true);
      setUnavailable(false);
    } catch {
      setUnavailable(true);
      setEnabled(false);
      if (audioRef.current) {
        void audioRef.current.context.close();
        audioRef.current = null;
      }
    }
  }, []);

  useEffect(() => () => {
    if (audioRef.current) stopPortfolioAudio(audioRef.current);
    audioRef.current = null;
  }, []);

  const value = useMemo(() => ({ enabled, unavailable, toggle }), [enabled, unavailable, toggle]);
  return <AmbientContext.Provider value={value}>{children}</AmbientContext.Provider>;
}
