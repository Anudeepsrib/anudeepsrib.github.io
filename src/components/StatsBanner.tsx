'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award, Globe } from 'lucide-react';

const stats = [
    { icon: TrendingUp, value: '9+', label: 'Years Experience', accent: 'accent' },
    { icon: Users, value: '1000+', label: 'Mentored Professionals', accent: 'accent-warm' },
    { icon: BookOpen, value: '2', label: 'Research Publications', accent: 'accent' },
    { icon: Award, value: '18+', label: 'Speaking Engagements', accent: 'accent-warm' },
    { icon: Globe, value: '20+', label: 'Countries Reached', accent: 'accent' },
];

const StatsBanner = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const isWarm = stat.accent === 'accent-warm';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card p-5 text-center hover-lift cursor-pointer"
                            >
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${isWarm
                                        ? 'bg-[var(--accent-warm)]/10 text-[var(--accent-warm)]'
                                        : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                                    }`}>
                                    <Icon size={20} />
                                </div>

                                <div className={`text-3xl md:text-4xl font-exo font-bold mb-1 ${isWarm ? 'text-[var(--accent-warm)]' : 'text-[var(--accent-primary)]'
                                    }`}>
                                    {stat.value}
                                </div>

                                <div className="text-xs text-text-secondary font-mono uppercase tracking-wide">
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
