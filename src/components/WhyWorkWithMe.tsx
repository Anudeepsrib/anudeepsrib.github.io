'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const companies = [
    { name: 'AT&T', role: 'AI Architect' },
    { name: 'Capgemini', role: 'Tech Lead' },
    { name: 'Cognizant', role: 'Engineer' },
];

export default function WhyWorkWithMe() {
    return (
        <section className="relative py-28 md:py-36" id="intro">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
                                Not another AI demo.
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.08}>
                            <p className="text-[var(--text-2)] text-base leading-relaxed mb-8 max-w-lg">
                                I bring deep research rigor and battle-hardened production engineering.
                                Models that work in notebooks don&apos;t interest me. I build systems
                                that hold up under real traffic, real data, and real deadlines.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.14}>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-display font-black accent">
                                    <AnimatedCounter target={11} />
                                </span>
                                <span className="text-[var(--text-2)] text-[15px]">
                                    years shipping production AI
                                </span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.18}>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {companies.map((c) => (
                                    <div
                                        key={c.name}
                                        className="text-xs text-[var(--text-3)] font-mono"
                                    >
                                        {c.name}
                                        <span className="mx-1.5 text-[var(--border)]">/</span>
                                        {c.role}
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.22}>
                            <Link
                                href="/journey"
                                className="inline-flex items-center gap-2 text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors group"
                            >
                                Full career timeline
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>

                    {/* Right — vertical career strip */}
                    <div className="lg:col-span-5">
                        <ScrollReveal direction="right">
                            <div className="relative pl-6 border-l border-[var(--border)]">
                                {[
                                    { year: '2024', label: 'AI Architect', place: 'AT&T', active: true },
                                    { year: '2021', label: 'M.S. Computer Science', place: 'UMass Dartmouth' },
                                    { year: '2019', label: 'Technical Lead', place: 'Capgemini' },
                                    { year: '2015', label: 'Data Science Engineer', place: 'Cognizant' },
                                    { year: '2011', label: 'B.Tech CS', place: 'VIT University' },
                                ].map((item, i) => (
                                    <div key={i} className="relative mb-7 last:mb-0">
                                        <div
                                            className={`absolute -left-[calc(0.75rem+3px)] top-1.5 w-1.5 h-1.5 rounded-full ${
                                                item.active
                                                    ? 'bg-[var(--blue)]'
                                                    : 'bg-[var(--text-3)]'
                                            }`}
                                        />
                                        <span className="text-[12px] font-mono text-[var(--text-3)] block mb-0.5">
                                            {item.year}
                                        </span>
                                        <h4 className="text-sm font-display font-medium text-[var(--text)]">
                                            {item.label}
                                        </h4>
                                        <span className="text-xs text-[var(--text-3)]">
                                            {item.place}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
