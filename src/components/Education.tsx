'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gold-glow/10">
                            <GraduationCap className="text-gold-glow" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-outfit text-white">Education</h2>
                    </div>
                </motion.div>

                <div className="grid gap-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold-shimmer/30 transition-all flex flex-col md:flex-row md:items-start gap-6"
                        >
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                                <div className="text-gold-shimmer text-lg font-medium mb-1">{edu.degree}</div>
                                <div className="text-gray-500 mb-4">{edu.startDate} - {edu.endDate}</div>
                                <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                            </div>

                            {edu.institutionUrl && (
                                <div className="flex-shrink-0">
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold-glow/10 border border-gold-glow/20 text-gold-glow rounded-full hover:bg-gold-glow/20 transition-all text-sm font-medium"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
