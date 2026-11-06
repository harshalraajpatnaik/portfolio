import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';

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
              [ngClass]="audio.isMusicPlaying ? 'bg-energy text-black shadow-lg shadow-energy/20' : 'text-white/70 hover:text-white hover:bg-white/10'"
              [title]="audio.isMusicPlaying ? '8-Bit Gym Theme Playing (Click to Pause)' : 'Play Nostalgic 8-Bit Gym Theme'">
              <span class="w-2 h-2 rounded-full" [ngClass]="audio.isMusicPlaying ? 'bg-black animate-pulse' : 'bg-red-500'"></span>
              <span>THEME</span>
            </button>

            <!-- SFX Mute/Unmute -->
            <button
              (click)="audio.toggleSound()"
              class="px-2 py-1 rounded-lg text-xs transition-all text-white/70 hover:text-white hover:bg-white/10 flex items-center"
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
             class="px-3 sm:px-4 py-1.5 rounded-xl text-xs font-mono font-bold bg-energy hover:bg-energy/90 text-black shadow-lg shadow-energy/25 transition-all flex items-center gap-1.5 flex-shrink-0">
            <span>RESUME (PDF)</span>
            <span>↓</span>
          </a>

          <!-- Swagger / OpenAPI Button: Live link if online, In-UI modal if offline -->
          <ng-container *ngIf="!hideApiButton">
            <ng-container *ngIf="(api.isBackendOnline$ | async); else offlineApiBtn">
              <a href="http://localhost:8080/swagger-ui.html"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="OpenAPI 3.0 Swagger UI (Spring Boot Live on Port 8080)"
                 (click)="audio.playChirp()"
                 class="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono border border-grass/40 bg-grass/15 text-grass hover:bg-grass/25 transition-colors">
                <span class="w-1.5 h-1.5 rounded-full bg-grass animate-pulse"></span>
                <span>API ↗</span>
              </a>
            </ng-container>
            <ng-template #offlineApiBtn>
              <button
                (click)="openOfflineApiModal()"
                title="View OpenAPI Specification & REST Architecture (Standalone Mode)"
                class="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono border border-cyan-glow/40 bg-cyan-glow/15 text-cyan-glow hover:bg-cyan-glow/25 transition-colors">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-glow"></span>
                <span>API SPEC</span>
              </button>
            </ng-template>
          </ng-container>

        </div>

      </div>

      <!-- Frosted Pokédex Backing -->
      <div class="absolute inset-0 -z-10 backdrop-blur-md border-b border-red-900/60 bg-[#0a0d14]/90" aria-hidden="true"></div>
    </nav>

    <!-- IN-UI OPENAPI SPECIFICATION MODAL (When Backend is Offline or Standalone) -->
    <div *ngIf="showApiModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="w-full max-w-3xl bg-[#0f1422] border-2 border-cyan-glow/50 rounded-2xl p-6 shadow-2xl font-mono text-white max-h-[85vh] flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-glow animate-pulse"></span>
            <span class="font-bold text-sm text-cyan-glow tracking-wider">OPENAPI 3.0 / REST SPECIFICATION</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/30">STANDALONE MODE</span>
          </div>
          <button (click)="closeApiModal()" class="text-white/60 hover:text-white px-2 py-1 rounded hover:bg-white/10 text-xs">✕ CLOSE</button>
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
                <span class="text-white/40 text-[10px] ml-auto">Returns 19 Categorized Architectural Project Cards</span>
              </div>
            </div>

            <div class="bg-[#151c2e] border border-white/10 rounded-lg p-2.5 space-y-1">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 bg-grass/20 text-grass font-bold text-[10px] rounded">GET</span>
                <span class="text-white font-bold">/api/v1/telemetry</span>
                <span class="text-white/40 text-[10px] ml-auto">Returns System Load, JVM Heap, Cassandra/Redis Latencies</span>
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
        <div class="pt-4 border-t border-white/10 flex items-center justify-between flex-shrink-0 text-[11px]">
          <button (click)="toggleHideApiButton()" class="text-white/50 hover:text-white underline">
            Hide API button from navbar
          </button>
          <button (click)="closeApiModal()" class="px-4 py-1.5 bg-cyan-glow text-black font-bold rounded-lg hover:bg-cyan-glow/90 transition-all">
            Understood
          </button>
        </div>

      </div>
    </div>
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

  showApiModal = false;
  hideApiButton = false;

  constructor(
    public audio: PokemonAudioService,
    public api: PortfolioApiService
  ) {}

  openOfflineApiModal(): void {
    this.audio.playChirp();
    this.showApiModal = true;
  }

  closeApiModal(): void {
    this.showApiModal = false;
  }

  toggleHideApiButton(): void {
    this.hideApiButton = true;
    this.showApiModal = false;
  }
}
