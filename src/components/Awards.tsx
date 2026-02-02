'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Awards = () => {
    const reduceMotion = useReducedMotion();

    const awards = [
        {
            title: "RISE Award",
            organization: "Infosys Americas",
            year: "2025",
            description: "Awarded for significant innovation and impact in AI systems, demonstrating leadership and driving transformational change.",
            icon: Star
        },
        {
            title: "Extra Mile Award",
            organization: "Capgemini",
            year: "2020",
            description: "Recognized for exceptional contribution and going above and beyond in delivering excellence on critical AI and data science projects.",
            icon: Star
        },
    ];

    return (
        <section id="awards" className="py-16 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-4 hover-lift">
                        <Award className="text-[var(--accent-warm)]" size={18} />
                        <span className="text-sm font-mono text-[var(--accent-warm)]">Recognition</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold mb-4">
                        <span className="text-[var(--accent-warm)]">Awards & Recognition</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl">
                        Outstanding contributions and impact in professional roles.
                    </motion.p>
                </motion.div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial={reduceMotion ? 'show' : 'hidden'}
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card p-6 hover-lift"
                        >
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon & Year */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-lg bg-[var(--accent-warm)]/10">
                                        <award.icon className="text-[var(--accent-warm)]" size={28} />
                                    </div>
                                    <span className="text-sm font-mono text-text-muted px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                                        {award.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-exo font-bold text-text-primary mb-2 group-hover:text-[var(--accent-warm)] transition-colors">
                                    {award.title}
                                </h3>

                                {/* Organization */}
                                <div className="text-[var(--accent-warm)] font-mono font-semibold mb-4">
                                    {award.organization}
                                </div>

                                {/* Description */}
                                <p className="text-text-secondary leading-relaxed">
                                    {award.description}
                                </p>

                                {/* Accent Line */}
                                <div className="h-1 w-16 mt-6 bg-gradient-to-r from-[var(--accent-warm)] to-transparent group-hover:w-24 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
