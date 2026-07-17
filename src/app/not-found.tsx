"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="hero-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1 className="mb-2 font-display text-[100px] font-black leading-none tracking-tighter text-[var(--text)] md:text-[160px]">
            404
          </h1>

          <p className="mb-8 text-[15px] text-[var(--text-2)]">
            This page doesn&apos;t exist.
          </p>

          <div className="flex items-center gap-3">
            <Link href="/" className="btn-primary">
              <Home size={14} />
              Home
            </Link>
            <button
              onClick={() =>
                typeof window !== "undefined" && window.history.back()
              }
              className="btn-secondary"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
