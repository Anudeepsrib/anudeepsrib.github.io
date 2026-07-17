import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import JourneyHero from "@/components/JourneyHero";
import Footer from "@/components/Footer";
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
