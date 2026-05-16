import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mentorship from "@/components/Mentorship";

export const metadata = {
  title: "Mentorship | Anudeep Sri Bathina",
  description:
    "Book a mentorship session with Anudeep Sri Bathina. Get personalized guidance on AI careers, interview prep, LLM/RAG systems, and data science roadmaps. 1000+ learners across 20+ countries.",
};

export default function MentorshipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Mentorship />
      <Footer />
    </main>
  );
}
