"use client";

import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger } from "@/lib/animation";

const impacts = [
  {
    metric: "15K+",
    label: "people served",
    detail: "Enterprise GenAI platform at AT&T",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    metric: "4h → <90s",
    label: "resolution time",
    detail: "Policy queries accelerated through RAG and automation",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    metric: "97.2%",
    label: "extraction accuracy",
    detail: "Across 50K+ document pages per month",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    metric: "2.4s p95",
    label: "RAG latency",
    detail: "At $0.42 per 1K requests on Azure",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    metric: "$2.3M",
    label: "retention savings",
    detail: "Delivered through customer churn modeling",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    metric: "8",
    label: "engineers led",
    detail: "Moving ML deployments from quarterly to weekly",
    className: "md:col-span-2 lg:col-span-2",
  },
];

export default function KeyImpact() {
  return (
    <section
      className="premium-section relative z-10 bg-[var(--bg-secondary)]"
      id="proof"
    >
      <Container>
        <MotionWrapper variants={fadeUp}>
          <SectionHeader
            title="Proof, not promises."
            description="A selection of measurable outcomes from production GenAI, machine learning, and data systems."
          />
        </MotionWrapper>

        <MotionWrapper
          staggerChildren
          variants={stagger}
          className="grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-3"
        >
          {impacts.map((item, index) => (
            <MotionWrapper
              key={item.metric}
              variants={fadeUp}
              className={`${item.className} group flex min-h-52 flex-col justify-between rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] sm:p-7`}
            >
              <span className="font-mono text-[10px] font-semibold text-[var(--text-3)]">
                0{index + 1}
              </span>
              <div>
                <div className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-[-0.05em] text-[var(--accent)]">
                  {item.metric}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--text)]">
                  {item.label}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--text-3)]">
                  {item.detail}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  );
}
