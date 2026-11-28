import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090b10] overflow-hidden"
      [class.opacity-0]="done"
      [class.pointer-events-none]="done"
      style="transition: opacity 0.5s ease 0.8s;">

      <!-- Animated horizontal lines (chapter-curtain reveal) -->
      <div class="absolute inset-0 flex flex-col pointer-events-none" aria-hidden="true">
        <div *ngFor="let line of lines; let i = index"
             class="flex-1 bg-amber-500/5 story-line-reveal"
             [style.animation-delay]="(i * 60) + 'ms'">
        </div>
      </div>

      <!-- Center content -->
      <div class="relative z-10 flex flex-col items-center gap-6 text-center px-6">
        <!-- Compass SVG -->
        <svg class="w-14 h-14 text-amber-400 story-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>

        <div class="space-y-2">
          <div class="text-[11px] font-mono text-amber-400/80 tracking-[0.3em] uppercase">5+ YEARS OF PROFESSIONAL JOURNEY</div>
          <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">Loading Your Life Story</h2>
          <p class="text-sm text-white/50 font-mono max-w-xs">Preparing an immersive journey through 5+ years of enterprise cloud engineering &amp; leadership</p>
        </div>

        <!-- Progress bar -->
        <div class="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div class="h-full bg-amber-400 story-progress-bar rounded-full"></div>
        </div>
      </div>

      <!-- Bottom chapter labels -->
      <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-4 sm:gap-8 text-[10px] font-mono text-white/30 tracking-widest px-4 flex-wrap">
        <span *ngFor="let ch of chapters; let i = index"
              class="story-chapter-fade"
              [style.animation-delay]="(200 + i * 100) + 'ms'">{{ ch }}</span>
      </div>
    </div>
  `,
  styles: [`
    @media (prefers-reduced-motion: no-preference) {
      .story-line-reveal {
        animation: curtain-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        transform-origin: left;
      }
      @keyframes curtain-reveal {
        from { transform: scaleX(1); }
        to   { transform: scaleX(0); }
      }

      .story-icon-spin {
        animation: compass-spin 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      @keyframes compass-spin {
        from { transform: rotate(-180deg) scale(0.4); opacity: 0; }
        to   { transform: rotate(0deg) scale(1); opacity: 1; }
      }

      .story-progress-bar {
        animation: progress-fill 1.1s ease forwards;
      }
      @keyframes progress-fill {
        from { width: 0; }
        to   { width: 100%; }
      }

      .story-chapter-fade {
        animation: fade-up 0.6s ease both;
      }
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .story-line-reveal,
      .story-icon-spin,
      .story-progress-bar,
      .story-chapter-fade {
        animation: none !important;
      }
      .story-progress-bar { width: 100%; }
      .story-chapter-fade { opacity: 1; }
    }
  `]
})
export class StoryLoaderComponent implements OnInit {
  @Input() visible = false;
  @Output() completed = new EventEmitter<void>();

  done = false;

  lines = new Array(8);
  chapters = ['Prologue', 'Act I · SRM College', 'Act II · Tata Comm', 'Act III · Novamesh', 'Act IV · IIMK Bridge', 'Connect'];

  ngOnInit(): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reducedMotion ? 300 : 1400;
    setTimeout(() => {
      this.done = true;
      setTimeout(() => this.completed.emit(), 600);
    }, delay);
  }
}
