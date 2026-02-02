'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, ExternalLink, Globe, Star, Quote, ChevronRight, Award } from 'lucide-react';
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

interface MentorshipCategory {
    id: number;
    category: string;
    description: string;
    icon: any;
    gradient: string;
    items: MentorshipItem[];
}

const mentorshipGroups: MentorshipCategory[] = [
    {
        id: 1,
        category: "Industry & Fellowship Programs",
        description: "Guiding emerging talent through cutting-edge AI/ML projects at scale",
        icon: Briefcase,
        gradient: "from-blue-500 to-cyan-400",
        items: [
            {
                title: "KaggleX Fellowship Program",
                organization: "Google / Kaggle",
                role: "Generative AI & ML Mentor",
                description: "Mentored Cohort 3 (ML) and Cohort 4 (GenAI), guiding fellows through Gemma fine-tuning and advanced model development.",
                metrics: "Cohorts 3 & 4",
                highlights: ["Gemma Model Fine-tuning", "GenAI Projects", "Real-world ML"]
            },
            {
                title: "PGP in AI & Data Science",
                organization: "University of Texas at Austin",
                role: "Industry Mentor",
                description: "Mentored 132+ IT professionals through real-world AI case studies and industry best practices.",
                metrics: "132+ Professionals",
                highlights: ["Case Study Leadership", "Industry Bridge", "4.76/5 Rating"]
            }
        ]
    },
    {
        id: 2,
        category: "Global 1-on-1 Mentorship",
        description: "Personalized career guidance and technical mentoring across continents",
        icon: Users,
        gradient: "from-purple-500 to-pink-400",
        items: [
            {
                title: "ADPList",
                organization: "Global Mentoring Community",
                role: "Design & Data Science Mentor",
                description: "Portfolio reviews and strategic career advice, recognized for 500+ minutes of global mentoring impact.",
                metrics: "500+ Minutes",
                link: "https://adplist.org/mentors/anudeep-sri-bathina",
                linkText: "View Profile",
                highlights: ["Portfolio Reviews", "Career Advice", "Global Reach"]
            },
            {
                title: "Topmate.io",
                organization: "Career & Technical Mentorship",
                role: "Senior Tech Mentor",
                description: "Mock interviews, resume reviews, and personalized career guidance for tech professionals across 5+ countries.",
                metrics: "70+ Sessions",
                link: "https://topmate.io/anudeepsrib",
                linkText: "Book a Session",
                highlights: ["Mock Interviews", "Resume Reviews", "Career Strategy"]
            }
        ]
    },
    {
        id: 3,
        category: "Academic & Educational",
        description: "Building strong foundations for next-generation technologists",
        icon: GraduationCap,
        gradient: "from-amber-500 to-orange-400",
        items: [
            {
                title: "Graduate Teaching & Mentorship",
                organization: "UMass Dartmouth",
                role: "Teaching Assistant",
                description: "Mentored graduate students in Advanced ML, Data Mining, and Java. Contributed to curriculum development.",
                metrics: "2021–2023",
                highlights: ["Advanced ML", "Data Mining", "Curriculum Dev"]
            },
            {
                title: "Data Science Instruction",
                organization: "Great Learning",
                role: "Instructor & Mentor",
                description: "Guided cohorts through Big Data and Machine Learning projects with 4.76/5 rating.",
                metrics: "316 Hours",
                highlights: ["Big Data", "ML Projects", "4.76/5 Rating"]
            },
            {
                title: "Community Educational Content",
                organization: "YouTube & Social Platforms",
                role: "Community Mentor",
                description: "Created resources assisting 350+ international students with US university transition.",
                metrics: "350+ Students",
                highlights: ["Transition Support", "US Education", "Student Success"]
            }
        ]
    }
];

