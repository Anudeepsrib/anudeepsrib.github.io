'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { heroContainer, fadeUp } from '@/lib/animation';

const Hero = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text & Tilt */}
                    <div className="lg:col-span-8 relative">
                        <motion.div
                            variants={heroContainer}
                            initial={reduceMotion ? 'show' : 'hidden'}
                            animate="show"
                            className="relative z-10"
                        >
                            {/* Technical Badge - Mono font */}
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
                                <span className="h-[1px] w-12 bg-cyan-glow/50"></span>
                                <span className="text-sm font-mono text-cyan-glow tracking-widest uppercase">
                                    System Architecture · Research · Strategy
                                </span>
                            </motion.div>

                            {/* Name with 8deg tilt - Syne Font */}
                            <div className="relative mb-6 -ml-4 lg:-ml-8">
                                <motion.h1
                                    variants={fadeUp}
                                    className="text-6xl md:text-8xl lg:text-9xl font-bold font-syne tracking-tighter transform -rotate-2 md:-rotate-3 lg:-rotate-6 origin-bottom-left"
                                >
                                    <span className="block text-foreground drop-shadow-2xl">
                                        ANUDEEP
                                    </span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white ml-12 md:ml-24">
                                        SRI BATHINA
                                    </span>
                                </motion.h1>
                            </div>

                            {/* Outcome Statement */}
                            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light max-w-2xl border-l-2 border-amber-500/50 pl-6 ml-2">
                                I help enterprise engineering teams avoid production bottlenecks by architecting scalable, hallucinations-free AI systems.
                                <br className="hidden md:block" />
                                <span className="block mt-4 text-lg text-gray-400">
                                    Started as a frustrated data scientist seeing models fail in production. Now I build the systems that keep them reliable.
                                </span>
                            </motion.p>

                            {/* CTAs - Off-axis layout */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-8 ml-4">
                                <a
                                    href="#experience"
                                    className="group relative px-8 py-4 bg-cyan-900/10 border border-cyan-500/30 text-cyan-300 font-mono text-sm tracking-wider uppercase hover:bg-cyan-500/10 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center gap-2">
                                        Explore System
                                        <span className="text-xs">↘</span>
                                    </span>
                                </a>

                                <a
                                    href="https://adplist.org/mentors/anudeep-sri-bathina"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group px-8 py-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-sm tracking-wider uppercase hover:bg-amber-500/20 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        Initialize Mentorship
                                        <span className="text-xs">→</span>
                                    </span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Data Visualization / Stats (Cascading) */}
                    <div className="lg:col-span-4 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col gap-6 items-end"
                        >
                            {/* Stat Card 1 */}
                            <div className="w-64 p-6 bg-card/30 backdrop-blur-md border border-cyan-500/20 shadow-lg shadow-cyan-900/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <h3 className="text-4xl font-syne font-bold text-white mb-1">9+</h3>
                                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Years Experience</p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="w-64 p-6 bg-card/30 backdrop-blur-md border border-amber-500/20 shadow-lg shadow-amber-900/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 mr-8">
                                <h3 className="text-4xl font-syne font-bold text-white mb-1">1k+</h3>
                                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">Global Learners</p>
                            </div>

                            {/* Stat Card 3 */}
                            <a href="/recognitions" className="w-64 p-6 bg-card/30 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 shadow-lg transition-colors cursor-pointer transform rotate-6 hover:rotate-0 duration-500">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs font-mono text-gray-400 uppercase">Status</span>
                                </div>
                                <p className="text-sm text-gray-200 font-medium">Invited Speaker & Industry Mentor</p>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
