'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { FileText } from 'lucide-react';
import MeshGradientBG from '@/components/ui/MeshGradientBG';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const revealUp = {
    hidden: { y: '100%' },
    visible: {
        y: '0%',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const fade = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const logoReveal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
};

const focusAreas = ['Agentic AI', 'RAG Pipelines', 'MLOps', 'Computer Vision'];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const spotlightX = useTransform(mouseX, (v) => `${v}px`);
    const spotlightY = useTransform(mouseY, (v) => `${v}px`);

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            <MeshGradientBG />

            {/* Mouse spotlight */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-[2]"
                style={{
                    background: useTransform(
                        [spotlightX, spotlightY],
                        ([x, y]) =>
                            `radial-gradient(600px circle at ${x} ${y}, rgba(79,139,255,0.03), transparent 60%)`
                    ),
                }}
            />

            <motion.div
                className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-32 pb-24"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                    {/* Left — text content */}
                    <div>
                        {/* Name */}
                        <div className="mb-5">
                            <div className="overflow-hidden">
                                <motion.h1
                                    variants={revealUp}
                                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-black tracking-tighter leading-[0.92]"
                                >
                                    Anudeep Sri
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden">
                                <motion.h1
                                    variants={revealUp}
                                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-black tracking-tighter leading-[0.92] accent"
                                >
                                    Bathina
                                </motion.h1>
                            </div>
                        </div>

                        {/* Role */}
                        <motion.p
                            variants={fade}
                            className="text-sm font-mono text-[var(--text-3)] uppercase tracking-[0.12em] mb-5"
                        >
                            AI Architect &middot; 11 years in production
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            variants={fade}
                            className="text-lg md:text-xl text-[var(--text-2)] max-w-lg leading-relaxed mb-8"
                        >
                            I build AI systems that survive past the demo.
                            From enterprise RAG pipelines to agentic orchestration
                            at AT&T, Capgemini, and UMass Dartmouth.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fade}
                            className="flex flex-wrap items-center gap-3 mb-10"
                        >
                            <a href="#impact" className="btn-primary">
                                Explore work
                            </a>
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                Book mentorship
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1n3jCZKppGHYcyKl-XPA9IYAs8_qxnseb/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm text-[var(--text-3)] hover:text-[var(--text)] transition-colors ml-1"
                            >
                                <FileText size={14} />
                                Resume
                            </a>
                        </motion.div>

                        {/* Focus areas */}
                        <motion.div variants={fade} className="flex flex-wrap gap-x-6 gap-y-2">
                            {focusAreas.map((area) => (
                                <span
                                    key={area}
                                    className="text-xs font-mono text-[var(--text-3)]"
                                >
                                    {area}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — logo with ambient glow */}
                    <motion.div
                        variants={logoReveal}
                        className="hidden lg:flex items-start justify-end pt-6"
                    >
                        <motion.div 
                            className="relative"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                        >
                            {/* Glow behind the logo */}
                            <motion.div
                                className="absolute -inset-12 rounded-full blur-[40px] pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(79,139,255,0.4), transparent 70%)' }}
                                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
                                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                            />
                            <img
                                src="/assets/logo.png"
                                alt="Anudeep Sri Bathina"
                                className="relative w-52 h-52 xl:w-60 xl:h-60 rounded-2xl"
                                style={{
                                    boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(79,139,255,0.15)',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    className="absolute bottom-10 left-6 flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                >
                    <div className="w-px h-10 bg-gradient-to-b from-[var(--blue)] to-transparent" />
                    <span className="text-[10px] font-mono text-[var(--text-3)] uppercase tracking-[0.15em]">
                        Scroll
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}
