import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-energy/30 bg-energy/10 text-energy text-xs font-mono">
            <span>ENGINEERING COMPETENCIES</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight">
            Technical Stack & <span class="gradient-text">Domain Depth</span>
          </h2>
          <p class="text-white/60 max-w-2xl text-base sm:text-lg">
            Grounded in distributed Java enterprise architecture, cloud automation, and business operational strategy.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Column 1: Primary Core Competencies -->
          <div class="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-energy/10 border border-energy/30 flex items-center justify-center text-energy font-mono font-bold text-sm">01</span>
              <div>
                <h3 class="font-bold text-white text-lg">Primary Core</h3>
                <p class="text-xs text-white/50 font-mono">Daily enterprise engineering</p>
              </div>
            </div>

            <div class="space-y-4">
              <div *ngFor="let s of primarySkills" class="space-y-1.5">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-white font-medium">{{ s.name }}</span>
                  <span class="text-energy">{{ s.level }}</span>
                </div>
                <div class="stat-bar">
                  <div class="stat-bar-fill bg-energy" [style.width.%]="s.proficiency"></div>
                </div>
                <p class="text-[11px] text-white/50 leading-tight">{{ s.context }}</p>
              </div>
            </div>
          </div>

          <!-- Column 2: Working Knowledge & Frameworks -->
          <div class="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-cyan-glow font-mono font-bold text-sm">02</span>
              <div>
                <h3 class="font-bold text-white text-lg">Distributed Systems</h3>
                <p class="text-xs text-white/50 font-mono">Messaging, persistence & cache</p>
              </div>
            </div>

            <div class="space-y-4">
              <div *ngFor="let s of distributedSkills" class="space-y-1.5">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-white font-medium">{{ s.name }}</span>
                  <span class="text-cyan-glow">{{ s.level }}</span>
                </div>
                <div class="stat-bar">
                  <div class="stat-bar-fill bg-cyan-glow" [style.width.%]="s.proficiency"></div>
                </div>
                <p class="text-[11px] text-white/50 leading-tight">{{ s.context }}</p>
              </div>
            </div>
          </div>

          <!-- Column 3: Cloud Infrastructure & Leadership -->
          <div class="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-grass/10 border border-grass/30 flex items-center justify-center text-grass font-mono font-bold text-sm">03</span>
              <div>
                <h3 class="font-bold text-white text-lg">Platform & Leadership</h3>
                <p class="text-xs text-white/50 font-mono">Multi-hypervisors & IIMK strategy</p>
              </div>
            </div>

            <div class="space-y-4">
              <div *ngFor="let s of platformSkills" class="space-y-1.5">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-white font-medium">{{ s.name }}</span>
                  <span class="text-grass">{{ s.level }}</span>
                </div>
                <div class="stat-bar">
                  <div class="stat-bar-fill bg-grass" [style.width.%]="s.proficiency"></div>
                </div>
                <p class="text-[11px] text-white/50 leading-tight">{{ s.context }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  primarySkills = [
    { name: 'Java 17 / Spring Boot 3', level: 'Expert', proficiency: 95, context: 'Multi-module microservices, Spring Security 6, SpringDoc OpenAPI' },
    { name: 'Hibernate / Spring Data JPA', level: 'Expert', proficiency: 90, context: 'Query optimization, transaction boundaries, lazy loading & N+1 fixes' },
    { name: 'Angular / TypeScript', level: 'Advanced', proficiency: 85, context: 'Modern standalone components, reactive signals, RxJS streams' },
    { name: 'MySQL & Schema Architecture', level: 'Advanced', proficiency: 88, context: 'Relational data modeling, connection pooling, high-throughput indexes' },
    { name: 'RabbitMQ / AMQP Messaging', level: 'Advanced', proficiency: 86, context: 'Asynchronous task queues, dead-letter recovery, idempotent consumers' },
  ];

  distributedSkills = [
    { name: 'Cassandra Batch Optimization', level: 'Proficient', proficiency: 80, context: 'Partitioned batch operations (batch size 50), coordinator protection' },
    { name: 'Redis Multi-Layer Caching', level: 'Advanced', proficiency: 85, context: 'Cache-aside patterns, eviction policies, distributed session caching' },
    { name: 'Flowable BPMN Workflows', level: 'Advanced', proficiency: 84, context: 'Multi-step infrastructure provisioning & automatic failure resumption' },
    { name: 'API Gateways & Reverse Proxies (Kong)', level: 'Proficient', proficiency: 82, context: 'Rate limiting, wildcard path forwarding, workspace access validation' },
    { name: 'S3 Object Storage (Scality, MinIO)', level: 'Proficient', proficiency: 80, context: 'Bucket lifecycle management, metering, DNS A-record associations' },
  ];

  platformSkills = [
    { name: 'Multi-Hypervisor VM Engines', level: 'Expert', proficiency: 92, context: 'Orchestrating KVM, VMware ESXi, vCloud Director, and OLVM' },
    { name: 'FortiGate Network Automation', level: 'Advanced', proficiency: 85, context: 'Firewall rules, IPsec VPN automation, sliding-window rate control' },
    { name: 'Zabbix Telemetry & Capacity', level: 'Proficient', proficiency: 80, context: 'Bandwidth monitoring, history.get vs trend.get telemetry pipelines' },
    { name: 'Business & Operations Strategy', level: 'Executive', proficiency: 90, context: 'IIM Kozhikode EPGPM: Capacity planning, SLA governance, cost metering' },
    { name: 'Docker & Containerization', level: 'Advanced', proficiency: 82, context: 'Multi-stage lean builds, non-root runtimes, containerized microservices' },
  ];
}
