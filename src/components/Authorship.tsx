'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const publications = [
    {
        title: 'Transfer Learning for Groundfish Recognition',
        venue: 'UMass Dartmouth, 2024',
        description:
            'Cross-database recognition using YOLOv8 and ResNet50, achieving 94.10% mAP for sustainable fisheries management.',
        link: 'https://doi.org/10.62791/20352',
    },
    {
        title: 'Blueprint of IoT for Smart Cities',
        venue: 'CRC Press / Taylor & Francis, 2024',
        description:
            'Co-authored handbook chapter on IoT blueprinting and management challenges for smart city development.',
        link: 'https://doi.org/10.1201/9781003225317',
    },
];

export default function Authorship() {
    return (
        <section className="relative py-28 md:py-36" id="research">
            <div className="mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tight">
                        Research
                    </h2>
                    <p className="text-[var(--text-2)] max-w-md mb-14 text-[15px]">
                        Peer-reviewed publications in computer vision and IoT.
                    </p>
                </ScrollReveal>

                <div className="flex flex-col gap-4 max-w-2xl">
                    {publications.map((pub, i) => (
                        <ScrollReveal key={pub.title} delay={i * 0.1}>
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex justify-between items-start gap-4 py-5 border-b border-[var(--border)] last:border-0 hover:border-[rgba(255,255,255,0.12)] transition-colors"
                            >
                                <div>
                                    <h3 className="text-[15px] font-display font-semibold text-[var(--text)] mb-1 group-hover:text-[var(--blue)] transition-colors">
                                        {pub.title}
                                    </h3>
                                    <p className="text-[11px] font-mono text-[var(--warm)] mb-2">
                                        {pub.venue}
                                    </p>
                                    <p className="text-[13px] text-[var(--text-2)] leading-relaxed">
                                        {pub.description}
                                    </p>
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
