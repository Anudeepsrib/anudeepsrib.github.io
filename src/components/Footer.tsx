"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animation";
import resumeData from "@/data/resumeData.json";

const nav = [
  { label: "Experience", href: "/#experience" },
  { label: "Selected work", href: "/#projects" },
  { label: "Mentorship", href: "/#mentoring" },
  { label: "Recognitions", href: "/recognitions" },
  { label: "Blog", href: "/blog" },
];

const connect = [
  { label: "GitHub", href: resumeData.personalInfo.github },
  { label: "LinkedIn", href: resumeData.personalInfo.linkedin },
  { label: "ADPList", href: "https://adplist.org/mentors/anudeep-sri-bathina" },
  { label: "Topmate", href: "https://topmate.io/anudeepsrib" },
  { label: "Substack", href: "https://substack.com/@anudeepai" },
  { label: "Email", href: `mailto:${resumeData.personalInfo.email}` },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <Container className="py-12 sm:py-14">
        <MotionWrapper variants={fadeUp}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_auto] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">
                {resumeData.personalInfo.name}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--text-3)]">
                AI Architect. Building production systems that hold up.
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium uppercase text-[var(--text-3)] [letter-spacing:0]">
                Pages
              </p>
              <div className="flex flex-col gap-2">
                {nav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium uppercase text-[var(--text-3)] [letter-spacing:0]">
                Connect
              </p>
              <div className="flex flex-col gap-2">
                {connect.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-sm text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>

        <div className="mt-10 flex items-center justify-between border-t border-[var(--border)] pt-6">
          <p className="text-xs text-[var(--text-3)]">&copy; 2026</p>
          <p className="text-xs text-[var(--text-3)]">
            Next.js &middot; TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}
