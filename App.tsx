import {
	Activity,
	ArrowUpRight,
	Binary,
	ChevronRight,
	Cpu,
	Filter,
	Github,
	Layers,
	Linkedin,
	Mail,
	ShieldCheck,
	XCircle,
} from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import AITechnicalConsultant from "./components/AITechnicalConsultant";
import ParticleBackground from "./components/ParticleBackground";
import RevealOnScroll from "./components/RevealOnScroll";
import TerminalIntro from "./components/TerminalIntro";
import { EXPERIENCE, PROJECTS, SKILL_CATEGORIES } from "./constants";

const MouseFollower: React.FC = () => {
	// Maintaining 24 segments for a long trail, but with tighter spacing and smaller size
	const [points, setPoints] = useState<{ x: number; y: number }[]>(
		new Array(24).fill({ x: 0, y: 0 })
	);
	const [isPointer, setIsPointer] = useState(false);
	const [active, setActive] = useState(false);
	const mouseRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
			if (!active) setActive(true);

			document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
			document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);

			const target = e.target as HTMLElement;
			// Since default cursor is none, we detect interactive elements by tag name or role
			const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"];
			const isInteractive =
				interactiveTags.includes(target.tagName) ||
				target.closest("button") ||
				target.closest("a") ||
				target.getAttribute("role") === "button";

			setIsPointer(!!isInteractive);
		};

		const animate = () => {
			setPoints((prevPoints) => {
				const newPoints = [...prevPoints];
				newPoints[0] = mouseRef.current;

				// Increased interpolation factor (0.55) makes the tail track much faster
				// while still preserving a slight elastic fluidity.
				for (let i = 1; i < newPoints.length; i++) {
					const dx = newPoints[i - 1].x - newPoints[i].x;
					const dy = newPoints[i - 1].y - newPoints[i].y;
					newPoints[i] = {
						x: newPoints[i].x + dx * 0.55,
						y: newPoints[i].y + dy * 0.55,
					};
				}
				return newPoints;
			});
			requestAnimationFrame(animate);
		};

		window.addEventListener("mousemove", handleMove);
		const animationFrame = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener("mousemove", handleMove);
			cancelAnimationFrame(animationFrame);
		};
	}, [active]);

	if (!active) return null;

	return (
		<>
			<div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
				{points.map((point, i) => {
					// Decreased radius: starting at 8px and tapering off
					const baseSize = Math.max(0.5, 8 - i * 0.35);
					const size = baseSize * (isPointer ? 1.5 : 1);
					// Opacity fade remains smooth
					const opacity = Math.max(0, 0.9 - i * 0.04);
					// Tighter blur for a "faster" technical look
					const blur = i * 0.4;

					return (
						<div
							key={i}
							className="fixed top-0 left-0 rounded-full bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.5)]"
							style={{
								width: `${size}px`,
								height: `${size}px`,
								transform: `translate(${point.x - size / 2}px, ${
									point.y - size / 2
								}px)`,
								opacity: opacity,
								filter: `blur(${blur}px)`,
								willChange: "transform, opacity",
							}}
						/>
					);
				})}
			</div>
			{/* Subtle area glow follows mouse fast */}
			<div
				className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[1] transition-transform duration-300 ease-out opacity-5 hidden lg:block rounded-full"
				style={{
					transform: `translate(${mouseRef.current.x - 200}px, ${
						mouseRef.current.y - 200
					}px)`,
					background:
						"radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)",
				}}
			/>
		</>
	);
};

