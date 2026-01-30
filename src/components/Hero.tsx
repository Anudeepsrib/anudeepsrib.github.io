'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                end: '+=130%',
                pin: true,
                scrub: 0.7,
                snap: {
                    snapTo: [0, 1], // Snap to start or end
                    duration: { min: 0.2, max: 0.5 },
                    delay: 0.1,
                    ease: "power2.out"
                },
            },
        });

        // 1. Entrance / Setup (Page Load) handled by standard from() not scroll-linked initially?
        // The prompt says "Auto-play entrance on page load".
        // Scroll-driven exit is 70-100%.

        // Initial Entrance (Auto-play)
        const entranceTl = gsap.timeline();
        entranceTl
            .fromTo(badgeRef.current, { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' })
            .fromTo(
                headlineRef.current?.children ? gsap.utils.toArray(headlineRef.current.children) : [],
                { x: '-6vw', opacity: 0 },
                { x: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out' },
                '-=0.6'
            )
            .fromTo([textRef.current, ctaRef.current], { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, '-=0.8')
            .fromTo(statsRef.current?.children ? gsap.utils.toArray(statsRef.current.children) : [],
                { x: '10vw', opacity: 0, scale: 0.95 },
                { x: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: 'back.out(1.2)' }, '-=0.8'
            );


        // Scroll Driven Exit (70% - 100%)
        // We leave 0-70% as "Settle" phase where nothing moves (relative to the pin)
        // Note: scrub: 0.7 makes it smooth.

        // At 70% of the scroll duration...
        // Since the total end is +=130%, let's map the exit timeline to the last 30% of the ScrollTrigger progress.

        tl.addLabel('start')
            .addLabel('exit', 0.7) // relative time in timeline? No.

        // We can just animate from 0 to 1 and control timing with position parameter?
        // Actually, with scrub, the timeline playhead is mapped to scroll position.
        // So we want the animation to happen between 0.7 and 1.0 of the timeline.

        tl.to(headlineRef.current, {
            x: '-18vw',
            opacity: 0,
            duration: 0.3, // 0.3 / 1.0 = 30% of scroll distance
            ease: 'power1.in'
        }, 0.7);

        tl.to(statsRef.current, {
            x: '12vw',
            scale: 0.96,
            opacity: 0,
            duration: 0.3,
            ease: 'power1.in'
        }, 0.7);

        tl.to([textRef.current, ctaRef.current, badgeRef.current], {
            y: '6vh',
            opacity: 0,
            duration: 0.25, // Fades out slightly faster to avoid blank frames
            ease: 'power1.in'
        }, 0.7);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Content */}
            <div ref={contentRef} className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text & Tilt */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative z-10">
                            {/* Technical Badge */}
                            <div ref={badgeRef} className="inline-flex items-center gap-3 mb-8 opacity-0">
                                <span className="h-[1px] w-12 bg-seafoam/50"></span>
                                <span className="text-sm font-mono text-seafoam tracking-widest uppercase">
                                    System Architecture · Research · Strategy
                                </span>
                            </div>

                            {/* Headline */}
                            <div className="relative mb-6 -ml-4 lg:-ml-8">
                                <h1 ref={headlineRef} className="text-6xl md:text-8xl lg:text-9xl font-bold font-syne tracking-tighter transform -rotate-2 md:-rotate-3 lg:-rotate-6 origin-bottom-left">
                                    <span className="block text-offwhite drop-shadow-2xl opacity-0">ANUDEEP</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-seafoam via-cyan-200 to-white ml-12 md:ml-24 opacity-0">
                                        SRI BATHINA
                                    </span>
                                </h1>
                            </div>

                            {/* Outcome Statement */}
                            <p ref={textRef} className="text-xl md:text-2xl text-coolgray mb-8 leading-relaxed font-light max-w-2xl border-l-2 border-amber-500/50 pl-6 ml-2 opacity-0">
                                I help enterprise engineering teams avoid production bottlenecks by architecting scalable, hallucinations-free AI systems.
                                <br className="hidden md:block" />
                                <span className="block mt-4 text-lg text-gray-500">
                                    Started as a frustrated data scientist seeing models fail in production. Now I build the systems that keep them reliable.
                                </span>
                            </p>

                            {/* CTAs */}
                            <div ref={ctaRef} className="flex flex-wrap gap-6 mt-8 ml-4 opacity-0">
                                <a
                                    href="#experience"
                                    className="group relative px-8 py-4 bg-navy-900 border border-seafoam/30 text-seafoam font-mono text-sm tracking-wider uppercase hover:bg-seafoam/10 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-seafoam/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center gap-2">
                                        Explore System
                                        <span className="text-xs">↘</span>
                                    </span>
                                </a>

                                <a
                                    href="https://adplist.org/mentors/anudeep-sri-bathina"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group px-8 py-4 bg-navy-900 border border-amber-500/30 text-amber-400 font-mono text-sm tracking-wider uppercase hover:bg-amber-500/20 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        Initialize Mentorship
                                        <span className="text-xs">→</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Data Visualization / Stats */}
                    <div className="lg:col-span-4 relative hidden lg:block">
                        <div ref={statsRef} className="flex flex-col gap-6 items-end">
                            {/* Stat Card 1 */}
                            <div className="w-64 p-6 card transform rotate-3 hover:rotate-0 hover:border-seafoam/50 opacity-0">
                                <h3 className="text-4xl font-syne font-bold text-white mb-1">9+</h3>
                                <p className="text-xs font-mono text-seafoam uppercase tracking-wider">Years Experience</p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="w-64 p-6 card transform -rotate-2 hover:rotate-0 hover:border-amber-500/50 mr-8 opacity-0">
                                <h3 className="text-4xl font-syne font-bold text-white mb-1">1k+</h3>
                                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">Global Learners</p>
                            </div>

                            {/* Stat Card 3 */}
                            <a href="/recognitions" className="w-64 p-6 card transform rotate-6 hover:rotate-0 hover:border-seafoam/50 cursor-pointer opacity-0">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs font-mono text-coolgray uppercase">Status</span>
                                </div>
                                <p className="text-sm text-offwhite font-medium">Invited Speaker & Industry Mentor</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
