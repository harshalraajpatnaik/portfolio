package com.harshal.portfolio.service;

import com.harshal.portfolio.model.ProjectCard;
import com.harshal.portfolio.model.ProjectCard.Metric;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service providing curated engineering case studies.
 * Each project highlights real engineering contributions at Tata Communications Ltd.,
 * the IIM Kozhikode SthiraX Capstone, and technical foundational projects,
 * mapped to its authentic partner Pokémon.
 */
@Service
public class ProjectService {

    public List<ProjectCard> getAllProjects() {
        return List.of(
                buildSthiraXProject(),
                buildBulbasaurProject(),
                buildPikachuProject(),
                buildSquirtleProject(),
                buildCharmanderProject(),
                buildButterfreeProject(),
                buildPidgeotProject(),
                buildCyndaquilProject(),
                buildKrookodileProject(),
                buildPsyduckProject(),
                buildOnixProject(),
                buildMewtwoProject(),
                buildSnorlaxProject(),
                buildDragoniteProject(),
                buildGengarProject(),
                buildGyaradosProject(),
                buildLaprasProject(),
                buildNinetalesProject(),
                buildJigglypuffProject(),
                buildEeveeProject()
        );
    }

    private ProjectCard buildSthiraXProject() {
        return new ProjectCard(
                "sthirax-carbon-platform",
                "SthiraX: Distributed CO₂-Mineralization & MRV Platform",
                "GRASS",
                "🌱",
                "MBA Capstone · Platform Economics · Climate Tech",
                "Architected a distributed climate-tech platform retrofitting regional precast concrete plants with " +
                "modular industrial CO₂-curing units to capitalize on India's April 2026 Construction & Demolition (C&D) " +
                "Waste Management Rules. Bridges platform economics with IoT batch-level MRV software generating " +
                "Digital Product Passports for developers and EPC contractors fulfilling legal EPR obligations.",
                List.of("Platform Design", "MRV Software", "Digital Product Passports", "Unit Economics", "EPR Compliance", "Geospatial Analysis", "IoT Curing"),
                List.of(
                        new Metric("Regulatory Mandate", "5% to 25%", "recycled by 2030"),
                        new Metric("C&D Recycled", "<1%", "current India baseline"),
                        new Metric("Business Model", "Asset-Light", "retrofit & MRV SaaS")
                ),
                List.of(
                        "Formulated an asset-light retrofit architecture turning scattered regional precast plants into a certified low-carbon supply network.",
                        "Architected batch-level MRV software generating tamper-evident Digital Product Passports for every cured production lot.",
                        "Designed multi-tiered monetization (equipment lease, per-tonne royalty, MRV SaaS subscription) viable without carbon credits.",
                        "Developed regional geospatial scoring model evaluating steel slag supply, CO₂ haul economics, and developer demand density."
                ),
                5, 5, 5,
                "IIM Kozhikode Executive PGPM Capstone · Business & Technology Synergy",
                "Sceptile",
                "#254",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif",
                "Frenzy Plant (CO₂ Mineralization Carbon Capture)"
        );
    }

    private ProjectCard buildBulbasaurProject() {
        return new ProjectCard(
                "bulbasaur-hypervisor-dashboard",
                "Multi-Hypervisor VM Tracking & Cloud Infrastructure Dashboard",
                "GRASS",
                "🌿",
                "Compute Virtualization · RabbitMQ · Angular · Tata Communications",
                "Revamped the cloud platform management dashboard at Tata Communications to incorporate a new hypervisor using " +
                "Java, Python, Angular, and RabbitMQ. Holds ownership of the core enterprise VM tracking service used by " +
                "higher management and executive leadership to track virtual infrastructure capacity, state reconciliation, " +
                "and host allocation across heterogeneous clusters (KVM, VMware ESXi, OLVM).",
                List.of("Java", "Python", "Angular", "RabbitMQ", "KVM", "VMware ESXi", "OLVM", "Linux"),
                List.of(
                        new Metric("Hypervisors", "KVM, ESXi, OLVM", "unified management"),
                        new Metric("Messaging", "RabbitMQ", "async decoupling"),
                        new Metric("Stakeholders", "Executive Leadership", "core VM tracking")
                ),
                List.of(
                        "Directly owned and maintained the central VM tracking module enabling higher management to track enterprise capacity and host allocation.",
                        "Unified VM state synchronization and lifecycle operations across KVM, VMware ESXi, and OLVM clusters.",
                        "Decoupled heavy hypervisor provisioning tasks using asynchronous RabbitMQ message queues to guarantee portal responsiveness.",
                        "Collaborated across infrastructure and network teams to ensure zero-loss state reconciliation during cluster rebalancing."
                ),
                4, 5, 4,
                "Partner Pokémon: Bulbasaur #001 · Ability: Overgrow",
                "Bulbasaur",
                "#001",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
                "Vine Whip (Multi-Hypervisor VM Tracking & Leadership Dashboard)"
        );
    }

