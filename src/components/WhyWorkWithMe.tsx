'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animation';
import { Sparkles } from 'lucide-react';

const WhyWorkWithMe = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent-primary)]/5 rounded-[100%] blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-mono text-accent mb-8">
                        <Sparkles size={16} />
                        <span>Why Work With Me</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-exo font-bold text-text-primary mb-8">
                        More Than Just Code
                    </h2>

                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                        Unlike generalist developers or pure academics, I bring a hybrid expertise:{' '}
                        <span className="text-accent font-medium">deep research rigor</span>
                        {' '}combined with{' '}
                        <span className="text-[var(--accent-warm)] font-medium">battle-hardened production engineering</span>.
                        I don&apos;t just build models that work in notebooks; I engineer resilient systems that survive real-world scale.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyWorkWithMe;
