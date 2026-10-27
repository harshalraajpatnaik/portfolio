import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';

export interface PokemonCompanion {
  id: number;
  name: string;
  type: string;
  typeEmoji: string;
  typeColor: string;
  spriteUrl: string;
  engineeringRole: string;
  stats: { hp: number; attack: number; speed: number };
  quote: string;
}

@Component({
  selector: 'app-starter-roster',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-card p-4 sm:p-5 rounded-2xl border-2 border-crimson/30 relative overflow-hidden bg-slate-900/90 shadow-2xl">
      <!-- Pokédex Header Bar -->
      <div class="flex items-center justify-between pb-2.5 mb-3.5 border-b border-white/10">
        <div class="flex items-center gap-2">
          <!-- Sensor lens -->
          <div class="w-6 h-6 rounded-full bg-cyan-glow border-2 border-white/80 shadow-[0_0_10px_#00E5FF] animate-pulse flex items-center justify-center">
            <div class="w-2 h-2 rounded-full bg-white/80"></div>
          </div>
          <!-- LEDs -->
          <div class="flex items-center gap-1.5 ml-1">
            <span class="w-2 h-2 rounded-full bg-crimson animate-ping"></span>
            <span class="w-2 h-2 rounded-full bg-energy"></span>
            <span class="w-2 h-2 rounded-full bg-grass"></span>
          </div>
          <span class="text-[11px] font-mono font-bold tracking-wider text-white/80 ml-1.5">POKÉDEX PARTY ROSTER</span>
        </div>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-energy font-bold">
          ACTIVE: {{ selectedPokemon.name.toUpperCase() }}
        </span>
      </div>

      <!-- Main Pokémon Showcase Display -->
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        <!-- 3D Animated Pokémon Sprite Display -->
        <div class="sm:col-span-5 flex flex-col items-center justify-center p-3 rounded-xl bg-black/60 border border-white/10 relative min-h-[135px]">
          <div class="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"
               [ngStyle]="{ 'background': 'radial-gradient(circle, ' + selectedPokemon.typeColor + '33 0%, transparent 70%)' }"></div>
          
          <img
            [src]="selectedPokemon.spriteUrl"
            [alt]="selectedPokemon.name"
            class="h-20 sm:h-24 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-all transform hover:scale-110" />

          <div class="text-[10.5px] font-mono mt-2 px-2.5 py-0.5 rounded-full border text-white flex items-center gap-1.5"
               [ngStyle]="{ 'border-color': selectedPokemon.typeColor, 'background-color': selectedPokemon.typeColor + '22' }">
            <span>{{ selectedPokemon.typeEmoji }}</span>
            <span class="font-bold tracking-wide">{{ selectedPokemon.type }}</span>
            <span class="text-white/40">#{{ selectedPokemon.id < 10 ? '00' + selectedPokemon.id : (selectedPokemon.id < 100 ? '0' + selectedPokemon.id : selectedPokemon.id) }}</span>
          </div>
        </div>

        <!-- Pokémon Tech Specs -->
        <div class="sm:col-span-7 space-y-2 font-mono">
          <div>
            <h4 class="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>{{ selectedPokemon.name }}</span>
            </h4>
            <p class="text-[11px] text-energy font-medium mt-0.5">{{ selectedPokemon.engineeringRole }}</p>
          </div>

          <p class="text-[10.5px] text-white/70 italic bg-white/5 p-2 rounded-lg border border-white/5 leading-snug">
            "{{ selectedPokemon.quote }}"
          </p>

          <!-- Stat Gauges -->
          <div class="space-y-1 text-[10px]">
            <div class="flex justify-between text-white/60">
              <span>THROUGHPUT</span>
              <span class="text-energy font-bold">{{ selectedPokemon.stats.attack }}%</span>
            </div>
            <div class="stat-bar">
              <div class="stat-bar-fill bg-energy" [style.width.%]="selectedPokemon.stats.attack"></div>
            </div>

            <div class="flex justify-between text-white/60">
              <span>RESILIENCE / UPTIME</span>
              <span class="text-grass font-bold">{{ selectedPokemon.stats.hp }}%</span>
            </div>
            <div class="stat-bar">
              <div class="stat-bar-fill bg-grass" [style.width.%]="selectedPokemon.stats.hp"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Selector Ribbon -->
      <div class="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between gap-1.5 overflow-x-auto pb-1">
        <button
          *ngFor="let p of party"
          (click)="choosePokemon(p)"
          [class.ring-2]="selectedPokemon.id === p.id"
          [class.ring-energy]="selectedPokemon.id === p.id"
          [class.bg-white-15]="selectedPokemon.id === p.id"
          class="flex flex-col items-center p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex-1 min-w-[50px] group">
          <img [src]="p.spriteUrl" [alt]="p.name" class="h-7 w-7 sm:h-8 sm:w-8 object-contain group-hover:scale-110 transition-transform" />
          <span class="text-[9px] font-mono text-white/70 mt-0.5 font-bold">{{ p.name }}</span>
        </button>
      </div>
    </div>
  `
})
export class StarterRosterComponent {
  @Output() pokemonSelected = new EventEmitter<PokemonCompanion>();

  party: PokemonCompanion[] = [
    {
      id: 25,
      name: 'Pikachu',
      type: 'ELECTRIC',
      typeEmoji: '⚡',
      typeColor: '#FFD600',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif',
      engineeringRole: 'High-Throughput Scheduler & AMQP Engine',
      stats: { hp: 92, attack: 98, speed: 99 },
      quote: 'Lightning-fast batch execution! Reduced scheduler latency by 92.6% (18m down to 80s) using Cassandra and Redis.'
    },
    {
      id: 4,
      name: 'Charmander',
      type: 'FIRE',
      typeEmoji: '🔥',
      typeColor: '#E53935',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif',
      engineeringRole: 'FortiGate Security & Perimeter Gateway',
      stats: { hp: 88, attack: 94, speed: 85 },
      quote: 'Fiery perimeter defense! Eliminated HTTP 429 rate-limit thrashing with custom sliding-window algorithms.'
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'WATER',
      typeEmoji: '🌊',
      typeColor: '#00E5FF',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif',
      engineeringRole: 'Caringo Swarm & S3 Object Storage',
      stats: { hp: 95, attack: 85, speed: 80 },
      quote: 'Fluid cloud storage flow! Built the Caringo Swarm onboarding workflow with automated DNS mapping.'
    },
    {
      id: 1,
      name: 'Bulbasaur',
      type: 'GRASS',
      typeEmoji: '🌿',
      typeColor: '#00E676',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif',
      engineeringRole: 'Hypervisor Dashboard & RabbitMQ Queues',
      stats: { hp: 96, attack: 86, speed: 82 },
      quote: 'Deep architectural roots! Revamped the cloud hypervisor management dashboard with Python, Java, and RabbitMQ.'
    },
    {
      id: 12,
      name: 'Butterfree',
      type: 'FLYING',
      typeEmoji: '🦋',
      typeColor: '#38BDF8',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif',
      engineeringRole: 'Frontend UI Modernization (Angular 17)',
      stats: { hp: 86, attack: 90, speed: 92 },
      quote: 'Metamorphosis of enterprise web UI! Migrated legacy AngularJS modules into modern responsive Angular 17 with strict type safety.'
    },
    {
      id: 18,
      name: 'Pidgeot',
      type: 'FLYING',
      typeEmoji: '🦅',
      typeColor: '#818CF8',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif',
      engineeringRole: 'Automated CI/CD Pipeline & Delivery Velocity',
      stats: { hp: 89, attack: 93, speed: 97 },
      quote: 'High-speed automated deployment pipelines! Orchestrated multi-stage Jenkins CI/CD builds with unit tests and sonar quality gates.'
    },
    {
      id: 155,
      name: 'Cyndaquil',
      type: 'FIRE',
      typeEmoji: '🔥',
      typeColor: '#FB923C',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif',
      engineeringRole: 'API Gateway Routing & Microservices Proxy',
      stats: { hp: 87, attack: 92, speed: 89 },
      quote: 'Zero-downtime routing! Implemented proxy rules, SSL termination, and rate-limited endpoints across microservice tiers.'
    },
    {
      id: 553,
      name: 'Krookodile',
      type: 'GROUND',
      typeEmoji: '🐊',
      typeColor: '#B45309',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif',
      engineeringRole: 'Database Concurrency & ACID Integrity',
      stats: { hp: 94, attack: 95, speed: 84 },
      quote: 'Uncompromising data integrity! Eliminated database deadlocks and race conditions through optimistic/pessimistic locking boundaries.'
    },
    {
      id: 54,
      name: 'Psyduck',
      type: 'PSYCHIC',
      typeEmoji: '🔮',
      typeColor: '#B388FF',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif',
      engineeringRole: 'Production Troubleshooting & Concurrency SRE',
      stats: { hp: 90, attack: 96, speed: 88 },
      quote: 'Resolving intense concurrency headaches! Fixed thread timeouts, pool exhaustion, and automated CI with Jenkins.'
    },
    {
      id: 254,
      name: 'Sceptile',
      type: 'GRASS',
      typeEmoji: '🌱',
      typeColor: '#10B981',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif',
      engineeringRole: 'SthiraX Climate Platform & IoT MRV Software (IIMK)',
      stats: { hp: 98, attack: 96, speed: 95 },
      quote: 'Decentralized low-carbon infrastructure! Architected IoT MRV software and Digital Product Passports for India’s April 2026 C&D waste regulations.'
    },
    {
      id: 95,
      name: 'Onix',
      type: 'ROCK',
      typeEmoji: '🪨',
      typeColor: '#D97706',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif',
      engineeringRole: 'Machine Learning Recommendation Engine',
      stats: { hp: 99, attack: 88, speed: 70 },
      quote: 'Rock-solid data processing! Engineered movie recommendation pipelines with KNN, cosine similarity, and Pearson metrics.'
    },
    {
      id: 150,
      name: 'Mewtwo',
      type: 'PSYCHIC',
      typeEmoji: '🧠',
      typeColor: '#B388FF',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif',
      engineeringRole: 'Flowable BPMN Distributed State Machine & Sagas',
      stats: { hp: 99, attack: 100, speed: 99 },
      quote: 'Unstoppable distributed state execution! Replaced cron jobs with Flowable BPMN workflow engines and automated compensating rollbacks.'
    },
    {
      id: 149,
      name: 'Dragonite',
      type: 'DRAGON',
      typeEmoji: '🐉',
      typeColor: '#818CF8',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif',
      engineeringRole: 'Burstable Bandwidth Policing & Multi-Tier QoS',
      stats: { hp: 96, attack: 98, speed: 94 },
      quote: 'Soaring multi-gigabit throughput! Programmed CIR/PIR traffic policers to eradicate noisy-neighbor network starvation.'
    },
    {
      id: 143,
      name: 'Snorlax',
      type: 'NORMAL',
      typeEmoji: '⚖️',
      typeColor: '#A8A29E',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/143.gif',
      engineeringRole: 'Compute & Datastore Capacity Reporting Engine',
      stats: { hp: 100, attack: 85, speed: 65 },
      quote: 'Massive infrastructure oversight! Aggregated real-time CPU, RAM, and SAN metrics across thousands of nodes for capex forecasting.'
    },
    {
      id: 94,
      name: 'Gengar',
      type: 'GHOST',
      typeEmoji: '👻',
      typeColor: '#C084FC',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif',
      engineeringRole: 'Sliding-Window Rate Limiter & RFC 6585 429 Guard',
      stats: { hp: 86, attack: 97, speed: 96 },
      quote: 'Phantom flood mitigation! Protected internal management gateways from cascading retry storms with atomic sliding-window algorithms.'
    },
    {
      id: 130,
      name: 'Gyarados',
      type: 'WATER',
      typeEmoji: '🌊',
      typeColor: '#00E5FF',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif',
      engineeringRole: 'Switch-Port Telemetry & Datacenter Switch Mapping',
      stats: { hp: 95, attack: 98, speed: 90 },
      quote: 'Surging datacenter telemetry! Automated physical switch-port mapping, duplex error checks, and CRC alarms across global POPs.'
    }
  ];

  selectedPokemon: PokemonCompanion = this.party[0];

  constructor(private audio: PokemonAudioService) {}

  choosePokemon(p: PokemonCompanion): void {
    this.selectedPokemon = p;
    this.audio.playChirp();
    this.pokemonSelected.emit(p);
  }
}
