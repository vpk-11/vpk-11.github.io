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
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;  // Set to true in projects.json to show the Featured badge
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
  achievements?: string[];  // XYZ formula bullets, supports **bold** / *italic* via formatText
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa?: string;
  description: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  link: string;
}