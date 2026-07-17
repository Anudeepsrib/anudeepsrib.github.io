"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X, Box, Zap, Shield, BarChart3 } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import GradientCard from "@/components/ui/GradientCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, scaleIn, stagger } from "@/lib/animation";

const projects = [
  {
    name: "ClinIQ",
    description:
      "Healthcare RAG reference implementation with department-scoped retrieval, citations, role checks, and PHI masking.",
    tags: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "OpenAI",
      "ChromaDB",
      "Presidio",
    ],
    link: "https://github.com/Anudeepsrib/ClinIQ",
    hero: true,
    metrics: "Healthcare RAG · citations · PII safety",
    openSourceCategory: "Open Source Reference Implementation",
    patternFor:
      "Healthcare RAG architecture with scoped retrieval and conservative safety controls",
    problem:
      "Clinical and policy-heavy workflows need fast, accurate retrieval without blurring department boundaries or exposing sensitive data.",
    architecture: [
      "Document ingestion layer for clinical guidelines and reference material",
      "Scoped vector stores to keep retrieval boundaries explicit",
      "LangGraph orchestration for multi-step retrieval and answer assembly",
      "PII/PHI redaction checks before sensitive text enters retrieval flows",
      "LangSmith observability for evaluation and citation review",
    ],
    decisions: [
      "Favor explicit retrieval scopes over a single shared index",
      "Keep redaction and citation validation as first-class pipeline stages",
      "Use graph orchestration where deterministic routing matters more than a single chain",
    ],
    results:
      "Open-source demo and reference implementation for local experimentation and architecture review. It is not certified clinical or compliance software and requires legal, clinical, security, and deployment hardening before real PHI use.",
  },
  {
    name: "EvidenceIQ",
    description:
      "Local-first sensitive-media workspace with role-based access, PII-aware metadata handling, local AI tagging, semantic search, and audit trails.",
    tags: ["FastAPI", "SQLite", "Ollama", "ChromaDB", "RBAC", "SHA-256"],
    link: "https://github.com/Anudeepsrib/EvidenceIQ",
    metrics: "local-first · sensitive media · audit trails",
    openSourceCategory: "Open Source Reference Implementation",
    patternFor: "Privacy-aware media intake, search, and review",
    problem:
      "Teams handling sensitive images, video, and documents need searchable workflows without sending media to cloud AI by default or losing access and provenance controls.",
    architecture: [
      "Validated media ingestion with SHA-256 hashing and audit records",
      "SQLite stores metadata, roles, and audit logs locally",
      "Ollama-backed vision models and CLIP/ChromaDB support local tagging and semantic search",
      "RBAC, PII-aware metadata scrubbing, and separate redacted copies protect originals",
    ],
    decisions: [
      "Default AI processing to local Ollama and require explicit review for external integrations",
      "Keep originals unchanged and create redacted copies separately",
      "Describe controls as privacy-aware and forensic-style, not compliance certification",
    ],
    results:
      "Open-source reference implementation for local sensitive-media review with integrity checks, role-based controls, local AI search, and report generation. It is not formal compliance or forensic-admissibility software.",
  },
  {
    name: "InferIQ",
    description:
      "Reference implementation for benchmarking and serving LLM inference across vLLM, NVIDIA NIM, and NVIDIA NeMo, with optional CUDA profiling, a FastAPI gateway, and a Streamlit dashboard.",
    tags: [
      "Python",
      "FastAPI",
      "vLLM",
      "NVIDIA NIM",
      "NVIDIA NeMo",
      "Streamlit",
    ],
    link: "https://github.com/Anudeepsrib/InferIQ",
    metrics: "latency · throughput · GPU memory · cost per token",
    openSourceCategory: "Open Source Reference Implementation",
    patternFor: "GPU inference benchmarking, routing, and observability",
    problem:
      "Teams comparing LLM serving backends need reproducible workload sweeps and consistent latency, throughput, utilization, and cost views before choosing an operating path.",
    architecture: [
      "Benchmark runner sweeps configured models, prompt lengths, and batch sizes",
      "Backend adapters cover vLLM, external NVIDIA NIM, and NVIDIA NeMo",
      "FastAPI exposes OpenAI-compatible endpoints with configurable routing",
      "Optional torch.profiler traces and a Streamlit dashboard visualize results",
    ],
    decisions: [
      "Keep backends behind common schemas for side-by-side comparison",
      "Make GPU profiling optional so the CPU demo can run in degraded mode",
      "Store benchmark output as structured JSON instead of publishing unverified performance claims",
    ],
    results:
      "Open-source reference and demo for evaluating inference backends and serving patterns. It is not a turnkey production deployment; production use needs authentication, secret management, hardening, and validated autoscaling.",
  },
  {
    name: "ShiftIQ",
    description:
      "Local-first code migration assistant for static analysis, dry-run migrations, MCP tools, rollback checkpoints, and PII/PHI/PCI-oriented pattern scanning.",
    tags: ["Python", "FastAPI", "AST", "MCP", "Dry Run", "Rollback"],
    link: "https://github.com/Anudeepsrib/shiftIQ",
    metrics: "static analysis · dry runs · rollback checkpoints",
    openSourceCategory: "Open Source Reference Implementation",
    patternFor: "Reviewable, local-first code migration workflows",
    problem:
      "Teams need to inspect and plan migrations without executing target code or applying unreviewed changes.",
    architecture: [
      "Static parsing and AST analysis find candidates without importing or executing target code",
      "API-key-protected FastAPI endpoints and MCP tools expose analyze, run, scan, visualize, and rollback",
      "Migrations default to dry-run; applied runs create rollback checkpoints",
      "Sensitive-data findings are redacted and filesystem access is constrained to allowed roots",
    ],
    decisions: [
      "Default every migration to dry-run and require explicit apply",
      "Keep core analysis local and static without a cloud LLM or telemetry dependency",
      "Present compliance-oriented checks as scanning only, not certification",
    ],
    results:
      "Open-source development tool with CLI, API, MCP, and UI paths for reviewable code migrations. Generated migrations still require human review.",
  },
  {
    name: "Annapurna-AI",
    description:
      "Culture-aware, India-first AI meal planner and grocery assistant for South Indian vegetarian cooking with evidence-grounded recommendations.",
    tags: ["Next.js", "FastAPI", "Gemini", "LiteLLM", "SQLModel"],
    link: "https://github.com/Anudeepsrib/Annapurna-AI",
    metrics: "multimodal · model routing · cultural AI",
    openSourceCategory: "Open Source Reference Implementation",
    patternFor:
      "Domain-specific agentic applications with model routing & cultural context",
    problem:
      "Generic meal planners often miss cultural context, dietary preferences, and practical grocery constraints in regional cuisines.",
    architecture: [
      "Next.js frontend for planning workflows and recipe discovery",
      "FastAPI service boundary for recommendation and user preference logic",
      "Gemini multimodal path for recipe or ingredient understanding",
      "LiteLLM abstraction for provider routing and cost control",
      "Typed persistence layer for recipes, plans, and preferences",
    ],
    decisions: [
      "Keep cultural preference modeling separate from generic nutrition rules",
      "Use model routing so high-cost reasoning is reserved for harder tasks",
      "Make food and wellness explanations evidence-grounded and reviewable",
    ],
    results:
      "Open-source reference implementation for exploring multimodal meal planning, preference modeling, and provider routing in a culturally specific domain.",
  },
];

