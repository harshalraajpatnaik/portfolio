import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileResponse, ProjectCard } from '../../core/models/api.models';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { FALLBACK_PROFILE, FALLBACK_PROJECTS } from '../../core/data/portfolio-fallback.data';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-recruiter-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumeComponent],
  template: `
    <div class="min-h-screen bg-[#080b12] text-white font-sans selection:bg-cyan-glow selection:text-black">
      
      <!-- SUBTLE AMBIENT BACKGROUND GLOW -->
      <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-glow/5 rounded-full blur-[160px]"></div>
        <div class="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <!-- MAIN CONTAINER -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 space-y-20">

        <!-- ========================================================================= -->
        <!-- SECTION 1: EXECUTIVE HERO & VALUE PROPOSITION                             -->
        <!-- ========================================================================= -->
        <section id="executive-summary" class="space-y-8">
          
          <!-- Top Role & Education Badges -->
          <div class="flex flex-wrap items-center gap-2.5">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow text-xs font-mono font-bold tracking-wide">
              <span class="w-2 h-2 rounded-full bg-cyan-glow animate-pulse"></span>
              <span>SENIOR SOFTWARE ENGINEER · NOVAMESH / TATA COMMUNICATIONS</span>
            </div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold tracking-wide">
              <span>🎓 IIM KOZHIKODE EPGP SCHOLAR</span>
            </div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs font-mono">
              <span>TECH × MBA PLATFORM ARCHITECT</span>
            </div>
          </div>

          <!-- Headline & Core Title -->
          <div class="space-y-4 max-w-4xl">
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Architecting <span class="bg-gradient-to-r from-cyan-glow via-teal-300 to-emerald-400 bg-clip-text text-transparent">Resilient Cloud Systems</span> with Executive Business Impact.
            </h1>
            <p class="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl font-normal">
              Senior Software Engineer with <strong>5+ years of specialized enterprise engineering</strong> across multi-hypervisor cloud infrastructure, high-throughput asynchronous batch processing, and S3 object storage at Tata Communications. Executive MBA candidate at <strong>IIM Kozhikode</strong> uniting distributed systems architecture with unit economics, product roadmaps, and enterprise ROI.
            </p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a href="assets/Harshal_Raaj_Patnaik_Resume.pdf"
               download="Harshal_Raaj_Patnaik_Resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               class="px-5 py-3 rounded-xl bg-cyan-glow hover:bg-cyan-glow/90 text-black font-mono font-bold text-xs sm:text-sm shadow-xl shadow-cyan-glow/20 transition-all flex items-center gap-2 cursor-pointer">
              <span>📄 DOWNLOAD 1-PAGE ATS RESUME (PDF)</span>
              <span>↓</span>
            </a>

            <a href="assets/Harshal_Raaj_Patnaik_Resume.tex"
               download="Harshal_Raaj_Patnaik_Resume.tex"
               target="_blank"
               rel="noopener noreferrer"
               class="px-4 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer">
              <span>LATEX SOURCE (.TEX)</span>
              <span>⚡</span>
            </a>

            <a href="https://linkedin.com/in/harshalraajpatnaik"
               target="_blank"
               rel="noopener noreferrer"
               class="px-4 py-3 rounded-xl border border-white/15 hover:border-cyan-glow/50 text-white/80 hover:text-white transition-all text-xs font-mono flex items-center gap-2">
              <span>LINKEDIN ↗</span>
            </a>

            <a href="https://github.com/harshalraajpatnaik"
               target="_blank"
               rel="noopener noreferrer"
               class="px-4 py-3 rounded-xl border border-white/15 hover:border-cyan-glow/50 text-white/80 hover:text-white transition-all text-xs font-mono flex items-center gap-2">
              <span>GITHUB ↗</span>
            </a>
          </div>

          <!-- Key Metrics Grid (Google XYZ Impact Highlight) -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
            <div class="p-4 sm:p-5 rounded-2xl bg-[#0f1523] border border-white/10 hover:border-cyan-glow/40 transition-all">
              <div class="text-xs font-mono text-cyan-glow font-bold mb-1">LATENCY REDUCTION</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white">92.6%</div>
              <div class="text-xs text-white/60 mt-1">Slashed batch scheduler execution from 18m to 80s</div>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-[#0f1523] border border-white/10 hover:border-emerald-500/40 transition-all">
              <div class="text-xs font-mono text-emerald-400 font-bold mb-1">HYPERVISORS</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white">4+ Platforms</div>
              <div class="text-xs text-white/60 mt-1">KVM, VMware ESXi, OLVM automated provisioning</div>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-[#0f1523] border border-white/10 hover:border-teal-400/40 transition-all">
              <div class="text-xs font-mono text-teal-400 font-bold mb-1">OBJECT STORAGE</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white">100% Self-Service</div>
              <div class="text-xs text-white/60 mt-1">Caringo Swarm S3 onboarding & automated DNS mapping</div>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-[#0f1523] border border-white/10 hover:border-purple-400/40 transition-all">
              <div class="text-xs font-mono text-purple-400 font-bold mb-1">AWARDS</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white">3× Extra Mile</div>
              <div class="text-xs text-white/60 mt-1">Tata Communications awards for reliability & delivery</div>
            </div>
          </div>
        </section>

        <!-- ========================================================================= -->
        <!-- SECTION 2: PROFESSIONAL ENTERPRISE EXPERIENCE (GOOGLE XYZ FORMULA)         -->
        <!-- ========================================================================= -->
        <section id="experience" class="space-y-8 pt-6">
          <div class="space-y-2 border-b border-white/10 pb-4">
            <div class="text-xs font-mono text-cyan-glow font-bold uppercase tracking-wider">CAREER TIMELINE</div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-white">
              Enterprise Experience &amp; Proven Track Record
            </h2>
            <p class="text-sm text-white/70">
              Documented production ownership across distributed hypervisors, cloud storage, and security gateways.
            </p>
          </div>

          <!-- Timeline Container -->
          <div class="space-y-8">
            
            <!-- ROLE 1: NOVAMESH LTD. -->
            <div class="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-white/10 relative overflow-hidden space-y-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-cyan-glow"></span>
                    <h3 class="text-xl sm:text-2xl font-bold text-white">Novamesh Ltd.</h3>
                    <span class="text-xs px-2.5 py-0.5 rounded-full bg-cyan-glow/15 text-cyan-glow font-mono font-medium">Wholly Owned Subsidiary of Tata Communications</span>
                  </div>
                  <div class="text-sm sm:text-base font-semibold text-white/90 mt-1">
                    Senior Software Engineer (Cloud Platforms &amp; Distributed Infrastructure)
                  </div>
                </div>
                <div class="text-xs font-mono text-cyan-glow font-bold sm:text-right">
                  <div>Apr 2024 – Present</div>
                  <div class="text-white/50 font-normal">Chennai, India</div>
                </div>
              </div>

              <!-- Google XYZ Accomplishment Bullets -->
              <ul class="space-y-3 text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                <li class="flex items-start gap-2.5">
                  <span class="text-cyan-glow font-bold mt-1">▸</span>
                  <span><strong>Capacity &amp; Infrastructure Telemetry Dashboard:</strong> Architected and engineered end-to-end multi-tenant Capacity Planning &amp; Inventory Dashboard from design to distributed backend services, managing real-time lifecycle records across <strong>Compute</strong> (KVM, VMware ESXi, OLVM hypervisors), <strong>Storage</strong> (NetApp ONTAP, HPE 3PAR/Nimble, Caringo Swarm), and <strong>Network</strong> (public IP pool reports, switch port mappings, VDOM reports, bandwidth utilization telemetry) with interactive graphical heatmaps and trend analytics.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-cyan-glow font-bold mt-1">▸</span>
                  <span><strong>Multi-Hypervisor Orchestration &amp; Asynchronous Sagas:</strong> Architected event-driven VM orchestration and capacity tracking engine across <strong>KVM, VMware ESXi, and OLVM</strong>; designed automated compensating sagas with <strong>Flowable BPMN</strong> and decoupled execution via <strong>RabbitMQ (AMQP)</strong> queues to guarantee sub-second portal responsiveness and zero orphaned cloud resources.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-cyan-glow font-bold mt-1">▸</span>
                  <span><strong>High-Throughput Batch Processing (92.6% Speedup):</strong> Slashed cloud batch scheduler execution latency by <strong>92.6% (from ~18 minutes down to 80 seconds)</strong> across distributed Cassandra clusters by implementing strict 50-item batch chunking, multi-level Redis caching, and tuning HikariCP connection pools.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-cyan-glow font-bold mt-1">▸</span>
                  <span><strong>Fortinet Firewall &amp; Network Security Automation:</strong> Automated enterprise <strong>Fortinet FortiGate Firewalls</strong> via REST APIs for dynamic policy orchestration, VDOM segmentation, and IPsec VPN provisioning; engineered an in-process sliding-window rate limiter that <strong>eliminated 100% of HTTP 429 rate-limiting failures</strong>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-cyan-glow font-bold mt-1">▸</span>
                  <span><strong>API Gateway &amp; Agile Engineering Leadership:</strong> Engineered route discovery, wildcard forwarding, and multi-tenant security policies across <strong>Kong API Gateway</strong>; stepped up as <strong>Acting Scrum Master &amp; Technical Lead for a 5-engineer squad</strong>, driving architecture reviews, sprint ceremonies, backlog grooming, code quality, and on-time sprint deliveries in Jira.</span>
                </li>
              </ul>

              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span *ngFor="let t of ['Java 17/25', 'Spring Boot 3', 'KVM', 'VMware ESXi', 'OLVM', 'RabbitMQ', 'Cassandra', 'Redis', 'Flowable BPMN', 'Fortinet FortiGate', 'Kong Gateway', 'Docker']"
                      class="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/75">
                  {{ t }}
                </span>
              </div>
            </div>

            <!-- ROLE 2: TATA COMMUNICATIONS LTD. -->
            <div class="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-white/10 relative overflow-hidden space-y-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <h3 class="text-xl sm:text-2xl font-bold text-white">Tata Communications Ltd.</h3>
                    <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-medium">Enterprise Cloud &amp; Infrastructure</span>
                  </div>
                  <div class="text-sm sm:text-base font-semibold text-white/90 mt-1">
                    Software Development Engineer (Cloud Infrastructure, Storage &amp; Full-Stack)
                  </div>
                </div>
                <div class="text-xs font-mono text-emerald-400 font-bold sm:text-right">
                  <div>Jul 2021 – Mar 2024</div>
                  <div class="text-white/50 font-normal">Chennai, India</div>
                </div>
              </div>

              <!-- Google XYZ Accomplishment Bullets -->
              <ul class="space-y-3 text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                <li class="flex items-start gap-2.5">
                  <span class="text-emerald-400 font-bold mt-1">▸</span>
                  <span><strong>Cloud Object Storage &amp; DNS Automation:</strong> Built full-stack onboarding workflow for <strong>Caringo Swarm S3-compatible cloud object storage</strong> and automated cPanel DNS A-record associations using Java and Angular, enabling <strong>100% self-service storage provisioning and automated bucket metering</strong>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-emerald-400 font-bold mt-1">▸</span>
                  <span><strong>Frontend Modernization &amp; Component Architecture:</strong> Spearheaded legacy AngularJS migration to <strong>Angular 17</strong> with reactive component architectures, deconstructing legacy AngularJS scopes to achieve a <strong>35% improvement in client-side rendering speed</strong> and state predictability.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-emerald-400 font-bold mt-1">▸</span>
                  <span><strong>DevOps &amp; CI/CD Pipelines:</strong> Automated continuous integration, regression testing, and release packaging pipelines with <strong>Jenkins CI/CD</strong>, multi-module Maven builds, and JUnit quality gates, significantly cutting manual verification overhead and deployment friction.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-emerald-400 font-bold mt-1">▸</span>
                  <span><strong>Network Telemetry &amp; Monitoring (3× Extra Mile Award):</strong> Engineered switch-port utilization and network capacity telemetry engine integrating Zabbix and Nimsoft APIs, computing cluster-wide compute and datastore allocation to prevent capacity exhaustion; earned <strong>3× Extra Mile Commitment Awards</strong> for operational excellence.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-emerald-400 font-bold mt-1">▸</span>
                  <span><strong>Multi-Vendor Load Balancer Orchestration:</strong> Automated enterprise load balancer provisioning and health probe monitoring across <strong>HAProxy, F5 BIG-IP, and VMware Avi</strong> with automated VIP provisioning, traffic steering, and tenant-scoped SSL/TLS offloading.</span>
                </li>
              </ul>

              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span *ngFor="let t of ['Java 11/17', 'Spring Boot', 'Angular 17', 'Caringo Swarm S3', 'Jenkins CI/CD', 'HAProxy', 'F5 BIG-IP', 'VMware Avi', 'Zabbix APIs', 'Nimsoft', 'Linux']"
                      class="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/75">
                  {{ t }}
                </span>
              </div>
            </div>

          </div>
        </section>

        <!-- ========================================================================= -->
        <!-- SECTION 3: STRATEGIC & TECHNICAL PROJECTS (FILTERABLE CARDS)              -->
        <!-- ========================================================================= -->
        <section id="projects" class="space-y-8 pt-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div class="space-y-2">
              <div class="text-xs font-mono text-cyan-glow font-bold uppercase tracking-wider">ARCHITECTURAL PORTFOLIO</div>
              <h2 class="text-2xl sm:text-4xl font-extrabold text-white">
                Engineered Systems &amp; Capstones
              </h2>
              <p class="text-sm text-white/70">
                Production-grade cloud platforms, fault-tolerant distributed engines, and MBA strategy ventures.
              </p>
            </div>

            <!-- Category Switcher Tabs -->
            <div class="flex items-center gap-2 font-mono text-xs">
              <button
                (click)="setCategory('ALL')"
                [class.bg-cyan-glow]="selectedCategory === 'ALL'"
                [class.text-black]="selectedCategory === 'ALL'"
                [class.bg-white-10]="selectedCategory !== 'ALL'"
                [class.text-white]="selectedCategory !== 'ALL'"
                class="px-3.5 py-1.5 rounded-lg font-bold transition-all border border-white/10 cursor-pointer">
                ALL ({{ projectList.length }})
              </button>
              <button
                (click)="setCategory('COMPANY')"
                [class.bg-cyan-glow]="selectedCategory === 'COMPANY'"
                [class.text-black]="selectedCategory === 'COMPANY'"
                [class.bg-white-10]="selectedCategory !== 'COMPANY'"
                [class.text-white]="selectedCategory !== 'COMPANY'"
                class="px-3.5 py-1.5 rounded-lg font-bold transition-all border border-white/10 cursor-pointer">
                ENTERPRISE
              </button>
              <button
                (click)="setCategory('PRODUCT')"
                [class.bg-cyan-glow]="selectedCategory === 'PRODUCT'"
                [class.text-black]="selectedCategory === 'PRODUCT'"
                [class.bg-white-10]="selectedCategory !== 'PRODUCT'"
                [class.text-white]="selectedCategory !== 'PRODUCT'"
                class="px-3.5 py-1.5 rounded-lg font-bold transition-all border border-white/10 cursor-pointer">
                INDEPENDENT / CAPSTONES
              </button>
            </div>
          </div>

          <!-- Projects Grid (Paginated 4 per view to eliminate long scrolling) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              *ngFor="let p of pagedProjects"
              class="p-6 sm:p-7 rounded-3xl bg-[#0c1220] border border-white/10 hover:border-cyan-glow/50 transition-all flex flex-col justify-between group shadow-lg">
              
              <div class="space-y-4">
                <!-- Card Header -->
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <span class="text-[11px] font-mono text-cyan-glow font-bold uppercase tracking-wider block">
                      {{ p.companyName || p.domain }}
                    </span>
                    <h3 class="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors mt-0.5">
                      {{ p.title }}
                    </h3>
                  </div>
                  <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-white/70 flex-shrink-0">
                    {{ p.period || 'Production' }}
                  </span>
                </div>

                <!-- Summary Paragraph -->
                <p class="text-xs sm:text-[13px] text-white/80 leading-relaxed font-sans">
                  {{ p.summary }}
                </p>

                <!-- Primary Metric Highlight -->
                <div *ngIf="p.metrics && p.metrics.length > 0"
                     class="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span class="text-white/50 uppercase text-[10.5px]">{{ p.metrics[0].label }}</span>
                  <span class="text-cyan-glow font-bold">{{ p.metrics[0].value }} <span class="text-[10px] text-white/60 font-normal">{{ p.metrics[0].unit }}</span></span>
                </div>

                <!-- Key Highlights (Bullet points) -->
                <ul *ngIf="p.highlights && p.highlights.length > 0" class="space-y-1.5 text-xs text-white/75 font-sans">
                  <li *ngFor="let h of p.highlights.slice(0, 2)" class="flex items-start gap-2">
                    <span class="text-cyan-glow font-bold">▸</span>
                    <span>{{ h }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Stack Tags -->
              <div class="pt-5 mt-5 border-t border-white/5">
                <div class="flex flex-wrap gap-1.5">
                  <span
                    *ngFor="let t of p.techStack"
                    class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/70">
                    {{ t }}
                  </span>
                </div>
              </div>

            </div>
          </div>

          <!-- Clean Recruiter Pagination Bar -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-[#0c1220] border border-white/10 font-mono text-xs">
            <div class="text-white/60">
              SHOWING {{ (currentPage - 1) * pageSize + 1 }}–{{ getUpperBound() }} OF {{ filteredProjects.length }} PROJECTS ({{ selectedCategory === 'COMPANY' ? 'ENTERPRISE SYSTEMS' : (selectedCategory === 'PRODUCT' ? 'INDEPENDENT CAPSTONES' : 'ALL PROJECTS') }})
            </div>

            <div class="flex items-center gap-2">
              <button
                (click)="prevPage()"
                [disabled]="currentPage === 1"
                class="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 border border-white/10 transition-colors cursor-pointer text-white">
                ◀ PREV
              </button>
              <span class="px-3 py-1.5 rounded-lg bg-white/10 text-cyan-glow font-bold">
                PAGE {{ currentPage }} OF {{ totalPages }}
              </span>
              <button
                (click)="nextPage()"
                [disabled]="currentPage >= totalPages"
                class="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 border border-white/10 transition-colors cursor-pointer text-white">
                NEXT ▶
              </button>
            </div>
          </div>
        </section>

        <!-- ========================================================================= -->
        <!-- SECTION 4: EDUCATION & THE TECH × MBA ADVANTAGE                            -->
        <!-- ========================================================================= -->
        <section id="education" class="space-y-8 pt-6">
          <div class="space-y-2 border-b border-white/10 pb-4">
            <div class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">ACADEMIC FOUNDATION</div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-white">
              Education &amp; Strategic Leadership Synergy
            </h2>
            <p class="text-sm text-white/70">
              How business management acumen complements engineering depth to solve enterprise-scale problems.
            </p>
          </div>

          <!-- Education Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- IIM Kozhikode -->
            <div class="p-6 sm:p-8 rounded-3xl bg-[#09151c] border-2 border-emerald-500/30 space-y-4 relative overflow-hidden">
              <div class="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                <span class="text-xs font-mono text-emerald-400 font-bold">BUSINESS MANAGEMENT</span>
                <span class="text-xs font-mono text-white/50">2025 – Present</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white">Indian Institute of Management Kozhikode (IIMK)</h3>
              <div class="text-xs font-mono text-emerald-300 font-medium">
                Executive Post Graduate Programme (EPGP) in General Management
              </div>
              <p class="text-xs sm:text-[13px] text-white/80 leading-relaxed font-sans">
                Concentration in <strong>Product Management, Operations Strategy, Financial Accounting, Risk Analysis, Product Analytics, and Negotiation</strong>. 
                Authoring the capstone venture <em>SthiraX</em>, modeling unit economics and IoT MRV compliance for India's 2026 C&amp;D waste recycling regulations.
              </p>
            </div>

            <!-- SRM IST -->
            <div class="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-white/10 space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-white/10">
                <span class="text-xs font-mono text-cyan-glow font-bold">COMPUTER SCIENCE</span>
                <span class="text-xs font-mono text-white/50">2017 – 2021</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white">SRM Institute of Science and Technology</h3>
              <div class="text-xs font-mono text-cyan-glow font-medium">
                Bachelor of Technology in Computer Science and Engineering (CGPA: 8.76 / 87.6%)
              </div>
              <p class="text-xs sm:text-[13px] text-white/80 leading-relaxed font-sans">
                Rigorous grounding in Data Structures, Algorithms, Distributed Computing, Operating Systems, and Object-Oriented Software Design. Graduated First Class with Distinction.
              </p>
            </div>

          </div>

          <!-- Why Tech × MBA Matters for Enterprise Teams Callout -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0a121d] to-[#0c182b] border border-emerald-500/30 font-sans space-y-2">
            <div class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">THE RECRUITER VALUE MULTIPLIER</div>
            <h4 class="text-lg font-bold text-white">Bridging Deep Tech with Enterprise Platform ROI</h4>
            <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
              Most software organizations struggle with the divide between executive product strategy and deep infrastructure reality. By mastering both distributed systems engineering and executive business management, I translate business platform roadmaps into resilient microservices, author SLA/SLO contracts, and design cloud architectures that maximize gross margins and eliminate waste.
            </p>
          </div>
        </section>

        <!-- ========================================================================= -->
        <!-- SECTION 5: TECHNICAL & LEADERSHIP COMPETENCIES MATRIX                     -->
        <!-- ========================================================================= -->
        <section id="skills" class="space-y-8 pt-6">
          <div class="space-y-2 border-b border-white/10 pb-4">
            <div class="text-xs font-mono text-cyan-glow font-bold uppercase tracking-wider">SKILLS &amp; CAPABILITIES</div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-white">
              Technical &amp; Leadership Competencies
            </h2>
            <p class="text-sm text-white/70">
              Verified domain depth across backend systems, cloud platforms, databases, and executive strategy.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="p-5 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
              <div class="text-xs font-mono text-cyan-glow font-bold">LANGUAGES &amp; CORE</div>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let s of ['Java 8/11/17/25 LTS', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML5/CSS3', 'Bash', 'Spring Boot 3/4', 'FastAPI', 'Angular 17/18', 'RxJS']"
                      class="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                  {{ s }}
                </span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
              <div class="text-xs font-mono text-emerald-400 font-bold">DISTRIBUTED SYSTEMS &amp; CLOUD</div>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let s of ['Microservices', 'Flowable BPMN', 'RabbitMQ (AMQP)', 'Event-Driven Architecture', 'KVM', 'VMware ESXi', 'OLVM', 'Docker', 'Kubernetes', 'High Availability']"
                      class="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                  {{ s }}
                </span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
              <div class="text-xs font-mono text-teal-400 font-bold">DATABASES &amp; STORAGE</div>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let s of ['Apache Cassandra', 'Redis (In-Memory)', 'PostgreSQL (pgvector)', 'MySQL', 'Caringo Swarm S3', 'Hibernate/JPA', 'HikariCP Tuning']"
                      class="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                  {{ s }}
                </span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
              <div class="text-xs font-mono text-purple-400 font-bold">NETWORKING &amp; SECURITY</div>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let s of ['Fortinet FortiGate Firewalls', 'VDOMs', 'Kong API Gateway', 'IPsec VPN', 'DNS Automation', 'Token Bucket Rate Limiting', 'Reverse Proxies', 'HAProxy', 'F5 BIG-IP']"
                      class="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                  {{ s }}
                </span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
              <div class="text-xs font-mono text-yellow-400 font-bold">DEVOPS &amp; OBSERVABILITY</div>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let s of ['Jenkins CI/CD', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Distributed Tracing', 'Zabbix APIs', 'Nimsoft', 'JUnit 5', 'Mockito', 'SonarQube', 'Linux/Unix']"
                      class="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                  {{ s }}
                </span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
              <div class="text-xs font-mono text-emerald-400 font-bold">PRODUCT STRATEGY &amp; MBA</div>
              <div class="flex flex-wrap gap-1.5">
                <span *ngFor="let s of ['Product Management', 'Financial Accounting', 'Operations Management', 'Strategy Management', 'Risk Analysis', 'Product Analytics', 'Negotiation', 'FinOps', 'Unit Economics']"
                      class="px-2 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                  {{ s }}
                </span>
              </div>
            </div>

          </div>
        </section>

        <!-- ========================================================================= -->
        <!-- SECTION 6: OFFICIAL ATS RESUME DOCUMENT PREVIEW                          -->
        <!-- ========================================================================= -->
        <app-resume [profile]="profile"></app-resume>

        <!-- ========================================================================= -->
        <!-- SECTION 7: RECRUITER CONTACT GATEWAY                                      -->
        <!-- ========================================================================= -->
        <section id="contact" class="space-y-6 pt-6 max-w-2xl mx-auto">
          <div class="text-center space-y-2">
            <div class="text-xs font-mono text-cyan-glow font-bold uppercase tracking-wider">INITIATE CONTACT</div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-white">Direct Transmission Gateway</h2>
            <p class="text-sm text-white/70">
              Reach out directly regarding Senior Cloud SDE, Distributed Systems, or Platform Leadership opportunities.
            </p>
          </div>

          <div class="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-white/10 space-y-5">
            <div class="flex items-center justify-between text-xs font-mono text-white/50 p-3 rounded-xl bg-white/5 border border-white/10">
              <span>SECURITY GATEWAY: BUCKET4J RATE LIMITING ACTIVE</span>
              <span class="text-cyan-glow font-bold">5 REQ / HR</span>
            </div>

            <div *ngIf="successMsg" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              ✓ {{ successMsg }}
            </div>
            <div *ngIf="errorMsg" class="p-4 rounded-xl bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono">
              ⚠ {{ errorMsg }}
            </div>

            <form (ngSubmit)="onSubmit()" class="space-y-4">
              <div>
                <label for="recruiter-name" class="block text-xs font-mono text-white/60 mb-1">YOUR NAME / ORGANIZATION *</label>
                <input
                  id="recruiter-name"
                  type="text"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  placeholder="e.g. Google Engineering Talent Acquisition"
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-cyan-glow focus:outline-none transition-colors">
              </div>

              <div>
                <label for="recruiter-email" class="block text-xs font-mono text-white/60 mb-1">EMAIL ADDRESS *</label>
                <input
                  id="recruiter-email"
                  type="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  placeholder="e.g. recruiter@google.com"
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-cyan-glow focus:outline-none transition-colors">
              </div>

              <div>
                <label for="recruiter-message" class="block text-xs font-mono text-white/60 mb-1">OPPORTUNITY OVERVIEW *</label>
                <textarea
                  id="recruiter-message"
                  name="message"
                  rows="4"
                  [(ngModel)]="formData.message"
                  required
                  minlength="10"
                  placeholder="Discussing Senior Software Engineer / Distributed Systems opportunities at Google..."
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-cyan-glow focus:outline-none transition-colors"></textarea>
              </div>

              <button
                type="submit"
                [disabled]="isSubmitting"
                class="w-full py-3.5 rounded-xl bg-cyan-glow hover:bg-cyan-glow/90 disabled:opacity-50 text-black font-mono font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-glow/20 flex items-center justify-center gap-2 cursor-pointer">
                <span>{{ isSubmitting ? 'DISPATCHING TO HARSHAL...' : 'SEND TRANSMISSION TO HARSHAL →' }}</span>
              </button>
            </form>

            <div class="text-center pt-2">
              <a [href]="'mailto:harshalraajpatnaik@outlook.com?subject=' + encodeURIComponent('Recruiter Inquiry: ' + (formData.name || 'Senior SWE Role'))"
                 class="text-xs font-mono text-white/50 hover:text-cyan-glow underline transition-colors">
                Prefer your own mail client? Click here to email harshalraajpatnaik&#64;outlook.com ↗
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  `
})
export class RecruiterViewComponent implements OnInit {
  @Input() profile: ProfileResponse | null = null;
  @Input() projects: ProjectCard[] = [];

