import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08090b",
        surface: "#111317",
        border: "#1f232b",
        muted: "#8a93a6",
        text: "#e6e9ef",
        accent: "#22d3ee",
        accent2: "#10b981",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.18), 0 8px 30px -10px rgba(34,211,238,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