interface ProjectDetailModalProps {
  project: (typeof projects)[0];
  onClose: () => void;
}

function DetailBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black/18 rounded-lg border border-[var(--border)] p-5">
      <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text)]">
        {icon}
        {title}
      </h4>
      {children}
    </div>
  );
}

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const titleId = `project-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable.at(-1);

      if (!first || !last) {
        event.preventDefault();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      ref={dialogRef}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      className="bg-black/78 fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <motion.div
        initial={reduceMotion ? false : { scale: 0.97, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { scale: 0.97, opacity: 0, y: 12 }}
        transition={{
          duration: reduceMotion ? 0 : 0.24,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <GradientCard className="p-5 sm:p-7 md:p-8">
          <div className="mb-7 flex items-start justify-between gap-5">
            <div>
              <h3
                id={titleId}
                className="text-2xl font-bold leading-tight text-[var(--text)] md:text-3xl"
              >
                {project.name}
              </h3>
              {project.openSourceCategory && (
                <div className="mt-2 inline-flex items-center gap-2">
                  <span className="rounded-full border border-[var(--accent-2)]/30 bg-[var(--sage-soft)] px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--accent-2)]">
                    {project.openSourceCategory}
                  </span>
                  {project.patternFor && (
                    <span className="text-xs text-[var(--text-3)]">
                      {project.patternFor}
                    </span>
                  )}
                </div>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {project.metrics}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-3)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid gap-4">
            <DetailBlock
              title="Problem"
              icon={<Zap size={16} className="text-[var(--accent)]" />}
            >
              <p className="text-sm leading-7 text-[var(--text-2)]">
                {project.problem}
              </p>
            </DetailBlock>

            <DetailBlock
              title="Architecture"
              icon={<Box size={16} className="text-[var(--accent)]" />}
            >
              <ul className="space-y-2">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--text-2)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock
              title="Key Decisions"
              icon={<Shield size={16} className="text-[var(--accent)]" />}
            >
              <ul className="space-y-2">
                {project.decisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--text-2)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {decision}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock
              title="Results"
              icon={<BarChart3 size={16} className="text-[var(--accent)]" />}
            >
              <p className="text-sm leading-7 text-[var(--text-2)]">
                {project.results}
              </p>
            </DetailBlock>

            <div className="pt-2">
              <CTAButton
                href={project.link}
                external
                variant="secondary"
                icon={<ArrowUpRight size={15} />}
              >
                View source on GitHub
              </CTAButton>
              <p className="mt-2 text-[10px] text-[var(--text-3)]">
                Open source project. Review its README and setup notes before
                reuse.
              </p>
            </div>
          </div>
        </GradientCard>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const projectTrigger = useRef<HTMLButtonElement | null>(null);

  const closeProject = () => {
    setSelectedProject(null);
    requestAnimationFrame(() => projectTrigger.current?.focus());
  };

  return (
    <>
      <section className="premium-section relative z-10" id="projects">
        <div className="section-divider" />
        <Container>
          <MotionWrapper variants={fadeUp}>
            <SectionHeader
              title="Selected systems & open-source work."
              description="Reference implementations that make the architecture, trade-offs, and operating boundaries visible, not just the demo."
            />
          </MotionWrapper>

          <MotionWrapper
            staggerChildren
            variants={stagger}
            className="grid grid-cols-1 gap-3 lg:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={scaleIn}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.005,
                        transition: {
                          type: "spring",
                          stiffness: 320,
                          damping: 26,
                        },
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                className={project.hero ? "lg:col-span-2" : undefined}
              >
                <ProjectCard
                  project={project}
                  onClick={(trigger) => {
                    projectTrigger.current = trigger;
                    setSelectedProject(project);
                  }}
                />
              </motion.div>
            ))}
          </MotionWrapper>
        </Container>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
