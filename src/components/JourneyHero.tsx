'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Zap } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const JourneyHero = () => {
    const reduceMotion = useReducedMotion();

    const milestones = [
        { label: "Years in Tech", value: "5+" },
        { label: "Organizations", value: "3+" },
        { label: "Awards", value: "2" },
        { label: "Innovation Focus", value: "AI/ML" }
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
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-4">
                        <Compass className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-300">My Professional Journey</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-white mb-4 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Path to Impact
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed font-light">
                        From building foundational data systems to architecting production-grade AI solutions, my journey spans innovation, leadership, and transformational impact across leading organizations.
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
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 hover-lift transition-all"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 mb-2">
                                {milestone.value}
                            </div>
                            <p className="text-gray-400 text-sm md:text-base">{milestone.label}</p>
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
                    <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8">
                        <span className="flex items-center gap-2 mb-4">
                            <Zap className="text-blue-400" size={20} />
                            <span className="font-semibold">Key Phases</span>
                        </span>
                        Below you'll find my professional timeline, recognized awards, and academic foundation that shaped my expertise in AI and data systems.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneyHero;
