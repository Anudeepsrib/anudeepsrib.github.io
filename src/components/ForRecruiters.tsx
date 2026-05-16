"use client";

import React from "react";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animation";

export default function ForRecruiters() {
  return (
    <section className="premium-section relative z-10 border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12 md:py-16">
      <Container>
        <MotionWrapper variants={fadeUp}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-block rounded-full border border-[var(--accent-1)]/30 bg-[var(--accent-1)]/10 px-4 py-1 text-xs font-medium uppercase tracking-[1px] text-[var(--accent-1)]">
              For Recruiters
            </div>

            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
              Open to Staff+ AI Engineer / AI Platform Engineer roles (L5–L6)
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--text-2)]">
              Particularly interested in teams building{" "}
              <span className="font-medium text-[var(--text)]">
                reliable, observable, and cost-efficient GenAI platforms at scale
              </span>{" "}
              - with strong emphasis on RAG architectures, evaluation systems,
              agentic workflows, and production guardrails.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/anudeepsri/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white/[0.035] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/[0.08]"
              >
                Message on LinkedIn
              </a>
              <a
                href="mailto:anudeepSri108@gmail.com?subject=Staff%2B%20AI%20Engineer%20Opportunity"
                className="rounded-lg border border-[var(--accent-1)]/40 bg-[var(--accent-1)]/10 px-5 py-2.5 text-sm font-medium text-[var(--accent-1)] transition-colors hover:bg-[var(--accent-1)]/20"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
