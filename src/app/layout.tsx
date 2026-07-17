import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import resumeData from "@/data/resumeData.json";

const SITE_URL = "https://anudeepsri.com";

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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
    description:
      "AI Architect with 11+ years building production-grade AI systems and enterprise-scale platforms.",
    url: SITE_URL,
    siteName: `${resumeData.personalInfo.name} Portfolio`,
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "Anudeep Sri Bathina portfolio logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
    description:
      "AI Architect with 11+ years building production-grade AI systems.",
  },
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
      "https://topmate.io/anudeepsrib",
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
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
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
        <div id="main-content" className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
