package com.harshal.portfolio.model;

import java.time.Instant;

/**
 * Live telemetry snapshot for the portfolio backend.
 * Demonstrates real-time observability patterns (Actuator-backed).
 */
public record TelemetrySnapshot(
        Instant timestamp,
        String apiVersion,
        String status,
        long uptimeSeconds,
        Runtime runtime,
        ApiStats apiStats
) {
    public record Runtime(
            String javaVersion,
            String springBootVersion,
            long heapUsedMb,
            long heapMaxMb,
            int availableProcessors
    ) {}

    public record ApiStats(
            long totalRequests,
            long upSinceEpoch,
            double avgResponseMs
    ) {}
}
