import React from "react";
import Footer from "@/components/layout/Footer";
import Mentorship from "@/components/mentorship/Mentorship";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mentorship | Anudeep Sri Bathina",
  description:
    "500+ hours of AI teaching, 1,000+ learners reached, and 70+ career mentorship sessions across Topmate and ADPList.",
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
