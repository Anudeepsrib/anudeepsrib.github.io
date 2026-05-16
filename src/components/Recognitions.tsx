"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import { ArrowUpRight } from "lucide-react";

const universityLectures = [
  {
    title: "Classification Models in ML",
    venue: "IET MBCET",
    date: "Dec 2024",
  },
  {
    title: "Recommendation Systems",
    venue: "PVP Siddhartha",
    date: "Mar 2022",
  },
  { title: "Innovation in AI", venue: "VIT Amaravati", date: "Mar 2022" },
  { title: "Big Data Analytics FDP", venue: "VIT Vellore", date: "Apr 2021" },
  { title: "Computer Vision & ML", venue: "VIT Vellore", date: "Mar 2020" },
  { title: "Database Systems", venue: "VIT Chennai", date: "Oct 2017" },
];

const conferences = [
  {
    title: "AI in Business: Cafe Scientifique",
    venue: "BSBI, Berlin",
    date: "Jun 2021",
  },
  {
    title: "Cloud Computing Conference",
    venue: "Boussias, Greece",
    date: "Mar 2021",
  },
  {
    title: "Pie & AI: AI for Everyone",
    venue: "DeepLearning.AI, Lahore",
    date: "Sep 2020",
  },
  {
    title: "AI Talk Show Panel",
    venue: "Industry Consortium, Jaipur",
    date: "Jun 2020",
  },
];

const publications = [
  {
    title: "Transfer Learning for Groundfish Recognition",
    venue: "UMass Dartmouth, 2024",
    description:
      "Cross-database recognition using YOLOv8 and ResNet50, achieving 94.10% mAP.",
    link: "https://doi.org/10.62791/20352",
  },
  {
    title: "Blueprint of IoT for Smart Cities",
    venue: "CRC Press / Taylor & Francis, 2024",
    description:
      "Co-authored handbook chapter on IoT blueprinting for smart city development.",
    link: "https://doi.org/10.1201/9781003225317",
  },
];

const awards = [
  { title: "RISE Award", org: "AT&T, 2025" },
  { title: "KaggleX Fellowship", org: "Google/Kaggle, 2023-2024" },
];

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <h2 className="mb-8 font-display text-xl font-bold tracking-tight md:text-2xl">
        {children}
      </h2>
    </ScrollReveal>
  );
}

export default function Recognitions() {
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
            Recognition
          </motion.h1>
          <motion.p
            className="max-w-md text-[15px] text-[var(--text-2)]"
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Speaking, publications, and industry recognition.
          </motion.p>
        </div>
      </section>

      {/* Lectures */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>University lectures</SectionHeading>
          <StaggerContainer className="flex flex-col">
            {universityLectures.map((l) => (
              <motion.div
                key={l.title}
                variants={item}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] py-3.5"
              >
                <div>
                  <h3 className="font-display text-sm font-medium text-[var(--text)]">
                    {l.title}
                  </h3>
                  <p className="text-[11px] text-[var(--text-3)]">{l.venue}</p>
                </div>
                <span className="flex-shrink-0 font-mono text-[11px] text-[var(--text-3)]">
                  {l.date}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Conferences */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>International conferences</SectionHeading>
          <StaggerContainer className="flex flex-col">
            {conferences.map((c) => (
              <motion.div
                key={c.title}
                variants={item}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] py-3.5"
              >
                <div>
                  <h3 className="font-display text-sm font-medium text-[var(--text)]">
                    {c.title}
                  </h3>
                  <p className="text-[11px] text-[var(--text-3)]">{c.venue}</p>
                </div>
                <span className="flex-shrink-0 font-mono text-[11px] text-[var(--text-3)]">
                  {c.date}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Publications */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>Publications</SectionHeading>
          <div className="flex flex-col">
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={i * 0.1}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 border-b border-[var(--border)] py-4"
                >
                  <div>
                    <h3 className="mb-0.5 font-display text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--blue)]">
                      {pub.title}
                    </h3>
                    <p className="mb-1.5 font-mono text-[11px] text-[var(--warm)]">
                      {pub.venue}
                    </p>
                    <p className="text-[13px] leading-relaxed text-[var(--text-2)]">
                      {pub.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="mt-1 flex-shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--text-2)]"
                  />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>Awards</SectionHeading>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {awards.map((award) => (
              <div key={award.title}>
                <h3 className="font-display text-sm font-semibold text-[var(--text)]">
                  {award.title}
                </h3>
                <p className="font-mono text-[11px] text-[var(--text-3)]">
                  {award.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
