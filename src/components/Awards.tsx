'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Awards = () => {
    const reduceMotion = useReducedMotion();

    const awards = [
        {
            title: "RISE Award",
            organization: "Infosys Americas",
            year: "2025",
            description: "Awarded for significant innovation and impact in AI systems, demonstrating leadership and driving transformational change.",
            icon: Star,
            gradient: "from-yellow-400 to-yellow-300",
            accentColor: "text-yellow-400",
            bgColor: "bg-yellow-400/10",
            borderColor: "border-yellow-400/30"
        },
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
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                        <Award className="text-amber-500" size={18} />
                        <span className="text-sm font-mono text-amber-500">Recognition</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-syne text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">
                            Awards & Recognition
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl font-light">
                        Outstanding contributions and impact in professional roles.
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
                            className="group relative overflow-hidden rounded-none bg-charcoal-800/50 border border-white/10 p-8 hover:border-amber-400/50 hover-lift transition-all"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/30" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/30" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon & Year */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-4 rounded-none ${award.bgColor}`}>
                                        <award.icon className={award.accentColor} size={32} />
                                    </div>
                                    <span className="text-sm font-mono text-gray-500 px-3 py-1 rounded-none bg-white/5 border border-white/10">
                                        {award.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl font-bold font-syne text-white mb-2 group-hover:text-amber-300 transition-colors">
                                    {award.title}
                                </h3>

                                {/* Organization */}
                                <div className={`${award.accentColor} font-mono font-semibold text-lg mb-4`}>
                                    {award.organization}
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed text-lg font-light">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
