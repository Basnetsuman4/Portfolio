import React from "react";
import { PERSONAL_INFO, EDUCATIONS, SKILL_CATEGORIES } from "../data";
import SectionHeader from "./SectionHeader";

const About: React.FC = () => {
	const coreTech =
		SKILL_CATEGORIES.find((c) => c.name === "Frameworks & Core")?.skills.slice(0, 6) ?? [];

	return (
		<section id="about" className="section-padding">
			<div className="about-grid">
				{/* Main content */}
				<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
					<SectionHeader
						eyebrow="About"
						title="Architecting fluid web interfaces & AI workflows"
						description="Bridging complex backend APIs with clean, type-safe frontend experiences — shipping production software at maximum velocity."
					/>

					<p
						className="reveal"
						style={{
							fontSize: "1rem",
							lineHeight: 1.7,
							color: "var(--text-secondary)",
							transitionDelay: "80ms",
						}}
					>
						{PERSONAL_INFO.about}
					</p>

					{/* Core tech */}
					{coreTech.length > 0 && (
						<div className="reveal" style={{ transitionDelay: "160ms" }}>
							<p
								style={{
									fontFamily: '"IBM Plex Mono", monospace',
									fontSize: "0.6875rem",
									letterSpacing: "0.1em",
									textTransform: "uppercase",
									color: "var(--text-muted)",
									marginBottom: "0.75rem",
								}}
							>
								Core stack
							</p>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
								{coreTech.map((skill) => (
									<span key={skill} className="tag tag-accent">
										{skill}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Highlights row */}
					<div
						className="reveal"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
							gap: "1rem",
							transitionDelay: "220ms",
						}}
					>
						{[
							{ value: "2+", label: "Years experience" },
							{ value: "98+", label: "Core Web Vitals" },
							{ value: "5+", label: "SaaS & apps shipped" },
						].map((stat) => (
							<div
								key={stat.label}
								style={{
									padding: "1.25rem 1rem",
									borderRadius: "var(--radius-lg)",
									background: "var(--bg-elevated)",
									border: "1px solid var(--border)",
								}}
							>
								<p
									style={{
										fontSize: "1.625rem",
										fontWeight: 700,
										lineHeight: 1.1,
										color: "var(--accent)",
									}}
								>
									{stat.value}
								</p>
								<p
									style={{
										fontSize: "0.8125rem",
										color: "var(--text-muted)",
										marginTop: "0.35rem",
									}}
								>
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Education sidebar */}
				<div className="reveal" style={{ transitionDelay: "120ms" }}>
					<div
						className="card"
						style={{
							padding: "1.75rem",
							display: "flex",
							flexDirection: "column",
							gap: "1.5rem",
						}}
					>
						<div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
							<div
								style={{
									width: "32px",
									height: "32px",
									borderRadius: "var(--radius-sm)",
									background: "var(--accent-muted)",
									border: "1px solid var(--border-accent)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0,
								}}
							>
								<svg
									width="15"
									height="15"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--accent)"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
									<path d="M6 12v5c3 3 9 3 12 0v-5" />
								</svg>
							</div>
							<h3
								style={{
									fontSize: "1rem",
									fontWeight: 600,
									color: "var(--text-primary)",
									letterSpacing: "-0.01em",
								}}
							>
								Education
							</h3>
						</div>

						<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
							{EDUCATIONS.map((edu, idx) => (
								<div
									key={idx}
									style={{
										position: "relative",
										paddingLeft: "1.5rem",
									}}
								>
									{/* Vertical connecting line */}
									{idx < EDUCATIONS.length - 1 && (
										<div
											style={{
												position: "absolute",
												left: "4px",
												top: "14px",
												bottom: "-1.25rem",
												width: "1px",
												background: "var(--border)",
											}}
										/>
									)}
									{/* Timeline dot */}
									<div
										style={{
											position: "absolute",
											left: "0px",
											top: "5px",
											width: "9px",
											height: "9px",
											borderRadius: "50%",
											background: "var(--accent)",
											boxShadow: "0 0 0 3px var(--accent-muted)",
										}}
									/>
									<div>
										<h4
											style={{
												fontSize: "0.9375rem",
												fontWeight: 600,
												color: "var(--text-primary)",
												lineHeight: 1.3,
											}}
										>
											{edu.degree}
										</h4>
										<p
											style={{
												fontSize: "0.875rem",
												color: "var(--text-secondary)",
												marginTop: "0.25rem",
											}}
										>
											{edu.institution}
										</p>
										<div
											style={{
												display: "flex",
												flexWrap: "wrap",
												alignItems: "center",
												gap: "0.75rem",
												marginTop: "0.5rem",
											}}
										>
											<span
												style={{
													fontFamily: '"IBM Plex Mono", monospace',
													fontSize: "0.75rem",
													color: "var(--accent)",
													fontWeight: 500,
												}}
											>
												{edu.duration}
											</span>
											<span
												style={{
													fontSize: "0.75rem",
													color: "var(--text-muted)",
												}}
											>
												{edu.location}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Divider + availability */}
						<div
							style={{
								paddingTop: "1.25rem",
								borderTop: "1px solid var(--border)",
								display: "flex",
								alignItems: "center",
								gap: "0.625rem",
							}}
						>
							<span
								style={{
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									background: "#22c55e",
									boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
									flexShrink: 0,
								}}
							/>
							<p
								style={{
									fontSize: "0.875rem",
									fontWeight: 500,
									color: "var(--text-secondary)",
								}}
							>
								Open to frontend opportunities
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
