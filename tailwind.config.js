/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        primary: {
          DEFAULT: "var(--accent)",
          foreground: "#0e0e0e",
        },
        muted: {
          DEFAULT: "var(--bg-3)",
          foreground: "var(--muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "#0e0e0e",
        },
        border: "var(--hair)",
        input: "var(--hair)",
        ring: "var(--accent)",
      },
    },
  },
  plugins: [],
};
