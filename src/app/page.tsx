import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForRecruiters from "@/components/ForRecruiters";
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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <ForRecruiters />
      <Currently />
      <WhyWorkWithMe />
      <KeyImpact />
      <Skills />
      <Projects />
      <Impact />
      <Authorship />
      <CTASection />
      <Footer />
    </main>
  );
}
