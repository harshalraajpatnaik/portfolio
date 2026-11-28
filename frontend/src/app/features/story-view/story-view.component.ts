import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';

export interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  businessImpact: string;
  technicalArchitecture: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  color: string;
}

export interface StoryAct {
  id: string;
  actNumber: string;
  badge: string;
  period: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  storyNarrative: string;
  imagePath: string;
  fallbackIcon: string;
  accentColor: string;
  metrics: { value: string; label: string; detail: string }[];
  highlights: string[];
  tags: string[];
}

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() modeChangeRequest = new EventEmitter<'recruiter' | 'pokemon'>();

  @ViewChild('laptopCanvas', { static: false }) laptopCanvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('laptopContainer', { static: false }) laptopContainerRef?: ElementRef<HTMLDivElement>;

  // ── Three.js 3D Laptop & Command Studio ──────────────────────────────────
  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private animationFrameId?: number;
  private isVisible = true;
  private intersectionObserver?: IntersectionObserver;

  // 3D Meshes
  private laptopGroup?: THREE.Group;
  private laptopScreenMesh?: THREE.Mesh;
  private laptopScreenCanvas?: HTMLCanvasElement;
  private laptopScreenTexture?: THREE.CanvasTexture;
  private pedestalMesh?: THREE.Mesh;
  private floatingBadges: THREE.Mesh[] = [];

  // Mouse / Pointer Parallax
  targetMouseX = 0;
  targetMouseY = 0;
  currentMouseX = 0;
  currentMouseY = 0;

  // Active Story Chapter
  activeActIndex = 0;

  // ── Authentic Chronological Life Journey Acts (Zero Hallucination) ────────
  acts: StoryAct[] = [
    {
      id: 'act-1-genesis',
      actNumber: 'ACT I',
      badge: 'THE GENESIS',
      period: '2017 – 2021',
      shortLabel: '2017–2021 · SRM CHENNAI',
      title: 'Arriving in Chennai & Forging Systems Foundations',
      subtitle: 'SRM Institute of Science and Technology · Bachelor of Technology in CSE',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai, Tamil Nadu, India',
      storyNarrative:
        'In 2017, after completing 12th standard, Harshal moved to Chennai to enter SRM Institute of Science and Technology for Computer Science & Engineering. Over four rigorous years, late nights in the lab turned into deep mastery of data structures, distributed algorithms, operating systems, Linux kernel internals, and socket networking protocols. Graduated with honors at 87.6% (CGPA 8.76), setting the stage for industrial cloud infrastructure.',
      imagePath: 'assets/images/story/act1-college-chennai.jpg',
      fallbackIcon: 'mortarboard',
      accentColor: 'cyan',
      metrics: [
        { value: '8.76', label: 'B.Tech CGPA', detail: 'Computer Science & Engineering (87.6%)' },
        { value: '4 Years', label: 'Foundational Rigor', detail: 'Linux, OS, distributed algorithms & networks' },
        { value: '0 to 1', label: 'Systems Mindset', detail: 'Building multi-threaded C/C++ & Java engines' }
      ],
      highlights: [
        'Built solid low-level foundations in concurrency, memory models, Linux kernel internals, and TCP/IP networking sockets.',
        'Explored distributed database mechanics, relational query optimizers, and ACID transaction guarantees.',
        'Developed end-to-end full-stack utilities and developer tools, earning top academic honors.'
      ],
      tags: ['SRM Institute', 'Computer Science', 'Algorithms', 'Linux Internals', 'Operating Systems', 'Networking']
    },
    {
      id: 'act-2-tatacomm',
      actNumber: 'ACT II',
      badge: 'ENTERPRISE BACKBONE',
      period: 'Jul 2021 – Mar 2024',
      shortLabel: '2021–2024 · TATA COMM',
      title: 'Industrial Cloud Infrastructure & S3 Automation',
      subtitle: 'Tata Communications Ltd. · Software Development Engineer (Cloud Storage & Full-Stack)',
      organization: 'Tata Communications Ltd.',
      location: 'Chennai, India',
      storyNarrative:
        'In July 2021, Harshal joined Tata Communications as Software Development Engineer, stepping directly onto the enterprise cloud backbone. He took ownership of onboarding workflows for Caringo Swarm S3-compatible cloud object storage, architecting self-service bucket lifecycle management with automated cPanel DNS A-record associations. Spearheaded frontend modernization from legacy AngularJS to reactive Angular 17, receiving 3× Division Excellence Awards.',
      imagePath: 'assets/images/story/act2-tata-datacenter.jpg',
      fallbackIcon: 'server',
      accentColor: 'energy',
      metrics: [
        { value: '100%', label: 'Self-Service S3', detail: 'Automated Caringo Swarm bucket lifecycle & metering' },
        { value: '3×', label: 'Excellence Awards', detail: 'Recognized for platform reliability & engineering velocity' },
        { value: 'v17', label: 'Angular Modernization', detail: 'Migrated mission-critical portals to standalone Angular 17' }
      ],
      highlights: [
        'Architected full-stack self-service onboarding for Caringo Swarm S3-compatible object storage with automated DNS A-records in Java and Angular.',
        'Modernized enterprise customer portals from AngularJS to Angular 17 with OnPush reactive state and modular components.',
        'Hardened automated CI/CD release packaging pipelines using Jenkins, Maven, and JUnit quality gates.'
      ],
      tags: ['Tata Communications', 'Caringo Swarm S3', 'Java', 'Angular 17', 'DNS Automation', 'Jenkins CI/CD']
    },
    {
      id: 'act-3-novamesh',
      actNumber: 'ACT III',
      badge: 'SCALE & SQUAD LEADERSHIP',
      period: 'Apr 2024 – Present',
      shortLabel: '2024–PRESENT · NOVAMESH',
      title: 'Distributed Scale, Sagas & Engineering Leadership',
      subtitle: 'Novamesh Ltd. (Tata Communications Subsidiary) · Senior Software Engineer & Squad Lead',
      organization: 'Novamesh Ltd. (Wholly Owned Subsidiary of Tata Communications)',
      location: 'Chennai, India',
      storyNarrative:
        'Elevated to Senior Software Engineer and Squad Lead at Novamesh (Tata Communications subsidiary), leading 5 engineers. Architected an automated zero-touch order fulfillment pipeline with Flowable BPMN sagas and RabbitMQ across KVM, VMware ESXi, and OLVM clusters, slashing provisioning lead time by 85%. Slashed batch scheduler latency by 92.6% (18m down to 80s) with Cassandra chunking and Redis caching, while enforcing Fortinet FortiGate and Kong API Gateway edge security.',
      imagePath: 'assets/images/story/act3-novamesh-leadership.jpg',
      fallbackIcon: 'cpu',
      accentColor: 'amber',
      metrics: [
        { value: '92.6%', label: 'Scheduler Latency Cut', detail: 'Slashed critical batch runtime from 18m to 80s' },
        { value: '85%', label: 'Lead Time Cut', detail: 'Order fulfillment slashed from 4 hours to <35 minutes' },
        { value: '99.95%', label: 'Workload SLA', detail: 'Fault-tolerant autoscaling across 4+ hypervisors' },
        { value: '5 Engineers', label: 'Squad Leadership', detail: 'Acting Scrum Master vetting PRDs & technical RFCs' }
      ],
      highlights: [
        'Architected Flowable BPMN distributed sagas with RabbitMQ asynchronous event exchanges for zero-touch cloud provisioning.',
        'Optimized distributed Cassandra batch chunking (50 items), multi-level Redis caching, and HikariCP pool tuning to cut execution latency by 92.6%.',
        'Configured Fortinet FortiGate REST APIs for IPsec VPNs and engineered an in-process sliding-window rate limiter on Kong API Gateway eliminating 100% of HTTP 429s.'
      ],
      tags: ['Novamesh', 'KVM / ESXi / OLVM', 'Flowable BPMN', 'RabbitMQ', 'Cassandra', 'Redis', 'Kong Gateway']
    },
    {
      id: 'act-4-iimk',
      actNumber: 'ACT IV',
      badge: 'THE STRATEGIC BRIDGE',
      period: '2025 – Present',
      shortLabel: '2025–PRESENT · IIM KOZHIKODE',
      title: 'The Tech × MBA Strategic Convergence',
      subtitle: 'Indian Institute of Management Kozhikode · Executive PGP Scholar in General Management',
      organization: 'Indian Institute of Management Kozhikode (IIMK)',
      location: 'Kochi / Kozhikode, India',
      storyNarrative:
        'Recognizing that the greatest organizational bottleneck in cloud platforms lies between deep systems engineering and executive business strategy, Harshal entered IIM Kozhikode for the Executive Post Graduate Programme (EPGP) in General Management. Uniting hands-on backend systems with coursework in Product Strategy, FinOps SaaS Unit Economics, Operations, Risk Analysis, and Financial Accounting to bridge tech with business economics.',
      imagePath: 'assets/images/story/act4-iimk-strategy.jpg',
      fallbackIcon: 'building',
      accentColor: 'emerald',
      metrics: [
        { value: 'EPGP', label: 'IIM Kozhikode Scholar', detail: 'General Management & Executive Leadership' },
        { value: 'Tech × MBA', label: 'Strategic Synthesis', detail: 'FinOps, SaaS economics, risk analysis & P&L' },
        { value: '3 Ventures', label: 'Flagship Platforms', detail: 'SthiraX, MarginOS & QueryLens AI' }
      ],
      highlights: [
        'Spearheaded SthiraX: Distributed CO2-mineralization & IoT MRV platform uniting AIOps telemetry with FinOps carbon accounting.',
        'Engineered MarginOS: High-throughput algorithmic trading engine with real-time portfolio risk computation and options Greeks modeling.',
        'Architected QueryLens AI: Enterprise natural-language analytics engine using pgvector RAG and Gemini LLM over relational schemas.'
      ],
      tags: ['IIM Kozhikode', 'Product Strategy', 'FinOps', 'SthiraX', 'MarginOS', 'pgvector RAG', 'GenAI']
    }
  ];

  // ── Novamesh Saga Simulator ───────────────────────────────────────────────
  pipelineStep = -1;
  pipelineRunning = false;
  pipelineRollback = false;
  private pipelineTimer?: ReturnType<typeof setTimeout>;

  pipelineNodes = [
    { name: '1. Order Ingestion', detail: 'Customer API order hits gateway with schema validation' },
    { name: '2. BPMN Saga Engine', detail: 'Flowable BPMN initiates distributed saga & RabbitMQ queue' },
    { name: '3. Multi-Hypervisor Deploy', detail: 'Dynamic VM autoscaling across KVM / ESXi / OLVM clusters' },
    { name: '4. Network & Security', detail: 'Fortinet FortiGate IPsec VPN & Kong API Gateway route' }
  ];

  // ── Flagship Venture Projects (Tech × MBA Capstones) ──────────────────────
  activeProjectIndex = 0;
  selectedProjectModal: ProjectDetail | null = null;

  projects: ProjectDetail[] = [
    {
      id: 'sthirax',
      name: 'SthiraX Platform',
      category: 'IIM KOZHIKODE CAPSTONE',
      badge: 'CLIMATE TECH & FINOPS',
      tagline: 'Autonomous Cloud Governance & IoT MRV Platform for Precast Carbon Mineralization',
      description:
        'SthiraX is an enterprise platform developed as the capstone for IIM Kozhikode. It bridges IoT hardware telemetry from industrial CO2-mineralization curing chambers with real-time FinOps carbon credit accounting, giving industrial plants verified MRV (Measurement, Reporting & Verification) certification.',
      businessImpact:
        'Enables cement and precast manufacturers in India to certify up to 15 kg of sequestered CO2 per cubic meter of precast concrete, generating high-trust verified carbon credits with auditable unit economics.',
      technicalArchitecture: [
        'Edge IoT ingestion layer handling MQTT and HTTP telemetry streams from sensor arrays.',
        'Spring Boot 3 reactive microservices orchestrating automated baseline comparisons.',
        'PostgreSQL with timescaledb extensions for time-series sensor curves and audit logging.',
        'FinOps real-time dashboard evaluating carbon offset ROI, curing cycle energy costs, and regulatory credits.'
      ],
      metrics: [
        { label: 'CO2 Sequestration', value: 'Up to 15 kg/m³' },
        { label: 'Ingestion Latency', value: '<45 ms p99' },
        { label: 'Audit Trail', value: '100% Immutable' }
      ],
      tags: ['AIOps', 'FinOps', 'IoT MRV', 'Spring Boot 3', 'Carbon Accounting', 'PostgreSQL'],
      githubUrl: 'https://github.com/harshalraajpatnaik/SthiraX',
      color: '#10b981'
    },
    {
      id: 'marginos',
      name: 'MarginOS',
      category: 'HIGH-FREQUENCY FINTECH',
      badge: 'QUANTITATIVE RISK ENGINE',
      tagline: 'Sub-Millisecond Algorithmic Trading & Real-Time Portfolio Risk Engine',
      description:
        'MarginOS is a high-throughput quantitative risk and margin calculation engine. It computes real-time portfolio VaR (Value at Risk), options Greeks (Delta, Gamma, Vega, Theta), and multi-exchange collateral requirements under extreme market volatility.',
      businessImpact:
        'Protects trading firms against cascading margin liquidations by providing sub-millisecond portfolio stress-testing under simulated black-swan macro events.',
      technicalArchitecture: [
        'Lock-free concurrent memory ring buffer (Disruptor pattern) for microsecond order intake.',
        'Real-time WebSocket streaming gateway broadcasting tick-by-tick risk attribution.',
        'Vectorized Python / NumPy quantitative Greeks and Monte Carlo simulation cores.',
        'Automated margin call alerts integrated with real-time risk parameter sliders.'
      ],
      metrics: [
        { label: 'Throughput', value: '10,000+ orders/sec' },
        { label: 'Greeks Latency', value: '<2 ms tick-to-trade' },
        { label: 'Precision', value: 'Multi-Asset VaR' }
      ],
      tags: ['Quantitative Finance', 'Risk Analysis', 'WebSocket', 'Python', 'Disruptor', 'Algorithmic Trading'],
      githubUrl: 'https://github.com/harshalraajpatnaik/MarginOS',
      color: '#f59e0b'
    },
    {
      id: 'querylens',
      name: 'QueryLens AI',
      category: 'GENERATIVE AI & DATA',
      badge: 'ENTERPRISE RAG COPILOT',
      tagline: 'Natural-Language to SQL Analytics Copilot Powered by pgvector RAG',
      description:
        'QueryLens AI democratizes complex database analytics by converting natural language business questions into optimized, schema-validated SQL queries using pgvector semantic embeddings and Gemini LLM reasoning.',
      businessImpact:
        'Eliminates the backlog of ad-hoc data reporting for non-technical executives, cutting business intelligence turnaround time from hours to instantaneous natural conversations.',
      technicalArchitecture: [
        'pgvector semantic embedding index storing database schema topologies and foreign-key graphs.',
        'Multi-stage LLM verification pipeline: intent extraction, SQL generation, dry-run EXPLAIN plan validation.',
        'Read-only connection sandboxing with strict row-limit ceilings to prevent runaway table scans.',
        'FastAPI backend with streaming token responses and interactive chart generation.'
      ],
      metrics: [
        { label: 'SQL Accuracy', value: '94.8% on Complex Joins' },
        { label: 'Generation Speed', value: '<1.2s roundtrip' },
        { label: 'Security', value: 'Zero Mutation Sandboxed' }
      ],
      tags: ['Generative AI', 'pgvector RAG', 'Gemini LLM', 'PostgreSQL', 'FastAPI', 'Data Analytics'],
      githubUrl: 'https://github.com/harshalraajpatnaik/QueryLens-AI',
      color: '#00e5ff'
    }
  ];

  // ── Contact Form ──────────────────────────────────────────────────────────
  contactName = '';
  contactEmail = '';
  contactMessage = '';
  contactState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(
    private ngZone: NgZone,
    private api: PortfolioApiService
  ) {}

  ngOnInit(): void {
    const savedAct = localStorage.getItem('hrp_story_act');
    if (savedAct) {
      const idx = parseInt(savedAct, 10);
      if (!isNaN(idx) && idx >= 0 && idx < this.acts.length) {
        this.activeActIndex = idx;
      }
    }
  }

  ngAfterViewInit(): void {
    this.initThreeLaptopScene();
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.pipelineTimer) {
      clearTimeout(this.pipelineTimer);
    }
    this.intersectionObserver?.disconnect();
    this.cleanupThreeScene();
  }

  // ── Contextual 3D Laptop & Command Studio Scene ───────────────────────────
  private initThreeLaptopScene(): void {
    if (!this.laptopCanvasRef) return;
    const canvas = this.laptopCanvasRef.nativeElement;
    const width = canvas.clientWidth || 500;
    const height = canvas.clientHeight || 400;

    this.ngZone.runOutsideAngular(() => {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      this.camera.position.set(0, 1.8, 7.5);

      this.renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setSize(width, height, false);

      this.build3DLaptop();
      this.animate();
    });
  }

  private build3DLaptop(): void {
    if (!this.scene) return;

    this.laptopGroup = new THREE.Group();

    // 1. Pedestal Base (Server Rack Disk)
    const pedGeo = new THREE.CylinderGeometry(3.2, 3.4, 0.25, 48);
    const pedMat = new THREE.MeshBasicMaterial({
      color: 0x111624,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    this.pedestalMesh = new THREE.Mesh(pedGeo, pedMat);
    this.pedestalMesh.position.y = -1.2;
    this.laptopGroup.add(this.pedestalMesh);

    // 2. Laptop Base / Keyboard Deck
    const baseGeo = new THREE.BoxGeometry(3.6, 0.14, 2.5);
    const baseMat = new THREE.MeshBasicMaterial({ color: 0x1a2133 });
    const laptopBase = new THREE.Mesh(baseGeo, baseMat);
    laptopBase.position.set(0, -0.6, 0.3);
    this.laptopGroup.add(laptopBase);

    // Keyboard glow plate
    const kbGeo = new THREE.PlaneGeometry(2.8, 1.4);
    const kbMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.25 });
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.rotation.x = -Math.PI / 2;
    kbMesh.position.set(0, -0.52, 0.2);
    this.laptopGroup.add(kbMesh);

    // Trackpad
    const tpGeo = new THREE.PlaneGeometry(1.0, 0.6);
    const tpMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.3 });
    const tpMesh = new THREE.Mesh(tpGeo, tpMat);
    tpMesh.rotation.x = -Math.PI / 2;
    tpMesh.position.set(0, -0.52, 1.1);
    this.laptopGroup.add(tpMesh);

    // 3. Laptop Screen Lid (Angled at ~110 degrees)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, -0.52, -0.95);

    const lidGeo = new THREE.BoxGeometry(3.6, 2.4, 0.08);
    const lidMat = new THREE.MeshBasicMaterial({ color: 0x131a29 });
    const lid = new THREE.Mesh(lidGeo, lidMat);
    lid.position.set(0, 1.15, 0);
    screenGroup.add(lid);

    // Dynamic 2D Canvas Texture for Laptop Screen
    this.laptopScreenCanvas = document.createElement('canvas');
    this.laptopScreenCanvas.width = 512;
    this.laptopScreenCanvas.height = 320;
    this.updateLaptopScreenCanvas(this.projects[this.activeProjectIndex]);

    this.laptopScreenTexture = new THREE.CanvasTexture(this.laptopScreenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: this.laptopScreenTexture });
    const displayGeo = new THREE.PlaneGeometry(3.3, 2.1);
    this.laptopScreenMesh = new THREE.Mesh(displayGeo, screenMat);
    this.laptopScreenMesh.position.set(0, 1.15, 0.045);
    screenGroup.add(this.laptopScreenMesh);

    // Angle lid back
    screenGroup.rotation.x = -0.32;
    this.laptopGroup.add(screenGroup);

    // 4. Floating System Orbit Badges
    const badgeColors = [0x00e5ff, 0xf59e0b, 0x10b981, 0xa855f7];
    const badgeRadii = [2.8, 3.3, 3.8, 4.2];

    badgeColors.forEach((color, i) => {
      const bGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
      const bMat = new THREE.MeshBasicMaterial({ color, wireframe: true });
      const bMesh = new THREE.Mesh(bGeo, bMat);
      const angle = (i / badgeColors.length) * Math.PI * 2;
      bMesh.position.set(Math.cos(angle) * badgeRadii[i], Math.sin(angle) * 1.5, Math.sin(angle) * 1.2);
      this.floatingBadges.push(bMesh);
      this.laptopGroup?.add(bMesh);
    });

    this.scene.add(this.laptopGroup);
  }

  private updateLaptopScreenCanvas(proj: ProjectDetail): void {
    if (!this.laptopScreenCanvas) return;
    const ctx = this.laptopScreenCanvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0a0d16';
    ctx.fillRect(0, 0, 512, 320);

    // Window top bar
    ctx.fillStyle = '#151c2e';
    ctx.fillRect(0, 0, 512, 38);

    // Window buttons
    ctx.fillStyle = '#ff5f56';
    ctx.beginPath(); ctx.arc(22, 19, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath(); ctx.arc(42, 19, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#27c93f';
    ctx.beginPath(); ctx.arc(62, 19, 6, 0, Math.PI * 2); ctx.fill();

    // Window Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px monospace';
    ctx.fillText(`harshal@cloud-nexus:~/${proj.id}`, 90, 24);

    // Project Name & Badge
    ctx.fillStyle = proj.color || '#f59e0b';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(`> ${proj.name.toUpperCase()}`, 24, 80);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText(`CATEGORY: ${proj.category}`, 24, 110);
    ctx.fillText(`TAGLINE: ${proj.badge}`, 24, 132);

    // Code & Metrics Snippet
    ctx.fillStyle = '#38bdf8';
    ctx.font = '13px monospace';
    ctx.fillText(`$ sys_status --evaluate-sla`, 24, 175);

    ctx.fillStyle = '#4ade80';
    ctx.font = 'bold 15px monospace';
    ctx.fillText(`[SUCCESS] 99.95% WORKLOAD SLA VERIFIED`, 24, 205);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px monospace';
    ctx.fillText(`Metrics: ${proj.metrics.map(m => `${m.label}: ${m.value}`).join(' | ')}`, 24, 235);

    // Bottom prompt
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`[INFO] Click project buttons below to switch live 3D view`, 24, 290);
  }

  private animate = (): void => {
    if (!this.isVisible) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }

    // Smooth lerp mouse coordinates
    this.currentMouseX += (this.targetMouseX - this.currentMouseX) * 0.05;
    this.currentMouseY += (this.targetMouseY - this.currentMouseY) * 0.05;

    if (this.laptopGroup) {
      this.laptopGroup.rotation.y = this.currentMouseX * 0.45;
      this.laptopGroup.rotation.x = -this.currentMouseY * 0.25;
    }

    if (this.pedestalMesh) {
      this.pedestalMesh.rotation.y += 0.003;
    }

    this.floatingBadges.forEach((b, i) => {
      b.rotation.x += 0.015 * (i + 1);
      b.rotation.y += 0.02 * (i + 1);
    });

    this.renderer?.render(this.scene!, this.camera!);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private setupIntersectionObserver(): void {
    if (!this.laptopContainerRef) return;
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    this.intersectionObserver.observe(this.laptopContainerRef.nativeElement);
  }

  private cleanupThreeScene(): void {
    this.renderer?.dispose();
    this.laptopScreenTexture?.dispose();
  }

  // ── Global Pointer Parallax ───────────────────────────────────────────────
  @HostListener('mousemove', ['$event'])
  onGlobalMouseMove(event: MouseEvent): void {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;
    this.targetMouseX = (event.clientX / width - 0.5) * 2;
    this.targetMouseY = (event.clientY / height - 0.5) * 2;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!this.laptopCanvasRef || !this.renderer || !this.camera) return;
    const canvas = this.laptopCanvasRef.nativeElement;
    const width = canvas.clientWidth || 500;
    const height = canvas.clientHeight || 400;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  // ── Act Navigation (Guaranteed to Work and Scroll Cleanly) ─────────────────
  selectAct(index: number): void {
    this.activeActIndex = index;
    localStorage.setItem('hrp_story_act', String(index));
    const element = document.getElementById(`act-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ── Project Selection & 3D Laptop Update ──────────────────────────────────
  selectProject(index: number): void {
    this.activeProjectIndex = index;
    const proj = this.projects[index];
    this.updateLaptopScreenCanvas(proj);
    if (this.laptopScreenTexture) {
      this.laptopScreenTexture.needsUpdate = true;
    }
  }

  openProjectModal(proj: ProjectDetail): void {
    this.selectedProjectModal = proj;
  }

  closeProjectModal(): void {
    this.selectedProjectModal = null;
  }

  // ── Saga Simulator ────────────────────────────────────────────────────────
  simulatePipeline(): void {
    if (this.pipelineRunning) return;
    this.pipelineRunning = true;
    this.pipelineStep = -1;
    this.pipelineRollback = false;

    const advance = (step: number) => {
      this.pipelineStep = step;
      if (step < this.pipelineNodes.length - 1) {
        this.pipelineTimer = setTimeout(() => advance(step + 1), 600);
      } else {
        this.pipelineTimer = setTimeout(() => {
          this.pipelineRunning = false;
        }, 800);
      }
    };
    this.pipelineTimer = setTimeout(() => advance(0), 300);
  }

  simulateSagaFailure(): void {
    this.pipelineRollback = !this.pipelineRollback;
    if (this.pipelineRollback) {
      this.pipelineStep = 2; // Trip at deployment stage
      this.pipelineRunning = false;
    } else {
      this.pipelineStep = -1;
    }
  }

  // ── Navigation & Actions ──────────────────────────────────────────────────
  switchToRecruiter(): void {
    this.modeChangeRequest.emit('recruiter');
  }

  switchToPokemon(): void {
    this.modeChangeRequest.emit('pokemon');
  }

  downloadResume(): void {
    const a = document.createElement('a');
    a.href = 'assets/Harshal_Raaj_Patnaik_Resume.pdf';
    a.download = 'Harshal_Raaj_Patnaik_Resume.pdf';
    a.click();
  }

  submitContact(): void {
    if (!this.contactName || !this.contactEmail || !this.contactMessage) return;
    this.contactState = 'loading';
    this.api.submitContact({
      name: this.contactName,
      email: this.contactEmail,
      message: this.contactMessage
    }).subscribe({
      next: () => {
        this.contactState = 'success';
      },
      error: () => {
        this.contactState = 'error';
      }
    });
  }

  resetContact(): void {
    this.contactState = 'idle';
    this.contactName = '';
    this.contactEmail = '';
    this.contactMessage = '';
  }
}
