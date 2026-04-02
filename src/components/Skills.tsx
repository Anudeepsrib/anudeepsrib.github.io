'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    Bot, Database, Shield, Code2, Cloud, BarChart3,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';

const skillCategories = [
    {
        icon: Bot,
        title: 'Agentic AI & Orchestration',
        techs: ['LangGraph/CrewAI', 'MCP (Anthropic)', 'OpenAI o3/o4-mini', 'Claude 4/Gemini 2.5'],
    },
    {
        icon: Database,
        title: 'RAG & Knowledge Systems',
        techs: ['Advanced RAG Pipelines', 'ChromaDB/Pinecone/Qdrant', 'GraphRAG', 'Cohere/BGE/ColBERT'],
    },
    {
        icon: Shield,
        title: 'AI Safety & Eval',
        techs: ['LangSmith/Langfuse', 'Guardrails & Grading', 'Presidio (PII/PHI)', 'Red-teaming & Evals'],
    },
    {
        icon: Code2,
        title: 'AI-Native Dev',
        techs: ['Claude Code/Codex CLI', 'Cursor/Windsurf', 'GitHub Copilot', 'A2A Protocol'],
    },
    {
        icon: Cloud,
        title: 'Cloud & Infra',
        techs: ['Python & FastAPI', 'Azure AI/AWS Bedrock', 'Docker & Kubernetes', 'CI/CD & MLOps'],
    },
    {
        icon: BarChart3,
        title: 'Data Engineering',
        techs: ['PySpark/Databricks', 'SQL & dbt', 'Airflow/Prefect', 'Kafka & Streaming'],
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

export default function Skills() {
    return (
        <section className="relative py-28 md:py-36" id="skills">
            <div className="mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tight">
                        What I work with
                    </h2>
                    <p className="text-[var(--text-2)] max-w-md mb-14 text-base">
                        Tools and frameworks behind the systems I ship.
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
                    {skillCategories.map((cat) => (
                        <motion.div
                            key={cat.title}
                            variants={card}
                            className="bg-[var(--bg)] p-6 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <cat.icon size={16} className="text-[var(--text-3)]" strokeWidth={1.5} />
                                <h3 className="text-[15px] font-display font-semibold text-[var(--text)]">
                                    {cat.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {cat.techs.map((tech) => (
                                    <span key={tech} className="tech-pill">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
