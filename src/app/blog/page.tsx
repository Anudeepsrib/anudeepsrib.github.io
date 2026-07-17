import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import Footer from "@/components/Footer";
import { getAllNotes } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  BookOpen,
  Clock,
  ExternalLink,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Writing & Field Notes | Anudeep Sri Bathina",
  description:
    "Technical essays on production LLM systems, RAG architectures, observability, evaluation, and agentic AI. Featured on Medium + in-depth field notes. By Anudeep Sri Bathina, AI Architect.",
  path: "/blog",
});

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const featuredEssays = [
  {
    title:
      "LLM Observability: The Engineering Imperative for Production AI Systems",
    date: "Feb 2026",
    url: "https://anudeepsri.medium.com/llm-observability-e068c6d98925",
    hook: "Traditional monitoring breaks for stochastic LLM and agentic systems. The four pillars are tracing for multi-hop RAG and agent flows, LLM-as-Judge plus RAGAS evals, drift detection, and token economics.",
    tags: ["Observability", "Evals", "Agentic", "Production"],
  },
  {
    title: "LangSmith vs Arize vs Braintrust: The Definitive 2026 Comparison",
    date: "Mar 2026",
    url: "https://anudeepsri.medium.com/langsmith-vs-arize-vs-braintrust-e397e4728a76",
    hook: "Practical decision framework for RAG and multi-agent production workloads, including when to pick LangSmith for deep LangGraph tracing, Arize for enterprise drift and compliance workflows, or Braintrust for eval-first CI.",
    tags: ["Tooling", "Evals", "RAG", "CI/CD"],
  },
  {
    title: "A Technical Deep Dive into Databricks AI Ecosystem",
    date: "Mar 2026",
    url: "https://anudeepsri.medium.com/a-technical-deep-dive-into-databricks-ai-ecosystem-26f032111ad4",
    hook: "Mosaic AI, Vector Search for RAG, agent frameworks, evaluation tooling, and model serving at enterprise scale.",
    tags: ["Databricks", "RAG", "Platform", "Enterprise"],
  },
  {
    title: "How to Build AI-Powered Applications",
    date: "Feb 2026",
    url: "https://anudeepsri.medium.com/how-to-build-ai-powered-applications-a490370a5d1f",
    hook: "From prototype to production: growing evals from real traces, RAG/agent patterns, and shipping quality gates alongside the codebase. The methodology behind every open-source reference implementation I release on GitHub.",
    tags: ["Production", "RAG", "Agents", "Evals"],
  },
  {
    title: "The LangChain Ecosystem",
    date: "Mar 2026",
    url: "https://anudeepsri.medium.com/the-langchain-ecosystem-6a167c4ae63f",
    hook: "LangGraph orchestration, LangSmith tracing, and the full stack for traceable, evaluable RAG and agentic systems that ship. Directly complements the architecture decisions in the open-source reference implementations on GitHub.",
    tags: ["LangChain", "LangGraph", "Agents", "Observability"],
  },
];

