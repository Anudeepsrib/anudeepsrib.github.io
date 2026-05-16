"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { fadeUp, scaleIn, stagger } from "@/lib/animation";

const stats = [
  { value: 11, suffix: "+", label: "Years building AI" },
  { value: 1000, suffix: "+", label: "Learners reached" },
  { value: 500, suffix: "+", label: "Teaching hours" },
  { value: 20, suffix: "+", label: "Countries" },
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

const partners = [
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
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setActive((previous) => (previous + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, reduceMotion]);

  return (
    <section className="premium-section relative z-10" id="impact">
      <div className="section-divider" />
      <Container>
        <MotionWrapper variants={fadeUp}>
          <SectionHeader
            title="Teaching & impact"
            description="Mentoring AI practitioners across 20+ countries through hands-on sessions, guest lectures, and workshops."
          />
        </MotionWrapper>

        <MotionWrapper
          staggerChildren
          variants={stagger}
          className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4"
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

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_360px]">
          <MotionWrapper variants={fadeUp}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard {...testimonials[active]} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-8 bg-[var(--accent)]"
                      : "w-2 bg-[var(--muted)] hover:bg-[var(--text-3)]"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper variants={fadeUp}>
            <div className="rounded-lg border border-[var(--border)] bg-white/[0.025] p-5">
              <div className="flex flex-wrap gap-2">
                {partners.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border border-[var(--border)] bg-black/15 px-3 py-2 text-xs text-[var(--text-3)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
