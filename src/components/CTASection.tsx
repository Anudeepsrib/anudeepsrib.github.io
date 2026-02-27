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
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(headingRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
            .fromTo(subcopyRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
            .fromTo(actionsRef.current, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.2')
            .fromTo(linksRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2');

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden">
            {/* Warm Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/8 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-warm)]/6 rounded-full blur-[128px] pointer-events-none" />

            <div ref={contentRef} className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8">
                    <MessageCircle className="text-[var(--accent-primary)]" size={18} />
                    <span className="text-sm font-mono text-[var(--accent-primary)]">Let&apos;s Connect</span>
                </div>

                <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-8 opacity-0">
                    <span className="text-[var(--text-primary)]">
                        Ready to Build Something Impactful?
                    </span>
                </h2>

                <p ref={subcopyRef} className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed opacity-0">
                    Whether you&apos;re looking for AI consulting, speaking opportunities, mentorship, or collaboration on research projects,
                    I&apos;d love to hear from you.
                </p>

                <div ref={actionsRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2 px-8 py-4"
                    >
                        Identify Your Bottleneck
                        <ArrowRight size={18} />
                    </a>

                    <a
                        href={`mailto:${resumeData.personalInfo.email}?subject=Collaboration%20Inquiry`}
                        className="btn-secondary flex items-center justify-center gap-2 px-8 py-4"
                    >
                        <Mail size={18} />
                        Send an Email
                    </a>
                </div>

                <div ref={linksRef} className="mt-16 pt-8 border-t border-[var(--border-subtle)] opacity-0">
                    <p className="text-sm text-[var(--text-tertiary)] mb-4 font-mono">Quick Links</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
                        <a href="/journey" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                            View Experience
                        </a>
                        <span className="text-[var(--text-tertiary)]">•</span>
                        <a href="/impact" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                            Teaching Impact
                        </a>
                        <span className="text-[var(--text-tertiary)]">•</span>
                        <a href="/recognitions" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                            Recognitions
                        </a>
                        <span className="text-[var(--text-tertiary)]">•</span>
                        <a href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                            Read Blog
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
