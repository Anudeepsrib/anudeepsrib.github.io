'use client';
import React from 'react';
import Link from 'next/link';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    const footerLinks = [
        { name: 'Experience & Journey', href: '/journey' },
        { name: 'Teaching & Impact', href: '/impact' },
        { name: 'Recognitions', href: '/recognitions' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Mentorship', href: '/mentorship' },
    ];

    return (
        <footer className="py-20 border-t border-[var(--border-subtle)] relative overflow-hidden bg-[var(--bg-secondary)]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* About */}
                    <div className="md:pr-12">
                        <Link href="/" className="inline-block mb-6 group">
                            <h3 className="text-2xl font-exo font-bold text-white group-hover:text-accent transition-colors flex items-center gap-3">
                                {/* Optional: Add Logo here if desired, otherwise just text */}
                                <span className="tracking-tight">ANUDEEP SRI BATHINA</span>
                            </h3>
                            <p className="text-[10px] font-mono text-accent/80 uppercase tracking-[0.3em] mt-1 group-hover:text-accent transition-colors">
                                AI Architect & Engineer
                            </p>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8">
                            Lead Data Scientist & AI Architect building production-grade AI systems.
                            Speaker, author, and mentor helping professionals excel in AI/ML.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-card text-text-muted hover:text-white hover:bg-accent/20 hover:border-accent/40 transition-all cursor-pointer box-content"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-card text-text-muted hover:text-white hover:bg-accent/20 hover:border-accent/40 transition-all cursor-pointer box-content"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="p-3 glass-card text-text-muted hover:text-white hover:bg-accent/20 hover:border-accent/40 transition-all cursor-pointer box-content"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-mono font-bold text-white/50 uppercase tracking-widest mb-6">Navigate</h4>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-accent text-sm transition-all flex items-center gap-2 group w-fit"
                                    >
                                        <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent group-hover:scale-125 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-mono font-bold text-white/50 uppercase tracking-widest mb-6">Connect</h4>
                        <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                            Interested in collaboration, speaking opportunities, or mentorship?
                        </p>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                Book Mentoring Session
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                                className="btn-secondary flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                <Mail size={16} />
                                Send Collaboration Request
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} Anudeep Sri Bathina. All systems operational.
                    </p>
                    <p className="text-center md:text-right flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Built with Next.js 15, TypeScript & Computational Design
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
