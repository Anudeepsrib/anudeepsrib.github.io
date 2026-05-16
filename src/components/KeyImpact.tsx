"use client";

import React from "react";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp, stagger } from "@/lib/animation";

const impacts = [
  {
    metric: "15K+",
    label: "Users on production GenAI platform",
    detail: "AT&T",
  },
  {
    metric: "4h → <90s",
    label: "Policy query resolution time",
    detail: "Reduced via RAG + automation",
  },
  {
    metric: "$2.3M",
    label: "Retention savings delivered",
    detail: "Through ML churn models",
  },
  {
    metric: "8 engineers",
    label: "Team led",
    detail: "Increased deployment frequency 4×",
  },
  {
    metric: "2.4s p95",
    label: "RAG latency @ $0.42/1K requests",
    detail: "Production Azure deployment",
  },
  {
    metric: "97.2%",
    label: "Document extraction accuracy",
    detail: "50K+ pages/month with PII safety",
  },
];

export default function KeyImpact() {
  return (
    <section className="premium-section relative z-10">
      <div className="section-divider" />
      <Container>
        <MotionWrapper variants={fadeUp}>
          <div className="mb-8 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
              Key Impact at a Glance
            </h2>
            <p className="mt-2 text-[var(--text-2)]">
              Production results from enterprise GenAI and ML systems
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper
          staggerChildren
          variants={stagger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {impacts.map((item, index) => (
            <MotionWrapper
              key={index}
              variants={fadeUp}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6"
            >
              <div className="font-display text-3xl font-semibold text-[var(--accent-1)]">
                {item.metric}
              </div>
              <div className="mt-2 text-base font-medium text-[var(--text)]">
                {item.label}
              </div>
              <div className="mt-1 text-sm text-[var(--text-3)]">{item.detail}</div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  );
}
