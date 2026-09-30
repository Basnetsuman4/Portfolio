import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO } from "../data";
import SectionHeader from "./SectionHeader";

const EmailIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<rect x="2" y="4" width="20" height="16" rx="2" />
		<path d="M22 7l-10 7L2 7" />
	</svg>
);

const LinkedInIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
	</svg>
);

const GitHubIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
	</svg>
);

const CONTACT_LINKS = [
	{
		label: "Email",
		value: PERSONAL_INFO.email,
		href: `mailto:${PERSONAL_INFO.email}`,
		icon: <EmailIcon />,
		external: false,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/5umanbasnet",
		href: PERSONAL_INFO.linkedin,
		icon: <LinkedInIcon />,
		external: true,
	},
	{
		label: "GitHub",
		value: "github.com/Basnetsuman4",
		href: PERSONAL_INFO.github,
		icon: <GitHubIcon />,
		external: true,
	},
];

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");

		try {
			const result = await emailjs.send(
				process.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
					to_email: PERSONAL_INFO.email,
				},
				process.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY,
			);

			if (result.status === 200) {
				setStatus("success");
				setFormData({ name: "", email: "", message: "" });
				setTimeout(() => setStatus("idle"), 5000);
			} else {
				throw new Error("Failed");
			}
		} catch (err) {
			console.error("EmailJS Error:", err);
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section id="contact" className="section-padding">
			<div
				style={{
					maxWidth: "56rem",
					marginInline: "auto",
					display: "flex",
					flexDirection: "column",
					gap: "3rem",
				}}
			>
				<SectionHeader
					eyebrow="Contact"
					title="Let's build something"
					description="Open to frontend roles, freelance projects, and technical conversations. Reach out via the form or directly."
					align="center"
				/>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "1.5rem",
					}}
					className="md:grid-cols-[1fr_1.6fr]"
				>
					{/* Left — direct links */}
					<div
						className="reveal"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.75rem",
							transitionDelay: "60ms",
						}}
					>
						<p
							className="font-mono text-xs uppercase tracking-wider"
							style={{ color: "var(--text-muted)", marginBottom: "0.25rem" }}
						>
							Direct channels
						</p>

						{CONTACT_LINKS.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target={link.external ? "_blank" : undefined}
								rel={link.external ? "noopener noreferrer" : undefined}
								className="contact-link"
							>
								<span style={{ color: "var(--accent)", flexShrink: 0 }}>
									{link.icon}
								</span>
								<span style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
									<span style={{ fontSize: "0.6875rem", fontFamily: '"IBM Plex Mono", monospace', color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
										{link.label}
									</span>
									<span style={{ fontSize: "0.875rem" }}>{link.value}</span>
								</span>
							</a>
						))}

						{/* Availability status */}
						<div
							style={{
								marginTop: "0.5rem",
								padding: "0.875rem 1rem",
								borderRadius: "var(--radius-lg)",
								border: "1px solid rgba(34,197,94,0.25)",
								background: "rgba(34,197,94,0.06)",
								display: "flex",
								alignItems: "center",
								gap: "0.75rem",
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
							<p style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)" }}>
								Available for new opportunities
							</p>
						</div>
					</div>

					{/* Right — form */}
					<form
						onSubmit={handleSubmit}
						className="card reveal"
						style={{
							padding: "clamp(1.25rem, 3vw, 1.875rem)",
							display: "flex",
							flexDirection: "column",
							gap: "1.125rem",
							transitionDelay: "120ms",
						}}
					>
						<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sm:grid-cols-2">
							<div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
								<label
									htmlFor="name"
									className="font-mono text-xs uppercase tracking-wider"
									style={{ color: "var(--text-muted)" }}
								>
									Name
								</label>
								<input
									id="name"
									type="text"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									placeholder="Your name"
									className="input"
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
								<label
									htmlFor="email"
									className="font-mono text-xs uppercase tracking-wider"
									style={{ color: "var(--text-muted)" }}
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
									placeholder="you@email.com"
									className="input"
								/>
							</div>
						</div>

						<div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
							<label
								htmlFor="message"
								className="font-mono text-xs uppercase tracking-wider"
								style={{ color: "var(--text-muted)" }}
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={5}
								value={formData.message}
								onChange={handleChange}
								placeholder="Tell me about your project or opportunity..."
								className="input"
								style={{ resize: "none" }}
							/>
						</div>

						{status === "success" && (
							<p className="status-success" role="status">
								✓ Message sent successfully. I'll get back to you soon.
							</p>
						)}

						{status === "error" && (
							<p className="status-error" role="alert">
								Something went wrong. Please try again or email directly.
							</p>
						)}

						<button
							type="submit"
							disabled={status === "sending"}
							className="btn-primary"
							style={{
								width: "100%",
								justifyContent: "center",
								opacity: status === "sending" ? 0.65 : 1,
								cursor: status === "sending" ? "not-allowed" : "pointer",
							}}
						>
							{status === "sending" ? "Sending..." : "Send message"}
							{status !== "sending" && (
								<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
									<path d="M1 7.5h13M8.5 3l5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
