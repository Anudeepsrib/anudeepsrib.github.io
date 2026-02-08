'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import resumeData from '@/data/resumeData.json';
import { Briefcase, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Timeline = () => {
    const reduceMotion = useReducedMotion();
    const [imgErrors, setImgErrors] = React.useState<{ [key: string]: boolean }>({});

    // Company brand colors for visual distinction - Mapped to premium gradients
    const companyColors: { [key: string]: string } = {
        'AT&T': 'from-blue-600/20 to-cyan-500/20',
        'Capgemini': 'from-indigo-600/20 to-purple-500/20',
        'GainInsights Solutions': 'from-emerald-600/20 to-teal-500/20',
        'Cognizant': 'from-blue-800/20 to-indigo-700/20'
    };

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-warm)]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift border-accent/20">
                        <Briefcase className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent tracking-wide">Career Journey</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold mb-4">
                        <span className="gradient-accent-text">Professional Experience</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl">
                        Building production-grade AI systems across Fortune 500 companies and innovative startups.
                    </motion.p>
                </motion.div>

                {/* Experience Cards */}
                <div className="grid gap-8">
                    {resumeData.experience.map((job, index) => {
                        const gradientClass = companyColors[job.company] || 'from-accent/20 to-accent-warm/20';
                        const isCurrentRole = job.endDate === 'Present';
                        const hasLogo = (job as any).logo && !imgErrors[job.company];

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
                                <div className={`glass-card p-8 hover-lift transition-all duration-500 border ${isCurrentRole ? 'border-accent/40 shadow-glow !overflow-visible' : 'border-white/5'}`}>
                                    {/* Current Role Badge */}
                                    {isCurrentRole && (
                                        <div className="absolute -top-3 right-8 px-4 py-1 bg-gradient-to-r from-accent to-accent-secondary text-[var(--bg-primary)] text-xs font-mono font-bold rounded-full shadow-lg z-20">
                                            Current Role
                                        </div>
                                    )}

                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        {/* Left: Company & Timeline */}
                                        <div className="lg:w-1/3">
                                            {/* Company Logo */}
                                            <div className={`w-16 h-16 rounded-xl bg-white/10 p-2 flex items-center justify-center mb-4 shadow-inner ring-1 ring-white/10 ${gradientClass}`}>
                                                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white flex items-center justify-center">
                                                    {hasLogo ? (
                                                        <Image
                                                            src={(job as any).logo}
                                                            alt={job.company}
                                                            width={64}
                                                            height={64}
                                                            className="object-contain p-1"
                                                            onError={() => setImgErrors(prev => ({ ...prev, [job.company]: true }))}
                                                        />
                                                    ) : (
                                                        <span className="text-black font-exo font-bold text-2xl">
                                                            {job.company.charAt(0)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Company Name */}
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xl font-exo font-bold text-text-primary hover:text-accent transition-colors group/link"
                                            >
                                                {job.company}
                                                <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-accent" />
                                            </a>

                                            {/* Location */}
                                            <div className="flex items-center gap-2 text-text-muted text-sm mt-2">
                                                <MapPin size={14} className="text-accent/70" />
                                                <span>{job.location}</span>
                                            </div>

                                            {/* Duration */}
                                            <div className={`mt-4 px-3 py-1.5 inline-flex items-center gap-2 rounded-lg border ${isCurrentRole ? 'bg-accent/10 border-accent/30' : 'bg-white/5 border-white/10'}`}>
                                                <span className={`font-mono text-sm font-medium ${isCurrentRole ? 'text-accent' : 'text-text-secondary'}`}>
                                                    {job.startDate} — {job.endDate}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right: Role & Description */}
                                        <div className="lg:w-2/3 lg:pl-10 lg:border-l border-white/5 relative">
                                            <div className="hidden lg:block absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Position */}
                                            <h3 className="text-2xl font-exo font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                                {job.position}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-text-secondary leading-relaxed mb-6 font-light">
                                                {job.description}
                                            </p>

                                            {/* View More Link */}
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-mono text-accent/80 hover:text-accent transition-all group/link"
                                            >
                                                <span className="border-b border-transparent group-hover/link:border-accent">Learn more about {job.company}</span>
                                                <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector Line (except last item) */}
                                {index < resumeData.experience.length - 1 && (
                                    <div className="hidden lg:block absolute left-[2rem] top-full h-8 w-px bg-gradient-to-b from-white/10 to-transparent" />
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
