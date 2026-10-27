import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterRosterComponent } from '../../shared/components/starter-roster/starter-roster.component';
import { ProfileResponse } from '../../core/models/api.models';
import { PokemonAudioService } from '../../core/services/pokemon-audio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, StarterRosterComponent],
  template: `
    <section id="hero" class="min-h-screen pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
      <!-- Ambient background Pokédex glow -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-crimson/15 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true"></div>

      <!-- Main Pokédex Shell Container -->
      <div class="max-w-7xl mx-auto w-full">
        <!-- Iconic Top Pokédex Sensor Bar -->
        <div class="bg-[#C5001A] p-4 rounded-t-3xl border-t-2 border-x-2 border-red-900 shadow-2xl flex items-center justify-between">
          <!-- Large Blue Sensor Scanner + 3 Mini LEDs -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-cyan-glow border-4 border-white shadow-[0_0_15px_#00E5FF] animate-pulse flex items-center justify-center">
              <div class="w-3 h-3 rounded-full bg-white/90"></div>
            </div>
            <div class="flex items-center gap-2 ml-1">
              <span class="w-3.5 h-3.5 rounded-full bg-crimson border border-black shadow-[0_0_6px_#ff1744]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-energy border border-black shadow-[0_0_6px_#ffd600]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-grass border border-black shadow-[0_0_6px_#00e676]"></span>
            </div>
            <span class="text-xs font-mono font-extrabold text-white tracking-widest uppercase ml-3 hidden sm:inline">
              POKÉDEX PRO · CLOUD & STRATEGY REGION #001
            </span>
          </div>

          <!-- Quick Audio / Resume Actions -->
          <div class="flex items-center gap-3">
            <button
              (click)="toggleAudio()"
              class="px-3 py-1.5 rounded-xl text-xs font-mono border border-white/20 bg-black/40 text-white hover:bg-black/60 transition-all flex items-center gap-1.5">
              <span>{{ audio.soundEnabled ? '🔊 8-BIT AUDIO: ON' : '🔇 8-BIT AUDIO: OFF' }}</span>
            </button>
            <a
              href="http://localhost:8080/api/v1/resume/download"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold bg-energy text-black hover:bg-energy/90 transition-all flex items-center gap-1 shadow-lg shadow-energy/20">
              <span>ATS RESUME (PDF)</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <!-- Pokédex Screen Body -->
        <div class="bg-[#0b101b] border-2 border-red-900 rounded-b-3xl p-6 sm:p-10 shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Left Column: Trainer Identity & Cloud Systems -->
            <div class="lg:col-span-7 space-y-6">
              <!-- Trainer ID Pill -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-energy/40 bg-energy/10 text-energy text-xs font-mono font-semibold">
                <span>⚡ TATA COMMUNICATIONS SDE</span>
                <span>•</span>
                <span>IIM KOZHIKODE EPGP</span>
                <span>•</span>
                <span>TECH × PRODUCT & STRATEGY</span>
              </div>

              <!-- Main Headline -->
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Gotta Scale <span class="gradient-text">'Em All!</span>
              </h1>

              <!-- Bio Summary: Grounded, authentic, combining engineering and executive business sense -->
              <div class="space-y-3 text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                <p>
                  I'm <strong class="text-white font-bold">Harshal Raaj Patnaik</strong>, Software Development Engineer at <strong class="text-energy">Tata Communications</strong> and Executive MBA scholar in the <strong class="text-cyan-glow">Executive Post Graduate Programme (EPGP) in General Management at IIM Kozhikode</strong>.
                </p>
                <p class="text-sm sm:text-base text-white/75">
                  I engineer multi-hypervisor provisioning dashboards across KVM, VMware, and OLVM, Caringo Swarm S3 object storage onboarding, and high-throughput batch schedulers (slashing latency by 92.6% from 18m to 80s).
                </p>
                <p class="text-sm sm:text-base text-white/90 border-l-2 border-energy pl-3.5 italic bg-white/5 py-2 rounded-r-lg">
                  <strong>The Tech × Business Advantage:</strong> By uniting distributed systems engineering with executive coursework in <em>Product Management, Financial Accounting, Operations Strategy, Risk Analysis, Product Analytics, and Negotiation</em>, I bridge the divide between deep tech and business impact—building resilient, cost-optimized architectures that scale revenue and solve complex enterprise mandates.
                </p>
              </div>

              <!-- Gym Badges of Engineering -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                  <div class="text-2xl mb-1">⚡</div>
                  <div class="text-xs font-bold text-energy">92.6% SPEEDUP</div>
                  <div class="text-[10px] text-white/50">Batch Scheduler Latency</div>
                </div>
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                  <div class="text-2xl mb-1">🪨</div>
                  <div class="text-xs font-bold text-cyan-glow">4+ HYPERVISORS</div>
                  <div class="text-[10px] text-white/50">KVM, VMware, OLVM</div>
                </div>
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                  <div class="text-2xl mb-1">🌱</div>
                  <div class="text-xs font-bold text-grass">STHIRAX BPP</div>
                  <div class="text-[10px] text-white/50">IIM Kozhikode Capstone</div>
                </div>
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                  <div class="text-2xl mb-1">🏆</div>
                  <div class="text-xs font-bold text-psychic">3× EXTRA MILE</div>
                  <div class="text-[10px] text-white/50">Tata Communications</div>
                </div>
              </div>

              <!-- Quick CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-3">
                <a href="#projects"
                   class="px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-crimson hover:bg-crimson/90 text-white shadow-lg shadow-crimson/30 transition-all flex items-center gap-2">
                  <span>EXPLORE POKÉMON ROSTER</span>
                  <span>▼</span>
                </a>
                <a href="#sthirax"
                   class="px-6 py-3.5 rounded-xl font-mono text-xs font-bold border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all flex items-center gap-2">
                  <span>TECH × BUSINESS: STHIRAX</span>
                  <span>🌱</span>
                </a>
                <a href="#resume"
                   class="px-5 py-3.5 rounded-xl font-mono text-xs text-white/80 hover:text-white border border-white/10 hover:border-white/30 transition-all flex items-center gap-2">
                  <span>1-PAGE ATS RESUME</span>
                  <span>📄</span>
                </a>
              </div>
            </div>

            <!-- Right Column: Interactive 3D Pokémon Party Showcase -->
            <div class="lg:col-span-5">
              <app-starter-roster></app-starter-roster>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  @Input() profile: ProfileResponse | null = null;

  constructor(public audio: PokemonAudioService) {}

  toggleAudio(): void {
    this.audio.toggleSound();
  }
}
