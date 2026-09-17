/**
 * SoundSystem.ts
 * Procedural Web Audio API sound effects, announcer voice, and authentic 808 DRIFT PHONK synthesizer.
 * Zero external audio assets required.
 */
export class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private isBgmPlaying: boolean = false;
  private bgmIntervalId: number | null = null;
  private bgmStep: number = 0;
  private sharedNoiseBuffer: AudioBuffer | null = null;

  public masterVolume: number = 0.8;
  public bgmVolume: number = 0.6;
  public sfxVolume: number = 0.85;

  constructor() {
    // Initialized on first user interaction
  }

  public init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.masterVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.setValueAtTime(this.bgmVolume, this.ctx.currentTime);
      this.bgmGain.connect(this.masterGain);

      // Pre-allocate a shared noise buffer once to eliminate runtime garbage collection
      const bufLength = Math.floor(this.ctx.sampleRate * 0.4);
      this.sharedNoiseBuffer = this.ctx.createBuffer(1, bufLength, this.ctx.sampleRate);
      const data = this.sharedNoiseBuffer.getChannelData(0);
      for (let i = 0; i < bufLength; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  public resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private updateGains() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.masterVolume, now);
    if (this.sfxGain) this.sfxGain.gain.setValueAtTime(this.sfxVolume, now);
    if (this.bgmGain) this.bgmGain.gain.setValueAtTime(this.bgmVolume, now);
  }

  public setMasterVolume(v: number) {
    this.masterVolume = Math.max(0, Math.min(1, v));
    this.updateGains();
  }

  public setBgmVolume(v: number) {
    this.bgmVolume = Math.max(0, Math.min(1, v));
    this.updateGains();
  }

  public setSfxVolume(v: number) {
    this.sfxVolume = Math.max(0, Math.min(1, v));
    this.updateGains();
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    this.updateGains();
    return !this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    this.updateGains();
    return !this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // =========================================================================
  // KUNG FU & KATANA COMBAT SOUND EFFECTS
  // =========================================================================

  /** Martial Arts Fast Whoosh */
  public playWhoosh(pitchMultiplier: number = 1.0) {
    if (!this.ctx || this.isMuted || !this.sfxGain || !this.sharedNoiseBuffer) return;
    const now = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.sharedNoiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100 * pitchMultiplier, now);
    filter.frequency.exponentialRampToValueAtTime(250 * pitchMultiplier, now + 0.12);
    filter.Q.setValueAtTime(4, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
  }

  /** Crunchy Bone-Crack Light Impact */
  public playHitLight() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.07);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  /** Heavy Kung-Fu Impact / Sub Bass Drop */
  public playHitHeavy() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    // Sub Bass Thump
    const subOsc = this.ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(180, now);
    subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.24);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(1.1, now);
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 0.24);

    subOsc.connect(subGain);
    subGain.connect(this.sfxGain);
    subOsc.start(now);
    subOsc.stop(now + 0.24);

    // Crack
    const distOsc = this.ctx.createOscillator();
    distOsc.type = 'sawtooth';
    distOsc.frequency.setValueAtTime(280, now);
    distOsc.frequency.exponentialRampToValueAtTime(70, now + 0.12);

    const distGain = this.ctx.createGain();
    distGain.gain.setValueAtTime(0.7, now);
    distGain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    distOsc.connect(distGain);
    distGain.connect(this.sfxGain);
    distOsc.start(now);
    distOsc.stop(now + 0.12);
  }

  /** Katana / Sword Blade Slash */
  public playBladeSlash() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1600, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.16);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(6, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  /** Katana Clang / Metallic Block */
  public playBlock() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'square';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(1150, now);
    osc2.frequency.setValueAtTime(1680, now);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(950, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.14);
    osc2.stop(now + 0.14);
  }

  /** Energy Wave Shoot */
  public playProjectileShoot() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.22);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2600, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  /** Projectile Explode */
  public playExplosion() {
    if (!this.ctx || this.isMuted || !this.sfxGain || !this.sharedNoiseBuffer) return;
    const now = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.sharedNoiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, now);
    filter.frequency.linearRampToValueAtTime(80, now + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
  }

  /** Super Move Anime Power Chord Flash */
  public playSuperFlash() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    // Distorted Phonk Power Chord
    [220, 277.18, 329.63, 440, 554.37].forEach((freq) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.65);
    });
  }

  public playDash() {
    this.playWhoosh(1.6);
  }

  public playJump() {
    if (!this.ctx || this.isMuted || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.1);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  // =========================================================================
  // ANNOUNCER SPEECH SYNTHESIS
  // =========================================================================
  public announce(phrase: string) {
    if (this.isMuted) return;
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.rate = 1.08;
        utterance.pitch = 0.85;
        utterance.volume = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn("Speech synthesis failed", e);
      }
    }
  }

  // =========================================================================
  // 808 DRIFT PHONK SYNTHESIZER BEAT (138 BPM)
  // =========================================================================
  public startBattleBGM() {
    if (this.isBgmPlaying || !this.ctx || !this.bgmGain) return;
    this.isBgmPlaying = true;
    this.bgmStep = 0;

    // 138 BPM -> 16th note = ~108.7ms
    const stepInterval = (60 / 138 / 4) * 1000;

    // Iconic 808 Phonk Cowbell Melodic Pattern (A-minor drift phonk riff)
    // Notes: A4 (440), C5 (523), D5 (587), D#5 (622), E5 (659), G5 (784)
    const cowbellPattern = [
      440, 0, 523, 0, 587, 0, 622, 587,
      523, 0, 440, 0, 392, 0, 440, 0,
      440, 0, 523, 0, 587, 0, 659, 0,
      784, 659, 587, 0, 523, 0, 440, 0,
    ];

    // Sliding 808 Sub-Bass Note Pattern (A1 -> C2 -> D2 -> F2)
    const bassPattern = [
      55, 55, 55, 55, 65.4, 65.4, 73.4, 73.4,
      55, 55, 55, 55, 87.3, 87.3, 82.4, 82.4,
    ];

    this.bgmIntervalId = window.setInterval(() => {
      if (!this.ctx || !this.bgmGain || this.isMuted) return;
      const now = this.ctx.currentTime;
      const step16 = this.bgmStep % 16;
      const step32 = this.bgmStep % 32;

      // 1. 808 PUNCHY KICK on beats 0, 4, 8, 12 + syncopated pickup on step 14
      if (step16 === 0 || step16 === 4 || step16 === 8 || step16 === 12 || step16 === 14) {
        const kickOsc = this.ctx.createOscillator();
        kickOsc.type = 'sine';
        kickOsc.frequency.setValueAtTime(155, now);
        kickOsc.frequency.exponentialRampToValueAtTime(38, now + 0.09);

        const kickGain = this.ctx.createGain();
        kickGain.gain.setValueAtTime(0.85, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

        kickOsc.connect(kickGain);
        kickGain.connect(this.bgmGain);
        kickOsc.start(now);
        kickOsc.stop(now + 0.14);
      }

      // 2. TIGHT TRAP SNARE / CLAP on beats 4 and 12
      if ((step16 === 4 || step16 === 12) && this.sharedNoiseBuffer) {
        const src = this.ctx.createBufferSource();
        src.buffer = this.sharedNoiseBuffer;

        const sFilt = this.ctx.createBiquadFilter();
        sFilt.type = 'highpass';
        sFilt.frequency.setValueAtTime(1400, now);

        const sGain = this.ctx.createGain();
        sGain.gain.setValueAtTime(0.45, now);
        sGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        src.connect(sFilt);
        sFilt.connect(sGain);
        sGain.connect(this.bgmGain);
        src.start(now);
      }

      // 3. TRAP HI-HAT (every 16th note, with accent on offbeats)
      if (this.sharedNoiseBuffer) {
        const hhSrc = this.ctx.createBufferSource();
        hhSrc.buffer = this.sharedNoiseBuffer;

        const hhFilt = this.ctx.createBiquadFilter();
        hhFilt.type = 'highpass';
        hhFilt.frequency.setValueAtTime(7500, now);

        const hhGain = this.ctx.createGain();
        const vol = step16 % 2 === 1 ? 0.22 : 0.12;
        hhGain.gain.setValueAtTime(vol, now);
        hhGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        hhSrc.connect(hhFilt);
        hhFilt.connect(hhGain);
        hhGain.connect(this.bgmGain);
        hhSrc.start(now);
      }

      // 4. DISTORTED SLIDING 808 SUB-BASS
      if (step16 % 2 === 0) {
        const bassFreq = bassPattern[Math.floor(this.bgmStep / 2) % bassPattern.length];
        const bassOsc = this.ctx.createOscillator();
        bassOsc.type = 'sawtooth';
        bassOsc.frequency.setValueAtTime(bassFreq, now);
        // 808 slide bend
        bassOsc.frequency.exponentialRampToValueAtTime(bassFreq * 0.95, now + 0.18);

        const bassFilt = this.ctx.createBiquadFilter();
        bassFilt.type = 'lowpass';
        bassFilt.frequency.setValueAtTime(280, now);

        const bGain = this.ctx.createGain();
        bGain.gain.setValueAtTime(0.45, now);
        bGain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

        bassOsc.connect(bassFilt);
        bassFilt.connect(bGain);
        bGain.connect(this.bgmGain);
        bassOsc.start(now);
        bassOsc.stop(now + 0.18);
      }

      // 5. ICONIC 808 DRIFT PHONK COWBELL LEAD
      const cowbellFreq = cowbellPattern[step32];
      if (cowbellFreq > 0) {
        this.playPhonkCowbell(cowbellFreq, now);
      }

      this.bgmStep++;
    }, stepInterval);
  }

  /**
   * Synthesizes the authentic 808 Phonk Cowbell sound (two square/saw oscillators with bandpass ring)
   */
  private playPhonkCowbell(freq: number, time: number) {
    if (!this.ctx || !this.bgmGain) return;

    // Dual pulse wave for classic metallic 808 cowbell timbre
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'square';
    osc2.type = 'square';

    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 1.48, time); // classic 1.48 harmonic interval

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.2, time);
    filter.Q.setValueAtTime(5, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.25);
    osc2.stop(time + 0.25);
  }

  public stopBattleBGM() {
    if (this.bgmIntervalId !== null) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
    this.isBgmPlaying = false;
  }

  /**
   * Sound effect for Shadow's ninja teleport blink
   */
  public playTeleport() {
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  /**
   * Sound effect for Volt's electric lightning attacks
   */
  public playThunder() {
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(50, now + 0.22);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2400, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.22);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  /**
   * Sound effect for Shadow's spinning shuriken throw
   */
  public playShuriken() {
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.12);
  }
}
