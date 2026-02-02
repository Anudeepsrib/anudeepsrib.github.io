'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animation';

const Blog = () => {
    const blogLinks = [
        {
            title: "Substack",
            description: "Deep dives into AI architecture, system design, and industry trends.",
            url: "https://anudeepsri.substack.com/",
            publisher: "Substack",
            icon: BookOpen
        },
        {
            title: "Medium",
            description: "Technical articles, tutorials, and thought leadership on Generative AI.",
            url: "https://medium.com/@anudeepsri",
            publisher: "Medium",
            icon: BookOpen
        }
    ];

    const socialLinks = [
        {
            title: "Instagram",
            description: "AI insights, tech updates, and behind-the-scenes content.",
            url: "https://www.instagram.com/anudeep.ai/",
            icon: Instagram
        },
        {
            title: "YouTube",
            description: "Video tutorials, talks, and deep-dive sessions on AI systems.",
            url: "https://www.youtube.com/@AnudeepsriBathina",
            icon: Youtube
        }
    ];

    return (
        <section id="blog" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6 hover-lift">
                        <BookOpen className="text-accent" size={18} />
                        <span className="text-sm font-mono text-accent">Writing & Content</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-exo font-bold mb-6">
                        <span className="gradient-text">Blog & Insights</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Sharing knowledge on building production-grade AI systems, architecture decisions, and industry insights.
                    </motion.p>
                </motion.div>

                {/* Blog Links */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
                    {blogLinks.map((blog, index) => (
                        <motion.a
                            key={index}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card p-6 hover-lift cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-accent group-hover:bg-accent group-hover:text-[var(--bg-primary)] transition-colors">
                                    <blog.icon size={24} />
                                </div>
                                <ExternalLink className="text-text-muted group-hover:text-accent transition-colors" size={18} />
                            </div>

                            <h3 className="text-xl font-exo font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                                {blog.title}
                            </h3>
                            <div className="text-sm text-accent mb-3 font-mono">
                                {blog.publisher}
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {blog.description}
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto justify-center">
                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
                    <span className="text-sm font-mono text-text-muted uppercase tracking-wide">Also Follow</span>
                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
                </div>

                {/* Social Media Links */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card p-6 hover-lift cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-[var(--accent-warm)]/10 text-[var(--accent-warm)] group-hover:opacity-80 transition-opacity">
                                    <social.icon size={24} />
                                </div>
                                <ExternalLink className="text-text-muted group-hover:text-[var(--accent-warm)] transition-colors" size={18} />
                            </div>

                            <h3 className="text-xl font-exo font-bold text-text-primary mb-2 group-hover:text-[var(--accent-warm)] transition-colors">
                                {social.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {social.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
