
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  tech: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}
