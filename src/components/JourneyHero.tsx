"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JourneyHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-40">
      <div className="hero-glow absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.h1
          className="mb-4 font-display text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Path to Impact
        </motion.h1>
        <motion.p
          className="max-w-md text-[15px] text-[var(--text-2)]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          From foundational learning to leading enterprise AI - a decade of
          building production-grade systems across Fortune 500 companies.
        </motion.p>
      </div>
    </section>
  );
}
