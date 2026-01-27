'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Network } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="py-24 relative bg-charcoal-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-none bg-cyan-400/10 border border-cyan-400/20">
                            <BookOpen className="text-cyan-400" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-syne text-white">Research & Publications</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl font-light leading-relaxed">
                        Exploring the frontiers of Computer Vision and Artificial Intelligence through rigorous experimentation and academic inquiry.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-400/50 transition-all group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-amber-500/10 border border-amber-500/20 mb-6">
                                <span className="text-sm font-mono font-medium text-amber-500 uppercase tracking-wide">Master&apos;s Thesis</span>
                            </div>

                            <h3 className="text-3xl font-bold font-syne text-white mb-4 group-hover:text-cyan-300 transition-colors">
                                Transfer learning for cross-database groundfish recognition: a thesis in Computer Science
                            </h3>

                            <div className="text-sm font-mono text-cyan-400 mb-2">
                                Anudeepsri Bathina
                            </div>

                            <div className="text-xs text-gray-500 font-light mb-6 space-y-1">
                                <p>Advisor: Ming Shao (UMass Dartmouth)</p>
                                <p>Committee: Yi Liu (UNC Wilmington), Yuchou Chang (UMass Dartmouth)</p>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed font-light">
                                A comprehensive study on generalizing object detection models from controlled conveyor belt environments to complex, unstructured underwater habitats. This research addresses key challenges in marine biology automation and reliable species identification.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1 rounded-none bg-white/5 text-sm font-mono text-cyan-300 border border-white/10">Computer Vision</span>
                                <span className="px-3 py-1 rounded-none bg-white/5 text-sm font-mono text-cyan-300 border border-white/10">Transfer Learning</span>
                                <span className="px-3 py-1 rounded-none bg-white/5 text-sm font-mono text-cyan-300 border border-white/10">Marine AI</span>
                            </div>

                            <a
                                href="https://umassd.primo.exlibrisgroup.com/permalink/01MA_DM_INST/kde4of/alma9914424898201301"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono font-bold rounded-none hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all uppercase tracking-wide hover-lift"
                            >
                                Read Thesis
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Neural Network Visualization Placeholder */}
                        <div className="relative aspect-video rounded-none overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                            <div className="relative z-10 text-center">
                                <Network className="w-24 h-24 text-cyan-400 mx-auto mb-4 animate-pulse" />
                                <div className="text-cyan-300 font-mono text-sm">Neural Network Config</div>
                                <div className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-wider">YOLOv8 Architecture Visualization</div>
                            </div>

                            {/* Animated nodes effect */}
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                            <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-cyan-400 animate-ping delay-700" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Research;
