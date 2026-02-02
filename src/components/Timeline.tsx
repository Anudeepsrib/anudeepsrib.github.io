'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Timeline = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="experience" className="py-16 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-4 hover-lift">
                        <Briefcase className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Experience</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold mb-4">
                        <span className="gradient-text">Experience</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl">
                        Building production-grade AI systems across leading organizations.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-transparent md:-translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {resumeData.experience.map((job, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-accent md:-translate-x-1/2 z-10 shadow-[0_0_10px_var(--accent-primary)]" />

                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                                    }`}>
                                    <div className="text-accent font-mono text-sm mb-2">{job.startDate} - {job.endDate}</div>
                                    <h3 className="text-2xl font-exo font-bold text-text-primary mb-1">{job.position}</h3>
                                    <div className="mb-4">
                                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-warm)] hover:opacity-80 transition-opacity font-bold tracking-wide">
                                            {job.company}
                                        </a>
                                        <span className="text-text-muted mx-2">•</span>
                                        <span className="text-text-secondary">{job.location}</span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed text-sm md:text-base glass-card p-5 border-l-2 border-accent/30 hover:border-accent transition-colors">
                                        {job.description}
                                    </p>
                                </div>

                                {/* Empty half for desktop layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
