'use client';
import React, { Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { heroContainer, fadeUp } from '@/lib/animation';
import HeroLottie from './HeroLottie';

const Hero = () => {
    const reduceMotion = useReducedMotion();

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

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div
                    variants={heroContainer}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/30 mb-6 backdrop-blur-sm hover:border-blue-400/60 transition-colors hover-lift">
                        <span className="text-sm font-medium text-blue-300">AI Architect · Researcher · Industry Mentor</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            Anudeep Sri Bathina
                        </span>
                    </motion.h1>

                    {/* Role Statement */}
                    <motion.p variants={fadeUp} className="text-2xl md:text-3xl text-gray-300 mb-4 leading-relaxed font-light">
                        Lead Data Scientist & AI Architect
                    </motion.p>
                    
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed font-light">
                        End-to-End Data Systems · Advanced AI · AI Architecture for Production Environments
                    </motion.p>

                    {/* Value Proposition */}
                    <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed">
                        I design and deliver production-grade AI systems, including RAG, multi-agent orchestration, evaluation, security, and deployment. These systems are used by real teams in real environments.
                    </motion.p>
                </motion.div>

                {/* Right: Lottie Animation */}
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="hidden lg:flex items-center justify-center"
                >
                    <Suspense fallback={<div className="w-80 h-80 bg-white/5 rounded-2xl animate-pulse" />}>
                        <HeroLottie />
                    </Suspense>
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
