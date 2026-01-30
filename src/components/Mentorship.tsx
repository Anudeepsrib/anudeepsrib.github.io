'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, GraduationCap, Briefcase, ExternalLink, Globe, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
    items: MentorshipItem[];
}

const mentorshipGroups: MentorshipGroup[] = [
    {
        category: "Industry & Fellowship Programs",
        description: "Guiding emerging talent through cutting-edge AI/ML projects at scale",
        icon: Briefcase,
        color: "text-blue-400",
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
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const underlineRef = useRef<HTMLDivElement>(null);
    const groupsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Title Animation: Slides in from left
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                { x: '-8vw', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }

        // Accent underline scales from scaleX: 0
        if (underlineRef.current) {
            gsap.fromTo(underlineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }

        // Card Stagger Reveal
        const cards = gsap.utils.toArray('.mentorship-card');

        cards.forEach((card: any, index) => {
            gsap.fromTo(card,
                { y: '10vh', opacity: 0, rotateX: 8 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        });

    }, { scope: sectionRef });

    return (
        <section id="mentorship" ref={sectionRef} className="py-24 relative overflow-hidden bg-navy-950">
            {/* Background Glows */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-seafoam/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={titleRef} className="mb-24 opacity-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/10 border border-seafoam/20 mb-8">
                        <Users size={18} className="text-seafoam" />
                        <span className="text-sm font-mono text-seafoam">Human Intelligence Network</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold font-syne text-offwhite mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam to-cyan-200">
                            Mentorship & Speaking
                        </span>
                    </h2>

                    <div ref={underlineRef} className="h-1 w-32 bg-seafoam origin-left" />

                    <p className="text-xl text-coolgray max-w-3xl leading-relaxed font-light mt-8">
                        Advancing the next generation of AI engineers through personalized mentoring and institutional partnerships.
                    </p>
                </div>

                {/* Mentorship Categories */}
                <div ref={groupsRef} className="space-y-20">
                    {mentorshipGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="relative">
                            {/* Category Header */}
                            <div className="mb-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-none bg-seafoam/10 border border-seafoam/30 flex-shrink-0`}>
                                        <group.icon size={28} className="text-seafoam" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-3xl font-bold text-offwhite font-syne mb-2">
                                            {group.category}
                                        </h3>
                                        <p className="text-coolgray text-lg font-light">{group.description}</p>
                                    </div>
                                </div>
                                <div className="h-px w-20 bg-gradient-to-r from-seafoam to-transparent" />
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {group.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="mentorship-card group relative overflow-hidden rounded-none bg-navy-900 border border-white/5 hover:border-seafoam/50 backdrop-blur-xl transition-all opacity-0"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Gradient Background on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-seafoam/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                        <div className="relative p-8">
                                            {/* Top Row: Organization & Metrics */}
                                            <div className="flex justify-between items-start gap-4 mb-4">
                                                <div className="flex-grow">
                                                    <p className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1 font-bold">
                                                        {item.organization}
                                                    </p>
                                                    <h4 className="text-2xl font-bold text-offwhite mb-2 group-hover:text-seafoam transition-colors font-syne">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                {item.metrics && (
                                                    <div className="flex-shrink-0 px-3 py-1 rounded-none bg-amber-500/10 border border-amber-500/20 whitespace-nowrap">
                                                        <p className="text-xs font-mono font-bold text-amber-500">{item.metrics}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Role */}
                                            <p className="text-sm font-semibold text-seafoam/80 mb-4 font-mono">{item.role}</p>

                                            {/* Description */}
                                            <p className="text-coolgray text-sm leading-relaxed mb-6 font-light">
                                                {item.description}
                                            </p>

                                            {/* Highlights */}
                                            {item.highlights && (
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {item.highlights.map((highlight, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2.5 py-1 text-xs font-mono font-medium rounded-none bg-seafoam/5 text-seafoam border border-seafoam/10"
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
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-seafoam/10 hover:bg-seafoam/20 border border-seafoam/30 hover:border-seafoam/60 text-seafoam hover:text-cyan-200 text-sm font-mono font-medium transition-all uppercase tracking-wide"
                                                >
                                                    {item.linkText}
                                                    <ExternalLink size={16} className="opacity-70" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Impact Summary */}
                <div className="mt-24 pt-16 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-offwhite font-syne mb-8">Overall Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Users, label: "Mentees & Students", value: "1,000+" },
                            { icon: Globe, label: "Countries Reached", value: "7+" },
                            { icon: Clock, label: "Total Mentoring Hours", value: "500+" }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="mentorship-card p-6 rounded-none bg-white/5 border border-white/8 text-center hover-lift hover:border-seafoam/30 transition-colors opacity-0"
                            >
                                <stat.icon className="text-seafoam mx-auto mb-3" size={32} />
                                <p className="text-3xl font-bold text-offwhite font-syne mb-2">{stat.value}</p>
                                <p className="text-coolgray text-sm font-mono">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mentorship;
