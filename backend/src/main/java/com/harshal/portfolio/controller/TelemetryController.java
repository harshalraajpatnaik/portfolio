package com.harshal.portfolio.controller;

import com.harshal.portfolio.model.TelemetrySnapshot;
import com.harshal.portfolio.service.TelemetryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/telemetry")
@Tag(name = "Telemetry", description = "Live JVM and API telemetry — real data from Spring Boot runtime management beans")
public class TelemetryController {

    private final TelemetryService telemetryService;

    public TelemetryController(TelemetryService telemetryService) {
        this.telemetryService = telemetryService;
    }

    @GetMapping
    @Operation(summary = "Live system telemetry snapshot",
               description = "Returns real-time JVM heap, uptime, Java version, and API request statistics. Demonstrates production observability patterns.")
    public ResponseEntity<TelemetrySnapshot> getTelemetry() {
        return ResponseEntity.ok(telemetryService.getSnapshot());
    }
}
