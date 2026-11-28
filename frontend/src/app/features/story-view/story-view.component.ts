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

interface StoryChapter {
  id: string;
  badge: string;
  period: string;
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  accent: 'energy' | 'cyan' | 'emerald' | 'amber';
  summary: string;
  metrics: { value: string; label: string; desc: string }[];
  technicalHighlights: string[];
  systemTags: string[];
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

  @ViewChild('threeCanvas', { static: false }) threeCanvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('sceneContainer', { static: false }) sceneContainerRef?: ElementRef<HTMLDivElement>;

  // ── Three.js Spatial Scene State ──────────────────────────────────────────
  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private animationFrameId?: number;
  private isVisible = true;
  private intersectionObserver?: IntersectionObserver;

  // 3D Objects
  private particleCloud?: THREE.Points;
  private coreSphere?: THREE.Mesh;
  private orbitRings: THREE.Line[] = [];
  private nodeMeshes: THREE.Mesh[] = [];

  // Pointer tracking for 3D parallax
  targetMouseX = 0;
  targetMouseY = 0;
  currentMouseX = 0;
  currentMouseY = 0;

  // ── 3D Card Interactive Tilt ──────────────────────────────────────────────
  heroTiltX = 0;
  heroTiltY = 0;

  // ── Active Life Journey Acts (Verified Facts from Resume & Recruiter Dossier) ──
  activeActIndex = 0;
  acts: StoryChapter[] = [
    {
      id: 'act-1-genesis',
      badge: 'ACT I · GENESIS',
      period: '2017 – 2021',
      title: 'The Engineering Genesis',
      subtitle: 'Algorithmic Rigor, Systems Programming & Distributed Foundations',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      accent: 'cyan',
      summary: 'Before scaling enterprise cloud systems, the foundation was forged through computer science theory, operating systems, Linux internals, network socket programming, and distributed database mechanics. Graduated with 87.6% (CGPA 8.76).',
      metrics: [
        { value: '8.76', label: 'B.Tech CGPA', desc: 'Computer Science & Engineering (87.6%)' },
        { value: '4 Years', label: 'Foundational Depth', desc: 'OS, Linux internals, data structures & protocols' },
        { value: '0-to-1', label: 'Systems Mastery', desc: 'Low-level concurrency, sockets & databases' }
      ],
      technicalHighlights: [
        'Mastered core algorithms, distributed data structures, and computer networking protocols (TCP/IP, UDP, DNS, routing).',
        'Implemented low-level concurrency models, multi-threaded C/C++ services, and Linux kernel memory management.',
        'Explored database query execution plans, relational algebra, and distributed transaction semantics.'
      ],
      systemTags: ['Computer Science', 'Algorithms', 'Distributed Systems', 'Linux Internals', 'Data Structures', 'Networking']
    },
    {
      id: 'act-2-tatacomm',
      badge: 'ACT II · ENTERPRISE BACKBONE',
      period: 'Jul 2021 – Mar 2024',
      title: 'Cloud Infrastructure & S3 Automation',
      subtitle: 'Joined Tata Communications · Industrial Object Storage & Frontend Modernization',
      organization: 'Tata Communications Ltd.',
      location: 'Chennai, India',
      accent: 'energy',
      summary: 'Joined Tata Communications in July 2021 as Software Development Engineer. Spearheaded the enterprise onboarding architecture for Caringo Swarm S3-compatible cloud object storage, automated DNS provisioning, and modern reactive Angular migration.',
      metrics: [
        { value: '100%', label: 'Self-Service Lifecycle', desc: 'Automated Caringo Swarm S3 bucket provisioning' },
        { value: '3×', label: 'Excellence Awards', desc: 'Division recognition for reliability & velocity' },
        { value: 'v17', label: 'Angular Modernization', desc: 'Upgraded legacy AngularJS to modern reactive Angular' }
      ],
      technicalHighlights: [
        'Built full-stack onboarding workflow for Caringo Swarm S3-compatible object storage with automated cPanel DNS A-record associations.',
        'Migrated mission-critical customer portals from legacy AngularJS to Angular 17 with standalone components and OnPush change detection.',
        'Hardened automated CI/CD release packaging pipelines using Jenkins, Maven, and JUnit quality gates.'
      ],
      systemTags: ['Tata Communications', 'Caringo Swarm S3', 'Java', 'Angular 17', 'DNS Automation', 'Jenkins CI/CD']
    },
    {
      id: 'act-3-novamesh',
      badge: 'ACT III · SCALE & LEADERSHIP',
      period: 'Apr 2024 – Present',
      title: 'Distributed Scale & Squad Leadership',
      subtitle: 'Senior Software Engineer & Squad Lead · Multi-Hypervisor IaaS & Sagas',
      organization: 'Novamesh Ltd. (Tata Communications Subsidiary)',
      location: 'Chennai, India',
      accent: 'amber',
      summary: 'Leading distributed cloud infrastructure engineering at Novamesh. Architected zero-touch VM fulfillment pipelines across 4+ hypervisors (KVM, ESXi, OLVM), cut batch scheduler execution latency by 92.6%, and led a squad of 5 engineers as Acting Scrum Master.',
      metrics: [
        { value: '92.6%', label: 'Scheduler Latency Cut', desc: 'Slashed critical batch runtime from 18m to 80s' },
        { value: '85%', label: 'Lead Time Cut', desc: 'Order fulfillment reduced from 4 hrs to <35 mins' },
        { value: '99.95%', label: 'Workload SLA', desc: 'Dynamic autoscaling across KVM, VMware & OLVM' },
        { value: '5 Engineers', label: 'Squad Leadership', desc: 'Acting Scrum Master vetting PRDs & RFCs' }
      ],
      technicalHighlights: [
        'Architected Flowable BPMN distributed sagas with RabbitMQ asynchronous event exchanges for zero-touch cloud provisioning.',
        'Optimized distributed Cassandra batch chunking (50 items), multi-level Redis caching, and HikariCP pool tuning to slash latency from ~18m down to 80s.',
        'Configured Fortinet FortiGate REST APIs for IPsec VPNs and engineered in-process sliding-window token bucket rate limiting on Kong API Gateway.'
      ],
      systemTags: ['Novamesh', 'KVM / ESXi / OLVM', 'Flowable BPMN', 'RabbitMQ', 'Cassandra', 'Redis', 'Kong Gateway']
    },
    {
      id: 'act-4-iimk',
      badge: 'ACT IV · THE STRATEGIC BRIDGE',
      period: '2025 – Present',
      title: 'The Tech × MBA Strategic Convergence',
      subtitle: 'IIM Kozhikode EPGP Scholar · Bridging Platform Economics with Systems Engineering',
      organization: 'Indian Institute of Management Kozhikode (IIMK)',
      location: 'Kochi, India',
      accent: 'emerald',
      summary: 'Pursuing Executive PGP in General Management at IIM Kozhikode to unite deep technical distributed systems leadership with executive financial modeling, product strategy, FinOps SaaS unit economics, and operations management.',
      metrics: [
        { value: 'EPGP', label: 'Executive Scholar', desc: 'IIM Kozhikode General Management' },
        { value: 'Tech × MBA', label: 'Strategic Synergy', desc: 'FinOps, SaaS economics & risk analysis' },
        { value: '3 Ventures', label: 'Venture Architect', desc: 'SthiraX, MarginOS & QueryLens AI' }
      ],
      technicalHighlights: [
        'Spearheaded SthiraX: Distributed CO2-mineralization & IoT MRV platform uniting AIOps telemetry with FinOps carbon accounting.',
        'Engineered MarginOS: High-throughput algorithmic trading engine with real-time portfolio risk computation and options Greeks modeling.',
        'Architected QueryLens AI: Enterprise natural-language analytics engine using pgvector RAG and Gemini LLM over relational data.'
      ],
      systemTags: ['IIM Kozhikode', 'Product Strategy', 'FinOps', 'SthiraX', 'MarginOS', 'pgvector RAG', 'GenAI']
    }
  ];