    private ProjectCard buildPikachuProject() {
        return new ProjectCard(
                "pikachu-compute-scheduler",
                "High-Throughput Batch Scheduler & Cassandra/Redis Optimization",
                "ELECTRIC",
                "⚡",
                "Backend Performance · Cassandra · Redis · Tata Communications",
                "Diagnosed and resolved a critical cloud resource batch scheduler taking ~18 minutes per execution cycle at Tata Communications. " +
                "Engineered a 92.6% latency reduction down to ~80 seconds (1m 20s) by partitioning Cassandra batch operations to 50 items, " +
                "implementing multi-level Redis caching, and tuning HikariCP connection pools.",
                List.of("Java 17", "Spring Boot 3", "Cassandra", "Redis", "HikariCP", "MySQL", "RabbitMQ"),
                List.of(
                        new Metric("Execution Before", "~18 min", "batch cycle"),
                        new Metric("Execution After", "~80 sec", "1m 20s batch cycle"),
                        new Metric("Latency Slashed", "92.6%", "throughput improvement")
                ),
                List.of(
                        "Partitioned massive Cassandra batch mutations into strict 50-item chunks, preventing cluster coordinator thread saturation.",
                        "Implemented multi-level Redis caching with proactive cache warming for cloud resource lookups, eliminating redundant DB queries.",
                        "Tuned HikariCP connection pool parameters (maximumPoolSize, connectionTimeout, leakDetectionThreshold) to eliminate connection stalls under peak batch processing."
                ),
                5, 4, 5,
                "Partner Pokémon: Pikachu #025 · Ability: Lightning Rod",
                "Pikachu",
                "#025",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
                "Volt Tackle (92.6% Latency Reduction - 18m to 80s)"
        );
    }

    private ProjectCard buildSquirtleProject() {
        return new ProjectCard(
                "squirtle-caringo-storage",
                "Caringo Swarm S3 Object Storage Full-Stack Onboarding",
                "WATER",
                "🌊",
                "Cloud Object Storage · Caringo Swarm · S3 · Tata Communications",
                "Engineered and integrated the end-to-end onboarding module for Caringo Swarm S3-compatible cloud object storage " +
                "at Tata Communications using Java, Maven, and Angular. Built storage lifecycle tracking, automated DNS A-record " +
                "associations, and bucket metering pipelines for multi-tenant billing.",
                List.of("Java", "Maven", "Angular", "Caringo Swarm", "S3 Protocol", "DNS Automation", "MySQL"),
                List.of(
                        new Metric("Storage Engine", "Caringo Swarm", "enterprise S3"),
                        new Metric("DNS Mapping", "Automated A-Records", "instant routing"),
                        new Metric("Billing Telemetry", "Automated Metering", "tenant quotas")
                ),
                List.of(
                        "Engineered full-stack onboarding workflow connecting responsive Angular interfaces with backend Java microservices.",
                        "Automated bucket provisioning, lifecycle retention rules, and dynamic DNS A-record associations for object access.",
                        "Implemented fine-grained storage consumption tracking and data transformation for downstream multi-tenant billing."
                ),
                4, 4, 4,
                "Partner Pokémon: Squirtle #007 · Ability: Torrent",
                "Squirtle",
                "#007",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
                "Hydro Pump (Caringo Swarm S3 Streaming & DNS Automation)"
        );
    }

