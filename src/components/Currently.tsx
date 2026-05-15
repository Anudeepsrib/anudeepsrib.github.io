'use client';

import React from 'react';
import { Activity } from 'lucide-react';
import Container from '@/components/ui/Container';
import GradientCard from '@/components/ui/GradientCard';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { fadeUp, stagger } from '@/lib/animation';

const currentExplorations = [
    'Agentic AI orchestration with LangGraph + MCP',
    'Multi-modal RAG with vision models',
    'AI safety evaluation frameworks',
    'Building ClinIQ v2 with department-scoped retrieval',
];

export default function Currently() {
    return (
        <section className="premium-section relative z-10 py-14" id="currently">
            <Container>
                <MotionWrapper variants={fadeUp}>
                    <GradientCard className="p-5 sm:p-7 md:p-8">
                        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(125,211,252,0.16)] bg-[rgba(125,211,252,0.08)] text-[var(--accent)]">
                                    <Activity size={18} />
                                </div>
                                <h2 className="text-xl font-semibold text-[var(--text)]">
                                    Currently exploring
                                </h2>
                            </div>
                            <p className="text-xs text-[var(--text-3)]">
                                Updated quarterly • Last updated: Q2 2025
                            </p>
                        </div>

                        <MotionWrapper
                            staggerChildren
                            variants={stagger}
                            className="grid gap-3 md:grid-cols-2"
                        >
                            {currentExplorations.map((exploration) => (
                                <div
                                    key={exploration}
                                    className="rounded-lg border border-[var(--border)] bg-black/15 px-4 py-3 text-sm leading-6 text-[var(--text-2)]"
                                >
                                    <span className="mr-2 text-[var(--accent)]">→</span>
                                    {exploration}
                                </div>
                            ))}
                        </MotionWrapper>
                    </GradientCard>
                </MotionWrapper>
            </Container>
        </section>
    );
}
