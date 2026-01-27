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
        quote: "Anudeep didn't just give me advice; he architected a roadmap. We deployed a RAG system 3 weeks faster than planned, avoiding a costly vector DB migration.",
        author: "Sarah J.",
        role: "Senior ML Engineer",
        company: "FinTech Startup",
        source: "via Topmate"
    },
    {
        quote: "The 'Theory to Production' bridge is real. I transitioned from a Java backend role to an AI Engineer position at a Tier-1 firm within 5 months of his mentorship.",
        author: "Rahul M.",
        role: "AI Engineer",
        company: "Global IT Services",
        source: "via Great Learning"
    },
    {
        quote: "His insights on handling LLM hallucinations in production were critical. We reduced our error rate by 40% following his evaluation framework.",
        author: "David Chen",
        role: "CTO",
        company: "HealthTech SaaS",
        source: "via ADPList"
    }
];

const Impact = () => {
    return (
        <section id="impact" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-400/5 to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6 hover-lift">
                        <Award className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-400">Global Recognition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-syne mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                            Teaching & Global Impact
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
                        Advancing practical AI education and applied innovation across global platforms.
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
                        className="p-6 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-400/50 transition-all hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-none bg-cyan-400/10 border border-cyan-400/20">
                                <GraduationCap className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-syne text-white">Universities</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">
                            Invited to deliver lectures and workshops on AI, ML, CV, and data-driven innovation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {universities.map((uni) => (
                                <span key={uni} className="px-3 py-1.5 text-xs font-mono font-medium rounded-none bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
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
                        className="p-6 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-300/50 transition-all hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-none bg-cyan-300/10 border border-cyan-300/20">
                                <Globe className="text-cyan-300" size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-syne text-white">Global AI Platforms</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">
                            Speaker and contributor at international AI forums and conferences.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {globalPlatforms.map((platform) => (
                                <span key={platform} className="px-3 py-1.5 text-xs font-mono font-medium rounded-none bg-cyan-300/10 text-cyan-200 border border-cyan-300/20">
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
                        className="p-6 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-400/50 transition-all hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-none bg-cyan-400/10 border border-cyan-400/20">
                                <Users className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-syne text-white">Training Partners</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">
                            Instructor and mentor for structured AI/ML programs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {trainingPartners.map((partner) => (
                                <span key={partner} className="px-3 py-1.5 text-xs font-mono font-medium rounded-none bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mentoring Section (Amber) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 hover-lift">
                            <Users className="text-amber-500" size={18} />
                            <span className="text-sm font-mono text-amber-500">Mentorship</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                                Mentoring & Career Impact
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            Guiding learners and professionals to build strong foundations in AI and Data Science.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonials (Amber) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold font-syne text-white mb-3">What Learners Say</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-6 rounded-none bg-white/5 border border-white/8 hover:border-amber-500/50 transition-all hover-lift"
                            >
                                <Award className="absolute top-4 right-4 text-amber-500/20" size={32} />
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed italic font-light">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-300 flex items-center justify-center text-charcoal-900 text-xs font-bold font-mono">
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white font-syne">{testimonial.author}</div>
                                        <div className="text-xs text-cyan-400 font-mono mb-0.5">{testimonial.role} @ {testimonial.company}</div>
                                        <div className="text-xs text-gray-500 font-mono">{testimonial.source}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mentorship CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-none hover:bg-amber-500/20 transition-all flex items-center justify-center gap-2 hover-lift font-mono uppercase tracking-wide"
                    >
                        See Mentoring Options
                        <span className="text-xs">→</span>
                    </a>
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-none hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover-lift font-mono uppercase tracking-wide"
                    >
                        Book a Session
                        <span className="text-xs">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
