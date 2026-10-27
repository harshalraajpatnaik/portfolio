package com.harshal.portfolio.service;

import com.harshal.portfolio.model.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.Instant;

/**
 * Handles inbound contact form transmissions.
 * Dispatches messages to Harshal Raaj Patnaik's recipient email (harshalraajpatnaik@outlook.com)
 * with graceful fallback logging so transmissions are never lost if SMTP is offline.
 */
@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final JavaMailSender mailSender;
    private final String recipientEmail;

    public ContactService(@Autowired(required = false) JavaMailSender mailSender,
                          @Value("${portfolio.contact.recipient-email:harshalraajpatnaik@outlook.com}") String recipientEmail) {
        this.mailSender = mailSender;
        this.recipientEmail = recipientEmail;
    }

    public void handleSubmission(ContactRequest request) {
        log.info("Transmission received from '{}' <{}> at {}", request.name(), maskEmail(request.email()), Instant.now());

        if (mailSender != null) {
            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo(recipientEmail);
                message.setSubject("[Portfolio Transmission] " + request.name() + " (" + request.email() + ")");
                message.setText(
                        "You received a new message from your portfolio contact gateway:\n\n" +
                        "Sender: " + request.name() + "\n" +
                        "Email: " + request.email() + "\n" +
                        "Timestamp: " + Instant.now() + "\n\n" +
                        "Message:\n" +
                        request.message() + "\n\n" +
                        "--\nTransmitted via Harshal Raaj Patnaik's Pokédex Pro Portfolio API"
                );
                message.setReplyTo(request.email());
                mailSender.send(message);
                log.info("Transmission successfully dispatched via SMTP to {}", recipientEmail);
                return;
            } catch (Exception e) {
                log.warn("SMTP dispatch failed ({}); safely recorded transmission in persistent logs.", e.getMessage());
            }
        } else {
            log.info("JavaMailSender bean not configured. Safely recorded transmission in persistent logs.");
        }

        // Always log transmission content safely so zero messages are lost
        log.info("Recorded Transmission Content: From='{}' <{}> Message='{}'",
                request.name(), request.email(), request.message());
    }

    private String maskEmail(String email) {
        if (email == null || !email.contains("@")) return "[invalid]";
        String local  = email.substring(0, email.indexOf("@"));
        String domain = email.substring(email.indexOf("@"));
        return (local.length() <= 2 ? local : local.charAt(0) + "***" + local.charAt(local.length() - 1)) + domain;
    }
}
