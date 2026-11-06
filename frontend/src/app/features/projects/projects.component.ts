import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../core/models/api.models';
import { PokemonAudioService } from '../../core/services/pokemon-audio.service';

interface PokemonProjectMeta {
  pokemonName: string;
  pokedexNo: string;
  spriteUrl: string;
  signatureMove: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 sm:px-6 relative bg-black/40 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div class="space-y-4 mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crimson/40 bg-crimson/15 text-crimson text-xs font-mono font-bold">
            <span class="w-2 h-2 rounded-full bg-crimson animate-pulse"></span>
            <span>POKÉDEX ARCHITECTURAL ARCHIVE & CASE STUDIES</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Partner Pokémon & <span class="gradient-text">Engineering Feats</span>
          </h2>
          <p class="text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed">
            Explore battle-tested cloud platforms and distributed systems engineered by Harshal.
            Each project is paired with its partner Pokémon, highlighting real production metrics,
            failure recovery, and architectural ownership.
          </p>

          <!-- Primary Category Switcher (Company Work vs Built by Harshal) -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button
              (click)="setCategory('COMPANY')"
              [class.bg-crimson]="selectedCategory === 'COMPANY'"
              [class.text-white]="selectedCategory === 'COMPANY'"
              [class.shadow-crimson]="selectedCategory === 'COMPANY'"
              [class.bg-white-5]="selectedCategory !== 'COMPANY'"
              [class.text-white-70]="selectedCategory !== 'COMPANY'"
              class="px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all border border-white/10 flex items-center gap-2.5 cursor-pointer shadow-lg hover:border-crimson/50">
              <span class="text-base">🏢</span>
              <span>COMPANY WORK (ENTERPRISE SYSTEMS)</span>
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold"
                    [ngClass]="selectedCategory === 'COMPANY' ? 'bg-black/40 text-white' : 'bg-white/10 text-white/60'">
                {{ companyProjects.length }}
              </span>
            </button>

            <button
              (click)="setCategory('PRODUCT')"
              [class.bg-energy]="selectedCategory === 'PRODUCT'"
              [class.text-black]="selectedCategory === 'PRODUCT'"
              [class.shadow-energy]="selectedCategory === 'PRODUCT'"
              [class.bg-white-5]="selectedCategory !== 'PRODUCT'"
              [class.text-white-70]="selectedCategory !== 'PRODUCT'"
              class="px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all border border-white/10 flex items-center gap-2.5 cursor-pointer shadow-lg hover:border-energy/50">
              <span class="text-base">🚀</span>
              <span>BUILT BY ME (INDEPENDENT PRODUCTS & CAPSTONES)</span>
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold"
                    [ngClass]="selectedCategory === 'PRODUCT' ? 'bg-black/30 text-black' : 'bg-white/10 text-white/60'">
                {{ productProjects.length }}
              </span>
            </button>
          </div>

          <!-- Sub-Filter Bar (Company Timeline / Domain) -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <!-- Timeline filters for COMPANY category -->
            <ng-container *ngIf="selectedCategory === 'COMPANY'">
              <span class="text-[11px] font-mono text-white/40 mr-1">TIMELINE:</span>
              <button
                (click)="setCompanyFilter('ALL')"
                [class.bg-white]="selectedCompanyFilter === 'ALL'"
                [class.text-black]="selectedCompanyFilter === 'ALL'"
                [class.bg-white-5]="selectedCompanyFilter !== 'ALL'"
                [class.text-white-70]="selectedCompanyFilter !== 'ALL'"
                class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-white/10 hover:border-white/30 cursor-pointer">
                ALL COMPANY ({{ companyProjects.length }})
              </button>
              <button
                (click)="setCompanyFilter('NOVAMESH')"
                [class.bg-cyan-glow]="selectedCompanyFilter === 'NOVAMESH'"
                [class.text-black]="selectedCompanyFilter === 'NOVAMESH'"
                [class.bg-white-5]="selectedCompanyFilter !== 'NOVAMESH'"
                [class.text-white-70]="selectedCompanyFilter !== 'NOVAMESH'"
                class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-white/10 hover:border-cyan-glow/50 flex items-center gap-1.5 cursor-pointer">
                <span>NOVAMESH LTD. (APR 2024 – PRESENT)</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-black/30">{{ novameshCount }}</span>
              </button>
              <button
                (click)="setCompanyFilter('TATA')"
                [class.bg-purple-400]="selectedCompanyFilter === 'TATA'"
                [class.text-black]="selectedCompanyFilter === 'TATA'"
                [class.bg-white-5]="selectedCompanyFilter !== 'TATA'"
                [class.text-white-70]="selectedCompanyFilter !== 'TATA'"
                class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-white/10 hover:border-purple-400/50 flex items-center gap-1.5 cursor-pointer">
                <span>TATA COMMUNICATIONS (JUL 2021 – MAR 2024)</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-black/30">{{ tataCount }}</span>
              </button>
            </ng-container>

