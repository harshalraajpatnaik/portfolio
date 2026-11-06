import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PortfolioMode = 'pokemon' | 'recruiter';

@Component({
  selector: 'app-ui-mode-portal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#06080e]/95 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-300 font-sans" role="dialog" aria-modal="true" aria-labelledby="portal-title">
      <!-- Ambient background grid & glow -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="relative w-full max-w-4xl mx-auto my-auto text-white">
        <!-- Top Badge & Header -->
        <div class="text-center space-y-3 mb-8 sm:mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] font-mono tracking-widest text-white/80">
            <span class="w-2 h-2 rounded-full bg-energy animate-pulse"></span>
            <span>HARSHAL RAAJ PATNAIK · PORTFOLIO ARCHITECTURE</span>
          </div>

          <h1 id="portal-title" class="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Choose Your <span class="gradient-text">Experience</span>
          </h1>

          <p class="text-xs sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Select how you would like to explore Harshal's distributed cloud systems, enterprise track record at Tata Communications, and IIM Kozhikode strategy capstone.
          </p>
        </div>

        <!-- Two Interface Choice Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          
          <!-- OPTION 1: POKÉDEX PRO GAMIFIED PORTFOLIO -->
          <div
            (click)="selectMode('pokemon')"
            class="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#180a0f] to-[#0d0914] border-2 border-red-900/60 hover:border-crimson transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(220,10,45,0.35)] cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5">
            
            <div class="space-y-4">
              <!-- Header Bar with Iconic Sensor -->
              <div class="flex items-center justify-between pb-3 border-b border-red-900/40">
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-full bg-cyan-glow border-2 border-white shadow-[0_0_10px_#00E5FF] animate-pulse flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-crimson"></span>
                    <span class="w-2 h-2 rounded-full bg-energy"></span>
                    <span class="w-2 h-2 rounded-full bg-grass"></span>
                  </div>
                </div>
                <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-crimson/20 border border-crimson/40 text-crimson">
                  GAMIFIED & RETRO
                </span>
              </div>

              <!-- Title & Tagline -->
              <div>
                <div class="text-xs font-mono font-bold text-energy mb-1">OPTION 01</div>
                <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-energy transition-colors">
                  Pokédex Pro Experience ⚡
                </h2>
                <p class="text-xs sm:text-[13px] text-white/70 mt-2 leading-relaxed">
                  Explore Harshal's engineering achievements framed as a nostalgic Kanto League adventure:
                </p>
              </div>

              <!-- Feature Highlights -->
              <ul class="space-y-2 text-xs font-mono text-white/80">
                <li class="flex items-start gap-2">
                  <span class="text-energy font-bold">▶</span>
                  <span>16 Starter Pokémon paired with real cloud systems</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-energy font-bold">▶</span>
                  <span>Authentic 8-Bit Pokémon Gym Theme & retro sound effects</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-energy font-bold">▶</span>
                  <span>Kanto Gym Leader inspections (Ash, Misty, Brock)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-energy font-bold">▶</span>
                  <span>Classic Pokéball throw & burst intro animation</span>
                </li>
              </ul>
            </div>

            <!-- Launch Button -->
            <div class="pt-6 mt-6 border-t border-white/10">
              <button
                class="w-full py-3.5 px-5 rounded-2xl bg-crimson group-hover:bg-crimson/90 text-white font-mono font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-crimson/30 transition-all flex items-center justify-center gap-2 group-hover:gap-3 cursor-pointer">
                <span>LAUNCH POKÉDEX PRO</span>
                <span class="text-base transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          <!-- OPTION 2: EXECUTIVE RECRUITER & HIRING MANAGER MODE -->
          <div
            (click)="selectMode('recruiter')"
            class="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0e1628] to-[#0a0f1d] border-2 border-cyan-glow/40 hover:border-cyan-glow transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5">
            
            <div class="space-y-4">
              <!-- Header Bar with Executive Tag -->
              <div class="flex items-center justify-between pb-3 border-b border-cyan-glow/20">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-cyan-glow animate-ping"></span>
                  <span class="text-xs font-mono font-bold text-cyan-glow">TOP RECRUITER RECOMMENDED</span>
                </div>
                <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-glow/15 border border-cyan-glow/30 text-cyan-glow">
                  EXECUTIVE & CLEAN
                </span>
              </div>

              <!-- Title & Tagline -->
              <div>
                <div class="text-xs font-mono font-bold text-cyan-glow mb-1">OPTION 02</div>
                <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-glow transition-colors">
                  Executive Recruiter Mode 💼
                </h2>
                <p class="text-xs sm:text-[13px] text-white/70 mt-2 leading-relaxed">
                  Tailored for Google & top-tier recruiters, hiring managers, and engineering leadership:
                </p>
              </div>

              <!-- Feature Highlights -->
              <ul class="space-y-2 text-xs font-mono text-white/80">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-glow font-bold">✓</span>
                  <span>Distraction-free, elegant layout with instant readability</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-glow font-bold">✓</span>
                  <span>Google XYZ metric formula: 92.6% latency cut, 4+ hypervisors</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-glow font-bold">✓</span>
                  <span>Clear Tech × MBA value proposition (IIMK Capstone & FinOps)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-glow font-bold">✓</span>
                  <span>Immediate access to 1-Page ATS Resume (PDF) & GitHub code</span>
                </li>
              </ul>
            </div>

            <!-- Launch Button -->
            <div class="pt-6 mt-6 border-t border-white/10">
              <button
                class="w-full py-3.5 px-5 rounded-2xl bg-cyan-glow hover:bg-cyan-glow/90 text-black font-mono font-extrabold text-xs sm:text-sm tracking-wider shadow-lg shadow-cyan-glow/25 transition-all flex items-center justify-center gap-2 group-hover:gap-3 cursor-pointer">
                <span>LAUNCH RECRUITER MODE</span>
                <span class="text-base transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

        </div>

        <!-- Bottom Informational Subtitle -->
        <div class="text-center mt-6 text-white/50 text-[11px] font-mono">
          <span>Tip: You can switch between Pokédex Pro and Recruiter Mode anytime using the toggle button in the top navbar.</span>
        </div>
      </div>
    </div>
  `
})
export class UiModePortalComponent {
  @Output() modeSelected = new EventEmitter<PortfolioMode>();

  selectMode(mode: PortfolioMode): void {
    this.modeSelected.emit(mode);
  }
}