    private ProjectCard buildCharmanderProject() {
        return new ProjectCard(
                "charmander-security-gateway",
                "Automated Security Perimeter & FortiGate Firewall Integration",
                "FIRE",
                "🔥",
                "Perimeter Security · FortiGate REST · Rate Limiting · Tata Communications",
                "Built automated network security perimeter controls by integrating FortiOS REST APIs for firewall rule " +
                "management, IPsec VPN provisioning, and public IP lifecycle management. Engineered an in-process sliding-window rate " +
                "limiter that eliminated HTTP 429 thrashing against rate-limited appliance APIs.",
                List.of("Java 17", "Spring Boot 3", "FortiOS REST", "Apache APISIX", "Sliding Window", "IPsec VPN"),
                List.of(
                        new Metric("Firewall APIs", "FortiOS REST", "automated rules"),
                        new Metric("VPN Tunnels", "Remote & Site-to-Site", "IPsec provisioned"),
                        new Metric("HTTP 429 Errors", "0", "eliminated thrashing")
                ),
                List.of(
                        "Implemented in-process sliding-window token bucket algorithm to respect appliance REST API throughput limits.",
                        "Automated public IP pool reconciliation to detect and reclaim orphaned or stale IP allocations.",
                        "Standardized IPsec VPN tunnel creation for both remote-access and site-to-site enterprise connectivity."
                ),
                4, 5, 4,
                "Partner Pokémon: Charmander #004 · Ability: Blaze",
                "Charmander",
                "#004",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
                "Fire Spin (FortiGate Perimeter & Sliding-Window Rate Limiting)"
        );
    }

    private ProjectCard buildButterfreeProject() {
        return new ProjectCard(
                "butterfree-frontend-migration",
                "Enterprise Frontend Metamorphosis: AngularJS to Modern Angular",
                "FLYING",
                "🦋",
                "Frontend Modernization · Angular 17 · RxJS · Tata Communications",
                "Spearheaded the systematic modernization of Tata Communications' legacy cloud management portal from " +
                "AngularJS to modern Angular. Deconstructed monolithic scopes into reactive, reusable components, " +
                "improving client-side rendering speed, state predictability, and frontend testability.",
                List.of("Angular", "TypeScript", "RxJS", "JavaScript", "HTML5", "CSS3", "Webpack"),
                List.of(
                        new Metric("Migration Scope", "Enterprise Portal", "full rewrite"),
                        new Metric("Architecture", "Component Driven", "reusable modules"),
                        new Metric("Maintainability", "High", "type-safe TypeScript")
                ),
                List.of(
                        "Eliminated legacy $scope two-way binding bottlenecks in favor of clean unidirectional reactive data flows.",
                        "Created modular UI widgets reused across compute, networking, and storage provisioning views.",
                        "Improved frontend testability and CI quality gates with automated Jasmine/Karma unit test suites."
                ),
                4, 4, 3,
                "Partner Pokémon: Butterfree #012 · Ability: Compound Eyes",
                "Butterfree",
                "#012",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif",
                "Quiver Dance (Enterprise AngularJS to Angular 17 Migration)"
        );
    }

    private ProjectCard buildPidgeotProject() {
        return new ProjectCard(
                "pidgeot-cicd-automation",
                "High-Velocity CI/CD Pipeline Automation with Jenkins",
                "FLYING",
                "🦅",
                "DevOps · Continuous Integration · Jenkins · Tata Communications",
                "Architected automated continuous integration workflows using Jenkins to streamline loading latest build " +
                "artifacts, running automated regression suites, and packaging production-ready multi-module JARs. " +
                "Cut manual deployment cycles and caught regressions prior to staging.",
                List.of("Jenkins", "Maven", "Git", "Linux", "Bash", "JaCoCo", "Nexus"),
                List.of(
                        new Metric("Pipeline Automation", "100%", "automated trigger"),
                        new Metric("Testing Gate", "Automated", "regression suites"),
                        new Metric("Deployment Friction", "Minimized", "rapid delivery")
                ),
                List.of(
                        "Automated build code checkouts, multi-module Maven compilation, and test execution.",
                        "Integrated code quality gates with automated JaCoCo coverage reporting and Sonar checks.",
                        "Streamlined release packaging for rapid hypervisor and storage module rollouts."
                ),
                4, 5, 4,
                "Partner Pokémon: Pidgeot #018 · Ability: Keen Eye",
                "Pidgeot",
                "#018",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif",
                "Hurricane (High-Velocity Jenkins CI/CD & Quality Gates)"
        );
    }

