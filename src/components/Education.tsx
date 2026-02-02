'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Education = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="education" className="py-16 relative">
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
                        <GraduationCap className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Academic Foundation</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl">
                        Foundational expertise in computer science, AI, machine learning, and data systems.
                    </motion.p>
                </motion.div>

                <div className="grid gap-6">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial={reduceMotion ? 'show' : 'hidden'}
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 hover-lift flex flex-col md:flex-row md:items-start gap-6"
                        >
                            <div className="flex-grow">
                                <h3 className="text-xl font-exo font-bold text-text-primary mb-2">{edu.institution}</h3>
                                <div className="text-accent text-lg font-mono font-medium mb-1">{edu.degree}</div>
                                <div className="text-text-muted mb-4 font-mono text-sm">{edu.startDate} - {edu.endDate}</div>
                                <p className="text-text-secondary leading-relaxed">{edu.description}</p>
                            </div>

                            {edu.institutionUrl && (
                                <div className="flex-shrink-0">
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary text-sm inline-flex items-center gap-2"
                                    >
                                        Visit Website
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
