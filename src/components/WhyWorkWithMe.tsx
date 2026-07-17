"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger } from "@/lib/animation";
import resumeData from "@/data/resumeData.json";

export default function WhyWorkWithMe() {
  return (
    <section className="premium-section relative z-10" id="experience">
      <div className="section-divider" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <MotionWrapper variants={fadeUp}>
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                title="From data foundations to AI architecture."
                description="Eleven years across engineering, technical leadership, graduate research, and enterprise AI—one continuous practice of making complex systems useful."
                className="mb-7"
              />
              <p className="max-w-md border-l-2 border-[var(--accent)] pl-5 text-base leading-8 text-[var(--text-2)]">
                Research rigor matters. So do deadlines, operating costs, and
                the people maintaining the system after launch. My work sits at
                that intersection.
              </p>
              <Link
                href="/journey"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[var(--accent)]"
              >
                Explore the full journey
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper
            staggerChildren
            variants={stagger}
            className="space-y-3"
          >
            {resumeData.experience.map((role, index) => (
              <MotionWrapper
                key={`${role.company}-${role.startDate}`}
                variants={fadeUp}
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-200 hover:border-[var(--border-strong)] sm:p-7"
              >
                <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-2">
                    <Image
                      src={role.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-[var(--text)]">
                        {role.position}
                      </h3>
                      {index === 0 && (
                        <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide text-[var(--accent)]">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-semibold text-[var(--accent)]">
                      {role.company}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-2)]">
                      {role.description}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-3)]">
                      {role.startDate}—{role.endDate}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-3)]">
                      {role.location}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
