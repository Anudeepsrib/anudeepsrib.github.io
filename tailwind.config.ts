import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // 2025 Pro-Max Typography
        exo: ["'Exo'", "var(--font-inter)", "sans-serif"],
        mono: ["'Roboto Mono'", "var(--font-mono)", "monospace"],
        // Legacy fallbacks
        syne: ["var(--font-syne)", "'Exo'", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        // Core Design System Colors
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",

        // Accent Colors
        accent: {
          DEFAULT: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          warm: "var(--accent-warm)",
        },

        // Surface Colors
        surface: {
          DEFAULT: "var(--bg-secondary)",
          elevated: "var(--bg-elevated)",
        },

        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-tertiary)",
          highlight: "var(--text-highlight)",
        },

        // Legacy semantic colors (mapped to new system)
        navy: {
          950: "var(--bg-primary)",
          900: "var(--bg-secondary)",
          800: "var(--bg-elevated)",
        },
        seafoam: {
          DEFAULT: "var(--accent-primary)",
        },
        coolgray: {
          DEFAULT: "var(--text-secondary)",
        },
        offwhite: {
          DEFAULT: "var(--text-primary)",
        },

        // Action Colors
        cyan: {
          DEFAULT: "var(--accent-primary)",
          400: "var(--accent-warm)",
          500: "var(--accent-primary)",
          glow: "var(--accent-primary)",
        },
        amber: {
          DEFAULT: "#F59E0B",
          400: "#FBBF24",
          500: "#F59E0B",
          glow: "#F59E0B",
        },
        blue: {
          600: "#2563EB",
        },

        // Borders
        border: {
          DEFAULT: "var(--border-subtle)",
          hover: "var(--border-hover)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "var(--radius-lg)",
        "2xl": "var(--radius-xl)",
        "3xl": "2.5rem",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
        "glow-lg": "0 0 60px rgba(6, 182, 212, 0.25)",
        "glow-accent": "0 0 40px rgba(6, 182, 212, 0.2)",
      },
      backdropBlur: {
        glass: "var(--glass-blur)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
        "accent-glow": "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
        "gradient-cta": "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
        "gradient-accent": "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-warm))",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px var(--accent-primary)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 40px var(--accent-primary)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "text-reveal": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "text-reveal": "text-reveal 4s ease infinite",
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};

export default config;
