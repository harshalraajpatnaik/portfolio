import { ProfileResponse, ProjectCard, TelemetrySnapshot } from '../models/api.models';

/**
 * Offline & Static Standalone Fallback Dataset.
 * Categorized into Company Enterprise Systems (Novamesh Ltd. & Tata Communications)
 * and Independent / Capstone Products (Built by Harshal).
 */
export const FALLBACK_PROFILE: ProfileResponse = {
  "name": "Harshal Raaj Patnaik",
  "title": "Senior Software Engineer | Cloud Infrastructure, Distributed Systems & Platform Builder (Tech \u00d7 MBA)",
  "summary": "Senior Software Engineer at Novamesh Ltd. (wholly owned subsidiary of Tata Communications) and Executive MBA scholar in the Executive Post Graduate Programme (EPGP) in General Management at IIM Kozhikode. Deep distributed systems engineer architecting multi-hypervisor orchestration across KVM/VMware/OLVM, Caringo Swarm S3 storage onboarding, and high-throughput batch schedulers (92.6% latency reduction). Unites hands-on backend and cloud infrastructure with executive coursework in Product Management, Operations Strategy, Financial Accounting, Risk Analysis, and Negotiation to bridge deep tech with platform economics.",
  "contact": {
    "linkedin": "https://linkedin.com/in/harshalraajpatnaik/",
    "github": "https://github.com/harshalraajpatnaik",
    "email": "harshalraajpatnaik@outlook.com"
  },
  "education": [
    {
      "institution": "Indian Institute of Management Kozhikode (IIMK)",
      "degree": "Executive Post Graduate Programme (EPGP) in General Management",
      "field": "Product Strategy, Financial Accounting, Operations Management, Risk Analysis & Analytics",
      "period": "2025 \u2013 Present",
      "location": "Kochi, India",
      "note": "Capstone: SthiraX \u2014 Distributed CO\u2082-Mineralization & IoT MRV Platform for Certified Low-Carbon Precast Materials in India"
    },
    {
      "institution": "SRM Institute of Science and Technology",
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "field": "Computer Science & Engineering (87.6% / CGPA 8.76)",
      "period": "2017 \u2013 2021",
      "location": "Chennai, India",
      "note": "Core Coursework: Data Structures, Algorithms Analysis, Distributed Systems, DBMS, Operating Systems, Computer Networks, Software Engineering"
    }
  ],
  "experience": [
    {
      "company": "Novamesh Ltd. (Wholly Owned Subsidiary of Tata Communications)",
      "role": "Senior Software Engineer (Cloud Platforms & Distributed Infrastructure)",
      "period": "Apr 2024 \u2013 Present",
      "location": "Chennai, India",
      "domain": "Multi-Hypervisor Orchestration \u00b7 Network Automation \u00b7 High-Throughput Schedulers",
      "highlights": [
        "Architected multi-hypervisor VM orchestration and tracking dashboard across KVM, VMware ESXi, and OLVM clusters, decoupling heavy provisioning tasks via RabbitMQ asynchronous message queues.",
        "Slashed critical cloud resource batch scheduler latency by 92.6% (from ~18 minutes down to 80 seconds) across distributed Cassandra clusters by implementing strict 50-item batch chunking, multi-level Redis caching, and tuning HikariCP connection pools.",
        "Automated network security controls via FortiGate REST APIs for firewall rules, VDOM tokens, and IPsec VPNs; engineered an in-process sliding-window token bucket rate limiter eliminating 100% of HTTP 429 errors.",
        "Engineered dynamic route discovery, wildcard path forwarding, and multi-tenant workspace access validation across Kong API Gateway and reverse proxies.",
        "Stepped up as Acting Scrum Master and technical mentor, facilitating sprint ceremonies, cross-functional dependency tracking, and timely production delivery."
      ]
    },
    {
      "company": "Tata Communications Ltd.",
      "role": "Software Development Engineer (Cloud Infrastructure & Full-Stack)",
      "period": "Jul 2021 \u2013 Mar 2024",
      "location": "Chennai, India",
      "domain": "Cloud Storage \u00b7 Frontend Modernization \u00b7 CI/CD Pipelines \u00b7 SRE",
      "highlights": [
        "Engineered full-stack onboarding workflow for Caringo Swarm S3-compatible cloud object storage using Java, Maven, and Angular, enabling automated bucket provisioning and cPanel DNS A-record associations.",
        "Spearheaded frontend modernization by migrating legacy codebases from AngularJS to modern reactive Angular 17, improving component reusability and client-side rendering speed.",
        "Automated continuous integration and release packaging pipelines using Jenkins CI, Maven, and JUnit quality gates, significantly cutting deployment friction and manual verification overhead.",
        "Engineered switch-port utilization and network capacity telemetry engine integrating Zabbix and Nimsoft APIs, computing cluster-wide CPU, memory, and datastore allocation to prevent capacity exhaustion.",
        "Earned 3\u00d7 Extra Mile Commitment Awards for operational excellence, critical incident resolution, and high-velocity feature delivery."
      ]
    }
  ],
  "awards": [
    "3\u00d7 Extra Mile Commitment Award \u2014 Tata Communications Ltd.",
    "Flipkart Grid 2.0 Engineering Challenge \u2014 Team Lead (Top 150 Nationwide Rank out of 20,000+ Teams)",
    "Coding Ninjas Full Stack Web Development Certified",
    "Architecting with Google Compute Engine \u2014 Google Cloud & Coursera",
    "Selected for Swachh Bharat Initiative (Waste Segregation)",
    "Rank 2404 Globally \u2014 5th SOF International Mathematics Olympiad"
  ]
};

