'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Github, Linkedin, ArrowRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Achievements', href: '/recognitions' },
        { name: 'Leadership', href: '/mentorship' },
        { name: 'Experience', href: '/journey' },
        { name: 'Insights', href: '/blog' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed z-50 transition-all duration-300 ${isScrolled
                        ? 'top-4 left-4 right-4 floating-nav py-3 px-6'
                        : 'top-0 left-0 right-0 py-5 px-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity">
                            <Image
                                src="/assets/logo.png"
                                alt="Anudeep Logo"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-lg font-exo font-bold text-text-primary hidden sm:inline tracking-tight">
                            <span className="text-accent">{'<'}</span>
                            Anudeep
                            <span className="text-accent">{' />'}</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-mono text-text-secondary hover:text-text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-secondary group-hover:w-full transition-all duration-250" />
                            </Link>
                        ))}

                        <div className="h-5 w-px bg-[var(--border-subtle)] mx-2" />

                        <a
                            href="https://substack.com/@anudeepai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs py-2 flex items-center gap-1.5"
                        >
                            Subscribe
                            <ArrowRight className="w-3 h-3" />
                        </a>

                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs py-2 flex items-center gap-1.5"
                        >
                            Mentorship
                            <ArrowRight className="w-3 h-3" />
                        </a>

                        <div className="flex gap-3 ml-2">
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <button
                        className="md:hidden text-text-primary hover:text-accent transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[var(--bg-primary)]/98 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col h-full pt-24 px-6 pb-8">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-3xl font-exo font-bold text-text-primary hover:text-accent transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto space-y-4">
                                <a
                                    href="https://substack.com/@anudeepai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-secondary w-full flex items-center justify-center gap-2"
                                >
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <a
                                    href="https://adplist.org/mentors/anudeep-sri-bathina"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    Book Mentorship
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <div className="flex justify-center gap-6 pt-4">
                                    <a
                                        href={resumeData.personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                                    >
                                        <Github size={24} />
                                    </a>
                                    <a
                                        href={resumeData.personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
