"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import GradientCard from "@/components/ui/GradientCard";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animation";

export default function CTASection() {
  return (
    <section className="premium-section relative z-10" id="contact">
      <div className="section-divider" />
      <Container>
        <MotionWrapper variants={fadeUp}>
          <GradientCard featured className="p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[var(--text)] [letter-spacing:0] md:text-6xl">
                  Let&apos;s talk.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-2)]">
                  AI consulting, speaking, mentorship, or research
                  collaboration.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <CTAButton
                  href="https://adplist.org/mentors/anudeep-sri-bathina"
                  external
                >
                  Book a session
                </CTAButton>
                <CTAButton
                  href="mailto:anudeepSri108@gmail.com"
                  variant="secondary"
                  icon={<Mail size={15} />}
                >
                  Email
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
