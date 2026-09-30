import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
	activeSection: string;
}

const NAV_ITEMS = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

const GitHubIcon = () => (
	<svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
	</svg>
);

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 24);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => { document.body.style.overflow = ""; };
	}, [mobileOpen]);

	const closeMobile = () => setMobileOpen(false);

	return (
		<header
			className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
				isScrolled ? "nav-blur" : "bg-transparent"
			}`}
			style={{ height: "var(--nav-h)" }}
		>
			<div className="container-main h-full">
				<nav className="flex items-center justify-between h-full">
					{/* Logo */}
					<a
						href="#home"
						onClick={closeMobile}
						className="font-display font-bold tracking-tight shrink-0"
						style={{
							fontSize: "1.0625rem",
							color: "var(--text-primary)",
							letterSpacing: "-0.02em",
						}}
					>
						SB<span className="text-accent">.</span>
					</a>

					{/* Desktop nav */}
					<ul className="hidden md:flex items-center gap-1">
						{NAV_ITEMS.map((item) => {
							const id = item.href.slice(1);
							const isActive = activeSection === id;
							return (
								<li key={item.name}>
									<a
										href={item.href}
										className={`nav-link ${isActive ? "active" : ""}`}
									>
										{item.name}
									</a>
								</li>
							);
						})}
					</ul>

					{/* Actions */}
					<div className="flex items-center gap-1.5">
						{/* GitHub icon */}
						<a
							href={PERSONAL_INFO.github}
							target="_blank"
							rel="noopener noreferrer"
							className="icon-btn hidden sm:inline-flex"
							aria-label="GitHub profile"
						>
							<GitHubIcon />
						</a>

						{/* CTA */}
						<a
							href="#contact"
							className="hidden sm:inline-flex btn-primary"
							style={{ padding: "0.5rem 1.125rem", fontSize: "0.8125rem" }}
						>
							Hire me
						</a>

						{/* Mobile toggle */}
						<button
							onClick={() => setMobileOpen(!mobileOpen)}
							className="icon-btn md:hidden"
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? (
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
									<path strokeLinecap="round" d="M4 4l10 10M14 4L4 14" />
								</svg>
							) : (
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
									<path strokeLinecap="round" d="M2 5h14M2 9h14M2 13h14" />
								</svg>
							)}
						</button>
					</div>
				</nav>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
					mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				style={{
					top: "var(--nav-h)",
					background: "color-mix(in srgb, var(--bg-base) 97%, transparent)",
					backdropFilter: "blur(12px)",
				}}
			>
				<ul className="container-main py-8 space-y-1">
					{NAV_ITEMS.map((item) => {
						const id = item.href.slice(1);
						const isActive = activeSection === id;
						return (
							<li key={item.name}>
								<a
									href={item.href}
									onClick={closeMobile}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "0.75rem",
										padding: "0.875rem 1rem",
										borderRadius: "var(--radius-md)",
										fontWeight: 500,
										fontSize: "1rem",
										color: isActive ? "var(--accent)" : "var(--text-secondary)",
										background: isActive ? "var(--accent-subtle)" : "transparent",
										transition: "color var(--t), background var(--t)",
									}}
								>
									{isActive && (
										<span
											style={{
												width: "6px",
												height: "6px",
												borderRadius: "50%",
												background: "var(--accent)",
												flexShrink: 0,
											}}
										/>
									)}
									{item.name}
								</a>
							</li>
						);
					})}
					<li style={{ paddingTop: "1.5rem" }}>
						<a
							href="#contact"
							onClick={closeMobile}
							className="btn-primary"
							style={{ width: "100%", justifyContent: "center", display: "flex" }}
						>
							Get in touch
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
