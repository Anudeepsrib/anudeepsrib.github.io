'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Authorship = () => {
    return (
        <section id="authorship" className="py-24 relative bg-charcoal-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6 hover-lift">
                        <BookOpen className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-400">Publications</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                            Research & Writing
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4 font-light">
                        Contributing to the global body of knowledge in AI and technology through peer-reviewed publications and research.
                    </p>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto font-mono">
                        Published by CRC Press / Taylor & Francis.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {resumeData.publications.map((pub, index) => (
                        <motion.a
                            key={index}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block p-8 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1 hover:shadow-xl hover-lift relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30" />
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-none bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <ExternalLink className="text-gray-500 group-hover:text-cyan-400 transition-colors" size={20} />
                            </div>

                            <h3 className="text-xl font-bold font-syne text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                {pub.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-cyan-300 mb-4 font-mono">
                                <span>{pub.publisher}</span>
                                <span>•</span>
                                <span>{pub.year}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm mb-4 font-light">
                                {pub.description}
                            </p>

                            {/* Authorship CTAs */}
                            <div className="flex flex-col gap-2 mt-6 pt-4 border-t border-white/5">
                                <div className="text-cyan-400 hover:text-cyan-300 text-sm font-mono font-medium flex items-center gap-1 transition-colors uppercase tracking-wide">
                                    Read Publication
                                    <ExternalLink className="text-xs" size={14} />
                                </div>
                                <div className="text-gray-400 hover:text-cyan-300 text-sm font-mono font-medium flex items-center gap-1 transition-colors uppercase tracking-wide">
                                    Request Copy
                                    <span className="text-xs">→</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Authorship;
