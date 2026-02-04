'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowDownRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=100%',
                pin: true,
                scrub: 0.5,
            },
        });

        // Initial Entrance (Auto-play)
        const entranceTl = gsap.timeline();
        entranceTl
            .fromTo(badgeRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
            .fromTo(
                headlineRef.current?.children ? gsap.utils.toArray(headlineRef.current.children) : [],
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
                '-=0.3'
            )
            .fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.5')
            .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
            .fromTo(statsRef.current?.children ? gsap.utils.toArray(statsRef.current.children) : [],
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' }, '-=0.5'
            );

        // Scroll Exit
        tl.to(contentRef.current, {
            y: '-10%',
            opacity: 0,
            duration: 1,
            ease: 'power2.in'
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 aurora-bg" />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hero-glow opacity-40" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(var(--text-tertiary) 1px, transparent 1px), linear-gradient(90deg, var(--text-tertiary) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Content */}
            <div ref={contentRef} className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column */}
                    <div className="lg:col-span-7">
                        {/* Role Badge */}
                        <div ref={badgeRef} className="inline-flex items-center gap-3 mb-8 opacity-0">
                            <span className="flex items-center gap-2 px-4 py-2 glass-card text-sm font-mono text-accent">
                                <Sparkles className="w-4 h-4" />
                                Production AI · Enterprise Scale
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 ref={headlineRef} className="mb-8">
                            <span className="block text-5xl md:text-7xl lg:text-8xl font-exo font-bold text-text-primary tracking-tight opacity-0">
                                ANUDEEPSRI
                            </span>
                            <span className="block text-5xl md:text-7xl lg:text-8xl font-exo font-bold gradient-text tracking-tight mt-2 opacity-0">
                                BATHINA
                            </span>
                        </h1>

                        {/* Value Proposition */}
                        <p ref={textRef} className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed opacity-0">
                            I architect{' '}
                            <span className="text-accent font-medium">AI systems that survive real-world scale</span>.{' '}
                            9 years turning demos into deployments.
                        </p>

                        {/* CTAs */}
                        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 opacity-0">
                            <a
                                href="#impact"
                                className="btn-primary"
                            >
                                Explore Work
                            </a>
                            <a
                                href="https://adplist.org/mentors/anudeep-sri-bathina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                Mentorship
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1n3jCZKppGHYcyKl-XPA9IYAs8_qxnseb/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-mono text-text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-text-muted/30 hover:decoration-accent"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Professional Context */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div ref={statsRef} className="flex flex-col gap-5">
                            {/* Status Card */}
                            <a
                                href="/recognitions"
                                className="glass-card p-6 hover-lift cursor-pointer group opacity-0"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Available for</span>
                                </div>
                                <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                                    AI Consulting · Speaking · Mentorship
                                </p>
                            </a>

                            {/* Focus Areas Card */}
                            <div className="glass-card p-6 hover-lift opacity-0">
                                <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">Focus Areas</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Agentic AI Systems', 'RAG Systems', 'MLOps', 'Computer Vision'].map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--accent-primary)]/10 text-accent border border-[var(--accent-primary)]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="glass-card p-6 hover-lift opacity-0">
                                <p className="text-text-secondary text-sm mb-3">Ready to build production AI?</p>
                                <a
                                    href="#impact"
                                    className="text-accent font-mono text-sm hover:underline"
                                >
                                    View Impact & Credentials →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
