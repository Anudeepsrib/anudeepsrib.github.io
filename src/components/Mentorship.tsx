'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, ExternalLink, Award, Mic, MessageSquare, Video } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

interface MentorshipItem {
    title: string;
    organization: string;
    role: string;
    description: string;
    metrics?: string;
    link?: string;
    linkText?: string;
}

interface MentorshipGroup {
    category: string;
    icon: any;
    color: string;
    accent: string;
    glow: string;
    items: MentorshipItem[];
}

const mentorshipGroups: MentorshipGroup[] = [
    {
        category: "Industry & Fellowship Mentorship",
        icon: Briefcase,
        color: "text-gold-glow",
        accent: "bg-gold-glow/10",
        glow: "shadow-[0_0_30px_rgba(255,215,0,0.15)]",
        items: [
            {
                title: "KaggleX Fellowship Program",
                organization: "Google / Kaggle",
                role: "Mentor (Generative AI & Machine Learning)",
                description: "Mentored Cohort 3 (ML) and Cohort 4 (GenAI). Guided fellows in building projects like fine-tuning Gemma models for chatbots.",
                metrics: "Cohorts 3 & 4 | Gemma Fine-tuning Focus"
            },
            {
                title: "University of Texas at Austin",
                organization: "PGP in AI & Data Science",
                role: "Industry Mentor",
                description: "Mentored 132 IT professionals through real-time AI case studies. Facilitator rating: 4.76/5. Bridging concepts to industry apps.",
                metrics: "132 Professionals | 306 Instructional Hours"
            }
        ]
    },
    {
        category: "1-on-1 Mentorship Platforms",
        icon: Users,
        color: "text-royal-glow",
        accent: "bg-royal-glow/10",
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
        items: [
            {
                title: "Topmate.io",
                organization: "Career Mentorship Service",
                role: "Senior Tech Mentor",
                description: "Mock Interviews, Resume Reviews, and career guidance. Dedicated 500+ minutes to students across 5+ countries.",
                link: "https://topmate.io/anudeepsri",
                linkText: "View Sessions",
                metrics: "500+ Minutes | 5+ Countries"
            },
            {
                title: "ADPList",
                organization: "Global Tech Community",
                role: "Design & Data Science Mentor",
                description: "Portfolio reviews and career advice for data scientists. Recognized for 500+ minutes of global impact.",
                link: "https://adplist.org/",
                linkText: "Mentor Profile",
                metrics: "500+ Minutes | Global Scope"
            }
        ]
    },
    {
        category: "Academic & Educational Mentorship",
        icon: GraduationCap,
        color: "text-success",
        accent: "bg-success/10",
        glow: "shadow-[0_0_30px_rgba(24,201,100,0.15)]",
        items: [
            {
                title: "University of Massachusetts",
                organization: "UMass Dartmouth (2021–2023)",
                role: "Teaching Assistant & Mentor",
                description: "Advanced Machine Learning, Data Mining, and Java. Curriculum development and personalized graduate feedback.",
                metrics: "Graduate Teaching | AI & Data Mining"
            },
            {
                title: "Study Abroad Community",
                organization: "YouTube/Social Educational Resource",
                role: "Community Mentor",
                description: "Created resources and video content assisting transition to US university life and American education system.",
                metrics: "350+ Students | US Transition Support"
            },
            {
                title: "Great Learning",
                organization: "Ed-Tech Platform (2019-2021)",
                role: "Data Science Instructor",
                description: "Mentored instructional groups on high-impact Big Data and Machine Learning projects.",
                metrics: "Big Data | ML Projects"
            }
        ]
    }
];

const Mentorship = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="mentorship" className="py-24 relative overflow-hidden bg-obsidian-900">
            {/* Background Glows */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-glow/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-glow/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <Users size={16} className="text-gold-glow" />
                        <span className="text-sm font-medium text-gray-400">Mentoring Global Talent</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-6 tracking-tight">
                        Speaking & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow via-white to-gold-shimmer">
                            Mentorship Impact
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Invited speaker and industry mentor across universities, global education platforms, and enterprise programs, with work referenced in institutional reports and publications.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {mentorshipGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="relative">
                            <div className="flex items-center gap-4 mb-10">
                                <div className={`p-3 rounded-2xl ${group.accent} ${group.color}`}>
                                    <group.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white font-outfit uppercase tracking-wider">{group.category}</h3>
                                <div className="flex-grow h-px bg-white/10" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        variants={fadeUp}
                                        viewport={{ once: true }}
                                        className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 ${group.glow}`}
                                    >
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <p className={`text-xs font-mono ${group.color} uppercase tracking-widest`}>
                                                    {item.organization}
                                                </p>
                                                {item.metrics && (
                                                    <span className="text-[10px] text-gray-500 font-mono border border-white/10 px-2 py-0.5 rounded-full">
                                                        {item.metrics}
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-shimmer transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm font-medium text-gray-300 mb-4">{item.role}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {item.description}
                                            </p>

                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
                                                >
                                                    {item.linkText}
                                                    <ExternalLink size={14} className="opacity-50" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentorship;
