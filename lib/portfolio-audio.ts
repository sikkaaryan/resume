export type PortfolioAudio = {
  context: AudioContext;
  master: GainNode;
  sources: AudioScheduledSourceNode[];
  sequencer: ReturnType<typeof window.setInterval>;
};

const NOTES = {
  C3: 130.81, E3: 164.81, G3: 196, B3: 246.94,
  A2: 110, C3b: 130.81, E3b: 164.81, G3b: 196,
  F2: 87.31, A2b: 110, C3c: 130.81, E3c: 164.81,
  G2: 98, B2: 123.47, D3: 146.83, E3d: 164.81,
  C5: 523.25, E5: 659.25, G5: 783.99, B5: 987.77,
  A4: 440, C5b: 523.25, E5b: 659.25, G5b: 783.99,
  F4: 349.23, A4b: 440, C5c: 523.25, E5c: 659.25,
  G4: 392, B4: 493.88, D5: 587.33, E5d: 659.25,
} as const;

export function startPortfolioAudio(): PortfolioAudio {
  const context = new window.AudioContext();
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.13, context.currentTime + 3.5);

  const compressor = context.createDynamicsCompressor();
  compressor.threshold.value = -26;
  compressor.knee.value = 18;
  compressor.ratio.value = 2.2;
  compressor.attack.value = 0.02;
  compressor.release.value = 0.35;
  compressor.connect(master);
  master.connect(context.destination);

  // A very soft, warm room tail keeps the notes connected without washing them out.
  const delay = context.createDelay(1.2);
  const feedback = context.createGain();
  const wet = context.createGain();
  delay.delayTime.value = 0.38;
  feedback.gain.value = 0.19;
  wet.gain.value = 0.16;
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(wet);
  wet.connect(compressor);

  const sources: AudioScheduledSourceNode[] = [];
  const addSource = (source: AudioScheduledSourceNode) => {
    sources.push(source);
    source.onended = () => {
      const index = sources.indexOf(source);
      if (index >= 0) sources.splice(index, 1);
    };
  };

  const playNote = (frequency: number, at: number, duration: number, volume: number) => {
    // A rounded fundamental with quiet upper partials gives a soft electric-piano character.
    [1, 2, 3].forEach((partial, index) => {
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency * partial, at);
      envelope.gain.setValueAtTime(0.0001, at);
      envelope.gain.exponentialRampToValueAtTime(volume / (partial * (index + 1) * 1.25), at + 0.012);
      envelope.gain.exponentialRampToValueAtTime(0.0001, at + duration * (index === 0 ? 1 : 0.72));
      oscillator.connect(envelope);
      envelope.connect(compressor);
      envelope.connect(delay);
      oscillator.start(at);
      oscillator.stop(at + duration + 0.04);
      addSource(oscillator);
    });
  };

  // Slow, consonant four-chord loop in C major: Cmaj7, Am7, Fmaj7, G6.
  const chords = [
    [NOTES.C3, NOTES.E3, NOTES.G3, NOTES.B3],
    [NOTES.A2, NOTES.C3b, NOTES.E3b, NOTES.G3b],
    [NOTES.F2, NOTES.A2b, NOTES.C3c, NOTES.E3c],
    [NOTES.G2, NOTES.B2, NOTES.D3, NOTES.E3d],
  ];
  const melody = [
    [NOTES.E5, NOTES.G5, NOTES.B5, NOTES.G5],
    [NOTES.E5b, NOTES.G5b, NOTES.C5b, NOTES.G5b],
    [NOTES.A4b, NOTES.C5c, NOTES.E5c, NOTES.C5c],
    [NOTES.B4, NOTES.D5, NOTES.E5d, NOTES.D5],
  ];

  const beatSeconds = 60 / 68;
  let step = 0;
  const playStep = () => {
    const now = context.currentTime + 0.045;
    const bar = Math.floor(step / 4) % chords.length;
    const beat = step % 4;

    if (beat === 0) {
      chords[bar].forEach((frequency, index) => {
        playNote(frequency, now + index * 0.012, beatSeconds * 3.7, index === 0 ? 0.026 : 0.018);
      });
    }

    // A sparse, repeating phrase with space between notes—melodic, never busy.
    if (beat === 0 || beat === 2 || (bar === 0 && beat === 3)) {
      const note = melody[bar][beat === 0 ? 0 : beat === 2 ? 1 : 2];
      playNote(note, now, beatSeconds * 1.8, 0.035);
    }
    step = (step + 1) % 16;
  };

  playStep();
  const sequencer = window.setInterval(playStep, beatSeconds * 1000);

  return { context, master, sources, sequencer };
}

export function stopPortfolioAudio(audio: PortfolioAudio) {
  window.clearInterval(audio.sequencer);
  try {
    audio.master.gain.cancelScheduledValues(audio.context.currentTime);
    audio.master.gain.setTargetAtTime(0.0001, audio.context.currentTime, 0.8);
    window.setTimeout(() => {
      audio.sources.forEach((source) => { try { source.stop(); } catch {} });
      void audio.context.close();
    }, 2600);
  } catch {
    void audio.context.close();
  }
}
