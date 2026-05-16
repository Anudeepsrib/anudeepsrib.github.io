"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { cn } from "@/lib/utils";

const links = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/journey" },
  { label: "Writing", href: "/blog" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Speaking", href: "/recognitions" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <motion.header
        className="pointer-events-none fixed left-0 right-0 top-3 z-50 px-3 sm:top-4"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={cn(
            "pointer-events-auto mx-auto flex h-14 max-w-6xl items-center justify-between rounded-lg border px-3.5 transition-all duration-200 sm:px-4",
            scrolled
              ? "border-white/10 bg-[rgba(7,9,15,0.82)] shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              : "border-white/[0.07] bg-[rgba(7,9,15,0.42)] backdrop-blur-md",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md outline-none transition-opacity hover:opacity-80"
          >
            <Image
              src="/assets/logo.png"
              alt="Anudeep Sri Bathina"
              width={28}
              height={28}
              className="h-7 w-7 rounded-md"
            />
            <span className="text-sm font-semibold text-[var(--text)]">
              anudeep
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-[13px] font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/[0.055] text-[var(--text)]"
                    : "text-[var(--text-3)] hover:bg-white/[0.035] hover:text-[var(--text-2)]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="mx-1 h-5 w-px bg-white/10" />
            <a
              href="https://github.com/anudeepsrib"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-[var(--text-3)] transition-colors hover:bg-white/[0.035] hover:text-[var(--text)]"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/anudeepsri/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-[var(--text-3)] transition-colors hover:bg-white/[0.035] hover:text-[var(--text)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>
          </div>

          <button
            className="rounded-md p-2 text-[var(--text-2)] transition-colors hover:bg-white/[0.045] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close" : "Menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              className="pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-[#07090f] shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col p-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm transition-colors",
                      pathname === link.href
                        ? "bg-white/[0.055] text-[var(--text)]"
                        : "text-[var(--text-3)] hover:bg-white/[0.035] hover:text-[var(--text-2)]",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-2">
                  <a
                    href="https://github.com/anudeepsrib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm text-[var(--text-3)] transition-colors hover:bg-white/[0.035] hover:text-[var(--text)]"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anudeepsri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm text-[var(--text-3)] transition-colors hover:bg-white/[0.035] hover:text-[var(--text)]"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
