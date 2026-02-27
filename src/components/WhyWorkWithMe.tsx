'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animation';

const WhyWorkWithMe = () => {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    {/* Section Number */}
                    <div className="section-number">01</div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-[var(--text-primary)] mb-10 leading-[1.15]">
                        More Than Just Code
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-[var(--text-secondary)] leading-[1.8]">
                        <p>
                            Unlike generalist developers or pure academics, I bring a hybrid expertise:{' '}
                            <span className="text-[var(--text-primary)] font-medium">deep research rigor</span>
                            {' '}combined with{' '}
                            <span className="text-[var(--accent-primary)] font-medium">battle-hardened production engineering</span>.
                        </p>
                        <p>
                            I don&apos;t just build models that work in notebooks; I engineer resilient systems that survive real-world scale.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyWorkWithMe;
