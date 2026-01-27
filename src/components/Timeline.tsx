'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Timeline = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="experience" className="py-16 relative bg-charcoal-800/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                        <Briefcase className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-300">System Log</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-syne text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                            Experience
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl font-light">
                        Building production-grade AI systems across leading organizations.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-300/50 to-transparent md:-translate-x-1/2" />

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
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-charcoal-900 border-2 border-cyan-400 md:-translate-x-1/2 z-10 shadow-[0_0_10px_#00F0FF]" />

                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                                    }`}>
                                    <div className="text-cyan-300 font-mono text-sm mb-2">{job.startDate} - {job.endDate}</div>
                                    <h3 className="text-2xl font-bold font-syne text-white mb-1">{job.position}</h3>
                                    <div className="text-cyan-400 font-medium mb-4">
                                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-bold tracking-wide">
                                            {job.company}
                                        </a>
                                        <span className="text-gray-500 mx-2">•</span>
                                        <span className="text-gray-400">{job.location}</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base bg-white/5 p-6 rounded-none border-l-2 border-cyan-500/30 hover:border-cyan-400 transition-colors font-light">
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
