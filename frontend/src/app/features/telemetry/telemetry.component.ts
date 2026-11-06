import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetrySnapshot } from '../../core/models/api.models';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-telemetry',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="telemetry" class="py-20 px-6 relative bg-black/40 border-y border-white/5">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-grass/30 bg-grass/10 text-grass text-xs font-mono">
              <span class="w-2 h-2 rounded-full bg-grass animate-ping"></span>
              <span>LIVE OBSERVABILITY & METRICS PIPELINE</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Real-Time <span class="gradient-text">Spring Boot 3</span> Telemetry
            </h2>
            <p class="text-white/60 text-sm sm:text-base max-w-xl">
              Live data streamed directly from Harshal's Spring Boot backend JVM runtime management beans.
              Demonstrates production telemetry patterns.
            </p>
          </div>

          <!-- Live Poll Indicator & Swagger link -->
          <div class="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/60">
              <span class="w-1.5 h-1.5 rounded-full" [ngClass]="(api.isBackendOnline$ | async) ? 'bg-grass animate-pulse' : 'bg-cyan-glow animate-pulse'"></span>
              <span>{{ (api.isBackendOnline$ | async) ? 'BACKEND: CONNECTED' : 'BACKEND: STANDALONE' }}</span>
            </div>
            
            <!-- Live link when online, in-UI modal when offline -->
            <a *ngIf="(api.isBackendOnline$ | async)"
               href="http://localhost:8080/swagger-ui.html"
               target="_blank"
               rel="noopener noreferrer"
               title="Spring Boot 3 OpenAPI Swagger UI (Active on Port 8080)"
               class="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-crimson/20 border border-crimson/40 text-crimson hover:bg-crimson/30 transition-all text-xs font-mono font-medium">
              OpenAPI Swagger UI ↗
            </a>

            <button *ngIf="!(api.isBackendOnline$ | async)"
                    (click)="openSwaggerModal()"
                    title="View OpenAPI REST Specification & Architecture (Standalone Mode)"
                    class="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-cyan-glow/15 border border-cyan-glow/40 text-cyan-glow hover:bg-cyan-glow/25 transition-all text-xs font-mono font-medium cursor-pointer">
              OpenAPI Swagger UI (Spec) ↗
            </button>
          </div>
        </div>

        <!-- Telemetry Cards Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <!-- Card 1: API Status -->
          <div class="glass-card p-3.5 sm:p-5 rounded-xl border border-white/10">
            <div class="flex items-center justify-between text-xs font-mono text-white/50 mb-1.5 sm:mb-2">
              <span class="text-[10px] sm:text-xs">STATUS</span>
              <span class="w-2 h-2 rounded-full" [ngClass]="(api.isBackendOnline$ | async) ? 'bg-grass animate-pulse' : 'bg-cyan-glow animate-pulse'"></span>
            </div>
            <div class="text-xl sm:text-2xl font-mono font-bold" [ngClass]="(api.isBackendOnline$ | async) ? 'text-grass' : 'text-cyan-glow'">
              {{ (api.isBackendOnline$ | async) ? 'ONLINE' : 'STANDALONE' }}
            </div>
            <div class="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1 truncate">
              {{ (api.isBackendOnline$ | async) ? 'Spring Boot 3 (Live)' : 'Client Standalone' }}
            </div>
          </div>

          <!-- Card 2: Uptime -->
          <div class="glass-card p-3.5 sm:p-5 rounded-xl border border-white/10">
            <div class="text-[10px] sm:text-xs font-mono text-white/50 mb-1.5 sm:mb-2">UPTIME</div>
            <div class="text-xl sm:text-2xl font-mono font-bold text-energy truncate">
              {{ formatUptime(telemetry?.uptimeSeconds || 0) }}
            </div>
            <div class="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">Continuous uptime</div>
          </div>

          <!-- Card 3: JVM Heap Memory -->
          <div class="glass-card p-3.5 sm:p-5 rounded-xl border border-white/10">
            <div class="text-[10px] sm:text-xs font-mono text-white/50 mb-1.5 sm:mb-2">JVM HEAP</div>
            <div class="text-xl sm:text-2xl font-mono font-bold text-cyan-glow">
              {{ telemetry?.runtime?.heapUsedMb || 0 }} MB
            </div>
            <div class="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">
              Max: {{ telemetry?.runtime?.heapMaxMb || 512 }} MB
            </div>
          </div>

          <!-- Card 4: Request Telemetry -->
          <div class="glass-card p-3.5 sm:p-5 rounded-xl border border-white/10">
            <div class="text-[10px] sm:text-xs font-mono text-white/50 mb-1.5 sm:mb-2">API CALLS</div>
            <div class="text-xl sm:text-2xl font-mono font-bold text-psychic">
              {{ telemetry?.apiStats?.totalRequests || 0 }}
            </div>
            <div class="text-[10px] sm:text-[11px] font-mono text-white/40 mt-1">
              P50: ~{{ telemetry?.apiStats?.avgResponseMs || 4.2 }}ms
            </div>
          </div>
        </div>

        <!-- Terminal Console Preview -->
        <div class="glass-card rounded-2xl border border-white/10 overflow-hidden font-mono text-xs">
          <!-- Terminal Titlebar -->
          <div class="bg-black/60 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-2 truncate">
              <span class="w-2.5 h-2.5 rounded-full bg-crimson/80 flex-shrink-0"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-energy/80 flex-shrink-0"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-grass/80 flex-shrink-0"></span>
              <span class="text-white/40 ml-1 truncate text-[11px]">curl -X GET /api/v1/telemetry</span>
            </div>
            <span class="text-white/30 text-[10px] flex-shrink-0">200 OK</span>
          </div>

          <!-- Terminal Content -->
          <div class="p-4 sm:p-6 bg-black/80 text-white/80 space-y-1 overflow-x-auto leading-relaxed text-[11px] sm:text-xs">
            <div class="text-white/40">// JSON Response from Spring Boot Actuator Management Bean</div>
            <div>&#123;</div>
            <div class="pl-4"><span class="text-energy">"apiVersion"</span>: <span class="text-grass">"{{ telemetry?.apiVersion || '1.0.0' }}"</span>,</div>
            <div class="pl-4"><span class="text-energy">"status"</span>: <span class="text-grass">"{{ telemetry?.status || 'ONLINE' }}"</span>,</div>
            <div class="pl-4"><span class="text-energy">"runtime"</span>: &#123;</div>
            <div class="pl-8"><span class="text-energy">"javaVersion"</span>: <span class="text-cyan-glow">"{{ telemetry?.runtime?.javaVersion || '17.0.1' }}"</span>,</div>
            <div class="pl-8"><span class="text-energy">"springBootVersion"</span>: <span class="text-cyan-glow">"{{ telemetry?.runtime?.springBootVersion || '3.2.5' }}"</span>,</div>
            <div class="pl-8"><span class="text-energy">"heapUsedMb"</span>: <span class="text-psychic">{{ telemetry?.runtime?.heapUsedMb || 0 }}</span>,</div>
            <div class="pl-8"><span class="text-energy">"availableProcessors"</span>: <span class="text-psychic">{{ telemetry?.runtime?.availableProcessors || 8 }}</span></div>
            <div class="pl-4">&#125;,</div>
            <div class="pl-4"><span class="text-energy">"uptimeSeconds"</span>: <span class="text-psychic">{{ telemetry?.uptimeSeconds || 0 }}</span></div>
            <div>&#125;</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TelemetryComponent implements OnInit, OnDestroy {
  @Input() telemetry: TelemetrySnapshot | null = null;

  private pollSub?: Subscription;

  constructor(public api: PortfolioApiService) {}

  ngOnInit(): void {
    // Poll telemetry every 10 seconds
    this.pollSub = interval(10000).subscribe(() => {
      this.api.getTelemetry().subscribe({
        next: (t) => this.telemetry = t,
        error: () => {}
      });
    });
  }

  ngOnDestroy(): void {
    this.pollSub?.unsubscribe();
  }

  openSwaggerModal(): void {
    this.api.openApiModal();
  }

  formatUptime(seconds: number): string {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins < 60) return `${mins}m ${secs}s`;
    const hours = Math.floor(mins / 60);
    return `${hours}h ${mins % 60}m`;
  }
}
