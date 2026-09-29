class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Feedback haptique (vibrations sur appareils compatibles)
  public vibrate(pattern: number | number[]) {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch {
        // Silently fail if not supported
      }
    }
  }

  // Son de déchirure fluide et feutrée pendant le glisser
  public playTearDrag(progress: number) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    // Bruit de froissement de sachet feutré (bruit filtré rose/doux)
    const duration = 0.04;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.25;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800 + progress * 600, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    this.vibrate(8);
  }

  // Déflagration épique lors de l'ouverture du booster (Sub-bass + Impact + Shimmer)
  public playEpicPackBurst() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([40, 60, 100]);

    // 1. Sub-bass boom cinématographique (ondes graves enveloppantes)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(160, this.ctx.currentTime);
    subOsc.frequency.exponentialRampToValueAtTime(38, this.ctx.currentTime + 0.7);

    subGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
    subGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.75);

    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start();
    subOsc.stop(this.ctx.currentTime + 0.75);

    // 2. Whoosh d'air métallique et déchirure
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.4);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.4 * (1 - i / bufferSize);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3200, this.ctx.currentTime + 0.35);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noise.start();

    // 3. Carillon magique descendant
    [1046.5, 1318.51, 1567.98, 2093.0].forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const sTime = this.ctx.currentTime + 0.15 + idx * 0.05;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, sTime);

      gain.gain.setValueAtTime(0.15, sTime);
      gain.gain.exponentialRampToValueAtTime(0.001, sTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(sTime);
      osc.stop(sTime + 0.55);
    });
  }

  // Bruit de déchirure standard
  public playTearPack() {
    this.playEpicPackBurst();
  }

  // Bruit de glissement de carte feutré (whoosh doux)
  public playCardSlide() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate(10);

    const duration = 0.15;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Bruit de claquement net de carte lors de la révélation
  public playCardFlip() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate(18);

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.07);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.07);
  }

  // Carillon harmonieux pour carte Rare (déclenché UNIQUEMENT au flip, pas au survol)
  public playSparkle() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([20, 30, 20]);

    // Accord arpégé majeur doux (Ré majeur brillant)
    const notes = [587.33, 739.99, 880.0, 1174.66];
    notes.forEach((freq, index) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime + index * 0.06;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  // Fanfare majestueuse et grondement pour Ultra Rare / SIR / Gold
  public playUltraRareFanfare() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([40, 50, 40, 80, 140]);

    // Onde de choc sub-bass
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(130, this.ctx.currentTime);
    subOsc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.6);
    subGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
    subGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.65);
    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start();
    subOsc.stop(this.ctx.currentTime + 0.65);

    // Accord triomphal éclatant
    const chords = [
      { notes: [440, 554.37, 659.25], start: 0, duration: 0.18 },
      { notes: [493.88, 622.25, 739.99], start: 0.16, duration: 0.18 },
      { notes: [554.37, 698.46, 830.61], start: 0.32, duration: 0.22 },
      { notes: [659.25, 830.61, 987.77, 1318.51], start: 0.5, duration: 0.9 },
    ];

    chords.forEach(({ notes, start, duration }) => {
      notes.forEach((freq) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const sTime = this.ctx.currentTime + start;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, sTime);

        gain.gain.setValueAtTime(0.12, sTime);
        gain.gain.exponentialRampToValueAtTime(0.001, sTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(sTime);
        osc.stop(sTime + duration);
      });
    });
  }

  // Bruit de page de classeur en plastique tournée (flip doux)
  public playPageFlip() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate(8);

    const duration = 0.22;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Bruit texturé doux imitant le froissement d'une pochette plastique épaisse
      const env = Math.sin((i / bufferSize) * Math.PI);
      data[i] = (Math.random() * 2 - 1) * 0.18 * env;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(650, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + duration * 0.5);
    filter.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // Son feutré d'insertion de carte dans une pochette sleeve plastique
  public playSleeveInsert() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate(12);

    const duration = 0.14;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Son cristallin magique de forgeage / craft réussi d'une carte
  public playCraftSuccess() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([25, 40, 60]);

    // Arpège ascendant étincelant (Do Maj 7 brillant)
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51];
    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const sTime = this.ctx.currentTime + idx * 0.045;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, sTime);

      gain.gain.setValueAtTime(0.15, sTime);
      gain.gain.exponentialRampToValueAtTime(0.001, sTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(sTime);
      osc.stop(sTime + 0.4);
    });
  }

  // Son de recyclage / dissolution en poussière d'étoile
  public playRecycleSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([15, 30, 20]);

    // Onde descendante avec scintillement
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }
}

export const soundManager = new SoundEngine();

