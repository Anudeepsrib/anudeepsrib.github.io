"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const mentorshipStats = [
  { value: 1000, suffix: "+", label: "Learners" },
  { value: 20, suffix: "+", label: "Countries" },
  { value: 500, suffix: "+", label: "Hours" },
];

const programs = [
  {
    title: "KaggleX Fellowship",
    org: "Google/Kaggle",
    detail: "Cohorts 3 & 4. Gemma fine-tuning, GenAI projects.",
  },
  {
    title: "PGP in AI & Data Science",
    org: "UT Austin",
    detail: "132+ professionals mentored. 4.76/5 rating.",
  },
  {
    title: "ADPList",
    org: "Global",
    detail: "500+ minutes mentoring. Portfolio reviews, career advice.",
  },
  {
    title: "Topmate.io",
    org: "Online",
    detail: "70+ sessions. Mock interviews, resume reviews.",
  },
  {
    title: "UMass Dartmouth TA",
    org: "University",
    detail: "2021-2023. Advanced ML, Data Mining, Java.",
  },
  {
    title: "Great Learning",
    org: "Partner",
    detail: "316 hours, Big Data & ML projects.",
  },
  {
    title: "YouTube & Social",
    org: "Content",
    detail: "350+ students, US university transition support.",
  },
];

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Mentorship() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-20 md:py-32"
      >
        <div className="hero-glow absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <motion.h1
            className="mb-4 font-display text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Mentorship
          </motion.h1>
          <motion.p
            className="max-w-md text-[15px] text-[var(--text-2)]"
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Guiding AI practitioners through hands-on mentoring, academic
            instruction, and global community engagement.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)]">
            {mentorshipStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="bg-[var(--bg)] p-5 text-center"
              >
                <div className="mb-1 font-display text-2xl font-bold text-[var(--text)]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-mono text-[11px] text-[var(--text-3)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="mb-10 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Programs
            </h2>
          </ScrollReveal>

          <StaggerContainer className="flex flex-col">
            {programs.map((program) => (
              <motion.div
                key={program.title}
                variants={item}
                className="border-b border-[var(--border)] py-4"
              >
                <div className="mb-0.5 flex items-baseline gap-3">
                  <h3 className="font-display text-sm font-semibold text-[var(--text)]">
                    {program.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[var(--text-3)]">
                    {program.org}
                  </span>
                </div>
                <p className="text-[13px] text-[var(--text-2)]">
                  {program.detail}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>

          <ScrollReveal className="mt-10">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://adplist.org/mentors/anudeep-sri-bathina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ADPList
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://topmate.io/anudeepsrib"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Topmate
                <ArrowUpRight size={13} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
