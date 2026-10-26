package com.harshal.portfolio.model;

public record AuthResponse(String token, String type, long expiresInMs) {
    public static AuthResponse bearer(String token, long expiresInMs) {
        return new AuthResponse(token, "Bearer", expiresInMs);
    }
}
