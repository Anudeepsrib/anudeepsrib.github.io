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
        <footer className="py-16 border-t border-[var(--border-subtle)] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-exo font-bold text-text-primary mb-4">
                            <span className="text-accent">{'<'}</span> Anudeep Sri Bathina <span className="text-accent">{'/>'}</span>
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            Lead Data Scientist & AI Architect building production-grade AI systems.
                            Speaker, author, and mentor helping professionals excel in AI/ML.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 glass-card text-text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 glass-card text-text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="p-2 glass-card text-text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-exo font-bold text-text-primary mb-4">Navigate</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-accent text-sm font-mono transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-exo font-bold text-text-primary mb-4">Connect</h4>
                        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                            Interested in collaboration, speaking opportunities, or mentorship?
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-center text-sm flex items-center justify-center gap-2"
                            >
                                Book Mentoring Session
                                <ArrowRight size={14} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                                className="btn-secondary text-center text-sm flex items-center justify-center gap-2"
                            >
                                <Mail size={14} />
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-xs text-center md:text-left font-mono">
                        © {new Date().getFullYear()} Anudeep Sri Bathina. All systems operational.
                    </p>
                    <p className="text-text-muted text-xs text-center md:text-right font-mono">
                        Built with Next.js 15, TypeScript & Computational Design
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
