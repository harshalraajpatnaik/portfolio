import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAudioService } from '../../../core/services/pokemon-audio.service';

/**
 * Enhanced Pokéball Intro Sequence
 * - Dramatic throw physics with 3 authentic Pokéball wiggles/shakes
 * - Glowing center latch with clicking animation & sound effect
 * - Bright burst of energy stars unlocking the Pokédex
 * - Skip button always available
 * - Strictly respects prefers-reduced-motion
 */
@Component({
  selector: 'app-pokeball-intro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="pokeball-overlay"
      role="dialog"
      aria-label="Pokédex loading sequence"
      aria-modal="true"
      [class.fade-exit]="exiting">

      <!-- Skip button -->
      <button
        class="absolute top-6 right-6 text-xs text-white/50 hover:text-white transition-colors
               border border-white/20 bg-black/40 backdrop-blur rounded-lg px-4 py-2 font-mono z-50 flex items-center gap-2"
        (click)="complete()"
        aria-label="Skip sequence">
        <span>SKIP INTRO [ESC]</span>
        <span>⏩</span>
      </button>

      <!-- Center Stage: The Pokéball Throw & Burst -->
      <div class="stage-container flex flex-col items-center justify-center relative">
        <!-- Pokémon Battle Energy Aura -->
        <div class="aura-glow" [class.active]="phase >= 3" aria-hidden="true"></div>

        <!-- Pokéball Sphere -->
        <div
          class="pokeball-sphere"
          [class.drop]="phase >= 1"
          [class.shake-1]="phase === 2"
          [class.shake-2]="phase === 3"
          [class.shake-3]="phase === 4"
          [class.opening]="phase >= 5"
          aria-hidden="true">
          
          <svg viewBox="0 0 200 200" class="w-40 h-40 sm:w-48 sm:h-48 drop-shadow-[0_0_35px_rgba(220,10,45,0.7)]">
            <!-- Top Half (Iconic Pokémon Red) -->
            <path d="M 10 100 A 90 90 0 0 1 190 100 Z" fill="#DC0A2D" stroke="#111" stroke-width="4"/>
            <!-- Top Glare Highlight -->
            <path d="M 30 75 A 75 75 0 0 1 170 75 A 85 85 0 0 0 30 75 Z" fill="rgba(255,255,255,0.25)"/>
            <!-- Bottom Half (Pure White) -->
            <path d="M 10 100 A 90 90 0 0 0 190 100 Z" fill="#F8FAFC" stroke="#111" stroke-width="4"/>
            <!-- Center Dark Belt -->
            <rect x="8" y="93" width="184" height="14" fill="#1E293B"/>
            <line x1="8" y1="93" x2="192" y2="93" stroke="#000" stroke-width="3"/>
            <line x1="8" y1="107" x2="192" y2="107" stroke="#000" stroke-width="3"/>
            <!-- Outer Button Ring -->
            <circle cx="100" cy="100" r="28" fill="#1E293B" stroke="#000" stroke-width="3"/>
            <!-- Inner Glowing Button -->
            <circle cx="100" cy="100" r="16" fill="#FFF"
                    [class.button-glow]="phase >= 2"
                    stroke="#CBD5E1" stroke-width="2"/>
            <circle cx="100" cy="100" r="7" fill="#E2E8F0"/>
          </svg>
        </div>

        <!-- Energy Beams & Star Burst (Plays on Open) -->
        <div class="burst-layer" *ngIf="phase >= 5" aria-hidden="true">
          <div class="beam-ring"></div>
          <div class="energy-flash"></div>
        </div>

        <!-- Pokédex Boot Status Text -->
        <div class="mt-10 text-center font-mono space-y-1">
          <div class="text-sm font-bold tracking-widest text-energy uppercase">
            {{ statusText }}
          </div>
          <div class="text-[11px] text-white/40">
            HARSHAL RAAJ PATNAIK · CLOUD ARCHITECT & SDE
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pokeball-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: radial-gradient(circle at center, #1e1b4b 0%, #0a0d14 80%);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .pokeball-overlay.fade-exit {
      opacity: 0;
      pointer-events: none;
    }

    .aura-glow {
      position: absolute;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(220,10,45,0.4) 0%, rgba(255,214,0,0.2) 50%, transparent 70%);
      filter: blur(40px);
      transition: transform 0.6s ease, opacity 0.6s ease;
      transform: scale(0.6);
      opacity: 0.3;
    }
    .aura-glow.active {
      transform: scale(1.3);
      opacity: 0.8;
    }

    /* Pokéball Physics */
    .pokeball-sphere {
      transform-origin: center bottom;
      transition: transform 0.2s ease;
    }
    .pokeball-sphere.drop {
      animation: ball-bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) forwards;
    }
    @keyframes ball-bounce {
      0%   { transform: translateY(-160px) scale(0.6) rotate(-20deg); opacity: 0; }
      60%  { transform: translateY(0px) scale(1.05) rotate(5deg); opacity: 1; }
      80%  { transform: translateY(-18px) scale(0.98); }
      100% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 1; }
    }

    /* Authentic 3 wiggles */
    .pokeball-sphere.shake-1 {
      animation: wiggle-left 0.35s ease-in-out;
    }
    .pokeball-sphere.shake-2 {
      animation: wiggle-right 0.35s ease-in-out;
    }
    .pokeball-sphere.shake-3 {
      animation: wiggle-left 0.35s ease-in-out;
    }
    @keyframes wiggle-left {
      0%, 100% { transform: rotate(0deg); }
      35%      { transform: rotate(-24deg); }
      70%      { transform: rotate(10deg); }
    }
    @keyframes wiggle-right {
      0%, 100% { transform: rotate(0deg); }
      35%      { transform: rotate(24deg); }
      70%      { transform: rotate(-10deg); }
    }

    .button-glow {
      fill: #FFD600 !important;
      filter: drop-shadow(0 0 10px #FFD600);
    }

    /* Open Burst */
    .pokeball-sphere.opening {
      animation: ball-burst 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes ball-burst {
      0%   { transform: scale(1); filter: brightness(1); }
      40%  { transform: scale(1.25) translateY(-10px); filter: brightness(2); }
      100% { transform: scale(1.6); opacity: 0; filter: brightness(3); }
    }

    .energy-flash {
      position: absolute;
      inset: -100px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,214,0,0.6) 40%, transparent 70%);
      animation: flash-expand 0.6s ease-out forwards;
      pointer-events: none;
    }
    @keyframes flash-expand {
      from { transform: scale(0.2); opacity: 1; }
      to   { transform: scale(2.5); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .pokeball-overlay { display: none !important; }
    }
  `]
})
export class PokeballIntroComponent implements OnInit {
  @Output() completed = new EventEmitter<void>();

  phase = 0;
  exiting = false;
  statusText = 'DETECTING WILD POKÉMON ENCOUNTER...';

  private readonly STORAGE_KEY = 'hrp_pokemon_intro_shown';

  constructor(private audio: PokemonAudioService) {}

  ngOnInit(): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || localStorage.getItem(this.STORAGE_KEY)) {
      this.completed.emit();
      return;
    }

    // Sequence timing
    this.phase = 1; // Drop
    this.audio.playPokeballClick();

    setTimeout(() => {
      this.phase = 2; // Shake 1
      this.statusText = 'POKÉBALL WIGGLE (1/3)...';
      this.audio.playPokeballClick();

      setTimeout(() => {
        this.phase = 3; // Shake 2
        this.statusText = 'POKÉBALL WIGGLE (2/3)...';
        this.audio.playPokeballClick();

        setTimeout(() => {
          this.phase = 4; // Shake 3
          this.statusText = 'GOTCHA! POKÉDEX DATA ACQUIRED!';
          this.audio.playPokeballClick();

          setTimeout(() => {
            this.phase = 5; // Burst open!
            this.statusText = 'WELCOME, TRAINER! INITIALIZING POKÉDEX PRO...';
            this.audio.playFanfare();

            setTimeout(() => {
              this.exiting = true;
              setTimeout(() => {
                localStorage.setItem(this.STORAGE_KEY, '1');
                this.completed.emit();
              }, 400);
            }, 550);
          }, 450);
        }, 400);
      }, 400);
    }, 600);
  }

  complete(): void {
    this.exiting = true;
    setTimeout(() => {
      localStorage.setItem(this.STORAGE_KEY, '1');
      this.completed.emit();
    }, 250);
  }
}
