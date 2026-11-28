import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { Subscription } from 'rxjs';

import { PortfolioMode } from '../ui-mode-portal/ui-mode-portal.component';
export type { PortfolioMode };

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-6 py-2.5 transition-all" role="navigation" aria-label="Portfolio Navigation">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">

        <!-- BRAND LOGO: Click to return to Home Screen (Experience Selector) -->
        <a (click)="onNameClick($event)"
           class="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0 group cursor-pointer"
           title="Click to return to Home Screen (Interface Selector)">
          <div class="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 flex items-center justify-center p-1 group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden"
               [ngClass]="currentMode === 'pokemon' ? 'border-crimson shadow-[0_0_12px_rgba(220,10,45,0.8)]' : currentMode === 'story' ? 'border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]' : 'border-cyan-glow shadow-[0_0_12px_rgba(0,229,255,0.8)]'">
            <img src="assets/hp-logo.png" alt="Harshal Patnaik (HP)" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col justify-center flex-shrink-0">
            <div class="font-black text-[10.5px] sm:text-sm text-white tracking-wider font-mono whitespace-nowrap transition-colors"
                 [ngClass]="currentMode === 'pokemon' ? 'group-hover:text-energy' : currentMode === 'story' ? 'group-hover:text-amber-400' : 'group-hover:text-cyan-glow'">
              HARSHAL RAAJ PATNAIK
            </div>
            <div class="text-[7.5px] sm:text-[10px] font-mono text-white/50 tracking-wider whitespace-nowrap flex items-center gap-1 sm:gap-1.5">
              <span>CLOUD ARCHITECT</span>
              <span class="text-energy">•</span>
              <span>IIM KOZHIKODE</span>
            </div>
          </div>
        </a>

        <!-- CENTER NAVIGATION (Wide Desktop >= 1280px) -->
        <div class="hidden xl:flex items-center gap-0.5 font-mono text-xs flex-shrink-0">
          <a *ngFor="let link of activeNavLinks"
             [href]="link.href"
             (click)="audio.playBeep()"
             class="px-2 py-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
            {{ link.label }}
          </a>
        </div>

        <!-- TOP RIGHT: Mode Toggle + Audio Capsule + Resume + Mobile/Laptop Hamburger -->
        <div class="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          
          <!-- INTERFACE MODE SELECTION TOGGLE (TOP RIGHT) -->
          <div class="flex items-center p-0.5 rounded-xl bg-black/70 border backdrop-blur-md font-mono text-[10px] sm:text-xs shadow-inner"
               [ngClass]="currentMode === 'pokemon' ? 'border-red-900/70 shadow-[0_0_12px_rgba(220,10,45,0.25)]' : currentMode === 'story' ? 'border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]' : 'border-cyan-glow/40 shadow-[0_0_12px_rgba(0,229,255,0.25)]'">
            
            <!-- Pokédex Pro Option -->
            <button
              (click)="switchMode('pokemon')"
              [class.bg-crimson]="currentMode === 'pokemon'"
              [class.text-white]="currentMode === 'pokemon'"
              [class.shadow-md]="currentMode === 'pokemon'"
              [ngClass]="currentMode !== 'pokemon' ? 'text-white/60' : ''"
              class="px-1.5 sm:px-2 py-1 rounded-lg font-bold transition-all flex items-center gap-1 cursor-pointer hover:text-white"
              title="Switch to Pokédex Pro Experience">
              <span>⚡</span>
              <span class="hidden md:inline">POKÉDEX</span>
            </button>

            <!-- Recruiter Mode Option -->
            <button
              (click)="switchMode('recruiter')"
              [class.bg-cyan-glow]="currentMode === 'recruiter'"
              [class.text-black]="currentMode === 'recruiter'"
              [class.shadow-md]="currentMode === 'recruiter'"
              [ngClass]="currentMode !== 'recruiter' ? 'text-white/60' : ''"
              class="px-1.5 sm:px-2 py-1 rounded-lg font-bold transition-all flex items-center gap-1 cursor-pointer hover:text-white"
              title="Switch to Clean Executive Recruiter Dossier">
              <span>💼</span>
              <span class="hidden md:inline">RECRUITER</span>
            </button>

            <!-- Story Mode Option -->
            <button
              (click)="switchMode('story')"
              [class.bg-amber-500]="currentMode === 'story'"
              [class.text-black]="currentMode === 'story'"
              [class.shadow-md]="currentMode === 'story'"
              [ngClass]="currentMode !== 'story' ? 'text-white/60' : ''"
              class="px-1.5 sm:px-2 py-1 rounded-lg font-bold transition-all flex items-center gap-1 cursor-pointer hover:text-white"
              title="Switch to Interactive Story Mode">
              <svg class="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              <span class="hidden md:inline">STORY</span>
            </button>
          </div>

          <!-- Consolidated Retro Audio Capsule (Active in Pokédex Mode across Mobile, Tablet & Desktop) -->
          <div *ngIf="currentMode === 'pokemon'"
               class="flex items-center bg-black/60 border border-white/15 rounded-xl p-0.5 font-mono shadow-inner flex-shrink-0">
            <!-- Theme Music Toggle -->
            <button
              (click)="audio.toggleMusic()"
              class="px-1.5 sm:px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
              [ngClass]="audio.isMusicPlaying ? 'bg-energy text-black shadow-lg shadow-energy/20' : 'text-white/70 hover:text-white hover:bg-white/10'"
              [title]="audio.isMusicPlaying ? '8-Bit Gym Theme Playing (Click to Pause)' : 'Play Nostalgic 8-Bit Gym Theme'">
              <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" [ngClass]="audio.isMusicPlaying ? 'bg-black animate-pulse' : 'bg-red-500'"></span>
              <span>THEME</span>
            </button>

            <!-- SFX Mute/Unmute -->
            <button
              (click)="audio.toggleSound()"
              class="hidden sm:flex px-1.5 py-1 rounded-lg text-xs transition-all text-white/70 hover:text-white hover:bg-white/10 items-center cursor-pointer"
              [title]="audio.soundEnabled ? '8-Bit Retro SFX Active' : 'Sound Effects Muted'">
              <span>{{ audio.soundEnabled ? '🔊' : '🔇' }}</span>
            </button>
          </div>

          <!-- Direct Resume Download Button (Shown in Recruiter & Story Mode on >= sm; mobile uses drawer button so 320px stays clean) -->
          <a *ngIf="currentMode !== 'pokemon'"
             href="assets/Harshal_Raaj_Patnaik_Resume.pdf"
             download="Harshal_Raaj_Patnaik_Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             (click)="audio.playFanfare()"
             class="hidden sm:flex px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all items-center gap-1 flex-shrink-0 shadow-md cursor-pointer text-black"
             [ngClass]="currentMode === 'story' ? 'bg-amber-500 hover:bg-amber-400 shadow-amber-500/20' : 'bg-cyan-glow hover:bg-cyan-glow/90 shadow-cyan-glow/20'">
            <span>RESUME</span>
            <span class="hidden md:inline">(PDF)</span>
            <span>↓</span>
          </a>

          <!-- MOBILE / TABLET HAMBURGER BUTTON (< 1280px) -->
          <button
            (click)="toggleMobileMenu()"
            class="xl:hidden p-1.5 sm:p-2 rounded-xl text-white/80 hover:text-white bg-white/5 border border-white/15 hover:border-white/30 transition-all flex items-center justify-center cursor-pointer"
            [attr.aria-expanded]="mobileMenuOpen"
            aria-label="Toggle Navigation Menu">
            <span *ngIf="!mobileMenuOpen" class="text-sm sm:text-lg leading-none font-bold">☰</span>
            <span *ngIf="mobileMenuOpen" class="text-sm sm:text-lg leading-none font-bold"
                  [ngClass]="currentMode === 'pokemon' ? 'text-energy' : currentMode === 'story' ? 'text-amber-400' : 'text-cyan-glow'">✕</span>
          </button>

        </div>

      </div>

      <!-- Frosted Navigation Backing -->
      <div class="absolute inset-0 -z-10 backdrop-blur-md border-b bg-[#0a0d14]/90"
           [ngClass]="currentMode === 'pokemon' ? 'border-red-900/60' : currentMode === 'story' ? 'border-amber-500/25' : 'border-cyan-glow/30'"
           aria-hidden="true"></div>

      <!-- RESPONSIVE MOBILE / TABLET SLIDE-DOWN DRAWER MENU -->
      <div
        *ngIf="mobileMenuOpen"
        class="xl:hidden mt-2 p-4 rounded-2xl bg-[#0d121f]/98 backdrop-blur-2xl border-2 shadow-[0_12px_36px_rgba(0,0,0,0.85)] font-mono animate-in fade-in duration-200"
        [ngClass]="currentMode === 'pokemon' ? 'border-red-900/80' : currentMode === 'story' ? 'border-amber-500/40' : 'border-cyan-glow/40'">
        
        <!-- Header Ribbon inside drawer -->
        <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-[10px] text-white/50">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full animate-pulse"
                  [ngClass]="currentMode === 'pokemon' ? 'bg-energy' : currentMode === 'story' ? 'bg-amber-400' : 'bg-cyan-glow'"></span>
            <span class="font-bold tracking-wider"
                  [ngClass]="currentMode === 'pokemon' ? 'text-energy' : currentMode === 'story' ? 'text-amber-400' : 'text-cyan-glow'">
              {{ currentMode === 'pokemon' ? 'POKÉDEX PRO DIRECTORY' : currentMode === 'story' ? 'INTERACTIVE STORY CHAPTERS' : 'EXECUTIVE RECRUITER DIRECTORY' }}
            </span>
          </div>
          <span>{{ activeNavLinks.length }} SECTIONS</span>
        </div>

        <!-- Section Navigation Links -->
        <div class="grid grid-cols-2 gap-2 text-xs">
          <a
            *ngFor="let link of activeNavLinks"
            [href]="link.href"
            (click)="onNavClick(link.href)"
            class="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-glow/50 text-white/85 hover:text-white transition-all flex items-center gap-2">
            <span class="text-[10px] font-bold"
                  [ngClass]="currentMode === 'pokemon' ? 'text-energy' : currentMode === 'story' ? 'text-amber-400' : 'text-cyan-glow'">{{ link.num }}</span>
            <span class="font-medium truncate">{{ link.label }}</span>
          </a>
        </div>

        <!-- Mobile Drawer Utilities & Mode Switcher -->
        <div class="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2.5 text-xs">
          <!-- 1-Tap Direct ATS Resume Download for Mobile/Tablet Viewports -->
          <a href="assets/Harshal_Raaj_Patnaik_Resume.pdf"
             download="Harshal_Raaj_Patnaik_Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             (click)="audio.playFanfare()"
             class="w-full py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md text-center text-black"
             [ngClass]="currentMode === 'pokemon' ? 'bg-energy hover:bg-energy/90 shadow-energy/20' : currentMode === 'story' ? 'bg-amber-500 hover:bg-amber-400 shadow-amber-500/20' : 'bg-cyan-glow hover:bg-cyan-glow/90 shadow-cyan-glow/20'">
            <span>📄 DOWNLOAD ATS RESUME (PDF)</span>
            <span>↓</span>
          </a>

          <div class="flex flex-wrap items-center justify-between gap-2">
            <!-- Switch Mode in Mobile Drawer -->
            <div class="flex flex-wrap gap-2">
              <button
                *ngIf="currentMode !== 'pokemon'"
                (click)="switchMode('pokemon'); mobileMenuOpen = false"
                class="px-3 py-1.5 rounded-xl border border-crimson/50 bg-crimson/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                <span>⚡ POKÉDEX PRO</span>
              </button>
              <button
                *ngIf="currentMode !== 'recruiter'"
                (click)="switchMode('recruiter'); mobileMenuOpen = false"
                class="px-3 py-1.5 rounded-xl border border-cyan-glow/40 bg-cyan-glow/15 text-cyan-glow text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                <span>💼 RECRUITER</span>
              </button>
              <button
                *ngIf="currentMode !== 'story'"
                (click)="switchMode('story'); mobileMenuOpen = false"
                class="px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/15 text-amber-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                <span>STORY MODE</span>
              </button>
            </div>

            <!-- Audio toggles if in pokemon mode -->
            <div *ngIf="currentMode === 'pokemon'" class="flex items-center gap-2">
              <button
                (click)="audio.toggleMusic()"
                class="px-2.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all text-[11px] cursor-pointer"
                [ngClass]="audio.isMusicPlaying ? 'bg-energy text-black' : 'bg-white/10 text-white/80'">
                <span class="w-1.5 h-1.5 rounded-full" [ngClass]="audio.isMusicPlaying ? 'bg-black animate-pulse' : 'bg-red-500'"></span>
                <span>{{ audio.isMusicPlaying ? 'THEME ON' : 'PLAY THEME' }}</span>
              </button>
              <button
                (click)="audio.toggleSound()"
                class="px-2.5 py-1.5 rounded-xl bg-white/10 text-white/80 text-[11px] hover:bg-white/15 transition-all cursor-pointer">
                {{ audio.soundEnabled ? '🔊 SFX' : '🔇 SFX' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- IN-UI OPENAPI SPECIFICATION MODAL (When Backend is Offline or Triggered via Swagger Links) -->
    <div *ngIf="showApiModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="w-full max-w-3xl bg-[#0f1422] border-2 border-cyan-glow/50 rounded-2xl p-6 shadow-2xl font-mono text-white max-h-[85vh] flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-glow animate-pulse"></span>
            <span class="font-bold text-sm text-cyan-glow tracking-wider">OPENAPI 3.0 / REST SPECIFICATION</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/30">STANDALONE MODE</span>
          </div>
          <button (click)="closeApiModal()" class="text-white/60 hover:text-white px-2 py-1 rounded hover:bg-white/10 text-xs cursor-pointer">✕ CLOSE</button>
        </div>

        <!-- Body -->
        <div class="overflow-y-auto py-4 space-y-4 text-xs pr-1">
          <p class="text-white/70 leading-relaxed">
            The Spring Boot 3 reactive backend powers portfolio telemetry, live candidate metrics, and recruiter contact dispatch.
            When running in standalone offline mode, the Angular client serves fallback telemetry with high-fidelity mock data.
          </p>

          <div class="space-y-2">
            <div class="text-[11px] font-bold text-cyan-glow uppercase tracking-wider">REST Endpoints:</div>
            
            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/profile</span>
                <span class="text-white/40 text-[10px] ml-auto">Returns Candidate Bio, Roles &amp; Competencies</span>
              </div>
            </div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/projects</span>
                <span class="text-white/40 text-[10px] ml-auto">Streams Enterprise Systems &amp; Capstones</span>
              </div>
            </div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/telemetry</span>
                <span class="text-white/40 text-[10px] ml-auto">Returns System Load, JVM Heap, Latencies</span>
              </div>
            </div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-energy/20 text-energy font-bold text-[10px] rounded">POST</span>
                <span class="text-white font-bold">/api/v1/contact</span>
                <span class="text-white/40 text-[10px] ml-auto">Dispatches Recruiter Inquiries to Harshal</span>
              </div>
            </div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/resume/download</span>
                <span class="text-white/40 text-[10px] ml-auto">Dynamically Streams High-Resolution ATS PDF</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="pt-4 border-t border-white/10 flex items-center justify-end flex-shrink-0 text-[11px]">
          <button (click)="closeApiModal()" class="px-5 py-2 bg-cyan-glow text-black font-bold rounded-xl hover:bg-cyan-glow/90 transition-all cursor-pointer">
            Understood
          </button>
        </div>

      </div>
    </div>
  `
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() currentMode: PortfolioMode = 'pokemon';
  @Output() modeChange = new EventEmitter<PortfolioMode>();
  @Output() returnToHome = new EventEmitter<void>();

  mobileMenuOpen = false;
  showApiModal = false;

  private apiModalSub?: Subscription;

  pokemonNavLinks = [
    { href: '#hero',      label: 'Pokédex',        num: '01' },
    { href: '#projects',  label: 'Pokémon Roster',  num: '02' },
    { href: '#sthirax',   label: 'SthiraX (MBA)',   num: '03' },
    { href: '#trainers',  label: 'Gym Leaders',     num: '04' },
    { href: '#telemetry', label: 'Telemetry',       num: '05' },
    { href: '#skills',    label: 'Skills',          num: '06' },
    { href: '#resume',    label: 'ATS Resume',      num: '07' },
    { href: '#contact',   label: 'Contact',         num: '08' },
  ];

  recruiterNavLinks = [
    { href: '#executive-summary', label: 'Overview',       num: '01' },
    { href: '#experience',        label: 'Experience',     num: '02' },
    { href: '#projects',          label: 'Projects',       num: '03' },
    { href: '#education',         label: 'Tech × MBA',     num: '04' },
    { href: '#skills',            label: 'Competencies',   num: '05' },
    { href: '#resume',            label: 'ATS Resume',     num: '06' },
    { href: '#contact',           label: 'Contact',        num: '07' },
  ];

  storyNavLinks = [
    { href: '#ch-prologue', label: 'Prologue',     num: '00' },
    { href: '#ch-spark',    label: 'Spark',        num: '01' },
    { href: '#ch-backbone', label: 'Backbone',     num: '02' },
    { href: '#ch-scale',    label: 'Scale & Lead', num: '03' },
    { href: '#ch-bridge',   label: 'Tech × MBA',   num: '04' },
    { href: '#ch-connect',  label: 'Connect',      num: '05' },
  ];

  constructor(
    public audio: PokemonAudioService,
    public api: PortfolioApiService
  ) {}

  ngOnInit(): void {
    this.apiModalSub = this.api.showApiModal$.subscribe(show => {
      this.showApiModal = show;
    });
  }

  ngOnDestroy(): void {
    if (this.apiModalSub) {
      this.apiModalSub.unsubscribe();
    }
  }

  get activeNavLinks() {
    if (this.currentMode === 'pokemon') return this.pokemonNavLinks;
    if (this.currentMode === 'story') return this.storyNavLinks;
    return this.recruiterNavLinks;
  }

  switchMode(target: PortfolioMode): void {
    if (target === this.currentMode) return;
    this.audio.playFanfare();
    this.modeChange.emit(target);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.audio.playBeep();
  }

  onNavClick(href: string): void {
    this.audio.playBeep();
    this.mobileMenuOpen = false;
  }

  onNameClick(event: Event): void {
    event.preventDefault();
    this.audio.playBeep();
    this.mobileMenuOpen = false;
    this.returnToHome.emit();
  }

  openOfflineApiModal(): void {
    this.audio.playChirp();
    this.api.openApiModal();
  }

  closeApiModal(): void {
    this.api.closeApiModal();
  }
}
