'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Instagram, Youtube } from 'lucide-react';
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
            icon: Instagram,
            color: "text-pink-400",
            bgColor: "bg-pink-400/10",
            borderColor: "border-pink-400/30"
        },
        {
            title: "YouTube",
            description: "Video tutorials, talks, and deep-dive sessions on AI systems.",
            url: "https://www.youtube.com/@AnudeepsriBathina",
            icon: Youtube,
            color: "text-red-400",
            bgColor: "bg-red-400/10",
            borderColor: "border-red-400/30"
        }
    ];

    return (
        <section id="blog" className="py-24 relative bg-charcoal-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
                        <BookOpen className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-400">Writing & Content</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold font-syne mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                            Blog & Insights
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Sharing knowledge on building production-grade AI systems, architecture decisions, and industry insights.
                    </motion.p>
                </motion.div>

                {/* Blog Links */}
                <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto mb-20">
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
                            className="group block p-8 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1 hover-lift relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30" />
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-none bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                                    <blog.icon size={24} />
                                </div>
                                <ExternalLink className="text-gray-500 group-hover:text-cyan-400 transition-colors" size={20} />
                            </div>

                            <h3 className="text-2xl font-bold font-syne text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                {blog.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-cyan-300 mb-4 font-mono">
                                <span>{blog.publisher}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {blog.description}
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Social Media Divider */}
                <div className="flex items-center gap-4 mb-20 max-w-4xl mx-auto justify-center">
                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">Also Follow</span>
                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Social Media Links */}
                <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
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
                            className="group block p-8 rounded-none bg-charcoal-800/50 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover-lift relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-none ${social.bgColor} ${social.color} group-hover:opacity-80 transition-opacity`}>
                                    <social.icon size={24} />
                                </div>
                                <ExternalLink className={`text-gray-500 group-hover:${social.color} transition-colors`} size={20} />
                            </div>

                            <h3 className={`text-2xl font-bold font-syne text-white mb-2 group-hover:${social.color} transition-colors`}>
                                {social.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-light">
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
