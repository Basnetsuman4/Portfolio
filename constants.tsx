
import React from 'react';
import { Project, SkillCategory, ExperienceItem } from './types';
import { 
  Code2, 
  Layers, 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Zap, 
  Workflow,
  ShieldCheck,
  ZapIcon,
  Home,
  CreditCard,
  MapPin,
  Monitor,
  Rocket,
  Search,
  Settings
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'housebuild',
    title: 'HouseBuild',
    description: 'Optimized residential construction workflows through distributed state management and Edge-ready Next.js modules.',
    longDescription: 'Engineered the core architecture for HouseBuild\'s project ecosystem, focusing on reducing data sync latency by 60%. Implemented an advanced technical SEO strategy using Next.js metadata API and dynamic routing, which drove a 40% increase in organic construction lead generation within the first quarter of deployment.',
    stack: ['Next.js', 'Redux', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Organic Traffic', value: '+40% Growth' },
      { label: 'Sync Latency', value: '-60% Reduction' }
    ],
    architecture: 'Real-time synchronization architecture using WebSockets for live jobsite updates and distributed state.',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'energy-fix',
    title: 'EnergyFix',
    description: 'Automated SEAI grant compliance workflows with server-side logic and aggressive performance tuning.',
    longDescription: 'Pivoted the legacy frontend to a high-performance Next.js 14 environment. Streamlined technical audit pipelines using Server Actions and ISR (Incremental Static Regeneration), reducing application errors by 25% and achieving a Lighthouse performance score of 98+ across all regional landing pages for EnergyFix.ie.',
    stack: ['Next.js', 'Tailwind CSS', 'Server Actions', 'Redux', 'Yup'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Conversion Rate', value: '+15% Increase' }
    ],
    architecture: 'Performant Next.js 14 architecture utilizing Server Actions for secure grant application processing and optimized image handling for project audits.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'escape-plan',
    title: 'Escape Plan SaaS',
    description: 'Scalable multi-tenant SaaS architecture for mission-critical visualization and automated invoicing.',
    longDescription: 'Refactored the core rendering engine to support dynamic, high-resolution escape plans. Integrated a sophisticated Stripe billing layer and optimized client-side hydration patterns, resulting in a 30% reduction in TTI (Time to Interactive) and significant reductions in infrastructure overhead through modular component logic.',
    stack: ['Next.js', 'Styled Components', 'Redux', 'Stripe', 'Formik'],
    metrics: [
      { label: 'TTI Optimization', value: '-30% Faster' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    architecture: 'Modular micro-frontend approach with Next.js App Router and centralized state.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'geomedlink',
    title: 'GEOMEDLINK',
    description: 'Real-time administrative dispatch system optimized for sub-second latency and zero-trust security.',
    longDescription: 'Architected the Next.js administrative hub for a hybrid health-tracking ecosystem. Engineered optimized Firebase listeners and Edge-cached data fetching to ensure 100% uptime for mission-critical ambulance dispatching, while reducing administrative processing time by 40% through intuitive UI automation.',
    stack: ['Next.js', 'React Native', 'Firebase', 'FCM'],
    metrics: [
      { label: 'Admin Efficiency', value: '+40% Gain' },
      { label: 'Dispatch Lag', value: '< 200ms' }
    ],
    architecture: 'Event-driven architecture with a Next.js powered management console for dispatching.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'easypay',
    title: 'Student Easypay',
    description: 'High-performance financial dashboarding with specialized data visualization and SSG optimizations.',
    longDescription: 'Engineered a secure academic payment layer focusing on transactional integrity and SEO-friendly reporting. Leveraged Next.js Static Site Generation (SSG) to deliver instantaneous dashboard responses, increasing user retention by 22% and securing high-traffic payment peaks through aggressive server-side caching.',
    stack: ['Next.js', 'Axios', 'Node.js', 'Chart.js'],
    metrics: [
      { label: 'User Retention', value: '+22% Boost' },
      { label: 'Page Load', value: 'Instant (SSG)' }
    ],
    architecture: 'Next.js static site generation (SSG) for static pages with dynamic hydration for dashboards.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Engine_Core',
    skills: [
      { name: 'Next.js', status: 'NATIVE', utility: 'Full_Stack_Frontend', checksum: '0xNX_991' },
      { name: 'TypeScript', status: 'NATIVE', utility: 'Strict_Typing', checksum: '0xTS_882' },
      { name: 'React', status: 'OPTIMIZED', utility: 'Virtual_DOM', checksum: '0xRN_112' },
      { name: 'JavaScript', status: 'STABLE', utility: 'Runtime_Logic', checksum: '0xJS_994' }
    ]
  },
  {
    title: 'Runtime_Tools',
    skills: [
      { name: 'Redux', status: 'OPTIMIZED', utility: 'State_Sync', checksum: '0xRX_332' },
      { name: 'Tailwind CSS', status: 'STABLE', utility: 'Utility_First', checksum: '0xTW_905' },
      { name: 'Python', status: 'LATEST', utility: 'Automation', checksum: '0xPY_741' },
      { name: 'Node.js', status: 'NATIVE', utility: 'Edge_Runtime', checksum: '0xND_551' }
    ]
  }
];

export const SERVICES = [
  {
    title: 'Next.js Architecture',
    description: 'Building high-fidelity Next.js applications optimized for App Router, SSR/SSG patterns, and Core Web Vitals.',
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: 'Fullstack Engineering',
    description: 'Developing end-to-end solutions combining the power of the Edge with modern Next.js environments.',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: 'Performance Audits',
    description: 'Deep dive into payload optimization, hydration strategies, and efficient server-side caching.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'System Optimization',
    description: 'Technical SEO and performance-first development using Next.js for enterprise-scale systems.',
    icon: <Search className="w-6 h-6" />
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Intosoft Pvt Ltd',
    role: 'Frontend Developer',
    period: 'Feb 2024 - Present',
    highlights: [
      'Leading Next.js development for industrial SaaS platforms, improving load times by 45%.',
      'Architecting complex state machines with Redux and Next.js server actions.',
      'Collaborated on high-security financial modules using Next.js API routes and Stripe.'
    ],
    stack: ['Next.js', 'TypeScript', 'Redux', 'Stripe']
  },
  {
    company: 'Intosoft Pvt Ltd',
    role: 'Frontend Developer Intern',
    period: 'Nov 2023 - Feb 2024',
    highlights: [
      'Developed core UI components for home energy retrofit projects using Next.js.',
      'Implemented server-side validation logic with Formik and Yup.',
      'Optimized asset delivery and technical SEO for the major construction platform HouseBuild.'
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Styled Components']
  }
];

export const EDUCATION = [
  {
    institution: 'Lalitpur Engineering College',
    degree: 'Bachelor of Computer Engineering',
    period: '2019 - 2024',
    location: 'Chakupat, Patan, Lalitpur'
  },
  {
    institution: 'Triton International College',
    degree: 'High School',
    period: '2016 - 2019',
    location: 'Subhidhanagar, Tinkune'
  }
];

export const TECH_ICONS = {
  Code2: <Code2 className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Shield: <ShieldCheck className="w-5 h-5" />,
  ZapIcon: <ZapIcon className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />
};
