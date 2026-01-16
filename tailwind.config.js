/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./index.tsx",
		"./App.tsx",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"pitch-black": "#020202",
				"cyber-cyan": "#00F5FF",
				"deep-space": "#00080a",
				"glass-white": "rgba(255, 255, 255, 0.02)",
			},
			fontFamily: {
				heading: ["Azeret Mono", "monospace"],
				body: ["JetBrains Mono", "monospace"],
			},
			animation: {
				"fade-in": "fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"slide-up": "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"pulse-glow": "pulseGlow 4s ease-in-out infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				pulseGlow: {
					"0%, 100%": { opacity: "0.4", filter: "blur(8px)" },
					"50%": { opacity: "0.8", filter: "blur(12px)" },
				},
			},
		},
	},
	plugins: [],
};
