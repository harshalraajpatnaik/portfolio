package com.harshal.portfolio.model;

/**
 * Minimal auth request for admin login.
 */
public record AuthRequest(String username, String password) {}

/**
 * Auth response carrying the signed JWT.
 */
