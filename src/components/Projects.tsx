"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      "Healthcare RAG reference implementation focused on scoped retrieval, clinical citations, and safer handling of sensitive text.",
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
    metrics: "Healthcare RAG · citations · privacy controls",
    problem:
      "Clinical and policy-heavy workflows need fast retrieval without blurring department boundaries or losing source traceability.",
    architecture: [
      "Document ingestion layer for clinical guidelines and reference material",
      "Scoped vector stores to keep retrieval boundaries explicit",
      "LangGraph orchestration for multi-step retrieval and answer assembly",
      "PII/PHI redaction checks before sensitive text enters retrieval flows",
      "Observability hooks for evaluation and citation review",
    ],
    decisions: [
      "Favor explicit retrieval scopes over a single shared index",
      "Keep redaction and citation validation as first-class pipeline stages",
      "Use graph orchestration where deterministic routing matters more than a single chain",
    ],
    results:
      "Review this project for RAG architecture, sensitive-data boundaries, and citation-first answer design.",
  },
  {
    name: "EvidenceIQ",
    description:
      "Evidence-grounded research assistant pattern for retrieving, ranking, and explaining source-backed findings.",
    tags: ["RAG", "Evaluation", "Citations", "Python", "LLM"],
    link: "https://github.com/Anudeepsrib/EvidenceIQ",
    metrics: "evidence retrieval · source ranking · review workflow",
    problem:
      "LLM answers become hard to trust when source collection, ranking, and explanation are not separated and reviewable.",
    architecture: [
      "Retriever layer separates candidate evidence from final synthesis",
      "Ranking stage promotes source quality and relevance before generation",
      "Prompt contracts keep citations attached to each claim",
      "Evaluation hooks support answer review and regression checks",
    ],
    decisions: [
      "Treat citations as required output structure, not optional decoration",
      "Keep retrieval and generation independently testable",
      "Design for analyst review when confidence is low",
    ],
    results:
      "Review this project for evidence-aware RAG patterns and evaluation-oriented answer design.",
  },
  {
    name: "Annapurna-AI",
    description:
      "Culture-aware AI meal planning concept for South Indian vegetarian cooking and wellness-oriented recommendations.",
    tags: ["Next.js", "FastAPI", "Gemini", "LiteLLM", "SQLModel"],
    link: "https://github.com/Anudeepsrib/Annapurna-AI",
    metrics: "meal planning · multimodal input · model routing",
    problem:
      "Generic meal planners often miss cultural context, dietary preferences, and practical grocery constraints.",
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
      "Review this project for domain-specific AI product architecture and model-routing choices.",
  },
  {
    name: "Decision-Support-System",
    description:
      "Decision intelligence project focused on ranking alternatives, explaining trade-offs, and supporting auditable recommendations.",
    tags: ["Decision Intelligence", "Python", "Analytics", "Explainability"],
    link: "https://github.com/Anudeepsrib/Decision-Support-System",
    metrics: "ranking · trade-offs · explainability",
    problem:
      "Decision workflows need transparent scoring and defensible recommendations instead of opaque single-answer outputs.",
    architecture: [
      "Criteria modeling layer captures weights, constraints, and assumptions",
      "Scoring pipeline ranks alternatives with traceable intermediate values",
      "Explanation layer surfaces trade-offs and sensitivity to weight changes",
      "Report-ready outputs support human review before action",
    ],
    decisions: [
      "Keep scoring deterministic where possible",
      "Expose assumptions and weights rather than hiding them inside a model response",
      "Optimize for decision review, not automated autopilot",
    ],
    results:
      "Review this project for transparent decision-support architecture and explainability patterns.",
  },
  {
    name: "InferIQ",
    description:
      "Inference quality and evaluation concept for checking LLM outputs before they are trusted in workflows.",
    tags: ["LLM Evaluation", "Quality Gates", "Python", "Observability"],
    link: "https://github.com/Anudeepsrib/InferIQ",
    metrics: "eval gates · output checks · observability",
    problem:
      "Teams need repeatable checks for answer quality, safety, and regression before model output reaches users.",
    architecture: [
      "Evaluation set design for representative and adversarial prompts",
      "Scoring layer separates correctness, safety, citation quality, and latency",
      "Regression thresholds catch model or prompt changes before release",
      "Observability output supports triage and continuous improvement",
    ],
    decisions: [
      "Use multiple quality dimensions instead of a single pass/fail score",
      "Make eval failures actionable with traceable examples",
      "Design quality gates that can run in CI or release workflows",
    ],
    results:
      "Review this project for LLM evaluation gates and production-readiness checks.",
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/78 fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 12 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
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
              onClick={onClose}
              className="rounded-md p-2 text-[var(--text-3)] transition-colors hover:bg-white/[0.05] hover:text-[var(--text)]"
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
                View on GitHub
              </CTAButton>
            </div>
          </div>
        </GradientCard>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section className="premium-section relative z-10" id="projects">
        <div className="section-divider" />
        <Container>
          <MotionWrapper variants={fadeUp}>
            <SectionHeader
              title="Open source"
              description="Systems I've built and open-sourced."
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
                className={project.hero ? "lg:col-span-2" : undefined}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
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
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
