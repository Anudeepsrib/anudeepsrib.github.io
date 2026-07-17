import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import resumeData from "@/data/resumeData.json";
import { SITE_URL } from "@/lib/metadata";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Anudeep Sri Bathina | AI Architect",
  description:
    "AI Architect with 11+ years building production-grade AI systems, LLM/RAG solutions, and enterprise-scale platforms at AT&T, Capgemini, Cognizant, and UMass Dartmouth.",
  keywords: [
    "AI Architect",
    "Generative AI",
    "LLM",
    "RAG Systems",
    "Machine Learning",
    "Agentic AI",
    "MLOps",
    "Computer Vision",
    "Python",
    "FastAPI",
  ],
  icons: {
    icon: [{ url: "/assets/logo.png", type: "image/png" }],
    apple: "/assets/logo.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#11140f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `try{const saved=localStorage.getItem("theme");const theme=saved||((matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light");document.documentElement.dataset.theme=theme}catch{document.documentElement.dataset.theme="dark"}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.personalInfo.name,
    jobTitle: resumeData.personalInfo.title,
    description: resumeData.personalInfo.summary,
    url: SITE_URL,
    image: `${SITE_URL}/assets/logo.png`,
    email: resumeData.personalInfo.email,
    sameAs: [
      resumeData.personalInfo.github,
      resumeData.personalInfo.linkedin,
      "https://adplist.org/mentors/anudeep-sri-bathina",
      "https://topmate.io/anudeepsri",
      "https://substack.com/@anudeepai",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Massachusetts Dartmouth",
      },
      {
        "@type": "EducationalOrganization",
        name: "VIT University",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "AT&T",
    },
    knowsAbout: [
      "Generative AI",
      "Large Language Models",
      "RAG Systems",
      "Agentic AI",
      "Computer Vision",
      "MLOps",
      "Python",
      "FastAPI",
    ],
  };

  return (
    <html
      lang="en"
      className={jetbrainsMono.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <link
          rel="preload"
          href="/fonts/satoshi-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/satoshi-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cabinet-grotesk-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-[var(--bg)] text-[var(--text)] antialiased"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="grain-overlay" />
        <div className="vignette" />
        <Navbar />
        <div
          id="main-content"
          tabIndex={-1}
          className="relative flex min-h-screen flex-col focus:outline-none"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
