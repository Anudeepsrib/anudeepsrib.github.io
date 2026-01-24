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
        // Check the main Si pack first, then Tb (some brand icons live in other packs)
        const IconSi = (Si as any)[iconName];
        if (IconSi) return IconSi;
        const IconTb = (Tb as any)[iconName];
        if (IconTb) return IconTb;
        return null;
    };

    return (
        <section id="skills" className="py-16 relative">
            <div className="absolute inset-0 bg-obsidian-900" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6 hover-lift">
                        <Code2 className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-400">Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Technical Arsenal
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        I focus on building reliable, secure, and observable AI systems that can scale beyond prototypes. RAG & Retrieval Systems, Agent Tool-Calling, AI Evaluation & Guardrails, Cloud-Native Deployment, Observability & Cost Control
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Code2;
                        return (
                            <motion.div
                                key={category.name}
                                variants={fadeUp}
                                className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-blue-400/30 transition-all hover-lift"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-blue-400/10">
                                        <CategoryIcon className="text-blue-400" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                                        <p className="text-sm text-gray-500">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {category.skills.map((skill, index) => {
                                        const Icon = getIconComponent(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                variants={fadeUp}
                                                whileHover={{ scale: 1.05 }}
                                                className="group relative p-4 bg-white/5 border border-white/8 rounded-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-default hover-lift"
                                            >
                                                <div
                                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                                    style={{ backgroundColor: skill.color }}
                                                />
                                                {Icon && (
                                                    <div className="text-2xl">
                                                        <Icon style={{ color: skill.color }} />
                                                    </div>
                                                )}
                                                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                                                    {skill.name}
                                                </span>
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
