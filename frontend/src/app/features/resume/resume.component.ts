import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProfileResponse } from '../../core/models/api.models';
import { PokemonAudioService } from '../../core/services/pokemon-audio.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="resume" class="py-24 px-4 sm:px-6 relative bg-black/60 border-t border-white/10">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center space-y-4 mb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-energy/40 bg-energy/10 text-energy text-xs font-mono font-bold">
            <span>OFFICIAL 1-PAGE ATS RESUME</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Curriculum <span class="gradient-text">Vitae</span>
          </h2>
          <p class="text-white/70 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Formatted strictly using the standard 1-page ATS layout.
            Grounded in genuine enterprise cloud engineering at Tata Communications and Executive MBA strategy at IIM Kozhikode.
          </p>

          <!-- Action Buttons Bar -->
          <div class="flex flex-wrap items-center justify-center gap-3 pt-3">
            <!-- Download Vector PDF -->
            <a href="assets/Harshal_Raaj_Patnaik_Resume.pdf"
               download="Harshal_Raaj_Patnaik_Resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               (click)="audio.playFanfare()"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold bg-crimson hover:bg-crimson/90 text-white shadow-xl shadow-crimson/30 transition-all">
              <span>DOWNLOAD VECTOR PDF</span>
              <span>📄</span>
            </a>

            <!-- Download LaTeX .tex Source -->
            <a href="assets/Harshal_Raaj_Patnaik_Resume.tex"
               download="Harshal_Raaj_Patnaik_Resume.tex"
               target="_blank"
               rel="noopener noreferrer"
               (click)="audio.playChirp()"
               class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold border border-energy/40 bg-energy/10 hover:bg-energy/20 text-energy transition-all">
              <span>DOWNLOAD .TEX SOURCE</span>
              <span>⚡</span>
            </a>

            <!-- Toggle LaTeX Code View -->
            <button
              (click)="showLatexSource = !showLatexSource; audio.playBeep()"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs text-white/70 hover:text-white border border-white/10 hover:border-white/30 bg-white/5 transition-all">
              <span>{{ showLatexSource ? 'HIDE LATEX CODE' : 'INSPECT LATEX CODE' }}</span>
              <span>{{ showLatexSource ? '▲' : '▼' }}</span>
            </button>
          </div>
        </div>

        <!-- Raw LaTeX Source Code Block (Collapsible) -->
        <div *ngIf="showLatexSource" class="mb-10 glass-card p-6 rounded-2xl border border-white/20 font-mono text-xs bg-black/90">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/50">
            <span>Harshal_Raaj_Patnaik_Resume.tex (Google-Standard ATS LaTeX Format)</span>
            <span class="text-energy">LaTeX 2e</span>
          </div>
          <pre class="overflow-x-auto text-white/80 p-4 rounded-xl bg-black/60 max-h-[400px] leading-relaxed"><code>{{ latexSourceCode }}</code></pre>
        </div>

        <!-- Visual 1-Page ATS Document Rendering -->
        <div class="bg-white text-black p-8 sm:p-12 rounded-2xl shadow-2xl relative font-serif text-[12.5px] leading-snug border border-slate-300">
          
          <!-- Document Header -->
          <div class="text-center mb-3">
            <h1 class="text-2xl sm:text-3xl font-bold tracking-wider mb-0.5" style="font-variant: small-caps;">
              HARSHAL RAAJ PATNAIK
            </h1>
            <div class="text-[10.5px] font-bold text-slate-800 mb-1">
              Senior Software Engineer &amp; Platform Architect | Cloud Infrastructure, Distributed Systems &amp; Product Strategy (Tech × MBA)
            </div>
            <div class="text-[10px] text-slate-700 leading-normal">
              +91-9982143442 &nbsp;~&nbsp;
              <a href="mailto:harshalraajpatnaik&#64;outlook.com" class="underline text-black">harshalraajpatnaik&#64;outlook.com</a> &nbsp;~&nbsp;
              <a href="https://linkedin.com/in/harshalraajpatnaik/" target="_blank" rel="noopener noreferrer" class="underline text-black">linkedin.com/in/harshalraajpatnaik</a> &nbsp;~&nbsp;
              <a href="https://github.com/harshalraajpatnaik" target="_blank" rel="noopener noreferrer" class="underline text-black">github.com/harshalraajpatnaik</a>
            </div>
          </div>

          <!-- SECTION: EDUCATION -->
          <div class="mb-3">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Education
            </div>
            <div class="mb-1">
              <div class="flex justify-between items-baseline font-bold text-[11px]">
                <span>Indian Institute of Management Kozhikode (IIMK)</span>
                <span class="text-right">2025 – Present</span>
              </div>
              <div class="flex justify-between items-baseline italic text-[10px] text-slate-800">
                <span>Executive Post Graduate Programme (EPGP) in General Management – Product Strategy, Finance &amp; Operations</span>
                <span class="text-right">Kochi, India</span>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-baseline font-bold text-[11px]">
                <span>SRM Institute of Science and Technology</span>
                <span class="text-right">2017 – 2021</span>
              </div>
              <div class="flex justify-between items-baseline italic text-[10px] text-slate-800">
                <span>Bachelor of Technology in Computer Science and Engineering (CGPA: 8.76 / 87.6%)</span>
                <span class="text-right">Chennai, India</span>
              </div>
            </div>
          </div>

          <!-- SECTION: EXPERIENCE -->
          <div class="mb-3">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Professional Experience
            </div>

            <!-- NOVAMESH LTD. -->
            <div class="mb-2">
              <div class="flex justify-between items-baseline font-bold text-[11px]">
                <span>Novamesh Ltd. (Wholly Owned Subsidiary of Tata Communications)</span>
                <span class="text-right">Apr 2024 – Present</span>
              </div>
              <div class="flex justify-between items-baseline italic text-[10px] text-slate-800 mb-1">
                <span>Senior Software Engineer (Cloud Platforms &amp; Distributed Infrastructure)</span>
                <span class="text-right">Chennai, India</span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900">
                <li><strong>Scaled VM Dynamic Autoscaling:</strong> <em>Scaled</em> dynamic VM horizontal and vertical autoscaling policies across <strong>KVM, VMware ESXi, and OLVM</strong> hypervisors based on real-time CPU/memory thresholds, preventing resource starvation during traffic bursts.</li>
                <li><strong>Built Automated Order-to-Deployment Pipeline:</strong> <em>Built</em> end-to-end zero-touch order fulfillment pipeline converting customer service orders into automated, self-healing cloud deployments; integrated <strong>Flowable BPMN sagas</strong> and <strong>RabbitMQ</strong> to orchestrate VM provisioning, storage provisioning, network routing, and IP assignment with automated rollbacks, slashing customer provisioning lead time by <strong>85% (from 4 hours to under 35 minutes)</strong>.</li>
                <li><strong>Designed Capacity &amp; Infrastructure Dashboard:</strong> <em>Designed</em> and engineered full-stack multi-tenant Capacity Planning &amp; Inventory Dashboard from design to distributed backend services, managing real-time lifecycle records across <strong>Compute</strong> (KVM, VMware ESXi, OLVM hypervisors), <strong>Storage</strong> (NetApp and HPE storage arrays, Caringo Swarm), and <strong>Network</strong> (public IP pool reports, switch port mappings, VDOM reports, bandwidth utilization telemetry) with interactive graphical heatmaps and trend analytics.</li>
                <li><strong>Engineered High-Throughput Batch Processing:</strong> <em>Engineered</em> batch processing optimizations slashing cloud scheduler execution latency by <strong>92.6% (from ~18 minutes down to 80 seconds)</strong> across distributed Cassandra clusters using strict 50-item chunking, multi-level Redis caching, and HikariCP connection pool tuning.</li>
                <li><strong>Led Kong API Gateway &amp; Fortinet Firewall Automation:</strong> <em>Led</em> enterprise edge routing and security automation across <strong>Kong API Gateway</strong> and <strong>Fortinet FortiGate Firewalls</strong>; engineered dynamic route discovery, wildcard forwarding, and IPsec VPNs via REST APIs while implementing an in-process sliding-window rate limiter that <strong>eliminated 100% of HTTP 429 throttling errors</strong>.</li>
              </ul>
            </div>

            <!-- TATA COMMUNICATIONS LTD. -->
            <div>
              <div class="flex justify-between items-baseline font-bold text-[11px]">
                <span>Tata Communications Ltd.</span>
                <span class="text-right">Jul 2021 – Mar 2024</span>
              </div>
              <div class="flex justify-between items-baseline italic text-[10px] text-slate-800 mb-1">
                <span>Software Development Engineer (Cloud Infrastructure, Storage &amp; Full-Stack)</span>
                <span class="text-right">Chennai, India</span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900">
                <li><strong>Built Cloud Object Storage &amp; DNS Automation:</strong> <em>Built</em> full-stack onboarding workflow for <strong>Caringo Swarm S3-compatible cloud object storage</strong> and automated cPanel DNS A-record associations using Java and Angular, enabling <strong>100% self-service storage provisioning and automated bucket metering</strong>.</li>
                <li><strong>Scaled Frontend Modernization:</strong> <em>Scaled</em> legacy AngularJS migration to <strong>Angular 17</strong> with reactive component architectures, state predictability, and modular testability, achieving a <strong>35% improvement in client-side rendering speed</strong>.</li>
                <li><strong>Automated CI/CD &amp; Multi-Cloud Deployment:</strong> <em>Automated</em> continuous integration, regression testing, and release packaging pipelines with <strong>Jenkins CI/CD</strong>, multi-module Maven builds, and JUnit quality gates, significantly cutting manual verification overhead and deployment friction.</li>
                <li><strong>Analyzed Network Telemetry &amp; Monitoring:</strong> <em>Analyzed</em> and engineered switch-port utilization and network capacity telemetry engine integrating Zabbix and Nimsoft APIs, computing cluster-wide compute and datastore allocation to prevent capacity exhaustion; earned <strong>3× Extra Mile Commitment Awards</strong>.</li>
                <li><strong>Architected Multi-Vendor Load Balancer Orchestration:</strong> <em>Architected</em> enterprise load balancer provisioning and health probe monitoring across <strong>HAProxy, F5 BIG-IP, and VMware Avi</strong> with automated VIP provisioning, traffic steering, and tenant-scoped SSL/TLS offloading.</li>
              </ul>
            </div>
          </div>

          <!-- SECTION: STRATEGY & TECH PROJECTS -->
          <div class="mb-3">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Strategy &amp; Technical Projects
            </div>

            <div class="mb-1.5">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>SthiraX: Distributed CO₂-Mineralization &amp; IoT MRV Platform</strong> | <em>IIM Kozhikode Capstone (BPP)</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/sthirax-mrv" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Architected</em> asset-light retrofit platform converting regional concrete plants into certified low-carbon facilities to fulfill India's <strong>April 2026 C&amp;D Waste Rules (mandating 5% to 25% recycled material by 2030 across 20,000+ sqm projects)</strong>; built batch-level <strong>IoT MRV (Measurement, Reporting &amp; Verification) software</strong> generating cryptographically verifiable Digital Product Passports for developer EPR compliance, supported by SaaS and royalty unit economics.</li>
              </ul>
            </div>

            <div class="mb-1.5">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>MarginOS: Multi-Tenant Cloud FinOps &amp; Unit Economics Platform</strong> | <em>Cloud Economics &amp; FinOps</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/margin-os" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Designed</em> distributed FinOps intelligence engine analyzing multi-cloud hypervisor and storage telemetry to calculate real-time gross margins, compute unit economics (cost-per-VM/hour, storage tiers), and surface automated right-sizing recommendations that eliminate up to 28% in infrastructure spend leakages.</li>
              </ul>
            </div>

            <div class="mb-1.5">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>Workflow Reliability Lab: Distributed Sagas &amp; Chaos Engineering</strong> | <em>Distributed Systems Platform</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/workflow-reliability-lab" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Built</em> developer platform for testing distributed workflow reliability; built synthetic fault injection simulators (network partitions, timeout anomalies) and invariant checkers verifying ACID saga compensations (<strong>Java 25, Spring Boot 4, Angular, Docker</strong>).</li>
              </ul>
            </div>

            <div class="mb-1.5">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>QueryLens AI: Sandboxed Enterprise Text-to-SQL &amp; Semantic RAG</strong> | <em>AI &amp; Data Systems</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/querylens-ai" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Architected</em> modular C4 3-tier Text-to-SQL engine (<strong>Angular 17 &rarr; Spring Boot 3 &rarr; FastAPI with pgvector RAG</strong>) with schema semantic search, AST validation, and read-only sandbox roles preventing SQL injection and unauthorized data exfiltration.</li>
              </ul>
            </div>

            <div>
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>CloudScale: Predictive Workload Autoscaler &amp; Telemetry Engine</strong> | <em>Autonomous Cloud Infrastructure</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/cloudscale" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Developed</em> proactive Kubernetes/VM capacity autoscaling engine integrating Prometheus, Grafana, and time-series ML forecasting models (<strong>NumPy, Pandas, Scikit-learn</strong>) predicting compute resource spikes 15 minutes in advance, mitigating cold-start latencies and reducing over-provisioned idle capacity.</li>
              </ul>
            </div>
          </div>

          <!-- SECTION: TECHNICAL SKILLS -->
          <div class="mb-3">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Technical &amp; Leadership Competencies
            </div>
            <div class="text-[10px] space-y-0.5 text-slate-900 leading-normal">
              <div><strong>Languages &amp; Core:</strong> Java (8/11/17/25 LTS), Python (NumPy, Pandas, Scikit-learn, Matplotlib), TypeScript, JavaScript, SQL, HTML5/CSS3, Bash, Spring Boot 3/4, FastAPI, Angular 17/18, RxJS</div>
              <div><strong>Distributed Systems &amp; Cloud:</strong> Google Cloud Platform (GCP / Compute Engine), Microservices, Flowable BPMN, RabbitMQ (AMQP), Event-Driven Architecture, High Availability (HA), Fault Tolerance, KVM, VMware ESXi, OLVM, Docker, Kubernetes</div>
              <div><strong>Databases, Caching &amp; Storage:</strong> Apache Cassandra (NoSQL), Redis (In-Memory Cache), PostgreSQL (pgvector), MySQL, Caringo Swarm (S3 Object Storage), NetApp &amp; HPE Storage Arrays, Hibernate/JPA, HikariCP Tuning</div>
              <div><strong>Networking, Security &amp; Firewalls:</strong> Fortinet FortiGate Firewalls, VDOMs, Kong API Gateway, IPsec VPN, DNS Automation (cPanel/BIND), Token Bucket Rate Limiting, Reverse Proxies, HAProxy, F5 BIG-IP, VMware Avi</div>
              <div><strong>DevOps, SRE &amp; Observability:</strong> Jenkins CI/CD, CI/CD Pipelines, Prometheus, Grafana, OpenTelemetry, Distributed Tracing, Zabbix APIs, Nimsoft, JUnit 5, Mockito, SonarQube, Linux/Unix Administration</div>
              <div><strong>Product Management &amp; MBA Coursework:</strong> Product Strategy, Financial Accounting, Operations Management, Strategy Management, Risk Analysis, Product Analytics, Digital Marketing, Brand Strategy, Negotiation &amp; Conflict Management, FinOps, Jira (Agile/Scrum)</div>
            </div>
          </div>

          <!-- SECTION: HONORS & LEADERSHIP -->
          <div>
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Leadership, Certifications &amp; Honors
            </div>
            <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900">
              <li><strong>Leadership, Product &amp; Agile Strategy:</strong> Stepped up as <strong>Acting Scrum Master</strong>; orchestrated sprint ceremonies, backlog grooming, and delivery velocity in <strong>Jira</strong> (100% on-time milestone delivery); partnered with product managers and enterprise clients to define SLA/SLO baselines, author technical RFCs, and translate business platform roadmaps into resilient distributed microservices.</li>
              <li><strong>3× Extra Mile Commitment Award</strong> – Tata Communications Ltd. for critical cloud platform delivery, stability, and zero-defect deployments.</li>
              <li><strong>Flipkart Grid 2.0 Engineering Challenge</strong> – Team Lead; achieved <strong>Top 150 Nationwide Rank</strong> out of 20,000+ teams (Computer Vision &amp; OCR Track).</li>
              <li><strong>Certifications:</strong> <strong>Architecting with Google Compute Engine</strong> (Google Cloud / Coursera) &amp; <strong>Full Stack Web Development</strong> (Coding Ninjas).</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ResumeComponent implements OnInit {
  @Input() profile: ProfileResponse | null = null;
  showLatexSource = false;

  latexSourceCode = `% Loading live LaTeX source code...`;

  constructor(
    public audio: PokemonAudioService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('assets/Harshal_Raaj_Patnaik_Resume.tex', { responseType: 'text' }).subscribe({
      next: (tex) => {
        this.latexSourceCode = tex;
      },
      error: () => {
        this.latexSourceCode = `% Could not load local asset. Download full LaTeX file via: /api/v1/resume/latex`;
      }
    });
  }
}
