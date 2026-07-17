"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { fadeUp, scaleIn, stagger } from "@/lib/animation";

const stats = [
  { value: 1000, suffix: "+", label: "Learners reached" },
  { value: 20, suffix: "+", label: "Countries represented" },
  { value: 500, suffix: "+", label: "Mentoring hours" },
  { value: 70, suffix: "+", label: "Topmate sessions" },
];

const testimonials = [
  {
    name: "Michael",
    role: "Freelance Developer",
    text: "Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial.",
    source: "ADPList",
    sourceUrl: "https://adplist.org/mentors/anudeep-sri-bathina",
  },
  {
    name: "Shashank H.V.",
    role: "Student, UMass Dartmouth",
    text: "Extremely insightful and valuable discussion. Anudeep's depth of knowledge in Data and AI is evident, and his willingness to openly share his expertise is commendable.",
    source: "ADPList",
    sourceUrl: "https://adplist.org/mentors/anudeep-sri-bathina",
  },
  {
    name: "Baran Khazaee",
    role: "MSc CS, UC Davis",
    text: "His tailored advice on skills, job applications, and interviews was practical and insightful, leaving me confident and motivated.",
    source: "ADPList",
    sourceUrl: "https://adplist.org/mentors/anudeep-sri-bathina",
  },
  {
    name: "Nelisa Sebastian",
    role: "Data Analyst, Northeastern",
    text: "His strategic guidance and ability to simplify complex AI and career paths into clear, actionable steps were incredibly helpful.",
    source: "ADPList",
    sourceUrl: "https://adplist.org/mentors/anudeep-sri-bathina",
  },
  {
    name: "Mide Sowunmi",
    role: "UX/UI Designer, Comcast",
    text: "An exceptional session, making complex Agentic AI concepts easy to understand. His motivating approach inspired me to take bold steps.",
    source: "ADPList",
    sourceUrl: "https://adplist.org/mentors/anudeep-sri-bathina",
  },
];

const communities = [
  "UMass Dartmouth",
  "NKU",
  "VIT University",
  "DeepLearning.AI",
  "BSBI Berlin",
  "Great Learning",
  "Wiley",
  "Verzeo",
  "Analytics Vidhya",
  "Kaggle",
];

export default function Impact() {
  return (
    <section
      className="premium-section relative z-10 bg-[var(--bg-secondary)]"
      id="mentoring"
    >
      <Container>
        <MotionWrapper variants={fadeUp}>
          <SectionHeader
            title="Influence scales through people."
            description="Mentoring, teaching, and making complex AI work easier to understand for practitioners across 20+ countries."
          />
        </MotionWrapper>

        <MotionWrapper
          staggerChildren
          variants={stagger}
          className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={scaleIn}>
              <MetricCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </MotionWrapper>

        <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
          <MotionWrapper
            staggerChildren
            variants={stagger}
            className="grid gap-3 md:grid-cols-2"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeUp}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </MotionWrapper>

          <MotionWrapper variants={fadeUp}>
            <aside className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 lg:sticky lg:top-28">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--accent)]">
                Communities &amp; institutions
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {communities.map((name) => (
                  <span key={name} className="tech-pill">
                    {name}
                  </span>
                ))}
              </div>
            </aside>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
