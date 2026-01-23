'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Building2, BookOpen, Users, ExternalLink, FileText, Award } from 'lucide-react';

const recognitions = [
    {
        category: "Invited Talks & Lectures",
        icon: Mic,
        color: "text-gold-glow",
        accent: "bg-gold-glow/10",
        glow: "shadow-[0_0_30px_rgba(255,215,0,0.15)]",
        items: [
            {
                title: "Guest Speaker — Café Scientifique",
                organization: "Berlin School of Business and Innovation (BSBI)",
                description: "Expert panel discussion on AI and emerging technology trends for a global audience.",
                link: "https://www.berlinsbi.com/events-and-webinars/cafe-scientifique/5th-cafe-scientifique",
                linkText: "View Event Info"
            },
            {
                title: "Resource Person — STTP on Machine Learning",
                organization: "IET On Campus, MBCET",
                description: "Delivered advanced technical sessions as part of a structured training program for researchers.",
                link: "https://www.linkedin.com/posts/iet-mbcet_techinnovation-datascience-futureoftech-activity-7265386187622670336-t-GZ",
                linkText: "View Program Post"
            }
        ]
    },
    {
        category: "Institutional Recognitions",
        icon: Building2,
        color: "text-royal-glow",
        accent: "bg-royal-glow/10",
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
        items: [
            {
                title: "Resource Person — UGC Academic Report",
                organization: "Mar Baselios College (MBCET)",
                description: "Official UGC report listing guest expertise contribution for the 2024–2025 cycle.",
                link: "https://mbcet.ac.in/wp-content/uploads/2025/11/UGC-Report_July-2024-June-2025.pdf",
                linkText: "View official Report"
            },
            {
                title: "Mentor Mention — NAAC Documentation",
                organization: "JECRC University",
                description: "Formal inclusion in institutional quality documentation for excellence in project mentorship.",
                link: "https://jecrcuniversity.edu.in/aqar202021/Criteria%205/5.3.3.pdf",
                linkText: "View Documentation"
            },
            {
                title: "Invited Speaker — Program Records",
                organization: "PVPSIT Institute",
                description: "Consolidated records of talks on Big Data, Cloud, and Recommendation Systems.",
                link: "https://www.pvpsiddhartha.ac.in/naac_2023/5.1.3.List%20of%20programs%28WW%29.pdf",
                linkText: "View Records"
            }
        ]
    },
    {
        category: "Publications & Research",
        icon: BookOpen,
        color: "text-success",
        accent: "bg-success/10",
        glow: "shadow-[0_0_30px_rgba(24,201,100,0.15)]",
        items: [
            {
                title: "Book Chapter — CRC Press",
                organization: "Taylor & Francis Group",
                description: "Contributed to 'Blueprint of IoT for Smart Cities' handbook on sustainable development.",
                link: "https://doi.org/10.1201/9781003225317",
                linkText: "View Publication"
            }
        ]
    }
];

const Recognitions = () => {
    return (
        <section id="recognitions" className="py-24 relative overflow-hidden bg-obsidian-900">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-glow/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-glow/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <Award size={16} className="text-gold-glow" />
                        <span className="text-sm font-medium text-gray-400">Authority & Influence</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-6 tracking-tight">
                        Recognitions & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow via-white to-gold-shimmer">
                            Professional Impact
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        A collection of invited talks, institutional mentions, and research contributions across global platforms and universities.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {recognitions.map((group, groupIdx) => (
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
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: itemIdx * 0.1 }}
                                        className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 ${group.glow}`}
                                    >
                                        <div className="relative z-10">
                                            <p className={`text-xs font-mono mb-4 ${group.color} uppercase tracking-widest`}>
                                                {item.organization}
                                            </p>
                                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gold-shimmer transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {item.description}
                                            </p>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
                                            >
                                                {item.linkText}
                                                <ExternalLink size={14} className="opacity-50" />
                                            </a>
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

export default Recognitions;
