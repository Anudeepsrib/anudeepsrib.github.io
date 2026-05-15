'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Bot, Database, Shield, Code2, Cloud, BarChart3,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import MotionWrapper from '@/components/ui/MotionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import SkillCategoryCard from '@/components/ui/SkillCategoryCard';
import { fadeUp, scaleIn, stagger } from '@/lib/animation';

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

export default function Skills() {
    return (
        <section className="premium-section relative z-10" id="skills">
            <div className="section-divider" />
            <Container>
                <MotionWrapper variants={fadeUp}>
                    <SectionHeader
                        title="What I work with"
                        description="Tools and frameworks behind the systems I ship."
                    />
                </MotionWrapper>

                <MotionWrapper
                    staggerChildren
                    variants={stagger}
                    className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skillCategories.map((category) => (
                        <motion.div key={category.title} variants={scaleIn}>
                            <SkillCategoryCard
                                icon={category.icon}
                                title={category.title}
                                techs={category.techs}
                            />
                        </motion.div>
                    ))}
                </MotionWrapper>
            </Container>
        </section>
    );
}