            <!-- Domain filters for PRODUCT category -->
            <ng-container *ngIf="selectedCategory === 'PRODUCT'">
              <span class="text-[11px] font-mono text-white/40 mr-1">PORTFOLIO TRACK:</span>
              <button
                (click)="setProductFilter('ALL')"
                [class.bg-white]="selectedProductFilter === 'ALL'"
                [class.text-black]="selectedProductFilter === 'ALL'"
                [class.bg-white-5]="selectedProductFilter !== 'ALL'"
                [class.text-white-70]="selectedProductFilter !== 'ALL'"
                class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-white/10 hover:border-white/30 cursor-pointer">
                ALL PRODUCTS ({{ productProjects.length }})
              </button>
              <button
                (click)="setProductFilter('CAPSTONE')"
                [class.bg-grass]="selectedProductFilter === 'CAPSTONE'"
                [class.text-black]="selectedProductFilter === 'CAPSTONE'"
                [class.bg-white-5]="selectedProductFilter !== 'CAPSTONE'"
                [class.text-white-70]="selectedProductFilter !== 'CAPSTONE'"
                class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-white/10 hover:border-grass/50 cursor-pointer">
                🌱 CLIMATE & IIMK CAPSTONE
              </button>
              <button
                (click)="setProductFilter('SYSTEMS')"
                [class.bg-cyan-glow]="selectedProductFilter === 'SYSTEMS'"
                [class.text-black]="selectedProductFilter === 'SYSTEMS'"
                [class.bg-white-5]="selectedProductFilter !== 'SYSTEMS'"
                [class.text-white-70]="selectedProductFilter !== 'SYSTEMS'"
                class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-white/10 hover:border-cyan-glow/50 cursor-pointer">
                ⚡ DISTRIBUTED SYSTEMS & AI
              </button>
            </ng-container>
          </div>
        </div>

        <!-- Compact Project Grid (6 cards per page to eliminate massive vertical scroll) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div
            *ngFor="let p of paginatedProjects"
            (click)="openDossier(p)"
            class="glass-card p-5 rounded-2xl border-2 border-white/10 hover:border-crimson/50 transition-all group relative overflow-hidden bg-slate-900/80 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1">
            
            <div>
              <!-- Card Top Header -->
              <div class="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
                <div class="flex items-center gap-2.5">
                  <div class="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center p-1 shadow-inner group-hover:scale-110 transition-transform">
                    <img
                      [src]="p.spriteUrl || getPokemonMeta(p.id).spriteUrl"
                      [alt]="p.pokemonName || getPokemonMeta(p.id).pokemonName"
                      class="h-9 w-9 object-contain" />
                  </div>
                  <div>
                    <div class="text-[11px] font-mono font-bold text-energy">
                      {{ p.pokedexNo || getPokemonMeta(p.id).pokedexNo }} · {{ (p.pokemonName || getPokemonMeta(p.id).pokemonName).toUpperCase() }}
                    </div>
                    <div class="text-[10px] font-mono text-white/50 truncate max-w-[140px]">
                      {{ p.companyName || 'Independent Architecture' }}
                    </div>
                  </div>
                </div>

