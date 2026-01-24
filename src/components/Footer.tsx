'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 border-t border-white/10 bg-obsidian-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 to-obsidian-800" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold font-outfit text-white mb-4">Anudeep Sri Bathina</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Lead Data Scientist & AI Architect building production-grade AI systems. 
                            Speaker, author, and mentor helping professionals excel in AI/ML.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all hover-lift"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all hover-lift"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all hover-lift"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/journey" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                    Experience & Journey
                                </a>
                            </li>
                            <li>
                                <a href="/impact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                    Teaching & Impact
                                </a>
                            </li>
                            <li>
                                <a href="/recognitions" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                    Recognitions
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                    Blog & Insights
                                </a>
                            </li>
                            <li>
                                <a href="/mentorship" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                    Mentorship
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Interested in collaboration, speaking opportunities, or mentorship?
                        </p>
                        <div className="flex flex-col gap-2">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-all text-sm text-center hover-lift"
                            >
                                Book Mentoring Session
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                                className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all text-sm text-center hover-lift"
                            >
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Anudeep Sri Bathina. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm text-center md:text-right">
                        Built with Next.js 15, TypeScript & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