const App: React.FC = () => {
	const [activeSection, setActiveSection] = useState("hero");
	const [introComplete, setIntroComplete] = useState(false);

	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	useEffect(() => {
		if (!introComplete) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll("section[id]").forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	}, [introComplete]);

	const filteredProjects = useMemo(() => {
		if (!activeFilter) return PROJECTS;
		return PROJECTS.filter((p) => p.stack.includes(activeFilter));
	}, [activeFilter]);

	if (!introComplete) {
		return <TerminalIntro onComplete={() => setIntroComplete(true)} />;
	}

	return (
		<div className="min-h-screen relative text-slate-300 selection:bg-violet-900/40 animate-in fade-in duration-1000">
			<style>{`
        .violet-glow { filter: drop-shadow(0 0 8px rgba(76, 29, 149, 0.4)); }
        .text-purple { color: #8b5cf6; text-shadow: 0 0 10px rgba(76, 29, 149, 0.3); }
        .border-purple { border-color: rgba(76, 29, 149, 0.2); box-shadow: 0 0 15px rgba(76, 29, 149, 0.05); }
        .grid-bg { background-size: 40px 40px; background-image: radial-gradient(circle, rgba(76, 29, 149, 0.05) 1px, transparent 1px); }
        .skill-node:hover .skill-utility { opacity: 1; transform: translateY(0); }
      `}</style>

			<ParticleBackground />
			<MouseFollower />
			<AITechnicalConsultant />

			{/* Navigation */}
			<nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between px-8 md:px-16 glass-card border-b border-violet-900/10">
				<div
					className="flex items-center gap-4 cursor-pointer"
					onClick={() => window.scrollTo(0, 0)}
				>
					<div className="w-10 h-10 bg-violet-900 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(76,29,149,0.4)] transition-transform hover:rotate-90 duration-500">
						S
					</div>
					<div className="flex flex-col">
						<span className="font-bold tracking-tight text-xl leading-none uppercase">
							SUMAN<span className="text-violet-500">BASNET</span>
						</span>
						<span className="text-[9px] text-violet-700 tracking-[0.4em] uppercase mt-1 font-bold">
							Status: Operational
						</span>
					</div>
				</div>
				<div className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] text-slate-500">
					{["projects", "stack", "experience", "contact"].map((item) => (
						<a
							key={item}
							href={`#${item}`}
							className={`hover:text-violet-500 transition-all duration-300 relative group ${
								activeSection === item ? "text-violet-500 font-bold" : ""
							}`}
						>
							<span className="opacity-30 mr-2 font-normal">
								0
								{["projects", "stack", "experience", "contact"].indexOf(item) +
									1}
							</span>
							{item}
							<span
								className={`absolute -bottom-2 left-0 h-[1px] bg-violet-700 transition-all duration-300 ${
									activeSection === item ? "w-full" : "w-0 group-hover:w-full"
								}`}
							/>
						</a>
					))}
				</div>
				<div className="flex items-center gap-4">
					<a href="#" className="p-2 hover:text-violet-500 transition-all">
						<Github className="w-5 h-5" />
					</a>
					<a href="#" className="p-2 hover:text-violet-500 transition-all">
						<Linkedin className="w-5 h-5" />
					</a>
					<div className="h-6 w-[1px] bg-slate-800 mx-2 hidden sm:block" />
					<button className="hidden sm:block text-[9px] uppercase tracking-widest glass-button px-4 py-2 rounded font-bold">
						DOWNLOAD_MANIFEST.PDF
					</button>
				</div>
			</nav>

			<main className="relative z-10">
				{/* Hero Section */}
				<section
					id="hero"
					className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20 relative overflow-hidden bg-transparent"
				>
					<RevealOnScroll direction="left">
						<div className="max-w-5xl space-y-10">
							<div className="flex items-center gap-4">
								<div className="px-4 py-1 rounded bg-violet-900/10 border border-violet-900/20 text-violet-500 text-[10px] uppercase tracking-[0.4em] font-bold">
									Next.js Architect // v2.0.4
								</div>
								<div className="h-[1px] w-12 bg-violet-900/20" />
								<div className="flex items-center gap-2 text-[9px] text-slate-500 uppercase font-bold">
									<Activity className="w-3 h-3 text-violet-700 animate-pulse" />
									Neural_Heartbeat: Stable
								</div>
							</div>

							<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[1.1] tracking-tighter">
								CRAFTING <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-purple-800 to-indigo-950 italic">
									NEXT_SYSTEMS.
								</span>
							</h1>

							<p className="text-base md:text-xl text-slate-400 max-w-3xl leading-relaxed font-light">
								Engineering high-concurrency Next.js environments with surgical
								precision. I turn complex server-side infrastructure into fluid,
								SEO-optimized user journeys.
							</p>

							<div className="flex flex-wrap items-center gap-10 pt-10">
								<a
									href="#projects"
									className="group relative px-10 py-5 glass-button text-white font-bold uppercase tracking-widest rounded-sm transition-all hover:translate-x-2 shadow-[0_10px_30px_rgba(76,29,149,0.2)]"
								>
									<span className="relative z-10 flex items-center gap-3">
										VIEW_DEVOPS_LOGS
										<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</span>
								</a>
								<div className="space-y-1">
									<div className="text-[10px] uppercase tracking-widest font-bold text-violet-900">
										Active_State
									</div>
									<div className="text-sm font-medium tracking-wide">
										Next.js Architecture & High-Performance UI
									</div>
								</div>
							</div>
						</div>
					</RevealOnScroll>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="py-40 px-8 md:px-16 lg:px-32 bg-black/60 backdrop-blur-[2px]"
				>
					<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
						<div className="space-y-6">
							<div className="text-xs text-violet-700 tracking-[0.5em] uppercase font-bold">
								Core_Deployments
							</div>
							<h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
								Selected Units.
							</h2>
							{activeFilter && (
								<div className="flex items-center gap-2 px-3 py-1 bg-violet-900/20 text-violet-500 text-[10px] uppercase tracking-widest font-bold border border-violet-900/20 w-fit">
									<Filter className="w-3 h-3" />
									Filtering: {activeFilter}
									<button
										onClick={() => setActiveFilter(null)}
										className="ml-2 hover:text-white"
									>
										<XCircle className="w-3 h-3" />
									</button>
								</div>
							)}
						</div>
						<div className="h-[1px] flex-1 bg-violet-900/10 mx-10 hidden md:block" />
						<div className="text-slate-500 text-[11px] uppercase tracking-widest leading-loose text-right">
							Filter: NextJS_Heavy <br />
							Integrity: 100%
						</div>
					</div>

					<div className="grid grid-cols-1 gap-48 min-h-[400px]">
						{filteredProjects.length === 0 ? (
							<div className="py-20 text-center text-slate-600 font-mono text-xs uppercase tracking-widest border border-dashed border-slate-900">
								No deployments found matching filter criteria...
							</div>
						) : (
							filteredProjects.map((project, idx) => {
								const isDimmed =
									hoveredSkill && !project.stack.includes(hoveredSkill);
								const isHighlighted =
									hoveredSkill && project.stack.includes(hoveredSkill);

								return (
									<RevealOnScroll
										key={project.id}
										direction={idx % 2 === 0 ? "left" : "right"}
									>
										<div
											className={`flex flex-col ${
												idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
											} gap-16 items-center group transition-all duration-500 ${
												isDimmed
													? "opacity-20 grayscale scale-[0.98]"
													: "opacity-100"
											} ${
												isHighlighted
													? "ring-1 ring-violet-500/50 p-4 -m-4 bg-violet-950/5"
													: ""
											}`}
										>
											<div className="w-full lg:w-3/5 relative aspect-video overflow-hidden border border-violet-900/10 group-hover:border-violet-700/40 transition-all duration-700 shadow-2xl">
												<img
													src={project.image}
													alt={project.title}
													className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms]"
												/>
												<div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-80" />
												<div className="absolute top-4 right-4 text-[10px] text-violet-700/40 uppercase tracking-widest font-bold">
													Unit_0{idx + 1}
												</div>
												<div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
													<button className="glass-button text-white px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg">
														Launch_System
													</button>
												</div>
											</div>
											<div className="w-full lg:w-2/5 space-y-8">
												<div className="space-y-2">
													<h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-violet-500 transition-colors uppercase">
														{project.title}
													</h3>
													<div className="flex flex-wrap gap-x-3 gap-y-1">
														{project.stack.map((s) => (
															<span
																key={s}
																className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${
																	hoveredSkill === s
																		? "text-violet-400"
																		: "text-violet-700"
																}`}
															>
																{s}
															</span>
														))}
													</div>
												</div>
												<p className="text-slate-400 text-base leading-relaxed font-light italic opacity-80">
													"{project.description}"
												</p>
												<p className="text-slate-400 text-sm leading-relaxed font-light">
													{project.longDescription}
												</p>

												<div className="grid grid-cols-2 gap-8 py-8 border-t border-violet-900/10">
													{project.metrics.map((metric) => (
														<div key={metric.label}>
															<div className="text-violet-600 font-bold text-xl tracking-tight">
																{metric.value}
															</div>
															<div className="text-slate-600 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">
																{metric.label}
															</div>
														</div>
													))}
												</div>

												<a
													href="#"
													className="inline-flex items-center gap-4 text-violet-500 text-xs uppercase tracking-[0.3em] hover:gap-6 transition-all group/btn font-bold"
												>
													READ_ARCH_FILE
													<ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
												</a>
											</div>
										</div>
									</RevealOnScroll>
								);
							})
						)}
					</div>
				</section>

				{/* Stack Section - Visual Skill Map */}
				<section
					id="stack"
					className="py-40 px-8 md:px-16 lg:px-32 bg-transparent overflow-hidden grid-bg"
				>
					<div className="max-w-7xl mx-auto">
						<RevealOnScroll direction="left">
							<div className="mb-24 space-y-4">
								<div className="h-1 w-24 bg-violet-700 mb-6" />
								<h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
									Technological <br /> Registry.
								</h2>
								<div className="flex items-center gap-4 text-violet-900 font-bold text-[10px] uppercase tracking-[0.4em]">
									<Activity className="w-4 h-4 animate-pulse" />
									Node Map Operational. Hover to Trace Dependencies.
								</div>
							</div>
						</RevealOnScroll>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-violet-900/10 border border-violet-900/10 shadow-[0_0_50px_rgba(76,29,149,0.05)] relative">
							{SKILL_CATEGORIES.map((category, i) => (
								<div
									key={category.title}
									className="bg-black/60 p-8 md:p-12 space-y-12 group transition-all relative"
								>
									<div className="absolute top-4 right-4 text-[8px] text-violet-950 font-mono tracking-widest pointer-events-none uppercase">
										MOD_REF: {i === 0 ? "CORE_RUNTIME" : "VIRTUAL_DOM_UTILS"}
									</div>

									<RevealOnScroll
										direction={i % 2 === 0 ? "left" : "right"}
										delay={i * 100}
									>
										<div className="flex items-center justify-between mb-16 border-b border-violet-900/20 pb-6">
											<div className="flex items-center gap-4">
												<div className="p-3 bg-violet-950/20 text-violet-600 border border-violet-900/20 shadow-[0_0_15px_rgba(76,29,149,0.1)]">
													{i === 0 ? (
														<Cpu className="w-6 h-6" />
													) : (
														<Layers className="w-6 h-6" />
													)}
												</div>
												<h3 className="font-bold text-2xl tracking-tighter uppercase text-violet-400">
													{category.title}
												</h3>
											</div>
										</div>

										<div className="flex flex-wrap gap-4">
											{category.skills.map((skill, idx) => {
												const isFiltered = activeFilter === skill.name;
												const hasDeploymentHighlights = PROJECTS.some((p) =>
													p.stack.includes(skill.name)
												);

												return (
													<div
														key={skill.name}
														onMouseEnter={() => setHoveredSkill(skill.name)}
														onMouseLeave={() => setHoveredSkill(null)}
														onClick={() =>
															setActiveFilter(
																activeFilter === skill.name ? null : skill.name
															)
														}
														className={`skill-node relative group/item p-6 min-w-[180px] border transition-all duration-300 cursor-pointer overflow-hidden ${
															isFiltered
																? "bg-violet-900/20 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
																: "bg-black/40 border-violet-900/10 hover:border-violet-700/50 hover:bg-violet-950/5"
														}`}
													>
														<div className="absolute top-0 right-0 p-2 text-[8px] text-violet-900 font-bold tracking-tighter opacity-40 group-hover/item:opacity-100 uppercase">
															{skill.status}
														</div>

														<div className="space-y-1 relative z-10">
															<div className="flex items-center gap-2">
																<span className="text-[9px] text-violet-900 font-bold">
																	0{idx + 1}
																</span>
																<span
																	className={`text-sm font-bold tracking-tight uppercase group-hover/item:text-violet-400 transition-colors ${
																		isFiltered
																			? "text-violet-400"
																			: "text-slate-300"
																	}`}
																>
																	{skill.name}
																</span>
															</div>
															<div className="text-[10px] text-slate-600 font-light truncate">
																{skill.checksum}
															</div>
														</div>

														<div className="skill-utility absolute inset-0 bg-violet-950/95 flex flex-col justify-center p-4 opacity-0 transform translate-y-full transition-all duration-300 pointer-events-none">
															<div className="text-[8px] text-violet-500 uppercase tracking-widest font-bold mb-1">
																Utility_Profile
															</div>
															<div className="text-[10px] text-white font-medium leading-tight">
																{skill.utility}
															</div>
															{hasDeploymentHighlights && (
																<div className="mt-3 flex items-center gap-1 text-[8px] text-violet-400 uppercase font-bold">
																	<Binary className="w-2 h-2" /> Trace_Available
																</div>
															)}
														</div>

														{isFiltered && (
															<div className="absolute bottom-2 right-2">
																<Filter className="w-3 h-3 text-violet-500" />
															</div>
														)}
													</div>
												);
											})}
										</div>
									</RevealOnScroll>
								</div>
							))}
						</div>

						<RevealOnScroll direction="left" delay={400}>
							<div className="mt-24 p-12 glass-card border border-violet-900/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
								<div className="absolute top-0 right-0 w-64 h-64 bg-violet-900/5 rotate-45 transform translate-x-32 -translate-y-32 pointer-events-none" />
								<div className="space-y-2 relative z-10">
									<h4 className="text-xl font-bold uppercase tracking-tighter text-violet-400">
										Node_Mapping_Intelligence
									</h4>
									<p className="text-slate-500 text-sm max-w-xl font-light leading-relaxed">
										This map functions as an interactive routing table. Hovering
										over a tech node triggers a visual trace to its associated
										deployments in the registry above. Click to lock a filter
										across the ecosystem.
									</p>
								</div>
								<div className="flex flex-col items-center gap-4 relative z-10">
									<div className="relative">
										<ShieldCheck className="w-20 h-20 text-violet-900 opacity-20" />
										<Binary className="w-8 h-8 text-violet-700 absolute inset-0 m-auto animate-pulse" />
									</div>
									<div className="text-[9px] text-violet-900 font-bold tracking-[0.4em] uppercase">
										Status: Mapping_Active
									</div>
								</div>
							</div>
						</RevealOnScroll>
					</div>
				</section>

				{/* Experience Section */}
				<section
					id="experience"
					className="py-40 px-8 md:px-16 lg:px-32 bg-black/40"
				>
					<div className="max-w-4xl">
						<RevealOnScroll direction="left">
							<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 uppercase">
								Career_Chronology.
							</h2>
						</RevealOnScroll>

						<div className="space-y-32">
							{EXPERIENCE.map((exp, i) => (
								<RevealOnScroll
									key={exp.company + exp.role}
									direction={i % 2 === 0 ? "left" : "right"}
								>
									<div className="relative group pl-12 border-l border-violet-900/10">
										<div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-violet-900 rounded-full shadow-[0_0_10px_#4c1d95] group-hover:scale-150 transition-transform" />
										<div className="absolute left-[-80px] top-0 text-xs text-slate-800 rotate-90 transform origin-left uppercase tracking-widest hidden lg:block opacity-30 group-hover:opacity-100 transition-opacity font-bold">
											LOG_ENTRY_0{i + 1}
										</div>
										<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
											<div>
												<h3 className="text-2xl font-bold group-hover:text-violet-600 transition-colors uppercase">
													{exp.role}
												</h3>
												<div className="flex items-center gap-4 mt-2">
													<span className="text-violet-700 text-sm uppercase tracking-[0.3em] font-bold">
														{exp.company}
													</span>
													<span className="h-[1px] w-8 bg-slate-800" />
													<span className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
														{exp.period}
													</span>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
											<div className="md:col-span-2 space-y-6 text-sm font-light text-slate-400 leading-relaxed">
												{exp.highlights.map((h, j) => (
													<div key={j} className="flex gap-4">
														<span className="text-violet-900 text-xs mt-1 font-bold">
															/*
														</span>
														<p>{h}</p>
													</div>
												))}
											</div>
											<div className="space-y-4">
												<div className="text-[9px] text-slate-600 uppercase tracking-[0.4em] mb-4 font-bold">
													Stack_Signature
												</div>
												<div className="flex flex-wrap gap-2">
													{exp.stack.map((s) => (
														<span
															key={s}
															className="px-3 py-1 bg-violet-950/20 rounded-sm text-[9px] uppercase text-violet-600 border border-violet-900/10 font-bold"
														>
															{s}
														</span>
													))}
												</div>
											</div>
										</div>
									</div>
								</RevealOnScroll>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section
					id="contact"
					className="py-40 px-8 md:px-16 lg:px-32 bg-transparent backdrop-blur-[1px]"
				>
					<div className="max-w-6xl mx-auto relative">
						<div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
							<RevealOnScroll direction="left">
								<div className="space-y-12">
									<div className="space-y-6">
										<h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
											Let's <br />{" "}
											<span className="text-violet-700 italic shadow-[0_0_15px_rgba(76,29,149,0.3)]">
												Interface.
											</span>
										</h2>
										<p className="text-slate-400 text-base font-light leading-relaxed">
											Bridge the connection. I am currently accepting new
											deployments for enterprise-grade Next.js infrastructure
											and high-concurrency UI projects.
										</p>
									</div>

									<div className="space-y-8">
										<a
											href="mailto:arunbasnet54@gmail.com"
											className="group flex items-center gap-6 p-8 glass-card rounded-sm hover:border-violet-700 transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)]"
										>
											<div className="w-14 h-14 flex items-center justify-center bg-violet-950/20 text-violet-700 group-hover:scale-110 transition-transform border border-violet-900/20">
												<Mail className="w-6 h-6" />
											</div>
											<div>
												<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">
													Direct_Transmission
												</div>
												<span className="text-lg md:text-xl font-bold group-hover:text-violet-700 transition-colors">
													arunbasnet54@gmail.com
												</span>
											</div>
										</a>
									</div>
								</div>
							</RevealOnScroll>

							<RevealOnScroll direction="right">
								<div className="p-10 glass-card rounded-sm relative overflow-hidden group border-violet-900/10">
									<div className="absolute top-0 right-0 w-32 h-32 bg-violet-900/[0.02] rotate-45 transform translate-x-16 -translate-y-16" />
									<form
										className="space-y-8"
										onSubmit={(e) => e.preventDefault()}
									>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
											<div className="space-y-3">
												<label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
													Source_ID
												</label>
												<input
													type="text"
													placeholder="Identity Token"
													className="w-full bg-slate-900/30 border border-slate-800 rounded-sm px-6 py-5 focus:outline-none focus:border-violet-900 transition-all text-white placeholder:text-slate-800 text-sm"
												/>
											</div>
											<div className="space-y-3">
												<label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
													Routing_Protocol
												</label>
												<input
													type="email"
													placeholder="Return Address"
													className="w-full bg-slate-900/30 border border-slate-800 rounded-sm px-6 py-5 focus:outline-none focus:border-violet-900 transition-all text-white placeholder:text-slate-800 text-sm"
												/>
											</div>
										</div>
										<div className="space-y-3">
											<label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
												Data_Package
											</label>
											<textarea
												rows={5}
												placeholder="System requirements and mission parameters..."
												className="w-full bg-slate-900/30 border border-slate-800 rounded-sm px-6 py-5 focus:outline-none focus:border-violet-900 transition-all text-white placeholder:text-slate-800 text-sm resize-none"
											/>
										</div>
										<button
											type="submit"
											className="w-full py-6 glass-button text-white font-bold uppercase tracking-[0.3em] text-sm rounded-sm transform active:scale-95 group"
										>
											EXECUTE_COMMIT
											<ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</button>
									</form>
								</div>
							</RevealOnScroll>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="py-20 px-8 md:px-16 border-t border-slate-900 relative z-10 bg-black/80">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="space-y-6 text-center md:text-left">
						<div className="flex items-center justify-center md:justify-start gap-4">
							<div className="w-8 h-8 bg-violet-900 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-[0_0_10px_rgba(76,29,149,0.4)]">
								S
							</div>
							<span className="font-bold tracking-tight text-xl uppercase italic">
								SUMAN<span className="text-violet-700">BASNET</span>
							</span>
						</div>
						<div className="text-[9px] uppercase tracking-[0.5em] text-slate-700 font-bold">
							© {new Date().getFullYear()} ARCH_FILE_v2.0 // KERNEL_STABLE //
							BUILT_WITH_GEMINI_REACTIONS
						</div>
					</div>

					<div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
						<a href="#" className="hover:text-violet-700 transition-colors">
							Manifest_Code
						</a>
						<a href="#" className="hover:text-violet-700 transition-colors">
							Privacy_Layer
						</a>
						<a href="#" className="hover:text-violet-700 transition-colors">
							Latency_Index
						</a>
					</div>

					<div className="flex gap-6">
						<a
							href="#"
							className="w-12 h-12 flex items-center justify-center border border-slate-800 rounded-sm hover:border-violet-700/50 hover:text-violet-700 transition-all group"
						>
							<Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
						</a>
						<a
							href="#"
							className="w-12 h-12 flex items-center justify-center border border-slate-800 rounded-sm hover:border-violet-700/50 hover:text-violet-700 transition-all group"
						>
							<Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