const testimonials = [
    {
        quote: "Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial.",
        author: "Michael",
        role: "Freelance Developer",
        source: "ADPList"
    },
    {
        quote: "Extremely insightful discussion. His depth of knowledge in Data and AI is evident.",
        author: "Shashank H.V.",
        role: "UMass Dartmouth",
        source: "Topmate"
    },
    {
        quote: "His tailored advice on skills and interviews was practical and insightful. Highly recommended!",
        author: "Baran Khazaee",
        role: "UC Davis",
        source: "ADPList"
    }
];

const Mentorship = () => {
    const reduceMotion = useReducedMotion();

    // Impact stats
    const stats = [
        { value: "1000+", label: "Learners Mentored" },
        { value: "20+", label: "Countries" },
        { value: "4.76", label: "Avg Rating" },
        { value: "500+", label: "Mentoring Hours" }
    ];

    return (
        <section className="py-24 pt-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-warm)]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <Users className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Global Mentorship</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-exo font-bold mb-6 tracking-tight">
                        <span className="gradient-text">Mentoring Excellence</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Empowering the next generation of AI practitioners through personalized guidance,
                        industry mentorship, and educational programs worldwide.
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

                {/* Mentorship Categories */}
                <div className="space-y-20">
                    {mentorshipGroups.map((category) => {
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
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} p-[2px]`}>
                                        <div className="w-full h-full rounded-xl bg-[var(--bg-primary)] flex items-center justify-center">
                                            <Icon size={28} className="text-text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-exo font-bold text-text-primary">
                                            {category.category}
                                        </h2>
                                        <p className="text-text-muted text-sm">{category.description}</p>
                                    </div>
                                </motion.div>

                                {/* Items */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {category.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={itemIndex}
                                            variants={fadeUp}
                                            transition={{ delay: itemIndex * 0.1 }}
                                            className="glass-card p-6 hover-lift group"
                                        >
                                            {/* Header Row */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-exo font-bold text-text-primary group-hover:text-accent transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-accent text-sm font-medium">
                                                        {item.organization}
                                                    </p>
                                                </div>
                                                {item.metrics && (
                                                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r ${category.gradient} text-white whitespace-nowrap`}>
                                                        {item.metrics}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Role Badge */}
                                            <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 mb-3">
                                                <Award size={12} className="text-accent" />
                                                <span className="text-xs font-mono text-accent">{item.role}</span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            {/* Highlights */}
                                            {item.highlights && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {item.highlights.map((highlight, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 text-xs font-mono rounded bg-[var(--bg-secondary)] text-text-muted border border-[var(--border-subtle)]"
                                                        >
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Link */}
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm font-mono text-accent hover:gap-2 transition-all"
                                                >
                                                    {item.linkText || "View"}
                                                    <ChevronRight size={14} />
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Testimonials Section */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <motion.div variants={fadeUp} className="text-center mb-12">
                        <h2 className="text-3xl font-exo font-bold text-text-primary mb-2">
                            What Mentees Say
                        </h2>
                        <p className="text-text-muted">Real feedback from mentoring sessions</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 hover-lift relative"
                            >
                                <Quote className="absolute top-4 right-4 text-accent/20" size={32} />
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed italic mb-4">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-[var(--accent-warm)] flex items-center justify-center text-white font-bold text-sm">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-text-primary font-medium text-sm">{testimonial.author}</p>
                                        <p className="text-text-muted text-xs">{testimonial.role} • {testimonial.source}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeUp}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="glass-card p-8 text-center max-w-3xl mx-auto">
                        <Globe className="mx-auto text-accent mb-4" size={40} />
                        <h3 className="text-2xl font-exo font-bold text-text-primary mb-3">
                            Ready to Level Up Your Career?
                        </h3>
                        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                            Book a 1-on-1 session for career guidance, technical mentoring,
                            resume reviews, or mock interviews.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                Book on ADPList
                                <ExternalLink size={16} />
                            </a>
                            <a
                                href="https://topmate.io/anudeepsrib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                Book on Topmate
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mentorship;
