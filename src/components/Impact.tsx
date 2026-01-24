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
            <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-400/5 to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6 hover-lift">
                        <Award className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-400">Global Recognition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
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
                        className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-blue-400/30 transition-all hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-blue-400/10">
                                <GraduationCap className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Universities</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Invited to deliver lectures and workshops on AI, ML, CV, and data-driven innovation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {universities.map((uni) => (
                                <span key={uni} className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20">
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
                        className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-blue-300/30 transition-all hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-blue-300/10">
                                <Globe className="text-blue-300" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Global AI Platforms</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Speaker and contributor at international AI forums and conferences.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {globalPlatforms.map((platform) => (
                                <span key={platform} className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-300/10 text-blue-200 border border-blue-300/20">
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
                        className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-blue-400/30 transition-all hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-blue-400/10">
                                <Users className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Training Partners</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Instructor and mentor for structured AI/ML programs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {trainingPartners.map((partner) => (
                                <span key={partner} className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mentoring Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6 hover-lift">
                            <Users className="text-blue-400" size={18} />
                            <span className="text-sm font-medium text-blue-400">Mentorship</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                                Mentoring & Career Impact
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            I guide learners and professionals through Great Learning, Topmate, ADPList, and global communities—helping them build strong foundations in AI, ML, data science, and cloud technologies.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">What Learners & Mentees Say</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Real feedback from professionals I've mentored and learners I've taught.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-6 rounded-2xl bg-white/5 border border-white/8 hover:shadow-lg hover:shadow-blue-400/5 transition-all hover-lift"
                            >
                                <Award className="absolute top-4 right-4 text-blue-400/20" size={32} />
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center text-white text-xs font-bold">
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
                        className="px-6 py-3 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-all flex items-center justify-center gap-2 hover-lift"
                    >
                        See Mentoring Options
                        <span className="text-xs">→</span>
                    </a>
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover-lift"
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
