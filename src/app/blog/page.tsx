import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllNotes, getAllPosts } from "@/lib/content";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Writing & Field Notes | Anudeep Sri Bathina",
  description:
    "Technical essays on production LLM systems, RAG architectures, observability, evaluation, and agentic AI. Featured on Medium + in-depth field notes. By Anudeep Sri Bathina, AI Architect.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const featuredEssays = [
  {
    title: "LLM Observability: The Engineering Imperative for Production AI Systems",
    date: "Feb 2026",
    url: "https://anudeepsri.medium.com/llm-observability-e068c6d98925",
    hook: "Traditional monitoring breaks for stochastic LLM and agentic systems. The four pillars — tracing for multi-hop RAG/agent flows, LLM-as-Judge + RAGAS evals, drift detection, and token economics — with tooling patterns that power production gates like the LLM Evaluation Harness.",
    tags: ["Observability", "Evals", "Agentic", "Production"],
  },
  {
    title: "LangSmith vs Arize vs Braintrust: The Definitive 2026 Comparison",
    date: "Mar 2026",
    url: "https://anudeepsri.medium.com/langsmith-vs-arize-vs-braintrust-e397e4728a76",
    hook: "Practical decision framework for RAG and multi-agent production workloads. When to pick LangSmith for deep LangGraph tracing, Arize for enterprise drift & compliance, or Braintrust for eval-first CI — the exact trade-offs behind the open-sourced eval reference repos.",
    tags: ["Tooling", "Evals", "RAG", "CI/CD"],
  },
  {
    title: "A Technical Deep Dive into Databricks AI Ecosystem",
    date: "Mar 2026",
    url: "https://anudeepsri.medium.com/a-technical-deep-dive-into-databricks-ai-ecosystem-26f032111ad4",
    hook: "Mosaic AI, Vector Search for RAG, agent frameworks, evaluation tooling, and model serving at enterprise scale. How the patterns from ClinIQ, EvidenceIQ, and the RAG Policy Intelligence case study are actually operationalized in production.",
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
    hook: "LangGraph orchestration, LangSmith tracing, and the full stack for traceable, evaluable RAG and agentic systems that ship. Directly complements the architecture decisions and trade-offs in the case studies.",
    tags: ["LangChain", "LangGraph", "Agents", "Observability"],
  },
];

export default async function BlogPage() {
  const posts = getAllPosts();
  const notes = getAllNotes();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h1 className="font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Writing &amp; Field Notes
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-[var(--text-2)]">
              Technical essays on production LLM systems, RAG architectures,
              observability, and agentic AI — plus in-depth field notes from
              building at scale.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-14 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] bg-white/[0.025] p-5">
              <BookOpen className="mb-4 text-[var(--accent-1)]" size={18} />
              <p className="text-2xl font-bold text-[var(--text)]">
                {notes.length}
              </p>
              <p className="mt-1 text-sm text-[var(--text-3)]">
                original field notes
              </p>
            </div>
            <Link
              href="/case-studies"
              className="group rounded-lg border border-[var(--border)] bg-white/[0.025] p-5 transition-colors hover:border-[rgba(125,211,252,0.28)]"
            >
              <Layers3 className="mb-4 text-[var(--accent-1)]" size={18} />
              <p className="text-base font-semibold text-[var(--text)]">
                System design cases
              </p>
              <p className="mt-1 text-sm text-[var(--text-3)]">
                RAG and LLM evaluation trade-offs
              </p>
            </Link>
            <a
              href="https://medium.com/@anudeepsri"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-[var(--border)] bg-white/[0.025] p-5 transition-colors hover:border-[rgba(125,211,252,0.28)]"
            >
              <ExternalLink className="mb-4 text-[var(--accent-1)]" size={18} />
              <p className="text-base font-semibold text-[var(--text)]">
                Technical essays
              </p>
              <p className="mt-1 text-sm text-[var(--text-3)]">
                Production RAG, observability &amp; agentic systems on Medium
              </p>
            </a>
          </div>
        </ScrollReveal>

        {/* Blog Posts */}
        {posts.length > 0 && (
          <section className="mb-20">
            <ScrollReveal>
              <h2 className="font-cabinet-grotesk mb-8 text-2xl font-bold">
                Articles
              </h2>
            </ScrollReveal>

            <StaggerContainer className="space-y-6">
              {posts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="hover:border-[var(--accent-1)]/30 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                      <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <h3 className="font-cabinet-grotesk mb-2 text-xl font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-1)]">
                            {post.title}
                          </h3>
                          <p className="mb-4 line-clamp-2 text-[var(--text-2)]">
                            {post.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-3)]">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              {post.readTime} min read
                            </div>
                            <div className="flex items-center gap-1">
                              <span>By {post.author}</span>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-[var(--accent-1)]/10 border-[var(--accent-1)]/20 rounded border px-2 py-1 font-mono text-xs text-[var(--accent-1)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ArrowRight
                          size={20}
                          className="mt-4 flex-shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--accent-1)] lg:ml-4 lg:mt-0"
                        />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </section>
        )}

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

                      <div className="mb-3 flex items-center gap-2 text-sm text-[var(--text-3)]">
                        <Clock size={14} />
                        {note.readTime} min read
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

        {/* Featured Essays on Medium — Best of Writing */}
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
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-1)]"
              >
                Read more on Medium <ExternalLink size={14} />
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}
