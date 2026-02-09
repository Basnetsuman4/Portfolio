
import { Project, Experience, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Suman Basnet",
  title: "Next.js & React Developer",
  email: "sumanbasnet054@gmail.com",
  github: "https://github.com/Suman-Basnet",
  linkedin: "https://linkedin.com/in/Suman-Basnet",
  about: "A forward-thinking Next.js Developer specialized in building high-performance, SEO-optimized web applications. I bridge the gap between complex backend logic and fluid frontend experiences using the modern React ecosystem, including React Native for cross-platform mobile solutions. I leverage advanced AI agents and LLMs to drastically increase development velocity and maintain high code quality."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "Intosoft Pvt Ltd",
    duration: "Feb 2024 - Present",
    responsibilities: [
      "Architecting scalable frontend solutions using Next.js App Router and Server Components.",
      "Optimizing Core Web Vitals and implementing advanced SEO strategies for SaaS products.",
      "Integrating AI-driven features to enhance user interactions and automate workflows.",
      "Mentoring junior interns on modern Next.js patterns and AI-assisted development."
    ]
  },
  {
    id: "exp-2",
    role: "Frontend Developer Intern",
    company: "Intosoft Pvt Ltd",
    duration: "Nov 2023 - Feb 2024",
    responsibilities: [
      "Assisted in building responsive dashboards using React and Styled Components.",
      "Integrated REST APIs and managed application state using Redux.",
      "Participated in agile ceremonies and code reviews.",
      "Contributed to bug fixes and UI enhancements across multiple client projects."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p-1",
    title: "Escape Plan",
    category: "Industrial",
    description: "Developed user-friendly interfaces for a SaaS platform enabling clients to upload building drawings and manage fire escape plans. Implemented multi-user roles, job listings, and Stripe integration.",
    tags: ["Next.js", "Styled Components", "Redux", "Formik", "Stripe"],
  },
  {
    id: "p-2",
    title: "Energy Fix",
    category: "Industrial",
    description: "Designed dynamic user interfaces for managing home energy retrofit projects. Enhanced form functionality for SEAI grant funding applications with robust validation.",
    tags: ["Next.js", "Redux", "Formik", "Yup", "Axios"],
  },
  {
    id: "p-3",
    title: "House Build",
    category: "Industrial",
    description: "Built intuitive interfaces for homeowners and professionals to manage construction projects, mortgages, and insurance. Integrated product discovery and professional service booking.",
    tags: ["React", "Styled Components", "Redux", "Formik"],
  },
  {
    id: "p-4",
    title: "Student Easypay",
    category: "College",
    description: "A secure platform for easy payment processing of college fees and result analysis, helping students track academic performance through insightful visualizations.",
    tags: ["Next.js", "Node.js", "Chart.js", "Express"],
  },
  {
    id: "p-5",
    title: "GEOMEDLINK",
    category: "College",
    description: "Mobile application for booking ambulances and locating nearby health institutes. Includes real-time tracking via Firebase and a social feed for health updates.",
    tags: ["React Native", "Firebase", "Google Maps API"],
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frameworks & Core",
    skills: ["Next.js (App Router)", "React", "React Native", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "AI & Development Velocity",
    skills: ["AI Agent Workflows", "Prompt Engineering", "Cursor / v0 Expertise", "Copilot Optimization", "Rapid Prototyping"]
  },
  {
    name: "Tools & Libraries",
    skills: ["Redux Toolkit", "React Query", "Formik / Yup", "Axios", "Git", "Figma"]
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Lalitpur Engineering College",
    degree: "Bachelor of Computer Engineering",
    duration: "2019 - 2024",
    location: "Chakupat, Patan, Lalitpur"
  },
  {
    institution: "Triton International College",
    degree: "High School (Science)",
    duration: "2016 - 2019",
    location: "Subhidhanagar, Tinkune"
  }
];
