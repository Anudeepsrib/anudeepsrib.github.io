'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 border-t border-cyan-900/30 bg-charcoal-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-charcoal-900 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold font-syne text-white mb-4">
                            <span className="text-cyan-400">{'<'}</span> Anudeep Sri Bathina <span className="text-cyan-400">{'/>'}</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                            Lead Data Scientist & AI Architect building production-grade AI systems.
                            Speaker, author, and mentor helping professionals excel in AI/ML.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-none border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-none border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="p-2 bg-white/5 rounded-none border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-syne text-white mb-4">System Nodes</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/journey" className="text-gray-400 hover:text-cyan-400 text-sm font-mono transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Experience & Journey
                                </a>
                            </li>
                            <li>
                                <a href="/impact" className="text-gray-400 hover:text-cyan-400 text-sm font-mono transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Teaching & Impact
                                </a>
                            </li>
                            <li>
                                <a href="/recognitions" className="text-gray-400 hover:text-cyan-400 text-sm font-mono transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Recognitions
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-gray-400 hover:text-cyan-400 text-sm font-mono transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Blog & Insights
                                </a>
                            </li>
                            <li>
                                <a href="/mentorship" className="text-gray-400 hover:text-cyan-400 text-sm font-mono transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Mentorship
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-bold font-syne text-white mb-4">Initialize Connection</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed font-light">
                            Interested in collaboration, speaking opportunities, or mentorship?
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-none hover:bg-amber-500/20 transition-all text-sm text-center font-mono uppercase tracking-wide"
                            >
                                Book Mentoring Session
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                                className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-none hover:bg-white/10 hover:border-white/30 transition-all text-sm text-center font-mono uppercase tracking-wide"
                            >
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs text-center md:text-left font-mono">
                        © {new Date().getFullYear()} Anudeep Sri Bathina. All systems operational.
                    </p>
                    <p className="text-gray-600 text-xs text-center md:text-right font-mono">
                        Built with Next.js 15, TypeScript & Computational Design
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
