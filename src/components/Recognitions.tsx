'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mic, BookOpen, Award, ExternalLink, School, Globe, Sparkles, Calendar, MapPin } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

interface RecognitionItem {
    title: string;
    organization: string;
    description: string;
    link?: string;
    linkText?: string;
    date?: string;
    location?: string;
}

interface RecognitionCategory {
    id: number;
    category: string;
    description: string;
    icon: any;
    gradient: string;
    items: RecognitionItem[];
}

const recognitions: RecognitionCategory[] = [
    {
        id: 1,
        category: "University Lectures",
        description: "Academic knowledge sharing across prestigious institutions",
        icon: School,
        gradient: "from-blue-500 to-cyan-400",
        items: [
            {
                title: "Classification Models in ML",
                organization: "IET MBCET - STTP Program",
                description: "Hands-on session on supervised learning fundamentals.",
                date: "December 2024",
                link: "https://www.linkedin.com/posts/iet-mbcet_techinnovation-datascience-futureoftech-activity-7265386187622670336-t-GZ",
                linkText: "View Event"
            },
            {
                title: "Recommendation Systems",
                organization: "PVP Siddhartha Institute",
                description: "Technical session on building recommendation engines.",
                date: "March 2022",
                link: "https://www.pvpsiddhartha.ac.in/naac_2023/5.1.3.List%20of%20programs%28WW%29.pdf",
                linkText: "View Records"
            },
            {
                title: "Innovation in AI",
                organization: "VIT University, Amaravati",
                description: "Talk on emerging trends in Artificial Intelligence.",
                date: "March 2022"
            },
            {
                title: "Big Data Analytics FDP",
                organization: "VIT University, Vellore",
                description: "Faculty development program on big data tools.",
                date: "April 2021"
            },
            {
                title: "Computer Vision & ML",
                organization: "VIT University, Vellore",
                description: "Exploring intersection of hardware architecture and ML.",
                date: "March 2020"
            },
            {
                title: "Database Systems",
                organization: "VIT University, Chennai",
                description: "Guest lecture on modern database architectures.",
                date: "October 2017",
                link: "https://chennai.vit.ac.in/files/guestlecture2017.pdf",
                linkText: "View Announcement"
            }
        ]
    },
    {
        id: 2,
        category: "International Conferences",
        description: "Thought leadership at global stages",
        icon: Mic,
        gradient: "from-purple-500 to-pink-400",
        items: [
            {
                title: "AI in Business: Café Scientifique",
                organization: "Berlin School of Business & Innovation",
                description: "Invited speaker/panelist for AI in business applications.",
                date: "June 2021",
                location: "Berlin, Germany",
                link: "https://www.berlinsbi.com/events-and-webinars/cafe-scientifique/5th-cafe-scientifique",
                linkText: "View Event"
            },
            {
                title: "Cloud Computing Conference",
                organization: "Boussias Communications",
                description: "International conference on cloud technologies at scale.",
                date: "March 2021",
                location: "Greece"
            },
            {
                title: "Pie & AI: AI for Everyone",
                organization: "DeepLearning.AI",
                description: "Community event fostering AI literacy and accessibility.",
                date: "September 2020",
                location: "Lahore (Virtual)"
            },
            {
                title: "AI Talk Show Panel",
                organization: "Industry Consortium",
                description: "Panel discussion on the future of AI and its societal impact.",
                date: "June 2020",
                location: "Jaipur, India"
            }
        ]
    },
    {
        id: 3,
        category: "Publications & Research",
        description: "Contributing to the body of knowledge in AI/ML",
        icon: BookOpen,
        gradient: "from-amber-500 to-orange-400",
        items: [
            {
                title: "Transfer Learning for Groundfish Recognition",
                organization: "UMass Dartmouth (Thesis)",
                description: "Cross-database recognition using YOLOv8 & ResNet50, achieving 94.10% mAP.",
                date: "2024",
                link: "https://doi.org/10.62791/20352",
                linkText: "View Thesis"
            },
            {
                title: "Blueprint of IoT for Smart Cities",
                organization: "CRC Press / Taylor & Francis",
                description: "Handbook chapter on IoT blueprinting for emerging markets.",
                date: "2024",
                link: "https://doi.org/10.1201/9781003225317",
                linkText: "View Publication"
            }
        ]
    },
    {
        id: 4,
        category: "Awards & Recognition",
        description: "Industry acknowledgment for impact and innovation",
        icon: Award,
        gradient: "from-emerald-500 to-teal-400",
        items: [
            {
                title: "RISE Award",
                organization: "AT&T",
                description: "Recognized for significant innovation and impact in AI systems.",
                date: "2025"
            },
            {
                title: "KaggleX Fellowship Mentor",
                organization: "Google / Kaggle",
                description: "Selected as mentor for Cohorts 3 (ML) and 4 (GenAI).",
                date: "2023-2024"
            }
        ]
    }
];

