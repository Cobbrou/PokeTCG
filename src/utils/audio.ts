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
        // Silently fail if not supported or disabled
      }
    }
  }

  // Son de déchirure de sachet plastique en continu pendant le geste (drag)
  public playTearDrag(progress: number) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    // Micro-craquement proportionnel à l'avancement
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800 + progress * 1600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1600 + progress * 800, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);

    this.vibrate(10);
  }

  // Bruit de déchirure complète finale du booster
  public playTearPack() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([30, 40, 60]);

    const bufferSize = this.ctx.sampleRate * 0.45;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const crackle = Math.random() > 0.82 ? (Math.random() * 2 - 1) * 1.6 : (Math.random() * 2 - 1) * 0.35;
      data[i] = crackle * (1 - i / bufferSize);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3400, this.ctx.currentTime + 0.3);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.7, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.45);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // Bruit de glissement de carte (whoosh doux de papier glacé)
  public playCardSlide() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate(12);

    const duration = 0.16;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Bruit de claquement sec lors du retournement de carte (snap)
  public playCardFlip() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate(20);

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.07);

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.07);
  }

  // Carillon holographique scintillant pour cartes rares
  public playSparkle() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([20, 30, 20]);

    const notes = [587.33, 739.99, 880.0, 1174.66, 1479.98]; // D5, F#5, A5, D6, F#6
    notes.forEach((freq, index) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime + index * 0.06;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  }

  // Fanfare triomphale pour Ultra Rare / SIR / Gold avec grondement
  public playUltraRareFanfare() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.vibrate([40, 50, 40, 80, 120]);

    // Sub-bass impact
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, this.ctx.currentTime);
    subOsc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.5);
    subGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    subGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start();
    subOsc.stop(this.ctx.currentTime + 0.6);

    const chords = [
      { notes: [440, 554.37, 659.25], start: 0, duration: 0.2 },
      { notes: [493.88, 622.25, 739.99], start: 0.18, duration: 0.2 },
      { notes: [554.37, 698.46, 830.61], start: 0.36, duration: 0.2 },
      { notes: [659.25, 830.61, 987.77, 1318.51], start: 0.54, duration: 0.9 },
    ];

    chords.forEach(({ notes, start, duration }) => {
      notes.forEach((freq) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const sTime = this.ctx.currentTime + start;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, sTime);

        gain.gain.setValueAtTime(0.14, sTime);
        gain.gain.exponentialRampToValueAtTime(0.001, sTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(sTime);
        osc.stop(sTime + duration);
      });
    });
  }
}

export const soundManager = new SoundEngine();
