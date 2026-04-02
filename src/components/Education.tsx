'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const education = [
    {
        institution: 'University of Massachusetts Dartmouth',
        degree: 'M.S. Computer Science',
        period: '2021 - 2024',
        description: 'Computer vision research (YOLOv8, ResNet-50). Published thesis and co-authored CRC Press publication.',
        url: 'https://www.umassd.edu',
    },
    {
        institution: 'VIT University',
        degree: 'B.Tech Computer Science',
        period: '2011 - 2015',
        description: 'Foundation in CS&E. Robotics projects and technical leadership.',
        url: 'https://vit.ac.in',
    },
];

export default function Education() {
    return (
        <section className="relative py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6">
                <ScrollReveal>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 tracking-tight">
                        Education
                    </h2>
                </ScrollReveal>

                <div className="flex flex-col gap-1">
                    {education.map((edu, i) => (
                        <ScrollReveal key={edu.institution} delay={i * 0.1}>
                            <a
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-between items-start gap-4 py-5 border-b border-[var(--border)] group"
                            >
                                <div>
                                    <h3 className="text-[15px] font-display font-semibold text-[var(--text)] group-hover:text-[var(--blue)] transition-colors mb-0.5">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-sm text-[var(--warm)] mb-0.5">{edu.degree}</p>
                                    <p className="text-[11px] font-mono text-[var(--text-3)] mb-2">{edu.period}</p>
                                    <p className="text-[13px] text-[var(--text-2)] leading-relaxed">{edu.description}</p>
                                </div>
                                <ArrowUpRight
                                    size={14}
                                    className="text-[var(--text-3)] group-hover:text-[var(--text-2)] transition-colors flex-shrink-0 mt-1"
                                />
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
