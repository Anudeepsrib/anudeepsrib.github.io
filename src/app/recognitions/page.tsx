import React from "react";
import Footer from "@/components/Footer";
import Recognitions from "@/components/Recognitions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Speaking | Anudeep Sri Bathina",
  description:
    "18+ guest lectures and speaking engagements across universities, conferences, and global AI communities.",
  path: "/recognitions",
});

export default function RecognitionsPage() {
  return (
    <>
      <main className="min-h-screen">
        <Recognitions />
      </main>
      <Footer />
    </>
  );
}
