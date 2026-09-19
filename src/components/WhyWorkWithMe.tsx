import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";
import { productionProof } from "@/data/studioData";

const roleContext: Record<string, { scope: string; ownership: string }> = {
  "AI Architect": {
    scope: "Agentic AI · multimodal RAG · governed lakehouse · observability",
    ownership:
      "Owns architecture and delivery for AT&T’s $4M competitive-intelligence platform, leading a 16-person team across agentic AI, multimodal RAG, governed data, and production operations for pricing, strategy, and sales teams.",
  },
  "Lead AI Engineer": {
    scope: "Public GenAI · RAG · MCP · developer platform",
    ownership:
      "Launched AT&T’s first public-facing GenAI product for 1,500+ API developers. The LangGraph and RAG platform cut integration time 80%, resolved 99% of queries at sub-2-second latency, sustained 99% uptime, and earned the RISE Award.",
  },
  "Technical Lead": {
    scope: "Azure ML platform · team leadership · MLOps",
    ownership:
      "Led an 11-person team delivering a Databricks and Spark ranking platform for Unilever UK; raised Precision@10 from 62% to 85%, reduced stockouts 18%, and cut pipeline runtime 40%.",
  },
  "Big Data & ML Engineer": {
    scope: "Distributed ML · product engineering · containers",
    ownership:
      "Independently built and scaled Strait, a proprietary Big Data and ML platform using PySpark, Dask, predictive models, and containerized delivery.",
  },
  "Cloud Data Associate": {
    scope: "Cloud migration · data engineering · analytics",
    ownership:
      "Migrated 300GB of airline data to Azure SQL, improved SLA compliance 18%, reduced manual pipeline effort 60%, and tripled query performance for 200GB of healthcare data.",
  },
};

export default function WhyWorkWithMe() {
  return (
    <section className="premium-section relative z-10" id="experience">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <span className="section-number">01 / Experience</span>
            <h2 className="section-title">
              From data engineering delivery to AI systems ownership.
            </h2>
            <div
              className="progression-track mt-8"
              aria-label="Career progression"
            >
              <span>Data engineering</span>
              <span>ML delivery</span>
              <span>AI systems</span>
            </div>
          </div>

          <div className="experience-list">
            {resumeData.experience.map((role, index) => {
              const context = roleContext[role.position];
              return (
                <article
                  key={`${role.company}-${role.startDate}`}
                  className="experience-row"
                >
                  <div className="company-mark">
                    <Image
                      src={role.logo}
                      alt=""
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-xl font-semibold">{role.position}</h3>
                      {index === 0 && (
                        <span className="status-chip">Current</span>
                      )}
                    </div>
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]"
                    >
                      {role.company}{" "}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                      {context.scope}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-2)]">
                      {context.ownership}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xs font-semibold text-[var(--text)]">
                      {role.startDate}–{role.endDate}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-3)]">
                      {role.location}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 border-y border-[var(--border)]">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--border)] py-5">
            <div>
              <p className="studio-kicker text-[var(--accent)]">
                Selected production outcomes
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Proof from systems operating at scale.
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--text-3)]">
              AT&amp;T · Lead AI Engineer
            </span>
          </div>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {productionProof.map((item) => (
              <article key={item.label} className="bg-[var(--bg)] py-6 pr-5">
                <strong className="block font-display text-3xl font-semibold tracking-tight text-[var(--text)]">
                  {item.value}
                </strong>
                <span className="mt-2 block text-sm font-semibold text-[var(--text)]">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[var(--text-3)]">
                  {item.detail}
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
