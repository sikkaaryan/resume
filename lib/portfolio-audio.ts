export type PortfolioAudio = { context: AudioContext; master: GainNode; sources: AudioScheduledSourceNode[] };

export function startPortfolioAudio(): PortfolioAudio {
  const context = new window.AudioContext();
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.075, context.currentTime + 2.8);
  master.connect(context.destination);

  const sources: AudioScheduledSourceNode[] = [];
  const lowPass = context.createBiquadFilter();
  lowPass.type = "lowpass";
  lowPass.frequency.value = 950;
  lowPass.Q.value = 0.35;
  lowPass.connect(master);

  // A warm, slowly moving major-nine chord rather than a static low-frequency drone.
  const chord = [
    { hz: 65.41, gain: 0.22, detune: -2 },
    { hz: 98, gain: 0.12, detune: 2 },
    { hz: 130.81, gain: 0.10, detune: -1 },
    { hz: 164.81, gain: 0.075, detune: 1 },
    { hz: 196, gain: 0.045, detune: 0 },
    { hz: 293.66, gain: 0.018, detune: 0 },
  ];
  chord.forEach((voice, index) => {
    const osc = context.createOscillator();
    const amp = context.createGain();
    const pan = context.createStereoPanner();
    osc.type = index < 2 ? "sine" : "triangle";
    osc.frequency.value = voice.hz;
    osc.detune.value = voice.detune;
    amp.gain.value = voice.gain;
    pan.pan.value = index % 2 ? 0.22 : -0.22;
    osc.connect(amp);
    amp.connect(pan);
    pan.connect(lowPass);
    osc.start();
    sources.push(osc);
  });

  // Soft filtered air texture gives the pad a little movement and space.
  const noiseBuffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noiseData.length; i++) noiseData[i] = (Math.random() * 2 - 1) * 0.22;
  const noise = context.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  const airFilter = context.createBiquadFilter();
  airFilter.type = "bandpass";
  airFilter.frequency.value = 1250;
  airFilter.Q.value = 0.55;
  const airGain = context.createGain();
  airGain.gain.value = 0.12;
  noise.connect(airFilter);
  airFilter.connect(airGain);
  airGain.connect(master);
  noise.start();
  sources.push(noise);

  // Slow modulation makes the ambience gently breathe.
  const lfo = context.createOscillator();
  const lfoGain = context.createGain();
  lfo.frequency.value = 0.075;
  lfoGain.gain.value = 0.018;
  lfo.connect(lfoGain);
  lfoGain.connect(master.gain);
  lfo.start();
  sources.push(lfo);

  return { context, master, sources };
}

export function stopPortfolioAudio(audio: PortfolioAudio) {
  try {
    audio.master.gain.cancelScheduledValues(audio.context.currentTime);
    audio.master.gain.setTargetAtTime(0.0001, audio.context.currentTime, 0.7);
    window.setTimeout(() => {
      audio.sources.forEach((source) => { try { source.stop(); } catch {} });
      void audio.context.close();
    }, 2400);
  } catch {
    void audio.context.close();
  }
}
