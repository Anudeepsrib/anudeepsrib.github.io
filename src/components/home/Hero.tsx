"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";

export default function Hero() {
  const { personalInfo } = resumeData;
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-shell relative z-10 overflow-hidden pb-10 pt-28 sm:pt-32 lg:pb-14"
      id="top"
    >
      <Container>
        <div className="hero-byline">
          <span>{personalInfo.name}</span>
          <span>{personalInfo.title}</span>
        </div>

        <div className="hero-grid">
          <motion.div
            initial={reduceMotion ? false : { opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              AI systems that
              <br />
              survive contact
              <br />
              <span className="text-[var(--accent)]">with reality.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-2)]">
              I lead the architecture and delivery of agentic AI, multimodal
              retrieval, and governed data platforms. From the first design
              decision to production operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn-primary" href="#work">
                Explore the work <ArrowDownRight size={16} aria-hidden="true" />
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
          </motion.div>

          <div className="hero-proof">
            {[
              ["11+", "Years in AI, data & platforms"],
              ["16", "Engineers led"],
              ["1,500+", "API developers served"],
            ].map(([value, label]) => (
              <div key={value}>
                <strong className="block text-xl font-semibold tracking-tight text-[var(--text)] sm:text-2xl">
                  {value}
                </strong>
                <span className="mt-1 block text-xs leading-5 text-[var(--text-3)]">
                  {label}
                </span>
              </div>
            ))}
            <a href="#production-outcomes" className="text-link self-center">
              See production impact{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <motion.aside
            className="hero-index"
            aria-labelledby="hero-index-title"
            initial={reduceMotion ? false : { opacity: 1, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex items-start justify-between gap-5">
              <p className="studio-kicker !text-[var(--signal)]">
                Architecture
                <br />
                Engineering
                <br />
                Delivery
              </p>
              <Image
                src="/assets/logo.png"
                alt="Anudeep Sri logo"
                width={80}
                height={80}
                className="rounded-lg"
                priority
              />
            </div>
            <h2
              id="hero-index-title"
              className="mt-6 text-2xl font-semibold !text-white"
            >
              Selected systems
            </h2>
            <p className="mb-6 mt-3 text-sm leading-6 !text-white/70">
              Inspect the decisions behind the work.
            </p>
            <nav aria-label="Selected project shortcuts">
              {[
                ["01", "ClinIQ", "Grounded retrieval", "#case-cliniq"],
                ["02", "ShiftIQ", "Reviewed agent workflows", "#case-shiftiq"],
                [
                  "03",
                  "Groundfish",
                  "Computer vision research",
                  "#case-groundfish",
                ],
              ].map(([number, name, focus, href]) => (
                <a key={href} href={href} className="hero-index-link">
                  <span className="font-mono text-xs text-[var(--signal)]">
                    {number}
                  </span>
                  <span>
                    <strong className="block text-base font-semibold">
                      {name}
                    </strong>
                    <span className="mt-1 block text-xs text-white/70">
                      {focus}
                    </span>
                  </span>
                  <ArrowDownRight size={18} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
