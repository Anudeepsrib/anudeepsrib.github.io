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
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '/journey' },
        { name: 'Mentorship', href: '/mentorship' },
        { name: 'Awards', href: '/recognitions' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <div>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'py-3 bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--text-primary)]/5 shadow-sm'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group relative z-50">
                        <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-[var(--text-primary)]/10 group-hover:border-[var(--accent-primary)] transition-colors duration-300">
                            <Image
                                src="/assets/logo.png"
                                alt="Anudeep Logo"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-serif font-medium tracking-tight text-[var(--text-primary)] leading-none group-hover:text-[var(--accent-primary)] transition-colors">
                                Anudeep
                            </span>
                            <span className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest group-hover:text-[var(--text-secondary)] transition-colors font-mono">
                                Portfolio
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-1 bg-[var(--text-primary)]/5 rounded-full px-2 py-1 border border-[var(--text-primary)]/5 backdrop-blur-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative group transition-colors"
                                >
                                    {link.name}
                                    <span className="absolute inset-0 bg-[var(--text-primary)]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                </Link>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-[var(--text-primary)]/10" />

                        <div className="flex items-center gap-3">
                            <a
                                href="https://substack.com/@anudeepai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/10 rounded-lg transition-all duration-300"
                            >
                                Subscribe
                            </a>

                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-secondary)] hover:shadow-[0_0_20px_rgba(200,149,108,0.2)] transition-all duration-300 flex items-center gap-2"
                            >
                                Mentorship
                                <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-2xl md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-serif text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:translate-x-4 transition-all duration-300 block"
                                    >
                                        <span className="text-sm text-[var(--accent-primary)] block mb-1 font-mono">0{i + 1}</span>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="h-px bg-[var(--text-primary)]/10 my-4" />

                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://adplist.org/mentors/anudeep-sri-bathina"
                                    target="_blank"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary flex items-center justify-center gap-2"
                                >
                                    Book Mentorship
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="flex justify-center gap-6 mt-6">
                                    <a href={resumeData.personalInfo.github} target="_blank" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                                        <Github size={24} />
                                    </a>
                                    <a href={resumeData.personalInfo.linkedin} target="_blank" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
