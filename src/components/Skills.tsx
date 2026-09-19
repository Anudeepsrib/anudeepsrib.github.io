import { ArrowDownRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { capabilityGroups } from "@/data/studioData";
import resumeData from "@/data/resumeData.json";

export default function Skills() {
  return (
    <section
      className="premium-section relative z-10 bg-[var(--bg-secondary)]"
      id="expertise"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <span className="section-number">02 / Focused expertise</span>
            <h2 className="section-title">
              I architect AI agents and the platforms that run them.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[var(--text-2)]">
              From orchestration and tool boundaries to evaluation,
              observability, and production delivery. Each capability is tied to
              working evidence.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
            {capabilityGroups.map((group, index) => (
              <article key={group.title} className="capability-block">
                <span className="font-mono text-xs text-[var(--accent)]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">
                  {group.description}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${group.title} tools`}
                >
                  {group.tools.map((tool) => (
                    <li key={tool} className="tech-pill">
                      {tool}
                    </li>
                  ))}
                </ul>
                <a
                  href={group.href}
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)]"
                >
                  Evidence: {group.evidence}{" "}
                  <ArrowDownRight size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6">
          <p className="studio-kicker text-[var(--text-3)]">
            Selected credentials
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Certifications">
            {resumeData.certifications.map((certification) => (
              <li key={certification.name} className="tech-pill">
                {certification.name} · {certification.date}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
