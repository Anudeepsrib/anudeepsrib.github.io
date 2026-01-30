'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subcopyRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=120%',
                pin: true,
                scrub: 0.8,
                snap: {
                    snapTo: 1, // Snap to end (fully revealed)
                    duration: { min: 0.2, max: 0.5 },
                    delay: 0.1,
                    ease: "power2.out"
                }
            }
        });

        // Entrance
        const entranceTl = gsap.timeline(); // Or just use the main tl?
        // Prompt implies entrance is scroll driven or on entering pinned state?
        // "Pinned Section Template ... Entrance (0%-30%)"

        tl.fromTo(headingRef.current, { y: '18vh', opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, 0)
            .fromTo(subcopyRef.current, { y: '10vh', opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, 0.1)
            .fromTo(actionsRef.current, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.5)' }, 0.2)
            .fromTo(linksRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.3);

        // The rest of the scroll is just for "Settle" so user can read it.

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-navy-950 flex items-center justify-center min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-seafoam/5 via-navy-950 to-navy-900" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px] pointer-events-none" />

            <div ref={contentRef} className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/10 border border-seafoam/20 mb-6 shadow-[0_0_15px_rgba(69,231,195,0.1)]">
                    <MessageCircle className="text-seafoam" size={18} />
                    <span className="text-sm font-mono text-seafoam">Initialize Connection</span>
                </div>

                <h2 ref={headingRef} className="text-5xl md:text-7xl font-bold font-syne mb-8 opacity-0">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam to-amber-200">
                        Ready to Build Something Impactful?
                    </span>
                </h2>

                <p ref={subcopyRef} className="text-xl text-coolgray mb-12 max-w-2xl mx-auto leading-relaxed font-light opacity-0">
                    Whether you're looking for AI consulting, speaking opportunities, mentorship, or collaboration on research projects,
                    I'd love to hear from you.
                </p>

                <div ref={actionsRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-amber-500 text-navy-950 font-bold font-mono rounded-none hover:bg-amber-400 transition-all flex items-center justify-center gap-2 hover-lift shadow-lg shadow-amber-500/20 uppercase tracking-wide"
                    >
                        Identify your bottleneck
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                        className="group px-8 py-4 bg-navy-900/50 border border-seafoam/30 text-seafoam font-mono font-medium rounded-none hover:bg-navy-900/80 hover:border-seafoam/60 transition-all flex items-center justify-center gap-2 hover-lift uppercase tracking-wide"
                    >
                        <Mail size={18} />
                        Send an Email
                    </a>
                </div>

                <div ref={linksRef} className="mt-16 pt-8 border-t border-white/10 opacity-0">
                    <p className="text-sm text-gray-500 mb-4">Quick Links</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
                        <a href="/journey" className="text-coolgray hover:text-seafoam transition-colors">
                            View Experience
                        </a>
                        <span className="text-gray-700">•</span>
                        <a href="/impact" className="text-coolgray hover:text-seafoam transition-colors">
                            Teaching Impact
                        </a>
                        <span className="text-gray-700">•</span>
                        <a href="/recognitions" className="text-coolgray hover:text-seafoam transition-colors">
                            Recognitions
                        </a>
                        <span className="text-gray-700">•</span>
                        <a href="/blog" className="text-coolgray hover:text-seafoam transition-colors">
                            Read Blog
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
