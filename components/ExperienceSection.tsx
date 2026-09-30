import React from "react";
import { EXPERIENCES } from "../data";
import SectionHeader from "./SectionHeader";

const ExperienceSection: React.FC = () => {
	return (
		<section id="experience" className="section-padding">
			<div
				style={{
					maxWidth: "52rem",
					marginInline: "auto",
					display: "flex",
					flexDirection: "column",
					gap: "3.5rem",
				}}
			>
				<SectionHeader
					eyebrow="Experience"
					title="Professional experience"
					description="Building production web applications at Intosoft Pvt Ltd."
					align="center"
				/>

				{/* Timeline */}
				<div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
					{EXPERIENCES.map((exp, idx) => (
						<div
							key={exp.id}
							className="reveal"
							style={{
								display: "flex",
								gap: "clamp(1.25rem, 4vw, 2rem)",
								transitionDelay: `${idx * 100}ms`,
							}}
						>
							{/* Timeline column */}
							<div
								className="hidden sm:flex flex-col items-center"
								style={{ width: "1.25rem", flexShrink: 0 }}
							>
								<div className="timeline-dot" />
								{idx < EXPERIENCES.length - 1 && (
									<div
										style={{
											flex: 1,
											width: "1px",
											background: "var(--border)",
											margin: "0.625rem 0",
											minHeight: "2.5rem",
										}}
									/>
								)}
							</div>

							{/* Card */}
							<div
								style={{
									flex: 1,
									paddingBottom: idx === EXPERIENCES.length - 1 ? 0 : "2rem",
								}}
							>
								<div className="card" style={{ overflow: "hidden" }}>
									{/* Card top accent line */}
									<div
										aria-hidden="true"
										style={{
											height: "3px",
											background: idx === 0
												? "linear-gradient(90deg, var(--accent) 0%, transparent 100%)"
												: "transparent",
											borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
										}}
									/>

									<div style={{ padding: "clamp(1.25rem, 3vw, 1.75rem)" }}>
										{/* Header */}
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												gap: "0.875rem",
												marginBottom: "1.25rem",
											}}
											className="sm:flex-row sm:items-start sm:justify-between"
										>
											<div>
												<h3
													className="font-display font-semibold"
													style={{
														fontSize: "1.125rem",
														color: "var(--text-primary)",
														letterSpacing: "-0.02em",
													}}
												>
													{exp.role}
												</h3>
												<p
													style={{
														fontSize: "0.9rem",
														color: "var(--text-secondary)",
														marginTop: "0.2rem",
														fontWeight: 500,
													}}
												>
													{exp.company}
												</p>
											</div>
											<span
												className="tag tag-accent"
												style={{ alignSelf: "flex-start", whiteSpace: "nowrap" }}
											>
												{exp.duration}
											</span>
										</div>

										{/* Responsibilities */}
										<ul
											style={{
												display: "flex",
												flexDirection: "column",
												gap: "0.625rem",
												marginBottom: exp.technologies?.length ? "1.25rem" : 0,
											}}
										>
											{exp.responsibilities.map((resp, rIdx) => (
												<li
													key={rIdx}
													style={{
														display: "flex",
														alignItems: "flex-start",
														gap: "0.625rem",
														fontSize: "0.875rem",
														lineHeight: 1.65,
														color: "var(--text-secondary)",
													}}
												>
													<svg
														width="14"
														height="14"
														viewBox="0 0 14 14"
														fill="none"
														aria-hidden="true"
														style={{ marginTop: "0.275rem", flexShrink: 0, color: "var(--accent)" }}
													>
														<path
															d="M2.5 7l3.5 3.5 5.5-7"
															stroke="currentColor"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													{resp}
												</li>
											))}
										</ul>

										{/* Technologies */}
										{exp.technologies && exp.technologies.length > 0 && (
											<div
												style={{
													paddingTop: "1rem",
													borderTop: "1px solid var(--border)",
													display: "flex",
													flexWrap: "wrap",
													gap: "0.375rem",
												}}
											>
												{exp.technologies.map((tech) => (
													<span key={tech} className="tag">
														{tech}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
