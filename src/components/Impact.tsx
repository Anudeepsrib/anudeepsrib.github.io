'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Globe, Users, Award, BookOpen, Mic, Handshake, UserCheck, MapPin, ArrowRight } from 'lucide-react';

const universities = [
    'UMass Amherst', 'Northern Kentucky University', 'VIT University', 'PVP Siddhartha', 'JECRC University'
];

const globalPlatforms = [
    'DeepLearning.AI (Pie & AI)', 'Berlin School of Business & Innovation', 'Cloud Computing Conference (Boussias)'
];

const trainingPartners = [
    'Great Learning', 'Wiley', 'Verzeo', 'Analytics Vidhya', 'Kaggle'
];

const impactMetrics = [
    { value: '10+', label: 'Years AI/ML Experience', icon: GraduationCap },
    { value: '2', label: 'Publications', icon: BookOpen },
    { value: '500+', label: 'Teaching Hours', icon: Mic },
    { value: '18+', label: 'Guest Lectures', icon: GraduationCap },
    { value: '10+', label: 'Partners', icon: Handshake },
    { value: '1,000+', label: 'Learners', icon: Users },
    { value: '200+', label: 'Mentoring Sessions', icon: UserCheck },
    { value: '7', label: 'Countries', icon: MapPin },
];

const testimonials = [
    {
        quote: "Anudeep was incredibly helpful in clarifying my doubts about the data science career path. His insights on real-world AI production were eye-opening.",
        author: "Mentee",
        source: "via Topmate"
    },
    {
        quote: "The sessions were very interactive and practical. Anudeep makes complex concepts like Transformers and LLMs easy to understand.",
        author: "Learner",
        source: "via Great Learning"
    },
    {
        quote: "Great guidance on transitioning from software engineering to ML. The roadmap provided was very clear and actionable.",
        author: "Professional",
        source: "via ADPList"
    }
];

const Impact = () => {
    return (
        <section id="impact" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-gold-glow/5 to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-glow/10 border border-gold-glow/20 mb-6">
                        <Award className="text-gold-glow" size={18} />
                        <span className="text-sm font-medium text-gold-glow">Global Recognition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow to-gold-shimmer">
                            Teaching & Global Impact
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Recognized by universities, AI organizations, and global platforms for advancing practical AI education, applied innovation, and workforce development.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Universities */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-glow/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gold-glow/10">
                                <GraduationCap className="text-gold-glow" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Universities</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Invited to deliver lectures and workshops on AI, ML, CV, and data-driven innovation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {universities.map((uni) => (
                                <span key={uni} className="px-3 py-1.5 text-xs font-medium rounded-full bg-gold-glow/10 text-gold-shimmer border border-gold-glow/20">
                                    {uni}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Global Platforms */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-shimmer/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gold-shimmer/10">
                                <Globe className="text-gold-shimmer" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Global AI Platforms</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Speaker and contributor at international AI forums and conferences.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {globalPlatforms.map((platform) => (
                                <span key={platform} className="px-3 py-1.5 text-xs font-medium rounded-full bg-gold-shimmer/10 text-gold-shimmer border border-gold-shimmer/20">
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Training Partners */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-glow/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-emerald-glow/10">
                                <Users className="text-emerald-glow" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Training Partners</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Instructor and mentor for structured AI/ML programs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {trainingPartners.map((partner) => (
                                <span key={partner} className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-glow/10 text-emerald-300 border border-emerald-glow/20">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Impact Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {impactMetrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/5 border border-white/10 text-center hover:border-gold-glow/30 transition-all group"
                            >
                                <metric.icon className="mx-auto mb-2 text-gold-glow group-hover:scale-110 transition-transform" size={24} />
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-xs text-gray-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mentoring Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-glow/10 border border-gold-glow/20 mb-6">
                            <Users className="text-gold-glow" size={18} />
                            <span className="text-sm font-medium text-gold-glow">Mentorship</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow to-gold-shimmer">
                                Mentoring & Career Impact
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            I guide learners and professionals through Great Learning, Topmate, ADPList, and global communities—helping them build strong foundations in AI, ML, data science, and cloud technologies.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:shadow-lg hover:shadow-gold-glow/5 transition-all"
                        >
                            <Award className="absolute top-4 right-4 text-gold-glow/20" size={32} />
                            <p className="text-sm text-gray-400 mb-4 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-glow to-gold-shimmer flex items-center justify-center text-white text-xs font-bold">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">{testimonial.author}</div>
                                    <div className="text-xs text-gray-400">{testimonial.source}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
