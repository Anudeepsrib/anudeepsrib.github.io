'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsBanner = () => {
    const stats = [
        { icon: TrendingUp, value: '9+', label: 'Years Experience', color: 'text-blue-400' },
        { icon: Users, value: '1,000+', label: 'Learners Taught', color: 'text-emerald-400' },
        { icon: BookOpen, value: '2', label: 'Publications', color: 'text-gold-glow' },
        { icon: Award, value: '18+', label: 'Speaking Engagements', color: 'text-purple-400' },
        { icon: Globe, value: '8', label: 'Countries mentored', color: 'text-blue-300' },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-900 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-3 group-hover:border-blue-400/30 transition-colors">
                                    <Icon size={20} className={stat.color} />
                                </div>
                                <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-400 font-medium">
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
