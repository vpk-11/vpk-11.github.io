// Theme Types
export interface ThemeState {
  mode: 'light' | 'dark';
}

export interface AccentState {
  color: string;
}

// Data Types
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
  principles: string[];
}

export interface Project {
  id: number;
  title: string;
  shortDescription?: string;  // shown on card — max 150 chars
  description: string;        // shown in modal — full detail
  tech: string[];
  link: string;
  categories?: string[];   // used for tab filtering
  featured?: boolean;   // shows ★ Featured badge
  demoLink?: string;    // live deployed URL — shows Live badge if present
  githubLink?: string;  // explicit github URL — replaces generic link
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
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