                <!-- Elemental Type Badge -->
                <span [ngClass]="'badge-' + p.element"
                      class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border flex items-center gap-1 flex-shrink-0">
                  <span>{{ p.elementEmoji }}</span>
                  <span>{{ p.element }}</span>
                </span>
              </div>

              <!-- Project Title -->
              <h3 class="text-base font-bold tracking-tight text-white group-hover:text-energy transition-colors mb-2 line-clamp-2 min-h-[44px]">
                {{ p.title }}
              </h3>

              <!-- Summary snippet -->
              <p class="text-xs text-white/70 line-clamp-2 leading-relaxed mb-4">
                {{ p.summary }}
              </p>

              <!-- Primary Metric Highlight Pill -->
              <div *ngIf="p.metrics && p.metrics.length > 0"
                   class="mb-4 p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono">
                <span class="text-white/50 text-[10.5px] uppercase">{{ p.metrics[0].label }}</span>
                <span class="text-energy font-bold text-xs">{{ p.metrics[0].value }} <span class="text-[10px] text-white/60 font-normal">{{ p.metrics[0].unit }}</span></span>
              </div>
            </div>

            <!-- Card Bottom: Tech Pills & Call to Action -->
            <div>
              <div class="flex flex-wrap gap-1.5 mb-3.5">
                <span
                  *ngFor="let t of p.techStack.slice(0, 3)"
                  class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/70">
                  {{ t }}
                </span>
                <span *ngIf="p.techStack.length > 3" class="text-[10px] font-mono text-white/40 self-center">
                  +{{ p.techStack.length - 3 }} more
                </span>
              </div>

              <div class="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-cyan-glow group-hover:text-energy transition-colors">
                <span>VIEW ARCHITECTURAL DOSSIER</span>
                <span class="transform group-hover:translate-x-1 transition-transform">▶</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Bar (Maintains Compact Viewport) -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs">
          <div class="text-white/50">
            SHOWING {{ (currentPage - 1) * pageSize + 1 }}–{{ getUpperBound() }} OF {{ activeCategoryProjects.length }} ENTRIES ({{ selectedCategory === 'COMPANY' ? 'COMPANY SYSTEMS' : 'INDEPENDENT PRODUCTS' }})
          </div>

          <div class="flex items-center gap-2">
            <button
              (click)="prevPage()"
              [disabled]="currentPage === 1"
              class="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 border border-white/10 transition-colors cursor-pointer text-white">
              ◀ PREV
            </button>
            <span class="px-3 py-1.5 rounded-lg bg-white/10 text-energy font-bold">
              PAGE {{ currentPage }} OF {{ totalPages }}
            </span>
            <button
              (click)="nextPage()"
              [disabled]="currentPage >= totalPages"
              class="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 border border-white/10 transition-colors cursor-pointer text-white">
              NEXT ▶
            </button>
          </div>
        </div>

      </div>

      <!-- INTERACTIVE ARCHITECTURAL DOSSIER MODAL / DRAWER -->
      <div
        *ngIf="selectedDossier"
        (click)="closeDossier()"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
        
        <div
          (click)="$event.stopPropagation()"
          class="glass-card w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-2 border-energy/40 bg-[#0d1322] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-4 sm:p-7 relative text-white space-y-5">
          
          <!-- Modal Close Button -->
          <button
            (click)="closeDossier()"
            class="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-crimson border border-white/20 text-white flex items-center justify-center text-xs font-bold transition-all cursor-pointer z-10"
            title="Close Dossier (ESC)">
            ✕
          </button>

