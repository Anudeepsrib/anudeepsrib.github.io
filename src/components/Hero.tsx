'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-glow/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-shimmer/20 rounded-full blur-[128px] pointer-events-none animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm group hover:border-gold-glow/50 transition-colors">
                        <span className="text-sm">⭐</span>
                        <span className="text-sm font-medium text-gray-300">Open to AI Architecture, Teaching & Mentorship</span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow via-white to-gold-shimmer animate-gradient">
                            Anudeep Sri Bathina
                        </span>
                    </h1>

                    {/* Role Statement */}
                    <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mb-6 leading-relaxed font-light">
                        Lead Data Scientist · AI Architect · Enterprise GenAI Systems
                    </p>

                    {/* Value Proposition */}
                    <p className="text-base md:text-xl text-gray-400 max-w-3xl mb-10">
                        Enterprise-grade GenAI architecture from retrieval and evaluation to safety, observability, and cost control.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <a
                            href="#skills"
                            className="px-10 py-4 bg-white text-obsidian-900 font-bold rounded-2xl hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                        >
                            View Experience
                            <ArrowDown size={20} />
                        </a>
                        <a
                            href="/recognitions"
                            className="px-10 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 hover:scale-105 transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            View Recognitions
                            <ArrowDown size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Modular Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            >
                <span className="block text-xs uppercase tracking-widest text-gold-glow mb-2 font-mono">Scroll Down</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-glow to-transparent mx-auto" />
            </motion.div>
        </section>
    );
};

export default Hero;
