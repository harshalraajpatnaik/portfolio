import { Component, Input } from '@angular/core';
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
    <section id="projects" class="py-24 px-4 sm:px-6 relative">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crimson/40 bg-crimson/15 text-crimson text-xs font-mono font-bold">
            <span>POKÉDEX BATTLE READY CASE STUDIES</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Partner Pokémon & <span class="gradient-text">Engineering Feats</span>
          </h2>
          <p class="text-white/70 max-w-2xl text-base sm:text-lg">
            Each cloud system engineered by Harshal is paired with its partner Pokémon,
            representing the domain's throughput, resilience, and architectural power.
          </p>

          <!-- Elemental Filter Bar -->
          <div class="flex flex-wrap gap-2 pt-4">
            <button
              (click)="selectedElement = 'ALL'"
              [class.bg-white]="selectedElement === 'ALL'"
              [class.text-black]="selectedElement === 'ALL'"
              [class.bg-white-5]="selectedElement !== 'ALL'"
              [class.text-white-70]="selectedElement !== 'ALL'"
              class="px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border border-white/10 hover:border-white/30">
              ALL ROSTER ({{ projects.length }})
            </button>
            <button
              *ngFor="let el of elementTypes"
              (click)="setFilter(el.type)"
              [ngClass]="getElementFilterClass(el.type)"
              class="px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border border-white/10 bg-white/5 text-white/70 hover:text-white flex items-center gap-2">
              <img [src]="el.icon" [alt]="el.label" class="h-5 w-5 object-contain" />
              <span>{{ el.label }}</span>
            </button>
          </div>
        </div>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            *ngFor="let p of filteredProjects"
            class="glass-card p-6 sm:p-8 rounded-2xl border-2 border-white/10 flex flex-col justify-between hover:border-crimson/50 transition-all group relative overflow-hidden bg-slate-900/80">

            <div>
              <!-- Top Header: Pokémon Avatar + Elemental Badge -->
              <div class="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div class="flex items-center gap-3">
                  <!-- Animated 3D Sprite -->
                  <div class="w-14 h-14 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center p-1.5 shadow-md">
                    <img
                      [src]="p.spriteUrl || getPokemonMeta(p.id).spriteUrl"
                      [alt]="p.pokemonName || getPokemonMeta(p.id).pokemonName"
                      class="h-11 w-11 object-contain transform group-hover:scale-125 transition-transform" />
                  </div>
                  <div>
                    <div class="text-xs font-mono font-bold text-energy">
                      {{ p.pokedexNo || getPokemonMeta(p.id).pokedexNo }} · {{ (p.pokemonName || getPokemonMeta(p.id).pokemonName).toUpperCase() }}
                    </div>
                    <div class="text-[11px] font-mono text-cyan-glow">
                      MOVE: {{ p.signatureMove || getPokemonMeta(p.id).signatureMove }}
                    </div>
                  </div>
                </div>

                <!-- Element Badge -->
                <span [ngClass]="'badge-' + p.element"
                      class="px-3 py-1 rounded-full text-xs font-mono font-bold border flex items-center gap-1.5">
                  <span>{{ p.elementEmoji }}</span>
                  <span>{{ p.element }}</span>
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-energy transition-colors mb-3">
                {{ p.title }}
              </h3>

              <!-- Summary -->
              <p class="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                {{ p.summary }}
              </p>

              <!-- Pokédex Tier Stat Gauges -->
              <div class="bg-black/50 rounded-xl p-4 border border-white/10 space-y-2.5 mb-6 font-mono text-xs">
                <div class="flex items-center justify-between">
                  <span class="text-white/50">BASE ATTACK (THROUGHPUT)</span>
                  <div class="flex items-center gap-2">
                    <div class="w-24 stat-bar">
                      <div class="stat-bar-fill bg-energy" [style.width.%]="p.throughputTier * 20"></div>
                    </div>
                    <span class="text-energy w-6 text-right font-bold">{{ p.throughputTier }}/5</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-white/50">DEFENSE (RESILIENCE)</span>
                  <div class="flex items-center gap-2">
                    <div class="w-24 stat-bar">
                      <div class="stat-bar-fill bg-grass" [style.width.%]="p.resilienceTier * 20"></div>
                    </div>
                    <span class="text-grass w-6 text-right font-bold">{{ p.resilienceTier }}/5</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-white/50">SPECIAL DEFENSE (COMPLEXITY)</span>
                  <div class="flex items-center gap-2">
                    <div class="w-24 stat-bar">
                      <div class="stat-bar-fill bg-crimson" [style.width.%]="p.complexityTier * 20"></div>
                    </div>
                    <span class="text-crimson w-6 text-right font-bold">{{ p.complexityTier }}/5</span>
                  </div>
                </div>
              </div>

              <!-- Verified Metrics Grid -->
              <div class="grid grid-cols-3 gap-3 mb-6">
                <div *ngFor="let m of p.metrics" class="bg-white/5 p-3 rounded-xl border border-white/5 text-center font-mono">
                  <div class="text-[10px] text-white/50 truncate">{{ m.label }}</div>
                  <div class="text-base sm:text-lg font-bold text-white mt-0.5">{{ m.value }}</div>
                  <div class="text-[10px] text-energy">{{ m.unit }}</div>
                </div>
              </div>

              <!-- Engineering Highlights -->
              <div class="space-y-2 mb-6">
                <div *ngFor="let h of p.highlights" class="flex items-start gap-2 text-xs text-white/80 leading-normal">
                  <span class="text-energy font-bold mt-0.5">▸</span>
                  <span>{{ h }}</span>
                </div>
              </div>
            </div>

            <!-- Tech Stack Badges -->
            <div class="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              <span
                *ngFor="let tech of p.techStack"
                class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-white/70 border border-white/10">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  @Input() projects: ProjectCard[] = [];

  selectedElement = 'ALL';

  elementTypes = [
    { type: 'ELECTRIC', label: 'PIKACHU (Compute)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif' },
    { type: 'FIRE',     label: 'CHARMANDER & CYNDAQUIL (Security/API)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif' },
    { type: 'WATER',    label: 'SQUIRTLE (Storage)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif' },
    { type: 'GRASS',    label: 'BULBASAUR & SCEPTILE (Platform/SthiraX)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif' },
    { type: 'FLYING',   label: 'BUTTERFREE & PIDGEOT (UI/DevOps)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif' },
    { type: 'GROUND',   label: 'KROOKODILE (Data Concurrency)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif' },
    { type: 'PSYCHIC',  label: 'PSYDUCK (SRE & CI)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif' },
    { type: 'ROCK',     label: 'ONIX (ML & Data)', icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif' }
  ];

  constructor(private audio: PokemonAudioService) {}

  setFilter(type: string): void {
    this.selectedElement = type;
    this.audio.playBeep();
  }

  getElementFilterClass(type: string): string {
    if (this.selectedElement !== type) return '';
    switch (type) {
      case 'ELECTRIC': return 'border-energy bg-energy/20 text-energy';
      case 'FIRE':     return 'border-crimson bg-crimson/20 text-crimson';
      case 'WATER':    return 'border-cyan-glow bg-cyan-glow/20 text-cyan-glow';
      case 'GRASS':    return 'border-grass bg-grass/20 text-grass';
      case 'FLYING':   return 'border-sky-400 bg-sky-400/20 text-sky-400';
      case 'GROUND':   return 'border-amber-700 bg-amber-700/20 text-amber-500';
      case 'PSYCHIC':  return 'border-psychic bg-psychic/20 text-psychic';
      case 'ROCK':     return 'border-amber-500 bg-amber-500/20 text-amber-500';
      default:         return '';
    }
  }

  get filteredProjects(): ProjectCard[] {
    if (this.selectedElement === 'ALL') {
      return this.projects;
    }
    return this.projects.filter(p => p.element === this.selectedElement);
  }

  getPokemonMeta(projectId: string): PokemonProjectMeta {
    switch (projectId) {
      case 'sthirax-carbon-platform':
      case 'sthirax-co2-mineralization-platform':
        return {
          pokemonName: 'Sceptile',
          pokedexNo: '#254',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif',
          signatureMove: 'Frenzy Plant (CO₂ Mineralization Carbon Capture)'
        };
      case 'pikachu-compute-scheduler':
      case 'multi-hypervisor-orchestrator':
        return {
          pokemonName: 'Pikachu',
          pokedexNo: '#025',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif',
          signatureMove: 'Volt Tackle (92.6% Latency Reduction - 18m to 80s)'
        };
      case 'charmander-security-gateway':
      case 'charmander-fortigate-security':
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
          signatureMove: 'Vine Whip (Multi-Hypervisor VM Tracking & Leadership Dashboard)'
        };
      case 'butterfree-frontend-migration':
      case 'butterfree-ui-modernization':
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
      case 'krookodile-db-concurrency':
        return {
          pokemonName: 'Krookodile',
          pokedexNo: '#553',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif',
          signatureMove: 'Earthquake (ACID Transaction Boundaries & HikariCP Tuning)'
        };
      case 'psyduck-troubleshooting-sre':
        return {
          pokemonName: 'Psyduck',
          pokedexNo: '#054',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif',
          signatureMove: 'Amnesia (SRE Concurrency Debugging & Scrum Master Velocity)'
        };
      case 'onix-recommendation-engine':
        return {
          pokemonName: 'Onix',
          pokedexNo: '#095',
          spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif',
          signatureMove: 'Rock Slide (Kaggle Collaborative Filtering & Movie Pipelines)'
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
