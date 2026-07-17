import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Currently from "@/components/Currently";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import KeyImpact from "@/components/KeyImpact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Authorship from "@/components/Authorship";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import resumeData from "@/data/resumeData.json";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
  description:
    "AI Architect with 11+ years building production-grade AI systems and enterprise-scale platforms.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <Hero />
        <KeyImpact />
        <WhyWorkWithMe />
        <Skills />
        <Currently />
        <Projects />
        <Impact />
        <Authorship />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
