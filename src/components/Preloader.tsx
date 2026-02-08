'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

const words = ["Hello", "Welcome", "AI Architect", "Anudeep Sri Bathina"];

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, 800);
        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 1000);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 10) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 120);

        return () => clearInterval(timer);
    }, []);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

    const curve = {
        initial: { d: initialPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
        exit: { d: targetPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }
    }

    const slideUp = {
        initial: { top: 0 },
        exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    variants={slideUp}
                    initial="initial"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">

                        {/* Bot Animation Container */}
                        <div className="relative mb-8">
                            {/* Glowing Orbit Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20px] rounded-full border border-[var(--accent-primary)]/20 border-t-[var(--accent-primary)] w-32 h-32"
                            />

                            {/* Inner Circle Background */}
                            <div className="w-24 h-24 bg-[var(--accent-primary)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--accent-primary)]/20 relative overflow-hidden">
                                {/* Floating Grid Background inside circle */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: 'radial-gradient(var(--accent-primary) 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                                />

                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Bot size={48} className="text-[var(--accent-primary)]" />
                                </motion.div>
                            </div>

                            {/* Sparkle Accent */}
                            <motion.div
                                animate={{ scale: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="absolute -top-2 -right-2 text-white"
                            >
                                <Sparkles size={20} fill="white" />
                            </motion.div>
                        </div>

                        {/* Status Text */}
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="h-8 mb-2"
                        >
                            <span className="text-xl md:text-2xl font-syne font-bold text-white tracking-wide">
                                {words[Math.min(index, words.length - 1)]}
                            </span>
                        </motion.div>

                        {/* Progress Bar & Counter */}
                        <div className="flex flex-col items-center gap-2 mt-4 w-64">
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[var(--accent-primary)]"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-xs font-mono text-[var(--accent-primary)]/80 tracking-widest">
                                LOADING {progress}%
                            </span>
                        </div>
                    </div>

                    {dimension.width > 0 && (
                        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#050505]">
                            <motion.path variants={curve} initial="initial" exit="exit" />
                        </svg>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
