package com.harshal.portfolio.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/admin")
@Tag(name = "Admin", description = "Protected admin endpoints — requires Bearer JWT from /api/v1/auth/login")
public class AdminController {

    @GetMapping("/status")
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Admin status check",
               description = "Protected admin-only endpoint. Requires a valid JWT in Authorization: Bearer header.")
    public ResponseEntity<Map<String, String>> status() {
        return ResponseEntity.ok(Map.of(
                "status", "Authenticated as ADMIN",
                "message", "Admin boundary active. Content management endpoints will be added here."
        ));
    }
}
