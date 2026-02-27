'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Briefcase, GraduationCap, Award, Rocket, ArrowDown } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const JourneyHero = () => {
    const reduceMotion = useReducedMotion();

    const phases = [
        {
            id: 1,
            title: "Foundation",
            period: "2011 - 2015",
            description: "Built strong CS fundamentals at VIT University. Explored robotics, algorithms, and software engineering principles.",
            icon: GraduationCap,
            highlight: "B.Tech in Computer Science"
        },
        {
            id: 2,
            title: "Growth",
            period: "2015 - 2021",
            description: "Progressed from Data Science Engineer to Technical Lead. Built data pipelines, ML models, and led engineering teams across Cognizant and Capgemini.",
            icon: Briefcase,
            highlight: "4 Organizations, 6 Years"
        },
        {
            id: 3,
            title: "Mastery",
            period: "2021 - 2024",
            description: "Advanced graduate research at UMass Dartmouth. Specialized in Computer Vision with YOLOv8 and ResNet-50. Published research contributions.",
            icon: Award,
            highlight: "M.S. Computer Science"
        },
        {
            id: 4,
            title: "Impact",
            period: "2024 - Present",
            description: "Leading enterprise GenAI solutions at AT&T. Architecting LLM systems, RAG pipelines, and production AI at scale.",
            icon: Rocket,
            highlight: "AI Architect"
        }
    ];

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[var(--accent-primary)]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="text-center mb-10"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
                        <Compass className="text-[var(--accent-primary)]" size={18} />
                        <span className="text-sm font-mono text-[var(--accent-primary)]">Career Evolution</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-4 tracking-tight text-[var(--text-primary)]">
                        Path to Impact
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                        From foundational learning to leading enterprise AI, a decade of building,
                        learning, and transforming ideas into production-grade solutions.
                    </motion.p>
                </motion.div>

                {/* Phase Cards */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            return (
                                <motion.div
                                    key={phase.id}
                                    variants={fadeUp}
                                    transition={{ delay: index * 0.12 }}
                                    className="group"
                                >
                                    <div className="glass-card p-4 hover-lift h-full flex flex-col">
                                        {/* Period */}
                                        <span className="text-xs font-mono text-[var(--accent-primary)] mb-2">{phase.period}</span>

                                        {/* Title with Icon */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon size={18} className="text-[var(--accent-primary)] flex-shrink-0" />
                                            <h3 className="text-lg font-serif font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                                {phase.title}
                                            </h3>
                                        </div>

                                        {/* Highlight */}
                                        <span className="inline-block w-fit px-2 py-0.5 rounded text-xs font-mono bg-[var(--accent-primary)]/10 text-[var(--accent-secondary)] mb-2">
                                            {phase.highlight}
                                        </span>

                                        {/* Description */}
                                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={fadeUp}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="flex flex-col items-center mt-10 pt-6 border-t border-[var(--border-subtle)]"
                >
                    <p className="text-[var(--text-tertiary)] text-sm font-mono uppercase tracking-wider mb-2">
                        Explore the details below
                    </p>
                    <div className="animate-bounce">
                        <ArrowDown className="text-[var(--accent-primary)]" size={18} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneyHero;
