'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-obsidian-900 to-obsidian-800" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-glow/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6 hover-lift">
                        <MessageCircle className="text-blue-400" size={18} />
                        <span className="text-sm font-medium text-blue-400">Let's Work Together</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Ready to Build Something Impactful?
                        </span>
                    </h2>
                    
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking for AI consulting, speaking opportunities, mentorship, or collaboration on research projects, 
                        I'd love to hear from you. Let's create something meaningful together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-blue-400 text-black font-bold rounded-lg hover:bg-blue-300 transition-all flex items-center justify-center gap-2 hover-lift shadow-lg shadow-blue-400/20"
                        >
                            Book a Mentoring Session
                            <ArrowRight size={18} />
                        </motion.a>
                        
                        <motion.a
                            href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover-lift"
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
