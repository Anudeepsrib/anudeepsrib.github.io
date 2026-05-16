"use client";
import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const awards = [
  {
    title: "RISE Award",
    org: "AT&T, 2025",
    description: "Innovation and impact in AI systems",
  },
  {
    title: "Extra Mile Award",
    org: "Capgemini, 2020",
    description: "Exceptional contribution",
  },
];

export default function Awards() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <h2 className="mb-10 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Awards
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {awards.map((award, i) => (
            <ScrollReveal key={award.title} delay={i * 0.1}>
              <div className="glass-card p-5">
                <h3 className="mb-0.5 font-display text-sm font-semibold text-[var(--text)]">
                  {award.title}
                </h3>
                <p className="mb-1.5 font-mono text-[11px] text-[var(--warm)]">
                  {award.org}
                </p>
                <p className="text-[13px] text-[var(--text-2)]">
                  {award.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
