import { ArrowDownRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { evidenceItems } from "@/data/studioData";

export default function KeyImpact() {
  return (
    <section
      className="premium-section relative z-10 bg-[var(--graphite)] text-white"
      id="approach"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="section-number text-[var(--signal)]">
              05 / Engineering approach
            </span>
            <h2 className="section-title !text-white">
              Make the invisible parts reviewable.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/60">
              Model choice is one decision. Scope, evaluation, failure behavior,
              and operating boundaries determine whether the whole system can be
              trusted.
            </p>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {evidenceItems.map((item, index) => (
              <article
                key={item.label}
                className="group grid gap-4 py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start sm:gap-6"
              >
                <span className="font-mono text-xs text-[var(--signal)]">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold !text-white">
                    {item.value}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-7 text-white/65">
                    {item.detail}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">
                    Evidence: {item.source}{" "}
                    <ArrowDownRight size={13} aria-hidden="true" />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
