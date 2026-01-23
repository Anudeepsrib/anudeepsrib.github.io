'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Timeline = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="experience" className="py-16 relative bg-obsidian-800/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-4">
                        <Briefcase className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-300">Professional Journey</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-outfit text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Experience
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl">
                        Building production-grade AI systems across leading organizations and research institutions.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-blue-300/50 to-transparent md:-translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {resumeData.experience.map((job, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-obsidian-900 border-2 border-blue-400 md:-translate-x-1/2 z-10 shadow-[0_0_10px_theme('colors.blue.400')]" />

                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                                    }`}>
                                    <div className="text-blue-300 font-mono text-sm mb-2">{job.startDate} - {job.endDate}</div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{job.position}</h3>
                                    <div className="text-blue-400 font-medium mb-4">
                                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                                            {job.company}
                                        </a>
                                        <span className="text-gray-500 mx-2">•</span>
                                        <span className="text-gray-400">{job.location}</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-blue-400/20 transition-colors">
                                        {job.description}
                                    </p>
                                </div>

                                {/* Empty half for desktop layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
