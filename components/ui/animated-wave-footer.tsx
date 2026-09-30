"use client";

import * as React from "react";

// Inline SVG Icon Helpers
export const GitHubIcon = ({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const LinkedInIcon = ({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const ArrowUpIcon = ({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export default function AnimatedWaveFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative bg-gradient-to-b from-[var(--bg)] via-[var(--bg-2)] to-[var(--bg-3)] text-[var(--fg)] pt-24 pb-12 overflow-hidden border-t border-[var(--border)] mt-16 transition-colors duration-300">
      {/* Wave Animation Background Container - Full Viewport Width */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute bottom-0 left-0 h-[450px] w-[3600px] animate-wave">
          <svg
            className="h-full w-full block"
            viewBox="0 0 3600 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wave Path 1 */}
            <path
              d="M0 250C200 150 400 50 600 100C800 150 1000 350 1200 300C1400 250 1600 150 1800 250C2000 150 2200 50 2400 100C2600 150 2800 350 3000 300C3200 250 3400 150 3600 250V500H0V250Z"
              fill="var(--accent-dim)"
            />
            {/* Wave Path 2 */}
            <path
              d="M0 250C200 200 400 100 600 150C800 200 1000 350 1200 300C1400 250 1600 200 1800 250C2000 200 2200 100 2400 150C2600 200 2800 350 3000 300C3200 250 3400 200 3600 250V500H0V250Z"
              fill="var(--border-accent)"
            />
          </svg>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Col 1: Name, Title & Availability Badge */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-display font-bold text-[var(--fg)] tracking-tight">
                Suman <span className="text-[var(--accent)]">Basnet</span>
              </h2>
              <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mt-1">
                Next.js & React Architect
              </p>
            </div>
            
            {/* Available status badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xs text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Roles</span>
            </div>
          </div>

          {/* Col 2: Compact Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
              <a href="#home" className="hover:text-[var(--accent)] transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="hover:text-[var(--accent)] transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="hover:text-[var(--accent)] transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="hover:text-[var(--accent)] transition-colors duration-200">
                Projects
              </a>
              <a href="#skills" className="hover:text-[var(--accent)] transition-colors duration-200">
                Skills
              </a>
              <a href="#contact" className="hover:text-[var(--accent)] transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Col 3: Location, Education & Social Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Location & Connect
            </h3>
            <div className="space-y-1.5 text-xs text-[var(--muted)]">
              <p className="font-medium text-[var(--fg)]">Kathmandu, Nepal (GMT+5:45)</p>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Basnetsuman4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-3)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/5umanbasnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-3)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top bar */}
        <div className="mt-12 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Suman Basnet. All rights reserved.</p>
            <span className="hidden sm:inline text-[var(--border)]">•</span>
            <p className="font-mono text-[11px] text-[var(--muted-2)]">
              Built with React 19 · Next.js · TypeScript · Tailwind CSS
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-3)] text-[11px] font-mono text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
