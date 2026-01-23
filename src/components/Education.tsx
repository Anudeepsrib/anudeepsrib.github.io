'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { GraduationCap } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Education = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="education" className="py-16 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-4">
                        <GraduationCap className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-300">Academic Foundation</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-outfit text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Education
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl">
                        Strong foundation in computer science and advanced studies in AI, machine learning, and data systems.
                    </motion.p>
                </motion.div>

                <div className="grid gap-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial={reduceMotion ? 'show' : 'hidden'}
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-400/20 hover-lift transition-all flex flex-col md:flex-row md:items-start gap-6"
                        >
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                                <div className="text-blue-300 text-lg font-medium mb-1">{edu.degree}</div>
                                <div className="text-gray-500 mb-4">{edu.startDate} - {edu.endDate}</div>
                                <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                            </div>

                            {edu.institutionUrl && (
                                <div className="flex-shrink-0">
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-400/30 text-blue-300 rounded-full hover:bg-blue-400/20 hover:border-blue-400/60 hover:text-blue-200 transition-all text-sm font-medium"
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
