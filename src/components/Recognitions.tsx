'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mic, Building2, BookOpen, Award, ExternalLink, TrendingUp, Presentation, HeartHandshake, School, Users } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

interface RecognitionItem {
    title: string;
    organization: string;
    description: string;
    link?: string;
    linkText?: string;
    link2?: string;
    linkText2?: string;
    date?: string;
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
        category: "University Lectures and Workshops",
        description: "Academic knowledge sharing across impactful university engagements",
        icon: School,
        color: "text-blue-400",
        accentLight: "bg-blue-400/10",
        accentDark: "border-blue-400/30",
        items: [
            {
                title: "Database Systems",
                organization: "VIT University, Chennai",
                description: "Guest lecture on modern database architectures and systems.",
                date: "October 25, 2017",
                link: "https://chennai.vit.ac.in/files/guestlecture2017.pdf",
                linkText: "View Announcement"
            },
            {
                title: "Image Analytics Using Computer Vision",
                organization: "VIT University, Vellore",
                description: "Deep dive into computer vision techniques and applications.",
                date: "September 25, 2019"
            },
            {
                title: "Applications of Software Computing Techniques",
                organization: "VIT University, Vellore",
                description: "Expert session on software computing methodologies.",
                date: "September 25, 2019"
            },
            {
                title: "Computer Architecture and Machine Learning",
                organization: "VIT University, Vellore",
                description: "Exploring the intersection of hardware architecture and ML algorithms.",
                date: "March 14, 2020"
            },
            {
                title: "Faculty Development Program: Big Data Analytics",
                organization: "VIT University, Vellore",
                description: "Training faculty members on big data tools and analytical frameworks.",
                date: "April 8, 2021"
            },
            {
                title: "Innovation in AI",
                organization: "VIT University, Amaravati, AP",
                description: "Talk on emerging trends and innovations in Artificial Intelligence.",
                date: "March 14, 2022"
            },
            {
                title: "Recommendation Systems",
                organization: "PVP Siddhartha",
                description: "Technical session on building and optimizing recommendation engines.",
                date: "March 28, 2022",
                link: "https://www.pvpsiddhartha.ac.in/naac_2023/5.1.3.List%20of%20programs%28WW%29.pdf",
                linkText: "View Records"
            },
            {
                title: "Guest Lecturer: Recent Trends in Software Tools",
                organization: "VIT University",
                description: "Delivered invited lectures bridging academia and enterprise practice.",
                link: "https://chennai.vit.ac.in/files/VITCC-SCSE-Volume-7-Issue-4-October-2017.pdf",
                linkText: "View Publication"
            }
        ]
    },
    {
        category: "Industry Panels and International Conferences",
        description: "Thought leadership at global stages and industry consortiums",
        icon: Mic,
        color: "text-purple-400",
        accentLight: "bg-purple-400/10",
        accentDark: "border-purple-400/30",
        items: [
            {
                title: "AI Talk Show Panelist",
                organization: "Jaipur",
                description: "Panel discussion on the future of AI and its societal impact.",
                date: "June 5, 2020"
            },
            {
                title: "Pie & AI: AI for Everyone",
                organization: "DeepLearning.ai, Lahore",
                description: "Community event fostering AI literacy and accessibility.",
                date: "September 26, 2020"
            },
            {
                title: "Guest Speaker: Cloud Computing Conference",
                organization: "Boussias, Greece",
                description: "International conference address on cloud technologies and scale.",
                date: "March 31, 2021"
            },
            {
                title: "AI in Business: Café Scientifique",
                organization: "Berlin School of Business and Innovation",
                description: "Expert panel on AI applications in modern business contexts.",
                date: "June 4, 2021",
                link: "https://www.berlinsbi.com/events-and-webinars/cafe-scientifique/5th-cafe-scientifique",
                linkText: "View Event"
            }
        ]
    },
    {
        category: "Training Programs and Expert Roles",
        description: "Professional training, curriculum development, and expert consultancy",
        icon: Presentation,
        color: "text-cyan-400",
        accentLight: "bg-cyan-400/10",
        accentDark: "border-cyan-400/30",
        items: [
            {
                title: "Data Science Instructor",
                organization: "Great Learning",
                description: "Mentored and trained professionals in data science methodologies.",
                date: "November 2019 to August 2021"
            },
            {
                title: "Cloud as a Service Training",
                organization: "Verzeo",
                description: "Specialized training on cloud service models and deployment.",
                date: "May 8, 2021"
            },
            {
                title: "Expert Examiner for Internship Programs",
                organization: "JECRC University",
                description: "External expert reviewing and assessing student internship projects.",
                date: "June 21, 2021",
                link: "https://jecrcuniversity.edu.in/aqar202021/Criteria%205/5.3.3.pdf",
                linkText: "View Documentation"
            },
            {
                title: "Feature Engineering Expert",
                organization: "Analytics Vidhya",
                description: "Session focused on advanced feature engineering techniques.",
                date: "August 19, 2022"
            },
            {
                title: "Big Data Training",
                organization: "Wiley",
                description: "Comprehensive training program on Big Data technologies.",
                date: "November 2022 to January 2023"
            },
            {
                title: "Generative AI Session",
                organization: "Analytics Vidhya",
                description: "Expert session on the rise and application of Generative AI.",
                date: "November 1, 2023"
            },
            {
                title: "Resource Person on Machine Learning",
                organization: "IET On Campus, MBCET",
                description: "Provided advanced technical training for researchers.",
                link: "https://www.linkedin.com/posts/iet-mbcet_techinnovation-datascience-futureoftech-activity-7265386187622670336-t-GZ",
                linkText: "View Program"
            },
            {
                title: "Legacy Resource Person — UGC Academic Report",
                organization: "Mar Baselios College (MBCET)",
                description: "Listed as guest expert in UGC 2024–2025 academic report.",
                link: "https://mbcet.ac.in/wp-content/uploads/2025/11/UGC-Report_July-2024-June-2025.pdf",
                linkText: "View Report"
            }
        ]
    },
    {
        category: "Mentorship & Advanced Instruction",
        description: "Guiding the next generation of data scientists and AI engineers",
        icon: HeartHandshake,
        color: "text-amber-400",
        accentLight: "bg-amber-400/10",
        accentDark: "border-amber-400/30",
        items: [
            {
                title: "Advanced Instructor",
                organization: "University of Massachusetts",
                description: "Taught Java, Advanced Java, Advanced Data Mining, and Advanced Machine Learning.",
                date: "2021 to 2023"
            },
            {
                title: "Machine Learning Mentor",
                organization: "Kaggle",
                description: "Mentoring aspiring data scientists in ML competitions and projects.",
                date: "2023"
            },
            {
                title: "Generative AI Mentor",
                organization: "Kaggle",
                description: "Guidance on state-of-the-art Generative AI techniques.",
                date: "2024"
            }
        ]
    },
    {
        category: "Publications & Authorship",
        description: "Contributions to academic literature and smart city governance",
        icon: BookOpen,
        color: "text-green-400",
        accentLight: "bg-green-400/10",
        accentDark: "border-green-400/30",
        items: [
            {
                title: "Co-author: Blueprint of IoT for Smart Cities",
                organization: "CRC Press",
                description: "Chapter in 'Handbook of Artificial Intelligence for Smart City Development: Management Systems and Technology Challenges'.",
                date: "2024",
                link: "https://doi.org/10.1201/9781003225317",
                linkText: "Read More"
            }
        ]
    }
];

