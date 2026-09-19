import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import resumeData from "@/data/resumeData.json";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Anudeep Sri Bathina | AI Architect",
  description:
    "AI Architect leading agentic AI platforms, multimodal RAG, governed data systems, and production engineering teams.",
  keywords: [
    "AI Architect",
    "Generative AI",
    "LLM",
    "RAG Systems",
    "Machine Learning",
    "Agentic AI",
    "AI Platforms",
    "Multimodal AI",
    "Data Engineering",
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b12" },
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
      "AI Platforms",
      "Multimodal RAG",
      "Data Engineering",
      "Computer Vision",
      "MLOps",
      "Python",
      "FastAPI",
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
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
