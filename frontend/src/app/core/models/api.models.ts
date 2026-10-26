export interface ProfileResponse {
  name: string;
  title: string;
  summary: string;
  contact: { linkedin: string; github: string; email: string };
  education: EducationEntry[];
  experience: WorkExperience[];
  awards: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  note: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  highlights: string[];
}

export interface ProjectCard {
  id: string;
  title: string;
  element: 'ELECTRIC' | 'WATER' | 'FIRE' | 'GRASS' | 'PSYCHIC' | 'FLYING' | 'GROUND' | 'ROCK';
  elementEmoji: string;
  domain: string;
  summary: string;
  techStack: string[];
  metrics: { label: string; value: string; unit: string }[];
  highlights: string[];
  complexityTier: number;
  resilienceTier: number;
  throughputTier: number;
  architecturalRole: string;
  pokemonName?: string;
  pokedexNo?: string;
  spriteUrl?: string;
  signatureMove?: string;
}

export interface TelemetrySnapshot {
  timestamp: string;
  apiVersion: string;
  status: string;
  uptimeSeconds: number;
  runtime: {
    javaVersion: string;
    springBootVersion: string;
    heapUsedMb: number;
    heapMaxMb: number;
    availableProcessors: number;
  };
  apiStats: {
    totalRequests: number;
    upSinceEpoch: number;
    avgResponseMs: number;
  };
}

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}
