import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 transition-all" role="navigation" aria-label="Pokédex Navigation">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">

        <!-- BRAND / POKÉDEX LOGO: Always strictly 1 line, never wraps -->
        <a href="#hero" class="flex items-center gap-2.5 flex-shrink-0 whitespace-nowrap group" (click)="audio.playBeep()">
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-crimson flex items-center justify-center p-1 shadow-[0_0_12px_rgba(220,10,45,0.8)] group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden">
            <img src="assets/hp-logo.png" alt="Harshal Patnaik (HP)" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col justify-center flex-shrink-0 whitespace-nowrap">
            <div class="font-black text-xs sm:text-sm text-white tracking-wider font-mono whitespace-nowrap group-hover:text-energy transition-colors">
              HARSHAL RAAJ PATNAIK
            </div>
            <div class="text-[9px] sm:text-[10px] font-mono text-white/50 tracking-wider whitespace-nowrap flex items-center gap-1.5">
              <span>CLOUD SDE</span>
              <span class="text-energy">•</span>
              <span>TATA COMM</span>
              <span class="text-energy">•</span>
              <span>IIM KOZHIKODE</span>
            </div>
          </div>
        </a>

        <!-- CENTER NAVIGATION: Clean, spacious, proportional -->
        <div class="hidden lg:flex items-center gap-1 font-mono text-xs flex-shrink-0">
          <a *ngFor="let link of navLinks"
             [href]="link.href"
             (click)="audio.playBeep()"
             class="px-2.5 py-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
            {{ link.label }}
          </a>
        </div>

        <!-- RIGHT SIDE: Uniform Audio Capsule + Resume Download -->
        <div class="flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
          
          <!-- Consolidated Retro Audio Capsule -->
          <div class="flex items-center bg-black/50 border border-white/15 rounded-xl p-0.5 font-mono shadow-inner">
            <!-- Theme Music Toggle -->
            <button
              (click)="audio.toggleMusic()"
              class="px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
              [ngClass]="audio.musicEnabled && audio.isMusicPlaying ? 'bg-energy text-black shadow-md shadow-energy/20 animate-pulse' : 'text-white/70 hover:text-white hover:bg-white/10'"
              [title]="audio.musicEnabled ? 'Pause Pokémon Theme Song' : 'Play Official Pokémon Theme Song'">
              <span>🎵</span>
              <span class="hidden sm:inline text-[11px]">{{ audio.musicEnabled && audio.isMusicPlaying ? 'THEME ON' : 'THEME OFF' }}</span>
            </button>

            <!-- SFX Toggle -->
            <button
              (click)="audio.toggleSound()"
              class="px-2 py-1 rounded-lg text-xs transition-all text-white/70 hover:text-white hover:bg-white/10 flex items-center"
              [title]="audio.soundEnabled ? '8-Bit Retro SFX Active' : 'Sound Effects Muted'">
              <span>{{ audio.soundEnabled ? '🔊' : '🔇' }}</span>
            </button>
          </div>

          <!-- Direct Resume Download Button (Google-Standard ATS PDF) -->
          <a href="http://localhost:8080/api/v1/resume/download"
             target="_blank"
             rel="noopener noreferrer"
             (click)="audio.playFanfare()"
             class="px-3 sm:px-4 py-1.5 rounded-xl text-xs font-mono font-bold bg-energy hover:bg-energy/90 text-black shadow-lg shadow-energy/25 transition-all flex items-center gap-1.5 flex-shrink-0">
            <span>RESUME (PDF)</span>
            <span>↓</span>
          </a>

          <!-- Swagger API (Desktop Only) -->
          <a href="http://localhost:8080/swagger-ui.html"
             target="_blank"
             rel="noopener noreferrer"
             (click)="audio.playChirp()"
             class="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono border border-grass/40 bg-grass/15 text-grass hover:bg-grass/25 transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-grass animate-pulse"></span>
            <span>API ↗</span>
          </a>

        </div>

      </div>

      <!-- Frosted Pokédex Backing -->
      <div class="absolute inset-0 -z-10 backdrop-blur-md border-b border-red-900/60 bg-[#0a0d14]/90" aria-hidden="true"></div>
    </nav>
  `
})
export class NavComponent {
  navLinks = [
    { href: '#hero',      label: 'Pokédex' },
    { href: '#projects',  label: 'Pokémon Roster' },
    { href: '#sthirax',   label: 'SthiraX (MBA)' },
    { href: '#trainers',  label: 'Trainers' },
    { href: '#telemetry', label: 'Telemetry' },
    { href: '#resume',    label: 'ATS Resume' },
    { href: '#contact',   label: 'Contact' },
  ];

  constructor(public audio: PokemonAudioService) {}
}
