
export interface Project {
  id: string;
  title: string;
  category: 'Industrial' | 'College';
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
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
