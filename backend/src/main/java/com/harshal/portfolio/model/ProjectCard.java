package com.harshal.portfolio.model;

import java.util.List;

/**
 * Represents a Pokédex-classified engineering project case study.
 * Each project is categorized with an elemental badge and partner Pokémon
 * matching the infrastructure domain it addresses.
 */
public record ProjectCard(
        String id,
        String title,
        String element,        // ELECTRIC, WATER, FIRE, GRASS, PSYCHIC, FLYING, GROUND, ROCK
        String elementEmoji,
        String domain,
        String summary,
        List<String> techStack,
        List<Metric> metrics,
        List<String> highlights,
        int complexityTier,    // 1–5 (Pokémon-style stat)
        int resilienceTier,    // 1–5
        int throughputTier,    // 1–5
        String architecturalRole,
        String pokemonName,
        String pokedexNo,
        String spriteUrl,
        String signatureMove
) {
    public record Metric(String label, String value, String unit) {}
}
