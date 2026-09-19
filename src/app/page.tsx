import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import KeyImpact from "@/components/KeyImpact";
import SystemWalkthrough from "@/components/SystemWalkthrough";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Authorship from "@/components/Authorship";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import resumeData from "@/data/resumeData.json";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
  description:
    "AI Architect leading agentic AI platforms, multimodal RAG, governed data systems, and production engineering teams.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <Hero />
        <WhyWorkWithMe />
        <Skills />
        <Authorship />
        <Projects />
        <KeyImpact />
        <SystemWalkthrough />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
