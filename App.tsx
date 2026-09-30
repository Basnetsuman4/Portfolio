import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import Skills from "./components/Skills";
import ASMRStaticBackground from "@/components/ui/demo";

const App: React.FC = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [showScrollTop, setShowScrollTop] = useState(false);

	// Enforce dark mode by default
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.add("dark");
		root.classList.remove("light");
		localStorage.setItem("theme", "dark");
	}, []);

	// Active section tracking
	useEffect(() => {
		const sections = ["home", "about", "experience", "projects", "skills", "contact"];

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 140;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
					}
				}
			}

			setShowScrollTop(window.scrollY > 500);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Scroll reveal observer
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.01, rootMargin: "50px 0px" },
		);

		const observeAll = () => {
			const revealEls = document.querySelectorAll(".reveal");
			revealEls.forEach((el) => observer.observe(el));
		};

		observeAll();

		const mutationObserver = new MutationObserver(() => observeAll());
		mutationObserver.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			mutationObserver.disconnect();
		};
	}, []);

	const personJsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Suman Basnet",
		"jobTitle": "Next.js & React Developer",
		"url": "https://Basnetsuman4.github.io/Portfolio/",
		"email": "arunbasnet54@gmail.com",
		"sameAs": [
			"https://github.com/Basnetsuman4",
			"https://www.linkedin.com/in/5umanbasnet/"
		],
		"knowsAbout": [
			"Next.js",
			"React",
			"React Native",
			"TypeScript",
			"Tailwind CSS",
			"AI Agent Workflows",
			"SEO Optimization",
			"Web Performance"
		]
	};

	const websiteJsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"url": "https://Basnetsuman4.github.io/Portfolio/",
		"name": "Suman Basnet Portfolio",
		"description": "Portfolio of Suman Basnet — Next.js and React Developer",
		"author": {
			"@type": "Person",
			"name": "Suman Basnet"
		}
	};

	return (
		<div className="min-h-screen relative overflow-x-hidden bg-[#0e0e0e]/80">
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
			/>

			{/* Full-Site Kinetic ASMR Canvas Background */}
			<div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
				<ASMRStaticBackground />
			</div>
			{/* Background effects */}
			<div className="bg-texture pointer-events-none" aria-hidden="true" />
			<div className="bg-noise pointer-events-none" aria-hidden="true" />

			<Navbar activeSection={activeSection} />

			<main className="container-main">
				<Hero />
				<About />
				<ExperienceSection />
				<ProjectsGrid />
				<Skills />
				<Contact />
			</main>

			<Footer />

			{/* Scroll-to-top */}
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full btn-primary shadow-lg transition-all duration-300 ${
					showScrollTop
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-4 pointer-events-none"
				}`}
				aria-label="Scroll to top"
			>
				<svg
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					stroke="currentColor"
					strokeWidth={2.5}
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M2 9.5L7 4.5L12 9.5" />
				</svg>
			</button>
		</div>
	);
};

export default App;