    private ProjectCard buildCyndaquilProject() {
        return new ProjectCard(
                "cyndaquil-gateway-routing",
                "API Gateway Routing, Upstream Discovery & Access Control",
                "FIRE",
                "🔥",
                "API Management · Apache APISIX · Kong · Tyk · Tata Communications",
                "Engineered wildcard API-path forwarding, dedicated gateway upstream discovery, and engagement-level access " +
                "validation across enterprise API gateways (Kong, Tyk, Apache APISIX). Ensured tenant isolation " +
                "and fine-grained route metering.",
                List.of("Apache APISIX", "Kong", "Tyk", "Spring Boot", "REST APIs", "OAuth2", "Rate Limiting"),
                List.of(
                        new Metric("Gateways Supported", "3", "APISIX, Kong, Tyk"),
                        new Metric("Forwarding Mode", "Wildcard Paths", "dynamic discovery"),
                        new Metric("Access Control", "Multi-Tenant", "workspace level")
                ),
                List.of(
                        "Implemented dynamic route registration and upstream discovery for new microservices.",
                        "Configured workspace-level and engagement-level access token validation for strict tenant isolation.",
                        "Integrated audit logging and metering pipelines for downstream billing computation."
                ),
                4, 4, 4,
                "Partner Pokémon: Cyndaquil #155 · Ability: Flash Fire",
                "Cyndaquil",
                "#155",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif",
                "Flame Wheel (API Gateway Routing & Multi-Tenant Access)"
        );
    }

    private ProjectCard buildKrookodileProject() {
        return new ProjectCard(
                "krookodile-persistence-concurrency",
                "Database Concurrency, Locking & Connection Pool Engineering",
                "GROUND",
                "🐊",
                "Data Layer · Hibernate · JPA · MySQL · Cassandra · Tata Communications",
                "Resolved deep database concurrency challenges, HikariCP connection pool exhaustion warnings, and Hibernate " +
                "lazy-loading session issues across complex cloud inventory relationships. Enforced strict ACID transaction " +
                "boundaries to guarantee data integrity across asynchronous provisioning tasks.",
                List.of("Hibernate", "Spring Data JPA", "MySQL", "Cassandra", "HikariCP", "ACID", "Transactions"),
                List.of(
                        new Metric("Connection Pool", "HikariCP", "leak-free tuning"),
                        new Metric("Lazy Loading", "Zero N+1", "fetch joins"),
                        new Metric("Consistency", "ACID", "guaranteed")
                ),
                List.of(
                        "Diagnosed and resolved Hibernate lazy-loading and multi-threaded session concurrency bugs.",
                        "Tuned HikariCP connection pool size and leak detection thresholds for bursty batch tasks.",
                        "Implemented isolated transaction boundaries ensuring rollback safety during provisioning failures."
                ),
                5, 4, 4,
                "Partner Pokémon: Krookodile #553 · Ability: Intimidate",
                "Krookodile",
                "#553",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif",
                "Earthquake (ACID Transaction Boundaries & HikariCP Tuning)"
        );
    }

