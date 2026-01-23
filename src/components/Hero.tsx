'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { heroContainer, fadeUp, simpleFloat } from '@/lib/animation';


const Hero = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-glow/20 rounded-full blur-[128px] pointer-events-none"
                animate={reduceMotion ? undefined : { y: [0, -12, 0], x: [0, 6, 0] }}
                transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-shimmer/20 rounded-full blur-[128px] pointer-events-none"
                animate={reduceMotion ? undefined : { y: [0, 12, 0], x: [0, -6, 0] }}
                transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
                <motion.div
                    variants={heroContainer}
                    initial={reduceMotion ? 'show' : 'hidden'}
                    animate="show"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm group hover:border-gold-glow/50 transition-colors">
                        <span className="text-sm font-medium text-gray-300">AI Architect · Researcher · Industry Mentor</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow via-white to-gold-shimmer animate-gradient">
                            Anudeep Sri Bathina
                        </span>
                    </motion.h1>

                    {/* Role Statement */}
                    <motion.p variants={fadeUp} className="text-2xl md:text-3xl text-gray-300 max-w-3xl mb-2 leading-relaxed font-light">
                        Lead Data Scientist & AI Architect
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-3xl mb-6 leading-relaxed font-light">
                        End-to-End Data Systems · Advanced AI · AI Architecture for Production Environments
                    </motion.p>

                    {/* Value Proposition */}
                    <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-400 max-w-3xl mb-10">
                        I design and deliver production-grade AI systems, including RAG, multi-agent orchestration, evaluation, security, and deployment. These systems are used by real teams in real environments.
                    </motion.p>


                </motion.div>
            </div>

            {/* Modular Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 10, 0] }}
                transition={reduceMotion ? undefined : { delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            >
                <span className="block text-xs uppercase tracking-widest text-gold-glow mb-2 font-mono">Scroll Down</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-glow to-transparent mx-auto" />
            </motion.div>
        </section>
    );
};

export default Hero;
