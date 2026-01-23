'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "YOLOv8 Transfer Learning",
            tags: ["Computer Vision", "Python"],
            description: "Thesis work on generalizing object detection from conveyor belts to underwater environments.",
            link: "#", // Placeholder
            tech: "YOLOv8"
        },
        {
            title: "Generative AI Workshop Resources",
            tags: ["LLMs", "RAG"],
            description: "Course materials for feature engineering and GenAI training.",
            link: "#",
            tech: "LangChain"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-obsidian-900 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-neon-cyan/10">
                            <Code2 className="text-neon-cyan" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-mono text-white">Open Source & Projects</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <Github className="text-gray-500 group-hover:text-white transition-colors" size={24} />
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
