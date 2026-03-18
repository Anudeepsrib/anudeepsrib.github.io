'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Network } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="py-24 relative bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20">
                            <BookOpen className="text-accent" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-serif text-text-primary">Research & Publications</h2>
                    </div>
                    <p className="text-text-secondary max-w-2xl font-light leading-relaxed">
                        Exploring the frontiers of Computer Vision and Artificial Intelligence through rigorous experimentation and academic inquiry.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 hover-lift group"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--accent-warm)]/10 border border-[var(--accent-warm)]/20 mb-6">
                                <span className="text-sm font-mono font-medium text-[var(--accent-secondary)] uppercase tracking-wide">Master&apos;s Thesis</span>
                            </div>

                            <h3 className="text-3xl font-bold font-serif text-text-primary mb-4 group-hover:text-accent transition-colors">
                                Transfer learning for cross-database groundfish recognition: a thesis in Computer Science
                            </h3>

                            <div className="text-sm font-mono text-accent mb-2">
                                Anudeepsri Bathina
                            </div>

                            <div className="text-xs text-text-muted font-light mb-6 space-y-1">
                                <p>Advisor: Ming Shao (UMass Dartmouth)</p>
                                <p>Committee: Yi Liu (UNC Wilmington), Yuchou Chang (UMass Dartmouth)</p>
                            </div>

                            <p className="text-text-secondary mb-6 leading-relaxed font-light">
                                A comprehensive study on generalizing object detection models from controlled conveyor belt environments to complex, unstructured underwater habitats. This research addresses key challenges in marine biology automation and reliable species identification.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1 rounded-lg bg-[var(--accent-primary)]/10 text-sm font-mono text-accent border border-[var(--accent-primary)]/20">Computer Vision</span>
                                <span className="px-3 py-1 rounded-lg bg-[var(--accent-primary)]/10 text-sm font-mono text-accent border border-[var(--accent-primary)]/20">Transfer Learning</span>
                                <span className="px-3 py-1 rounded-lg bg-[var(--accent-primary)]/10 text-sm font-mono text-accent border border-[var(--accent-primary)]/20">Marine AI</span>
                            </div>

                            <a
                                href="https://umassd.primo.exlibrisgroup.com/permalink/01MA_DM_INST/kde4of/alma9914424898201301"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Read Thesis
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Neural Network Visualization Placeholder */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:shadow-glow transition-all">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(200,149,108,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,149,108,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                            <div className="relative z-10 text-center">
                                <Network className="w-24 h-24 text-accent mx-auto mb-4 animate-pulse" />
                                <div className="text-accent font-mono text-sm">Neural Network Config</div>
                                <div className="text-xs text-text-muted mt-2 font-mono uppercase tracking-wider">YOLOv8 Architecture Visualization</div>
                            </div>

                            {/* Animated nodes effect */}
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[var(--accent-warm)] animate-ping" />
                            <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-accent animate-ping delay-700" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Research;
