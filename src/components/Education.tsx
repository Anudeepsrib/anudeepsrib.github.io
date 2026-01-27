'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { GraduationCap } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Education = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="education" className="py-16 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                        <GraduationCap className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-300">Academic Foundation</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-syne text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                            Education
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl font-light">
                        Foundational expertise in computer science, AI, machine learning, and data systems.
                    </motion.p>
                </motion.div>

                <div className="grid gap-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial={reduceMotion ? 'show' : 'hidden'}
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-charcoal-800/50 border border-white/10 rounded-none p-8 hover:border-cyan-400/50 hover-lift transition-all flex flex-col md:flex-row md:items-start gap-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30" />
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2 font-syne">{edu.institution}</h3>
                                <div className="text-cyan-300 text-lg font-mono font-medium mb-1">{edu.degree}</div>
                                <div className="text-gray-500 mb-4 font-mono text-sm">{edu.startDate} - {edu.endDate}</div>
                                <p className="text-gray-400 leading-relaxed font-light">{edu.description}</p>
                            </div>

                            {edu.institutionUrl && (
                                <div className="flex-shrink-0">
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded-none hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-200 transition-all text-sm font-mono font-medium uppercase tracking-wide"
                                    >
                                        Visit Website
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
