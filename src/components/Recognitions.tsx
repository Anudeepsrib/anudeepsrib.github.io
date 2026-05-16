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
    description: "Hands-on session on supervised learning fundamentals.",
  },
  {
    title: "Recommendation Systems",
    venue: "PVP Siddhartha Institute",
    date: "Mar 2022",
    description: "Technical session on building recommendation engines.",
  },
  {
    title: "Innovation in AI",
    venue: "VIT University, Amaravati",
    date: "Mar 2022",
    description: "Talk on emerging trends in Artificial Intelligence.",
  },
  {
    title: "Big Data Analytics FDP",
    venue: "VIT University, Vellore",
    date: "Apr 2021",
    description: "Faculty development program on big data tools.",
  },
  {
    title: "Computer Vision & ML",
    venue: "VIT University, Vellore",
    date: "Mar 2020",
    description: "Exploring intersection of hardware architecture and ML.",
  },
  {
    title: "Database Systems",
    venue: "VIT University, Chennai",
    date: "Oct 2017",
    description: "Guest lecture on modern database architectures.",
  },
];

const conferences = [
  {
    title: "AI in Business: Café Scientifique",
    venue: "Berlin School of Business & Innovation",
    location: "Berlin, Germany",
    date: "Jun 2021",
    description: "Invited speaker/panelist for AI in business applications.",
  },
  {
    title: "Cloud Computing Conference",
    venue: "Boussias Communications",
    location: "Greece",
    date: "Mar 2021",
    description: "International conference on cloud technologies at scale.",
  },
  {
    title: "Pie & AI: AI for Everyone",
    venue: "DeepLearning.AI",
    location: "Lahore (Virtual)",
    date: "Sep 2020",
    description: "Community event fostering AI literacy and accessibility.",
  },
  {
    title: "AI Talk Show Panel",
    venue: "Industry Consortium",
    location: "Jaipur, India",
    date: "Jun 2020",
    description: "Panel discussion on the future of AI and its societal impact.",
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
            Speaking
          </motion.h1>
          <motion.p
            className="max-w-md text-[15px] text-[var(--text-2)]"
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Speaking engagements, publications, and industry recognition across
            universities, conferences, and global AI communities.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <div className="border-y border-[var(--border)] bg-[var(--bg-secondary)] py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-5">
          {[
            { number: "18+", label: "Speaking Engagements" },
            { number: "7+", label: "Countries Reached" },
            { number: "2", label: "Publications" },
            { number: "5+", label: "Universities" },
            { number: "1000+", label: "Learners Impacted" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-3xl font-semibold text-[var(--text)]">
                {stat.number}
              </div>
              <div className="mt-1 text-xs tracking-widest text-[var(--text-3)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* University Lectures */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>University Lectures</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {universityLectures.map((lecture, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-all hover:border-[var(--accent-1)]/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-[var(--text)]">
                        {lecture.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[var(--text-3)]">{lecture.venue}</p>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-3)]">
                      {lecture.date}
                    </span>
                  </div>
                  {lecture.description && (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
                      {lecture.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* International Conferences */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>International Conferences</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {conferences.map((conf, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-all hover:border-[var(--accent-1)]/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-[var(--text)]">
                        {conf.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[var(--text-3)]">
                        {conf.venue} · {conf.location}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-3)]">
                      {conf.date}
                    </span>
                  </div>
                  {conf.description && (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
                      {conf.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
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

      {/* Awards & Fellowships */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading>Awards &amp; Fellowships</SectionHeading>
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

      {/* CTA */}
      <div className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
            Invite Me to Speak
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[var(--text-2)]">
            Available for guest lectures, panels, workshops, and keynotes on
            production AI systems, LLM architectures, and career development in
            tech.
          </p>
          <a
            href="mailto:anudeepSri108@gmail.com?subject=Speaking%20Invitation"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[var(--accent-1)]/30 bg-[var(--accent-1)]/10 px-6 py-3 text-sm font-medium text-[var(--accent-1)] transition-colors hover:bg-[var(--accent-1)]/20"
          >
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
