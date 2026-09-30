import { Project, Experience, SkillCategory, Education } from "./types";

export const PERSONAL_INFO = {
	name: "Suman Basnet",
	title: "Next.js & React Architect",
	email: "arunbasnet54@gmail.com",
	github: "https://github.com/Basnetsuman4",
	linkedin: "https://www.linkedin.com/in/5umanbasnet/",
	about:
		"I engineer modern web & mobile experiences with the React ecosystem. My focus is on writing clean, type-safe code that scales — leveraging Next.js App Router, React Server Components, and AI agent workflows to accelerate delivery times by 3x without compromising architectural integrity.",
};

export const EXPERIENCES: Experience[] = [
	{
		id: "exp-1",
		role: "Frontend Developer",
		company: "Intosoft Pvt Ltd",
		duration: "Feb 2024 - Present",
		technologies: ["Next.js", "React", "App Router", "SEO", "TypeScript"],
		responsibilities: [
			"Engineered scalable UI features using Next.js App Router and React Server Components under senior lead guidance.",
			"Monitored and optimized Core Web Vitals, achieving 98+ performance benchmarks across client production applications.",
			"Integrated LLM & AI agent workflows to automate routine UI scaffolding and boost sprint velocity by 40%.",
			"Utilized reusable component libraries and design tokens to maintain strict UI consistency across complex SaaS platforms.",
		],
	},
	{
		id: "exp-2",
		role: "Frontend Developer Intern",
		company: "Intosoft Pvt Ltd",
		duration: "Nov 2023 - Feb 2024",
		technologies: ["React", "Redux Toolkit", "Styled Components", "REST APIs"],
		responsibilities: [
			"Developed responsive, data-driven dashboards using React and Styled Components for real-time user data visualization.",
			"Streamlined state management by integrating RESTful APIs and predictable data flow via Redux Toolkit.",
			"Collaborated in Agile sprints, contributing to daily standups, code reviews, and cross-functional technical alignment.",
			"Resolved technical debt and UI inconsistencies, delivering critical bug fixes across diverse client projects.",
		],
	},
];

export const PROJECTS: Project[] = [
	{
		id: "p-1",
		title: "Escape Plan",
		description:
			"Architectural SaaS platform enabling clients to upload building drawings, generate fire escape plans, manage role-based access, and process Stripe billing.",
		tags: ["Next.js", "Styled Components", "Redux", "Formik", "Stripe"],
		liveUrl: "https://www.escapeplan.ie/",
		logoUrl: "https://www.google.com/s2/favicons?domain=www.escapeplan.ie&sz=128",
	},
	{
		id: "p-2",
		title: "Energy Fix",
		description:
			"Retrofit management engine streamlining SEAI grant funding applications with multi-step validated forms and real-time calculation logic.",
		tags: ["Next.js", "Redux", "Formik", "Yup", "Axios"],
		liveUrl: "https://www.energyfix.ie/",
		logoUrl: "https://www.google.com/s2/favicons?domain=www.energyfix.ie&sz=128",
	},
	{
		id: "p-3",
		title: "House Build",
		description:
			"Comprehensive marketplace and project management interface connecting homeowners with construction contractors, mortgage tools, and service bookings.",
		tags: ["React", "Styled Components", "Redux", "Formik"],
		liveUrl: "https://www.housebuild.com/",
		logoUrl: "https://www.google.com/s2/favicons?domain=www.housebuild.com&sz=128",
	},
];

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		name: "Frameworks & Core",
		skills: [
			"Next.js (App Router)",
			"React 19",
			"React Native",
			"TypeScript",
			"Tailwind CSS",
		],
	},
	{
		name: "AI & Development Velocity",
		skills: [
			"AI Agent Workflows",
			"Prompt Engineering",
			"Cursor / v0 Expertise",
			"Copilot Optimization",
			"Rapid Prototyping",
		],
	},
	{
		name: "Tools & Libraries",
		skills: [
			"Redux Toolkit",
			"React Query",
			"Formik / Yup",
			"Axios",
			"Git & GitHub",
			"Figma",
		],
	},
	{
		name: "Soft Skills & Engineering",
		skills: [
			"Architectural Design",
			"Problem Solving",
			"Agile Collaboration",
			"Technical Communication",
		],
	},
];

export const EDUCATIONS: Education[] = [
	{
		institution: "Lalitpur Engineering College",
		degree: "Bachelor of Computer Engineering",
		duration: "2019 - 2024",
		location: "Chakupat, Patan, Lalitpur",
	},
	{
		institution: "Triton International College",
		degree: "High School  ",
		duration: "2016 - 2019",
		location: "Subhidhanagar, Tinkune",
	},
];
