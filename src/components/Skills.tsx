'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as Si from 'react-icons/si';
import * as Tb from 'react-icons/tb';
import { fadeUp, stagger } from '@/lib/animation';
import { skillCategories } from '@/data/skills';
import { Code2, Layout, Cloud, Container } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Backend & AI/ML': Code2,
    'Frontend': Layout,
    'Cloud Platforms': Cloud,
    'DevOps & Deployment': Container,
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
        <section id="skills" className="py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <Code2 className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">System Capabilities</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
                        <span className="gradient-text">Technical Arsenal</span>
                    </h2>

                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Building reliable, secure, and observable AI systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Code2;
                        return (
                            <motion.div
                                key={category.name}
                                variants={fadeUp}
                                className="glass-card p-6 hover-lift group"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10">
                                        <CategoryIcon className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-exo font-bold text-text-primary">{category.name}</h3>
                                        <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    {category.skills.map((skill, index) => {
                                        const Icon = getIconComponent(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                variants={fadeUp}
                                                className="group/skill p-3 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-250 flex items-start gap-3"
                                            >
                                                {Icon && (
                                                    <div className="flex-shrink-0 text-xl text-text-muted group-hover/skill:text-accent transition-colors mt-0.5">
                                                        <Icon />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm font-exo font-medium text-text-primary group-hover/skill:text-accent transition-colors">
                                                        {skill.name}
                                                    </div>
                                                    <div className="text-xs font-mono text-text-muted mt-0.5 leading-snug">
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
