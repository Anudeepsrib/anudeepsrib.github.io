import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  GitBranch,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { additionalSystems, caseStudies } from "@/data/studioData";

function ProjectHeader({ project }: { project: (typeof caseStudies)[number] }) {
  return (
    <div className="project-header grid gap-6">
      <div>
        <p className="studio-kicker text-[var(--accent)]">{project.eyebrow}</p>
        <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {project.name}
        </h3>
      </div>
      <div>
        <span className="status-chip">{project.status}</span>
        <p className="mt-4 text-base leading-7 text-[var(--text-2)]">
          {project.problem}
        </p>
      </div>
    </div>
  );
}

function ProjectEvidence({
  project,
}: {
  project: (typeof caseStudies)[number];
}) {
  return (
    <div className="mt-8 grid gap-6 border-t border-[var(--border)] pt-7 md:grid-cols-3">
      <div>
        <p className="evidence-label">My contribution</p>
        <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
          {project.role}
        </p>
      </div>
      <div>
        <p className="evidence-label">Use case</p>
        <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
          {project.users}
        </p>
      </div>
      <div>
        <p className="evidence-label">Evidence-backed outcome</p>
        <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
          {project.outcome}
        </p>
      </div>
    </div>
  );
}

function ProjectDetails({
  project,
}: {
  project: (typeof caseStudies)[number];
}) {
  return (
    <details className="case-details">
      <summary>Inspect constraints and decision</summary>
      <div className="grid gap-7 px-5 pb-6 pt-5 md:grid-cols-2 md:px-6">
        <div>
          <p className="evidence-label">Constraints</p>
          <ul className="mt-3 space-y-2">
            {project.constraints.map((constraint) => (
              <li
                key={constraint}
                className="flex items-start gap-2 text-sm text-[var(--text-2)]"
              >
                <Check
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                  size={15}
                  aria-hidden="true"
                />
                {constraint}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="evidence-label">Decision / consequence</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text)]">
            {project.decision}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
            {project.tradeoff}
          </p>
        </div>
      </div>
    </details>
  );
}

function ClinIQPreview() {
  return (
    <figure className="product-preview">
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white">
        <Image
          src="/assets/projects/cliniq-retrieval.png"
          alt="ClinIQ interface showing a clarification step followed by a source-backed policy answer"
          width={1440}
          height={900}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1100px"
          priority={false}
        />
        <span
          className="annotation-pin left-[34%] top-[25%]"
          aria-hidden="true"
        >
          1
        </span>
        <span
          className="annotation-pin left-[34%] top-[49%]"
          aria-hidden="true"
        >
          2
        </span>
        <span
          className="annotation-pin left-[67%] top-[58%]"
          aria-hidden="true"
        >
          3
        </span>
      </div>
      <figcaption className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["1", "Clarification before retrieval"],
          ["2", "Answer stays inside policy scope"],
          ["3", "Source and confidence remain visible"],
        ].map(([number, label]) => (
          <span
            key={number}
            className="flex items-center gap-2 text-xs leading-5 text-white/65"
          >
            <span className="annotation-key">{number}</span>
            {label}
          </span>
        ))}
      </figcaption>
      <p className="mt-3 text-xs leading-5 text-white/45">
        Real ClinIQ product screenshot from the public repository; the interface
        uses synthetic demonstration data.
      </p>
    </figure>
  );
}

function ShiftIQPreview() {
  return (
    <figure
      className="system-preview"
      aria-label="ShiftIQ Fleet agent workflow"
    >
      <div className="system-node">
        <GitBranch size={18} aria-hidden="true" />
        <span>
          <strong>Fleet agents</strong>
          <small>Analyze + plan</small>
        </span>
      </div>
      <span className="system-arrow" aria-hidden="true">
        →
      </span>
      <div className="system-node is-accent">
        <ShieldCheck size={18} aria-hidden="true" />
        <span>
          <strong>Dry run</strong>
          <small>Review proposed diff</small>
        </span>
      </div>
      <span className="system-arrow" aria-hidden="true">
        →
      </span>
      <div className="system-node">
        <RotateCcw size={18} aria-hidden="true" />
        <span>
          <strong>Apply</strong>
          <small>Checkpoint + rollback</small>
        </span>
      </div>
      <figcaption>
        Fleet coordinates bounded analysis and migration agents across CLI, API,
        MCP, and UI surfaces. Target code is analyzed without import or
        execution.
      </figcaption>
    </figure>
  );
}

