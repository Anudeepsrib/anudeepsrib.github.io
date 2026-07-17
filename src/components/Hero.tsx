"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { fadeUp, heroContainer, scaleIn } from "@/lib/animation";
import resumeData from "@/data/resumeData.json";

const systemLayers = [
  ["01", "Retrieve", "Scoped, source-grounded context"],
  ["02", "Evaluate", "Quality gates before release"],
  ["03", "Guard", "Explicit privacy and safety boundaries"],
  ["04", "Observe", "Latency, cost, and answer quality"],
];

const companyLogoSizes: Record<string, { width: number; height: number }> = {
  "AT&T": { width: 860, height: 900 },
  Capgemini: { width: 1280, height: 805 },
  "GainInsights Solutions": { width: 225, height: 225 },
  Cognizant: { width: 1526, height: 1290 },
};

export default function Hero() {
  const { personalInfo, experience } = resumeData;

  return (
    <section
      className="relative z-10 flex min-h-[92svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20"
      id="top"
    >
      <Container>
        <motion.div
          variants={heroContainer}
          initial={false}
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-3)]"
            >
              <span className="text-[var(--accent)]">{personalInfo.title}</span>
              <span aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} aria-hidden="true" />
                {personalInfo.location}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl font-heading text-[clamp(3.8rem,8.2vw,7.8rem)] font-black leading-[0.84] tracking-[-0.065em] text-[var(--text)]"
            >
              AI systems,
              <span className="mt-2 block font-normal italic text-[var(--accent)]">
                built to hold up.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-2)] md:text-xl md:leading-9"
            >
              I&apos;m {personalInfo.name}, an AI Architect with 11 years of
              experience turning GenAI, RAG, and data platforms into reliable
              production systems—with explicit boundaries, rigorous evaluation,
              and measurable impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <CTAButton href="#projects">See selected work</CTAButton>
              <CTAButton
                href="/resume/Anudeep-Sri-Bathina-Resume.pdf"
                external
                variant="secondary"
                icon={<FileText size={15} aria-hidden="true" />}
              >
                Resume
              </CTAButton>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-3)] transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <Github size={18} aria-hidden="true" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-3)] transition hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[var(--border)] pt-6"
              aria-label="Experience across"
            >
              {experience.map((company) => (
                <Image
                  key={company.company}
                  src={company.logo}
                  alt={company.company}
                  width={companyLogoSizes[company.company].width}
                  height={companyLogoSizes[company.company].height}
                  style={{ width: "auto", height: "24px" }}
                  className="company-logo max-w-24 object-contain opacity-60 transition-opacity hover:opacity-100"
                />
              ))}
            </motion.div>
          </div>

          <motion.aside
            variants={scaleIn}
            className="relative lg:col-span-5 lg:pl-6"
            aria-label="Anudeep's production AI approach"
          >
            <div className="rounded-[2rem] border border-[var(--border-strong)] bg-[var(--text)] p-5 text-[var(--bg)] shadow-premium sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-[var(--muted)] pb-6">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--bg)] opacity-70">
                    Production AI / operating model
                  </p>
                  <h2 className="mt-3 max-w-xs font-heading text-3xl font-bold leading-none text-[var(--bg)]">
                    Make trust part of the architecture.
                  </h2>
                </div>
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[var(--accent)]" />
              </div>

              <ol className="divide-y divide-[var(--muted)]">
                {systemLayers.map(([number, title, detail]) => (
                  <li
                    key={title}
                    className="grid grid-cols-[2rem_1fr] gap-3 py-5 transition-transform duration-200 hover:translate-x-1"
                  >
                    <span className="font-mono text-[10px] text-[var(--bg)] opacity-60">
                      {number}
                    </span>
                    <div>
                      <p className="font-heading text-xl font-bold text-[var(--bg)]">
                        {title}
                      </p>
                      <p className="mt-1 text-sm text-[var(--bg)] opacity-70">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-2 grid gap-3 rounded-[1.25rem] bg-[var(--bg)] p-4 text-[var(--text)] sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-3)]">
                    Current
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold text-[var(--text)]">
                    {experience[0].position} · {experience[0].company}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-[var(--accent)] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide text-[var(--accent)]">
                  Open to Staff+ roles
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 hidden rotate-[-3deg] rounded-full border border-[var(--border-strong)] bg-[var(--surface-raised)] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-2)] shadow-premium sm:block">
              Research rigor → production reality
            </div>
          </motion.aside>
        </motion.div>
      </Container>
    </section>
  );
}
