'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, ExternalLink, Award, TrendingUp, Clock, Globe } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

interface MentorshipItem {
    title: string;
    organization: string;
    role: string;
    description: string;
    metrics?: string;
    link?: string;
    linkText?: string;
    highlights?: string[];
}

interface MentorshipGroup {
    category: string;
    description: string;
    icon: any;
    color: string;
    accentLight: string;
    accentDark: string;
    items: MentorshipItem[];
}

const mentorshipGroups: MentorshipGroup[] = [
    {
        category: "Industry & Fellowship Programs",
        description: "Guiding emerging talent through cutting-edge AI/ML projects at scale",
        icon: Briefcase,
        color: "text-blue-400",
        accentLight: "bg-blue-400/10",
        accentDark: "border-blue-400/30",
        items: [
            {
                title: "KaggleX Fellowship Program",
                organization: "Google / Kaggle",
                role: "Generative AI & ML Mentor",
                description: "Mentored Cohort 3 (ML) and Cohort 4 (GenAI), guiding fellows through Gemma fine-tuning and advanced model development.",
                metrics: "Cohorts 3 & 4",
                highlights: ["Gemma Model Fine-tuning", "GenAI Projects", "Real-world ML Applications"]
            },
            {
                title: "PGP in AI & Data Science",
                organization: "University of Texas at Austin",
                role: "Industry Mentor",
                description: "Mentored 132+ IT professionals through real-world AI case studies and industry best practices.",
                metrics: "132 Professionals",
                highlights: ["Case Study Leadership", "Industry Bridge", "4.76/5 Facilitator Rating"]
            }
        ]
    },
    {
        category: "Global 1-on-1 Mentorship",
        description: "Personalized career guidance and technical mentoring across continents",
        icon: Users,
        color: "text-blue-300",
        accentLight: "bg-blue-300/10",
        accentDark: "border-blue-300/30",
        items: [
            {
                title: "Topmate.io",
                organization: "Career & Technical Mentorship",
                role: "Senior Tech Mentor",
                description: "Mock interviews, resume reviews, and personalized career guidance for tech professionals across 5+ countries.",
                metrics: "500+ Minutes",
                link: "https://adplist.org/mentors/anudeep-sri-bathina",
                linkText: "Book a Session",
                highlights: ["Mock Interviews", "Resume Reviews", "Career Strategy"]
            },
            {
                title: "ADPList",
                organization: "Global Mentoring Community",
                role: "Design & Data Science Mentor",
                description: "Portfolio reviews and strategic career advice, recognized for 500+ minutes of global mentoring impact.",
                metrics: "500+ Minutes",
                link: "https://adplist.org/",
                linkText: "View Profile",
                highlights: ["Portfolio Reviews", "Career Advice", "Global Reach"]
            }
        ]
    },
    {
        category: "Academic & Institutional Programs",
        description: "Building strong foundations for next-generation technologists and data scientists",
        icon: GraduationCap,
        color: "text-blue-200",
        accentLight: "bg-blue-200/10",
        accentDark: "border-blue-200/30",
        items: [
            {
                title: "Graduate Teaching & Mentorship",
                organization: "University of Massachusetts Dartmouth",
                role: "Teaching Assistant",
                description: "Mentored graduate students in Advanced ML, Data Mining, and Java. Contributed to curriculum development.",
                metrics: "2021–2023",
                highlights: ["Advanced ML", "Data Mining", "Curriculum Development"]
            },
            {
                title: "Ed-Tech Instruction",
                organization: "Great Learning",
                role: "Data Science Instructor",
                description: "Guided cohorts through high-impact Big Data and Machine Learning projects with focus on real-world applications.",
                metrics: "2019–2021",
                highlights: ["Big Data Projects", "ML Mentorship", "Hands-on Learning"]
            },
            {
                title: "Community Educational Content",
                organization: "YouTube & Social Platforms",
                role: "Community Mentor",
                description: "Created resources assisting 350+ international students with US university transition and academic success.",
                metrics: "350+ Students",
                highlights: ["Transition Support", "US Education", "Student Success"]
            }
        ]
    }
];

const Mentorship = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="mentorship" className="py-24 relative overflow-hidden bg-obsidian-900">
            {/* Background Glows */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-8">
                        <Users size={18} className="text-blue-400" />
                        <span className="text-sm font-medium text-blue-300">Mentoring Global Talent</span>
                    </motion.div>
                    
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-outfit text-white mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Mentorship & Speaking
                        </span>
                    </motion.h2>
                    
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        Dedicated to advancing the next generation of AI engineers and data scientists through personalized mentoring, institutional partnerships, and real-world project guidance across universities, global platforms, and enterprise programs.
                    </motion.p>
                </motion.div>

                {/* Mentorship Categories */}
                <div className="space-y-20">
                    {mentorshipGroups.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIdx * 0.1 }}
                            className="relative"
                        >
                            {/* Category Header */}
                            <div className="mb-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.div
                                        className={`p-3 rounded-2xl ${group.accentLight} ${group.color} flex-shrink-0`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <group.icon size={28} />
                                    </motion.div>
                                    <div className="flex-grow">
                                        <h3 className="text-3xl font-bold text-white font-outfit mb-2">
                                            {group.category}
                                        </h3>
                                        <p className="text-gray-400 text-lg">{group.description}</p>
                                    </div>
                                </div>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-transparent" />
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {group.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        variants={fadeUp}
                                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/8 backdrop-blur-xl transition-all hover-lift"
                                    >
                                        {/* Gradient Background on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                        
                                        <div className="relative p-8">
                                            {/* Top Row: Organization & Metrics */}
                                            <div className="flex justify-between items-start gap-4 mb-4">
                                                <div className="flex-grow">
                                                    <p className="text-xs font-mono text-blue-300 uppercase tracking-widest mb-1">
                                                        {item.organization}
                                                    </p>
                                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                {item.metrics && (
                                                    <div className="flex-shrink-0 px-3 py-1 rounded-lg bg-blue-400/10 border border-blue-400/20 whitespace-nowrap">
                                                        <p className="text-xs font-semibold text-blue-300">{item.metrics}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Role */}
                                            <p className="text-sm font-semibold text-blue-200 mb-4">{item.role}</p>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {item.description}
                                            </p>

                                            {/* Highlights */}
                                            {item.highlights && (
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {item.highlights.map((highlight, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20"
                                                        >
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* CTA Link */}
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 text-sm font-medium transition-all"
                                                >
                                                    {item.linkText}
                                                    <ExternalLink size={16} className="opacity-70" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Summary */}
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-16 border-t border-white/8"
                >
                    <h3 className="text-2xl font-bold text-white font-outfit mb-8">Overall Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Users, label: "Mentees & Students", value: "1,000+" },
                            { icon: Globe, label: "Countries Reached", value: "7+" },
                            { icon: Clock, label: "Total Mentoring Hours", value: "500+" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/8 text-center hover-lift"
                            >
                                <stat.icon className="text-blue-400 mx-auto mb-3" size={32} />
                                <p className="text-3xl font-bold text-white font-outfit mb-2">{stat.value}</p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mentorship;