  // ── Interactive Pipeline Simulator (Novamesh Act) ─────────────────────────
  pipelineStep = -1;
  pipelineRunning = false;
  pipelineRollback = false;
  private pipelineTimer?: ReturnType<typeof setTimeout>;

  pipelineNodes = [
    { name: '1. Order Ingestion', detail: 'REST API Gateway / Swagger Schema validation' },
    { name: '2. BPMN Saga Engine', detail: 'Flowable BPMN orchestration & RabbitMQ queue' },
    { name: '3. Multi-Hypervisor Deploy', detail: 'Zero-touch provisioning: KVM / ESXi / OLVM' },
    { name: '4. Network & Security', detail: 'FortiGate IPsec VPN & Kong API Gateway route' }
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
    // Read stored preferred act if available
    const savedAct = localStorage.getItem('hrp_story_act');
    if (savedAct) {
      const idx = parseInt(savedAct, 10);
      if (!isNaN(idx) && idx >= 0 && idx < this.acts.length) {
        this.activeActIndex = idx;
      }
    }
  }

  ngAfterViewInit(): void {
    this.initThreeScene();
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

  // ── Three.js Scene Setup (Conforming to /motion-and-3d) ────────────────────
  private initThreeScene(): void {
    if (!this.threeCanvasRef) return;
    const canvas = this.threeCanvasRef.nativeElement;
    const width = canvas.clientWidth || 600;
    const height = canvas.clientHeight || 450;

    // Run outside Angular zone to avoid triggering change detection on every RAF frame
    this.ngZone.runOutsideAngular(() => {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.camera.position.set(0, 0, 16);

      this.renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      // Cap devicePixelRatio at <= 2 for mobile battery / GPU efficiency
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setSize(width, height, false);

      this.build3DConstellation();
      this.animate();
    });
  }

  private build3DConstellation(): void {
    if (!this.scene) return;

    // 1. Core Sphere (representing Central Cloud Nexus)
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.coreSphere = new THREE.Mesh(coreGeo, coreMat);
    this.scene.add(this.coreSphere);

    // 2. Inner Glow Nucleus
    const nucleusGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: false,
      transparent: true,
      opacity: 0.2
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    this.scene.add(nucleus);

    // 3. Orbital Rings (representing Tata Comm & Novamesh Backbones)
    const ringRadius = [4.5, 6.2, 8.0];
    const ringColors = [0x00e5ff, 0xf59e0b, 0x10b981];

    ringRadius.forEach((r, idx) => {
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * r, Math.sin(theta) * r, 0));
      }
      ringGeo.setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: ringColors[idx],
        transparent: true,
        opacity: 0.25
      });
      const ring = new THREE.Line(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.35 + idx * 0.4;
      ring.rotation.y = idx * 0.5;
      this.orbitRings.push(ring);
      this.scene?.add(ring);
    });

    // 4. Distributed Cloud Node Points (Particles)
    const particleCount = 180;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 3.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.65
    });
    this.particleCloud = new THREE.Points(particleGeo, particleMat);
    this.scene.add(this.particleCloud);

    // 5. Featured Planetary Nodes (Tata Comm, Novamesh, IIMK)
    const nodeCoords = [
      { x: 4.2, y: 1.8, z: 2.0, color: 0x00e5ff, label: 'Tata Comm' },
      { x: -3.8, y: 3.2, z: -1.5, color: 0xf59e0b, label: 'Novamesh' },
      { x: 2.1, y: -4.0, z: 3.2, color: 0x10b981, label: 'IIM Kozhikode' }
    ];

    nodeCoords.forEach(nc => {
      const nodeGeo = new THREE.SphereGeometry(0.35, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: nc.color, wireframe: false });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.set(nc.x, nc.y, nc.z);
      this.nodeMeshes.push(mesh);
      this.scene?.add(mesh);
    });
  }

  private animate = (): void => {
    if (!this.isVisible) {
      // Pause RAF loop when offscreen as mandated by /motion-and-3d
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }

    // Smooth lerp mouse towards target
    this.currentMouseX += (this.targetMouseX - this.currentMouseX) * 0.05;
    this.currentMouseY += (this.targetMouseY - this.currentMouseY) * 0.05;

    if (this.coreSphere) {
      this.coreSphere.rotation.x += 0.003;
      this.coreSphere.rotation.y += 0.005;
    }

    if (this.particleCloud) {
      this.particleCloud.rotation.y += 0.0015;
      this.particleCloud.rotation.x = this.currentMouseY * 0.2;
      this.particleCloud.rotation.z = this.currentMouseX * 0.2;
    }

    this.orbitRings.forEach((ring, idx) => {
      ring.rotation.z += 0.002 * (idx + 1);
    });

    if (this.camera) {
      this.camera.position.x = this.currentMouseX * 1.5;
      this.camera.position.y = -this.currentMouseY * 1.5;
      this.camera.lookAt(0, 0, 0);
    }

    this.renderer?.render(this.scene!, this.camera!);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private setupIntersectionObserver(): void {
    if (!this.sceneContainerRef) return;
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    this.intersectionObserver.observe(this.sceneContainerRef.nativeElement);
  }

  private cleanupThreeScene(): void {
    this.coreSphere?.geometry.dispose();
    (this.coreSphere?.material as THREE.Material)?.dispose();
    this.particleCloud?.geometry.dispose();
    (this.particleCloud?.material as THREE.Material)?.dispose();
    this.orbitRings.forEach(r => {
      r.geometry.dispose();
      (r.material as THREE.Material)?.dispose();
    });
    this.nodeMeshes.forEach(n => {
      n.geometry.dispose();
      (n.material as THREE.Material)?.dispose();
    });
    this.renderer?.dispose();
  }

  // ── Pointer & Parallax Interaction ────────────────────────────────────────
  @HostListener('mousemove', ['$event'])
  onGlobalMouseMove(event: MouseEvent): void {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;
    this.targetMouseX = (event.clientX / width - 0.5) * 2;
    this.targetMouseY = (event.clientY / height - 0.5) * 2;
  }

  onHeroCardMouseMove(event: MouseEvent, card: HTMLElement): void {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = -((event.clientY - rect.top) / rect.height - 0.5) * 20;
    this.heroTiltX = y;
    this.heroTiltY = x;
  }

  onHeroCardMouseLeave(): void {
    this.heroTiltX = 0;
    this.heroTiltY = 0;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!this.threeCanvasRef || !this.renderer || !this.camera) return;
    const canvas = this.threeCanvasRef.nativeElement;
    const width = canvas.clientWidth || 600;
    const height = canvas.clientHeight || 450;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  // ── Act Selector ──────────────────────────────────────────────────────────
  selectAct(index: number): void {
    this.activeActIndex = index;
    localStorage.setItem('hrp_story_act', String(index));
  }

  get activeAct(): StoryChapter {
    return this.acts[this.activeActIndex];
  }

  // ── Pipeline Simulator ────────────────────────────────────────────────────
  simulatePipeline(): void {
    if (this.pipelineRunning) return;
    this.pipelineRunning = true;
    this.pipelineStep = -1;
    this.pipelineRollback = false;

    const advance = (step: number) => {
      this.pipelineStep = step;
      if (step < this.pipelineNodes.length - 1) {
        this.pipelineTimer = setTimeout(() => advance(step + 1), 700);
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
