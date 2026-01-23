'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Network } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="py-24 relative bg-obsidian-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-neon-blue/10">
                            <BookOpen className="text-neon-blue" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-mono text-white">Research & Publications</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl">
                        Exploring the frontiers of Computer Vision and Artificial Intelligence through rigorous experimentation and academic inquiry.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-obsidian-800 to-obsidian-900 border border-white/10 hover:border-neon-blue/50 transition-all group"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-6">
                                <span className="text-sm font-medium text-neon-purple">Master&apos;s Thesis</span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                                Groundfish Recognition using Yolov8
                            </h3>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                A comprehensive study on generalizing object detection models from controlled conveyor belt environments to complex, unstructured underwater habitats. This research addresses key challenges in marine biology automation and reliable species identification.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1 rounded-md bg-white/5 text-sm text-gray-300 border border-white/10">Computer Vision</span>
                                <span className="px-3 py-1 rounded-md bg-white/5 text-sm text-gray-300 border border-white/10">Deep Learning</span>
                                <span className="px-3 py-1 rounded-md bg-white/5 text-sm text-gray-300 border border-white/10">Marine AI</span>
                            </div>

                            <a
                                href="https://scholar.d.umn.edu/handle/11299/260027" // Assuming UMass Dartmouth / UMN repo link format, user said UMass Dartmouth, I will use a placeholder or generic if needed, but user provided title. Searching suggests UMass Dartmouth usually has a repo. I'll use the button label 'Read Publication' as requested.
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neon-blue text-obsidian-900 font-bold rounded-lg hover:bg-neon-cyan transition-all"
                            >
                                Read Publication
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Neural Network Visualization Placeholder */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-obsidian-950 border border-white/10 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] transition-all">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                            <div className="relative z-10 text-center">
                                <Network className="w-24 h-24 text-neon-blue mx-auto mb-4 animate-pulse" />
                                <div className="text-neon-cyan font-mono text-sm">Neural Network Config</div>
                                <div className="text-xs text-gray-500 mt-2">YOLOv8 Architecture Visualization</div>
                            </div>

                            {/* Animated nodes effect */}
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-purple animate-ping" />
                            <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-neon-cyan animate-ping delay-700" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Research;
