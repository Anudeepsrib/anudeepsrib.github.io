'use client';
import React, { Suspense, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { heroContainer, fadeUp } from '@/lib/animation';
import HeroLottie from './HeroLottie';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Hero = () => {
    const reduceMotion = useReducedMotion();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Simple Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-900 via-obsidian-900 to-obsidian-800 pointer-events-none" />
            
            {/* Subtle floating glow blobs */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[128px] pointer-events-none"
                animate={reduceMotion ? undefined : { y: [0, -15, 0] }}
                transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-[128px] pointer-events-none"
                animate={reduceMotion ? undefined : { y: [0, 15, 0] }}
                transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/60 via-transparent to-transparent pointer-events-none z-[5]" />

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div
                    variants={heroContainer}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                    className="relative z-10"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/30 mb-6 backdrop-blur-sm hover:border-blue-400/60 transition-colors hover-lift">
                        <span className="text-sm font-medium text-blue-300">AI Architect · Researcher · Industry Mentor</span>
                    </motion.div>

                    {/* Name with Descriptor */}
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tight mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Anudeep Sri Bathina
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 mb-6 font-light">
                        AI Architect • Production AI Systems
                    </motion.p>

                    {/* 1-Line Outcome Statement */}
                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white mb-4 leading-relaxed font-medium">
                    I help teams design, deploy, and scale production-grade AI systems. I focus on security, reliability, and real enterprise environments..
                    </motion.p>

                    {/* Credibility Spike */}
                    <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
                        Trusted by 1,000+ learners and global institutions
                    </motion.p>

                    {/* Collapsible Detailed Paragraph */}
                    <motion.div variants={fadeUp} className="mb-6">
                        {!isExpanded ? (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                            >
                                Learn more
                                <ChevronDown size={16} />
                            </button>
                        ) : (
                            <div className="space-y-2">
                                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                                    I design and deliver production-grade AI systems, including RAG, multi-agent orchestration, evaluation, security, and deployment. These systems are used by real teams in real environments.
                                </p>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                                >
                                    Show less
                                    <ChevronUp size={16} />
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Clickable Social Proof Badges */}
                    <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-8">
                        <a
                            href="#experience"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-blue-400/50 hover:text-white transition-all cursor-pointer"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            9+ Years Experience
                        </a>
                        <a
                            href="/recognitions"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-blue-400/50 hover:text-white transition-all cursor-pointer"
                        >
                            <span className="text-gold-glow">🎤</span>
                            Invited Speaker
                        </a>
                        <a
                            href="/impact"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-blue-400/50 hover:text-white transition-all cursor-pointer"
                        >
                            <span className="text-emerald-400">👥</span>
                            1,000+ Learners
                        </a>
                    </motion.div>

                    {/* CTA Hierarchy */}
                    <motion.div variants={fadeUp} className="space-y-4 mb-6">
                        {/* Primary CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gold-glow text-black font-bold rounded-lg hover:bg-gold-shimmer transition-all duration-300 flex items-center justify-center gap-2 hover-lift shadow-lg shadow-gold-glow/20"
                            >
                                Book Mentoring
                                <span className="text-xs">→</span>
                            </a>
                            {/* Secondary CTA */}
                            <a
                                href="/journey"
                                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover-lift"
                            >
                                View Experience
                                <span className="text-xs">→</span>
                            </a>
                        </div>
                        
                        {/* Intent Segmentation */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 pt-2">
                            <span>Hiring Manager?</span>
                            <a href="/journey" className="text-blue-400 hover:text-blue-300 transition-colors">View Experience</a>
                            <span>•</span>
                            <span>Learner?</span>
                            <a href="https://adplist.org/mentors/anudeep-sri-bathina" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Book Mentoring</a>
                            <span>•</span>
                            <span>Founder / Team?</span>
                            <a href="mailto:anudeepsrib@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">Get in Touch</a>
                        </div>
                        
                        {/* Tertiary CTA - Text Only */}
                        <div className="text-center pt-2">
                            <a
                                href="mailto:anudeepsrib@gmail.com"
                                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Lottie Animation - Reduced Contrast */}
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="hidden lg:flex items-center justify-center relative"
                >
                    {/* Overlay to reduce illustration brightness */}
                    <div className="absolute inset-0 bg-obsidian-900/20 rounded-2xl pointer-events-none z-10" />
                    <div className="relative opacity-80">
                        <Suspense fallback={<div className="w-80 h-80 bg-white/5 rounded-2xl animate-pulse" />}>
                            <HeroLottie />
                        </Suspense>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 10, 0] }}
                transition={reduceMotion ? undefined : { delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            >
                <span className="block text-xs uppercase tracking-widest text-blue-400 mb-2 font-mono">Scroll Down</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent mx-auto" />
            </motion.div>
        </section>
    );
};

export default Hero;
