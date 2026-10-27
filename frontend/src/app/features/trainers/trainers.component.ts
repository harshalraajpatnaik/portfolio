import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../core/services/pokemon-audio.service';

interface Trainer {
  id: string;
  name: string;
  title: string;
  roleTag: string;
  badge: string;
  badgeImage: string;
  avatarImage: string;
  color: string;
  glowColor: string;
  borderColor: string;
  dialogue: string[];
}

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="trainers" class="py-20 px-6 relative bg-black/50 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="space-y-3 mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-energy/30 bg-energy/10 text-energy text-xs font-mono font-bold">
            <span class="w-2 h-2 rounded-full bg-energy animate-pulse"></span>
            <span>KANTO LEAGUE AUDIT · GYM LEADER FIELD INSPECTION</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Kanto Gym Inspection <span class="gradient-text">& Battle Arena Dialogue</span>
          </h2>
          <p class="text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">
            Step into the Indigo Plateau Arena. Pallet Town Champion Ash, Cerulean Gym Leader Misty, and Pewter Gym Leader Brock inspect Harshal's Trainer Dossier, field-testing his distributed systems, batch throughput, and SthiraX platform architecture.
          </p>
        </div>

        <!-- Trainer Selection Ribbon -->
        <div class="flex flex-wrap gap-4 mb-8">
          <button
            *ngFor="let t of trainers; let i = index"
            (click)="selectTrainer(i)"
            [class.ring-2]="selectedIndex === i"
            [class.bg-white-10]="selectedIndex === i"
            [ngStyle]="{
              'border-color': selectedIndex === i ? t.color : 'rgba(255,255,255,0.1)',
              'box-shadow': selectedIndex === i ? '0 0 20px ' + t.glowColor : 'none'
            }"
            class="px-4 py-2.5 rounded-2xl border bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3.5 group">
            <!-- Miniature Trainer Headshot -->
            <div class="w-10 h-10 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-black/40">
              <img [src]="t.avatarImage" [alt]="t.name" class="w-full h-full object-cover">
            </div>
            <!-- Trainer Info -->
            <div class="text-left">
              <div class="text-sm font-bold text-white group-hover:text-energy transition-colors flex items-center gap-1.5">
                <span>{{ t.name }}</span>
                <img [src]="t.badgeImage" [alt]="t.badge" class="w-4 h-4 object-contain inline-block">
              </div>
              <div class="text-[11px] font-mono text-white/50">{{ t.title }}</div>
            </div>
          </button>
        </div>

        <!-- Classic Pokémon RPG Dialogue Box -->
        <div class="glass-card rounded-2xl p-6 sm:p-8 border-2 border-white/20 relative shadow-2xl bg-[#0b1329]/95 overflow-hidden">
          <!-- Subtle Glow Accent in Background -->
          <div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
               [ngStyle]="{ 'background-color': currentTrainer.color }"></div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <!-- Trainer Anime Portrait Display -->
            <div class="md:col-span-4 flex flex-col items-center justify-center p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <div class="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl p-1 border-2 shadow-2xl mb-4 overflow-hidden group bg-gradient-to-b from-white/10 to-black/60"
                   [ngStyle]="{ 'border-color': currentTrainer.color, 'box-shadow': '0 0 30px ' + currentTrainer.glowColor }">
                <img [src]="currentTrainer.avatarImage"
                     [alt]="currentTrainer.name"
                     class="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300">
              </div>
              
              <div class="text-lg font-extrabold text-white text-center tracking-wide">{{ currentTrainer.name }}</div>
              <div class="text-xs font-mono text-white/60 text-center mb-3">{{ currentTrainer.title }}</div>

              <!-- Official Kanto Gym Badge -->
              <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10"
                   [ngStyle]="{ 'background-color': currentTrainer.color + '22', 'color': currentTrainer.color }">
                <img [src]="currentTrainer.badgeImage" [alt]="currentTrainer.badge" class="w-4 h-4 object-contain">
                <span class="text-[11px] font-mono font-bold tracking-wider">{{ currentTrainer.badge }}</span>
              </div>
            </div>

            <!-- RPG Dialogue Box Body -->
            <div class="md:col-span-8 space-y-4">
              <!-- Speaker Tag / Role -->
              <div class="flex items-center justify-between">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider text-black shadow-md"
                     [ngStyle]="{ 'background-color': currentTrainer.color }">
                  <span>{{ currentTrainer.roleTag }}</span>
                </div>
                <div class="text-xs font-mono text-white/40">
                  ASSESSMENT LOG {{ dialogueIndex + 1 }} OF {{ currentTrainer.dialogue.length }}
                </div>
              </div>

              <!-- RPG Speech Box -->
              <div class="min-h-[140px] font-mono text-sm sm:text-base text-white/95 leading-relaxed bg-black/40 p-5 sm:p-6 rounded-xl border border-white/10 relative shadow-inner">
                <p class="selection:bg-energy selection:text-black">
                  "{{ currentTrainer.dialogue[dialogueIndex] }}"
                </p>
                <!-- Bouncing prompt cursor -->
                <div class="text-right mt-3">
                  <span class="inline-block text-energy animate-bounce font-mono text-sm font-bold">▼ PRESS NEXT</span>
                </div>
              </div>

              <!-- Dialogue Navigation Controls -->
              <div class="flex items-center justify-between pt-2">
                <!-- Page Progress Dots -->
                <div class="flex items-center gap-1.5">
                  <span
                    *ngFor="let d of currentTrainer.dialogue; let dotIndex = index"
                    class="w-2.5 h-2.5 rounded-full transition-all"
                    [ngStyle]="{
                      'background-color': dotIndex === dialogueIndex ? currentTrainer.color : 'rgba(255,255,255,0.2)',
                      'transform': dotIndex === dialogueIndex ? 'scale(1.2)' : 'scale(1)'
                    }">
                  </span>
                </div>

                <div class="flex items-center gap-3">
                  <button
                    (click)="prevDialogue()"
                    [disabled]="dialogueIndex === 0"
                    class="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white disabled:opacity-30 border border-white/10 transition-colors">
                    ◀ PREV
                  </button>
                  <button
                    (click)="nextDialogue()"
                    class="px-5 py-1.5 rounded-lg text-white text-xs font-mono font-bold shadow-lg transition-all transform active:scale-95"
                    [ngStyle]="{
                      'background-color': currentTrainer.color,
                      'color': currentTrainer.id === 'misty' || currentTrainer.id === 'brock' ? '#000' : '#fff',
                      'box-shadow': '0 0 15px ' + currentTrainer.glowColor
                    }">
                    {{ dialogueIndex + 1 === currentTrainer.dialogue.length ? 'RESTART ↺' : 'NEXT ▶' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TrainersComponent {
  selectedIndex = 0;
  dialogueIndex = 0;

  trainers: Trainer[] = [
    {
      id: 'ash',
      name: 'Ash Ketchum',
      title: 'Pallet Town Champion',
      roleTag: '⚡ ASH KETCHUM · CHAMPION EVALUATION',
      badge: 'RAINBOW BADGE',
      badgeImage: 'assets/images/badges/rainbow.png',
      avatarImage: 'assets/images/trainers/ash.jpg',
      color: '#EF4444',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      borderColor: 'border-red-500',
      dialogue: [
        "Pikachu, check out this Trainer's speed stat! Slashing batch scheduler latency by 92.6%—from 18 minutes down to 80 seconds across distributed Cassandra clusters? That's not just fast, that's Volt Tackle velocity! Most engineers flinch when data spikes, but Harshal charges right through!",
        "And look at his SthiraX capstone at IIM Kozhikode! India is rolling out strict April 2026 C&D waste regulations, and instead of just building another software tool, he engineered an entire asset-light retrofit model paired with IoT batch MRV tracking. That's real championship strategy—solving problems in the real world!",
        "Gotta scale 'em all! Taking his squad to Top 150 Nationwide in Flipkart Grid 2.0, winning 3× Extra Mile Commitment Awards at Tata Communications, and stepping up as Acting Scrum Master... Harshal plays to win and lifts his entire team with him!"
      ]
    },
    {
      id: 'misty',
      name: 'Misty Waterflower',
      title: 'Cerulean Gym Leader',
      roleTag: '💧 MISTY · CERULEAN GYM AUDIT',
      badge: 'CASCADE BADGE',
      badgeImage: 'assets/images/badges/cascade.png',
      avatarImage: 'assets/images/trainers/misty.jpg',
      color: '#06B6D4',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      borderColor: 'border-cyan-400',
      dialogue: [
        "In Water-type battles, flow is everything. If there's even a drop of friction or a memory leak in your pipeline, the whole system drowns! When Tata Communications needed to onboard Caringo Swarm object storage, Harshal built the full-stack pipeline with automated cPanel DNS routing. Seamless, clean, and zero turbulence!",
        "Do you have any idea how hard it is to migrate a legacy AngularJS frontend to modern Angular without breaking live customer workflows? Harshal refactored the entire presentation layer into reactive, type-safe Angular 17 with strict TypeScript interfaces. That kind of patience and precision is true Water Gym mastery!",
        "Plus, his Kong API Gateway integrations handle wildcard paths with zero 429 rate limit spikes. When data streams through Harshal's architecture, it flows like a pristine Waterfall. Clean code, rock-solid tests, and zero dead code!"
      ]
    },
    {
      id: 'brock',
      name: 'Brock',
      title: 'Pewter Gym Leader',
      roleTag: '🪨 BROCK · PEWTER DEFENSE INSPECTION',
      badge: 'BOULDER BADGE',
      badgeImage: 'assets/images/badges/boulder.png',
      avatarImage: 'assets/images/trainers/brock.jpg',
      color: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      borderColor: 'border-amber-500',
      dialogue: [
        "A trainer is only as strong as their defense. In production, when traffic surges hit like an Earthquake, fragile architectures crumble. But Harshal's multi-hypervisor provisioning engine orchestrates KVM, VMware ESXi, and OLVM, fully decoupled through RabbitMQ queues. That's what I call boulder-grade resilience!",
        "Look at his database tuning: fine-tuning HikariCP connection pools, enforcing strict ACID transaction boundaries, and partitioning high-throughput Cassandra batches. Most folks don't appreciate the bedrock beneath the surface until a pool starves—Harshal protects against deadlocks before they even happen.",
        "He also directly owned the VM tracking dashboard delivered to executive leadership. Managing critical infrastructure while pursuing an Executive MBA at IIM Kozhikode takes serious discipline and grit. You can count on him when the pressure is on."
      ]
    }
  ];

  constructor(private audio: PokemonAudioService) {}

  get currentTrainer(): Trainer {
    return this.trainers[this.selectedIndex];
  }

  selectTrainer(index: number): void {
    this.selectedIndex = index;
    this.dialogueIndex = 0;
    this.audio.playChirp();
  }

  nextDialogue(): void {
    this.audio.playBeep();
    if (this.dialogueIndex + 1 < this.currentTrainer.dialogue.length) {
      this.dialogueIndex++;
    } else {
      this.dialogueIndex = 0;
    }
  }

  prevDialogue(): void {
    if (this.dialogueIndex > 0) {
      this.audio.playBeep();
      this.dialogueIndex--;
    }
  }
}
