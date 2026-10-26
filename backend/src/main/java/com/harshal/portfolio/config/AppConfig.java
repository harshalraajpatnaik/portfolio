package com.harshal.portfolio.config;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Configuration
public class AppConfig {

    @Value("${portfolio.rate-limit.contact-capacity:5}")
    private int contactCapacity;

    @Value("${portfolio.rate-limit.contact-refill-minutes:60}")
    private int contactRefillMinutes;

    /**
     * Token-bucket rate limiter for the contact endpoint.
     * Capacity: 5 requests per 60-minute window (server-wide for MVP; per-IP via Redis in production).
     */
    @Bean(name = "contactRateLimiter")
    public Bucket contactRateLimiter() {
        Bandwidth limit = Bandwidth.classic(
                contactCapacity,
                Refill.intervally(contactCapacity, Duration.ofMinutes(contactRefillMinutes))
        );
        return Bucket.builder().addLimit(limit).build();
    }

    /**
     * SpringDoc OpenAPI specification with Bearer JWT security scheme defined.
     */
    @Bean
    public OpenAPI portfolioOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Harshal Raaj Patnaik — Portfolio API")
                        .version("1.0.0")
                        .description("""
                                **Live production REST API** powering the portfolio of Harshal Raaj Patnaik.

                                Built with **Java 17 / Spring Boot 3.2**, demonstrating production-grade patterns from
                                enterprise cloud platform engineering:

                                - **Rate Limiting**: Token-bucket algorithm on contact endpoint (see `POST /api/v1/contact`)
                                - **JWT Authentication**: HMAC-SHA512 signed tokens for admin boundary (`/api/v1/admin/**`)
                                - **Spring Security**: Stateless CORS policy, secure HTTP headers, role-based authorization
                                - **Spring Boot Actuator**: Live JVM health and metrics at `/actuator/health`
                                - **Observability**: Real-time telemetry (heap, uptime, request counts) at `/api/v1/telemetry`

                                Use `POST /api/v1/auth/login` to obtain a Bearer token for admin endpoints.
                                """)
                        .contact(new Contact()
                                .name("Harshal Raaj Patnaik")
                                .url("https://www.linkedin.com/in/harshalraajpatnaik/")))
                .components(new Components()
                        .addSecuritySchemes("bearerAuth",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                                        .description("Enter the JWT token obtained from POST /api/v1/auth/login")));
    }
}