function ResearchPreview() {
  return (
    <figure
      className="research-preview"
      aria-label="Groundfish recognition research pipeline"
    >
      <div className="research-stage">
        <span>01</span>
        <strong>Underwater frame</strong>
        <small>Cross-database input</small>
      </div>
      <div className="research-line" aria-hidden="true" />
      <div className="research-stage">
        <span>02</span>
        <strong>YOLOv8</strong>
        <small>Locate the fish</small>
      </div>
      <div className="research-line" aria-hidden="true" />
      <div className="research-stage">
        <span>03</span>
        <strong>ResNet-50</strong>
        <small>Classify the crop</small>
      </div>
      <div className="research-result">
        <span>Reported result</span>
        <strong>94.10% mAP</strong>
        <small>Thesis evaluation workload</small>
      </div>
      <figcaption className="sr-only">
        The research pipeline takes an underwater frame, localizes the fish with
        YOLOv8, and classifies the crop with ResNet-50.
      </figcaption>
    </figure>
  );
}

export default function Projects() {
  const [cliniq, shiftiq, groundfish] = caseStudies;

  return (
    <section className="premium-section relative z-10" id="work">
      <Container>
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.6fr_1fr] lg:items-end">
          <div>
            <span className="section-number">04 / Selected work</span>
            <h2 className="section-title">
              Systems you can inspect, not just claims you can read.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--text-2)] lg:justify-self-end">
            Three complementary examples show how I frame boundaries, make
            consequential decisions, and leave evidence behind for the next
            reviewer.
          </p>
        </div>

        <article className="case-study case-study-featured" id="case-cliniq">
          <ProjectHeader project={cliniq} />
          <div className="mt-8 rounded-xl bg-[var(--graphite)] p-3 sm:p-5 lg:p-7">
            <ClinIQPreview />
          </div>
          <ProjectEvidence project={cliniq} />
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <ProjectDetails project={cliniq} />
            <a
              className="text-link"
              href={cliniq.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Review repository <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="case-study" id="case-shiftiq">
            <ProjectHeader project={shiftiq} />
            <ShiftIQPreview />
            <ProjectEvidence project={shiftiq} />
            <div className="mt-7 grid gap-4">
              <ProjectDetails project={shiftiq} />
              <a
                className="text-link"
                href={shiftiq.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Review repository <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="case-study" id="case-groundfish">
            <ProjectHeader project={groundfish} />
            <ResearchPreview />
            <ProjectEvidence project={groundfish} />
            <div className="mt-7 grid gap-4">
              <ProjectDetails project={groundfish} />
              <a
                className="text-link"
                href={groundfish.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the thesis <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="studio-kicker text-[var(--accent)]">
                Additional systems
              </p>
              <h3 className="mt-2 text-3xl font-semibold">
                More platform depth in the open.
              </h3>
            </div>
            <a
              className="text-link"
              href="https://github.com/Anudeepsrib?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all repositories
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {additionalSystems.map((system) => (
              <a
                key={system.name}
                href={system.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--surface)] p-6 transition hover:bg-[var(--bg-secondary)]"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                  {system.eyebrow}
                </span>
                <span className="mt-4 flex items-center justify-between gap-3">
                  <strong className="text-xl font-semibold text-[var(--text)]">
                    {system.name}
                  </strong>
                  <ArrowUpRight
                    className="text-[var(--text-3)] transition group-hover:text-[var(--accent)]"
                    size={17}
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-3 block text-sm leading-6 text-[var(--text-2)]">
                  {system.description}
                </span>
                <span className="mt-5 flex flex-wrap gap-2">
                  {system.tools.map((tool) => (
                    <span key={tool} className="tech-pill">
                      {tool}
                    </span>
                  ))}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