const Recognitions = () => {
    const reduceMotion = useReducedMotion();

    // Stats for hero section
    const stats = [
        { value: "18+", label: "Speaking Engagements" },
        { value: "7", label: "Countries Reached" },
        { value: "2", label: "Publications" },
        { value: "5+", label: "Universities" }
    ];

    return (
        <section className="py-24 pt-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[var(--accent-warm)]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <Sparkles className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Recognition & Impact</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-exo font-bold mb-6 tracking-tight">
                        <span className="gradient-text">Global Recognitions</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Speaking engagements, publications, and industry recognition across
                        universities, conferences, and global AI communities.
                    </motion.p>
                </motion.div>

                {/* Stats Banner */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="glass-card p-6 text-center hover-lift"
                        >
                            <div className="text-3xl md:text-4xl font-exo font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <p className="text-text-muted text-sm font-mono uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Recognition Categories */}
                <div className="space-y-16">
                    {recognitions.map((category, catIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                variants={stagger}
                                initial={reduceMotion ? 'show' : 'hidden'}
                                whileInView="show"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Category Header */}
                                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-[2px]`}>
                                        <div className="w-full h-full rounded-xl bg-[var(--bg-primary)] flex items-center justify-center">
                                            <Icon size={24} className="text-text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-exo font-bold text-text-primary">
                                            {category.category}
                                        </h2>
                                        <p className="text-text-muted text-sm">{category.description}</p>
                                    </div>
                                </motion.div>

                                {/* Items Grid */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {category.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={itemIndex}
                                            variants={fadeUp}
                                            transition={{ delay: itemIndex * 0.05 }}
                                            className="glass-card p-6 hover-lift group cursor-pointer"
                                        >
                                            {/* Date Badge */}
                                            {item.date && (
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono bg-gradient-to-r ${category.gradient} text-white`}>
                                                        <Calendar size={12} />
                                                        {item.date}
                                                    </span>
                                                    {item.location && (
                                                        <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                                                            <MapPin size={12} />
                                                            {item.location}
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h3 className="text-lg font-exo font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h3>

                                            {/* Organization */}
                                            <p className="text-accent text-sm font-medium mb-2">
                                                {item.organization}
                                            </p>

                                            {/* Description */}
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            {/* Link */}
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm font-mono text-accent hover:gap-2 transition-all"
                                                >
                                                    {item.linkText || "View"}
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeUp}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="glass-card p-8 max-w-2xl mx-auto">
                        <Globe className="mx-auto text-accent mb-4" size={32} />
                        <h3 className="text-xl font-exo font-bold text-text-primary mb-2">
                            Invite Me to Speak
                        </h3>
                        <p className="text-text-secondary text-sm mb-6">
                            Available for guest lectures, panels, and workshops on AI/ML, Data Science, and Production Systems.
                        </p>
                        <a
                            href="mailto:anudeepsrib@gmail.com?subject=Speaking%20Inquiry"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Get in Touch
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Recognitions;
