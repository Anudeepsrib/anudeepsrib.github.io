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
        <section id="skills" className="py-16 relative bg-charcoal-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-charcoal-900" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-cyan-400/10 border border-cyan-400/20 mb-6 hover-lift">
                        <Code2 className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-400">System Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                            Technical Arsenal
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Building reliable, secure, and observable AI systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Code2;
                        return (
                            <motion.div
                                key={category.name}
                                variants={fadeUp}
                                className="p-6 rounded-none bg-charcoal-800/50 border border-white/5 hover:border-cyan-400/50 transition-all hover-lift relative overflow-hidden group/card"
                            >
                                {/* Corner Decorations */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />

                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="p-2 rounded-none bg-cyan-400/10 border border-cyan-400/20">
                                        <CategoryIcon className="text-cyan-400" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-syne text-white">{category.name}</h3>
                                        <p className="text-sm font-mono text-cyan-400/50 uppercase tracking-widest">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3 relative z-10">
                                    {category.skills.map((skill, index) => {
                                        const Icon = getIconComponent(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                variants={fadeUp}
                                                whileHover={{ scale: 1.02 }}
                                                className="group relative p-4 bg-black/20 border border-white/5 hover:bg-cyan-900/10 hover:border-cyan-400/30 transition-all duration-300 flex items-start gap-4 cursor-default rounded-none"
                                            >
                                                {Icon && (
                                                    <div className="flex-shrink-0 text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors mt-1">
                                                        <Icon />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm font-bold font-syne text-gray-300 group-hover:text-cyan-200 transition-colors">
                                                        {skill.name}
                                                    </div>
                                                    <div className="text-xs font-mono text-gray-500 mt-1 leading-snug">
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
