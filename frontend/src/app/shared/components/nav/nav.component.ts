import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { Subscription } from 'rxjs';

export type PortfolioMode = 'pokemon' | 'recruiter';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 transition-all" role="navigation" aria-label="Portfolio Navigation">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">

        <!-- BRAND LOGO: Proportional and clean on mobile & desktop -->
        <a [href]="currentMode === 'pokemon' ? '#hero' : '#executive-summary'"
           class="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group"
           (click)="onNavClick(currentMode === 'pokemon' ? '#hero' : '#executive-summary')">
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 flex items-center justify-center p-1 group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden"
               [ngClass]="currentMode === 'pokemon' ? 'border-crimson shadow-[0_0_12px_rgba(220,10,45,0.8)]' : 'border-cyan-glow shadow-[0_0_12px_rgba(0,229,255,0.8)]'">
            <img src="assets/hp-logo.png" alt="Harshal Patnaik (HP)" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col justify-center flex-shrink-0">
            <div class="font-black text-xs sm:text-sm text-white tracking-wider font-mono whitespace-nowrap transition-colors"
                 [ngClass]="currentMode === 'pokemon' ? 'group-hover:text-energy' : 'group-hover:text-cyan-glow'">
              HARSHAL RAAJ PATNAIK
            </div>
            <div class="text-[9px] sm:text-[10px] font-mono text-white/50 tracking-wider whitespace-nowrap flex items-center gap-1 sm:gap-1.5">
              <span>CLOUD SDE</span>
              <span class="text-energy">•</span>
              <span class="hidden xs:inline">TATA COMM</span>
              <span class="text-energy hidden xs:inline">•</span>
              <span>IIM KOZHIKODE</span>
            </div>
          </div>
        </a>

        <!-- CENTER NAVIGATION (Desktop / Wide screens >= 1024px) -->
        <div class="hidden lg:flex items-center gap-0.5 xl:gap-1 font-mono text-[11px] xl:text-xs flex-shrink-0">
          <a *ngFor="let link of activeNavLinks"
             [href]="link.href"
             (click)="audio.playBeep()"
             class="px-2 xl:px-2.5 py-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
            {{ link.label }}
          </a>
        </div>

        <!-- RIGHT SIDE: Mode Switcher + Audio Capsule + Resume + Mobile Hamburger -->
        <div class="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          
          <!-- DYNAMIC UI INTERFACE SWITCHER TOGGLE -->
          <div class="flex items-center">
            <button
              *ngIf="currentMode === 'pokemon'"
              (click)="switchMode('recruiter')"
              class="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-cyan-glow/15 hover:bg-cyan-glow/25 border border-cyan-glow/40 text-cyan-glow hover:border-cyan-glow transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Switch to Clean Executive Recruiter & Hiring Manager Mode">
              <span>💼</span>
              <span class="hidden xl:inline">RECRUITER MODE</span>
              <span class="xl:hidden">RECRUITER</span>
              <span class="text-[10px] opacity-80">⇄</span>
            </button>

            <button
              *ngIf="currentMode === 'recruiter'"
              (click)="switchMode('pokemon')"
              class="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-crimson/20 hover:bg-crimson/30 border border-crimson/50 text-white hover:border-crimson transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Switch to Pokédex Pro Gamified Experience">
              <span>⚡</span>
              <span class="hidden xl:inline">POKÉDEX PRO</span>
              <span class="xl:hidden">POKÉDEX</span>
              <span class="text-[10px] text-energy">⇄</span>
            </button>
          </div>

          <!-- Consolidated Retro Audio Capsule (Active in Pokédex Mode) -->
          <div *ngIf="currentMode === 'pokemon'"
               class="hidden lg:flex items-center bg-black/60 border border-white/15 rounded-xl p-0.5 font-mono shadow-inner">
            <!-- Theme Music Toggle -->
            <button
              (click)="audio.toggleMusic()"
              class="px-2 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
              [ngClass]="audio.isMusicPlaying ? 'bg-energy text-black shadow-lg shadow-energy/20' : 'text-white/70 hover:text-white hover:bg-white/10'"
              [title]="audio.isMusicPlaying ? '8-Bit Gym Theme Playing (Click to Pause)' : 'Play Nostalgic 8-Bit Gym Theme'">
              <span class="w-1.5 h-1.5 rounded-full" [ngClass]="audio.isMusicPlaying ? 'bg-black animate-pulse' : 'bg-red-500'"></span>
              <span>THEME</span>
            </button>

            <!-- SFX Mute/Unmute -->
            <button
              (click)="audio.toggleSound()"
              class="px-1.5 py-1 rounded-lg text-xs transition-all text-white/70 hover:text-white hover:bg-white/10 flex items-center cursor-pointer"
              [title]="audio.soundEnabled ? '8-Bit Retro SFX Active' : 'Sound Effects Muted'">
              <span>{{ audio.soundEnabled ? '🔊' : '🔇' }}</span>
            </button>
          </div>

          <!-- Direct Resume Download Button (Google-Standard ATS PDF) -->
          <a href="assets/Harshal_Raaj_Patnaik_Resume.pdf"
             download="Harshal_Raaj_Patnaik_Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             (click)="audio.playFanfare()"
             class="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1 flex-shrink-0 shadow-md"
             [ngClass]="currentMode === 'pokemon' ? 'bg-energy hover:bg-energy/90 text-black shadow-energy/25' : 'bg-cyan-glow hover:bg-cyan-glow/90 text-black shadow-cyan-glow/20'">
            <span>RESUME</span>
            <span class="hidden xl:inline">(PDF)</span>
            <span>↓</span>
          </a>

          <!-- MOBILE / TABLET HAMBURGER BUTTON (< 1024px) -->
          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden p-1.5 sm:p-2 rounded-xl text-white/80 hover:text-white bg-white/5 border border-white/15 hover:border-white/30 transition-all flex items-center justify-center cursor-pointer"
            [attr.aria-expanded]="mobileMenuOpen"
            aria-label="Toggle Navigation Menu">
            <span *ngIf="!mobileMenuOpen" class="text-base sm:text-lg leading-none font-bold">☰</span>
            <span *ngIf="mobileMenuOpen" class="text-base sm:text-lg leading-none font-bold"
                  [ngClass]="currentMode === 'pokemon' ? 'text-energy' : 'text-cyan-glow'">✕</span>
          </button>

        </div>

      </div>

      <!-- Frosted Navigation Backing -->
      <div class="absolute inset-0 -z-10 backdrop-blur-md border-b bg-[#0a0d14]/90"
           [ngClass]="currentMode === 'pokemon' ? 'border-red-900/60' : 'border-cyan-glow/30'"
           aria-hidden="true"></div>

      <!-- RESPONSIVE MOBILE / TABLET SLIDE-DOWN DRAWER MENU -->
      <div
        *ngIf="mobileMenuOpen"
        class="lg:hidden mt-2 p-4 rounded-2xl bg-[#0d121f]/98 backdrop-blur-2xl border-2 shadow-[0_12px_36px_rgba(0,0,0,0.85)] font-mono animate-in fade-in duration-200"
        [ngClass]="currentMode === 'pokemon' ? 'border-red-900/80' : 'border-cyan-glow/40'">
        
        <!-- Header Ribbon inside drawer -->
        <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-[10px] text-white/50">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full animate-pulse"
                  [ngClass]="currentMode === 'pokemon' ? 'bg-energy' : 'bg-cyan-glow'"></span>
            <span class="font-bold tracking-wider"
                  [ngClass]="currentMode === 'pokemon' ? 'text-energy' : 'text-cyan-glow'">
              {{ currentMode === 'pokemon' ? 'POKÉDEX PRO DIRECTORY' : 'EXECUTIVE RECRUITER DIRECTORY' }}
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
                  [ngClass]="currentMode === 'pokemon' ? 'text-energy' : 'text-cyan-glow'">{{ link.num }}</span>
            <span class="font-medium truncate">{{ link.label }}</span>
          </a>
        </div>

        <!-- Mobile Drawer Utilities & Mode Switcher -->
        <div class="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
          <!-- Switch Mode in Mobile Drawer -->
          <button
            (click)="switchMode(currentMode === 'pokemon' ? 'recruiter' : 'pokemon'); mobileMenuOpen = false"
            class="px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            [ngClass]="currentMode === 'pokemon' ? 'border-cyan-glow/40 bg-cyan-glow/15 text-cyan-glow' : 'border-crimson/50 bg-crimson/20 text-white'">
            <span>{{ currentMode === 'pokemon' ? '💼 SWITCH TO RECRUITER MODE' : '⚡ SWITCH TO POKÉDEX PRO' }}</span>
          </button>

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
            The frontend is operating in <strong>Hybrid Standalone Mode</strong> with complete local mock fallback. When running locally with Java 25 &amp; Maven, the Spring Boot 3 microservice serves live endpoints and interactive Swagger UI on port 8080.
          </p>

          <!-- Quick Launch -->
          <div class="bg-black/40 border border-white/10 rounded-xl p-3">
            <div class="text-white/50 text-[10px] mb-1 uppercase tracking-wider font-bold">To Run Live Backend Microservice:</div>
            <code class="text-energy text-xs select-all">./start-dev.sh</code>
            <span class="text-white/50 text-[10px] ml-2">→ Launches Spring Boot on http://localhost:8080/swagger-ui.html</span>
          </div>

          <!-- Documented Endpoints -->
          <div class="space-y-2">
            <div class="text-white/50 text-[10px] uppercase tracking-wider font-bold">Documented REST Endpoints:</div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/profile</span>
                <span class="text-white/40 text-[10px] ml-auto">Returns Profile, Education, Experience, Awards</span>
              </div>
            </div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/projects</span>
                <span class="text-white/40 text-[10px] ml-auto">Returns Categorized Architectural Project Cards</span>
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
    return this.currentMode === 'pokemon' ? this.pokemonNavLinks : this.recruiterNavLinks;
  }

  switchMode(target: PortfolioMode): void {
    this.audio.playFanfare();
    if (typeof document !== 'undefined' && (document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        this.modeChange.emit(target);
      });
    } else {
      this.modeChange.emit(target);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.audio.playBeep();
  }

  onNavClick(href: string): void {
    this.audio.playBeep();
    this.mobileMenuOpen = false;
  }

  openOfflineApiModal(): void {
    this.audio.playChirp();
    this.api.openApiModal();
  }

  closeApiModal(): void {
    this.api.closeApiModal();
  }
}
