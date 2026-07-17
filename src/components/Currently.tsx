"use client";

import React from "react";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp, stagger } from "@/lib/animation";

const currentExplorations = [
  "Agentic AI orchestration with LangGraph + MCP",
  "Multi-modal RAG with vision models",
  "AI safety evaluation frameworks",
  "Building ClinIQ v2 with department-scoped retrieval",
];

export default function Currently() {
  return (
    <section className="relative z-10 pb-20 md:pb-28" id="currently">
      <Container>
        <MotionWrapper variants={fadeUp}>
          <div className="grid gap-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--text)] p-6 sm:p-8 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-inverse)]">
                Current questions
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[var(--bg)]">
                What I&apos;m exploring now
              </h2>
            </div>

            <MotionWrapper
              staggerChildren
              variants={stagger}
              className="grid gap-3 md:grid-cols-2"
            >
              {currentExplorations.map((exploration) => (
                <div
                  key={exploration}
                  className="rounded-xl border border-[var(--muted)] px-4 py-3 text-sm leading-6"
                >
                  <span className="mr-2 text-[var(--accent-inverse)]">→</span>
                  <span className="text-[var(--bg)] opacity-75">
                    {exploration}
                  </span>
                </div>
              ))}
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
