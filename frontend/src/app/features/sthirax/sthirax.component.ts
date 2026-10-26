import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../core/services/pokemon-audio.service';

@Component({
  selector: 'app-sthirax',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sthirax" class="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-black/60 to-slate-950/80 border-t border-emerald-900/30">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div class="space-y-4 mb-14 text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
            <span>🌱 IIM KOZHIKODE BUSINESS PLAN CAPSTONE (BPP)</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            When <span class="gradient-text">Business Strategy</span> Meets Distributed Systems
          </h2>
          <p class="text-white/75 text-base sm:text-lg leading-relaxed font-sans">
            How Harshal connects <strong>MBA platform economics & regulatory compliance</strong> with 
            <strong>distributed IoT software & batch-level MRV</strong> through project <em>SthiraX</em>.
          </p>
        </div>

        <!-- The SthiraX Deep Dive Grid -->
        <div class="glass-card p-8 sm:p-12 rounded-3xl border-2 border-emerald-500/30 bg-[#09151c]/90 shadow-2xl relative overflow-hidden">
          
          <!-- Top Watermark / Badge -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-emerald-500/20 gap-4">
            <div>
              <div class="flex items-center gap-3">
                <span class="text-3xl">🌱</span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">SthiraX</h3>
              </div>
              <p class="text-xs font-mono text-emerald-400 mt-1">
                A Distributed CO₂-Mineralization Platform for Certified Low-Carbon Precast Materials in India
              </p>
            </div>
            <div class="text-left sm:text-right font-mono text-xs text-white/60 space-y-1">
              <div>REGULATORY ANCHOR: <span class="text-energy font-bold">C&D RULES 2026</span></div>
              <div>OPERATIONAL MODEL: <span class="text-cyan-glow font-bold">ASSET-LIGHT RETROFIT</span></div>
            </div>
          </div>

          <!-- 4 Strategic Pillars of Tech + MBA Synergy -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            <!-- Pillar 1: The Regulatory Catalyst -->
            <div class="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
              <div class="text-xs font-mono text-emerald-400 font-bold">01 · REGULATORY TAILWIND</div>
              <h4 class="text-base font-bold text-white">Legal Market Creation</h4>
              <p class="text-xs text-white/70 leading-relaxed">
                1 April 2026 C&D Rules mandate all projects >20,000 sqm recycle debris, scaling from 5% to 25% recycled content by 2030. 
                Demand is created by law, yet India recycles &lt;1% of its 100M tonnes of annual waste.
              </p>
            </div>

            <!-- Pillar 2: Platform Architecture -->
            <div class="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
              <div class="text-xs font-mono text-cyan-glow font-bold">02 · PLATFORM DESIGN</div>
              <h4 class="text-base font-bold text-white">Asset-Light Network</h4>
              <p class="text-xs text-white/70 leading-relaxed">
                Rather than building capital-intensive manufacturing plants, SthiraX retrofits thousands of existing regional precast factories 
                with modular CO₂-curing units, turning fragmented suppliers into one unified certified network.
              </p>
            </div>

            <!-- Pillar 3: Distributed MRV Software -->
            <div class="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
              <div class="text-xs font-mono text-energy font-bold">03 · DISTRIBUTED SOFTWARE</div>
              <h4 class="text-base font-bold text-white">Digital Product Passports</h4>
              <p class="text-xs text-white/70 leading-relaxed">
                Batch-level Measurement, Reporting & Verification (MRV) IoT software tracks calcium carbonate mineralization per lot, 
                generating tamper-evident compliance passports for developers fulfilling EPR mandates.
              </p>
            </div>

            <!-- Pillar 4: Unit Economics -->
            <div class="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
              <div class="text-xs font-mono text-purple-400 font-bold">04 · BUSINESS ECONOMICS</div>
              <h4 class="text-base font-bold text-white">Multi-Layered Margin</h4>
              <p class="text-xs text-white/70 leading-relaxed">
                Revenue streams from retrofit onboarding fees, equipment leasing, per-tonne royalties, and MRV SaaS subscriptions. 
                The model is designed to thrive even if voluntary carbon credit prices drop to zero.
              </p>
            </div>

          </div>

          <!-- Bottom Quote Box: The Core Question -->
          <div class="bg-black/60 p-6 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
            <div class="space-y-1 text-white/80">
              <span class="text-emerald-400 font-bold">CORE CAPSTONE QUESTION BEING VALIDATED:</span>
              <p class="text-sm font-sans text-white/90 italic">
                "Can one standardized curing protocol work across independently run regional plants, at price parity with conventional concrete, delivering certified compliance developers re-order?"
              </p>
            </div>
            <div class="flex-shrink-0">
              <a href="#projects" class="px-5 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30 transition-all font-mono font-bold text-xs flex items-center gap-1.5">
                <span>VIEW TECH SPECS</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class SthiraxComponent {
  constructor(public audio: PokemonAudioService) {}
}