          <!-- Modal Top Header: Pokémon Artwork & Badges -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-white/10 pr-8">
            <div class="flex items-center gap-3 sm:gap-4">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/80 border-2 border-white/20 flex items-center justify-center p-1.5 sm:p-2 shadow-2xl flex-shrink-0">
                <img
                  [src]="selectedDossier.spriteUrl || getPokemonMeta(selectedDossier.id).spriteUrl"
                  [alt]="selectedDossier.pokemonName || getPokemonMeta(selectedDossier.id).pokemonName"
                  class="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-energy">
                    {{ selectedDossier.pokedexNo || getPokemonMeta(selectedDossier.id).pokedexNo }} · {{ (selectedDossier.pokemonName || getPokemonMeta(selectedDossier.id).pokemonName).toUpperCase() }}
                  </span>
                  <span [ngClass]="'badge-' + selectedDossier.element" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold border">
                    {{ selectedDossier.element }}
                  </span>
                </div>
                <h3 class="text-lg sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
                  {{ selectedDossier.title }}
                </h3>
                <div class="text-[11px] sm:text-xs font-mono text-cyan-glow mt-0.5">
                  {{ selectedDossier.companyName || selectedDossier.domain }} · {{ selectedDossier.period || 'Production System' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Signature Move Banner -->
          <div class="p-3.5 rounded-xl bg-gradient-to-r from-red-950/60 to-black border border-crimson/30 flex items-center justify-between text-xs font-mono">
            <span class="text-crimson font-bold">⚡ POKÉDEX SIGNATURE MOVE:</span>
            <span class="text-white font-medium">{{ selectedDossier.signatureMove || getPokemonMeta(selectedDossier.id).signatureMove }}</span>
          </div>

          <!-- Problem & Solution Architectural Summary -->
          <div>
            <h4 class="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">SYSTEM ARCHITECTURE & ROLE</h4>
            <p class="text-sm text-white/90 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5 font-sans">
              {{ selectedDossier.summary }}
            </p>
          </div>

          <!-- Deep Metrics Grid -->
          <div *ngIf="selectedDossier.metrics && selectedDossier.metrics.length > 0">
            <h4 class="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">MEASURABLE ENGINEERING IMPACT</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                *ngFor="let m of selectedDossier.metrics"
                class="p-4 rounded-xl bg-black/60 border border-white/10 font-mono">
                <div class="text-[10.5px] text-white/50 uppercase mb-1">{{ m.label }}</div>
                <div class="text-lg font-bold text-energy">{{ m.value }}</div>
                <div class="text-[10px] text-white/60 mt-0.5">{{ m.unit }}</div>
              </div>
            </div>
          </div>

          <!-- Key Engineering Highlights / Technical Deliverables -->
          <div *ngIf="selectedDossier.highlights && selectedDossier.highlights.length > 0">
            <h4 class="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">TECHNICAL OWNERSHIP & SYSTEM HIGHLIGHTS</h4>
            <ul class="space-y-2 bg-black/30 p-4 rounded-xl border border-white/5 text-xs text-white/80 font-sans leading-relaxed">
              <li *ngFor="let h of selectedDossier.highlights" class="flex items-start gap-2">
                <span class="text-energy font-bold mt-0.5">▶</span>
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>

          <!-- Full Tech Stack Tags -->
          <div>
            <h4 class="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">TECHNOLOGIES & PROTOCOLS USED</h4>
            <div class="flex flex-wrap gap-2">
              <span
                *ngFor="let t of selectedDossier.techStack"
                class="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/15 text-white/90">
                {{ t }}
              </span>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="pt-4 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span class="text-white/40 text-center sm:text-left text-[11px]">PRESS ESC OR TAP OUTSIDE TO CLOSE</span>
            <button
              (click)="closeDossier()"
              class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-crimson hover:bg-crimson/90 text-white font-bold transition-colors cursor-pointer text-center">
              CLOSE DOSSIER ✕
            </button>
          </div>

        </div>
      </div>

    </section>
  `
})
export class ProjectsComponent {
  @Input() projects: ProjectCard[] = [];

  selectedCategory: 'COMPANY' | 'PRODUCT' = 'COMPANY';
  selectedCompanyFilter: 'ALL' | 'NOVAMESH' | 'TATA' = 'ALL';
  selectedProductFilter: 'ALL' | 'CAPSTONE' | 'SYSTEMS' = 'ALL';

  currentPage = 1;
  pageSize = 6;

  selectedDossier: ProjectCard | null = null;

  constructor(private audio: PokemonAudioService) {}

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.selectedDossier) {
      this.closeDossier();
    }
  }

  get companyProjects(): ProjectCard[] {
    return this.projects.filter(p => p.category === 'COMPANY');
  }

  get productProjects(): ProjectCard[] {
    return this.projects.filter(p => p.category === 'PRODUCT');
  }

  get novameshCount(): number {
    return this.projects.filter(p => p.category === 'COMPANY' && p.companyName?.includes('Novamesh')).length;
  }

  get tataCount(): number {
    return this.projects.filter(p => p.category === 'COMPANY' && p.companyName?.includes('Tata Communications')).length;
  }

  get activeCategoryProjects(): ProjectCard[] {
    if (this.selectedCategory === 'COMPANY') {
      if (this.selectedCompanyFilter === 'NOVAMESH') {
        return this.projects.filter(p => p.category === 'COMPANY' && p.companyName?.includes('Novamesh'));
      }
      if (this.selectedCompanyFilter === 'TATA') {
        return this.projects.filter(p => p.category === 'COMPANY' && p.companyName?.includes('Tata Communications'));
      }
      return this.companyProjects;
    } else {
      if (this.selectedProductFilter === 'CAPSTONE') {
        return this.projects.filter(p => p.category === 'PRODUCT' && (p.id.includes('sthirax') || p.element === 'GRASS'));
      }
      if (this.selectedProductFilter === 'SYSTEMS') {
        return this.projects.filter(p => p.category === 'PRODUCT' && !p.id.includes('sthirax'));
      }
      return this.productProjects;
    }
  }

  get paginatedProjects(): ProjectCard[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.activeCategoryProjects.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.activeCategoryProjects.length / this.pageSize) || 1;
  }

  getUpperBound(): number {
    return Math.min(this.currentPage * this.pageSize, this.activeCategoryProjects.length);
  }

  setCategory(category: 'COMPANY' | 'PRODUCT'): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.audio.playChirp();
  }

  setCompanyFilter(filter: 'ALL' | 'NOVAMESH' | 'TATA'): void {
    this.selectedCompanyFilter = filter;
    this.currentPage = 1;
    this.audio.playBeep();
  }

  setProductFilter(filter: 'ALL' | 'CAPSTONE' | 'SYSTEMS'): void {
    this.selectedProductFilter = filter;
    this.currentPage = 1;
    this.audio.playBeep();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.audio.playBeep();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.audio.playBeep();
    }
  }

  openDossier(project: ProjectCard): void {
    this.selectedDossier = project;
    this.audio.playFanfare();
  }

  closeDossier(): void {
    this.selectedDossier = null;
    this.audio.playBeep();
  }

  getPokemonMeta(projectId: string): PokemonProjectMeta {
    switch (projectId) {
      case 'sthirax-carbon-platform':
        return {
          pokemonName: 'Sceptile',
          pokedexNo: '#254',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif',
          signatureMove: 'Frenzy Plant (CO₂ Mineralization Carbon Capture)'
        };
      case 'workflow-reliability-lab':
        return {
          pokemonName: 'Dragonite',
          pokedexNo: '#149',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif',
          signatureMove: 'Hyper Beam (Deterministic Distributed Saga Invariant Verification)'
        };
      case 'querylens-ai':
        return {
          pokemonName: 'Alakazam',
          pokedexNo: '#065',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/65.gif',
          signatureMove: 'Psychic (Sandboxed Text-to-SQL & Anti-Injection Guardrails)'
        };
      case 'cloudscale-orchestrator':
        return {
          pokemonName: 'Zapdos',
          pokedexNo: '#145',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/145.gif',
          signatureMove: 'Thunder (Predictive Capacity Autoscaling & Prometheus Telemetry)'
        };
      case 'marginos-fintech':
        return {
          pokemonName: 'Gengar',
          pokedexNo: '#094',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif',
          signatureMove: 'Shadow Ball (ACID Double-Entry Accounting & GST Engine)'
        };
      case 'pokedex-pro-portfolio':
        return {
          pokemonName: 'Eevee',
          pokedexNo: '#133',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/133.gif',
          signatureMove: 'Adaptability (Hybrid Standalone & Live Spring Boot Telemetry)'
        };
      case 'flipkart-grid-challenge':
        return {
          pokemonName: 'Onix',
          pokedexNo: '#095',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif',
          signatureMove: 'Rock Slide (Top 150 Nationwide Algorithm & Inventory Pipeline)'
        };
      case 'pikachu-compute-scheduler':
        return {
          pokemonName: 'Pikachu',
          pokedexNo: '#025',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif',
          signatureMove: 'Volt Tackle (92.6% Latency Reduction - 18m to 80s)'
        };
      case 'charmander-security-gateway':
        return {
          pokemonName: 'Charmander',
          pokedexNo: '#004',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif',
          signatureMove: 'Fire Spin (FortiGate Perimeter & Sliding-Window Rate Limiting)'
        };
      case 'squirtle-caringo-storage':
        return {
          pokemonName: 'Squirtle',
          pokedexNo: '#007',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif',
          signatureMove: 'Hydro Pump (Caringo Swarm S3 Streaming & DNS Automation)'
        };
      case 'bulbasaur-hypervisor-dashboard':
        return {
          pokemonName: 'Bulbasaur',
          pokedexNo: '#001',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif',
          signatureMove: 'Vine Whip (Multi-Hypervisor VM Provisioning & Control Plane)'
        };
      case 'butterfree-frontend-migration':
        return {
          pokemonName: 'Butterfree',
          pokedexNo: '#012',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif',
          signatureMove: 'Quiver Dance (Enterprise AngularJS to Angular 17 Migration)'
        };
      case 'pidgeot-cicd-automation':
        return {
          pokemonName: 'Pidgeot',
          pokedexNo: '#018',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif',
          signatureMove: 'Hurricane (High-Velocity Jenkins CI/CD & Quality Gates)'
        };
      case 'cyndaquil-gateway-routing':
        return {
          pokemonName: 'Cyndaquil',
          pokedexNo: '#155',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif',
          signatureMove: 'Flame Wheel (API Gateway Routing & Multi-Tenant Access)'
        };
      case 'krookodile-persistence-concurrency':
        return {
          pokemonName: 'Krookodile',
          pokedexNo: '#553',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif',
          signatureMove: 'Earthquake (ACID Transaction Boundaries & HikariCP Tuning)'
        };
      case 'mewtwo-flowable-orchestration':
        return {
          pokemonName: 'Mewtwo',
          pokedexNo: '#150',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif',
          signatureMove: 'Psystrike (Flowable BPMN Sagas & Compensating Transactions)'
        };
      case 'psyduck-troubleshooting-sre':
        return {
          pokemonName: 'Psyduck',
          pokedexNo: '#054',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif',
          signatureMove: 'Amnesia (SRE Concurrency Debugging & Scrum Master Velocity)'
        };
      case 'gyarados-switch-port-telemetry':
        return {
          pokemonName: 'Gyarados',
          pokedexNo: '#130',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif',
          signatureMove: 'Hydro Pump (Switch-Port Telemetry & Datacenter Switch Mapping)'
        };
      case 'lapras-load-balancer':
        return {
          pokemonName: 'Lapras',
          pokedexNo: '#131',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/131.gif',
          signatureMove: 'Ice Beam (High-Availability L4/L7 Load-Balancer Orchestration)'
        };
      default:
        return {
          pokemonName: 'Pikachu',
          pokedexNo: '#025',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif',
          signatureMove: 'Thunderbolt'
        };
    }
  }
}
