import React from "react";
import Footer from "@/components/Footer";
import Recognitions from "@/components/Recognitions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Speaking | Anudeep Sri Bathina",
  description:
    "Speaking engagements, CRC Press publications, KaggleX fellowship, and industry recognition. Invited speaker at BSBI, DeepLearning.AI, and 18+ guest lectures.",
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
