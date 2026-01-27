'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Zap } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const JourneyHero = () => {
    const reduceMotion = useReducedMotion();

    const milestones = [
        { label: "Years in Tech", value: "10+" },
        { label: "Organizations", value: "4+" },
        { label: "Awards", value: "2" },
        { label: "Innovation Focus", value: "AI & ML" }
    ];

    return (
        <section className="relative py-20 pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                        <Compass className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-300">System Career Path</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold font-syne text-white mb-4 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                            Path to Impact
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed font-light">
                        Architecting production-grade AI solutions across innovation, leadership, and transformational impact.
                    </motion.p>
                </motion.div>

                {/* Milestone Stats */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
                >
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="group p-6 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-400/50 hover-lift transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30" />
                            <div className="text-3xl md:text-4xl font-bold font-syne text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 mb-2">
                                {milestone.value}
                            </div>
                            <p className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-wide">{milestone.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Journey Phases */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="mt-20 pt-16 border-t border-white/10"
                >
                    <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 font-light">
                        <span className="flex items-center gap-2 mb-4">
                            <Zap className="text-cyan-400" size={20} />
                            <span className="font-bold text-white font-syne">Key Phases</span>
                        </span>
                        Below is the professional timeline, recognized awards, and academic foundation shaping my expertise in AI.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneyHero;
