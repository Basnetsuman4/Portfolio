import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import Skills from "./components/Skills";

const App: React.FC = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [theme, setTheme] = useState<"light" | "dark">(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme");
			if (saved === "dark" || saved === "light") return saved;
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
		return "light";
	});
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const handleScroll = () => {
			// Update active section
			const sections = [
				"home",
				"about",
				"experience",
				"projects",
				"skills",
				"contact",
			];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const height = element.offsetHeight;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + height
					) {
						setActiveSection(section);
					}
				}
			}

			// Show/hide scroll to top
			setShowScrollTop(window.scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen relative overflow-x-hidden selection:bg-stone-200 dark:selection:bg-stone-700 selection:text-stone-900 dark:selection:text-stone-100 transition-colors duration-500">
			{/* Background blobs for subtle depth - Warmer Tones */}
			<div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#f5e6d3] dark:bg-stone-800/30 rounded-full blur-[120px] -z-10 opacity-60"></div>
			<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#e3e8d8] dark:bg-stone-900/40 rounded-full blur-[120px] -z-10 opacity-60"></div>

			<Navbar
				activeSection={activeSection}
				toggleTheme={toggleTheme}
				theme={theme}
			/>

			<main className="max-w-6xl mx-auto px-6">
				<Hero />
				<About />
				<ExperienceSection />
				<ProjectsGrid />
				<Skills />
				<Contact />
			</main>

			<Footer />

			{/* Floating Scroll to Top Button */}
			<button
				onClick={scrollToTop}
				className={`fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shadow-2xl transition-all duration-300 transform ${
					showScrollTop
						? "translate-y-0 opacity-100"
						: "translate-y-16 opacity-0 pointer-events-none"
				} hover:scale-110 active:scale-95`}
				aria-label="Scroll to top"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2.5}
						d="M5 15l7-7 7 7"
					/>
				</svg>
			</button>
		</div>
	);
};

export default App;
