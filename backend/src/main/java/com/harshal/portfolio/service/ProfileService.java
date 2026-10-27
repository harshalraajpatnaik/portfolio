package com.harshal.portfolio.service;

import com.harshal.portfolio.model.ProfileResponse;
import com.harshal.portfolio.model.ProfileResponse.*;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Serves verified, genuine profile data for Harshal Raaj Patnaik,
 * synthesizing his enterprise engineering work at Tata Communications with
 * his Executive PGPM at IIM Kozhikode (SthiraX platform capstone).
 */
@Service
public class ProfileService {

    public ProfileResponse getProfile() {
        return new ProfileResponse(
                "Harshal Raaj Patnaik",
                "Full-Stack & Cloud Engineer | Technical Product & Platform Builder (Tech × MBA)",
                "Software Development Engineer at Tata Communications Ltd. and Executive MBA scholar in the " +
                "Executive Post Graduate Programme (EPGP) in General Management at IIM Kozhikode. Hands-on enterprise " +
                "architect designing multi-hypervisor VM orchestration across KVM/VMware/OLVM, Caringo Swarm S3 storage onboarding, " +
                "and high-throughput distributed batch schedulers (92.6% latency reduction). Unites distributed systems engineering " +
                "with executive coursework in Product Management, Financial Accounting, Operations Strategy, Risk Analysis, Product Analytics, " +
                "and Negotiation to bridge deep tech with platform economics and enterprise value.",
                new ContactInfo(
                        "https://linkedin.com/in/harshalraajpatnaik/",
                        "https://github.com/harshalraajpatnaik",
                        "harshalraajpatnaik@outlook.com"
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
                        "Tata Communications Ltd.",
                        "Software Development Engineer (Full-Stack & Cloud Platforms)",
                        "Jul 2021 – Present",
                        "Chennai, India",
                        "Cloud Infrastructure · Distributed Workflows · Full-Stack",
                        List.of(
                                "Engineered full-stack onboarding module for Caringo Swarm S3-compatible object storage using Java, Maven, and Angular, enabling automated bucket provisioning and DNS A-record associations.",
                                "Architected multi-hypervisor management dashboard handling KVM, VMware ESXi, and OLVM clusters; decoupled heavy VM provisioning tasks using asynchronous RabbitMQ message queues.",
                                "Owned and maintained the core enterprise VM tracking service used by executive leadership to monitor virtual infrastructure capacity, state reconciliation, and host allocation.",
                                "Optimized high-throughput batch scheduler latency by 92.6% (from ~18 minutes down to 1 minute 20 seconds) by partitioning Cassandra batch operations to 50 items, introducing multi-level Redis caching, and tuning HikariCP connection pools.",
                                "Automated network security controls via FortiGate REST APIs for firewall rule management and IPsec VPNs; implemented sliding-window rate limiting to eliminate HTTP 429 API thrashing.",
                                "Spearheaded frontend modernization by migrating legacy codebases from AngularJS to modern Angular, improving component reusability and client-side render speed.",
                                "Automated build, test, and artifact packaging pipelines using Jenkins CI, significantly reducing deployment friction and manual verification overhead.",
                                "Stepped up as Acting Scrum Master, facilitating sprint ceremonies, cross-functional dependency tracking, and timely production delivery."
                        )
                ),
                new WorkExperience(
                        "IIM Kozhikode — Business Plan Capstone (BPP)",
                        "Platform & Strategy Lead — SthiraX Project",
                        "In Progress",
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
