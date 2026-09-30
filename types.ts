
export interface Project {
  id: string;
  title: string;
  category?: string;
  description: string;
  tags: string[];
  logoUrl?: string;
  link?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}
