'use client';
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';

const projects = [
    {
        name: 'ClinIQ',
        description:
            'Enterprise Healthcare RAG with stateful LangGraph pipeline, multimodal ingestion, department-scoped vector stores, and LangSmith observability.',
        tags: ['LangGraph', 'LangChain', 'FastAPI', 'OpenAI', 'ChromaDB'],
        link: 'https://github.com/Anudeepsrib/ClinIQ',
    },
    {
        name: 'Annapurna-AI',
        description:
            'India-first, culture-aware AI meal planner for South Indian vegetarian cooking with evidence-grounded wellness explanations.',
        tags: ['Next.js', 'FastAPI', 'Gemini', 'LiteLLM'],
        link: 'https://github.com/Anudeepsrib/Annapurna-AI',
    },
    {
        name: 'Code Migration Assistant',
        description:
            'Security-first code migration tool with AI-powered risk assessment, visual dependency planning, and compliance scanning.',
        tags: ['Python', 'NetworkX', 'AST', 'RAG'],
        link: 'https://github.com/Anudeepsrib/code-migration-assistant',
    },
    {
        name: 'Media Organizer',
        description:
            'Python toolkit for organizing mobile media (iOS & Android) with web dashboard and Gemini-powered AI features.',
        tags: ['FastAPI', 'Gemini', 'ChromaDB'],
        link: 'https://github.com/Anudeepsrib/Media-Organizer',
    },
];

const card = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Projects() {
    return (
        <section className="relative py-28 md:py-36" id="projects">
            <div className="mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tight">
                        Open source
                    </h2>
                    <p className="text-[var(--text-2)] max-w-md mb-14 text-[15px]">
                        Systems I&apos;ve built and open-sourced.
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <motion.a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={card}
                            className="glass-card p-6 flex flex-col group"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-base font-display font-semibold text-[var(--text)] group-hover:text-[var(--blue)] transition-colors">
                                    {project.name}
                                </h3>
                                <ArrowUpRight
                                    size={15}
                                    className="text-[var(--text-3)] group-hover:text-[var(--text-2)] transition-colors flex-shrink-0 mt-0.5"
                                />
                            </div>

                            <p className="text-[13px] text-[var(--text-2)] leading-relaxed mb-5 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tech-pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
