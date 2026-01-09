export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  architecture: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  status: 'STABLE' | 'OPTIMIZED' | 'NATIVE' | 'LATEST';
  utility: string;
  checksum: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
}