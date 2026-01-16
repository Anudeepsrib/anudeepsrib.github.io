'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const Blog = () => {
    const blogLinks = [
        {
            title: "Substack",
            description: "Deep dives into AI architecture, system design, and industry trends.",
            url: "https://anudeepsri.substack.com/",
            publisher: "Substack"
        },
        {
            title: "Medium",
            description: "Technical articles, tutorials, and thought leadership on Generative AI.",
            url: "https://medium.com/@anudeepsri",
            publisher: "Medium"
        }
    ];

    return (
        <section id="blog" className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-glow/10 border border-gold-glow/20 mb-6">
                        <BookOpen className="text-gold-glow" size={18} />
                        <span className="text-sm font-medium text-gold-glow">Writing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white">
                        Blog & Insights
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Sharing knowledge on building production-grade AI systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
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
                            className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-glow/30 transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-gold-glow/10 text-gold-glow group-hover:bg-gold-glow group-hover:text-black transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <ExternalLink className="text-gray-500 group-hover:text-gold-glow transition-colors" size={20} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-glow transition-colors">
                                {blog.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gold-shimmer mb-4">
                                <span>{blog.publisher}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {blog.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
