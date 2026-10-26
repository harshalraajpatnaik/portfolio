package com.harshal.portfolio.model;

import java.util.List;

/**
 * Immutable profile response model representing Harshal Raaj Patnaik's
 * verified professional identity.
 */
public record ProfileResponse(
        String name,
        String title,
        String summary,
        ContactInfo contact,
        List<EducationEntry> education,
        List<WorkExperience> experience,
        List<String> awards
) {
    public record ContactInfo(String linkedin, String github, String email) {}

    public record EducationEntry(
            String institution,
            String degree,
            String field,
            String period,
            String location,
            String note
    ) {}

    public record WorkExperience(
            String company,
            String role,
            String period,
            String location,
            String domain,
            List<String> highlights
    ) {}
}
