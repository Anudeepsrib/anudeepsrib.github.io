'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { FileText, Github, Linkedin } from 'lucide-react';
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

const focusAreas = [
    { label: 'Agentic AI', detail: 'LangGraph · CrewAI · MCP' },
    { label: 'RAG Systems', detail: 'Azure AI Search · ChromaDB · GraphRAG' },
    { label: 'MLOps', detail: 'FastAPI · Docker · LangSmith' },
    { label: 'Computer Vision', detail: 'YOLOv8 · ResNet · 94.1% mAP' },
];

const companies = [
    { name: 'AT&T', logo: '/assets/companies/att.png' },
    { name: 'Capgemini', logo: '/assets/companies/capgemini.png' },
    { name: 'Cognizant', logo: '/assets/companies/cognizant.png' },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const spotlightX = useTransform(mouseX, (v) => `${v}px`);
    const spotlightY = useTransform(mouseY, (v) => `${v}px`);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <MeshGradientBG />
            
            {/* Mouse-following spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(79, 139, 255, 0.15), transparent 40%)`,
                }}
            />

            <div className="container mx-auto max-w-6xl px-6 relative z-20">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left — content */}
                    <div className="space-y-6">
                        {/* Name */}
                        <div className="overflow-hidden">
                            <motion.h1
                                variants={revealUp}
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-black tracking-tighter leading-[0.92] accent"
                            >
                                Anudeep Sri
                            </motion.h1>
                            <motion.h1
                                variants={revealUp}
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-black tracking-tighter leading-[0.92] accent"
                            >
                                Bathina
                            </motion.h1>
                        </div>

                        {/* Status + Role line */}
                        <motion.div variants={fade} className="flex items-center gap-3 mb-5">
                            <span className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="text-[11px] font-mono text-emerald-400/80">Available</span>
                            </span>
                            <span className="w-px h-3 bg-[var(--border)]" />
                            <span className="text-sm font-mono text-[var(--text-3)] uppercase tracking-[0.12em]">
                                AI Architect - 11 years in production
                            </span>
                        </motion.div>

                        {/* Company strip */}
                        <motion.div variants={fade} className="flex items-center gap-5 mb-5">
                            {companies.map((co) => (
                                <img
                                    key={co.name}
                                    src={co.logo}
                                    alt={co.name}
                                    className="h-4 opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
                                />
                            ))}
                        </motion.div>

                        {/* Tagline paragraph with metrics */}
                        <motion.p
                            variants={fade}
                            className="text-lg md:text-xl text-[var(--text-2)] max-w-lg leading-relaxed mb-8"
                        >
                            I build AI systems that survive past the demo -
                            enterprise RAG serving 15K+ users at AT&T,
                            with p95 latency under 2.5 seconds
                            and zero PII leaks in production.
                        </motion.p>

                        {/* CTAs with proper hierarchy */}
                        <motion.div
                            variants={fade}
                            className="flex flex-wrap items-center gap-3 mb-10"
                        >
                            {/* Primary — what a recruiter wants */}
                            <a href="#projects" className="btn-primary">
                                View projects
                            </a>

                            {/* Secondary — professional credibility */}
                            <a
                                href="/resume/Anudeep-Sri-Bathina-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <FileText size={14} />
                                Resume
                            </a>

                            {/* Tertiary — social links inline */}
                            <div className="flex items-center gap-3 ml-2">
                                <a 
                                    href="https://github.com/anudeepsrib" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[var(--text-3)] hover:text-[var(--text)] transition-colors" 
                                    aria-label="GitHub"
                                >
                                    <Github size={16} />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/anudeepsri/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[var(--text-3)] hover:text-[var(--text)] transition-colors" 
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={16} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Focus area pills with hover tooltips */}
                        <motion.div variants={fade} className="flex flex-wrap gap-2">
                            {focusAreas.map((area) => (
                                <div key={area.label} className="group relative">
                                    <span className="tech-pill cursor-default group-hover:border-[rgba(255,255,255,0.15)] transition-colors">
                                        {area.label}
                                    </span>
                                    {/* Tooltip on hover */}
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-[10px] font-mono text-[var(--text-2)] bg-[var(--surface)] border border-[var(--border)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                                        {area.detail}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — Proof card */}
                    <motion.div
                        variants={logoReveal}
                        className="hidden lg:flex items-start justify-end pt-6"
                    >
                        <div className="relative w-64">
                            {/* Ambient glow behind card */}
                            <motion.div
                                className="absolute -inset-8 rounded-3xl blur-[50px] pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(79,139,255,0.25), transparent 70%)' }}
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                            />
                            <div className="relative glass-card p-6 space-y-5">
                                {/* Current role */}
                                <div>
                                    <p className="text-[10px] font-mono text-[var(--text-3)] uppercase tracking-wider mb-1">Current</p>
                                    <p className="text-sm font-display font-semibold text-[var(--text)]">AI Architect</p>
                                    <p className="text-xs text-[var(--blue)]">AT&T</p>
                                </div>

                                {/* Key metrics */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xl font-display font-bold text-[var(--text)]">11<span className="text-[var(--blue)]">+</span></p>
                                        <p className="text-[10px] font-mono text-[var(--text-3)]">Years in prod</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-display font-bold text-[var(--text)]">1K<span className="text-[var(--warm)]">+</span></p>
                                        <p className="text-[10px] font-mono text-[var(--text-3)]">Mentored</p>
                                    </div>
                                </div>

                                {/* Credibility markers */}
                                <div className="pt-3 border-t border-[var(--border)] space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[var(--warm)]" />
                                        <span className="text-[11px] text-[var(--text-2)]">Published - CRC Press</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[var(--blue)]" />
                                        <span className="text-[11px] text-[var(--text-2)]">Speaker - BSBI Berlin</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[var(--blue)]" />
                                        <span className="text-[11px] text-[var(--text-2)]">KaggleX Fellow - Google</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Centered scroll cue with animated chevron */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <span className="text-[11px] font-mono text-[var(--text-3)] uppercase tracking-[0.15em]">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                    >
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                            <path d="M1 1L8 8L15 1" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