    private ProjectCard buildPsyduckProject() {
        return new ProjectCard(
                "psyduck-troubleshooting-sre",
                "Production SRE Troubleshooting, Concurrency & Agile Leadership",
                "PSYCHIC",
                "🔮",
                "Observability · SRE · Scrum Master · Tata Communications",
                "Diagnosed complex concurrency issues, resolved thread timeouts and database connection pool contention, " +
                "and automated continuous integration using Jenkins to streamline loading builds and test suites. " +
                "Acted as Scrum Master steering sprint goals and production stability, recognized with 3× Extra Mile Commitment Awards.",
                List.of("Jenkins", "Spring Boot", "HikariCP", "JaCoCo", "JUnit", "Scrum Master", "Agile"),
                List.of(
                        new Metric("CI Automation", "Jenkins", "automated builds"),
                        new Metric("Leadership Role", "Acting Scrum Master", "sprint velocity"),
                        new Metric("Recognition", "3× Extra Mile Award", "Tata Communications")
                ),
                List.of(
                        "Automated build and test pipeline in Jenkins, eliminating manual deployment friction.",
                        "Resolved Spring asynchronous request timeouts and Hibernate lazy-loading session boundaries.",
                        "Led sprint planning, standups, and retrospective cadence as Acting Scrum Master."
                ),
                4, 4, 5,
                "Partner Pokémon: Psyduck #054 · Ability: Cloud Nine",
                "Psyduck",
                "#054",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif",
                "Amnesia (SRE Concurrency Debugging & Scrum Master Velocity)"
        );
    }

    private ProjectCard buildOnixProject() {
        return new ProjectCard(
                "onix-recommendation-engine",
                "Machine Learning Rating Recommendation & Data Pipelines",
                "ROCK",
                "🪨",
                "Machine Learning · Python · Kaggle Data · Foundational",
                "Engineered an integrated rating recommendation system in Python. Cleaned, extracted, merged, and trained " +
                "motion picture datasets from Kaggle. Implemented collaborative and content-based filtering using KNN, " +
                "Pearson correlation similarity, and cosine similarity.",
                List.of("Python", "Machine Learning", "KNN Algorithm", "Cosine Similarity", "Pandas", "Scikit-Learn"),
                List.of(
                        new Metric("Model Type", "KNN & Pearson", "collaborative filtering"),
                        new Metric("Data Source", "Kaggle Dataset", "cleaned & trained"),
                        new Metric("Prediction", "Multi-metric", "similarity score")
                ),
                List.of(
                        "Extracted and normalized high-dimensional user interaction matrices.",
                        "Applied cosine and Pearson correlation metrics to recommend movies based on viewing patterns.",
                        "Engineered secure encrypted storage mechanisms for sensitive note-taking applications (Notekeeper)."
                ),
                4, 5, 3,
                "Partner Pokémon: Onix #095 · Ability: Rock Head",
                "Onix",
                "#095",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif",
                "Rock Slide (Kaggle Collaborative Filtering & Movie Pipelines)"
        );
    }

    private ProjectCard buildMewtwoProject() {
        return new ProjectCard(
                "mewtwo-flowable-orchestration",
                "Flowable BPMN Workflow Engine & Long-Running Distributed Sagas",
                "PSYCHIC",
                "🧠",
                "Distributed Orchestration · BPMN · Sagas · Tata Communications",
                "Integrated Flowable BPMN workflow engine to orchestrate multi-stage cloud provisioning sagas, replacing " +
                "brittle custom cron jobs with declarative state machines, async task workers, and automated compensating " +
                "rollback transactions for resilient multi-resource provisioning.",
                List.of("Flowable BPMN", "Java", "Spring Boot", "Distributed Sagas", "Compensating Transactions", "Async Queues"),
                List.of(
                        new Metric("State Engine", "Flowable BPMN", "declarative sagas"),
                        new Metric("Failure Recovery", "Zero Stuck States", "automated rollbacks"),
                        new Metric("Orchestration", "End-to-End", "multi-tier provisioning")
                ),
                List.of(
                        "Orchestrated multi-step VM, storage, and network provisioning workflows using Flowable BPMN state machines.",
                        "Designed automated compensating transactions to cleanly roll back partially allocated cloud resources on infrastructure faults.",
                        "Decoupled workflow event listeners using asynchronous message queues, ensuring resilient distributed execution."
                ),
                5, 5, 5,
                "Partner Pokémon: Mewtwo #150 · Ability: Pressure",
                "Mewtwo",
                "#150",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif",
                "Psystrike (Flowable BPMN Distributed State Machine & Saga Orchestration)"
        );
    }

