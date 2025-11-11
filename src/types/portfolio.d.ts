export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Organization {
  id: number;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skills {
  backend: string[];
  frontend: string[];
  database: string[];
  tools: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string;
  featured?: boolean;
  category?: string;
}

export interface Certificate {
  id: number;
  title: string;
  year: string;
  type?: string;
  issuer?: string;
  description?: string;
  file?: string;
  fileUrl?: string;
}

export interface Training {
  id: number;
  title: string;
  language: string;
  startDate: string;
  endDate: string;
  description?: string;
  projects: Project[];
}

export interface PubScholarship {
  title: string;
  description: string;
  trainings: Training[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  organizations: Organization[];
  skills: Skills;
  pubScholarship: PubScholarship;
  projects: Project[];
  certificates: Certificate[];
}