const Recognitions = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="recognitions" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8 hover-lift">
                        <Award size={18} className="text-accent" />
                        <span className="text-sm font-mono text-accent">Professional Recognition</span>
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold text-text-primary mb-6 tracking-tight">
                        <span className="gradient-text">
                            Recognitions & Impact
                        </span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl leading-relaxed">
                        I am passionate about sharing my expertise in AI, data science, and cloud technologies. Through teaching, speaking engagements, and authorship, I’ve contributed to knowledge-sharing in academia, industry, and beyond. Here’s an overview of my teaching and professional engagements.
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
                                        className="p-3 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex-shrink-0"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <group.icon size={28} className="text-accent" />
                                    </motion.div>
                                    <div className="flex-grow">
                                        <h3 className="text-3xl font-exo font-bold text-text-primary mb-2">
                                            {group.category}
                                        </h3>
                                        <p className="text-text-secondary text-lg">{group.description}</p>
                                    </div>
                                </div>
                                <div className="h-px w-20 bg-gradient-to-r from-accent to-transparent" />
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {group.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        variants={fadeUp}
                                        className="group glass-card transition-all hover-lift"
                                    >
                                        {/* Gradient Background on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />

                                        <div className="relative p-8">
                                            <div className="flex justify-between items-start mb-3">
                                                {/* Organization */}
                                                <p className="text-xs font-mono text-[var(--accent-warm)] uppercase tracking-widest font-bold">
                                                    {item.organization}
                                                </p>
                                                {item.date && (
                                                    <p className="text-xs font-mono text-text-muted">
                                                        {item.date}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h4 className="text-2xl font-exo font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h4>
                                            {/* Description */}
                                            <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                                {item.description}
                                            </p>

                                            {/* Links */}
                                            <div className="flex flex-wrap gap-3">
                                                {item.link && (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-secondary text-xs py-2 px-3 inline-flex items-center gap-2"
                                                    >
                                                        {item.linkText || "View Details"}
                                                        <ExternalLink size={14} className="opacity-70" />
                                                    </a>
                                                )}

                                                {item.link2 && (
                                                    <a
                                                        href={item.link2}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-secondary text-xs py-2 px-3 inline-flex items-center gap-2"
                                                    >
                                                        {item.linkText2 || "View"}
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
                    className="mt-24 pt-16 border-t border-[var(--border-subtle)]"
                >
                    <h3 className="text-2xl font-exo font-bold text-text-primary mb-8">Recognition Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Award, label: "Speaking Engagements", value: "20+" },
                            { icon: Building2, label: "Partner Institutions", value: "15+" },
                            { icon: TrendingUp, label: "Students Mentored", value: "500+" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-6 text-center hover-lift"
                            >
                                <stat.icon className="text-accent mx-auto mb-3" size={32} />
                                <p className="text-3xl font-exo font-bold text-accent mb-2">{stat.value}</p>
                                <p className="text-text-secondary text-sm font-mono">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Recognitions;
