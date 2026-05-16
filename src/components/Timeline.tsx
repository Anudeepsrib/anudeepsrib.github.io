"use client";
import Image from "next/image";
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
    logo: "/assets/companies/att.png",
    description:
      "Architecting enterprise GenAI solutions and LLM systems serving 15K+ internal users. Built Python document parsers processing 50K+ pages/month at 97.2% accuracy. Deployed RAG pipelines via FastAPI + Azure AI Search with p95 latency of 2.4s.",
    active: true,
  },
  {
    company: "Capgemini",
    role: "Technical Lead",
    period: "2019 - 2021",
    location: "India",
    logo: "/assets/companies/capgemini.png",
    description:
      "Led a team of 8 ML engineers. Delivered 12+ production data pipelines, reducing model training time by 65% through PySpark optimization. Increased model deployment frequency from quarterly to weekly. Achieved 94% accuracy in customer churn prediction, saving $2.3M in retention costs.",
  },
  {
    company: "GainInsights Solutions",
    role: "Big Data & ML Engineer",
    period: "2019",
    location: "India",
    logo: "/assets/companies/gaininsights.png",
    description:
      "Engineered scalable PySpark pipelines processing 10M+ records/day. Improved ETL performance by 78% and reduced job failures by 92%. Built real-time dashboards serving 500+ concurrent users with sub-second query response.",
  },
  {
    company: "Cognizant",
    role: "Data Science Engineer",
    period: "2015 - 2019",
    location: "India",
    logo: "/assets/companies/cognizant.png",
    description:
      "Led cloud data migration for 6TB of enterprise data across 3 AWS regions (completed 3 months ahead of schedule with 99.8% integrity). Implemented predictive analytics models that increased sales forecasting accuracy by 43% and reduced inventory costs by $1.1M annually.",
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
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Phase Overview */}
        <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.label} className="bg-[var(--bg-secondary)] p-5">
              <div className="font-mono text-[10px] tracking-widest text-[var(--text-3)]">
                {phase.period}
              </div>
              <div
                className="mt-1 font-display text-lg font-semibold"
                style={{ color: phase.color }}
              >
                {phase.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-7 transition-all hover:border-[var(--accent-1)]/20"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Company Info */}
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <div className="mt-1 h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-white/5 p-1.5">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain opacity-90"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                        {exp.company}
                      </h3>
                      {exp.active && (
                        <span className="rounded-full bg-[var(--accent-1)]/10 px-2.5 py-0.5 text-[10px] font-medium tracking-widest text-[var(--accent-1)]">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-[15px] font-medium text-[var(--text-2)]">
                      {exp.role}
                    </p>
                    <p className="text-xs text-[var(--text-3)]">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 text-[14.5px] leading-relaxed text-[var(--text-2)]">
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
