'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Timeline = () => {
    const reduceMotion = useReducedMotion();

    // Company brand colors for visual distinction
    const companyColors: { [key: string]: string } = {
        'AT&T': 'from-blue-500 to-cyan-400',
        'Capgemini': 'from-blue-600 to-indigo-500',
        'GainInsights Solutions': 'from-emerald-500 to-teal-400',
        'Cognizant': 'from-purple-500 to-pink-400'
    };

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-warm)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <Briefcase className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Career Journey</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold mb-4">
                        <span className="gradient-text">Professional Experience</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl">
                        Building production-grade AI systems across Fortune 500 companies and innovative startups.
                    </motion.p>
                </motion.div>

                {/* Experience Cards */}
                <div className="grid gap-8">
                    {resumeData.experience.map((job, index) => {
                        const gradientClass = companyColors[job.company] || 'from-accent to-accent-warm';
                        const isCurrentRole = job.endDate === 'Present';

                        return (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial={reduceMotion ? 'show' : 'hidden'}
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className={`glass-card p-8 hover-lift transition-all ${isCurrentRole ? 'border-accent/30' : ''}`}>
                                    {/* Current Role Badge */}
                                    {isCurrentRole && (
                                        <div className="absolute -top-3 right-8 px-4 py-1 bg-accent text-[var(--bg-primary)] text-xs font-mono font-bold rounded-full">
                                            Current Role
                                        </div>
                                    )}

                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        {/* Left: Company & Timeline */}
                                        <div className="lg:w-1/3">
                                            {/* Company Logo Placeholder with Gradient */}
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 shadow-lg`}>
                                                <span className="text-white font-exo font-bold text-2xl">
                                                    {job.company.charAt(0)}
                                                </span>
                                            </div>

                                            {/* Company Name */}
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xl font-exo font-bold text-text-primary hover:text-accent transition-colors group/link"
                                            >
                                                {job.company}
                                                <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                            </a>

                                            {/* Location */}
                                            <div className="flex items-center gap-2 text-text-muted text-sm mt-2">
                                                <MapPin size={14} />
                                                <span>{job.location}</span>
                                            </div>

                                            {/* Duration */}
                                            <div className="mt-3 px-3 py-1.5 inline-flex items-center gap-2 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20">
                                                <span className="text-accent font-mono text-sm font-medium">
                                                    {job.startDate} — {job.endDate}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right: Role & Description */}
                                        <div className="lg:w-2/3 lg:pl-8 lg:border-l border-[var(--border-subtle)]">
                                            {/* Position */}
                                            <h3 className="text-2xl font-exo font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                                                {job.position}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-text-secondary leading-relaxed mb-6">
                                                {job.description}
                                            </p>

                                            {/* View More Link */}
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm font-mono text-accent hover:gap-2 transition-all"
                                            >
                                                Learn more about {job.company}
                                                <ChevronRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector Line (except last item) */}
                                {index < resumeData.experience.length - 1 && (
                                    <div className="hidden lg:block absolute left-[2rem] top-full h-8 w-px bg-gradient-to-b from-accent/50 to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
