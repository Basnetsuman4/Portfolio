import { Project, SkillGroup, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'geomedlink',
    title: 'GeoMedLink',
    category: 'HealthTech / Mobile',
    description: 'A specialized social media platform for medical feeds and emergency orchestration. Built to bridge the gap between donors and patients in real-time.',
    bullets: [
      'Engineered a real-time blood donor locator using Firebase GeoFire, enabling instant matching between urgent needs and available donors.',
      'Implemented high-precision live tracking for ambulances and medical assets, providing critical transparency during emergency transit.',
      'Developed a curated social feed exclusively for health updates, utilizing real-time data sync to ensure information reliability.'
    ],
    tech: ['React Native', 'Firebase', 'Geolocation', 'Real-time DB']
  },
  {
    id: 'housebuild',
    title: 'HouseBuild',
    category: 'PropTech / Industrial',
    description: 'A performance-optimized PropTech ecosystem. Engineered for high-speed user interactions and search engine dominance.',
    bullets: [
      'Optimized React component tree and reconciliation logic, achieving a 35% reduction in Time to Interactive (TTI) for complex mortgage calculators.',
      'Implemented advanced SEO strategies including JSON-LD schema markup and semantic structure, resulting in a 25% increase in organic search visibility.',
      'Refactored Redux state slices into modular entities, reducing store boilerplate by 40% and improving cross-platform data consistency.'
    ],
    tech: ['React', 'Styled Components', 'Redux', 'Formik', 'Yup']
  },
  {
    id: 'escape-plan',
    title: 'Escape Plan',
    category: 'SaaS / Industrial',
    description: 'Industrial-grade digital twin manager. Focused on high-fidelity asset rendering and complex multi-role state orchestration.',
    bullets: [
      'Architected a high-performance building drawing viewer capable of rendering 50MB+ vector assets with 60fps smoothness during pan/zoom operations.',
      'Developed a custom Redux middleware for role-based access control (RBAC), securing sensitive building blueprints across 4 distinct user tiers.',
      'Integrated Stripe API with a robust webhook listener architecture, automating invoice generation and reducing billing cycle latency by 50%.'
    ],
    tech: ['React', 'Styled Components', 'Redux', 'Formik', 'Stripe']
  },
  {
    id: 'energy-fix',
    title: 'Energy Fix',
    category: 'FinTech / Industrial',
    description: 'A dynamic FinTech platform for SEAI grant processing. Engineered for 99.9% data integrity in multi-step financial applications.',
    bullets: [
      'Engineered a recursive dynamic form engine for SEAI compliance, reducing client-side validation overhead and decreasing application errors by 65%.',
      'Achieved a 98/100 Lighthouse Performance score by implementing aggressive code-splitting and asset lazy-loading strategies.',
      'Implemented persistent state-saving logic with Redux-Persist, improving user completion rates for long-form grant applications by 40%.'
    ],
    tech: ['React', 'Styled Components', 'Redux', 'Formik', 'Yup']
  },
  {
    id: 'student-easypay',
    title: 'Student Easypay',
    category: 'EdTech / College',
    description: 'A user-friendly interface for easy payment processing of college fees and related expenses.',
    bullets: [
      'Integrated payment solutions to handle various transactions securely and efficiently.',
      'Implemented result analysis features to help students track and evaluate academic performance.',
      'Collaborated with the design team to ensure the app is intuitive and accessible for academic tracking.'
    ],
    tech: ['React', 'Node.js', 'Payment Gateway', 'CSS']
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Intosoft Pvt Ltd',
    role: 'Junior Frontend Developer',
    period: 'FEB, 2024 — PRESENT',
    description: 'Leading frontend development for industrial SaaS and PropTech solutions. Focusing on complex form architectures, robust state orchestration, and high-fidelity UI implementation using Styled Components.'
  },
  {
    company: 'Intosoft Pvt Ltd',
    role: 'Frontend Developer Intern',
    period: 'NOV, 2023 — FEB, 2024',
    description: 'Assisted in building modular React components for home energy retrofit projects. Gained deep expertise in Formik validation schemas and collaborative agile development workflows.'
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Lalitpur Engineering College',
    degree: 'Bachelor of Computer Engineering',
    period: '',
    location: 'Chakupat, Patan, Lalitpur'
  },
  {
    institution: 'Triton International College',
    degree: 'High School',
    period: '',
    location: 'Subhidhanagar, Tinkune'
  }
];

export const SKILLS: SkillGroup[] = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'React Native'] },
  { category: 'Libraries', items: ['Redux', 'Styled Components', 'Formik & Yup', 'Axios'] },
  { category: 'Platforms', items: ['Visual Studio Code', 'Slack', 'Antigravity', 'Postman'] }
];

export const PROCESS = [
  { step: '01', title: 'Industrial Dev', desc: 'Transforming complex business requirements into scalable frontend architectures.' },
  { step: '02', title: 'State Logic', desc: 'Implementing robust Redux stores for consistent data across multi-role platforms.' },
  { step: '03', title: 'Validation', desc: 'Crafting complex Yup schemas for industrial-grade data integrity.' },
  { step: '04', title: 'Deployment', desc: 'Ensuring seamless delivery across high-stakes industrial applications.' }
];