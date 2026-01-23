'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Awards = () => {
    const reduceMotion = useReducedMotion();

    const awards = [
        {
            title: "Extra Mile Award",
            organization: "Capgemini",
            year: "2020",
            description: "Recognized for exceptional contribution and going above and beyond in delivering excellence on critical AI and data science projects.",
            icon: Star,
            gradient: "from-yellow-400 to-yellow-300",
            accentColor: "text-yellow-400",
            bgColor: "bg-yellow-400/10",
            borderColor: "border-yellow-400/30"
        },
        {
            title: "RISE Award",
            organization: "Infosys",
            year: "2025",
            description: "Awarded for significant innovation and impact in AI systems, demonstrating leadership and driving transformational change.",
            icon: Star,
            gradient: "from-blue-400 to-blue-300",
            accentColor: "text-blue-400",
            bgColor: "bg-blue-400/10",
            borderColor: "border-blue-400/30"
        }
    ];

    return (
        <section id="awards" className="py-16 relative bg-obsidian-800/50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-4">
                        <Award className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-300">Recognition</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-outfit text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Awards & Recognition
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl">
                        Recognition for outstanding contributions and impact in professional roles.
                    </motion.p>
                </motion.div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial={reduceMotion ? 'show' : 'hidden'}
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 hover-lift transition-all"
                        >
                            {/* Gradient Background - Using inline styles for dynamic gradients */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-3xl"
                                style={{
                                    background: award.gradient === 'from-yellow-400 to-yellow-300' 
                                        ? 'linear-gradient(135deg, rgb(250, 204, 21), rgb(253, 224, 71))' 
                                        : 'linear-gradient(135deg, rgb(96, 165, 250), rgb(147, 197, 253))'
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon & Year */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-4 rounded-2xl ${award.bgColor}`}>
                                        <award.icon className={award.accentColor} size={32} />
                                    </div>
                                    <span className="text-sm font-mono text-gray-500 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                        {award.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                    {award.title}
                                </h3>

                                {/* Organization */}
                                <div className={`${award.accentColor} font-semibold text-lg mb-4`}>
                                    {award.organization}
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {award.description}
                                </p>

                                {/* Accent Line */}
                                <div 
                                    className="h-1 w-16 mt-6 group-hover:w-24 transition-all duration-300"
                                    style={{
                                        background: award.gradient === 'from-yellow-400 to-yellow-300'
                                            ? 'linear-gradient(90deg, rgb(250, 204, 21), transparent)'
                                            : 'linear-gradient(90deg, rgb(96, 165, 250), transparent)'
                                    }}
                                />
                            </div>

                            {/* Hover Glow - Using inline styles */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity pointer-events-none"
                                style={{
                                    background: award.gradient === 'from-yellow-400 to-yellow-300'
                                        ? 'linear-gradient(135deg, rgb(250, 204, 21), rgb(253, 224, 71))'
                                        : 'linear-gradient(135deg, rgb(96, 165, 250), rgb(147, 197, 253))'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
