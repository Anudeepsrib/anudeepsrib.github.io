'use client';
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, X, Box, Zap, Shield, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';

const projects = [
    {
        name: 'ClinIQ',
        description: 'Enterprise Healthcare RAG with stateful LangGraph pipeline, multimodal ingestion, department-scoped vector stores, and LangSmith observability.',
        tags: ['LangGraph', 'LangChain', 'FastAPI', 'OpenAI', 'ChromaDB', 'Presidio'],
        link: 'https://github.com/Anudeepsrib/ClinIQ',
        hero: true,
        metrics: '4 LangGraph nodes · 3 vector stores · PHI-safe · 97.2% accuracy',
        problem: 'Healthcare providers needed instant access to clinical guidelines across departments while maintaining patient privacy and ensuring traceable citations.',
        architecture: [
            'Multimodal ingestion pipeline (PDF, images, voice notes)',
            'Department-scoped ChromaDB vector stores',
            'LangGraph stateful conversation pipeline',
            'Presidio PII redaction at ingestion and inference',
            'LangSmith observability and evaluation'
        ],
        decisions: [
            'Chose ChromaDB over Pinecone for on-premise deployment and HIPAA compliance',
            'Implemented department-scoped isolation to prevent data bleed',
            'Added LangGraph for complex multi-turn conversations vs simple RAG',
            'Used Presidio for PHI detection instead of custom regex patterns'
        ],
        results: 'Reduced clinical query time from 15 minutes to 45 seconds. Achieved 97.2% accuracy on guideline retrieval. Deployed across 3 hospital departments serving 500+ clinicians.',
        stars: 24
    },
    {
        name: 'Annapurna-AI',
        description: 'India-first, culture-aware AI meal planner for South Indian vegetarian cooking with evidence-grounded wellness explanations.',
        tags: ['Next.js', 'FastAPI', 'Gemini', 'LiteLLM', 'SQLModel'],
        link: 'https://github.com/Anudeepsrib/Annapurna-AI',
        metrics: '2K+ recipes · 8 cuisines · Gemini multimodal · 94% user satisfaction',
        problem: 'South Indian vegetarian families struggled to find culturally relevant meal plans that accommodated dietary restrictions and health conditions.',
        architecture: [
            'Next.js frontend with Tailwind CSS',
            'FastAPI backend with SQLModel ORM',
            'Gemini multimodal for recipe recognition',
            'LiteLLM for model routing and cost optimization',
            'PostgreSQL for recipe and user data'
        ],
        decisions: [
            'Used Gemini over GPT-4 for better cultural recipe understanding',
            'Implemented LiteLLM for cost optimization across providers',
            'Chose SQLModel over SQLAlchemy for better type safety',
            'Built custom recipe parser instead of external APIs'
        ],
        results: '2,000+ recipes indexed across 8 South Indian cuisines. 94% user satisfaction rate. Featured in 3 Indian tech publications.',
        stars: 18
    },
    {
        name: 'Code Migration Assistant',
        description: 'Security-first code migration tool with AI-powered risk assessment, visual dependency planning, and compliance scanning.',
        tags: ['Python', 'NetworkX', 'AST', 'RAG', 'OpenAI'],
        link: 'https://github.com/Anudeepsrib/code-migration-assistant',
        metrics: '15K+ LOC analyzed · 92% risk detection · Python/Java support',
        problem: 'Enterprises needed to migrate legacy codebases to cloud platforms while identifying security risks and dependency conflicts.',
        architecture: [
            'AST parsing for code structure analysis',
            'NetworkX for dependency graph visualization',
            'RAG system for migration pattern matching',
            'OpenAI API for risk assessment and recommendations',
            'Compliance rule engine for industry standards'
        ],
        decisions: [
            'Used AST over regex for accurate code parsing',
            'NetworkX for complex dependency visualization',
            'RAG for contextual migration patterns vs hardcoded rules',
            'OpenAI for nuanced risk assessment over traditional static analysis'
        ],
        results: 'Analyzed 15,000+ lines of code with 92% risk detection accuracy. Reduced migration planning time by 60%. Adopted by 2 enterprise teams.',
        stars: 12
    },
    {
        name: 'Media Organizer',
        description: 'Python toolkit for organizing mobile media files with web dashboard and Gemini-powered AI features.',
        tags: ['FastAPI', 'Gemini', 'ChromaDB', 'Pydantic'],
        link: 'https://github.com/Anudeepsrib/Media-Organizer',
        metrics: '50K+ photos organized · 99% accuracy · Web dashboard',
        problem: 'Users struggled with disorganized photo libraries across devices with no intelligent way to categorize and search memories.',
        architecture: [
            'FastAPI backend with async file processing',
            'Gemini Vision for image content analysis',
            'ChromaDB for semantic search and metadata',
            'Pydantic for data validation and settings',
            'React dashboard with real-time progress'
        ],
        decisions: [
            'Gemini Vision over CLIP for better content understanding',
            'ChromaDB for semantic search vs traditional metadata',
            'FastAPI for async processing of large media files',
            'Pydantic for robust data validation'
        ],
        results: 'Organized 50,000+ photos with 99% categorization accuracy. Reduced manual organization time by 85%. Built-in web dashboard for easy management.',
        stars: 8
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

interface ProjectDetailModalProps {
    project: typeof projects[0];
    onClose: () => void;
}

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-bold font-cabinet-grotesk mb-2">{project.name}</h3>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-sm text-[var(--accent-1)] font-mono">{project.metrics}</span>
                            <span className="text-sm text-[var(--text-3)]">★ {project.stars}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tech-pill">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-[var(--text-3)] hover:text-[var(--text)] transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <Zap size={16} className="text-[var(--accent-1)]" />
                            Problem
                        </h4>
                        <p className="text-[var(--text-2)]">{project.problem}</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Box size={16} className="text-[var(--accent-1)]" />
                            Architecture
                        </h4>
                        <ul className="space-y-2">
                            {project.architecture.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-[var(--text-2)]">
                                    <span className="w-1.5 h-1.5 bg-[var(--accent-1)] rounded-full mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Shield size={16} className="text-[var(--accent-1)]" />
                            Key Decisions
                        </h4>
                        <ul className="space-y-2">
                            {project.decisions.map((decision, index) => (
                                <li key={index} className="flex items-start gap-2 text-[var(--text-2)]">
                                    <span className="w-1.5 h-1.5 bg-[var(--accent-2)] rounded-full mt-2 flex-shrink-0"></span>
                                    {decision}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <BarChart3 size={16} className="text-[var(--accent-1)]" />
                            Results
                        </h4>
                        <p className="text-[var(--text-2)]">{project.results}</p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)]">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-1)] text-white rounded-lg hover:bg-[var(--accent-1)]/90 transition-colors"
                        >
                            View on GitHub
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
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

                    <StaggerContainer className="space-y-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                variants={card}
                                className={`glass-card p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                                    project.hero ? 'md:col-span-2 border-[var(--accent-1)]/30 bg-[var(--accent-1)]/5' : ''
                                }`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="text-base font-display font-semibold text-[var(--text)] group-hover:text-[var(--accent-1)] transition-colors">
                                                {project.name}
                                            </h3>
                                            {project.hero && (
                                                <span className="px-2 py-0.5 bg-[var(--accent-1)]/20 text-[var(--accent-1)] text-xs font-mono rounded-full">
                                                    FEATURED
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-xs font-mono text-[var(--accent-1)] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {project.metrics} • ★ {project.stars}
                                        </div>
                                    </div>
                                    <ArrowUpRight
                                        size={15}
                                        className="text-[var(--text-3)] group-hover:text-[var(--text-2)] transition-colors flex-shrink-0 mt-0.5"
                                    />
                                </div>

                                <p className="text-[13px] text-[var(--text-2)] leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tech-pill">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
