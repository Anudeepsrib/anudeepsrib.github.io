import { Suspense } from "react";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import JourneyHero from "@/components/JourneyHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Journey | Anudeep Sri Bathina",
  description:
    "Path to Impact - 11+ years building production AI systems. From B.Tech at VIT to AI Architect at AT&T, leading enterprise GenAI and LLM platforms across Capgemini and Cognizant.",
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JourneyHero />
      <Timeline />
      <Awards />
      <Education />
      <Footer />
    </main>
  );
}
