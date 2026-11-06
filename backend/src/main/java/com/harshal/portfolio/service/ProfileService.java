package com.harshal.portfolio.service;

import com.harshal.portfolio.model.ProfileResponse;
import com.harshal.portfolio.model.ProfileResponse.*;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Serves verified, genuine profile data for Harshal Raaj Patnaik,
 * synthesizing his enterprise engineering work at Novamesh Ltd. / Tata Communications with
 * his Executive PGPM at IIM Kozhikode (SthiraX platform capstone).
 */
@Service
public class ProfileService {

    public ProfileResponse getProfile() {
        return new ProfileResponse(
                "Harshal Raaj Patnaik",
                "Senior Software Engineer | Cloud Infrastructure, Distributed Systems & Platform Builder (Tech × MBA)",
                "Senior Software Engineer at Novamesh Ltd. (wholly owned subsidiary of Tata Communications) and Executive MBA scholar in the " +
                "Executive Post Graduate Programme (EPGP) in General Management at IIM Kozhikode. Deep distributed systems engineer " +
                "architecting multi-hypervisor VM orchestration across KVM/VMware/OLVM, Caringo Swarm S3 storage onboarding, " +
                "and high-throughput distributed batch schedulers (92.6% latency reduction). Unites distributed systems engineering " +
                "with executive coursework in Product Management, Financial Accounting, Operations Strategy, Risk Analysis, Product Analytics, " +
                "and Negotiation to bridge deep tech with platform economics and enterprise value.",
                new ContactInfo(
                        "https://linkedin.com/in/harshalraajpatnaik/",
                        "https://github.com/harshalraajpatnaik",
                        "harshalraajpatnaik@outlook.com",
                        "https://harshalraajpatnaik.pages.dev/"
                ),
                buildEducation(),
                buildExperience(),
                List.of(
                        "3× Extra Mile Commitment Award — Tata Communications Ltd.",
                        "Flipkart Grid 2.0 Engineering Challenge — Team Lead (Top 150 Nationwide Rank out of 20,000+ Teams)",
                        "Coding Ninjas Full Stack Web Development Certified",
                        "Architecting with Google Compute Engine — Google Cloud & Coursera",
                        "Selected for Swachh Bharat Initiative (Waste Segregation)",
                        "Rank 2404 Globally — 5th SOF International Mathematics Olympiad"
                )
        );
    }

    private List<EducationEntry> buildEducation() {
        return List.of(
                new EducationEntry(
                        "Indian Institute of Management Kozhikode (IIMK)",
                        "Executive Post Graduate Programme (EPGP) in General Management",
                        "Product Management, Financial Accounting, Operations, Strategy & Risk Analysis",
                        "2025 – Present",
                        "Kochi, India",
                        "Capstone: SthiraX — Distributed CO₂-Mineralization Platform for Certified Low-Carbon Precast Materials in India"
                ),
                new EducationEntry(
                        "SRM Institute of Science and Technology",
                        "Bachelor of Technology in Computer Science and Engineering",
                        "Computer Science & Engineering (87.6% / CGPA 8.76)",
                        "2017 – 2021",
                        "Chennai, India",
                        "Core Coursework: Data Structures, Algorithms Analysis, DBMS, Distributed Systems, Software Engineering, AI, SQA, Cryptography"
                )
        );
    }

    private List<WorkExperience> buildExperience() {
        return List.of(
                new WorkExperience(
                        "Novamesh Ltd. (Wholly Owned Subsidiary of Tata Communications)",
                        "Senior Software Engineer (Cloud Platforms & Distributed Infrastructure)",
                        "Apr 2024 – Present",
                        "Chennai, India",
                        "Multi-Hypervisor Orchestration · Network Automation · High-Throughput Schedulers",
                        List.of(
                                "Architected multi-hypervisor VM orchestration and tracking dashboard across KVM, VMware ESXi, and OLVM clusters, decoupling heavy provisioning tasks via RabbitMQ asynchronous message queues.",
                                "Slashed critical cloud resource batch scheduler latency by 92.6% (from ~18 minutes down to 80 seconds) across distributed Cassandra clusters by implementing strict 50-item batch chunking, multi-level Redis caching, and tuning HikariCP connection pools.",
                                "Automated network security controls via FortiGate REST APIs for firewall rules, VDOM tokens, and IPsec VPNs; engineered an in-process sliding-window token bucket rate limiter eliminating 100% of HTTP 429 errors.",
                                "Engineered dynamic route discovery, wildcard path forwarding, and multi-tenant workspace access validation across Kong API Gateway and reverse proxies.",
                                "Stepped up as Acting Scrum Master and technical mentor, facilitating sprint ceremonies, cross-functional dependency tracking, and timely production delivery."
                        )
                ),
                new WorkExperience(
                        "Tata Communications Ltd.",
                        "Software Development Engineer (Cloud Infrastructure & Full-Stack)",
                        "Jul 2021 – Mar 2024",
                        "Chennai, India",
                        "Cloud Storage · Frontend Modernization · CI/CD Pipelines · SRE",
                        List.of(
                                "Engineered full-stack onboarding workflow for Caringo Swarm S3-compatible cloud object storage using Java, Maven, and Angular, enabling automated bucket provisioning and cPanel DNS A-record associations.",
                                "Spearheaded frontend modernization by migrating legacy codebases from AngularJS to modern reactive Angular 17, improving component reusability and client-side rendering speed.",
                                "Automated continuous integration and release packaging pipelines using Jenkins CI, Maven, and JUnit quality gates, significantly cutting deployment friction and manual verification overhead.",
                                "Engineered switch-port utilization and network capacity telemetry engine integrating Zabbix and Nimsoft APIs, computing cluster-wide CPU, memory, and datastore allocation to prevent capacity exhaustion.",
                                "Earned 3× Extra Mile Commitment Awards for operational excellence, critical incident resolution, and high-velocity feature delivery."
                        )
                ),
                new WorkExperience(
                        "IIM Kozhikode — Business Plan Capstone (BPP)",
                        "Platform & Strategy Lead — SthiraX Project",
                        "2025 – Present",
                        "Kochi, India",
                        "Climate-Tech · Platform Business Models · EPR Compliance",
                        List.of(
                                "Designed an asset-light platform retrofitting regional precast concrete plants with modular industrial CO₂-curing units to meet India's April 2026 C&D Waste Management mandates.",
                                "Architected batch-level MRV (Measurement, Reporting & Verification) software generating tamper-evident Digital Product Passports for developers fulfilling EPR obligations.",
                                "Formulated multi-layer monetization (onboarding fees, equipment leasing, per-tonne royalty, MRV SaaS subscription) and modeled unit economics independent of carbon credit volatility.",
                                "Developed geospatial scoring algorithm balancing CO₂ haul radius, steel slag feedstock density, and precast manufacturing clusters."
                        )
                )
        );
    }
}
