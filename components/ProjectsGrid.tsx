import React from "react";
import { PROJECTS } from "../data";
import SectionHeader from "./SectionHeader";

// Unique gradient combos per project for visual variety
const PROJECT_GRADIENTS = [
	"135deg, rgba(45,212,191,0.12) 0%, rgba(45,212,191,0.02) 100%",
	"135deg, rgba(99,102,241,0.1) 0%, rgba(45,212,191,0.04) 100%",
	"135deg, rgba(249,115,22,0.08) 0%, rgba(45,212,191,0.02) 100%",
];

const ExternalLinkIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
		<polyline points="15 3 21 3 21 9" />
		<line x1="10" y1="14" x2="21" y2="3" />
	</svg>
);

const GithubIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
	</svg>
);

const ProjectsGrid: React.FC = () => {
	return (
		<section id="projects" className="section-padding">
			<div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
				{/* Header row */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1.25rem",
						alignItems: "flex-start",
					}}
					className="md:flex-row md:items-end md:justify-between"
				>
					<SectionHeader
						eyebrow="Projects"
						title="Selected work"
						description="Production SaaS platforms — scalable web applications built for real users and real workflows."
					/>
				</div>

				{/* Cards grid */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
						gap: "1.25rem",
					}}
				>
					{PROJECTS.map((project, idx) => (
						<article
							key={project.id}
							className="reveal group"
							style={{
								transitionDelay: `${idx * 70}ms`,
								background: "var(--bg-surface)",
								border: "1px solid var(--border)",
								borderRadius: "var(--radius-xl)",
								display: "flex",
								flexDirection: "column",
								overflow: "hidden",
								transition: "border-color var(--t), box-shadow var(--t), transform var(--t)",
								cursor: "default",
							}}
							onMouseEnter={(e) => {
								const el = e.currentTarget;
								el.style.borderColor = "var(--border-accent)";
								el.style.boxShadow = "var(--shadow-md)";
								el.style.transform = "translateY(-3px)";
							}}
							onMouseLeave={(e) => {
								const el = e.currentTarget;
								el.style.borderColor = "var(--border)";
								el.style.boxShadow = "none";
								el.style.transform = "translateY(0)";
							}}
						>
							{/* Visual header */}
							<div
								style={{
									position: "relative",
									height: "160px",
									background: `linear-gradient(${PROJECT_GRADIENTS[idx % PROJECT_GRADIENTS.length]})`,
									borderBottom: "1px solid var(--border)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									overflow: "hidden",
								}}
							>
								{/* Grid overlay */}
								<div
									aria-hidden="true"
									style={{
										position: "absolute",
										inset: 0,
										backgroundImage:
											"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
										backgroundSize: "24px 24px",
										opacity: 0.6,
									}}
								/>
								{/* Central Prominent Logo Graphic */}
								{project.logoUrl ? (
									<div className="relative z-10 p-3.5 rounded-2xl bg-[var(--bg-3)]/80 border border-[var(--border)] shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
										<img
											src={project.logoUrl}
											alt={`${project.title} logo`}
											className="w-12 h-12 object-contain filter drop-shadow-sm"
											onError={(e) => {
												// Fallback to text graphic if image fails to load
												const parent = e.currentTarget.parentElement;
												if (parent) {
													parent.style.display = "none";
												}
											}}
										/>
									</div>
								) : (
									<span
										className="font-display"
										aria-hidden="true"
										style={{
											position: "relative",
											zIndex: 1,
											fontSize: "4rem",
											fontWeight: 800,
											color: "var(--accent)",
											opacity: 0.12,
											letterSpacing: "-0.05em",
										}}
									>
										{project.title.charAt(0)}
									</span>
								)}

								{/* Interactive Action Links */}
								<div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded bg-[var(--bg-3)] hover:bg-[var(--accent)] hover:text-[#0e0e0e] text-[var(--text-muted)] border border-[var(--border)] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
											aria-label={`Visit ${project.title} live demo`}
											title="Live Preview"
										>
											<ExternalLinkIcon />
										</a>
									)}
								</div>
							</div>

							{/* Content */}
							<div
								style={{
									padding: "1.25rem",
									display: "flex",
									flexDirection: "column",
									flex: 1,
								}}
							>
								<div className="flex items-center justify-between mb-2">
									<h3
										className="font-display font-semibold"
										style={{
											fontSize: "1.0625rem",
											color: "var(--text-primary)",
											letterSpacing: "-0.02em",
											lineHeight: 1.25,
										}}
									>
										{project.title}
									</h3>
								</div>

								<p
									style={{
										fontSize: "0.875rem",
										lineHeight: 1.65,
										color: "var(--text-secondary)",
										flex: 1,
										marginBottom: "1.25rem",
									}}
								>
									{project.description}
								</p>

								{/* Tags */}
								<div
									style={{
										paddingTop: "1rem",
										borderTop: "1px solid var(--border)",
										display: "flex",
										flexWrap: "wrap",
										gap: "0.375rem",
									}}
								>
									{project.tags.map((tag) => (
										<span key={tag} className="tag">
											{tag}
										</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsGrid;