    private ProjectCard buildSnorlaxProject() {
        return new ProjectCard(
                "snorlax-capacity-reporting",
                "Compute, Network & Datastore Capacity Reporting Engine",
                "NORMAL",
                "⚖️",
                "Capacity Planning · Analytics · Multi-Tenant · Tata Communications",
                "Built enterprise capacity reporting engine computing real-time CPU, RAM, storage, and network utilization across " +
                "multi-tenant cloud regions to prevent cluster saturation, audit SLA thresholds, and inform datacenter capex planning.",
                List.of("Java", "PostgreSQL", "Time-Series Aggregation", "Multi-Tenant", "Capacity Planning", "REST APIs"),
                List.of(
                        new Metric("Capacity Auditing", "Multi-Tenant", "global cluster visibility"),
                        new Metric("Metric Aggregation", "Sub-Second", "real-time rollups"),
                        new Metric("Forecasting", "Predictive Trend", "saturation prevention")
                ),
                List.of(
                        "Aggregated hardware utilization metrics across thousands of physical hypervisors and storage nodes.",
                        "Automated SLA compliance auditing and threshold violation alerts for infrastructure operations.",
                        "Eliminated resource over-subscription surprises by providing executive dashboards with trend projections."
                ),
                4, 4, 4,
                "Partner Pokémon: Snorlax #143 · Ability: Thick Fat",
                "Snorlax",
                "#143",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/143.gif",
                "Rest & Body Slam (Enterprise Compute & Datastore Capacity Reporting Engine)"
        );
    }

    private ProjectCard buildDragoniteProject() {
        return new ProjectCard(
                "dragonite-bandwidth-policing",
                "Burstable Bandwidth, Policer Policies & Multi-Tier Traffic Control",
                "DRAGON",
                "🐉",
                "Traffic Engineering · QoS Policer · Rate Enforcement · Tata Communications",
                "Designed dynamic bandwidth policing and burst traffic governance framework across SDN switches and firewall boundaries, " +
                "enforcing CIR/PIR QoS tiers without packet corruption or noisy-neighbor network starvation.",
                List.of("Traffic Policing", "QoS CIR/PIR", "SDN Networking", "Bandwidth Bursts", "Linux tc", "FortiGate"),
                List.of(
                        new Metric("Traffic Control", "CIR / PIR Bursts", "multi-tier QoS"),
                        new Metric("QoS Enforcement", "0% Baseline Loss", "clean rate shaping"),
                        new Metric("Policy Latency", "Sub-Millisecond", "hardware-accelerated")
                ),
                List.of(
                        "Programmed Committed Information Rate (CIR) and Peak Information Rate (PIR) policies across virtual and physical network tiers.",
                        "Prevented 'noisy neighbor' bandwidth starvation during multi-gigabit customer batch uploads.",
                        "Automated dynamic rate limit recalculation based on contracted tenant tiers and real-time link headroom."
                ),
                5, 5, 4,
                "Partner Pokémon: Dragonite #149 · Ability: Multiscale",
                "Dragonite",
                "#149",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif",
                "Dragon Pulse (Burstable Bandwidth Policing & Multi-Tier Traffic Control)"
        );
    }

    private ProjectCard buildGengarProject() {
        return new ProjectCard(
                "gengar-rate-limiter",
                "FortiGate HTTP 429 In-Process Sliding-Window Rate Limiter & Token Bucket",
                "GHOST",
                "👻",
                "API Protection · Sliding Window · Token Bucket · Tata Communications",
                "Implemented high-throughput in-process sliding-window counter and token-bucket rate limiter shielding upstream management APIs " +
                "from runaway automation scripts and distributed denial-of-service attempts with RFC 6585 compliance.",
                List.of("Sliding Window", "Token Bucket", "RFC 6585", "ConcurrentHashMap", "Rate Limiting", "Spring Web"),
                List.of(
                        new Metric("Latency Overhead", "<0.5 ms", "lock-free atomics"),
                        new Metric("HTTP Standard", "RFC 6585 429", "Retry-After headers"),
                        new Metric("Flood Defense", "10,000+ req/s", "surge protection")
                ),
                List.of(
                        "Engineered atomic sliding-window rate limit algorithm with microsecond timestamp granularity.",
                        "Returned standard RFC 6585 Retry-After and X-RateLimit headers to give clients deterministic backoff cues.",
                        "Successfully defended management endpoints from cascading API retries during network partition recoveries."
                ),
                5, 5, 4,
                "Partner Pokémon: Gengar #094 · Ability: Cursed Body",
                "Gengar",
                "#094",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif",
                "Shadow Ball (Sliding-Window Rate Limiter & RFC 6585 HTTP 429 Guard)"
        );
    }

