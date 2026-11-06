import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiter-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#070a12] transition-opacity duration-500 font-mono"
      [ngClass]="isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'"
      role="status"
      aria-live="polite">
      
      <!-- Quantum Radial Glow Background -->
      <div class="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"
           style="background: radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, transparent 65%);"></div>

      <div class="flex flex-col items-center justify-center p-6 text-center relative z-10 max-w-sm w-full">
        
        <!-- Animated High-Tech Quantum Gyroscope / Telemetry Orbit -->
        <div class="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 flex items-center justify-center">
          <!-- Outer Pulsing Orbit -->
          <div class="absolute inset-0 rounded-full border-2 border-cyan-glow/20 border-t-cyan-glow animate-spin" style="animation-duration: 2s;"></div>
          
          <!-- Middle Counter-Rotating Ring -->
          <div class="absolute inset-2 rounded-full border-2 border-emerald-500/20 border-b-emerald-400 animate-spin" style="animation-duration: 1.5s; animation-direction: reverse;"></div>
          
          <!-- Inner Core Pulse -->
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f1b2b] to-[#0a111a] border-2 border-cyan-glow shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center justify-center transform rotate-45">
            <div class="w-5 h-5 rounded-md bg-cyan-glow animate-pulse transform -rotate-45 flex items-center justify-center text-[10px] font-bold text-black">
              HP
            </div>
          </div>

          <!-- Pulsing Radar Dots -->
          <span class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_#00E5FF]"></span>
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#00e676]"></span>
        </div>

        <!-- System Loading State -->
        <div class="space-y-3 w-full">
          <div class="flex items-center justify-between text-xs text-cyan-glow font-bold tracking-wider">
            <span>INITIALIZING EXECUTIVE DOSSIER</span>
            <span>{{ progress }}%</span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full h-1.5 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/5">
            <div
              class="h-full bg-gradient-to-r from-cyan-glow to-emerald-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(0,229,255,0.8)]"
              [style.width.%]="progress"></div>
          </div>

          <!-- Live Telemetry Status Ticker -->
          <div class="text-[11px] text-white/50 h-5 overflow-hidden">
            <span class="animate-pulse">{{ currentStatus }}</span>
          </div>
        </div>

      </div>
    </div>
  `
})
export class RecruiterLoaderComponent implements OnInit {
  @Output() completed = new EventEmitter<void>();

  progress = 0;
  isFading = false;
  currentStatus = 'Connecting to distributed cloud telemetry...';

  private statusSteps = [
    'Connecting to distributed cloud telemetry...',
    'Loading multi-hypervisor provisioning specs...',
    'Synthesizing Tata Communications & Novamesh track record...',
    'Formatting Google XYZ impact metrics...',
    'Compiling 1-Page ATS vector documentation...',
    'Executive dossier ready.'
  ];

  ngOnInit(): void {
    const totalDuration = 1200; // 1.2s clean loader
    const intervalTime = 40;
    const increment = 100 / (totalDuration / intervalTime);

    const interval = setInterval(() => {
      this.progress = Math.min(100, Math.round(this.progress + increment));
      
      const stepIndex = Math.min(
        this.statusSteps.length - 1,
        Math.floor((this.progress / 100) * this.statusSteps.length)
      );
      this.currentStatus = this.statusSteps[stepIndex];

      if (this.progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.isFading = true;
          setTimeout(() => {
            this.completed.emit();
          }, 400);
        }, 150);
      }
    }, intervalTime);
  }
}
