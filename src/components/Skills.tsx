'use client';
import React from 'react';
import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';
import { skillCategories } from '@/data/skills';
import { Code2, Layout, Cloud, Container } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Backend & AI/ML': Code2,
    'Frontend': Layout,
    'Cloud Platforms': Cloud,
    'DevOps & Deployment': Container,
};

const Skills = () => {
    const getIconComponent = (iconName: string) => {
        const Icon = (Si as any)[iconName];
        return Icon ? Icon : null;
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 bg-obsidian-900" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-glow/10 border border-gold-glow/20 mb-6">
                        <Code2 className="text-gold-glow" size={18} />
                        <span className="text-sm font-medium text-gold-glow">Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow to-gold-shimmer">
                            Technical Arsenal
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A curated stack of technologies I use to build scalable AI systems and data platforms.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Code2;
                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-glow/30 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gold-glow/10">
                                        <CategoryIcon className="text-gold-glow" size={24} />
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
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                                className="group relative p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-default"
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
