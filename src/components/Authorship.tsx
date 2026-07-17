"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PublicationCard from "@/components/ui/PublicationCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, scaleIn, stagger } from "@/lib/animation";
import resumeData from "@/data/resumeData.json";

export default function Authorship() {
  return (
    <section className="premium-section relative z-10" id="research">
      <div className="section-divider" />
      <Container>
        <MotionWrapper variants={fadeUp}>
          <SectionHeader
            title="Research that sharpens the work."
            description="Published work in computer vision and IoT, carried forward into a production practice grounded in evidence."
          />
        </MotionWrapper>

        <MotionWrapper
          staggerChildren
          variants={stagger}
          className="grid gap-3 md:grid-cols-2"
        >
          {resumeData.publications.map((publication) => (
            <motion.div key={publication.title} variants={scaleIn}>
              <PublicationCard
                title={publication.title}
                venue={`${publication.publisher}, ${publication.year}`}
                description={publication.description}
                link={publication.link}
              />
            </motion.div>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  );
}
