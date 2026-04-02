'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';

const blogLinks = [
    {
        title: 'Substack',
        description: 'Architecture deep dives and industry analysis.',
        url: 'https://anudeepsri.substack.com/',
    },
    {
        title: 'Medium',
        description: 'Technical articles and GenAI tutorials.',
        url: 'https://medium.com/@anudeepsri',
    },
];

const socialLinks = [
    {
        title: 'Instagram',
        description: 'AI insights and behind-the-scenes.',
        url: 'https://www.instagram.com/anudeep.ai/',
    },
    {
        title: 'YouTube',
        description: 'Video tutorials and deep-dive sessions.',
        url: 'https://www.youtube.com/@AnudeepsriBathina',
    },
];

const card = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Blog() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <section id="blog" className="py-24 relative pt-32 md:pt-40">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={heroRef} className="mb-16">
                    <motion.h1
                        className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Writing
                    </motion.h1>
                    <motion.p
                        className="text-[15px] text-[var(--text-2)] max-w-md"
                        initial={{ opacity: 0, y: 15 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Knowledge sharing on production AI systems and architecture decisions.
                    </motion.p>
                </div>

                {/* Blog Links */}
                <StaggerContainer className="grid md:grid-cols-2 gap-4 max-w-3xl mb-14">
                    {blogLinks.map((blog) => (
                        <motion.a
                            key={blog.title}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={card}
                            className="glass-card p-5 flex justify-between items-start group"
                        >
                            <div>
                                <h3 className="text-sm font-display font-semibold text-[var(--text)] group-hover:text-[var(--blue)] transition-colors mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-[13px] text-[var(--text-2)]">
                                    {blog.description}
                                </p>
                            </div>
                            <ArrowUpRight size={14} className="text-[var(--text-3)] group-hover:text-[var(--text-2)] transition-colors flex-shrink-0 mt-0.5" />
                        </motion.a>
                    ))}
                </StaggerContainer>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-10 max-w-3xl">
                    <div className="h-px flex-grow bg-[var(--border)]" />
                    <span className="text-[11px] font-mono text-[var(--text-3)]">Also</span>
                    <div className="h-px flex-grow bg-[var(--border)]" />
                </div>

                {/* Social */}
                <StaggerContainer className="grid md:grid-cols-2 gap-4 max-w-3xl">
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.title}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={card}
                            className="glass-card p-5 flex justify-between items-start group"
                        >
                            <div>
                                <h3 className="text-sm font-display font-semibold text-[var(--text)] group-hover:text-[var(--warm)] transition-colors mb-1">
                                    {social.title}
                                </h3>
                                <p className="text-[13px] text-[var(--text-2)]">
                                    {social.description}
                                </p>
                            </div>
                            <ArrowUpRight size={14} className="text-[var(--text-3)] group-hover:text-[var(--text-2)] transition-colors flex-shrink-0 mt-0.5" />
                        </motion.a>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
