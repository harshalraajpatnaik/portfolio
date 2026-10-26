package com.harshal.portfolio.service;

import com.harshal.portfolio.model.AuthResponse;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.Optional;

/**
 * Handles admin authentication and JWT issuance.
 * Uses BCrypt password verification and HMAC-SHA512 signed JWTs.
 * No credentials stored in source code — all secrets via environment variables.
 */
@Service
public class AuthService {

    private final String adminUsername;
    private final String adminPasswordHash;
    private final String jwtSecret;
    private final long jwtExpirationMs;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public AuthService(
            @Value("${portfolio.admin.username}") String adminUsername,
            @Value("${portfolio.admin.password-hash}") String adminPasswordHash,
            @Value("${portfolio.security.jwt-secret}") String jwtSecret,
            @Value("${portfolio.security.jwt-expiration-ms}") long jwtExpirationMs
    ) {
        this.adminUsername    = adminUsername;
        this.adminPasswordHash = adminPasswordHash;
        this.jwtSecret        = jwtSecret;
        this.jwtExpirationMs  = jwtExpirationMs;
    }

    /**
     * Authenticates admin credentials and returns a signed JWT on success.
     */
    public Optional<AuthResponse> authenticate(String username, String rawPassword) {
        if (!adminUsername.equals(username)) return Optional.empty();
        if (!encoder.matches(rawPassword, adminPasswordHash)) return Optional.empty();

        Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .claim("role", "ADMIN")
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return Optional.of(AuthResponse.bearer(token, jwtExpirationMs));
    }

    public Key signingKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }
}
