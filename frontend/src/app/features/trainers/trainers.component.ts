import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../core/services/pokemon-audio.service';

interface Trainer {
  id: string;
  name: string;
  title: string;
  badge: string;
  badgeEmoji: string;
  avatar: string;
  color: string;
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
            <span>GYM LEADERS & MENTOR ENDORSEMENTS</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Trainer Dialogue <span class="gradient-text">& Strategic Reviews</span>
          </h2>
          <p class="text-white/70 max-w-xl text-sm sm:text-base">
            Click on Ash, Misty, or Brock to hear their perspective on Harshal's genuine engineering ownership,
            SthiraX platform capstone, and cross-functional leadership.
          </p>
        </div>

        <!-- Trainer Selection Badges -->
        <div class="flex flex-wrap gap-4 mb-8">
          <button
            *ngFor="let t of trainers; let i = index"
            (click)="selectTrainer(i)"
            [class.border-white]="selectedIndex === i"
            [class.bg-white-10]="selectedIndex === i"
            [ngStyle]="{ 'border-color': selectedIndex === i ? t.color : 'rgba(255,255,255,0.1)' }"
            class="px-5 py-3 rounded-2xl border bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3 group">
            <span class="text-2xl">{{ t.badgeEmoji }}</span>
            <div class="text-left">
              <div class="text-sm font-bold text-white group-hover:text-energy transition-colors">{{ t.name }}</div>
              <div class="text-[11px] font-mono text-white/50">{{ t.title }}</div>
            </div>
          </button>
        </div>

        <!-- Classic Pokémon RPG Dialogue Box -->
        <div class="glass-card rounded-2xl p-6 sm:p-8 border-2 border-white/20 relative shadow-2xl bg-[#0f172a]/90">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <!-- Trainer Avatar Display -->
            <div class="md:col-span-3 flex flex-col items-center justify-center p-4 rounded-xl bg-black/40 border border-white/10">
              <div class="text-6xl mb-3 animate-float">{{ currentTrainer.avatar }}</div>
              <div class="text-base font-bold text-white text-center">{{ currentTrainer.name }}</div>
              <div class="text-xs font-mono px-2.5 py-0.5 rounded-full mt-1"
                   [ngStyle]="{ 'background-color': currentTrainer.color + '22', 'color': currentTrainer.color }">
                {{ currentTrainer.badge }}
              </div>
            </div>

            <!-- RPG Dialogue Box Body -->
            <div class="md:col-span-9 space-y-4">
              <!-- Speaker Name Tag -->
              <div class="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider text-black"
                   [ngStyle]="{ 'background-color': currentTrainer.color }">
                {{ currentTrainer.name }} says:
              </div>

              <!-- Animated Speech Text -->
              <div class="min-h-[90px] font-mono text-sm sm:text-base text-white/90 leading-relaxed bg-black/30 p-5 rounded-xl border border-white/5 relative">
                <p>
                  "{{ currentTrainer.dialogue[dialogueIndex] }}"
                </p>
                <!-- Bouncing prompt cursor -->
                <span class="inline-block text-energy animate-bounce ml-2 font-bold">▼</span>
              </div>

              <!-- Dialogue Controls -->
              <div class="flex items-center justify-between pt-2">
                <span class="text-xs font-mono text-white/40">
                  PAGE {{ dialogueIndex + 1 }} OF {{ currentTrainer.dialogue.length }}
                </span>
                <div class="flex items-center gap-2">
                  <button
                    (click)="prevDialogue()"
                    [disabled]="dialogueIndex === 0"
                    class="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs font-mono disabled:opacity-30 border border-white/10">
                    PREV ◀
                  </button>
                  <button
                    (click)="nextDialogue()"
                    class="px-4 py-1 rounded bg-crimson hover:bg-crimson/90 text-white text-xs font-mono font-bold shadow-md shadow-crimson/20">
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
      title: 'Champion & Strategy Lead',
      badge: 'RAINBOW BADGE',
      badgeEmoji: '🧢',
      avatar: '🧢',
      color: '#E53935',
      borderColor: 'border-crimson',
      dialogue: [
        "What impresses me most about Harshal is how he bridges deep engineering with product vision. At Tata Communications, he didn't just write code—he stepped up as Acting Scrum Master to keep sprint velocity and production commitments on track!",
        "And look at his IIM Kozhikode Executive MBA project, SthiraX! Turning India's April 2026 C&D waste regulations into an asset-light retrofit platform with batch-level MRV software is exactly what happens when business strategy meets distributed tech.",
        "Gotta scale 'em all! From leading his squad to a Top 150 Nationwide Rank in Flipkart Grid 2.0 to winning 3× Extra Mile Commitment Awards, Harshal brings authentic championship energy."
      ]
    },
    {
      id: 'misty',
      name: 'Misty Waterflower',
      title: 'Cerulean Gym Leader',
      badge: 'CASCADE BADGE',
      badgeEmoji: '💧',
      avatar: '🧜‍♀️',
      color: '#00E5FF',
      borderColor: 'border-cyan-glow',
      dialogue: [
        "Water types demand seamless, fluid architecture! Harshal took on the mission to onboard the Caringo Swarm object storage software using Java, Maven, and Angular with automated DNS record management.",
        "He also spearheaded the frontend modernization effort at Tata Communications, migrating legacy codebases from AngularJS to modern Angular to keep the UI snappy and maintainable.",
        "Clean architecture and verified results: that's what makes an engineer someone teams can trust without hesitation."
      ]
    },
    {
      id: 'brock',
      name: 'Brock',
      title: 'Pewter Gym Leader & SRE Mentor',
      badge: 'BOULDER BADGE',
      badgeEmoji: '🪨',
      avatar: '🗿',
      color: '#FFD600',
      borderColor: 'border-energy',
      dialogue: [
        "Rock-solid infrastructure is born from real operational rigor. Harshal architected the multi-hypervisor dashboard handling KVM, VMware ESXi, and OLVM, decoupling heavy provisioning tasks via RabbitMQ message queues.",
        "And that 92.6% batch scheduler speedup (from 18 minutes down to 80 seconds)? That was achieved through disciplined Cassandra batch partitioning, Redis multi-level caching, and HikariCP connection pool tuning.",
        "Automating build and test pipelines with Jenkins CI and holding direct module responsibility for leadership-facing VM tracking shows he's built for serious engineering ownership."
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
