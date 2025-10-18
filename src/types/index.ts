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

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  location: string;
}