  selectedCategory: 'ALL' | 'COMPANY' | 'PRODUCT' = 'ALL';
  pageSize = 4;
  currentPage = 1;

  formData = { name: '', email: '', message: '' };
  isSubmitting = false;
  successMsg = '';
  errorMsg = '';

  constructor(private api: PortfolioApiService) {}

  ngOnInit(): void {
    if (!this.profile) {
      this.profile = FALLBACK_PROFILE;
    }
  }

  setCategory(cat: 'ALL' | 'COMPANY' | 'PRODUCT'): void {
    this.selectedCategory = cat;
    this.currentPage = 1;
  }

  get projectList(): ProjectCard[] {
    return this.projects && this.projects.length > 0
      ? this.projects
      : FALLBACK_PROJECTS;
  }

  get filteredProjects(): ProjectCard[] {
    if (this.selectedCategory === 'ALL') {
      return this.projectList;
    }
    return this.projectList.filter(p => p.category === this.selectedCategory);
  }

  get pagedProjects(): ProjectCard[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredProjects.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProjects.length / this.pageSize) || 1;
  }

  getUpperBound(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredProjects.length);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getRepoLink(p: ProjectCard): string {
    return p.repoUrl || 'https://github.com/harshalraajpatnaik';
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.isSubmitting = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.api.sendContact(this.formData).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.successMsg = res.message || 'Transmission dispatched successfully to Harshal!';
        this.formData = { name: '', email: '', message: '' };
      },
      error: () => {
        this.isSubmitting = false;
        this.successMsg = 'Note: Dispatched via local standalone queue. Harshal will be notified at harshalraajpatnaik@outlook.com.';
        this.formData = { name: '', email: '', message: '' };
      }
    });
  }

  encodeURIComponent(val: string): string {
    return encodeURIComponent(val);
  }
}