    private ProjectCard buildGyaradosProject() {
        return new ProjectCard(
                "gyarados-switch-port-telemetry",
                "Switch-Port Utilization Telemetry & Location-Wise Switch Mapping",
                "WATER",
                "🌊",
                "Network Telemetry · Switch Mapping · SNMP/gNMI · Tata Communications",
                "Developed automated switch-port discovery and utilization telemetry service mapping physical rack positions, port speeds, " +
                "duplex mismatches, and link drops across worldwide datacenter POPs.",
                List.of("SNMP", "gNMI", "Network Telemetry", "Leaf-Spine Topology", "Switch Ports", "Python", "Java"),
                List.of(
                        new Metric("POP Coverage", "Global Datacenters", "rack-level topology"),
                        new Metric("Telemetry Polling", "Real-Time Health", "sub-minute sweeps"),
                        new Metric("Fault Isolation", "Automated", "CRC & duplex alerts")
                ),
                List.of(
                        "Automated network topology discovery correlating physical leaf-spine switch ports with virtual tenant circuits.",
                        "Built real-time alerting for CRC error surges, duplex mismatches, and physical cable degradation.",
                        "Provided datacenter field engineers with interactive location-wise port mapping dashboards."
                ),
                4, 5, 4,
                "Partner Pokémon: Gyarados #130 · Ability: Moxie",
                "Gyarados",
                "#130",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif",
                "Hydro Pump (Switch-Port Telemetry & Location-Wise Network Mapping)"
        );
    }

    private ProjectCard buildLaprasProject() {
        return new ProjectCard(
                "lapras-load-balancer",
                "High-Availability Load-Balancer Orchestration (HAProxy, F5, Avi)",
                "ICE",
                "❄️",
                "Load Balancing · Reverse Proxy · L4/L7 · Tata Communications",
                "Programmed automated provisioning and health-checking pipelines for enterprise L4/L7 load-balancer clusters " +
                "(HAProxy, F5 BIG-IP, VMware NSX Advanced Load Balancer / Avi), achieving zero-downtime VIP configuration reloads.",
                List.of("HAProxy", "F5 BIG-IP", "VMware Avi", "L4/L7 Proxy", "SSL/TLS Termination", "Health Probes"),
                List.of(
                        new Metric("VIP Reload", "Zero Downtime", "hitless reconfiguration"),
                        new Metric("Health Checks", "Sub-Second Failover", "synthetic HTTP probes"),
                        new Metric("Balancing Alg", "Least-Conn & RR", "multi-tenant weighted")
                ),
                List.of(
                        "Managed active-passive and active-active VIP failover configurations with automated SSL/TLS termination.",
                        "Programmed deep application layer health checks to dynamically drain and reroute traffic around failing backends.",
                        "Unified heterogeneous load balancer APIs into a single declarative tenant provisioning interface."
                ),
                4, 4, 5,
                "Partner Pokémon: Lapras #131 · Ability: Water Absorb",
                "Lapras",
                "#131",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/131.gif",
                "Ice Beam (High-Availability L4/L7 Load-Balancer Orchestration)"
        );
    }

