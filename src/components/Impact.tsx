'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Globe, Users, Award, BookOpen, Mic, Handshake, UserCheck, MapPin, ArrowRight, Quote } from 'lucide-react';

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
    { value: '9+', label: 'Years AI/ML Experience', icon: GraduationCap, accent: 'accent' },
    { value: '2', label: 'Publications', icon: BookOpen, accent: 'accent' },
    { value: '500+', label: 'Teaching Hours', icon: Mic, accent: 'accent-warm' },
    { value: '18+', label: 'Guest Lectures', icon: GraduationCap, accent: 'accent-warm' },
    { value: '10+', label: 'Partners', icon: Handshake, accent: 'accent' },
    { value: '1000+', label: 'Learners', icon: Users, accent: 'accent-warm' },
    { value: '200+', label: 'Mentoring Sessions', icon: UserCheck, accent: 'accent' },
    { value: '20+', label: 'Countries', icon: MapPin, accent: 'accent-warm' },
];

const testimonials = [
    {
        quote: "Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial. His ability to break down complex concepts into understandable terms is admirable.",
        author: "Michael",
        role: "Freelance Developer",
        company: "Self-taught",
        source: "via ADPList"
    },
    {
        quote: "Extremely insightful and valuable discussion. Anudeep's depth of knowledge in Data and AI is evident, and his willingness to openly share his expertise is commendable.",
        author: "Shashank H.V.",
        role: "Student",
        company: "UMass Dartmouth",
        source: "via Topmate"
    },
    {
        quote: "His tailored advice on skills, job applications, and interviews was practical and insightful, leaving me confident and motivated. Highly recommended!",
        author: "Baran Khazaee",
        role: "MSc Computer Science",
        company: "UC Davis",
        source: "via ADPList"
    },
    {
        quote: "I was very concerned as a fresher on how to face interviews. Anudeep made me feel comfortable regarding what to expect and how to navigate through different scenarios.",
        author: "Mahima Tummala",
        role: "Job Seeker",
        company: "Interview Prep",
        source: "via Topmate"
    },
    {
        quote: "The session was incredible. He showed me a path that I might not have considered if I hadn't spoken to him. Highly knowledgeable and supportive.",
        author: "Vansh Mehta",
        role: "Career Changer",
        company: "Data Science",
        source: "via Topmate"
    },
    {
        quote: "There is no denying that Anudeep was able to guide me to the next steps of my learning journey in data science. He is supportive and able to point learners in the right direction.",
        author: "Ronald Ngounou",
        role: "MS Computer Science",
        company: "University of DC",
        source: "via ADPList"
    }
];

const Impact = () => {
    return (
        <section id="impact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-primary)]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <Award className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Global Recognition</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">
                        <span className="gradient-text">Teaching & Global Impact</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
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
                        className="glass-card p-6 hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10">
                                <GraduationCap className="text-accent" size={24} />
                            </div>
                            <h3 className="text-lg font-exo font-bold text-text-primary">Universities</h3>
                        </div>
                        <p className="text-sm text-text-secondary mb-4">
                            Invited to deliver lectures and workshops on AI, ML, and data-driven innovation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {universities.map((uni) => (
                                <span key={uni} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--accent-primary)]/10 text-accent border border-[var(--accent-primary)]/20">
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
                        className="glass-card p-6 hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[var(--accent-warm)]/10">
                                <Globe className="text-[var(--accent-warm)]" size={24} />
                            </div>
                            <h3 className="text-lg font-exo font-bold text-text-primary">Global Platforms</h3>
                        </div>
                        <p className="text-sm text-text-secondary mb-4">
                            Featured speaker at international AI conferences and educational platforms.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {globalPlatforms.map((platform) => (
                                <span key={platform} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--accent-warm)]/10 text-[var(--accent-warm)] border border-[var(--accent-warm)]/20">
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
                        className="glass-card p-6 hover-lift"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10">
                                <Handshake className="text-accent" size={24} />
                            </div>
                            <h3 className="text-lg font-exo font-bold text-text-primary">Training Partners</h3>
                        </div>
                        <p className="text-sm text-text-secondary mb-4">
                            Collaborated with leading EdTech platforms to deliver industry-ready AI curriculum.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {trainingPartners.map((partner) => (
                                <span key={partner} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--accent-primary)]/10 text-accent border border-[var(--accent-primary)]/20">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {impactMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        const isWarm = metric.accent === 'accent-warm';
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card p-4 text-center hover-lift"
                            >
                                <Icon className={isWarm ? 'text-[var(--accent-warm)] mx-auto mb-2' : 'text-accent mx-auto mb-2'} size={20} />
                                <div className={`text-2xl md:text-3xl font-exo font-bold ${isWarm ? 'text-[var(--accent-warm)]' : 'text-accent'}`}>
                                    {metric.value}
                                </div>
                                <div className="text-xs text-text-muted font-mono mt-1">{metric.label}</div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-exo font-bold text-center text-text-primary mb-8">
                        What Mentees Say
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 relative"
                            >
                                <Quote className="text-accent/20 absolute top-4 right-4" size={32} />
                                <p className="text-text-secondary text-sm leading-relaxed mb-4 relative z-10">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="border-t border-[var(--border-subtle)] pt-4">
                                    <div className="font-exo font-medium text-text-primary">{testimonial.author}</div>
                                    <div className="text-xs text-text-muted font-mono">{testimonial.role}, {testimonial.company}</div>
                                    <div className="text-xs text-accent font-mono mt-1">{testimonial.source}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/mentorship"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        Explore Mentorship Programs
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Impact;
