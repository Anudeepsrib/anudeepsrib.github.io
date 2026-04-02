'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Activity } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

const currentExplorations = [
    'Agentic AI orchestration with LangGraph + MCP',
    'Multi-modal RAG with vision models',
    'AI safety evaluation frameworks',
    'Building ClinIQ v2 with department-scoped retrieval',
];

export default function Currently() {
    return (
        <section className="relative py-16" id="currently">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <Activity size={20} className="text-[var(--accent-1)]" />
                                <motion.div
                                    className="absolute inset-0 bg-[var(--accent-1)] rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <h2 className="text-lg font-semibold font-cabinet-grotesk text-[var(--text)]">
                                Currently exploring
                            </h2>
                        </div>
                        
                        <motion.ul variants={container} className="space-y-3">
                            {currentExplorations.map((exploration, index) => (
                                <motion.li
                                    key={exploration}
                                    variants={item}
                                    className="flex items-start gap-3 text-[var(--text-2)]"
                                >
                                    <span className="text-[var(--accent-1)] font-mono text-sm mt-0.5">
                                        →
                                    </span>
                                    <span className="text-sm leading-relaxed">
                                        {exploration}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                        
                        <motion.div
                            variants={item}
                            className="mt-6 pt-4 border-t border-[var(--border)]"
                        >
                            <p className="text-xs text-[var(--text-3)] font-mono">
                                Updated quarterly • Last updated: Q2 2025
                            </p>
                        </motion.div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
