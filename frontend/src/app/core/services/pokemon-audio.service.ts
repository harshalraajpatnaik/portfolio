import { Injectable } from '@angular/core';

/**
 * Native Audio Engine & Pokémon Theme BGM Controller.
 * Features:
 * - Studio MP3 playback of the Official Pokémon Theme Song (Jason Paige in studio)
 * - Sound effects & Theme Music ON by default
 * - 8-Bit chiptune synthesized sound effects (A-button click, Pokédex scan, victory fanfare, Pokéball latch)
 */
@Injectable({ providedIn: 'root' })
export class PokemonAudioService {
  private audioCtx: AudioContext | null = null;
  public soundEnabled = true;
  public musicEnabled = true;
  public isMusicPlaying = false;

  public bgAudio: HTMLAudioElement | null = null;

  constructor() {
    // Sound & Music ON by default unless explicitly disabled in localStorage
    const savedSound = localStorage.getItem('hrp_pokemon_sound_enabled');
    this.soundEnabled = savedSound !== 'false';

    const savedMusic = localStorage.getItem('hrp_pokemon_music_enabled');
    this.musicEnabled = savedMusic !== 'false';

    if (typeof window !== 'undefined') {
      this.initBgAudio();
      this.initAutoplayUnlock();
    }
  }

  private initBgAudio(): void {
    if (typeof window === 'undefined') return;
    if (!this.bgAudio) {
      this.bgAudio = new Audio('assets/audio/pokemon-theme.mp3');
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.4;
      this.bgAudio.addEventListener('play', () => {
        this.isMusicPlaying = true;
      });
      this.bgAudio.addEventListener('pause', () => {
        this.isMusicPlaying = false;
      });
      this.bgAudio.addEventListener('ended', () => {
        this.isMusicPlaying = false;
      });
    }
  }

  private initAutoplayUnlock(): void {
    if (typeof window === 'undefined') return;

    const startAudioOnGesture = () => {
      this.ensureContext();
      if (this.musicEnabled && !this.isMusicPlaying) {
        this.playPokemonThemeSong();
      }
      window.removeEventListener('click', startAudioOnGesture);
      window.removeEventListener('keydown', startAudioOnGesture);
      window.removeEventListener('touchstart', startAudioOnGesture);
    };

    window.addEventListener('click', startAudioOnGesture, { once: true });
    window.addEventListener('keydown', startAudioOnGesture, { once: true });
    window.addEventListener('touchstart', startAudioOnGesture, { once: true });
  }

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Toggle SFX sound effects
   */
  toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('hrp_pokemon_sound_enabled', String(this.soundEnabled));
    if (this.soundEnabled) {
      this.playChirp();
    }
    return this.soundEnabled;
  }

  /**
   * Toggle English Pokémon Theme background music
   */
  toggleMusic(): boolean {
    this.musicEnabled = !this.musicEnabled;
    localStorage.setItem('hrp_pokemon_music_enabled', String(this.musicEnabled));

    if (this.musicEnabled) {
      this.playPokemonThemeSong();
    } else {
      this.stopPokemonThemeSong();
    }
    return this.musicEnabled;
  }

  /**
   * Play the Official Pokémon Theme Song (Jason Paige studio recording)
   */
  playPokemonThemeSong(): void {
    this.initBgAudio();
    if (this.bgAudio && this.musicEnabled) {
      this.bgAudio.play().then(() => {
        this.isMusicPlaying = true;
      }).catch(() => {
        // Playback will resume on first user click if blocked by browser
      });
    }
  }

  /**
   * Stop/Pause background theme music
   */
  stopPokemonThemeSong(): void {
    if (this.bgAudio) {
      this.bgAudio.pause();
    }
    this.isMusicPlaying = false;
  }

  setVolume(volume: number): void {
    if (this.bgAudio) {
      this.bgAudio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  /** Quick 8-bit menu select beep */
  playBeep(): void {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  }

  /** Pokédex scanner chirp */
  playChirp(): void {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(880, now + 0.06);
    osc.frequency.linearRampToValueAtTime(1320, now + 0.12);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  /** Pokéball latch click */
  playPokeballClick(): void {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.1);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  /** Short 4-note victory fanfare */
  playFanfare(): void {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const notes = [
      { f: 523.25, d: 0.1 },  // C5
      { f: 659.25, d: 0.1 },  // E5
      { f: 783.99, d: 0.1 },  // G5
      { f: 1046.50, d: 0.25 } // C6
    ];

    let t = ctx.currentTime;
    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(n.f, t);
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + n.d);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + n.d);
      t += n.d;
    });
  }
}
