package com.harshal.portfolio.controller;

import com.harshal.portfolio.model.ContactRequest;
import com.harshal.portfolio.service.ContactService;
import io.github.bucket4j.Bucket;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/contact")
@Tag(name = "Contact", description = "Rate-limited contact form submission")
public class ContactController {

    private final ContactService contactService;
    private final Bucket contactBucket;

    public ContactController(ContactService contactService,
                             @Qualifier("contactRateLimiter") Bucket contactBucket) {
        this.contactService = contactService;
        this.contactBucket  = contactBucket;
    }

    @PostMapping
    @Operation(summary = "Submit a contact message",
               description = "Rate-limited to 5 requests per hour per server (token bucket). Demonstrates sliding-window rate control patterns from enterprise API gateway work.")
    public ResponseEntity<Map<String, String>> submit(@Valid @RequestBody ContactRequest request) {
        if (!contactBucket.tryConsume(1)) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Map.of("error", "Rate limit exceeded. Please try again later."));
        }
        contactService.handleSubmission(request);
        return ResponseEntity.ok(Map.of("message", "Thank you! Your message has been received."));
    }
}
