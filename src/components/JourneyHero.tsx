'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Zap } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const JourneyHero = () => {
    const reduceMotion = useReducedMotion();

    const milestones = [
        { label: "Years in Tech", value: "9+" },
        { label: "Organizations", value: "4+" },
        { label: "Awards", value: "2" },
        { label: "Innovation Focus", value: "AI & ML" }
    ];

    return (
        <section className="relative py-20 pb-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-4 hover-lift">
                        <Compass className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Career Path</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-exo font-bold text-text-primary mb-4 tracking-tight">
                        <span className="gradient-text">Path to Impact</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-text-secondary max-w-4xl leading-relaxed">
                        Architecting production-grade AI solutions across innovation, leadership, and transformational impact.
                    </motion.p>
                </motion.div>

                {/* Milestone Stats */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
                >
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="glass-card p-5 hover-lift"
                        >
                            <div className="text-3xl md:text-4xl font-exo font-bold gradient-text mb-2">
                                {milestone.value}
                            </div>
                            <p className="text-text-muted text-sm font-mono uppercase tracking-wide">{milestone.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Journey Phases */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="mt-20 pt-16 border-t border-[var(--border-subtle)]"
                >
                    <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-8">
                        <span className="flex items-center gap-2 mb-4">
                            <Zap className="text-accent" size={20} />
                            <span className="font-exo font-bold text-text-primary">Key Phases</span>
                        </span>
                        Below is the professional timeline, recognized awards, and academic foundation shaping my expertise in AI.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneyHero;
