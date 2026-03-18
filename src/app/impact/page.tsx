'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Globe, Users, Award, BookOpen, Mic, Handshake, UserCheck, MapPin, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fadeUp, stagger } from '@/lib/animation';

const universities = [
    'UMass Dartmouth', 'Northern Kentucky University', 'VIT University', 'PVP Siddhartha', 'JECRC University'
];

const globalPlatforms = [
    'DeepLearning.AI (Pie & AI)', 'Berlin School of Business & Innovation', 'Cloud Computing Conference (Boussias)'
];

const trainingPartners = [
    'Great Learning', 'Wiley', 'Verzeo', 'Analytics Vidhya', 'Kaggle'
];

const impactMetrics = [
    { value: '11+', label: 'Years AI/ML Experience', icon: GraduationCap },
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
        quote: "Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial for interview preparation.",
        author: "Michael",
        source: "via ADPList"
    },
    {
        quote: "Extremely insightful discussion. Anudeep's depth of knowledge in Data and AI is evident, and his willingness to openly share his expertise is commendable.",
        author: "Shashank H.V.",
        source: "via Topmate"
    },
    {
        quote: "His tailored advice on skills, job applications, and interviews was practical and insightful, leaving me confident and motivated. Highly recommended!",
        author: "Baran Khazaee",
        source: "via ADPList"
    }
];

export default function ImpactPage() {
    const reduceMotion = useReducedMotion();

    return (
        <main className="min-h-screen bg-[var(--bg-primary)]">
            <Navbar />
            <section className="py-24 pt-32 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-[var(--bg-primary)]" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-warm)]/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        variants={stagger}
                        initial={reduceMotion ? 'show' : 'hidden'}
                        animate="show"
                        className="text-center mb-20"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                            <Award className="text-accent" size={18} />
                            <span className="text-sm font-mono text-accent">Global Recognition</span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-exo font-bold mb-6 tracking-tight">
                            <span className="gradient-text">Teaching & Global Impact</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            Recognized by universities, AI organizations, and global platforms for advancing practical AI education, applied innovation, and workforce development.
                        </motion.p>
                    </motion.div>

                    {/* Categories Grid */}
                    <motion.div
                        variants={stagger}
                        initial={reduceMotion ? 'show' : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6 mb-16"
                    >
                        {/* Universities */}
                        <motion.div variants={fadeUp} className="glass-card p-6 hover-lift">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10">
                                    <GraduationCap className="text-accent" size={24} />
                                </div>
                                <h3 className="text-xl font-exo font-bold text-text-primary">Universities</h3>
                            </div>
                            <p className="text-sm text-text-secondary mb-4">
                                Invited to deliver lectures and workshops on AI, ML, CV, and data-driven innovation.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {universities.map((uni) => (
                                    <span key={uni} className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--accent-primary)]/10 text-accent border border-[var(--accent-primary)]/20">
                                        {uni}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Global Platforms */}
                        <motion.div variants={fadeUp} className="glass-card p-6 hover-lift">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-[var(--accent-secondary)]/10">
                                    <Globe className="text-[var(--accent-secondary)]" size={24} />
                                </div>
                                <h3 className="text-xl font-exo font-bold text-text-primary">Global AI Platforms</h3>
                            </div>
                            <p className="text-sm text-text-secondary mb-4">
                                Speaker and contributor at international AI forums and conferences.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {globalPlatforms.map((platform) => (
                                    <span key={platform} className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/20">
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Training Partners */}
                        <motion.div variants={fadeUp} className="glass-card p-6 hover-lift">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-[var(--accent-warm)]/10">
                                    <Users className="text-[var(--accent-warm)]" size={24} />
                                </div>
                                <h3 className="text-xl font-exo font-bold text-text-primary">Training Partners</h3>
                            </div>
                            <p className="text-sm text-text-secondary mb-4">
                                Instructor and mentor for structured AI/ML programs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {trainingPartners.map((partner) => (
                                    <span key={partner} className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--accent-warm)]/10 text-[var(--accent-secondary)] border border-[var(--accent-warm)]/20">
                                        {partner}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Impact Metrics */}
                    <motion.div
                        variants={stagger}
                        initial={reduceMotion ? 'show' : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {impactMetrics.map((metric) => (
                                <motion.div
                                    key={metric.label}
                                    variants={fadeUp}
                                    className="glass-card p-5 text-center hover-lift group"
                                >
                                    <metric.icon className="mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" size={24} />
                                    <div className="text-2xl md:text-3xl font-exo font-bold gradient-text mb-1">{metric.value}</div>
                                    <div className="text-xs text-text-muted font-mono uppercase tracking-wide">{metric.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Credibility-to-Conversion CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <a
                                href="mailto:anudeepsrib@gmail.com?subject=Speaking%20Inquiry"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                Invite Me to Speak / Teach
                                <span className="text-xs">→</span>
                            </a>
                            <a
                                href="/assets/speaker-kit.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                Download Speaker Kit / One-Pager
                                <span className="text-xs">→</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Mentoring Section */}
                    <motion.div
                        variants={stagger}
                        initial={reduceMotion ? 'show' : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <motion.div variants={fadeUp} className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-exo font-bold text-text-primary mb-3">Mentoring & Career Impact</h3>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                I guide learners and professionals through Great Learning, Topmate, ADPList, and global communities, helping them build strong foundations in AI, ML, data science, and cloud technologies.
                            </p>
                        </motion.div>

                        {/* Mentorship CTAs */}
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                See Mentoring Options
                                <span className="text-xs">→</span>
                            </a>
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                Book a Session
                                <span className="text-xs">→</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Testimonials */}
                    <motion.div
                        variants={stagger}
                        initial={reduceMotion ? 'show' : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 hover-lift relative"
                            >
                                <Quote className="absolute top-4 right-4 text-accent/20" size={32} />
                                <p className="text-sm text-text-secondary mb-4 leading-relaxed italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-[var(--accent-warm)] flex items-center justify-center text-[var(--bg-primary)] font-bold text-sm">
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-text-primary">{testimonial.author}</div>
                                        <div className="text-xs text-text-muted">{testimonial.source}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial={reduceMotion ? 'show' : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                    >
                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            See Mentoring Options
                            <span className="text-xs">→</span>
                        </a>
                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center justify-center gap-2"
                        >
                            Book a Session
                            <span className="text-xs">→</span>
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
