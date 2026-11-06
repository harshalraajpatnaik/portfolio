package com.harshal.portfolio.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.List;

/**
 * Represents an engineering project case study (Pokédex & Recruiter classified).
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public record ProjectCard(
        String id,
        String title,
        String element,        // ELECTRIC, WATER, FIRE, GRASS, PSYCHIC, etc.
        String elementEmoji,
        String domain,
        String summary,
        List<String> techStack,
        List<Metric> metrics,
        List<String> highlights,
        int complexityTier,
        int resilienceTier,
        int throughputTier,
        String architecturalRole,
        String pokemonName,
        String pokedexNo,
        String spriteUrl,
        String signatureMove,
        String category,       // "COMPANY" | "PRODUCT"
        String companyName,
        String period,
        String repoUrl
) {
    public record Metric(String label, String value, String unit) {}

    // Backward-compatible 17-parameter constructor for existing project builders
    public ProjectCard(
            String id, String title, String element, String elementEmoji, String domain,
            String summary, List<String> techStack, List<Metric> metrics, List<String> highlights,
            int complexityTier, int resilienceTier, int throughputTier, String architecturalRole,
            String pokemonName, String pokedexNo, String spriteUrl, String signatureMove
    ) {
        this(id, title, element, elementEmoji, domain, summary, techStack, metrics, highlights,
             complexityTier, resilienceTier, throughputTier, architecturalRole, pokemonName,
             pokedexNo, spriteUrl, signatureMove,
             (id.contains("sthirax") || id.contains("onix") || id.contains("krookodile") || id.contains("recommend") || id.contains("lab") || id.contains("marginos") || id.contains("querylens") || id.contains("cloudscale")) ? "PRODUCT" : "COMPANY",
             id.contains("sthirax") ? "IIM Kozhikode Capstone" : (id.contains("onix") || id.contains("recommend") ? "Personal Capstone" : (id.contains("lab") || id.contains("marginos") || id.contains("querylens") || id.contains("cloudscale") ? "Independent Lab" : "Novamesh Ltd. / Tata Communications")),
             id.contains("sthirax") ? "2025 – Present" : (id.contains("onix") ? "2020 – 2021" : "Production System"),
             "https://github.com/harshalraajpatnaik"
        );
    }
}
