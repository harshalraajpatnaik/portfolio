import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * 2.5D Cybernetic Tech Companion
 * - Original character — no Nintendo IP involved
 * - Pure SVG + CSS animations — zero external assets, <5KB
 * - Cursor-reactive eye tracking
 * - Accessible: aria-hidden (decorative)
 */
@Component({
  selector: 'app-companion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="companion-wrapper" aria-hidden="true">
      <svg
        class="companion-svg animate-float"
        viewBox="0 0 120 160"
        xmlns="http://www.w3.org/2000/svg">

        <!-- Body — floating orb with hexagonal ring -->
        <defs>
          <radialGradient id="bodyGrad" cx="40%" cy="35%">
            <stop offset="0%"   stop-color="#1e2a3a"/>
            <stop offset="100%" stop-color="#0d1520"/>
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        <!-- Outer energy ring -->
        <ellipse cx="60" cy="76" rx="48" ry="48" fill="none"
                 stroke="rgba(229,57,53,0.25)" stroke-width="1.5"
                 class="ring-rotate"/>
        <!-- Secondary ring -->
        <ellipse cx="60" cy="76" rx="40" ry="40" fill="none"
                 stroke="rgba(255,214,0,0.15)" stroke-width="0.8"
                 class="ring-rotate-reverse"/>

        <!-- Main body orb -->
        <circle cx="60" cy="76" r="32" fill="url(#bodyGrad)"
                stroke="rgba(229,57,53,0.45)" stroke-width="1.5"
                filter="url(#glow)"/>

        <!-- Eye whites -->
        <ellipse cx="48" cy="73" rx="9" ry="10" fill="rgba(10,13,20,0.9)" stroke="rgba(0,229,255,0.5)" stroke-width="1"/>
        <ellipse cx="72" cy="73" rx="9" ry="10" fill="rgba(10,13,20,0.9)" stroke="rgba(0,229,255,0.5)" stroke-width="1"/>

        <!-- Pupils (will be moved by cursor tracking) -->
        <circle [attr.cx]="leftEyeX" [attr.cy]="leftEyeY" r="4.5" fill="#00E5FF" opacity="0.9"/>
        <circle [attr.cx]="rightEyeX" [attr.cy]="rightEyeY" r="4.5" fill="#00E5FF" opacity="0.9"/>

        <!-- Pupil highlights -->
        <circle [attr.cx]="leftEyeX - 1.5" [attr.cy]="leftEyeY - 1.5" r="1.5" fill="white" opacity="0.7"/>
        <circle [attr.cx]="rightEyeX - 1.5" [attr.cy]="rightEyeY - 1.5" r="1.5" fill="white" opacity="0.7"/>

        <!-- Chest energy core -->
        <circle cx="60" cy="88" r="6" fill="rgba(229,57,53,0.15)" stroke="#E53935" stroke-width="1" class="core-pulse"/>
        <circle cx="60" cy="88" r="3" fill="#E53935" opacity="0.8"/>

        <!-- Antenna -->
        <line x1="60" y1="44" x2="60" y2="30" stroke="rgba(229,57,53,0.6)" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="60" cy="28" r="3" fill="#FFD600" class="antenna-pulse"/>

        <!-- Tail/Hover glow beneath -->
        <ellipse cx="60" cy="118" rx="20" ry="4" fill="rgba(229,57,53,0.15)" class="shadow-pulse"/>
      </svg>

      <!-- Status indicator -->
      <div class="status-bar">
        <span class="status-dot"></span>
        <span class="mono text-xs text-white/30">API ONLINE</span>
      </div>
    </div>
  `,
  styles: [`
    .companion-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .companion-svg {
      width: 140px;
      height: 190px;
    }
    .ring-rotate {
      transform-origin: 60px 76px;
      animation: ring-spin 8s linear infinite;
    }
    .ring-rotate-reverse {
      transform-origin: 60px 76px;
      animation: ring-spin 12s linear infinite reverse;
    }
    @keyframes ring-spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .core-pulse, .antenna-pulse {
      animation: core-throb 2s ease-in-out infinite;
    }
    .shadow-pulse {
      animation: shadow-breathe 3s ease-in-out infinite;
    }
    @keyframes core-throb {
      0%, 100% { opacity: 0.8; }
      50%       { opacity: 1; filter: drop-shadow(0 0 6px #E53935); }
    }
    @keyframes shadow-breathe {
      0%, 100% { transform: scaleX(0.8); opacity: 0.10; }
      50%       { transform: scaleX(1.2); opacity: 0.20; }
    }
    .status-bar {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00E676;
      animation: status-blink 2s ease-in-out infinite;
      box-shadow: 0 0 6px rgba(0, 230, 118, 0.7);
    }
    @keyframes status-blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.4; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ring-rotate, .ring-rotate-reverse,
      .core-pulse, .antenna-pulse, .shadow-pulse,
      .status-dot, .companion-svg { animation: none !important; }
    }
  `]
})
export class CompanionComponent implements OnInit {
  // Default eye positions (centered in each eye socket)
  leftEyeX = 48;
  leftEyeY = 73;
  rightEyeX = 72;
  rightEyeY = 73;

  private readonly LEFT_EYE_CENTER  = { x: 48, y: 73 };
  private readonly RIGHT_EYE_CENTER = { x: 72, y: 73 };
  private readonly MAX_PUPIL_SHIFT  = 3;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const svgCenterX = rect.left + rect.width  / 2;
    const svgCenterY = rect.top  + rect.height / 2;

    const dx = (e.clientX - svgCenterX) / window.innerWidth;
    const dy = (e.clientY - svgCenterY) / window.innerHeight;

    this.leftEyeX  = this.LEFT_EYE_CENTER.x  + dx * this.MAX_PUPIL_SHIFT;
    this.leftEyeY  = this.LEFT_EYE_CENTER.y  + dy * this.MAX_PUPIL_SHIFT;
    this.rightEyeX = this.RIGHT_EYE_CENTER.x + dx * this.MAX_PUPIL_SHIFT;
    this.rightEyeY = this.RIGHT_EYE_CENTER.y + dy * this.MAX_PUPIL_SHIFT;
  }
}
