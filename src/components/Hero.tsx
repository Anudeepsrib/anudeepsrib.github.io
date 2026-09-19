import { Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";

export default function Hero() {
  const { personalInfo } = resumeData;

  return (
    <section
      className="hero-shell relative z-10 overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28"
      id="top"
    >
      <Container>
        <div className="flex min-h-[calc(100svh-8rem)] items-center">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-3)]">
              <span className="text-[var(--accent)]">{personalInfo.title}</span>
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(3.35rem,7.2vw,6.75rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[var(--text)]">
              I build AI systems that survive
              <span className="block text-[var(--accent)]">
                contact with reality.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-2)] md:text-xl md:leading-9">
              I&apos;m {personalInfo.name}, an AI Architect leading agentic AI
              platforms, multimodal RAG, and governed data systems, from
              architecture through production operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn-primary" href="#work">
                View selected work
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

            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-[var(--border)] py-5">
              {[
                ["11+ years", "AI, data & platform engineering"],
                ["16 engineers", "Architecture + delivery leadership"],
                ["1,500+", "Developers served by public GenAI"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="border-l border-[var(--border)] px-3 first:border-l-0 first:pl-0"
                >
                  <p className="text-sm font-semibold text-[var(--text)] sm:text-base">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
