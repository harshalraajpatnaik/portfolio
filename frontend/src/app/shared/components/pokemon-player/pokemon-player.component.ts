import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';

@Component({
  selector: 'app-pokemon-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Floating Pokédex Retro Cassette Deck & Official Theme Player -->
    <div class="fixed bottom-4 right-4 z-50 font-mono select-none" role="region" aria-label="Official Pokémon Theme Music Player">
      
      <!-- EXPANDED CASSETTE DECK MODAL -->
      <div
        *ngIf="isExpanded"
        class="glass-card mb-3 p-4 sm:p-5 rounded-2xl border-2 border-crimson/50 bg-[#0d111a]/95 shadow-[0_10px_35px_rgba(220,10,45,0.4)] w-[320px] sm:w-[360px] max-w-[95vw] text-white transition-all transform animate-in fade-in duration-200">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-crimson animate-pulse"></span>
            <span class="text-xs font-bold tracking-wider text-energy">POKÉDEX CASSETTE DECK</span>
          </div>
          <button
            (click)="toggleExpanded()"
            class="text-white/60 hover:text-white text-xs px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 transition-colors">
            ✕ CLOSE
          </button>
        </div>

        <!-- Retro Cassette Artwork & Badge -->
        <div class="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-r from-red-950/60 via-black to-slate-900/80 p-3 mb-3 relative flex items-center gap-3">
          <!-- Animated Spinning Cassette Spool -->
          <div class="w-14 h-14 rounded-full bg-black border-2 border-crimson flex items-center justify-center p-2 relative flex-shrink-0 shadow-lg">
            <div class="w-full h-full rounded-full border border-white/30 flex items-center justify-center" [ngClass]="audio.isMusicPlaying ? 'animate-spin' : ''">
              <div class="w-4 h-4 rounded-full bg-crimson border border-white"></div>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-[10px] font-mono text-cyan-glow uppercase tracking-wider">OFFICIAL STUDIO VOCALS</div>
            <div class="text-xs font-bold text-white truncate">Pokémon Theme Song</div>
            <div class="text-[11px] text-white/70 truncate">Jason Paige (Original Singer)</div>
          </div>
        </div>

        <!-- Progress Bar & Time Stamps -->
        <div class="space-y-1 mb-3">
          <div class="flex items-center justify-between text-[10px] text-white/50 font-mono">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(duration) }}</span>
          </div>
          <div
            (click)="seekAudio($event)"
            class="w-full h-2 rounded-full bg-white/10 cursor-pointer relative overflow-hidden group">
            <div
              class="h-full bg-energy rounded-full transition-all group-hover:bg-energy/80"
              [style.width.%]="progressPercent"></div>
          </div>
        </div>

        <!-- Equalizer & Playback Controls -->
        <div class="p-3 rounded-xl bg-black/60 border border-white/10 space-y-3">
          <!-- Equalizer Animation -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1 h-4">
              <span class="w-1 bg-energy rounded-full transition-all" [ngClass]="audio.isMusicPlaying ? 'animate-bounce h-4' : 'h-1.5'"></span>
              <span class="w-1 bg-crimson rounded-full transition-all" [ngClass]="audio.isMusicPlaying ? 'animate-bounce h-3 delay-75' : 'h-1.5'"></span>
              <span class="w-1 bg-cyan-glow rounded-full transition-all" [ngClass]="audio.isMusicPlaying ? 'animate-bounce h-4 delay-150' : 'h-1.5'"></span>
              <span class="w-1 bg-grass rounded-full transition-all" [ngClass]="audio.isMusicPlaying ? 'animate-bounce h-3 delay-100' : 'h-1.5'"></span>
              <span class="w-1 bg-energy rounded-full transition-all" [ngClass]="audio.isMusicPlaying ? 'animate-bounce h-4 delay-200' : 'h-1.5'"></span>
            </div>
            <span class="text-[10px] text-white/60">
              {{ audio.isMusicPlaying ? 'TRANSMITTING STUDIO AUDIO' : 'PAUSED' }}
            </span>
          </div>

          <!-- Control Buttons -->
          <div class="flex items-center justify-between gap-2 pt-1">
            <button
              (click)="audio.toggleMusic()"
              class="flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
              [ngClass]="audio.isMusicPlaying ? 'bg-crimson hover:bg-crimson/90 text-white shadow-md shadow-crimson/30' : 'bg-energy hover:bg-energy/90 text-black shadow-md shadow-energy/30'">
              <span>{{ audio.isMusicPlaying ? '⏸ PAUSE' : '▶ PLAY THEME' }}</span>
            </button>

            <!-- Volume Button -->
            <button
              (click)="toggleMute()"
              class="px-3 py-2 rounded-lg text-xs border border-white/15 bg-white/5 hover:bg-white/15 text-white/80 transition-colors">
              {{ isMuted ? '🔇' : '🔊' }}
            </button>
          </div>
        </div>

        <!-- YouTube Official Video Reference Link -->
        <div class="mt-3 text-center">
          <a
            href="https://www.youtube.com/watch?v=fCkeLBGSINs"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[10px] text-white/40 hover:text-energy underline transition-colors">
            Official Source: Jason Paige In Studio (fCkeLBGSINs) ↗
          </a>
        </div>

      </div>

      <!-- COMPACT FLOATING DOCK BAR (Always Visible) -->
      <div class="flex items-center gap-2 p-1.5 rounded-full bg-black/85 backdrop-blur-md border border-crimson/50 shadow-[0_4px_20px_rgba(220,10,45,0.4)]">
        <!-- Spinning Mini-Pokéball -->
        <button
          (click)="toggleExpanded()"
          class="w-8 h-8 rounded-full bg-crimson border-2 border-white flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
          [title]="'Pokédex Cassette Deck: ' + (audio.isMusicPlaying ? 'Playing Studio Theme' : 'Paused')">
          <div class="w-2.5 h-2.5 rounded-full bg-white border border-black" [ngClass]="audio.isMusicPlaying ? 'animate-spin' : ''"></div>
        </button>

        <!-- Track label and quick toggles -->
        <div class="flex items-center gap-2 pr-2">
          <button
            (click)="audio.toggleMusic()"
            class="text-xs font-bold tracking-wide flex items-center gap-1.5 hover:text-energy transition-colors text-left"
            [title]="audio.isMusicPlaying ? 'Pause Pokémon Theme' : 'Play Official Pokémon Theme'">
            <span class="text-energy">{{ audio.isMusicPlaying ? '▶' : '⏸' }}</span>
            <span class="hidden xs:inline text-[11px] text-white font-mono">
              {{ audio.isMusicPlaying ? 'POKÉMON THEME' : 'THEME PAUSED' }}
            </span>
          </button>

          <!-- Toggle Expand/Modal -->
          <button
            (click)="toggleExpanded()"
            class="px-2 py-0.5 rounded text-[10px] bg-white/10 hover:bg-white/20 text-white/80 transition-colors">
            {{ isExpanded ? '▼ HIDE' : '▲ CASSETTE' }}
          </button>
        </div>
      </div>

    </div>
  `
})
export class PokemonPlayerComponent implements OnInit, OnDestroy {
  isExpanded = false;
  isMuted = false;
  currentTime = 0;
  duration = 0;
  progressPercent = 0;

  private timerId: any = null;

  constructor(public audio: PokemonAudioService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.timerId = setInterval(() => {
        if (this.audio.bgAudio) {
          this.currentTime = this.audio.bgAudio.currentTime || 0;
          this.duration = this.audio.bgAudio.duration || 0;
          if (this.duration > 0) {
            this.progressPercent = (this.currentTime / this.duration) * 100;
          }
        }
      }, 300);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
    this.audio.playBeep();
  }

  toggleMute(): void {
    if (this.audio.bgAudio) {
      this.isMuted = !this.isMuted;
      this.audio.bgAudio.muted = this.isMuted;
    }
  }

  seekAudio(event: MouseEvent): void {
    if (this.audio.bgAudio && this.duration > 0) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
      this.audio.bgAudio.currentTime = newPercent * this.duration;
    }
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
