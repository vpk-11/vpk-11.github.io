// Theme Types
export interface ThemeState {
  mode: 'light' | 'dark';
}

// Data Types

export interface SectionHeading {
  eyebrow?: string;
  headline: string;
  tagline?: string;
}

export interface HeroHeading {
  ticker: string[];
}

export interface SectionHeadings {
  hero: HeroHeading;
  about: SectionHeading;
  skills: SectionHeading;
  certifications: SectionHeading;
  education: SectionHeading;
  experience: SectionHeading;
  projects: SectionHeading;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface CurrentlyBuildingItem {
  name: string;
  description: string;
}

export interface AboutSidebar {
  principles: string[];
  currentlyBuilding: CurrentlyBuildingItem[];
  openTo: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;   // short 1-2 sentence hero tagline
  bio: string;       // longer bio for About section
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  location: string;
  availability: string;
  targetRoles: string[];
  workAuthorization: string;
  txt: string;
  sectionHeadings?: SectionHeadings;
  aboutStats?: AboutStat[];
  aboutSidebar?: AboutSidebar;
}

export interface Project {
  id: number;
  title: string;
  shortDescription?: string;  // shown on card — max 150 chars
  description: string;        // shown in modal — full detail
  tech: string[];
  categories?: string[];   // used for tab filtering
  featured?: boolean;   // shows ★ Featured badge
  demoLink?: string;    // live deployed URL — shows Live badge if present
  githubLink: string;  // explicit github URL — replaces generic link
}

export type SkillTier = 'focus' | 'proficient' | 'exposure';

export interface SkillItem {
  name: string;
  tier?: SkillTier;   // open content gap — mechanism built, tiers assigned per-skill whenever
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
  tech?: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  coursework: string[];
  gpa?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  link: string;
}

export interface HeadlinerMetric {
  label: string;
  value: string;
}

export interface Headliner {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  metrics: HeadlinerMetric[];
  githubLink: string;
  demoUrl?: string;   // if present, render Content/Live-Demo tab switcher
}