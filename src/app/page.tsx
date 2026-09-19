import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyWorkWithMe from "@/components/home/WhyWorkWithMe";
import KeyImpact from "@/components/home/KeyImpact";
import SystemWalkthrough from "@/components/home/SystemWalkthrough";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Authorship from "@/components/home/Authorship";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
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
