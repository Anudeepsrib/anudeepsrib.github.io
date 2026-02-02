'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Authorship = () => {
    return (
        <section id="authorship" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <BookOpen className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Publications</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
                        <span className="gradient-text">Research & Writing</span>
                    </h2>

                    <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
                        Contributing to the global body of knowledge in AI and technology through peer-reviewed publications.
                    </p>

                    <p className="text-sm text-text-muted font-mono">
                        Published by CRC Press / Taylor & Francis
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.publications.map((pub, index) => (
                        <motion.a
                            key={index}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card p-6 hover-lift cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-accent group-hover:bg-accent group-hover:text-[var(--bg-primary)] transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <ExternalLink className="text-text-muted group-hover:text-accent transition-colors" size={18} />
                            </div>

                            <h3 className="text-lg font-exo font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                {pub.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-accent mb-4 font-mono">
                                <span>{pub.publisher}</span>
                                <span>•</span>
                                <span>{pub.year}</span>
                            </div>

                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                {pub.description}
                            </p>

                            <div className="flex items-center gap-2 text-accent text-sm font-mono group-hover:gap-3 transition-all">
                                <span>Read Publication</span>
                                <ArrowRight size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Authorship;
