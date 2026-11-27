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
            <span>Harshal_Raaj_Patnaik_Resume.tex (Executive ATS LaTeX Format)</span>
            <span class="text-energy">LaTeX 2e</span>
          </div>
          <pre class="overflow-x-auto text-white/80 p-4 rounded-xl bg-black/60 max-h-[400px] leading-relaxed"><code>{{ latexSourceCode }}</code></pre>
        </div>

        <!-- Mobile Horizontal Swipe Tip -->
        <div class="sm:hidden mb-3 text-center text-xs font-mono text-energy/90 flex items-center justify-center gap-1.5 bg-energy/10 border border-energy/30 py-2 px-3 rounded-xl">
          <span>📱</span>
          <span>Swipe horizontally to inspect full document width</span>
        </div>

        <!-- Scrollable Document Wrapper for Mobile/Tablet Screens -->
        <div class="overflow-x-auto pb-4 -mx-2 sm:mx-0 rounded-2xl overscroll-x-contain" style="-webkit-overflow-scrolling: touch;">
          <!-- Visual 1-Page ATS Document Rendering -->
          <div class="min-w-[640px] sm:min-w-0 bg-white text-black p-6 sm:p-10 lg:p-12 rounded-2xl shadow-2xl relative font-serif text-[12.5px] leading-snug border border-slate-300">
          
          <!-- Document Header -->
          <div class="text-center mb-3">
            <h1 class="text-2xl sm:text-3xl font-bold tracking-wider mb-0.5" style="font-variant: small-caps;">
              HARSHAL RAAJ PATNAIK
            </h1>
            <div class="text-[10.5px] font-bold text-slate-800 mb-1">
              Senior Lead Software Engineer &amp; Cloud Architect | Technical Product Strategy &amp; Engineering Leadership (Tech × MBA)
            </div>
            <div class="text-[10px] text-slate-700 leading-normal">
              +91-9982143442 &nbsp;~&nbsp;
              <a href="mailto:harshalraajpatnaik&#64;outlook.com" class="underline text-black">harshalraajpatnaik&#64;outlook.com</a> &nbsp;~&nbsp;
              <a href="https://linkedin.com/in/harshalraajpatnaik/" target="_blank" rel="noopener noreferrer" class="underline text-black">linkedin.com/in/harshalraajpatnaik</a> &nbsp;~&nbsp;
              <a href="https://github.com/harshalraajpatnaik" target="_blank" rel="noopener noreferrer" class="underline text-black">github.com/harshalraajpatnaik</a> &nbsp;~&nbsp;
              <a href="https://harshalraajpatnaik.pages.dev/" target="_blank" rel="noopener noreferrer" class="underline text-black">harshalraajpatnaik.pages.dev</a>
            </div>
          </div>

          <!-- SECTION: EDUCATION -->
          <div class="mb-3.5">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1.5" style="font-variant: small-caps;">
              Education
            </div>
            <div class="mb-1.5">
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
          <div class="mb-3.5">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1.5" style="font-variant: small-caps;">
              Professional Experience
            </div>

            <!-- NOVAMESH LTD. -->
            <div class="mb-3.5">
              <div class="flex justify-between items-baseline font-bold text-[11px]">
                <span>Novamesh Ltd. (Wholly Owned Subsidiary of Tata Communications)</span>
                <span class="text-right">Apr 2024 – Present</span>
              </div>
              <div class="flex justify-between items-baseline italic text-[10px] text-slate-800 mb-1">
                <span>Senior Software Engineer (Cloud Platforms &amp; Distributed Infrastructure)</span>
                <span class="text-right">Chennai, India</span>
              </div>
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900">
                <li><strong>Scaled VM Dynamic Autoscaling &amp; Reliability:</strong> <em>Scaled</em> fault-tolerant horizontal and vertical VM autoscaling policies across <strong>KVM, VMware ESXi, and OLVM</strong> clusters using real-time CPU and memory thresholds, sustaining <strong>99.95% workload SLA</strong> with zero out-of-memory downtime during traffic bursts.</li>
                <li><strong>Built Automated Order-to-Deployment Pipeline:</strong> <em>Architected</em> an end-to-end, zero-touch order fulfillment pipeline converting customer service requests into self-healing cloud deployments; orchestrated <strong>Flowable BPMN sagas</strong> and <strong>RabbitMQ</strong> across compute, storage, and IP routing to slash provisioning lead time by <strong>85% (from 4 hours to under 35 minutes)</strong>.</li>
                <li><strong>Designed Capacity &amp; Infrastructure Telemetry Platform:</strong> <em>Designed</em> and delivered a multi-tenant Capacity Planning &amp; Inventory platform unifying real-time lifecycle telemetry across compute clusters (<strong>KVM, ESXi, OLVM</strong>), enterprise storage &amp; file systems (<strong>NetApp, HPE, Caringo Swarm</strong>), databases, and network pools with interactive utilization analytics.</li>
                <li><strong>Engineered High-Throughput Batch Processing:</strong> <em>Engineered</em> distributed batch-processing optimizations across <strong>Apache Cassandra</strong> clusters using 50-item chunking, multi-level <strong>Redis</strong> caching, and <strong>HikariCP</strong> pool tuning, cutting cloud scheduler execution latency by <strong>92.6% (from ~18 minutes to 80 seconds)</strong>.</li>
                <li><strong>Led Edge Security, API Design &amp; Team Supervision:</strong> <em>Led</em> edge routing and <strong>Fortinet FortiGate</strong> firewall/IPsec VPN automation across <strong>Kong API Gateway</strong> (rate limiter <strong>eliminating 100% of HTTP 429 errors</strong>); served as <strong>Acting Scrum Master &amp; Squad Lead (5 engineers)</strong>, vetting distributed microservice designs via <strong>PRDs &amp; technical RFCs</strong>, prioritizing <strong>product backlogs</strong>, and enforcing <strong>SLO/SLI</strong> reliability standards.</li>
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
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900">
                <li><strong>Built Cloud Object Storage &amp; DNS Automation:</strong> <em>Built</em> a full-stack self-service onboarding platform for <strong>Caringo Swarm S3-compatible object storage</strong> with automated DNS A-record provisioning in Java and Angular, enabling <strong>100% self-service bucket lifecycle management and automated metering</strong>.</li>
                <li><strong>Scaled Frontend Modernization:</strong> <em>Spearheaded</em> the migration from legacy AngularJS to <strong>Angular 17</strong> using reactive component architectures and modular state management, improving <strong>client-side rendering speed by 35%</strong>.</li>
                <li><strong>Automated CI/CD, Release Governance &amp; Observability:</strong> <em>Automated</em> CI/CD build, regression, and cloud deployment pipelines using <strong>Jenkins</strong>, multi-module Maven, and JUnit quality gates, <strong>cutting release verification cycle time by ~60%</strong> while improving production troubleshooting and observability.</li>
                <li><strong>Analyzed Network Capacity &amp; Telemetry:</strong> <em>Built</em> a switch-port utilization and cluster capacity telemetry engine integrating <strong>Zabbix</strong> and <strong>Nimsoft</strong> APIs, preventing unplanned compute/datastore exhaustion across production clusters; awarded <strong>3× Extra Mile Commitment Awards</strong>.</li>
                <li><strong>Architected Multi-Vendor Load Balancer Orchestration:</strong> <em>Automated</em> enterprise load balancer provisioning, traffic steering, and SSL/TLS offloading across <strong>HAProxy, F5 BIG-IP, and VMware Avi</strong>, <strong>reducing VIP provisioning time by ~70%</strong>.</li>
              </ul>
            </div>
          </div>

          <!-- SECTION: STRATEGY & TECH PROJECTS -->
          <div class="mb-3.5">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1.5" style="font-variant: small-caps;">
              Strategy &amp; Technical Projects
            </div>

            <div class="mb-2">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>SthiraX: Distributed CO₂-Mineralization &amp; IoT MRV Platform</strong> | <em>IIM Kozhikode Capstone (BPP)</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/SthiraX" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Led</em> 0-to-1 ideation-to-execution of a <strong>SaaS &amp; Enterprise platform</strong> helping concrete plants meet India's <strong>April 2026 C&amp;D Waste Rules (5%–25% recycled mandate by 2030)</strong>; owned end-to-end <strong>product strategy, roadmap, and IoT MRV software</strong> generating verifiable Digital Product Passports.</li>
              </ul>
            </div>

            <div class="mb-2">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>MarginOS: Multi-Tenant Cloud FinOps &amp; Unit Economics Platform</strong> | <em>Cloud Economics &amp; FinOps</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/marginos" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Designed</em> a distributed FinOps intelligence engine analyzing multi-cloud hypervisor and storage telemetry to compute real-time gross margins and unit economics, surfacing automated right-sizing actions that eliminate up to <strong>28% in cloud spend leakages</strong>.</li>
              </ul>
            </div>

            <div class="mb-2">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>Workflow Reliability Lab: Distributed Sagas &amp; Chaos Engineering</strong> | <em>Distributed Systems Platform</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/Workflow-Reliability-Lab" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Built</em> a distributed microservice reliability platform with synthetic fault injection simulators (network partitions, timeout anomalies) and invariant checkers verifying ACID saga compensations (<strong>Java 25, Spring Boot 4, Angular, Docker</strong>).</li>
              </ul>
            </div>

            <div class="mb-2">
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>QueryLens AI: Generative AI Text-to-SQL &amp; Semantic LLM RAG</strong> | <em>Generative AI &amp; Data Systems</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/QueryLens-AI" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Built</em> an end-to-end <strong>Generative AI &amp; Large Language Model (LLM)</strong> Text-to-SQL engine (<strong>Angular 17 &rarr; Spring Boot 3 &rarr; FastAPI with pgvector RAG</strong>) using semantic schema search, AST validation, and read-only sandboxing to block SQL injection.</li>
              </ul>
            </div>

            <div>
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>CloudScale: Predictive Workload Autoscaler &amp; Telemetry Engine</strong> | <em>Autonomous Cloud Infrastructure</em></span>
                <span class="text-[10px] text-slate-600"><a href="https://github.com/harshalraajpatnaik/CloudScale" target="_blank" class="underline text-black font-semibold">GitHub ↗</a></span>
              </div>
              <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900 mt-0.5">
                <li><em>Developed</em> a proactive Kubernetes/VM capacity autoscaling engine integrating <strong>Prometheus, Grafana</strong>, and time-series ML forecasting models predicting compute spikes 15 minutes in advance, mitigating cold-start latencies and idle capacity.</li>
              </ul>
            </div>
          </div>

          <!-- SECTION: TECHNICAL SKILLS -->
          <div class="mb-3.5">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1.5" style="font-variant: small-caps;">
              Technical &amp; Leadership Competencies
            </div>
            <div class="text-[10px] space-y-1.5 text-slate-900 leading-normal">
              <div><strong>Languages, AI &amp; Core:</strong> Java (8/11/17/25 LTS), Python (NumPy, Pandas, Scikit-learn), TypeScript, JavaScript, SQL, Bash, Spring Boot 3/4, FastAPI, Angular 17/18, RxJS, Generative AI, Large Language Models (LLM), RAG</div>
              <div><strong>Architecture &amp; Cloud:</strong> API Design &amp; Distributed Microservices, Fault-Tolerant Systems, Flowable BPMN, RabbitMQ (AMQP), Event-Driven Architecture, KVM, VMware ESXi, OLVM, Cluster Management, Docker, Kubernetes</div>
              <div><strong>Databases, Storage &amp; Analytics:</strong> Apache Cassandra, Redis (In-Memory), PostgreSQL (pgvector), MySQL, Caringo Swarm (S3 Object Storage), File Systems, NetApp &amp; HPE Storage, Data Analytics, Hibernate/JPA, HikariCP</div>
              <div><strong>Networking, Security &amp; Gateways:</strong> TCP/IP, DNS, IPsec VPN, QoS, Reverse Proxies, Kong API Gateway, Fortinet FortiGate (VDOMs), Token Bucket Rate Limiting, HAProxy, F5 BIG-IP, VMware Avi</div>
              <div><strong>DevOps, SRE &amp; Observability:</strong> REST, OpenAPI, Jenkins CI/CD, Cloud Deployment, Prometheus, Grafana, OpenTelemetry, SLO/SLI Frameworks, Troubleshooting, Performance Optimization, Zabbix, Nimsoft, JUnit 5, Mockito, SonarQube, Linux</div>
              <div><strong>Tech × Business &amp; Leadership:</strong> Program &amp; People Management, Cross-Functional Stakeholder &amp; Risk Mitigation, 0-to-1 Ideation to Execution, Product Management Lifecycle, Product Strategy &amp; Analytics, Operations &amp; Financial Accounting, Negotiation, Product Backlogs, SaaS, FinOps, KPIs, Agile, Jira</div>
            </div>
          </div>

          <!-- SECTION: HONORS & LEADERSHIP -->
          <div>
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1.5" style="font-variant: small-caps;">
              Leadership, Certifications &amp; Honors
            </div>
            <ul class="list-disc pl-4 space-y-1 text-[10px] leading-relaxed text-slate-900">
              <li><strong>Engineering Mentorship &amp; Stakeholder Alignment:</strong> Partnered with product and enterprise stakeholders to mitigate delivery risks, author technical RFCs, and mentor junior engineers through architecture and code reviews with 100% on-time sprint delivery.</li>
              <li><strong>Tech × Business Bridge (Product &amp; Engineering Alignment):</strong> Bridge the critical organizational gap between platform economics and deep systems engineering; translate P&amp;L, unit-cost FinOps targets, and 0-to-1 SaaS product strategy into resilient cloud architectures while aligning technical trade-offs with executive stakeholders.</li>
              <li><strong>3× Extra Mile Commitment Award</strong> – Tata Communications Ltd. for critical cloud platform delivery, stability, and zero-defect deployments.</li>
              <li><strong>Flipkart Grid 2.0 Engineering Challenge</strong> – Team Lead; achieved <strong>Top 150 Nationwide Rank</strong> out of 20,000+ teams (Computer Vision &amp; OCR Track).</li>
              <li><strong>Certifications:</strong> <strong>Architecting with Google Compute Engine</strong> (Google Cloud / GCP &mdash; Coursera) &amp; <strong>Full Stack Web Development</strong> (Coding Ninjas).</li>
            </ul>
          </div>

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
