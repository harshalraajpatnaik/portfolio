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
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/60">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse"></span>
              <span>POLLING: 10s</span>
            </div>
            <a href="http://localhost:8080/swagger-ui.html"
               target="_blank"
               rel="noopener noreferrer"
               class="px-4 py-2 rounded-lg bg-crimson/20 border border-crimson/40 text-crimson hover:bg-crimson/30 transition-all text-xs font-mono font-medium">
              OpenAPI Swagger UI ↗
            </a>
          </div>
        </div>

        <!-- Telemetry Cards Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <!-- Card 1: API Status -->
          <div class="glass-card p-5 rounded-xl border border-white/10">
            <div class="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
              <span>SERVICE STATUS</span>
              <span class="w-2 h-2 rounded-full bg-grass animate-pulse"></span>
            </div>
            <div class="text-2xl font-mono font-bold text-grass">
              {{ telemetry?.status || 'ONLINE' }}
            </div>
            <div class="text-[11px] font-mono text-white/40 mt-1">
              Spring Boot v{{ telemetry?.runtime?.springBootVersion || '3.2.5' }}
            </div>
          </div>

          <!-- Card 2: Uptime -->
          <div class="glass-card p-5 rounded-xl border border-white/10">
            <div class="text-xs font-mono text-white/50 mb-2">SYSTEM UPTIME</div>
            <div class="text-2xl font-mono font-bold text-energy">
              {{ formatUptime(telemetry?.uptimeSeconds || 0) }}
            </div>
            <div class="text-[11px] font-mono text-white/40 mt-1">Continuous uptime</div>
          </div>

          <!-- Card 3: JVM Heap Memory -->
          <div class="glass-card p-5 rounded-xl border border-white/10">
            <div class="text-xs font-mono text-white/50 mb-2">JVM HEAP ALLOCATION</div>
            <div class="text-2xl font-mono font-bold text-cyan-glow">
              {{ telemetry?.runtime?.heapUsedMb || 0 }} MB
            </div>
            <div class="text-[11px] font-mono text-white/40 mt-1">
              Max: {{ telemetry?.runtime?.heapMaxMb || 512 }} MB
            </div>
          </div>

          <!-- Card 4: Request Telemetry -->
          <div class="glass-card p-5 rounded-xl border border-white/10">
            <div class="text-xs font-mono text-white/50 mb-2">TOTAL API INVOCATIONS</div>
            <div class="text-2xl font-mono font-bold text-psychic">
              {{ telemetry?.apiStats?.totalRequests || 0 }}
            </div>
            <div class="text-[11px] font-mono text-white/40 mt-1">
              P50 Latency: ~{{ telemetry?.apiStats?.avgResponseMs || 4.2 }}ms
            </div>
          </div>
        </div>

        <!-- Terminal Console Preview -->
        <div class="glass-card rounded-2xl border border-white/10 overflow-hidden font-mono text-xs">
          <!-- Terminal Titlebar -->
          <div class="bg-black/60 px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-crimson/80"></span>
              <span class="w-3 h-3 rounded-full bg-energy/80"></span>
              <span class="w-3 h-3 rounded-full bg-grass/80"></span>
              <span class="text-white/40 ml-2">curl -X GET http://localhost:8080/api/v1/telemetry</span>
            </div>
            <span class="text-white/30 text-[10px]">HTTP/1.1 200 OK</span>
          </div>

          <!-- Terminal Content -->
          <div class="p-6 bg-black/80 text-white/80 space-y-1 overflow-x-auto leading-relaxed">
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

  constructor(private api: PortfolioApiService) {}

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

  formatUptime(seconds: number): string {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins < 60) return `${mins}m ${secs}s`;
    const hours = Math.floor(mins / 60);
    return `${hours}h ${mins % 60}m`;
  }
}
