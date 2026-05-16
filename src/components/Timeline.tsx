"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  { period: "2011 - 2015", label: "Foundation", color: "var(--text-3)" },
  { period: "2015 - 2021", label: "Growth", color: "var(--text-2)" },
  { period: "2021 - 2024", label: "Research", color: "var(--warm)" },
  { period: "2024 - Present", label: "Impact", color: "var(--blue)" },
];

const experiences = [
  {
    company: "AT&T",
    role: "AI Architect",
    period: "2024 - Present",
    location: "United States",
    description:
      "Architecting enterprise GenAI solutions and LLM systems. Leading development of Python-based parsers and automated interpretation models. API deployments with FastAPI and Azure Vector Search.",
    active: true,
  },
  {
    company: "Capgemini",
    role: "Technical Lead",
    period: "2019 - 2021",
    location: "India",
    description:
      "Directed ML engineering teams to build data pipelines and predictive models. Recognized for high-impact delivery and technical leadership.",
  },
  {
    company: "GainInsights Solutions",
    role: "Big Data & ML Engineer",
    period: "2019",
    location: "India",
    description:
      "Engineered scalable PySpark pipelines. Developed client-focused interfaces and optimized database queries for complex datasets.",
  },
  {
    company: "Cognizant",
    role: "Data Science Engineer",
    period: "2015 - 2019",
    location: "India",
    description:
      "Led cloud data migration projects and implemented predictive analytics models. Specialized in automated data migration and visualization.",
  },
];

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative mb-14 flex items-start gap-8 last:mb-0 ${
        fromLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`glass-card flex-1 p-6 ${fromLeft ? "md:text-right" : ""}`}
      >
        <div
          className={`mb-2 flex items-center gap-2 ${fromLeft ? "md:justify-end" : ""}`}
        >
          {experience.active && (
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
          )}
          <span className="font-mono text-[11px] text-[var(--text-3)]">
            {experience.period}
          </span>
        </div>
        <h3 className="mb-0.5 font-display text-base font-semibold text-[var(--text)]">
          {experience.company}
        </h3>
        <p className="mb-0.5 text-sm text-[var(--text-2)]">{experience.role}</p>
        <p className="mb-3 text-[11px] text-[var(--text-3)]">
          {experience.location}
        </p>
        <p className="text-[13px] leading-relaxed text-[var(--text-2)]">
          {experience.description}
        </p>
      </div>

      <div className="hidden flex-shrink-0 flex-col items-center md:flex">
        <div
          className={`h-2 w-2 rounded-full ${
            experience.active ? "bg-[var(--blue)]" : "bg-[var(--text-3)]"
          }`}
        />
      </div>

      <div className="hidden flex-1 md:block" />
    </motion.div>
  );
}

export default function Timeline() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Phase strip */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.label} className="bg-[var(--bg)] p-4">
              <span className="mb-1 block font-mono text-[10px] text-[var(--text-3)]">
                {phase.period}
              </span>
              <h4
                className="font-display text-sm font-semibold"
                style={{ color: phase.color }}
              >
                {phase.label}
              </h4>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          <motion.div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--border)] md:block"
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, i) => (
            <TimelineCard key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
