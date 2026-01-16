'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Authorship = () => {
    return (
        <section id="authorship" className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-glow/10 border border-gold-glow/20 mb-6">
                        <BookOpen className="text-gold-glow" size={18} />
                        <span className="text-sm font-medium text-gold-glow">Publications</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow to-gold-shimmer">
                            Authorship
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Contributing to the global body of knowledge in AI and technology.
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
                            className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-glow/30 transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-gold-glow/10 text-gold-glow group-hover:bg-gold-glow group-hover:text-black transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <ExternalLink className="text-gray-500 group-hover:text-gold-glow transition-colors" size={20} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-glow transition-colors">
                                {pub.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gold-shimmer mb-4">
                                <span>{pub.publisher}</span>
                                <span>•</span>
                                <span>{pub.year}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {pub.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Authorship;
