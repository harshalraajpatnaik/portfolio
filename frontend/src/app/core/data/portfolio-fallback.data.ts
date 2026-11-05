import { ProfileResponse, ProjectCard, TelemetrySnapshot } from '../models/api.models';

/**
 * Offline & Static Standalone Fallback Dataset.
 * Enables 100% full-fidelity operation when the Spring Boot backend
 * is offline or when the portfolio is hosted statically (e.g. GitHub Pages / Vercel).
 */
export const FALLBACK_PROFILE: ProfileResponse = {
  "name": "Harshal Raaj Patnaik",
  "title": "Full-Stack & Cloud Engineer | Technical Product & Platform Builder (Tech \u00d7 MBA)",
  "summary": "Software Development Engineer at Tata Communications Ltd. and Executive MBA scholar in the Executive Post Graduate Programme (EPGP) in General Management at IIM Kozhikode. Hands-on enterprise architect designing multi-hypervisor VM orchestration across KVM/VMware/OLVM, Caringo Swarm S3 storage onboarding, and high-throughput distributed batch schedulers (92.6% latency reduction). Unites distributed systems engineering with executive coursework in Product Management, Financial Accounting, Operations Strategy, Risk Analysis, Product Analytics, and Negotiation to bridge deep tech with platform economics and enterprise value.",
  "contact": {
    "linkedin": "https://linkedin.com/in/harshalraajpatnaik/",
    "github": "https://github.com/harshalraajpatnaik",
    "email": "harshalraajpatnaik@outlook.com"
  },
  "education": [
    {
      "institution": "Indian Institute of Management Kozhikode (IIMK)",
      "degree": "Executive Post Graduate Programme (EPGP) in General Management",
      "field": "Product Management, Financial Accounting, Operations, Strategy & Risk Analysis",
      "period": "2025 \u2013 Present",
      "location": "Kochi, India",
      "note": "Capstone: SthiraX \u2014 Distributed CO\u2082-Mineralization Platform for Certified Low-Carbon Precast Materials in India"
    },
    {
      "institution": "SRM Institute of Science and Technology",
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "field": "Computer Science & Engineering (87.6% / CGPA 8.76)",
      "period": "2017 \u2013 2021",
      "location": "Chennai, India",
      "note": "Core Coursework: Data Structures, Algorithms Analysis, DBMS, Distributed Systems, Software Engineering, AI, SQA, Cryptography"
    }
  ],
  "experience": [
    {
      "company": "Tata Communications Ltd.",
      "role": "Software Development Engineer (Full-Stack & Cloud Platforms)",
      "period": "Jul 2021 \u2013 Present",
      "location": "Chennai, India",
      "domain": "Cloud Infrastructure \u00b7 Distributed Workflows \u00b7 Full-Stack",
      "highlights": [
        "Engineered full-stack onboarding module for Caringo Swarm S3-compatible object storage using Java, Maven, and Angular, enabling automated bucket provisioning and DNS A-record associations.",
        "Architected multi-hypervisor management dashboard handling KVM, VMware ESXi, and OLVM clusters; decoupled heavy VM provisioning tasks using asynchronous RabbitMQ message queues.",
        "Owned and maintained the core enterprise VM tracking service used by executive leadership to monitor virtual infrastructure capacity, state reconciliation, and host allocation.",
        "Optimized high-throughput batch scheduler latency by 92.6% (from ~18 minutes down to 1 minute 20 seconds) by partitioning Cassandra batch operations to 50 items, introducing multi-level Redis caching, and tuning HikariCP connection pools.",
        "Automated network security controls via FortiGate REST APIs for firewall rule management and IPsec VPNs; implemented sliding-window rate limiting to eliminate HTTP 429 API thrashing.",
        "Spearheaded frontend modernization by migrating legacy codebases from AngularJS to modern Angular, improving component reusability and client-side render speed.",
        "Automated build, test, and artifact packaging pipelines using Jenkins CI, significantly reducing deployment friction and manual verification overhead.",
        "Stepped up as Acting Scrum Master, facilitating sprint ceremonies, cross-functional dependency tracking, and timely production delivery."
      ]
    },
    {
      "company": "IIM Kozhikode \u2014 Business Plan Capstone (BPP)",
      "role": "Platform & Strategy Lead \u2014 SthiraX Project",
      "period": "In Progress",
      "location": "Kochi, India",
      "domain": "Climate-Tech \u00b7 Platform Business Models \u00b7 EPR Compliance",
      "highlights": [
        "Designed an asset-light platform retrofitting regional precast concrete plants with modular industrial CO\u2082-curing units to meet India's April 2026 C&D Waste Management mandates.",
        "Architected batch-level MRV (Measurement, Reporting & Verification) software generating tamper-evident Digital Product Passports for developers fulfilling EPR obligations.",
        "Formulated multi-layer monetization (onboarding fees, equipment leasing, per-tonne royalty, MRV SaaS subscription) and modeled unit economics independent of carbon credit volatility.",
        "Developed geospatial scoring algorithm balancing CO\u2082 haul radius, steel slag feedstock density, and precast manufacturing clusters."
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
    "id": "sthirax-carbon-platform",
    "title": "SthiraX: Distributed CO\u2082-Mineralization & MRV Platform",
    "element": "GRASS",
    "elementEmoji": "\ud83c\udf31",
    "domain": "MBA Capstone \u00b7 Platform Economics \u00b7 Climate Tech",
    "summary": "Architected a distributed climate-tech platform retrofitting regional precast concrete plants with modular industrial CO\u2082-curing units to capitalize on India's April 2026 Construction & Demolition (C&D) Waste Management Rules. Bridges platform economics with IoT batch-level MRV software generating Digital Product Passports for developers and EPC contractors fulfilling legal EPR obligations.",
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
    "id": "bulbasaur-hypervisor-dashboard",
    "title": "Multi-Hypervisor VM Tracking & Cloud Infrastructure Dashboard",
    "element": "GRASS",
    "elementEmoji": "\ud83c\udf3f",
    "domain": "Compute Virtualization \u00b7 RabbitMQ \u00b7 Angular \u00b7 Tata Communications",
    "summary": "Revamped the cloud platform management dashboard at Tata Communications to incorporate a new hypervisor using Java, Python, Angular, and RabbitMQ. Holds ownership of the core enterprise VM tracking service used by higher management and executive leadership to track virtual infrastructure capacity, state reconciliation, and host allocation across heterogeneous clusters (KVM, VMware ESXi, OLVM).",
    "techStack": [
      "Java",
      "Python",
      "Angular",
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
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Bulbasaur #001 \u00b7 Ability: Overgrow",
    "pokemonName": "Bulbasaur",
    "pokedexNo": "#001",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
    "signatureMove": "Vine Whip (Multi-Hypervisor VM Tracking & Leadership Dashboard)"
  },
  {
    "id": "pikachu-compute-scheduler",
    "title": "High-Throughput Batch Scheduler & Cassandra/Redis Optimization",
    "element": "ELECTRIC",
    "elementEmoji": "\u26a1",
    "domain": "Backend Performance \u00b7 Cassandra \u00b7 Redis \u00b7 Tata Communications",
    "summary": "Diagnosed and resolved a critical cloud resource batch scheduler taking ~18 minutes per execution cycle at Tata Communications. Engineered a 92.6% latency reduction down to ~80 seconds (1m 20s) by partitioning Cassandra batch operations to 50 items, implementing multi-level Redis caching, and tuning HikariCP connection pools.",
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
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Partner Pok\u00e9mon: Pikachu #025 \u00b7 Ability: Lightning Rod",
    "pokemonName": "Pikachu",
    "pokedexNo": "#025",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
    "signatureMove": "Volt Tackle (92.6% Latency Reduction - 18m to 80s)"
  },
  {
    "id": "squirtle-caringo-storage",
    "title": "Caringo Swarm S3 Object Storage Full-Stack Onboarding",
    "element": "WATER",
    "elementEmoji": "\ud83c\udf0a",
    "domain": "Cloud Object Storage \u00b7 Caringo Swarm \u00b7 S3 \u00b7 Tata Communications",
    "summary": "Engineered and integrated the end-to-end onboarding module for Caringo Swarm S3-compatible cloud object storage at Tata Communications using Java, Maven, and Angular. Built storage lifecycle tracking, automated DNS A-record associations, and bucket metering pipelines for multi-tenant billing.",
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
    "architecturalRole": "Partner Pok\u00e9mon: Squirtle #007 \u00b7 Ability: Torrent",
    "pokemonName": "Squirtle",
    "pokedexNo": "#007",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
    "signatureMove": "Hydro Pump (Caringo Swarm S3 Streaming & DNS Automation)"
  },
  {
    "id": "charmander-security-gateway",
    "title": "Automated Security Perimeter & FortiGate Firewall Integration",
    "element": "FIRE",
    "elementEmoji": "\ud83d\udd25",
    "domain": "Perimeter Security \u00b7 FortiGate REST \u00b7 Rate Limiting \u00b7 Tata Communications",
    "summary": "Built automated network security perimeter controls by integrating FortiOS REST APIs for firewall rule management, IPsec VPN provisioning, and public IP lifecycle management. Engineered an in-process sliding-window rate limiter that eliminated HTTP 429 thrashing against rate-limited appliance APIs.",
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
    "architecturalRole": "Partner Pok\u00e9mon: Charmander #004 \u00b7 Ability: Blaze",
    "pokemonName": "Charmander",
    "pokedexNo": "#004",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
    "signatureMove": "Fire Spin (FortiGate Perimeter & Sliding-Window Rate Limiting)"
  },
  {
    "id": "butterfree-frontend-migration",
    "title": "Enterprise Frontend Metamorphosis: AngularJS to Modern Angular",
    "element": "FLYING",
    "elementEmoji": "\ud83e\udd8b",
    "domain": "Frontend Modernization \u00b7 Angular 17 \u00b7 RxJS \u00b7 Tata Communications",
    "summary": "Spearheaded the systematic modernization of Tata Communications' legacy cloud management portal from AngularJS to modern Angular. Deconstructed monolithic scopes into reactive, reusable components, improving client-side rendering speed, state predictability, and frontend testability.",
    "techStack": [
      "Angular",
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
      "Eliminated legacy $scope two-way binding bottlenecks in favor of clean unidirectional reactive data flows.",
      "Created modular UI widgets reused across compute, networking, and storage provisioning views.",
      "Improved frontend testability and CI quality gates with automated Jasmine/Karma unit test suites."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 3,
    "architecturalRole": "Partner Pok\u00e9mon: Butterfree #012 \u00b7 Ability: Compound Eyes",
    "pokemonName": "Butterfree",
    "pokedexNo": "#012",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif",
    "signatureMove": "Quiver Dance (Enterprise AngularJS to Angular 17 Migration)"
  },
  {
    "id": "pidgeot-cicd-automation",
    "title": "High-Velocity CI/CD Pipeline Automation with Jenkins",
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
    "architecturalRole": "Partner Pok\u00e9mon: Pidgeot #018 \u00b7 Ability: Keen Eye",
    "pokemonName": "Pidgeot",
    "pokedexNo": "#018",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif",
    "signatureMove": "Hurricane (High-Velocity Jenkins CI/CD & SonarQube Quality Gates)"
  },
  {
    "id": "cyndaquil-gateway-routing",
    "title": "API Gateway Routing, Upstream Discovery & Access Control",
    "element": "FIRE",
    "elementEmoji": "\ud83d\udd25",
    "domain": "API Management \u00b7 Kong Gateway \u00b7 Reverse Proxies \u00b7 Tata Communications",
    "summary": "Engineered wildcard API-path forwarding, dedicated gateway upstream discovery, and engagement-level access validation across enterprise API gateways using Kong and reverse proxies. Ensured tenant isolation and fine-grained route metering.",
    "techStack": [
      "Kong Gateway",
      "Reverse Proxies",
      "Spring Boot",
      "REST APIs",
      "OAuth2",
      "Rate Limiting"
    ],
    "metrics": [
      {
        "label": "API Gateway",
        "value": "Kong",
        "unit": "enterprise gateway"
      },
      {
        "label": "Forwarding Mode",
        "value": "Wildcard Paths",
        "unit": "dynamic discovery"
      },
      {
        "label": "Access Control",
        "value": "Multi-Tenant",
        "unit": "workspace level"
      }
    ],
    "highlights": [
      "Implemented dynamic route registration and upstream discovery for new microservices.",
      "Configured workspace-level and engagement-level access token validation for strict tenant isolation.",
      "Integrated audit logging and metering pipelines for downstream billing computation."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Cyndaquil #155 \u00b7 Ability: Flash Fire",
    "pokemonName": "Cyndaquil",
    "pokedexNo": "#155",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif",
    "signatureMove": "Flame Wheel (Kong Gateway Routing & Multi-Tenant Access)"
  },
  {
    "id": "krookodile-persistence-concurrency",
    "title": "Database Concurrency, Locking & Connection Pool Engineering",
    "element": "GROUND",
    "elementEmoji": "\ud83d\udc0a",
    "domain": "Data Layer \u00b7 Hibernate \u00b7 JPA \u00b7 MySQL \u00b7 Cassandra \u00b7 Tata Communications",
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
    "architecturalRole": "Partner Pok\u00e9mon: Krookodile #553 \u00b7 Ability: Intimidate",
    "pokemonName": "Krookodile",
    "pokedexNo": "#553",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif",
    "signatureMove": "Earthquake (ACID Transaction Boundaries & HikariCP Tuning)"
  },
  {
    "id": "psyduck-troubleshooting-sre",
    "title": "Production SRE Troubleshooting, Concurrency & Agile Leadership",
    "element": "PSYCHIC",
    "elementEmoji": "\ud83d\udd2e",
    "domain": "Observability \u00b7 SRE \u00b7 Scrum Master \u00b7 Tata Communications",
    "summary": "Diagnosed complex concurrency issues, resolved thread timeouts and database connection pool contention, and automated continuous integration using Jenkins to streamline loading builds and test suites. Acted as Scrum Master steering sprint goals and production stability, recognized with 3\u00d7 Extra Mile Commitment Awards.",
    "techStack": [
      "Jenkins",
      "Spring Boot",
      "HikariCP",
      "JUnit",
      "Mockito",
      "Scrum Master",
      "Agile"
    ],
    "metrics": [
      {
        "label": "CI Automation",
        "value": "Jenkins",
        "unit": "automated builds"
      },
      {
        "label": "Leadership Role",
        "value": "Acting Scrum Master",
        "unit": "sprint velocity"
      },
      {
        "label": "Recognition",
        "value": "3\u00d7 Extra Mile Award",
        "unit": "Tata Communications"
      }
    ],
    "highlights": [
      "Automated build and test pipeline in Jenkins, eliminating manual deployment friction.",
      "Resolved Spring asynchronous request timeouts and Hibernate lazy-loading session boundaries.",
      "Led sprint planning, standups, and retrospective cadence as Acting Scrum Master."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Partner Pok\u00e9mon: Psyduck #054 \u00b7 Ability: Cloud Nine",
    "pokemonName": "Psyduck",
    "pokedexNo": "#054",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif",
    "signatureMove": "Amnesia (SRE Concurrency Debugging & Scrum Master Velocity)"
  },
  {
    "id": "onix-recommendation-engine",
    "title": "Machine Learning Rating Recommendation & Data Pipelines",
    "element": "ROCK",
    "elementEmoji": "\ud83e\udea8",
    "domain": "Machine Learning \u00b7 Python \u00b7 Kaggle Data \u00b7 Foundational",
    "summary": "Engineered an integrated rating recommendation system in Python. Cleaned, extracted, merged, and trained motion picture datasets from Kaggle. Implemented collaborative and content-based filtering using KNN, Pearson correlation similarity, and cosine similarity.",
    "techStack": [
      "Python",
      "Machine Learning",
      "KNN Algorithm",
      "Cosine Similarity",
      "Pandas",
      "Scikit-Learn"
    ],
    "metrics": [
      {
        "label": "Model Type",
        "value": "KNN & Pearson",
        "unit": "collaborative filtering"
      },
      {
        "label": "Data Source",
        "value": "Kaggle Dataset",
        "unit": "cleaned & trained"
      },
      {
        "label": "Prediction",
        "value": "Multi-metric",
        "unit": "similarity score"
      }
    ],
    "highlights": [
      "Extracted and normalized high-dimensional user interaction matrices.",
      "Applied cosine and Pearson correlation metrics to recommend movies based on viewing patterns.",
      "Engineered secure encrypted storage mechanisms for sensitive note-taking applications (Notekeeper)."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 3,
    "architecturalRole": "Partner Pok\u00e9mon: Onix #095 \u00b7 Ability: Rock Head",
    "pokemonName": "Onix",
    "pokedexNo": "#095",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif",
    "signatureMove": "Rock Slide (Kaggle Collaborative Filtering & Movie Pipelines)"
  },
  {
    "id": "mewtwo-flowable-orchestration",
    "title": "Flowable BPMN Workflow Engine & Long-Running Distributed Sagas",
    "element": "PSYCHIC",
    "elementEmoji": "\ud83e\udde0",
    "domain": "Distributed Orchestration \u00b7 BPMN \u00b7 Sagas \u00b7 Tata Communications",
    "summary": "Integrated Flowable BPMN workflow engine to orchestrate multi-stage cloud provisioning sagas, replacing brittle custom cron jobs with declarative state machines, async task workers, and automated compensating rollback transactions for resilient multi-resource provisioning.",
    "techStack": [
      "Flowable BPMN",
      "Java",
      "Spring Boot",
      "Distributed Sagas",
      "Compensating Transactions",
      "Async Queues"
    ],
    "metrics": [
      {
        "label": "State Engine",
        "value": "Flowable BPMN",
        "unit": "declarative sagas"
      },
      {
        "label": "Failure Recovery",
        "value": "Zero Stuck States",
        "unit": "automated rollbacks"
      },
      {
        "label": "Orchestration",
        "value": "End-to-End",
        "unit": "multi-tier provisioning"
      }
    ],
    "highlights": [
      "Orchestrated multi-step VM, storage, and network provisioning workflows using Flowable BPMN state machines.",
      "Designed automated compensating transactions to cleanly roll back partially allocated cloud resources on infrastructure faults.",
      "Decoupled workflow event listeners using asynchronous message queues, ensuring resilient distributed execution."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 5,
    "architecturalRole": "Partner Pok\u00e9mon: Mewtwo #150 \u00b7 Ability: Pressure",
    "pokemonName": "Mewtwo",
    "pokedexNo": "#150",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif",
    "signatureMove": "Psystrike (Flowable BPMN Distributed State Machine & Saga Orchestration)"
  },
  {
    "id": "snorlax-capacity-reporting",
    "title": "Compute, Network & Datastore Capacity Reporting Engine",
    "element": "NORMAL",
    "elementEmoji": "\u2696\ufe0f",
    "domain": "Capacity Planning \u00b7 Analytics \u00b7 Multi-Tenant \u00b7 Tata Communications",
    "summary": "Built enterprise capacity reporting engine computing real-time CPU, RAM, storage, and network utilization across multi-tenant cloud regions to prevent cluster saturation, audit SLA thresholds, and inform datacenter capex planning.",
    "techStack": [
      "Java",
      "PostgreSQL",
      "Time-Series Aggregation",
      "Multi-Tenant",
      "Capacity Planning",
      "REST APIs"
    ],
    "metrics": [
      {
        "label": "Capacity Auditing",
        "value": "Multi-Tenant",
        "unit": "global cluster visibility"
      },
      {
        "label": "Metric Aggregation",
        "value": "Sub-Second",
        "unit": "real-time rollups"
      },
      {
        "label": "Forecasting",
        "value": "Predictive Trend",
        "unit": "saturation prevention"
      }
    ],
    "highlights": [
      "Aggregated hardware utilization metrics across thousands of physical hypervisors and storage nodes.",
      "Automated SLA compliance auditing and threshold violation alerts for infrastructure operations.",
      "Eliminated resource over-subscription surprises by providing executive dashboards with trend projections."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Snorlax #143 \u00b7 Ability: Thick Fat",
    "pokemonName": "Snorlax",
    "pokedexNo": "#143",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/143.gif",
    "signatureMove": "Rest & Body Slam (Enterprise Compute & Datastore Capacity Reporting Engine)"
  },
  {
    "id": "dragonite-bandwidth-policing",
    "title": "Burstable Bandwidth, Policer Policies & Multi-Tier Traffic Control",
    "element": "DRAGON",
    "elementEmoji": "\ud83d\udc09",
    "domain": "Traffic Engineering \u00b7 QoS Policer \u00b7 Rate Enforcement \u00b7 Tata Communications",
    "summary": "Designed dynamic bandwidth policing and burst traffic governance framework across SDN switches and firewall boundaries, enforcing CIR/PIR QoS tiers without packet corruption or noisy-neighbor network starvation.",
    "techStack": [
      "Traffic Policing",
      "QoS CIR/PIR",
      "SDN Networking",
      "Bandwidth Bursts",
      "Linux tc",
      "FortiGate"
    ],
    "metrics": [
      {
        "label": "Traffic Control",
        "value": "CIR / PIR Bursts",
        "unit": "multi-tier QoS"
      },
      {
        "label": "QoS Enforcement",
        "value": "0% Baseline Loss",
        "unit": "clean rate shaping"
      },
      {
        "label": "Policy Latency",
        "value": "Sub-Millisecond",
        "unit": "hardware-accelerated"
      }
    ],
    "highlights": [
      "Programmed Committed Information Rate (CIR) and Peak Information Rate (PIR) policies across virtual and physical network tiers.",
      "Prevented 'noisy neighbor' bandwidth starvation during multi-gigabit customer batch uploads.",
      "Automated dynamic rate limit recalculation based on contracted tenant tiers and real-time link headroom."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Dragonite #149 \u00b7 Ability: Multiscale",
    "pokemonName": "Dragonite",
    "pokedexNo": "#149",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif",
    "signatureMove": "Dragon Pulse (Burstable Bandwidth Policing & Multi-Tier Traffic Control)"
  },
  {
    "id": "gengar-rate-limiter",
    "title": "FortiGate HTTP 429 In-Process Sliding-Window Rate Limiter & Token Bucket",
    "element": "GHOST",
    "elementEmoji": "\ud83d\udc7b",
    "domain": "API Protection \u00b7 Sliding Window \u00b7 Token Bucket \u00b7 Tata Communications",
    "summary": "Implemented high-throughput in-process sliding-window counter and token-bucket rate limiter shielding upstream management APIs from runaway automation scripts and distributed denial-of-service attempts with RFC 6585 compliance.",
    "techStack": [
      "Sliding Window",
      "Token Bucket",
      "RFC 6585",
      "ConcurrentHashMap",
      "Rate Limiting",
      "Spring Web"
    ],
    "metrics": [
      {
        "label": "Latency Overhead",
        "value": "<0.5 ms",
        "unit": "lock-free atomics"
      },
      {
        "label": "HTTP Standard",
        "value": "RFC 6585 429",
        "unit": "Retry-After headers"
      },
      {
        "label": "Flood Defense",
        "value": "10,000+ req/s",
        "unit": "surge protection"
      }
    ],
    "highlights": [
      "Engineered atomic sliding-window rate limit algorithm with microsecond timestamp granularity.",
      "Returned standard RFC 6585 Retry-After and X-RateLimit headers to give clients deterministic backoff cues.",
      "Successfully defended management endpoints from cascading API retries during network partition recoveries."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Gengar #094 \u00b7 Ability: Cursed Body",
    "pokemonName": "Gengar",
    "pokedexNo": "#094",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif",
    "signatureMove": "Shadow Ball (Sliding-Window Rate Limiter & RFC 6585 HTTP 429 Guard)"
  },
  {
    "id": "gyarados-switch-port-telemetry",
    "title": "Switch-Port Utilization Telemetry & Location-Wise Switch Mapping",
    "element": "WATER",
    "elementEmoji": "\ud83c\udf0a",
    "domain": "Network Telemetry \u00b7 Switch Mapping \u00b7 SNMP/gNMI \u00b7 Tata Communications",
    "summary": "Developed automated switch-port discovery and utilization telemetry service mapping physical rack positions, port speeds, duplex mismatches, and link drops across worldwide datacenter POPs.",
    "techStack": [
      "SNMP",
      "gNMI",
      "Network Telemetry",
      "Leaf-Spine Topology",
      "Switch Ports",
      "Python",
      "Java"
    ],
    "metrics": [
      {
        "label": "POP Coverage",
        "value": "Global Datacenters",
        "unit": "rack-level topology"
      },
      {
        "label": "Telemetry Polling",
        "value": "Real-Time Health",
        "unit": "sub-minute sweeps"
      },
      {
        "label": "Fault Isolation",
        "value": "Automated",
        "unit": "CRC & duplex alerts"
      }
    ],
    "highlights": [
      "Automated network topology discovery correlating physical leaf-spine switch ports with virtual tenant circuits.",
      "Built real-time alerting for CRC error surges, duplex mismatches, and physical cable degradation.",
      "Provided datacenter field engineers with interactive location-wise port mapping dashboards."
    ],
    "complexityTier": 4,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Gyarados #130 \u00b7 Ability: Moxie",
    "pokemonName": "Gyarados",
    "pokedexNo": "#130",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif",
    "signatureMove": "Hydro Pump (Switch-Port Telemetry & Location-Wise Network Mapping)"
  },
  {
    "id": "lapras-load-balancer",
    "title": "High-Availability Load-Balancer Orchestration (HAProxy, F5, Avi)",
    "element": "ICE",
    "elementEmoji": "\u2744\ufe0f",
    "domain": "Load Balancing \u00b7 Reverse Proxy \u00b7 L4/L7 \u00b7 Tata Communications",
    "summary": "Programmed automated provisioning and health-checking pipelines for enterprise L4/L7 load-balancer clusters (HAProxy, F5 BIG-IP, VMware NSX Advanced Load Balancer / Avi), achieving zero-downtime VIP configuration reloads.",
    "techStack": [
      "HAProxy",
      "F5 BIG-IP",
      "VMware Avi",
      "L4/L7 Proxy",
      "SSL/TLS Termination",
      "Health Probes"
    ],
    "metrics": [
      {
        "label": "VIP Reload",
        "value": "Zero Downtime",
        "unit": "hitless reconfiguration"
      },
      {
        "label": "Health Checks",
        "value": "Sub-Second Failover",
        "unit": "synthetic HTTP probes"
      },
      {
        "label": "Balancing Alg",
        "value": "Least-Conn & RR",
        "unit": "multi-tenant weighted"
      }
    ],
    "highlights": [
      "Managed active-passive and active-active VIP failover configurations with automated SSL/TLS termination.",
      "Programmed deep application layer health checks to dynamically drain and reroute traffic around failing backends.",
      "Unified heterogeneous load balancer APIs into a single declarative tenant provisioning interface."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Partner Pok\u00e9mon: Lapras #131 \u00b7 Ability: Water Absorb",
    "pokemonName": "Lapras",
    "pokedexNo": "#131",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/131.gif",
    "signatureMove": "Ice Beam (High-Availability L4/L7 Load-Balancer Orchestration)"
  },
  {
    "id": "ninetales-modernization-cve",
    "title": "Enterprise Java 8 to 17 & Spring Boot 3 Modernization & CVE Remediation",
    "element": "FIRE",
    "elementEmoji": "\ud83d\udd25",
    "domain": "Platform Modernization \u00b7 CVE Remediation \u00b7 JDK Migration \u00b7 Tata Communications",
    "summary": "Spearheaded enterprise modernization of mission-critical cloud platform microservices from legacy Java 8 / Spring Boot 1.x to Java 17 LTS / Spring Boot 3, eliminating high-severity security vulnerabilities and slashing GC pause times.",
    "techStack": [
      "Java 17 LTS",
      "Spring Boot 3",
      "Jakarta EE",
      "CVE Remediation",
      "ZGC & G1GC",
      "Vulnerability Scanning"
    ],
    "metrics": [
      {
        "label": "Java Version",
        "value": "8 \u2192 17 LTS",
        "unit": "enterprise upgrade"
      },
      {
        "label": "Vulnerabilities",
        "value": "0 High/Crit CVEs",
        "unit": "100% remediated"
      },
      {
        "label": "GC Pause Latency",
        "value": "35% Reduction",
        "unit": "G1/ZGC memory tuning"
      }
    ],
    "highlights": [
      "Refactored deprecated javax.* APIs to Jakarta namespace and migrated legacy XML configurations to modern Spring Beans.",
      "Upgraded vulnerable third-party dependencies to eliminate remote code execution (RCE) and injection vulnerabilities.",
      "Tuned garbage collection flags (G1/ZGC) resulting in a 35% reduction in 99th percentile pause times under heavy load."
    ],
    "complexityTier": 5,
    "resilienceTier": 5,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Ninetales #038 \u00b7 Ability: Flash Fire",
    "pokemonName": "Ninetales",
    "pokedexNo": "#038",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/38.gif",
    "signatureMove": "Flamethrower (Java 8 to 17 Platform Modernization & CVE Remediation)"
  },
  {
    "id": "jigglypuff-autoscaling-sync",
    "title": "Infrastructure Polling, Autoscaling State Synchronization & Deduplication",
    "element": "FAIRY",
    "elementEmoji": "\u2728",
    "domain": "Distributed State \u00b7 Event Deduplication \u00b7 Consensus \u00b7 Tata Communications",
    "summary": "Architected asynchronous background synchronization workers that poll heterogeneous cloud hypervisor APIs, deduplicating high-frequency cluster events and updating the primary operational datastore with optimistic locking.",
    "techStack": [
      "Event Deduplication",
      "Optimistic Locking",
      "Sliding-Window Batching",
      "Spring Task",
      "PostgreSQL",
      "Idempotency"
    ],
    "metrics": [
      {
        "label": "Event Throughput",
        "value": "50,000+ events/hr",
        "unit": "cluster event stream"
      },
      {
        "label": "State Reconciliation",
        "value": "100% Consistent",
        "unit": "zero split-brain"
      },
      {
        "label": "Database Load",
        "value": "60% Cut",
        "unit": "sliding-window compaction"
      }
    ],
    "highlights": [
      "Implemented idempotency keys and state hashing to eliminate redundant writes during cluster-wide autoscaling spikes.",
      "Resolved race conditions between concurrent management portal requests and hypervisor-initiated event streams.",
      "Reduced background database write load by 60% through sliding-window event batching and compaction."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 4,
    "architecturalRole": "Partner Pok\u00e9mon: Jigglypuff #039 \u00b7 Ability: Cute Charm",
    "pokemonName": "Jigglypuff",
    "pokedexNo": "#039",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/39.gif",
    "signatureMove": "Sing & Dazzling Gleam (Autoscaling State Synchronization & Event Deduplication)"
  },
  {
    "id": "eevee-public-ip-lifecycle",
    "title": "Public-IP Lifecycle Automation, CIDR Expansion & Migrated-IP Reconciliation",
    "element": "NORMAL",
    "elementEmoji": "\ud83e\udd8a",
    "domain": "IPAM \u00b7 Subnet Routing \u00b7 Automation \u00b7 Tata Communications",
    "summary": "Engineered end-to-end IP Address Management (IPAM) automation for allocating, reserving, routing, and reclaiming IPv4/IPv6 public subnets, cross-reconciling legacy migrated tenant IPs across cloud zones with zero routing flapping.",
    "techStack": [
      "IPAM Automation",
      "IPv4/IPv6 CIDR",
      "Subnet Routing",
      "Reconciliation Engine",
      "Linux Networking",
      "REST APIs"
    ],
    "metrics": [
      {
        "label": "Allocation Time",
        "value": "Instantaneous",
        "unit": "O(1) bitset lookup"
      },
      {
        "label": "IP Leakage",
        "value": "0 Orphaned IPs",
        "unit": "automated sweeps"
      },
      {
        "label": "Subnet Range",
        "value": "Multi-Region CIDR",
        "unit": "cross-datacenter BYOIP"
      }
    ],
    "highlights": [
      "Built bitset-indexed subnet tracking to allocate contiguous CIDR blocks in constant O(1) time.",
      "Automated lifecycle reclamation sweeps to detect and free orphaned public IPs from decommissioned customer VMs.",
      "Reconciled customer-owned legacy IP blocks (BYOIP) during cross-datacenter migrations without routing table flapping."
    ],
    "complexityTier": 4,
    "resilienceTier": 4,
    "throughputTier": 5,
    "architecturalRole": "Partner Pok\u00e9mon: Eevee #133 \u00b7 Ability: Adaptability",
    "pokemonName": "Eevee",
    "pokedexNo": "#133",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/133.gif",
    "signatureMove": "Swift (Public-IP Lifecycle Automation & Subnet Reconciliation)"
  }
];

export const FALLBACK_TELEMETRY: TelemetrySnapshot = {
  "timestamp": "2026-11-05T21:08:31.868313Z",
  "apiVersion": "1.0.0",
  "status": "ONLINE",
  "uptimeSeconds": 95,
  "runtime": {
    "javaVersion": "25.0.5.0.3",
    "springBootVersion": "3.2.5",
    "heapUsedMb": 47,
    "heapMaxMb": 2048,
    "availableProcessors": 8
  },
  "apiStats": {
    "totalRequests": 2,
    "upSinceEpoch": 1793912816501,
    "avgResponseMs": 4.2
  }
};
