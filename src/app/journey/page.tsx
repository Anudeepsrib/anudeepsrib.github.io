import Timeline from "@/components/journey/Timeline";
import Education from "@/components/journey/Education";
import Awards from "@/components/journey/Awards";
import JourneyHero from "@/components/journey/JourneyHero";
import Footer from "@/components/layout/Footer";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Journey | Anudeep Sri Bathina",
  description:
    "Path to Impact - 11+ years building production AI systems. From B.Tech at VIT to AI Architect at AT&T, leading enterprise GenAI and LLM platforms across Capgemini and Cognizant.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <>
      <main className="min-h-screen">
        <JourneyHero />
        <Timeline />
        <Awards />
        <Education />
      </main>
      <Footer />
    </>
  );
}
