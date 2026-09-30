import React from "react";
import { SKILL_CATEGORIES } from "../data";
import SectionHeader from "./SectionHeader";

// Category icon mapping
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
	"Frameworks & Core": (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<polygon points="12 2 2 7 12 12 22 7 12 2" />
			<polyline points="2 17 12 22 22 17" />
			<polyline points="2 12 12 17 22 12" />
		</svg>
	),
	"AI & Development Velocity": (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
			<path d="M12 6v6l4 2" />
		</svg>
	),
	"Tools & Libraries": (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
		</svg>
	),
	"Soft Skills": (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
		</svg>
	),
};

const Skills: React.FC = () => {
	return (
		<section id="skills" className="section-padding">
			<div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
				<SectionHeader
					eyebrow="Skills"
					title="Technical toolkit"
					description="Languages, frameworks, and tools I use to build and ship frontend products."
					align="center"
				/>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
						gap: "1.125rem",
						maxWidth: "56rem",
						marginInline: "auto",
						width: "100%",
					}}
				>
					{SKILL_CATEGORIES.map((cat, idx) => (
						<div
							key={cat.name}
							className="card reveal"
							style={{
								padding: "1.375rem",
								transitionDelay: `${idx * 70}ms`,
							}}
						>
							{/* Category header */}
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.625rem",
									marginBottom: "1.125rem",
								}}
							>
								<div
									style={{
										width: "28px",
										height: "28px",
										borderRadius: "var(--radius-sm)",
										background: "var(--accent-muted)",
										border: "1px solid var(--border-accent)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "var(--accent)",
										flexShrink: 0,
									}}
								>
									{CATEGORY_ICONS[cat.name] ?? (
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
											<circle cx="12" cy="12" r="10" />
										</svg>
									)}
								</div>
								<h3
									className="font-mono"
									style={{
										fontSize: "0.6875rem",
										fontWeight: 500,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										color: "var(--text-muted)",
									}}
								>
									{cat.name}
								</h3>
							</div>

							{/* Skills list */}
							<ul
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "0.5rem",
								}}
							>
								{cat.skills.map((skill) => (
									<li
										key={skill}
										style={{
											display: "flex",
											alignItems: "center",
											gap: "0.625rem",
											fontSize: "0.875rem",
											fontWeight: 500,
											color: "var(--text-secondary)",
											padding: "0.375rem 0",
											borderBottom: "1px solid var(--border)",
											transition: "color var(--t)",
											cursor: "default",
										}}
										onMouseEnter={(e) =>
											((e.currentTarget as HTMLLIElement).style.color =
												"var(--accent)")
										}
										onMouseLeave={(e) =>
											((e.currentTarget as HTMLLIElement).style.color =
												"var(--text-secondary)")
										}
									>
										<span
											aria-hidden="true"
											style={{
												width: "5px",
												height: "5px",
												borderRadius: "50%",
												background: "var(--accent)",
												opacity: 0.55,
												flexShrink: 0,
											}}
										/>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
