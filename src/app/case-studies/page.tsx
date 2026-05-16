import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllCaseStudies } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "System Design Case Studies | Anudeep Sri Bathina",
  description:
    "Detailed system design case studies including RAG architectures, LLM evaluation harnesses, and production AI systems with trade-off analysis.",
};

function extractSection(content: string, heading: string): string | null {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(
    new RegExp(`## ${escapedHeading}\\n([\\s\\S]*?)(?=\\n##|$)`),
  );
  return match ? match[1].trim() : null;
}

function MarkdownBlock({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-p:text-[var(--text-2)] prose-strong:text-[var(--text)] prose-li:text-[var(--text-2)] prose-table:text-[var(--text-2)] prose-th:text-[var(--text)]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default async function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h1 className="font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              System Design Case Studies
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-[var(--text-2)]">
              Production AI architectures with detailed trade-off analysis,
              failure modes, and SLO targets.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-12">
          {caseStudies.map((study, index) => {
            const architecture = extractSection(study.content, "Architecture");
            const tradeoffs = extractSection(
              study.content,
              "Key design decisions & trade-offs",
            );
            const failureModes = extractSection(
              study.content,
              "Failure modes & mitigations",
            );

            return (
              <ScrollReveal key={study.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 backdrop-blur-sm">
                  <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h2 className="font-cabinet-grotesk mb-2 text-2xl font-bold">
                        {study.title}
                      </h2>
                      <p className="mb-4 text-[var(--text-2)]">
                        {study.summary}
                      </p>

                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-xs ${
                            study.status === "production"
                              ? "border border-green-500/30 bg-green-500/20 text-green-400"
                              : "border border-blue-500/30 bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {study.status.toUpperCase()}
                        </span>

                        {study.slo && (
                          <div className="bg-[var(--accent-1)]/10 border-[var(--accent-1)]/30 flex items-center gap-2 rounded-full border px-3 py-1">
                            <span className="font-mono text-xs text-[var(--accent-1)]">
                              p95 &lt; {study.slo.latencyP95Ms}ms
                              {study.slo.availability &&
                                ` • ${study.slo.availability} uptime`}
                              {study.slo.costPer1kReq &&
                                ` • ${study.slo.costPer1kReq}/1K`}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {study.constraints.map((constraint) => (
                          <span
                            key={constraint}
                            className="bg-[var(--accent-2)]/10 border-[var(--accent-2)]/20 rounded border px-2 py-1 font-mono text-xs text-[var(--accent-2)]"
                          >
                            {constraint}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1 text-xs text-[var(--text-2)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {study.repo && (
                      <a
                        href={study.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-[var(--accent-1)]/90 mt-4 rounded-lg bg-[var(--accent-1)] px-4 py-2 text-sm font-medium text-white transition-colors lg:mt-0"
                      >
                        View Code
                      </a>
                    )}
                  </div>

                  <div className="mb-8">
                    <h3 className="font-cabinet-grotesk mb-4 text-lg font-semibold">
                      Architecture
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
                      {architecture ? (
                        <MarkdownBlock content={architecture} />
                      ) : (
                        <p className="text-sm text-[var(--text-2)]">
                          Full architecture, diagrams, and implementation details
                          live in the open-source reference repo linked above.
                          Production patterns (tenant isolation, hybrid retrieval,
                          citation guarantees, cost/latency budgets) are fully
                          documented there.
                        </p>
                      )}
                    </div>
                  </div>

                  {tradeoffs && (
                    <div className="mb-8">
                      <h3 className="font-cabinet-grotesk mb-4 text-lg font-semibold">
                        Design Decisions & Trade-offs
                      </h3>
                      <MarkdownBlock content={tradeoffs} />
                    </div>
                  )}

                  {failureModes && (
                    <div className="mb-8">
                      <h3 className="font-cabinet-grotesk mb-4 text-lg font-semibold">
                        Failure Modes & Mitigations
                      </h3>
                      <MarkdownBlock content={failureModes} />
                    </div>
                  )}

                  <div className="border-t border-[var(--border)] pt-4">
                    <div className="flex flex-wrap gap-2">
                      {study.domains.map((domain) => (
                        <span
                          key={domain}
                          className="font-mono text-xs text-[var(--text-3)]"
                        >
                          #{domain.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </StaggerContainer>
      </div>
      <Footer />
    </div>
  );
}
