'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsBanner = () => {
    const stats = [
        { icon: TrendingUp, value: '9+ Years', label: 'Prevented major production AI failures', color: 'text-blue-400' },
        { icon: Users, value: '1k+', label: 'Mentored Pro\'s (30% -> ML Roles)', color: 'text-emerald-400' },
        { icon: BookOpen, value: '2', label: 'Research Publications (CRC Press)', color: 'text-gold-glow' },
        { icon: Award, value: '18+', label: 'Talks including BSBI & IET', color: 'text-purple-400' },
        { icon: Globe, value: '8', label: 'Countries with Active Mentees', color: 'text-blue-300' },
    ];

    return (
        <section className="py-12 bg-charcoal-900 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        // Dynamically determine color based on content type if not explicit, but simpler to just hardcode consistent theme mapping.
                        // Map old colors to Theme:
                        // Experience (Trend) -> Cyan
                        // Learners (Users) -> Amber
                        // Publications (Book) -> Cyan
                        // Speaking (Award) -> Amber
                        // Countries (Globe) -> Cyan
                        let themeColor = 'text-cyan-400';
                        if (stat.label.includes('Learners') || stat.label.includes('Speaking')) {
                            themeColor = 'text-amber-500';
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-none bg-white/5 border border-white/10 mb-3 group-hover:border-${themeColor === 'text-cyan-400' ? 'cyan-400' : 'amber-500'}/30 transition-colors`}>
                                    <Icon size={20} className={themeColor} />
                                </div>
                                <div className={`text-2xl md:text-3xl font-bold font-syne mb-1 ${themeColor}`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-400 font-mono font-medium uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
