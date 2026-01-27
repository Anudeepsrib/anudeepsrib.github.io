'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-charcoal-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-charcoal-900 to-charcoal-800" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6 hover-lift">
                        <MessageCircle className="text-cyan-400" size={18} />
                        <span className="text-sm font-mono text-cyan-400">Initialize Connection</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-200">
                            Ready to Build Something Impactful?
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Whether you're looking for AI consulting, speaking opportunities, mentorship, or collaboration on research projects,
                        I'd love to hear from you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-amber-500 text-charcoal-900 font-bold font-mono rounded-none hover:bg-amber-400 transition-all flex items-center justify-center gap-2 hover-lift shadow-lg shadow-amber-500/20 uppercase tracking-wide"
                        >
                            Book a Mentoring Session
                            <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-cyan-900/10 border border-cyan-400/30 text-cyan-300 font-mono font-medium rounded-none hover:bg-cyan-900/20 hover:border-cyan-400/60 transition-all flex items-center justify-center gap-2 hover-lift uppercase tracking-wide"
                        >
                            <Mail size={18} />
                            Send an Email
                        </motion.a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-sm text-gray-500 mb-4">Quick Links</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <a href="/journey" className="text-gray-400 hover:text-blue-400 transition-colors">
                                View Experience
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="/impact" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Teaching Impact
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="/recognitions" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Recognitions
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Read Blog
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
