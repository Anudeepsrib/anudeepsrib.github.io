'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mic, Building2, BookOpen, Award, ExternalLink, TrendingUp } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

interface RecognitionItem {
    title: string;
    organization: string;
    description: string;
    link?: string;
    linkText?: string;
    link2?: string;
    linkText2?: string;
}

interface RecognitionGroup {
    category: string;
    description: string;
    icon: any;
    color: string;
    accentLight: string;
    accentDark: string;
    items: RecognitionItem[];
}

const recognitions: RecognitionGroup[] = [
    {
        category: "Invited Talks & Guest Lectures",
        description: "Expert speaking engagements at leading institutions and industry events",
        icon: Mic,
        color: "text-blue-400",
        accentLight: "bg-blue-400/10",
        accentDark: "border-blue-400/30",
        items: [
            {
                title: "Guest Speaker — Café Scientifique",
                organization: "Berlin School of Business and Innovation (BSBI)",
                description: "Expert panel discussion on AI and emerging technology trends for a global audience of industry leaders and academics.",
                link: "https://www.berlinsbi.com/events-and-webinars/cafe-scientifique/5th-cafe-scientifique",
                linkText: "View Event"
            },
            {
                title: "Resource Person — STTP on Machine Learning",
                organization: "IET On Campus, MBCET",
                description: "Delivered advanced technical sessions as part of a structured training program for researchers and engineering faculty.",
                link: "https://www.linkedin.com/posts/iet-mbcet_techinnovation-datascience-futureoftech-activity-7265386187622670336-t-GZ",
                linkText: "View Program"
            },
            {
                title: "Guest Lecturer — VIT",
                organization: "Vellore Institute of Technology",
                description: "Delivered invited lectures on 'Recent Trends in Software Tools' and 'Database Management Systems in Industry' bridging academia and enterprise practice.",
                link: "https://chennai.vit.ac.in/files/guestlecture2017.pdf",
                linkText: "View Announcement",
                link2: "https://chennai.vit.ac.in/files/VITCC-SCSE-Volume-7-Issue-4-October-2017.pdf",
                linkText2: "View Publication"
            }
        ]
    },
    {
        category: "Institutional Recognition & Accreditation",
        description: "Formal inclusion in university quality assurance and institutional reports",
        icon: Building2,
        color: "text-blue-300",
        accentLight: "bg-blue-300/10",
        accentDark: "border-blue-300/30",
        items: [
            {
                title: "Resource Person — UGC Academic Report",
                organization: "Mar Baselios College (MBCET)",
                description: "Official UGC report listing guest expertise contribution for the 2024–2025 academic cycle.",
                link: "https://mbcet.ac.in/wp-content/uploads/2025/11/UGC-Report_July-2024-June-2025.pdf",
                linkText: "View Report"
            },
            {
                title: "Mentor in NAAC Documentation",
                organization: "JECRC University",
                description: "Formal inclusion in institutional quality documentation (Criteria 5.3.3) for excellence in project mentorship and student guidance.",
                link: "https://jecrcuniversity.edu.in/aqar202021/Criteria%205/5.3.3.pdf",
                linkText: "View Documentation"
            },
            {
                title: "Invited Speaker — Program Records",
                organization: "P.V.P. Siddhartha Institute",
                description: "Consolidated records of talks on Big Data Analytics, Cloud Computing, and Recommendation Systems for engineering cohorts.",
                link: "https://www.pvpsiddhartha.ac.in/naac_2023/5.1.3.List%20of%20programs%28WW%29.pdf",
                linkText: "View Records"
            }
        ]
    },
    {
        category: "Research & Academic Publications",
        description: "Peer-reviewed contributions to academic research and professional literature",
        icon: BookOpen,
        color: "text-blue-200",
        accentLight: "bg-blue-200/10",
        accentDark: "border-blue-200/30",
        items: [
            {
                title: "Book Chapter — CRC Press",
                organization: "Taylor & Francis Group",
                description: "'Blueprint of IoT for Smart Cities' handbook contribution on sustainable development and technology infrastructure design.",
                link: "https://doi.org/10.1201/9781003225317",
                linkText: "View Publication"
            }
        ]
    }
];

const Recognitions = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="recognitions" className="py-24 relative overflow-hidden bg-obsidian-900">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-[128px] pointer-events-none" />

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
                        <Award size={18} className="text-blue-400" />
                        <span className="text-sm font-medium text-blue-300">Professional Recognition</span>
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-outfit text-white mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Recognitions & Impact
                        </span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        Recognized by leading institutions, universities, and research platforms for contributions to AI education, technical mentorship, and advancing the field of data science and machine learning.
                    </motion.p>
                </motion.div>

                {/* Recognition Categories */}
                <div className="space-y-20">
                    {recognitions.map((group, groupIdx) => (
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
                                            {/* Organization */}
                                            <p className="text-xs font-mono text-blue-300 uppercase tracking-widest mb-3">
                                                {item.organization}
                                            </p>

                                            {/* Title */}
                                            <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                                {item.title}
                                            </h4>
                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {item.description}
                                            </p>

                                            {/* Links */}
                                            <div className="flex flex-wrap gap-3">
                                                {item.link && (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 text-xs font-medium transition-all"
                                                    >
                                                        {item.linkText}
                                                        <ExternalLink size={14} className="opacity-70" />
                                                    </a>
                                                )}

                                                {item.link2 && (
                                                    <a
                                                        href={item.link2}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-300/10 hover:bg-blue-300/20 border border-blue-300/30 hover:border-blue-300/60 text-blue-200 hover:text-blue-100 text-xs font-medium transition-all"
                                                    >
                                                        {item.linkText2}
                                                        <ExternalLink size={14} className="opacity-70" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Recognition Highlights */}
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-16 border-t border-white/8"
                >
                    <h3 className="text-2xl font-bold text-white font-outfit mb-8">Recognition Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Award, label: "Speaking Engagements", value: "15+" },
                            { icon: Building2, label: "Partner Institutions", value: "20+" },
                            { icon: TrendingUp, label: "Academic Recognitions", value: "8+" }
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

export default Recognitions;
