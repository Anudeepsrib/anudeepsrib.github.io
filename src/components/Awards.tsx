'use client';
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const awards = [
    { title: 'RISE Award', org: 'AT&T, 2025', description: 'Innovation and impact in AI systems' },
    { title: 'Extra Mile Award', org: 'Capgemini, 2020', description: 'Exceptional contribution' },
];

export default function Awards() {
    return (
        <section className="relative py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6">
                <ScrollReveal>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 tracking-tight">
                        Awards
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {awards.map((award, i) => (
                        <ScrollReveal key={award.title} delay={i * 0.1}>
                            <div className="glass-card p-5">
                                <h3 className="text-sm font-display font-semibold text-[var(--text)] mb-0.5">
                                    {award.title}
                                </h3>
                                <p className="text-[11px] font-mono text-[var(--warm)] mb-1.5">
                                    {award.org}
                                </p>
                                <p className="text-[13px] text-[var(--text-2)]">
                                    {award.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
