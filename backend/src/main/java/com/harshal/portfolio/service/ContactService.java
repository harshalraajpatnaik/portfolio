package com.harshal.portfolio.service;

import com.harshal.portfolio.model.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.Instant;

/**
 * Handles inbound contact form submissions.
 * In production, wire to a transactional email provider (e.g., SendGrid, AWS SES)
 * or persist to a configured datastore. Currently logs securely for MVP.
 */
@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    public void handleSubmission(ContactRequest request) {
        // In production: send to email or persist to DB.
        // Logging only masked preview to avoid leaking PII.
        log.info("Contact form submission received from '{}' at {}", maskEmail(request.email()), Instant.now());
    }

    private String maskEmail(String email) {
        if (email == null || !email.contains("@")) return "[invalid]";
        String local  = email.substring(0, email.indexOf("@"));
        String domain = email.substring(email.indexOf("@"));
        return (local.length() <= 2 ? local : local.charAt(0) + "***" + local.charAt(local.length() - 1)) + domain;
    }
}
