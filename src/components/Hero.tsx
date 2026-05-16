"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Github,
  Linkedin,
  Network,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import GradientCard from "@/components/ui/GradientCard";
import StatusPill from "@/components/ui/StatusPill";
import { fadeUp, heroContainer, scaleIn } from "@/lib/animation";

const focusAreas = [
  { label: "Agentic AI", detail: "LangGraph · CrewAI · MCP" },
  { label: "RAG Systems", detail: "Azure AI Search · ChromaDB · GraphRAG" },
  { label: "MLOps", detail: "FastAPI · Docker · LangSmith" },
  { label: "Computer Vision", detail: "YOLOv8 · ResNet · 94.1% mAP" },
];

const companies = [
  { name: "AT&T", logo: "/assets/companies/att.png" },
  { name: "Capgemini", logo: "/assets/companies/capgemini.png" },
  { name: "Cognizant", logo: "/assets/companies/cognizant.png" },
];

const recruiterSignals = [
  {
    label: "Build-ready",
    detail: "Strict lint, type-check, static export",
    icon: ShieldCheck,
  },
  {
    label: "Architecture-first",
    detail: "RAG, evals, safety, deployment trade-offs",
    icon: Network,
  },
  {
    label: "Proof surfaces",
    detail: "Projects, notes, publications, resume",
    icon: BookOpen,
  },
];

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden pb-14 pt-24 sm:pt-28 lg:pb-16">
      <Container>
        <motion.div
          variants={heroContainer}
          initial={false}
          animate="show"
          className="grid items-center gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.75fr)] lg:gap-14"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <StatusPill>Available</StatusPill>
              <span className="text-xs font-medium uppercase text-[var(--text-3)] [letter-spacing:0]">
                AI Architect — 11 years in production
              </span>
              <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.5px] text-[var(--accent)]">
                Open to Staff AI Engineer / Platform roles (L5–L6)
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                variants={fadeUp}
                className="max-w-4xl font-display text-[clamp(3.3rem,7.4vw,6.7rem)] font-black leading-[0.94] text-[var(--text)] [letter-spacing:0]"
              >
                Anudeep Sri Bathina
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-2)] md:text-xl md:leading-9"
            >
              I design GenAI, RAG, and agentic systems with the parts that make
              production real: retrieval boundaries, evaluation gates,
              observability, latency budgets, and privacy-aware controls.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <CTAButton href="#projects">View projects</CTAButton>
              <CTAButton
                href="/case-studies"
                variant="secondary"
                icon={<Network size={15} />}
              >
                System designs
              </CTAButton>
              <CTAButton
                href="/resume/Anudeep-Sri-Bathina-Resume.pdf"
                external
                variant="secondary"
                icon={<FileText size={15} />}
              >
                Resume
              </CTAButton>
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/anudeepsrib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-[var(--text-3)] transition-colors hover:bg-white/[0.04] hover:text-[var(--text)]"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anudeepsri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-[var(--text-3)] transition-colors hover:bg-white/[0.04] hover:text-[var(--text)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid max-w-2xl gap-2 sm:grid-cols-3"
              aria-label="Recruiter review highlights"
            >
              {recruiterSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.label}
                    className="rounded-lg border border-[var(--border)] bg-white/[0.025] p-3"
                  >
                    <div className="mb-2 flex items-center gap-2 text-[var(--text)]">
                      <Icon size={15} className="text-[var(--accent)]" />
                      <span className="text-sm font-semibold">
                        {signal.label}
                      </span>
                    </div>
                    <p className="text-xs leading-5 text-[var(--text-3)]">
                      {signal.detail}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <div key={area.label} className="group relative">
                  <span className="tech-pill cursor-default transition-colors group-hover:border-[rgba(125,211,252,0.24)] group-hover:text-[var(--text)]">
                    {area.label}
                  </span>
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-1.5 text-[10px] font-medium text-[var(--text-2)] opacity-0 shadow-premium transition-opacity group-hover:opacity-100">
                    {area.detail}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-5"
            >
              {companies.map((company) => (
                <Image
                  key={company.name}
                  src={company.logo}
                  alt={company.name}
                  width={92}
                  height={20}
                  className="max-h-5 max-w-[92px] object-contain opacity-60 grayscale invert transition-all hover:opacity-90 hover:grayscale-0"
                />
              ))}
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="relative">
            <GradientCard featured className="p-5 sm:p-6 md:p-7">
              <div className="mb-6">
                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase text-[var(--text-3)] [letter-spacing:0]">
                    Current
                  </p>
                  <p className="text-xl font-semibold text-[var(--text)]">
                    AI Architect
                  </p>
                  <p className="mt-1 text-sm text-[var(--accent)]">AT&T</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-[var(--border)] bg-black/20 p-4">
                  <p className="font-display text-3xl font-bold leading-none text-[var(--text)] [letter-spacing:0]">
                    11<span className="text-[var(--accent)]">+</span>
                  </p>
                  <p className="mt-2 text-xs text-[var(--text-3)]">
                    Years in prod
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-black/20 p-4">
                  <p className="font-display text-3xl font-bold leading-none text-[var(--text)] [letter-spacing:0]">
                    1K<span className="text-[var(--accent)]">+</span>
                  </p>
                  <p className="mt-2 text-xs text-[var(--text-3)]">Mentored</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-5">
                {[
                  "Published - CRC Press",
                  "Speaker - BSBI Berlin",
                  "KaggleX Fellow - Google",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                    <span className="text-sm text-[var(--text-2)]">{item}</span>
                  </div>
                ))}
              </div>
            </GradientCard>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <GradientCard className="p-4">
                <p className="text-2xl font-bold leading-none text-[var(--text)]">
                  15K+
                </p>
                <p className="mt-2 text-xs text-[var(--text-3)]">
                  Enterprise users
                </p>
              </GradientCard>
              <GradientCard className="p-4">
                <p className="text-2xl font-bold leading-none text-[var(--text)]">
                  &lt;2.5s
                </p>
                <p className="mt-2 text-xs text-[var(--text-3)]">p95 latency</p>
              </GradientCard>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
