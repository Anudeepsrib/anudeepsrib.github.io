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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm group hover:border-gold-glow/50 transition-colors">
                        <Sparkles size={16} className="text-gold-glow animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">Open to new opportunities, teaching and mentorship</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-glow via-white to-gold-shimmer animate-gradient">
                            Anudeep Sri Bathina
                        </span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mb-10 leading-relaxed font-light">
                        I design AI systems that <span className="text-gold-shimmer font-medium">survive production</span>.
                        <br />
                        <span className="text-base md:text-xl text-gray-400 block mt-4">
                            Enterprise GenAI architecture: from retrieval and evaluation to observability, safety, and cost control.
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <a
                            href="/architectures"
                            className="px-8 py-4 bg-white text-obsidian-900 font-bold rounded-full hover:bg-gold-glow hover:text-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                        >
                            View Architectures
                            <ArrowDown size={20} />
                        </a>
                        <a
                            href="/systems"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-gold-glow/50 transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            Read Case Studies
                            <ArrowDown size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-glow to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
