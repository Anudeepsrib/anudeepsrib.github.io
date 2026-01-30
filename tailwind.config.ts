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
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Design System Palette
        navy: {
          950: "#070A12", // Deep navy-black (bg-primary)
          900: "#0B1020", // Slightly lighter navy (bg-secondary)
        },
        seafoam: {
          DEFAULT: "#45E7C3", // Seafoam cyan/green (accent)
        },
        coolgray: {
          DEFAULT: "#A7B1C8", // text-secondary
        },
        offwhite: {
          DEFAULT: "#F2F5FA", // text-primary
        },

        // Keeping legacy palettes for backward compatibility (mapped to new if needed or kept distinct)
        charcoal: {
          900: "#070A12",
          800: "#0B1020",
          700: "#2B2B30",
        },
        obsidian: {
          900: "#0E0E10",
          800: "#1A1A1D",
          700: "#2B2B30",
        },
        cyan: {
          DEFAULT: "#45E7C3", // Mapped to new accent for consistency
          glow: "#45E7C3",
          dim: "#008F99",
        },
        amber: {
          DEFAULT: "#FFB02E",
          glow: "#FFB02E",
          dim: "#99691C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(69, 231, 195, 0.15) 0%, transparent 70%)', // Updated to seafoam
        'amber-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 176, 46, 0.15) 0%, transparent 70%)',
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 10px #45E7C3",
          },
          "50%": {
            opacity: "0.5",
            boxShadow: "0 0 20px #45E7C3",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};

export default config;
