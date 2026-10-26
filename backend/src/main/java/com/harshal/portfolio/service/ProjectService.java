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
                buildOnixProject()
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
}
