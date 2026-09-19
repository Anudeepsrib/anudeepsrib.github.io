"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";

export default function Hero() {
  const { personalInfo } = resumeData;
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-shell relative z-10 overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-24"
      id="top"
    >
      <Container>
        <div className="hero-grid min-h-[calc(100svh-8rem)]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-3)]">
              <span className="text-[var(--accent)]">{personalInfo.title}</span>
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(3.35rem,7.2vw,6.75rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[var(--text)]">
              I build AI systems that survive
              <span className="block text-[var(--accent)]">
                contact with reality.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-2)] md:text-xl md:leading-9">
              I&apos;m {personalInfo.name}, an AI Architect leading agentic AI
              platforms, multimodal RAG, and governed data systems, from
              architecture through production operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn-primary" href="#work">
                View selected work
              </a>
              <a
                className="btn-secondary"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} aria-hidden="true" /> Contact Anudeep
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 border-y border-[var(--border)] py-2 sm:grid-cols-3 sm:py-5">
              {[
                ["11+ years", "AI, data & platform engineering"],
                ["16 engineers", "Architecture + delivery leadership"],
                ["1,500+", "Developers served by public GenAI"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="border-t border-[var(--border)] py-3 first:border-t-0 sm:border-l sm:border-t-0 sm:px-3 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
                >
                  <p className="text-sm font-semibold text-[var(--text)] sm:text-base">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="hero-mark-wrap"
            aria-label="Anudeep Sri brand mark"
            initial={reduceMotion ? false : { opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="hero-mark-halo" aria-hidden="true" />
            <div className="hero-mark-card">
              <div className="hero-mark-meta" aria-hidden="true">
                <span>AI</span>
                <span>DATA</span>
                <span>PLATFORMS</span>
              </div>
              <motion.div
                className="hero-mark-image"
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -8, 0], rotate: [0, 0.6, 0] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Anudeep Sri logo"
                  width={730}
                  height={730}
                  priority
                />
              </motion.div>
              <div className="hero-mark-footer" aria-hidden="true">
                <span>Architecture for production</span>
                <span className="hero-mark-status">Active</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
