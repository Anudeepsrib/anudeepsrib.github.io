"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/ui/Container";
import GradientCard from "@/components/ui/GradientCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animation";

const companies = [
  { name: "AT&T", role: "AI Architect" },
  { name: "Capgemini", role: "Tech Lead" },
  { name: "Cognizant", role: "Engineer" },
];

const milestones = [
  { year: "2024", label: "AI Architect", place: "AT&T", active: true },
  { year: "2021", label: "M.S. Computer Science", place: "UMass Dartmouth" },
  { year: "2019", label: "Technical Lead", place: "Capgemini" },
  { year: "2015", label: "Data Science Engineer", place: "Cognizant" },
  { year: "2011", label: "B.Tech CS", place: "VIT University" },
];

export default function WhyWorkWithMe() {
  return (
    <section className="premium-section relative z-10" id="intro">
      <div className="section-divider" />
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <MotionWrapper variants={fadeUp} className="lg:col-span-7">
            <GradientCard className="h-full p-6 sm:p-8 lg:p-10">
              <h2 className="text-3xl font-bold leading-tight text-[var(--text)] [letter-spacing:0] md:text-5xl">
                Not another AI demo.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-2)]">
                I bring deep research rigor and battle-hardened production
                engineering. Models that work in notebooks don&apos;t interest
                me. I build systems that hold up under real traffic, real data,
                and real deadlines.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-[0.6fr_1fr] sm:items-end">
                <div className="rounded-lg border border-[var(--border)] bg-black/20 p-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black leading-none text-[var(--text)] [letter-spacing:0]">
                      <AnimatedCounter target={11} />
                    </span>
                    <span className="text-2xl font-semibold text-[var(--accent)]">
                      +
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-2)]">
                    years shipping production AI
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {companies.map((company) => (
                    <div
                      key={company.name}
                      className="rounded-md border border-[var(--border)] bg-white/[0.035] px-3 py-2 text-xs text-[var(--text-3)]"
                    >
                      {company.name}
                      <span className="mx-1.5 text-[var(--muted)]">/</span>
                      {company.role}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/journey"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
              >
                Full career timeline
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </GradientCard>
          </MotionWrapper>

          <MotionWrapper variants={fadeUp} className="lg:col-span-5">
            <GradientCard className="h-full p-6 sm:p-8">
              <div className="relative pl-6">
                <div className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-[var(--accent)] via-white/10 to-transparent" />
                {milestones.map((item) => (
                  <div
                    key={`${item.year}-${item.label}`}
                    className="relative pb-7 last:pb-0"
                  >
                    <span
                      className={`absolute -left-[1.62rem] top-1.5 h-2 w-2 rounded-full ${
                        item.active
                          ? "bg-[var(--accent)] shadow-[0_0_18px_rgba(125,211,252,0.9)]"
                          : "bg-[var(--text-3)]"
                      }`}
                    />
                    <span className="mb-1 block text-xs text-[var(--text-3)]">
                      {item.year}
                    </span>
                    <h4 className="text-base font-semibold text-[var(--text)]">
                      {item.label}
                    </h4>
                    <span className="mt-1 block text-sm text-[var(--text-3)]">
                      {item.place}
                    </span>
                  </div>
                ))}
              </div>
            </GradientCard>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
