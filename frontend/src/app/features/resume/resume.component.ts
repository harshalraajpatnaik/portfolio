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
            <a href="http://localhost:8080/api/v1/resume/download"
               target="_blank"
               rel="noopener noreferrer"
               (click)="audio.playFanfare()"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold bg-crimson hover:bg-crimson/90 text-white shadow-xl shadow-crimson/30 transition-all">
              <span>DOWNLOAD VECTOR PDF</span>
              <span>📄</span>
            </a>

            <!-- Download LaTeX .tex Source -->
            <a href="http://localhost:8080/api/v1/resume/latex"
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
              Senior Full-Stack &amp; Cloud Systems Engineer | Technical Product &amp; Platform Lead
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
                <span>Executive Post Graduate Programme in Management (EPGPM) – Business Strategy, Platform Economics &amp; Operations</span>
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

            <div>
              <div class="flex justify-between items-baseline font-bold text-[11px]">
                <span>Tata Communications Ltd.</span>
                <span class="text-right">Jul 2021 – Present</span>
              </div>
              <div class="flex justify-between items-baseline italic text-[10px] text-slate-800 mb-1">
                <span>Software Development Engineer (Full-Stack &amp; Cloud Platforms)</span>
                <span class="text-right">Chennai, India</span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900">
                <li>Reduced cloud batch scheduler execution latency by <strong>92.6% (slashing cycle time from ~18 minutes down to 80 seconds)</strong> across distributed cloud clusters by partitioning Cassandra mutations into strict 50-item batches, implementing multi-level Redis caching, and tuning HikariCP connection pools.</li>
                <li>Architected the full-stack onboarding workflow for <strong>Caringo Swarm S3-compatible cloud object storage</strong> using Java, Maven, and Angular, automating bucket provisioning and dynamic DNS A-record associations for <strong>100% self-service cloud storage rollout</strong>.</li>
                <li>Engineered multi-hypervisor orchestration dashboard managing heterogeneous <strong>KVM, VMware ESXi, and OLVM clusters</strong>; decoupled long-running provisioning tasks via asynchronous <strong>RabbitMQ message queues</strong>, ensuring zero UI blocking and reliable state reconciliation.</li>
                <li>Owned and scaled the core enterprise VM tracking service serving <strong>executive leadership</strong>, delivering real-time virtual infrastructure capacity tracking, state reconciliation, and multi-tenant host allocation.</li>
                <li>Automated perimeter security provisioning via <strong>FortiGate REST APIs</strong> for firewall rules and IPsec VPNs; engineered an in-process sliding-window rate limiter that <strong>eliminated 100% of HTTP 429 rate-limiting failures</strong>.</li>
                <li>Spearheaded frontend modernization from legacy AngularJS to modern <strong>Angular 17</strong>, re-architecting monolithic views into reactive, modular components and <strong>reducing client-side render times and maintenance overhead</strong>.</li>
                <li>Automated continuous integration and artifact deployment pipelines via <strong>Jenkins CI</strong>, reducing release cycle friction and enforcing automated <strong>JaCoCo code quality and regression gates</strong>.</li>
                <li>Stepped up as <strong>Acting Scrum Master</strong> facilitating sprint ceremonies, cross-functional dependency tracking, and timely production delivery; earned <strong>3× Extra Mile Commitment Awards</strong> for operational excellence.</li>
              </ul>
            </div>
          </div>

          <!-- SECTION: STRATEGY & TECH CAPSTONE -->
          <div class="mb-3">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Strategy &amp; Technical Product Capstone
            </div>

            <div>
              <div class="flex justify-between items-baseline text-[11px]">
                <span><strong>SthiraX: Distributed CO₂-Mineralization Platform for Certified Precast Materials</strong> | <em>IIM Kozhikode BPP</em></span>
                <span class="font-bold text-right text-[10px]">In Progress</span>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900 mt-1">
                <li>Architected an asset-light climate-tech platform retrofitting regional precast plants with modular industrial CO₂-curing units, targeting India's <strong>mandatory 5%–25% recycled precast mandate by 2030 across 20,000+ sqm projects</strong> (addressing India's &lt;1% recycling baseline).</li>
                <li>Engineered batch-level <strong>MRV (Measurement, Reporting &amp; Verification) software</strong> generating cryptographically verifiable Digital Product Passports for developers and EPC contractors fulfilling legal EPR compliance.</li>
                <li>Designed an asset-light multi-tiered monetization strategy (equipment leasing, per-tonne curing royalties, and MRV SaaS subscriptions), modeling viable unit economics independent of voluntary carbon credit market volatility.</li>
                <li>Developed a geospatial multi-factor ranking algorithm evaluating industrial CO₂ haul economics, steel slag feedstock supply, and regional precast manufacturing cluster density.</li>
              </ul>
            </div>
          </div>

          <!-- SECTION: TECHNICAL SKILLS -->
          <div class="mb-3">
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Technical &amp; Leadership Competencies
            </div>
            <div class="text-[10px] space-y-0.5 text-slate-900 leading-normal">
              <div><strong>Core Languages:</strong> Java (8/11/17), Python, TypeScript, JavaScript, SQL</div>
              <div><strong>Backend &amp; Distributed Systems:</strong> Spring Boot 3, Hibernate/JPA, RabbitMQ (AMQP), REST APIs, Microservices Architecture, Flowable BPMN</div>
              <div><strong>Frontend &amp; UI Engineering:</strong> Angular 17, AngularJS, RxJS, HTML5/CSS3, Tailwind CSS, Responsive Web Design, State Management</div>
              <div><strong>Databases, Caching &amp; Cloud:</strong> MySQL, Cassandra, Redis, Caringo Swarm / S3, KVM, VMware ESXi, OLVM, Docker</div>
              <div><strong>DevOps, SRE &amp; Security:</strong> Jenkins CI/CD, Git, Linux, Maven, FortiGate APIs, Postman, Swagger/OpenAPI, SonarQube, JaCoCo</div>
              <div><strong>Product Strategy &amp; Leadership:</strong> Platform Business Models, Unit Economics, EPR Compliance, Agile / Scrum Master, Cross-Functional Leadership</div>
            </div>
          </div>

          <!-- SECTION: HONORS & CERTIFICATIONS -->
          <div>
            <div class="font-bold uppercase tracking-wider text-[11px] border-b border-black pb-0.5 mb-1" style="font-variant: small-caps;">
              Honors, Certifications &amp; Extracurricular
            </div>
            <ul class="list-disc pl-4 space-y-0.5 text-[10px] leading-relaxed text-slate-900">
              <li><strong>3× Extra Mile Commitment Award</strong> – Tata Communications Ltd. for critical cloud platform delivery and reliability.</li>
              <li><strong>Flipkart Grid 2.0 Engineering Challenge</strong> – Team Lead; achieved <strong>Top 150 Nationwide Rank</strong> out of 20,000+ teams.</li>
              <li><strong>Architecting with Google Compute Engine</strong> (Google Cloud / Coursera) &amp; <strong>Full Stack Web Development</strong> (Coding Ninjas).</li>
              <li><strong>Rank 2404 Globally</strong> in Second Round of 5th SOF International Mathematics Olympiad (Science Olympiad Foundation).</li>
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