export default async function BlogPage() {
  const notes = getAllNotes();

  return (
    <>
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="container mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h1 className="mb-6 font-heading text-5xl font-black tracking-[-0.04em] text-[var(--text)] md:text-7xl">
                Writing &amp; Field Notes
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-[var(--text-2)]">
                Technical essays on production LLM systems, RAG architectures,
                observability, and agentic AI - plus in-depth field notes from
                building at scale.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-14 grid gap-3 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <BookOpen className="mb-4 text-[var(--accent-1)]" size={18} />
                <p className="text-2xl font-bold text-[var(--text)]">
                  {notes.length}
                </p>
                <p className="mt-1 text-sm text-[var(--text-3)]">
                  original field notes
                </p>
              </div>
              <a
                href="https://github.com/Anudeepsrib?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Anudeep Sri Bathina's GitHub repositories (opens in a new tab)"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
              >
                <Layers3 className="mb-4 text-[var(--accent-1)]" size={18} />
                <p className="text-base font-semibold text-[var(--text)]">
                  Open source architectures
                </p>
                <p className="mt-1 text-sm text-[var(--text-3)]">
                  Production RAG, evals &amp; agentic patterns on GitHub
                </p>
              </a>
              <a
                href="https://medium.com/@anudeepsri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Anudeep Sri Bathina's essays on Medium (opens in a new tab)"
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
              >
                <ExternalLink
                  className="mb-4 text-[var(--accent-1)]"
                  size={18}
                />
                <p className="text-base font-semibold text-[var(--text)]">
                  Technical essays
                </p>
                <p className="mt-1 text-sm text-[var(--text-3)]">
                  Production RAG, observability &amp; agentic systems on Medium
                </p>
              </a>
            </div>
          </ScrollReveal>

          {/* Field Notes */}
          {notes.length > 0 && (
            <section className="mb-20">
              <ScrollReveal>
                <h2 className="font-cabinet-grotesk mb-8 text-2xl font-bold">
                  Field Notes
                </h2>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {notes.map((note, index) => (
                  <ScrollReveal key={note.slug} delay={index * 0.1}>
                    <Link href={`/notes/${note.slug}`} className="group block">
                      <div className="hover:border-[var(--accent-2)]/30 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                        <h3 className="font-cabinet-grotesk mb-2 text-lg font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-2)]">
                          {note.title}
                        </h3>

                        <p className="mb-3 line-clamp-2 text-sm leading-6 text-[var(--text-2)]">
                          {note.description}
                        </p>

                        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--text-3)]">
                          {note.category && (
                            <span className="font-mono text-[var(--accent-2)]">
                              {note.category}
                            </span>
                          )}
                          {note.date && (
                            <time dateTime={note.date}>
                              {formatDate(note.date)}
                            </time>
                          )}
                          <span className="inline-flex items-center gap-1">
                            <Clock size={14} aria-hidden="true" />
                            {note.readTime} min read
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-[var(--accent-2)]">
                          <span>Note</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </StaggerContainer>
            </section>
          )}

          {/* Featured Essays on Medium - Best of Writing */}
          <ScrollReveal>
            <section className="mb-20">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h2 className="font-cabinet-grotesk text-2xl font-bold">
                    Featured Essays on Medium
                  </h2>
                  <p className="mt-1 text-sm text-[var(--text-3)]">
                    Deep technical writing on production LLM systems, RAG
                    architectures, observability, and agentic AI.
                  </p>
                </div>
                <a
                  href="https://medium.com/@anudeepsri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the full Medium archive (opens in a new tab)"
                  className="hidden items-center gap-1 text-sm font-medium text-[var(--accent-1)] transition-colors hover:text-[var(--accent-1)]/80 md:flex"
                >
                  Full archive <ExternalLink size={14} />
                </a>
              </div>

              <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featuredEssays.map((essay, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <a
                      href={essay.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${essay.title} on Medium (opens in a new tab)`}
                      className="group block h-full rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-1)]/30 hover:scale-[1.01]"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-mono text-xs text-[var(--text-3)]">
                          {essay.date}
                        </span>
                        <ExternalLink
                          size={15}
                          className="text-[var(--text-3)] transition-colors group-hover:text-[var(--accent-1)]"
                        />
                      </div>

                      <h3 className="font-cabinet-grotesk mb-3 text-[15px] font-semibold leading-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent-1)]">
                        {essay.title}
                      </h3>

                      <p className="mb-4 line-clamp-3 text-sm leading-6 text-[var(--text-2)]">
                        {essay.hook}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {essay.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-[var(--border)] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-[var(--text-3)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </StaggerContainer>

              <div className="mt-4 text-center md:hidden">
                <a
                  href="https://medium.com/@anudeepsri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read more on Medium (opens in a new tab)"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-1)]"
                >
                  Read more on Medium <ExternalLink size={14} />
                </a>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
