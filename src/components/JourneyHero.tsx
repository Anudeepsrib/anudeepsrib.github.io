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
            gradient: "from-blue-500 to-cyan-400",
            highlight: "B.Tech in Computer Science"
        },
        {
            id: 2,
            title: "Growth",
            period: "2015 - 2021",
            description: "Progressed from Data Science Engineer to Technical Lead. Built data pipelines, ML models, and led engineering teams across Cognizant and Capgemini.",
            icon: Briefcase,
            gradient: "from-purple-500 to-pink-400",
            highlight: "4 Organizations, 6 Years"
        },
        {
            id: 3,
            title: "Mastery",
            period: "2021 - 2024",
            description: "Advanced graduate research at UMass Dartmouth. Specialized in Computer Vision with YOLOv8 and ResNet-50. Published research contributions.",
            icon: Award,
            gradient: "from-amber-500 to-orange-400",
            highlight: "M.S. Computer Science"
        },
        {
            id: 4,
            title: "Impact",
            period: "2024 - Present",
            description: "Leading enterprise GenAI solutions at AT&T. Architecting LLM systems, RAG pipelines, and production AI at scale.",
            icon: Rocket,
            gradient: "from-emerald-500 to-teal-400",
            highlight: "Lead Data Scientist"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-warm)]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <Compass className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Career Evolution</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-exo font-bold mb-6 tracking-tight">
                        <span className="gradient-text">Path to Impact</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        From foundational learning to leading enterprise AI — a decade of building,
                        learning, and transforming ideas into production-grade solutions.
                    </motion.p>
                </motion.div>

                {/* Visual Phase Timeline */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="relative"
                >
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                    {/* Phase Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            return (
                                <motion.div
                                    key={phase.id}
                                    variants={fadeUp}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative group"
                                >
                                    {/* Phase Number Circle */}
                                    <div className="relative z-10 mb-6 flex justify-center lg:justify-start">
                                        <div className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${phase.gradient} p-[3px] group-hover:scale-105 transition-transform duration-300`}>
                                            <div className="w-full h-full rounded-full bg-[var(--bg-primary)] flex flex-col items-center justify-center">
                                                <Icon size={28} className="text-text-primary mb-1" />
                                                <span className="text-2xl font-exo font-bold text-text-primary">{String(phase.id).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="glass-card p-6 hover-lift h-full">
                                        {/* Period Badge */}
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 mb-4">
                                            <span className="text-xs font-mono text-accent">{phase.period}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-exo font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                            {phase.title}
                                        </h3>

                                        {/* Highlight */}
                                        <div className={`inline-block px-2 py-1 rounded text-xs font-mono font-medium mb-3 bg-gradient-to-r ${phase.gradient} text-white`}>
                                            {phase.highlight}
                                        </div>

                                        {/* Description */}
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>

                                    {/* Arrow Connector (Mobile/Tablet) */}
                                    {index < phases.length - 1 && (
                                        <div className="lg:hidden flex justify-center py-4">
                                            <ArrowDown className="text-accent/40" size={24} />
                                        </div>
                                    )}
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
                    className="flex flex-col items-center mt-20 pt-12 border-t border-[var(--border-subtle)]"
                >
                    <p className="text-text-muted text-sm font-mono uppercase tracking-wider mb-3">
                        Explore the details below
                    </p>
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <ArrowDown className="text-accent" size={20} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneyHero;