    private ProjectCard buildNinetalesProject() {
        return new ProjectCard(
                "ninetales-modernization-cve",
                "Enterprise Java 8 to 17 & Spring Boot 3 Modernization & CVE Remediation",
                "FIRE",
                "🔥",
                "Platform Modernization · CVE Remediation · JDK Migration · Tata Communications",
                "Spearheaded enterprise modernization of mission-critical cloud platform microservices from legacy Java 8 / Spring Boot 1.x " +
                "to Java 17 LTS / Spring Boot 3, eliminating high-severity security vulnerabilities and slashing GC pause times.",
                List.of("Java 17 LTS", "Spring Boot 3", "Jakarta EE", "CVE Remediation", "ZGC & G1GC", "Vulnerability Scanning"),
                List.of(
                        new Metric("Java Version", "8 → 17 LTS", "enterprise upgrade"),
                        new Metric("Vulnerabilities", "0 High/Crit CVEs", "100% remediated"),
                        new Metric("GC Pause Latency", "35% Reduction", "G1/ZGC memory tuning")
                ),
                List.of(
                        "Refactored deprecated javax.* APIs to Jakarta namespace and migrated legacy XML configurations to modern Spring Beans.",
                        "Upgraded vulnerable third-party dependencies to eliminate remote code execution (RCE) and injection vulnerabilities.",
                        "Tuned garbage collection flags (G1/ZGC) resulting in a 35% reduction in 99th percentile pause times under heavy load."
                ),
                5, 5, 4,
                "Partner Pokémon: Ninetales #038 · Ability: Flash Fire",
                "Ninetales",
                "#038",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/38.gif",
                "Flamethrower (Java 8 to 17 Platform Modernization & CVE Remediation)"
        );
    }

    private ProjectCard buildJigglypuffProject() {
        return new ProjectCard(
                "jigglypuff-autoscaling-sync",
                "Infrastructure Polling, Autoscaling State Synchronization & Deduplication",
                "FAIRY",
                "✨",
                "Distributed State · Event Deduplication · Consensus · Tata Communications",
                "Architected asynchronous background synchronization workers that poll heterogeneous cloud hypervisor APIs, " +
                "deduplicating high-frequency cluster events and updating the primary operational datastore with optimistic locking.",
                List.of("Event Deduplication", "Optimistic Locking", "Sliding-Window Batching", "Spring Task", "PostgreSQL", "Idempotency"),
                List.of(
                        new Metric("Event Throughput", "50,000+ events/hr", "cluster event stream"),
                        new Metric("State Reconciliation", "100% Consistent", "zero split-brain"),
                        new Metric("Database Load", "60% Cut", "sliding-window compaction")
                ),
                List.of(
                        "Implemented idempotency keys and state hashing to eliminate redundant writes during cluster-wide autoscaling spikes.",
                        "Resolved race conditions between concurrent management portal requests and hypervisor-initiated event streams.",
                        "Reduced background database write load by 60% through sliding-window event batching and compaction."
                ),
                4, 4, 4,
                "Partner Pokémon: Jigglypuff #039 · Ability: Cute Charm",
                "Jigglypuff",
                "#039",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/39.gif",
                "Sing & Dazzling Gleam (Autoscaling State Synchronization & Event Deduplication)"
        );
    }

    private ProjectCard buildEeveeProject() {
        return new ProjectCard(
                "eevee-public-ip-lifecycle",
                "Public-IP Lifecycle Automation, CIDR Expansion & Migrated-IP Reconciliation",
                "NORMAL",
                "🦊",
                "IPAM · Subnet Routing · Automation · Tata Communications",
                "Engineered end-to-end IP Address Management (IPAM) automation for allocating, reserving, routing, and reclaiming IPv4/IPv6 " +
                "public subnets, cross-reconciling legacy migrated tenant IPs across cloud zones with zero routing flapping.",
                List.of("IPAM Automation", "IPv4/IPv6 CIDR", "Subnet Routing", "Reconciliation Engine", "Linux Networking", "REST APIs"),
                List.of(
                        new Metric("Allocation Time", "Instantaneous", "O(1) bitset lookup"),
                        new Metric("IP Leakage", "0 Orphaned IPs", "automated sweeps"),
                        new Metric("Subnet Range", "Multi-Region CIDR", "cross-datacenter BYOIP")
                ),
                List.of(
                        "Built bitset-indexed subnet tracking to allocate contiguous CIDR blocks in constant O(1) time.",
                        "Automated lifecycle reclamation sweeps to detect and free orphaned public IPs from decommissioned customer VMs.",
                        "Reconciled customer-owned legacy IP blocks (BYOIP) during cross-datacenter migrations without routing table flapping."
                ),
                4, 4, 5,
                "Partner Pokémon: Eevee #133 · Ability: Adaptability",
                "Eevee",
                "#133",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/133.gif",
                "Swift (Public-IP Lifecycle Automation & Subnet Reconciliation)"
        );
    }
}
