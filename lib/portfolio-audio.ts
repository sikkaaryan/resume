export type PortfolioAudio = {
  element: HTMLAudioElement;
};

const TRACK_SRC = "/audio/ambient-sleep.mp3";
const TARGET_VOLUME = 0.42;
const FADE_MS = 1400;

function fadeVolume(element: HTMLAudioElement, from: number, to: number, duration: number) {
  return new Promise<void>((resolve) => {
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      element.volume = Math.max(0, Math.min(1, from + (to - from) * progress));
      if (progress < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });
}

export async function startPortfolioAudio(): Promise<PortfolioAudio> {
  const element = new Audio(TRACK_SRC);
  element.loop = true;
  element.preload = "auto";
  element.volume = 0;
  await element.play();
  await fadeVolume(element, 0, TARGET_VOLUME, FADE_MS);
  return { element };
}

export async function stopPortfolioAudio(audio: PortfolioAudio) {
  const element = audio.element;
  await fadeVolume(element, element.volume, 0, FADE_MS);
  element.pause();
  element.currentTime = 0;
}
