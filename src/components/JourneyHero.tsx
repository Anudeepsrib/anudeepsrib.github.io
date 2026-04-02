'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function JourneyHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative py-32 md:py-40 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] hero-glow" />
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    Career timeline
                </motion.h1>
                <motion.p
                    className="text-[15px] text-[var(--text-2)] max-w-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    11+ years across 4 organizations, from research to enterprise-scale AI.
                </motion.p>
            </div>
        </section>
    );
}
