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
    "A timeline of professional experience in AI and Data Science at AT&T, Capgemini, Cognizant, and education at UMass Dartmouth and VIT University.",
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
