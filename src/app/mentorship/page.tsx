import React from "react";
import Footer from "@/components/Footer";
import Mentorship from "@/components/Mentorship";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mentorship | Anudeep Sri Bathina",
  description:
    "Book a mentorship session with Anudeep Sri Bathina. Get personalized guidance on AI careers, interview prep, LLM/RAG systems, and data science roadmaps. 1000+ learners across 20+ countries.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <>
      <main className="min-h-screen">
        <Mentorship />
      </main>
      <Footer />
    </>
  );
}
