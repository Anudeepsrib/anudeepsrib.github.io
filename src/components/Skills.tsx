'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as Si from 'react-icons/si';
import * as Tb from 'react-icons/tb';
import { fadeUp, stagger } from '@/lib/animation';
import { skillCategories } from '@/data/skills';
import { Code2, Cloud, ShieldCheck, Braces, Bot, Database } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Agentic AI & Orchestration': Code2,
    'RAG & Knowledge Architecture': Database,
    'AI Safety & Evaluation': ShieldCheck,
    'AI-Native Development': Bot,
    'Cloud & Production Systems': Cloud,
    'Data Engineering': Braces,
};

const Skills = () => {
    const reduceMotion = useReducedMotion();

    const getIconComponent = (iconName: string) => {
        const IconSi = (Si as any)[iconName];
        if (IconSi) return IconSi;
        const IconTb = (Tb as any)[iconName];
        if (IconTb) return IconTb;
        return null;
    };

    return (
        <section id="skills" className="py-24 md:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    {/* Section Number */}
                    <div className="section-number">03</div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6">
                        <span className="text-[var(--text-primary)]">Technical Arsenal</span>
                    </h2>

                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        Building reliable, secure, and observable AI systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Code2;
                        const isLast = catIndex === skillCategories.length - 1;
                        const isSecondLast = catIndex === skillCategories.length - 2;
                        return (
                            <motion.div
                                key={category.name}
                                variants={fadeUp}
                                className={`glass-card p-6 hover-lift group flex flex-col ${skillCategories.length % 3 === 2 && isSecondLast ? 'lg:col-start-1' : ''} ${skillCategories.length % 3 === 2 && isLast ? 'lg:col-start-2' : ''} ${skillCategories.length % 3 === 1 && isLast ? 'lg:col-start-2' : ''}`}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10">
                                        <CategoryIcon className="text-[var(--accent-primary)]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-medium text-[var(--text-primary)]">{category.name}</h3>
                                        <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2 flex-1">
                                    {category.skills.map((skill, index) => {
                                        const Icon = getIconComponent(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                variants={fadeUp}
                                                className="group/skill p-3 rounded-lg bg-[var(--bg-primary)]/60 border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-250 flex items-start gap-3"
                                            >
                                                {Icon && (
                                                    <div className="flex-shrink-0 text-xl text-[var(--text-tertiary)] group-hover/skill:text-[var(--accent-primary)] transition-colors mt-0.5">
                                                        <Icon />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm font-medium text-[var(--text-primary)] group-hover/skill:text-[var(--accent-primary)] transition-colors">
                                                        {skill.name}
                                                    </div>
                                                    <div className="text-xs font-mono text-[var(--text-tertiary)] mt-0.5 leading-snug">
                                                        {skill.context}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
