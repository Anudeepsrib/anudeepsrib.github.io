'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X, Box, Zap, Shield, BarChart3 } from 'lucide-react';
import Container from '@/components/ui/Container';
import CTAButton from '@/components/ui/CTAButton';
import GradientCard from '@/components/ui/GradientCard';
import MotionWrapper from '@/components/ui/MotionWrapper';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeUp, scaleIn, stagger } from '@/lib/animation';

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

interface ProjectDetailModalProps {
    project: typeof projects[0];
    onClose: () => void;
}

function DetailBlock({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-lg border border-[var(--border)] bg-black/18 p-5">
            <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-[var(--text)]">
                {icon}
                {title}
            </h4>
            {children}
        </div>
    );
}

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/78 p-4 backdrop-blur-md sm:p-6"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.97, opacity: 0, y: 12 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.97, opacity: 0, y: 12 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[90vh] w-full max-w-4xl overflow-y-auto"
                onClick={(event) => event.stopPropagation()}
            >
                <GradientCard className="p-5 sm:p-7 md:p-8">
                    <div className="mb-7 flex items-start justify-between gap-5">
                        <div>
                            <h3 className="text-2xl font-bold leading-tight text-[var(--text)] md:text-3xl">
                                {project.name}
                            </h3>
                            <div className="mt-3 flex flex-wrap items-center gap-3">
                                <span className="text-xs font-mono text-[var(--accent)]">{project.metrics}</span>
                                <span className="text-xs text-[var(--text-3)]">★ {project.stars}</span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tech-pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-md p-2 text-[var(--text-3)] transition-colors hover:bg-white/[0.05] hover:text-[var(--text)]"
                            aria-label="Close project details"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="grid gap-4">
                        <DetailBlock title="Problem" icon={<Zap size={16} className="text-[var(--accent)]" />}>
                            <p className="text-sm leading-7 text-[var(--text-2)]">{project.problem}</p>
                        </DetailBlock>

                        <DetailBlock title="Architecture" icon={<Box size={16} className="text-[var(--accent)]" />}>
                            <ul className="space-y-2">
                                {project.architecture.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-2)]">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </DetailBlock>

                        <DetailBlock title="Key Decisions" icon={<Shield size={16} className="text-[var(--accent)]" />}>
                            <ul className="space-y-2">
                                {project.decisions.map((decision) => (
                                    <li key={decision} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-2)]">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                                        {decision}
                                    </li>
                                ))}
                            </ul>
                        </DetailBlock>

                        <DetailBlock title="Results" icon={<BarChart3 size={16} className="text-[var(--accent)]" />}>
                            <p className="text-sm leading-7 text-[var(--text-2)]">{project.results}</p>
                        </DetailBlock>

                        <div className="pt-2">
                            <CTAButton href={project.link} external variant="secondary" icon={<ArrowUpRight size={15} />}>
                                View on GitHub
                            </CTAButton>
                        </div>
                    </div>
                </GradientCard>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <section className="premium-section relative z-10" id="projects">
                <div className="section-divider" />
                <Container>
                    <MotionWrapper variants={fadeUp}>
                        <SectionHeader
                            title="Open source"
                            description="Systems I&apos;ve built and open-sourced."
                        />
                    </MotionWrapper>

                    <MotionWrapper
                        staggerChildren
                        variants={stagger}
                        className="grid grid-cols-1 gap-3 lg:grid-cols-2"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.name}
                                variants={scaleIn}
                                className={project.hero ? 'lg:col-span-2' : undefined}
                            >
                                <ProjectCard
                                    project={project}
                                    onClick={() => setSelectedProject(project)}
                                />
                            </motion.div>
                        ))}
                    </MotionWrapper>
                </Container>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
