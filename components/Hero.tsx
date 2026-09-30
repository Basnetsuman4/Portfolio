import React from "react";
import { PERSONAL_INFO } from "../data";

const TECH_STACK = ["Next.js", "React", "TypeScript", "React Native"];

const GithubIcon = () => (
	<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
	</svg>
);

const LinkedinIcon = () => (
	<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
	</svg>
);

const MailIcon = () => (
	<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<rect x="2" y="4" width="20" height="16" rx="2" />
		<path d="M22 7l-10 7L2 7" />
	</svg>
);

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative min-h-[calc(100vh-var(--nav-h))] flex flex-col justify-center section-padding pt-28 md:pt-36 overflow-hidden"
		>
			{/* Ambient glow */}
			<div className="hero-glow" aria-hidden="true" />

			{/* Subtle corner accent lines */}
			<div
				aria-hidden="true"
				style={{
					position: "absolute",
					top: "3rem",
					right: "clamp(1rem, 5vw, 4rem)",
					width: "120px",
					height: "120px",
					borderTop: "1px solid var(--border-accent)",
					borderRight: "1px solid var(--border-accent)",
					borderRadius: "0 var(--radius-lg) 0 0",
					opacity: 0.4,
					pointerEvents: "none",
				}}
			/>

			<div className="max-w-3xl relative z-10">
				{/* Eyebrow */}
				<div
					className="reveal flex items-center gap-3 mb-6"
					style={{ transitionDelay: "0ms" }}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							padding: "0.3125rem 0.75rem",
							borderRadius: "var(--radius-xs)",
							background: "var(--accent-muted)",
							border: "1px solid var(--border-accent)",
						}}
					>
						<span
							style={{
								width: "6px",
								height: "6px",
								borderRadius: "50%",
								background: "var(--accent)",
								display: "inline-block",
								animation: "glow-pulse 2.5s ease-in-out infinite",
							}}
						/>
						<span
							style={{
								fontFamily: '"IBM Plex Mono", monospace',
								fontSize: "0.6875rem",
								fontWeight: 500,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								color: "var(--accent)",
							}}
						>
							Frontend Developer
						</span>
					</div>
				</div>

				{/* Main heading */}
				<h1
					className="font-display font-extrabold tracking-tight reveal"
					style={{
						fontSize: "clamp(2.75rem, 8vw, 5.25rem)",
						lineHeight: 1.05,
						letterSpacing: "-0.035em",
						color: "var(--text-primary)",
						transitionDelay: "60ms",
					}}
				>
					Hi, I'm{" "}
					<span
						className="text-accent"
						style={{
							display: "inline-block",
							position: "relative",
						}}
					>
						{PERSONAL_INFO.name}
					</span>
				</h1>

				{/* Subtitle */}
				<p
					className="reveal"
					style={{
						marginTop: "1.5rem",
						fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
						lineHeight: 1.65,
						color: "var(--text-secondary)",
						maxWidth: "38rem",
						transitionDelay: "120ms",
					}}
				>
					Building high-performance, SEO-optimized web applications with the
					modern React ecosystem — and cross-platform mobile experiences with
					React Native.
				</p>

				{/* Tech stack pills */}
				<div
					className="flex flex-wrap gap-2 reveal"
					style={{ marginTop: "2rem", transitionDelay: "180ms" }}
				>
					{TECH_STACK.map((tech) => (
						<span key={tech} className="tag tag-accent">
							{tech}
						</span>
					))}
				</div>

				{/* Refactored CTAs: Clear Visual Hierarchy */}
				<div
					className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 reveal"
					style={{ marginTop: "2.5rem", transitionDelay: "240ms" }}
				>
					{/* Standout Primary Action */}
					<a
						href="#projects"
						className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0e0e0e] bg-[var(--accent)] hover:bg-[var(--accent)]/90 rounded-md shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
					>
						<span>View Projects</span>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M3.5 7.5H11.5M11.5 7.5L8 4M11.5 7.5L8 11"
								stroke="currentColor"
								strokeWidth="1.75"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>

					{/* Secondary Action */}
					<a
						href="#contact"
						className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[var(--fg)] bg-[var(--surface)]/50 hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-md transition-all duration-200"
					>
						Get in touch
					</a>
				</div>

				{/* Minimalist Inline Social Icons */}
				<div
					className="flex items-center gap-3 reveal"
					style={{ marginTop: "2.5rem", transitionDelay: "300ms" }}
				>
					<span className="text-xs font-mono text-[var(--text-muted)] mr-1 uppercase tracking-wider">
						Connect:
					</span>
					<a
						href={PERSONAL_INFO.github}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all duration-200"
						aria-label="GitHub Profile"
						title="GitHub"
					>
						<GithubIcon />
					</a>
					<a
						href={PERSONAL_INFO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all duration-200"
						aria-label="LinkedIn Profile"
						title="LinkedIn"
					>
						<LinkedinIcon />
					</a>
					<a
						href={`mailto:${PERSONAL_INFO.email}`}
						className="p-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all duration-200"
						aria-label="Send Email"
						title="Direct Email"
					>
						<MailIcon />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