export const FALLBACK_PROJECTS: ProjectCard[] = [
  {
    "id": "bulbasaur-hypervisor-dashboard",
    "title": "Multi-Hypervisor VM Provisioning & Infrastructure Control Plane",
    "category": "COMPANY",
    "companyName": "Novamesh Ltd.",
    "period": "Apr 2024 \u2013 Present",
    "element": "GRASS",
    "elementEmoji": "\ud83c\udf3f",
    "domain": "Compute Virtualization \u00b7 RabbitMQ \u00b7 Angular \u00b7 Novamesh Ltd.",
    "summary": "Architected the core enterprise VM provisioning and capacity tracking control plane across KVM, VMware ESXi, and OLVM clusters. Decoupled heavy hypervisor provisioning tasks using asynchronous RabbitMQ message queues to guarantee portal responsiveness.",
    "techStack": [
      "Java 17",
      "Python",
      "Angular 17",
      "RabbitMQ",
      "KVM",
      "VMware ESXi",
      "OLVM",
      "Linux"
    ],
    "metrics": [
      {
        "label": "Hypervisors",
        "value": "KVM, ESXi, OLVM",
        "unit": "unified management"
      },
      {
        "label": "Messaging",
        "value": "RabbitMQ",
        "unit": "async decoupling"
      },
      {
        "label": "Stakeholders",
        "value": "Executive Leadership",
        "unit": "core VM tracking"
      }
    ],
    "highlights": [
      "Directly owned and maintained the central VM tracking module enabling higher management to track enterprise capacity and host allocation.",
      "Unified VM state synchronization and lifecycle operations across KVM, VMware ESXi, and OLVM clusters.",
      "Decoupled heavy hypervisor provisioning tasks using asynchronous RabbitMQ message queues to guarantee portal responsiveness.",
      "Collaborated across infrastructure and network teams to ensure zero-loss state reconciliation during cluster rebalancing."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Novamesh Ltd. \u00b7 Senior Software Engineer",
    "pokemonName": "Bulbasaur",
    "pokedexNo": "#001",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
    "signatureMove": "Vine Whip (Multi-Hypervisor VM Provisioning & Control Plane)"
  },
  {
    "id": "pikachu-compute-scheduler",
    "title": "High-Throughput Batch Scheduler & Cassandra/Redis Latency Optimization",
    "category": "COMPANY",
    "companyName": "Novamesh Ltd.",
    "period": "Apr 2024 \u2013 Present",
    "element": "ELECTRIC",
    "elementEmoji": "\u26a1",
    "domain": "Backend Performance \u00b7 Cassandra \u00b7 Redis \u00b7 Novamesh Ltd.",
    "summary": "Diagnosed and resolved a critical cloud resource batch scheduler taking ~18 minutes per execution cycle. Engineered a 92.6% latency reduction down to ~80 seconds (1m 20s) by partitioning Cassandra batch operations to 50 items, implementing multi-level Redis caching, and tuning HikariCP connection pools.",
    "techStack": [
      "Java 17",
      "Spring Boot 3",
      "Cassandra",
      "Redis",
      "HikariCP",
      "MySQL",
      "RabbitMQ"
    ],
    "metrics": [
      {
        "label": "Execution Before",
        "value": "~18 min",
        "unit": "batch cycle"
      },
      {
        "label": "Execution After",
        "value": "~80 sec",
        "unit": "1m 20s batch cycle"
      },
      {
        "label": "Latency Slashed",
        "value": "92.6%",
        "unit": "throughput improvement"
      }
    ],
    "highlights": [
      "Partitioned massive Cassandra batch mutations into strict 50-item chunks, preventing cluster coordinator thread saturation.",
      "Implemented multi-level Redis caching with proactive cache warming for cloud resource lookups, eliminating redundant DB queries.",
      "Tuned HikariCP connection pool parameters (maximumPoolSize, connectionTimeout, leakDetectionThreshold) to eliminate connection stalls under peak batch processing."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 5,
    "architecturalRole": "Novamesh Ltd. \u00b7 Senior Software Engineer",
    "pokemonName": "Pikachu",
    "pokedexNo": "#025",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
    "signatureMove": "Volt Tackle (92.6% Latency Reduction - 18m to 80s)"
  },
  {
    "id": "charmander-security-gateway",
    "title": "Automated Security Perimeter & FortiGate Firewall Integration",
    "category": "COMPANY",
    "companyName": "Novamesh Ltd.",
    "period": "Apr 2024 \u2013 Present",
    "element": "FIRE",
    "elementEmoji": "\ud83d\udd25",
    "domain": "Perimeter Security \u00b7 FortiGate REST \u00b7 Rate Limiting \u00b7 Novamesh Ltd.",
    "summary": "Built automated network security perimeter controls by integrating FortiOS REST APIs for firewall rule management, IPsec VPN provisioning, and public IP lifecycle management. Engineered an in-process sliding-window token bucket rate limiter that eliminated HTTP 429 thrashing against rate-limited appliance APIs.",
    "techStack": [
      "Java 17",
      "Spring Boot 3",
      "FortiOS REST",
      "Token Bucket",
      "Sliding Window",
      "IPsec VPN"
    ],
    "metrics": [
      {
        "label": "Firewall APIs",
        "value": "FortiOS REST",
        "unit": "automated rules"
      },
      {
        "label": "VPN Tunnels",
        "value": "Remote & Site-to-Site",
        "unit": "IPsec provisioned"
      },
      {
        "label": "HTTP 429 Errors",
        "value": "0",
        "unit": "eliminated thrashing"
      }
    ],
    "highlights": [
      "Implemented in-process sliding-window token bucket algorithm to respect appliance REST API throughput limits.",
      "Automated public IP pool reconciliation to detect and reclaim orphaned or stale IP allocations.",
      "Standardized IPsec VPN tunnel creation for both remote-access and site-to-site enterprise connectivity."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Novamesh Ltd. \u00b7 Senior Software Engineer",
    "pokemonName": "Charmander",
    "pokedexNo": "#004",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
    "signatureMove": "Fire Spin (FortiGate Perimeter & Sliding-Window Rate Limiting)"
  },
  {
    "id": "krookodile-persistence-concurrency",
    "title": "Database Concurrency, Locking & Connection Pool Engineering",
    "category": "COMPANY",
    "companyName": "Novamesh Ltd.",
    "period": "Apr 2024 \u2013 Present",
    "element": "GROUND",
    "elementEmoji": "\ud83d\udc0a",
    "domain": "Data Layer \u00b7 Hibernate \u00b7 JPA \u00b7 MySQL \u00b7 Cassandra \u00b7 Novamesh Ltd.",
    "summary": "Resolved deep database concurrency challenges, HikariCP connection pool exhaustion warnings, and Hibernate lazy-loading session issues across complex cloud inventory relationships. Enforced strict ACID transaction boundaries to guarantee data integrity across asynchronous provisioning tasks.",
    "techStack": [
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "Cassandra",
      "HikariCP",
      "ACID",
      "Transactions"
    ],
    "metrics": [
      {
        "label": "Connection Pool",
        "value": "HikariCP",
        "unit": "leak-free tuning"
      },
      {
        "label": "Lazy Loading",
        "value": "Zero N+1",
        "unit": "fetch joins"
      },
      {
        "label": "Consistency",
        "value": "ACID",
        "unit": "guaranteed"
      }
    ],
    "highlights": [
      "Diagnosed and resolved Hibernate lazy-loading and multi-threaded session concurrency bugs.",
      "Tuned HikariCP connection pool size and leak detection thresholds for bursty batch tasks.",
      "Implemented isolated transaction boundaries ensuring rollback safety during provisioning failures."
    ],
    "complexityTier": 5,
    "resilienceTier": 4,
    "throughputTier": 4,
    "architecturalRole": "Novamesh Ltd. \u00b7 Senior Software Engineer",
    "pokemonName": "Krookodile",
    "pokedexNo": "#553",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif",
    "signatureMove": "Earthquake (ACID Transaction Boundaries & HikariCP Tuning)"
  },
  {
    "id": "mewtwo-flowable-orchestration",
    "title": "Flowable BPMN Workflow Engine & Long-Running Distributed Sagas",
    "category": "COMPANY",
    "companyName": "Novamesh Ltd.",
    "period": "Apr 2024 \u2013 Present",
    "element": "PSYCHIC",
    "elementEmoji": "\ud83d\udd2e",
    "domain": "Distributed Sagas \u00b7 Flowable BPMN \u00b7 Orchestration \u00b7 Novamesh Ltd.",
    "summary": "Architected long-running asynchronous orchestration workflows for multi-tier virtual infrastructure provisioning using the Flowable BPMN engine. Implemented the Saga compensation pattern to ensure guaranteed state consistency across distributed cloud systems.",
    "techStack": [
      "Flowable BPMN",
      "Java 17",
      "Spring Boot 3",
      "RabbitMQ",
      "Saga Pattern",
      "MySQL"
    ],
    "metrics": [
      {
        "label": "Orchestration",
        "value": "Flowable BPMN",
        "unit": "state machines"
      },
      {
        "label": "Fault Tolerance",
        "value": "Compensating Sagas",
        "unit": "automated rollback"
      },
      {
        "label": "Execution",
        "value": "Asynchronous",
        "unit": "non-blocking"
      }
    ],
    "highlights": [
      "Designed automated compensating transactions to cleanly roll back partially allocated cloud resources on infrastructure faults.",
      "Modeled multi-step provisioning lifecycles as declarative BPMN workflows with audit logging at every state transition.",
      "Decoupled task execution using RabbitMQ dead-letter exchanges to ensure zero workflow dropouts during cluster outages."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Novamesh Ltd. \u00b7 Senior Software Engineer",
    "pokemonName": "Mewtwo",
    "pokedexNo": "#150",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif",
    "signatureMove": "Psystrike (Flowable BPMN Sagas & Compensating Transactions)"
  },
  {
    "id": "cyndaquil-gateway-routing",
    "title": "API Gateway Routing, Upstream Discovery & Access Control",
    "category": "COMPANY",
    "companyName": "Novamesh Ltd.",
    "period": "Apr 2024 \u2013 Present",
    "element": "FIRE",
    "elementEmoji": "\ud83d\udd25",
    "domain": "API Gateway \u00b7 Kong \u00b7 Reverse Proxies \u00b7 Access Control \u00b7 Novamesh Ltd.",
    "summary": "Designed and implemented API gateway integrations across Kong and reverse proxies. Engineered wildcard path forwarding, upstream dynamic discovery, and multi-tenant workspace access validation with downstream rate limiting and audit logging.",
    "techStack": [
      "Kong Gateway",
      "Reverse Proxies",
      "Java",
      "OAuth2",
      "JWT",
      "REST APIs",
      "Docker"
    ],
    "metrics": [
      {
        "label": "Gateway Layer",
        "value": "Kong API Gateway",
        "unit": "enterprise proxy"
      },
      {
        "label": "Path Routing",
        "value": "Wildcard Paths",
        "unit": "dynamic forwarding"
      },
      {
        "label": "Tenant Isolation",
        "value": "Workspace Scoped",
        "unit": "access validation"
      }
    ],
    "highlights": [
      "Implemented wildcard API path forwarding and reverse proxy routing rules for internal cloud services.",
      "Configured workspace-level and engagement-level access token validation for strict tenant isolation.",
      "Integrated metering and audit logging plugins at the gateway edge to capture ingress traffic metrics."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Novamesh Ltd. \u00b7 Senior Software Engineer",
    "pokemonName": "Cyndaquil",
    "pokedexNo": "#155",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif",
    "signatureMove": "Flame Wheel (API Gateway Routing & Multi-Tenant Access)"
  },
  {
    "id": "squirtle-caringo-storage",
    "title": "Caringo Swarm S3 Object Storage Full-Stack Onboarding",
    "category": "COMPANY",
    "companyName": "Tata Communications Ltd.",
    "period": "Jul 2021 \u2013 Mar 2024",
    "element": "WATER",
    "elementEmoji": "\ud83c\udf0a",
    "domain": "Cloud Object Storage \u00b7 Caringo Swarm \u00b7 S3 \u00b7 Tata Communications",
    "summary": "Engineered and integrated the end-to-end onboarding module for Caringo Swarm S3-compatible cloud object storage at Tata Communications using Java, Maven, and Angular. Built storage lifecycle tracking, automated cPanel DNS A-record associations, and bucket metering pipelines.",
    "techStack": [
      "Java",
      "Maven",
      "Angular",
      "Caringo Swarm",
      "S3 Protocol",
      "DNS Automation",
      "MySQL"
    ],
    "metrics": [
      {
        "label": "Storage Engine",
        "value": "Caringo Swarm",
        "unit": "enterprise S3"
      },
      {
        "label": "DNS Mapping",
        "value": "Automated A-Records",
        "unit": "instant routing"
      },
      {
        "label": "Billing Telemetry",
        "value": "Automated Metering",
        "unit": "tenant quotas"
      }
    ],
    "highlights": [
      "Engineered full-stack onboarding workflow connecting responsive Angular interfaces with backend Java microservices.",
      "Automated bucket provisioning, lifecycle retention rules, and dynamic DNS A-record associations for object access.",
      "Implemented fine-grained storage consumption tracking and data transformation for downstream multi-tenant billing."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 4,
    "architecturalRole": "Tata Communications Ltd. \u00b7 Software Development Engineer",
    "pokemonName": "Squirtle",
    "pokedexNo": "#007",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
    "signatureMove": "Hydro Pump (Caringo Swarm S3 Streaming & DNS Automation)"
  },
  {
    "id": "butterfree-frontend-migration",
    "title": "Enterprise Frontend Metamorphosis: AngularJS to Modern Angular",
    "category": "COMPANY",
    "companyName": "Tata Communications Ltd.",
    "period": "Jul 2021 \u2013 Mar 2024",
    "element": "FLYING",
    "elementEmoji": "\ud83e\udd8b",
    "domain": "Frontend Modernization \u00b7 Angular 17 \u00b7 RxJS \u00b7 Tata Communications",
    "summary": "Spearheaded the systematic modernization of Tata Communications legacy cloud management portal from AngularJS to modern Angular. Deconstructed monolithic scopes into reactive, reusable components, improving client-side rendering speed, state predictability, and frontend testability.",
    "techStack": [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Webpack"
    ],
    "metrics": [
      {
        "label": "Migration Scope",
        "value": "Enterprise Portal",
        "unit": "full rewrite"
      },
      {
        "label": "Architecture",
        "value": "Component Driven",
        "unit": "reusable modules"
      },
      {
        "label": "Maintainability",
        "value": "High",
        "unit": "type-safe TypeScript"
      }
    ],
    "highlights": [
      "Eliminated legacy  two-way binding bottlenecks in favor of clean unidirectional reactive data flows.",
      "Created modular UI widgets reused across compute, networking, and storage provisioning views.",
      "Improved frontend testability and CI quality gates with automated Jasmine/Karma unit test suites."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 3,
    "architecturalRole": "Tata Communications Ltd. \u00b7 Software Development Engineer",
    "pokemonName": "Butterfree",
    "pokedexNo": "#012",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif",
    "signatureMove": "Quiver Dance (Enterprise AngularJS to Angular 17 Migration)"
  },
  {
    "id": "pidgeot-cicd-automation",
    "title": "High-Velocity CI/CD Pipeline Automation with Jenkins",
    "category": "COMPANY",
    "companyName": "Tata Communications Ltd.",
    "period": "Jul 2021 \u2013 Mar 2024",
    "element": "FLYING",
    "elementEmoji": "\ud83e\udd85",
    "domain": "DevOps \u00b7 Continuous Integration \u00b7 Jenkins \u00b7 Tata Communications",
    "summary": "Architected automated continuous integration workflows using Jenkins to streamline loading latest build artifacts, running automated regression suites, and packaging production-ready multi-module JARs. Cut manual deployment cycles and caught regressions prior to staging.",
    "techStack": [
      "Jenkins",
      "Maven",
      "Git",
      "Linux",
      "Bash",
      "JUnit",
      "Nexus"
    ],
    "metrics": [
      {
        "label": "Pipeline Automation",
        "value": "100%",
        "unit": "automated trigger"
      },
      {
        "label": "Testing Gate",
        "value": "Automated",
        "unit": "regression suites"
      },
      {
        "label": "Deployment Friction",
        "value": "Minimized",
        "unit": "rapid delivery"
      }
    ],
    "highlights": [
      "Automated build code checkouts, multi-module Maven compilation, and test execution.",
      "Integrated code quality gates with automated JUnit testing and SonarQube checks.",
      "Streamlined release packaging for rapid hypervisor and storage module rollouts."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Tata Communications Ltd. \u00b7 Software Development Engineer",
    "pokemonName": "Pidgeot",
    "pokedexNo": "#018",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif",
    "signatureMove": "Hurricane (High-Velocity Jenkins CI/CD & Quality Gates)"
  },
  {
    "id": "gyarados-switch-port-telemetry",
    "title": "Switch-Port Utilization Telemetry & Location-Wise Switch Mapping",
    "category": "COMPANY",
    "companyName": "Tata Communications Ltd.",
    "period": "Jul 2021 \u2013 Mar 2024",
    "element": "WATER",
    "elementEmoji": "\ud83c\udf0a",
    "domain": "Datacenter Telemetry \u00b7 SNMP \u00b7 Zabbix \u00b7 Python \u00b7 Tata Communications",
    "summary": "Engineered automated switch-port utilization and network capacity telemetry pipelines across regional POP datacenters. Parsed SNMP and Zabbix telemetry streams to map switch ports to hypervisor hosts, compute cluster allocation, and detect physical layer degradation.",
    "techStack": [
      "Zabbix APIs",
      "SNMP",
      "Python",
      "Java",
      "MySQL",
      "Bash",
      "Linux"
    ],
    "metrics": [
      {
        "label": "Port Mapping",
        "value": "100% Automated",
        "unit": "hypervisor uplink binding"
      },
      {
        "label": "Monitoring",
        "value": "Real-Time",
        "unit": "Zabbix & SNMP polling"
      },
      {
        "label": "Data Fidelity",
        "value": "Sub-Minute",
        "unit": "bandwidth & error rates"
      }
    ],
    "highlights": [
      "Automated switch-port utilization discovery and physical topology mapping across regional datacenter fabrics.",
      "Built real-time alerting for CRC error surges, duplex mismatches, and physical cable degradation.",
      "Provided normalized telemetry feeds consumed by cluster-level capacity planning dashboards."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Tata Communications Ltd. \u00b7 Software Development Engineer",
    "pokemonName": "Gyarados",
    "pokedexNo": "#130",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif",
    "signatureMove": "Hydro Pump (Switch-Port Telemetry & Datacenter Switch Mapping)"
  },
  {
    "id": "psyduck-troubleshooting-sre",
    "title": "Production SRE Troubleshooting, Concurrency & Agile Leadership",
    "category": "COMPANY",
    "companyName": "Tata Communications Ltd.",
    "period": "Jul 2021 \u2013 Mar 2024",
    "element": "WATER",
    "elementEmoji": "\ud83e\udd86",
    "domain": "SRE \u00b7 Concurrency Debugging \u00b7 Agile Scrum \u00b7 Tata Communications",
    "summary": "Served as primary SRE problem solver diagnosing complex race conditions, thread pool starvation, and database locks in multi-threaded cloud provisioning services. Stepped up as Acting Scrum Master to drive sprint velocity, cross-functional dependency tracking, and production delivery.",
    "techStack": [
      "Spring Boot",
      "Thread Dumps",
      "JConsole",
      "Logback",
      "Agile Scrum",
      "Jira",
      "Confluence"
    ],
    "metrics": [
      {
        "label": "Deadlock Resolution",
        "value": "100%",
        "unit": "eliminated thread stalls"
      },
      {
        "label": "Sprint Predictability",
        "value": "High",
        "unit": "Scrum Master ownership"
      },
      {
        "label": "Service Reliability",
        "value": "99.9%+",
        "unit": "operational SLA"
      }
    ],
    "highlights": [
      "Diagnosed and resolved complex thread contention and HikariCP connection starvation during bursty VM cloning jobs.",
      "Resolved Spring asynchronous request timeouts and Hibernate lazy-loading session boundaries.",
      "Led daily standups, backlog refinement, sprint retrospectives, and cross-team dependency alignments as Acting Scrum Master."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Tata Communications Ltd. \u00b7 Software Development Engineer & Acting Scrum Master",
    "pokemonName": "Psyduck",
    "pokedexNo": "#054",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif",
    "signatureMove": "Amnesia (SRE Concurrency Debugging & Scrum Master Velocity)"
  },
  {
    "id": "lapras-load-balancer",
    "title": "High-Availability Load-Balancer Orchestration (HAProxy, F5, Avi)",
    "category": "COMPANY",
    "companyName": "Tata Communications Ltd.",
    "period": "Jul 2021 \u2013 Mar 2024",
    "element": "ICE",
    "elementEmoji": "\u2744\ufe0f",
    "domain": "Load Balancing \u00b7 HAProxy \u00b7 F5 BIG-IP \u00b7 VMware Avi \u00b7 Tata Communications",
    "summary": "Integrated multi-vendor software and hardware load balancer management across HAProxy, F5 BIG-IP, and VMware NSX Advanced Load Balancer (Avi). Automated VIP creation, server pool membership, health monitoring, and SSL certificate offloading.",
    "techStack": [
      "HAProxy",
      "F5 BIG-IP",
      "VMware Avi",
      "Java",
      "REST APIs",
      "Keepalived",
      "SSL/TLS"
    ],
    "metrics": [
      {
        "label": "LB Technologies",
        "value": "HAProxy, F5, Avi",
        "unit": "unified orchestration"
      },
      {
        "label": "Health Probes",
        "value": "Sub-Second",
        "unit": "automated failover"
      },
      {
        "label": "VIP Provisioning",
        "value": "Automated",
        "unit": "self-service portal"
      }
    ],
    "highlights": [
      "Standardized load balancer resource abstractions covering virtual IPs, backend pools, and health monitors.",
      "Programmed deep application layer health checks to dynamically drain and reroute traffic around failing backends.",
      "Automated tenant-scoped SSL/TLS termination and cipher suite hardening across enterprise endpoints."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 5,
    "architecturalRole": "Tata Communications Ltd. \u00b7 Software Development Engineer",
    "pokemonName": "Lapras",
    "pokedexNo": "#131",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/131.gif",
    "signatureMove": "Ice Beam (Multi-Vendor Load Balancer Orchestration)"
  },
  {
    "id": "sthirax-carbon-platform",
    "title": "SthiraX: Distributed CO\u2082-Mineralization & IoT MRV Platform",
    "category": "PRODUCT",
    "companyName": "Independent / Academic Capstone",
    "period": "2025 \u2013 Present",
    "element": "GRASS",
    "elementEmoji": "\ud83c\udf31",
    "domain": "MBA Capstone \u00b7 Platform Economics \u00b7 Climate Tech \u00b7 IIM Kozhikode",
    "summary": "Architected a distributed climate-tech platform retrofitting regional precast concrete plants with modular industrial CO\u2082-curing units to capitalize on Indias April 2026 Construction & Demolition (C&D) Waste Management Rules. Bridges platform economics with IoT batch-level MRV software generating Digital Product Passports for developers and EPC contractors fulfilling legal EPR obligations.",
    "techStack": [
      "Platform Design",
      "MRV Software",
      "Digital Product Passports",
      "Unit Economics",
      "EPR Compliance",
      "Geospatial Analysis",
      "IoT Curing"
    ],
    "metrics": [
      {
        "label": "Regulatory Mandate",
        "value": "5% to 25%",
        "unit": "recycled by 2030"
      },
      {
        "label": "C&D Recycled",
        "value": "<1%",
        "unit": "current India baseline"
      },
      {
        "label": "Business Model",
        "value": "Asset-Light",
        "unit": "retrofit & MRV SaaS"
      }
    ],
    "highlights": [
      "Formulated an asset-light retrofit architecture turning scattered regional precast plants into a certified low-carbon supply network.",
      "Architected batch-level MRV software generating tamper-evident Digital Product Passports for every cured production lot.",
      "Designed multi-tiered monetization (equipment lease, per-tonne royalty, MRV SaaS subscription) viable without carbon credits.",
      "Developed regional geospatial scoring model evaluating steel slag supply, CO\u2082 haul economics, and developer demand density."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 5,
    "architecturalRole": "IIM Kozhikode Executive PGPM Capstone \u00b7 Business & Technology Synergy",
    "pokemonName": "Sceptile",
    "pokedexNo": "#254",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif",
    "signatureMove": "Frenzy Plant (CO\u2082 Mineralization Carbon Capture)"
  },
  {
    "id": "workflow-reliability-lab",
    "title": "Workflow Reliability Lab: Distributed Sagas & Chaos Engineering",
    "category": "PRODUCT",
    "companyName": "Independent System Architecture",
    "period": "2024 \u2013 2025",
    "element": "DRAGON",
    "elementEmoji": "\ud83d\udc09",
    "domain": "Distributed Systems \u00b7 Failure Simulation \u00b7 Saga Correctness Verification",
    "summary": "Engineered a developer platform for testing, diagnosing, and verifying distributed workflow reliability and asynchronous systems. Combines execution tracing, fault injection, deterministic correctness verification, and saga compensation auditing into a cohesive, production-grade application.",
    "techStack": [
      "Java 25",
      "Spring Boot 4",
      "Angular 18",
      "Docker Compose",
      "Distributed Tracing",
      "Chaos Engineering",
      "PostgreSQL"
    ],
    "metrics": [
      {
        "label": "Fault Injection",
        "value": "100% Deterministic",
        "unit": "synthetic failure injection"
      },
      {
        "label": "Saga Verification",
        "value": "Compensating",
        "unit": "zero phantom commits"
      },
      {
        "label": "Observability",
        "value": "Distributed Tracing",
        "unit": "end-to-end execution graph"
      }
    ],
    "highlights": [
      "Built execution observability engine capturing asynchronous distributed state transitions in real time.",
      "Designed deterministic chaos simulator to inject network partitions, timeout anomalies, and poison pill messages.",
      "Verified ACID invariant boundaries and compensating rollback transactions across distributed multi-step sagas."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 5,
    "architecturalRole": "Independent Platform Architecture \u00b7 Distributed Systems Laboratory",
    "pokemonName": "Dragonite",
    "pokedexNo": "#149",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif",
    "signatureMove": "Hyper Beam (Deterministic Distributed Saga Invariant Verification)"
  },
  {
    "id": "querylens-ai",
    "title": "QueryLens AI: Enterprise Text-to-SQL & Database Security Guardrails",
    "category": "PRODUCT",
    "companyName": "Independent AI Architecture",
    "period": "2024 \u2013 2025",
    "element": "PSYCHIC",
    "elementEmoji": "\ud83d\udd2e",
    "domain": "AI Architecture \u00b7 Text-to-SQL \u00b7 Enterprise Security \u00b7 C4 Modular Design",
    "summary": "Designed and implemented an enterprise natural language-to-SQL platform featuring a modular 3-tier C4 architecture: Angular frontend \u2192 Java Spring Boot control plane \u2192 Python FastAPI AI service with PostgreSQL pgvector RAG. Built strict security guardrails ensuring read-only execution, schema isolation, and multi-tenant threat defense.",
    "techStack": [
      "Angular 18",
      "Java 21",
      "Spring Boot 3",
      "Python 3.12",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Docker"
    ],
    "metrics": [
      {
        "label": "Security Sandbox",
        "value": "Read-Only Strict",
        "unit": "anti-destructive DDL guard"
      },
      {
        "label": "Architecture",
        "value": "C4 3-Tier",
        "unit": "Angular + Spring + FastAPI"
      },
      {
        "label": "RAG Embeddings",
        "value": "pgvector",
        "unit": "schema context grounding"
      }
    ],
    "highlights": [
      "Architected 3-tier control plane decoupling AI inference from direct database credentials via read-only proxies.",
      "Integrated pgvector RAG pipeline providing schema grounding and token-efficient semantic context to LLM queries.",
      "Built real-time query AST sanitization engine rejecting multi-statement payloads and data modification language."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Independent AI Architecture \u00b7 Secure Enterprise Data Access",
    "pokemonName": "Alakazam",
    "pokedexNo": "#065",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/65.gif",
    "signatureMove": "Psychic (Sandboxed Text-to-SQL & Anti-Injection Guardrails)"
  },
  {
    "id": "cloudscale-orchestrator",
    "title": "CloudScale: Predictive Resource Autoscaling & Telemetry Platform",
    "category": "PRODUCT",
    "companyName": "Independent Cloud Platform",
    "period": "2024 \u2013 2025",
    "element": "ELECTRIC",
    "elementEmoji": "\u26a1",
    "domain": "Cloud Infrastructure \u00b7 Predictive ML Autoscaling \u00b7 Control Plane",
    "summary": "Engineered CloudScale, an intelligent cloud infrastructure management and predictive resource orchestration platform. Built a Java 25 / Spring Boot control plane wired to a Python FastAPI predictive AI service, Prometheus/Grafana metrics, and multi-tenant priority-based workload schedulers.",
    "techStack": [
      "Java 25",
      "Spring Boot 3.4",
      "Python 3.13",
      "FastAPI",
      "Prometheus",
      "Grafana",
      "PostgreSQL",
      "Redis"
    ],
    "metrics": [
      {
        "label": "Autoscaling",
        "value": "Predictive AI",
        "unit": "proactive capacity scaling"
      },
      {
        "label": "Telemetry",
        "value": "Prometheus & Grafana",
        "unit": "sub-second metrics"
      },
      {
        "label": "Scheduling",
        "value": "Resource-Aware",
        "unit": "bin-packing optimization"
      }
    ],
    "highlights": [
      "Engineered intelligent scheduler algorithms (First Fit, Best Fit, Resource-Aware, Priority-Based) for compute allocation.",
      "Integrated Prometheus telemetry scraping and Grafana dashboards for cluster-wide node utilization metrics.",
      "Built Redis-backed sliding-window rate limiting and token revocation store for multi-tenant control plane protection."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 5,
    "architecturalRole": "Independent Cloud Platform \u00b7 Predictive Resource Orchestration",
    "pokemonName": "Zapdos",
    "pokedexNo": "#145",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/145.gif",
    "signatureMove": "Thunder (Predictive Capacity Autoscaling & Prometheus Telemetry)"
  },
  {
    "id": "marginos-fintech",
    "title": "MarginOS: Financial Operating System & Double-Entry Ledger Engine",
    "category": "PRODUCT",
    "companyName": "Independent FinTech Architecture",
    "period": "2024 \u2013 2025",
    "element": "GHOST",
    "elementEmoji": "\ud83d\udc7b",
    "domain": "FinTech \u00b7 Double-Entry Accounting \u00b7 GST Engine \u00b7 Platform Economics",
    "summary": "Built MarginOS, a full-stack financial operating system for Indian small businesses. Features an immutable double-entry accounting engine, automated GST invoice compliance, multi-account banking reconciliation, and strict ACID transaction boundaries.",
    "techStack": [
      "Spring Boot 3.5",
      "Java 25",
      "Angular 20",
      "PostgreSQL",
      "Docker",
      "Double-Entry Bookkeeping"
    ],
    "metrics": [
      {
        "label": "Accounting Engine",
        "value": "Double-Entry",
        "unit": "immutable audit ledger"
      },
      {
        "label": "Compliance",
        "value": "GST Ready",
        "unit": "automated tax reconciliation"
      },
      {
        "label": "Data Integrity",
        "value": "100% ACID",
        "unit": "strict debit-credit parity"
      }
    ],
    "highlights": [
      "Designed double-entry ledger database schema enforcing debit-credit balance constraints at the engine level.",
      "Automated GST categorization, tax liability calculation, and compliant invoice PDF generation.",
      "Implemented bank statement parsing and automated transaction reconciliation using heuristic matching."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Independent FinTech Architecture \u00b7 Financial Operating System",
    "pokemonName": "Gengar",
    "pokedexNo": "#094",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif",
    "signatureMove": "Shadow Ball (ACID Double-Entry Accounting & GST Compliance Engine)"
  },
  {
    "id": "pokedex-pro-portfolio",
    "title": "Pok\u00e9dex Pro: Full-Stack Cloud Architecture & Live Telemetry Portfolio",
    "category": "PRODUCT",
    "companyName": "Independent System Architecture",
    "period": "2024 \u2013 2026",
    "element": "NORMAL",
    "elementEmoji": "\u2b50",
    "domain": "Full-Stack \u00b7 Spring Boot 3 \u00b7 Angular 17 \u00b7 Live JVM Observability",
    "summary": "Architected this full-stack engineering showcase combining a Spring Boot 3 microservice backend with an interactive Angular 17 retro-futuristic RPG console. Features live Actuator JVM telemetry streams, offline hybrid resilience, Google ATS resume generation, and 8-bit audio synthesis.",
    "techStack": [
      "Spring Boot 3",
      "Java 17/25",
      "Angular 17",
      "RxJS",
      "Tailwind CSS",
      "OpenAPI 3",
      "Docker"
    ],
    "metrics": [
      {
        "label": "Observability",
        "value": "Live JVM Stream",
        "unit": "Spring Boot Actuator"
      },
      {
        "label": "Resilience",
        "value": "Hybrid Standalone",
        "unit": "100% offline fallback"
      },
      {
        "label": "Design System",
        "value": "Custom RPG Audio",
        "unit": "interactive Web Audio API"
      }
    ],
    "highlights": [
      "Built live telemetry pipeline streaming heap memory, garbage collection, and daemon thread stats from the JVM runtime.",
      "Implemented client-side offline hybrid resilience enabling full-fidelity operation when backend is unhosted or offline.",
      "Engineered interactive 8-bit sound effects using the browser Web Audio API oscillator alongside official audio themes."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Independent Platform Architecture \u00b7 Full-Stack Systems Showcase",
    "pokemonName": "Eevee",
    "pokedexNo": "#133",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/133.gif",
    "signatureMove": "Adaptability (Hybrid Standalone & Live Spring Boot Telemetry)"
  },
  {
    "id": "flipkart-grid-challenge",
    "title": "Flipkart Grid 2.0 Engineering Challenge: Automated Inventory Pipeline",
    "category": "PRODUCT",
    "companyName": "National Engineering Challenge (Team Lead)",
    "period": "Competition Milestone",
    "element": "ROCK",
    "elementEmoji": "\ud83e\udea8",
    "domain": "Competitive Engineering \u00b7 Computer Vision \u00b7 High-Speed Algorithms",
    "summary": "Led engineering squad to a Top 150 Nationwide Rank out of 20,000+ teams in Flipkart Grid 2.0. Architected an automated computer vision pipeline for real-time warehouse inventory reconciliation, optical character recognition (OCR) on damaged packaging, and SKU lookup.",
    "techStack": [
      "Python",
      "OpenCV",
      "Tesseract OCR",
      "Scikit-Learn",
      "Nearest Neighbors",
      "Flask"
    ],
    "metrics": [
      {
        "label": "National Rank",
        "value": "Top 150",
        "unit": "out of 20,000+ teams"
      },
      {
        "label": "Team Role",
        "value": "Team Lead",
        "unit": "architecture & delivery"
      },
      {
        "label": "Accuracy",
        "value": "94.8%",
        "unit": "damaged SKU recognition"
      }
    ],
    "highlights": [
      "Led 3-engineer squad through algorithmic design, dataset preprocessing, and rapid prototyping.",
      "Built image enhancement and adaptive thresholding pipeline to read distressed barcodes and labels.",
      "Benchmarked high-speed approximate nearest neighbor search to identify SKUs with sub-100ms latency."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Flipkart Grid 2.0 National Challenge \u00b7 Team Lead",
    "pokemonName": "Onix",
    "pokedexNo": "#095",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif",
    "signatureMove": "Rock Slide (Top 150 Nationwide Algorithm & Inventory Pipeline)"
  }
];

export const FALLBACK_TELEMETRY: TelemetrySnapshot = {
  "timestamp": "2026-11-06T03:10:00.000Z",
  "apiVersion": "1.0.0",
  "status": "ONLINE",
  "uptimeSeconds": 14280,
  "runtime": {
    "javaVersion": "25.0.5",
    "springBootVersion": "3.2.5",
    "heapUsedMb": 84,
    "heapMaxMb": 512,
    "availableProcessors": 8
  },
  "apiStats": {
    "totalRequests": 124,
    "upSinceEpoch": 1793133857000,
    "avgResponseMs": 4.2
  }
};
