"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const education = [
  {
    institution: "University of Massachusetts Dartmouth",
    degree: "M.S. Computer Science",
    period: "2021 - 2024",
    description:
      "Computer vision research (YOLOv8, ResNet-50). Published thesis and co-authored CRC Press publication.",
    url: "https://www.umassd.edu",
  },
  {
    institution: "VIT University",
    degree: "B.Tech Computer Science",
    period: "2011 - 2015",
    description:
      "Foundation in CS&E. Robotics projects and technical leadership.",
    url: "https://vit.ac.in",
  },
];

export default function Education() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <h2 className="mb-10 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Education
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-1">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.institution} delay={i * 0.1}>
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${edu.institution} website (opens in a new tab)`}
                className="group flex items-start justify-between gap-4 border-b border-[var(--border)] py-5"
              >
                <div>
                  <h3 className="mb-0.5 font-display text-[15px] font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--blue)]">
                    {edu.institution}
                  </h3>
                  <p className="mb-0.5 text-sm text-[var(--warm)]">
                    {edu.degree}
                  </p>
                  <p className="mb-2 font-mono text-[11px] text-[var(--text-3)]">
                    {edu.period}
                  </p>
                  <p className="text-[13px] leading-relaxed text-[var(--text-2)]">
                    {edu.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="mt-1 flex-shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--text-2)]"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
