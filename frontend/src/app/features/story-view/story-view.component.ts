import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() modeChangeRequest = new EventEmitter<'recruiter' | 'pokemon'>();

  @ViewChildren('storyReveal') revealEls!: QueryList<ElementRef>;

  // ── Motion toggle ──────────────────────────────────────────────────────────
  motionEnabled = true;
  private prefersReducedMotion = false;
  private motionMediaQuery?: MediaQueryList;
  private motionListener?: (e: MediaQueryListEvent) => void;

  // ── Chapter 01 — 3D Layer Stack ───────────────────────────────────────────
  activeLayers = [true, false, false];
  layerLabels = ['User Request', 'API Contract', 'Distributed Compute'];
  layerSubs   = ['HTTP / gRPC surface at the edge', 'OpenAPI schema & service mesh', 'RabbitMQ · Kafka · Cloud VMs'];
  layerCardX = 0;
  layerCardY = 0;

  // ── Chapter 02 — Tata Timeline Scrubber ──────────────────────────────────
  activeMilestone = 0;
  milestones = [
    {
      year: '2017',
      label: 'Foundation',
      icon: 'server',
      metric: '100%',
      metricLabel: 'S3-compliant object storage migration',
      detail: 'Led end-to-end migration of legacy network storage to S3-compatible object storage across the enterprise cloud fabric.'
    },
    {
      year: '2019',
      label: 'Performance',
      icon: 'zap',
      metric: '+35%',
      metricLabel: 'Network throughput improvement',
      detail: 'Architected Layer-3 routing optimisations and BGP policy tuning that lifted backbone throughput for MPLS VPN clients.'
    },
    {
      year: '2020',
      label: 'Automation',
      icon: 'git-branch',
      metric: '~60%',
      metricLabel: 'CI/CD pipeline acceleration',
      detail: 'Introduced Jenkins pipelines and Ansible playbooks that cut manual deployment cycles and enabled blue-green releases.'
    },
    {
      year: '2021',
      label: 'VIP Latency',
      icon: 'activity',
      metric: '92.6%',
      metricLabel: 'Latency reduction for Tier-1 VIP clients',
      detail: 'Designed a priority QoS fabric and dedicated VLAN segments that slashed p99 latency for top-revenue enterprise accounts.'
    },
    {
      year: '2022',
      label: 'Recognition',
      icon: 'award',
      metric: '3×',
      metricLabel: 'Division-level excellence awards',
      detail: 'Received three consecutive recognitions for cross-functional leadership bridging network engineering and product strategy.'
    }
  ];

  // ── Chapter 03 — Novamesh Pipeline Simulator ─────────────────────────────
  pipelineStep = -1;         // -1 = idle, 0-2 = active step
  pipelineFailure = false;
  pipelineRunning = false;
  private pipelineTimer?: ReturnType<typeof setTimeout>;

  pipelineSteps = [
    {
      label: 'Service Order Intake',
      sub: 'Flowable BPMN · REST API',
      desc: 'Customer service order hits the REST gateway, Flowable BPMN validates the request schema and spawns a workflow instance.',
      failDesc: 'Schema validation failure — order rejected with 422; no downstream side-effects.'
    },
    {
      label: 'Event Orchestration',
      sub: 'RabbitMQ · Dead-Letter Queue',
      desc: 'Validated order published to RabbitMQ exchange; downstream micro-services consume and provision compute asynchronously.',
      failDesc: 'Consumer timeout — message routed to DLQ; compensation saga triggers rollback of partial allocations.'
    },
    {
      label: 'Live Cloud Activation',
      sub: 'Multi-Hypervisor · 4+ Platforms',
      desc: 'Provisioning engine allocates VMs across VMware, KVM, AWS, and Azure; zero-downtime cutover confirmed.',
      failDesc: 'Hypervisor capacity exhausted — circuit-breaker trips; order queued for retry with exponential back-off.'
    }
  ];

  // ── Chapter 04 — IIM Bridge Tabs ─────────────────────────────────────────
  activeTab = 0;
  tabs = [
    {
      id: 'sthirax',
      label: 'SthiraX',
      tagline: 'AI-Native Infra Operations Platform',
      icon: 'layers',
      color: 'amber',
      description: 'IIM Kozhikode PGP capstone — an enterprise platform that unified monitoring, AIOps anomaly detection, and FinOps dashboards into one operational control plane. Bridges platform economics with deep systems engineering.',
      tags: ['AIOps', 'FinOps', 'pgvector RAG', 'LLM', 'Spring Boot'],
      links: [{ label: 'GitHub', href: 'https://github.com/harshalraajpatnaik/SthiraX', icon: 'github' }]
    },
    {
      id: 'marginos',
      label: 'MarginOS',
      tagline: 'Algorithmic Trading & Risk Analytics Engine',
      icon: 'trending-up',
      color: 'emerald',
      description: 'Quantitative risk analytics platform featuring real-time P&L attribution, options Greeks computation, and ML-driven signal generation — translating financial theory into executable infrastructure.',
      tags: ['Quantitative Finance', 'Risk Analysis', 'Python', 'WebSocket', 'ML'],
      links: [{ label: 'GitHub', href: 'https://github.com/harshalraajpatnaik/MarginOS', icon: 'github' }]
    },
    {
      id: 'querylens',
      label: 'QueryLens AI',
      tagline: 'Natural-Language Database Intelligence',
      icon: 'search',
      color: 'violet',
      description: 'Semantic search layer over relational databases using pgvector RAG and Gemini LLM — enabling business users to query structured data in plain English without touching SQL.',
      tags: ['Generative AI', 'pgvector RAG', 'LLM', 'PostgreSQL', 'FastAPI'],
      links: [{ label: 'GitHub', href: 'https://github.com/harshalraajpatnaik/QueryLens-AI', icon: 'github' }]
    }
  ];

  // ── Chapter 05 — Contact form ─────────────────────────────────────────────
  contactName = '';
  contactEmail = '';
  contactMessage = '';
  contactState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  // ── Scroll progress rail ──────────────────────────────────────────────────
  scrollProgress = 0;
  private scrollListener!: () => void;
  private observer?: IntersectionObserver;

  constructor(private api: PortfolioApiService) {}

  ngOnInit(): void {
    // Motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.motionListener = (e: MediaQueryListEvent) => {
      this.prefersReducedMotion = e.matches;
      if (e.matches) this.motionEnabled = false;
    };
    this.motionMediaQuery.addEventListener('change', this.motionListener);

    const stored = localStorage.getItem('hrp_story_motion_enabled');
    this.motionEnabled = stored !== 'false' && !this.prefersReducedMotion;

    // Scroll progress
    this.scrollListener = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      this.scrollProgress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngAfterViewInit(): void {
    // CSS Scroll-Driven Animation fallback via IntersectionObserver
    const supportsSDA = CSS.supports('animation-timeline', 'scroll()');
    if (!supportsSDA && this.motionEnabled) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('io-visible');
              this.observer?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      this.revealEls.forEach(el => this.observer?.observe(el.nativeElement));
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
    this.motionMediaQuery?.removeEventListener('change', this.motionListener!);
    this.observer?.disconnect();
    if (this.pipelineTimer) clearTimeout(this.pipelineTimer);
  }

  // ── Motion toggle ─────────────────────────────────────────────────────────
  toggleMotion(): void {
    this.motionEnabled = !this.motionEnabled;
    localStorage.setItem('hrp_story_motion_enabled', String(this.motionEnabled));
  }

  // ── 3D Layer card pointer tracking ───────────────────────────────────────
  onLayerMouseMove(event: MouseEvent, card: HTMLElement): void {
    if (!this.motionEnabled) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = -((event.clientY - rect.top) / rect.height - 0.5) * 20;
    this.layerCardX = y;
    this.layerCardY = x;
  }

  onLayerMouseLeave(): void {
    this.layerCardX = 0;
    this.layerCardY = 0;
  }

  activateLayer(i: number): void {
    this.activeLayers = this.layerLabels.map((_, idx) => idx <= i);
  }

  // ── Pipeline simulator ────────────────────────────────────────────────────
  runPipeline(): void {
    if (this.pipelineRunning) return;
    this.pipelineRunning = true;
    this.pipelineStep = -1;
    this.pipelineFailure = false;

    const advance = (step: number) => {
      this.pipelineStep = step;
      if (step < 2) {
        this.pipelineTimer = setTimeout(() => advance(step + 1), this.motionEnabled ? 1200 : 400);
      } else {
        this.pipelineTimer = setTimeout(() => { this.pipelineRunning = false; }, this.motionEnabled ? 1000 : 300);
      }
    };
    this.pipelineTimer = setTimeout(() => advance(0), this.motionEnabled ? 400 : 100);
  }

  triggerFailure(): void {
    this.pipelineFailure = !this.pipelineFailure;
    if (this.pipelineFailure) {
      this.pipelineStep = 1; // Show failure at event orchestration step
      this.pipelineRunning = false;
    } else {
      this.pipelineStep = -1;
    }
  }

  // ── Contact form ──────────────────────────────────────────────────────────
  submitContact(): void {
    if (!this.contactName || !this.contactEmail || !this.contactMessage) return;
    this.contactState = 'loading';
    this.api.submitContact({
      name: this.contactName,
      email: this.contactEmail,
      message: this.contactMessage
    }).subscribe({
      next: () => { this.contactState = 'success'; },
      error: () => { this.contactState = 'error'; }
    });
  }

  resetContact(): void {
    this.contactState = 'idle';
    this.contactName = '';
    this.contactEmail = '';
    this.contactMessage = '';
  }

  downloadResume(): void {
    const a = document.createElement('a');
    a.href = 'assets/Harshal_Raaj_Patnaik_Resume.pdf';
    a.download = 'Harshal_Raaj_Patnaik_Resume.pdf';
    a.click();
  }

  switchToRecruiter(): void {
    this.modeChangeRequest.emit('recruiter');
  }
}
