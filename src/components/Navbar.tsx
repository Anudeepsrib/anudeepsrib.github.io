'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
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
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'h-16 bg-background/80 backdrop-blur-md border-b border-white/8'
                    : 'h-20 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Logo */}
                        <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Image
                                src="/assets/logo.png"
                                alt="Anudeep Logo"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain filter hue-rotate-15"
                            />
                        </div>
                        {/* Name Text */}
                        <span className="text-xl font-bold font-syne text-foreground hidden sm:inline">
                            <span className="text-cyan-400">{'<'}</span>
                            Anudeep
                            <span className="text-cyan-400">{' />'}</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-mono font-medium text-gray-400 hover:text-white transition-colors relative group uppercase tracking-wide"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-white/10" />

                        {/* Subscribe Button (Cyan) */}
                        <a
                            href="https://substack.com/@anudeepai?utm_campaign=profile&utm_medium=profile-page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-none clip-path-slant bg-cyan-900/20 hover:bg-cyan-900/30 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 font-mono text-sm flex items-center gap-2 group hover-lift"
                        >
                            <span>SUBSCRIBE</span>
                            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">→</span>
                        </a>

                        {/* Book Mentoring Button (Amber) */}
                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-none clip-path-slant bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 hover:text-amber-400 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 font-mono text-sm flex items-center gap-2 group hover-lift"
                        >
                            <span>MENTORSHIP</span>
                            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">→</span>
                        </a>

                        <div className="flex gap-4">
                            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-cyan-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold font-syne text-foreground/80 hover:text-cyan-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Subscribe Button */}
                            <a
                                href="https://substack.com/@anudeepai?utm_campaign=profile&utm_medium=profile-page"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 rounded-none bg-cyan-900/20 hover:bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 transition-all duration-300 font-mono text-base flex items-center justify-center gap-2"
                            >
                                <span>SUBSCRIBE</span>
                                <span className="text-xs opacity-60">→</span>
                            </a>

                            {/* Mobile Book Mentoring Button */}
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 rounded-none bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 transition-all duration-300 font-mono text-base flex items-center justify-center gap-2"
                            >
                                <span>MENTORSHIP</span>
                                <span className="text-xs opacity-60">→</span>
                            </a>

                            <div className="flex gap-6 mt-8">
                                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
