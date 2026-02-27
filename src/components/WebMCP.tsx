'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * WebMCP — exposes structured AI-agent tools via the W3C Model Context Protocol.
 *
 * When a supporting browser (Chrome 146+ Canary) loads the page, `window.modelContext`
 * becomes available and this component registers four discoverable tools that any
 * compliant AI agent can invoke.
 *
 * Renders nothing — this is a side-effect-only component.
 */
export default function WebMCP() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined' || !window.modelContext) return;

        const mc = window.modelContext;

        // ── 1. get_profile ───────────────────────────────────────────────
        mc.registerTool({
            name: 'get_profile',
            description: 'Get professional details about Anudeepsri Bathina.',
            schema: { type: 'object', properties: {} },
            execute: () => ({
                name: 'Anudeepsri Bathina',
                role: 'AI Architect',
                company: 'Infosys',
                experience: '11 years',
                location: 'Celina, Texas',
                education: 'Vellore Institute of Technology (VIT)',
                keySkills: [
                    'Generative AI',
                    'LLMs',
                    'RAG',
                    'Agentic AI',
                    'Python',
                ],
            }),
        });

        // ── 2. get_projects ──────────────────────────────────────────────
        mc.registerTool({
            name: 'get_projects',
            description: 'List key featured projects with their tech stacks.',
            schema: { type: 'object', properties: {} },
            execute: () => [
                {
                    name: 'ClinIQ',
                    description:
                        'Enterprise Healthcare RAG with stateful LangGraph pipeline, multimodal ingestion, and LangSmith observability',
                    techStack: ['LangGraph', 'LangChain', 'FastAPI', 'OpenAI', 'ChromaDB', 'Presidio'],
                },
                {
                    name: 'Media-Organizer',
                    description:
                        'Python toolkit for organizing mobile media files (iOS & Android) with a web dashboard and Gemini-powered AI features',
                    techStack: ['FastAPI', 'Google Gemini', 'ChromaDB', 'Pydantic'],
                },
                {
                    name: 'Annapurna-AI',
                    description:
                        'India-first, culture-aware AI meal planner and grocery assistant for South Indian vegetarian cooking',
                    techStack: ['Next.js', 'FastAPI', 'Gemini', 'LiteLLM', 'SQLModel'],
                },
                {
                    name: 'code-migration-assistant',
                    description:
                        'Enterprise-grade, security-first code migration tool with AI-powered risk assessment and compliance scanning',
                    techStack: ['Python', 'NetworkX', 'AST', 'RAG', 'OpenAI'],
                },
            ],
        });

        // ── 3. Maps_site ─────────────────────────────────────────────────
        mc.registerTool({
            name: 'Maps_site',
            description: 'Navigate to a specific page on the portfolio.',
            schema: {
                type: 'object',
                properties: {
                    path: {
                        type: 'string',
                        enum: ['/', '/about', '/projects', '/blog', '/contact'],
                        description: 'Target route to navigate to.',
                    },
                },
                required: ['path'],
            },
            execute: (args: Record<string, unknown>) => {
                const path = args.path as string;
                router.push(path);
                return { success: true, message: `Navigated to ${path}` };
            },
        });

        // ── 4. get_contact_info ──────────────────────────────────────────
        mc.registerTool({
            name: 'get_contact_info',
            description: 'Get official contact channels.',
            schema: { type: 'object', properties: {} },
            execute: () => ({
                linkedin: 'https://www.linkedin.com/in/anudeepsrib',
                github: 'https://github.com/Anudeepsrib',
            }),
        });
    }, [router]);

    return null;
}
