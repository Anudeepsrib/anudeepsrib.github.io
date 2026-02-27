'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import resumeData from '@/data/resumeData.json';

const ExperiencePreview = () => {
    return (
        <section className="py-16 relative">
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10">
                                <Briefcase className="text-[var(--accent-primary)]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-medium text-[var(--text-primary)]">11 Years. Zero Demo-Only Models.</h3>
                                <p className="text-sm text-[var(--text-tertiary)] font-mono">Everything ships to production</p>
                            </div>
                        </div>

                        {/* Company Logos/Names */}
                        <div className="flex flex-wrap items-center gap-4">
                            {[
                                { company: 'AT&T', role: 'Gen AI' },
                                { company: 'Capgemini', role: 'Tech Lead' },
                                { company: 'Gain Insights', role: 'ML Engineer' },
                            ].map((exp, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
                                >
                                    <div className="text-sm font-medium text-[var(--text-primary)]">{exp.company}</div>
                                    <div className="text-xs text-[var(--text-tertiary)] font-mono">{exp.role}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/journey"
                            className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-mono text-sm hover:gap-3 transition-all group"
                        >
                            <span>Full Journey</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperiencePreview;
