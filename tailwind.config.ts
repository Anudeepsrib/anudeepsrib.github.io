import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#090b12",
          800: "#0d1019",
          700: "#121723",
        },
        frost: {
          50: "#f4f7fb",
          200: "#dce6f5",
          400: "#a9b2c3",
          600: "#6f788a",
        },
        accent: {
          DEFAULT: "#7dd3fc",
          soft: "rgba(125, 211, 252, 0.14)",
          glow: "rgba(125, 211, 252, 0.24)",
        },
      },
      fontFamily: {
        display: ["'Satoshi'", "system-ui", "sans-serif"],
        heading: ["'Cabinet Grotesk'", "system-ui", "sans-serif"],
        body: ["'Satoshi'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        sans: ["'Satoshi'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.11) 0%, transparent 65%)",
        "premium-card":
          "linear-gradient(145deg, rgba(255,255,255,0.078), rgba(255,255,255,0.024))",
        "soft-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.34)",
        glow: "0 0 48px rgba(125, 211, 252, 0.13)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-drift": {
          "0%": { transform: "translate3d(-1.5%, -1%, 0) scale(1)", opacity: "0.76" },
          "50%": { transform: "translate3d(1.5%, 1%, 0) scale(1.03)", opacity: "0.94" },
          "100%": { transform: "translate3d(-1%, 1.4%, 0) scale(1.01)", opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "gradient-drift": "gradient-drift 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
