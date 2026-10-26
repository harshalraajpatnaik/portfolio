package com.harshal.portfolio.controller;

import com.harshal.portfolio.model.AuthRequest;
import com.harshal.portfolio.model.AuthResponse;
import com.harshal.portfolio.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@Tag(name = "Auth", description = "Admin authentication — returns a signed JWT for protected admin endpoints")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    @Operation(summary = "Admin login",
               description = "Authenticates admin credentials (BCrypt-verified) and returns a signed HMAC-SHA512 JWT. Demonstrates Spring Security + stateless JWT auth pattern.")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return authService.authenticate(request.username(), request.password())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).build());
    }
}
