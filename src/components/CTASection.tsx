"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import GradientCard from "@/components/ui/GradientCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animation";
import resumeData from "@/data/resumeData.json";

export default function CTASection() {
  return (
    <section className="premium-section relative z-10" id="contact">
      <div className="section-divider" />
      <Container>
        <MotionWrapper variants={fadeUp}>
          <GradientCard featured className="p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <span className="section-number">Contact / Plano, Texas</span>
                <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] text-[var(--text)] md:text-6xl">
                  Bring me the problem that has to work in production.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-2)]">
                  Let&apos;s talk about production AI, platform architecture,
                  mentoring, or research collaboration.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <CTAButton
                  href={`mailto:${resumeData.personalInfo.email}`}
                  icon={<Mail size={15} />}
                >
                  Start a conversation
                </CTAButton>
                <CTAButton
                  href="https://adplist.org/mentors/anudeep-sri-bathina"
                  external
                  variant="secondary"
                >
                  Book mentorship
                </CTAButton>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5">
              {[
                { label: "Experience", href: "/journey" },
                { label: "Recognitions", href: "/recognitions" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-[var(--text-3)] transition-colors hover:text-[var(--text-2)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </GradientCard>
        </MotionWrapper>
      </Container>
    </section>
  );
}
