'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2, ExternalLink, ArrowRight, Github, Star } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const projects = resumeData.projects;

    useGSAP(() => {
        // Header animation
        gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Cards staggered animation
        const cards = gsap.utils.toArray('.project-card');
        gsap.fromTo(
            cards,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[var(--bg-primary)] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-primary)]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={headerRef} className="mb-16">
                    {/* Section Number */}
                    <div className="section-number">04</div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[var(--text-primary)] mb-6 tracking-tight">
                        Open Source{' '}
                        <span className="text-[var(--accent-primary)]">
                            Projects
                        </span>
                    </h2>

                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        Production-grade AI systems and tools, built in the open. Each project represents real-world engineering challenges solved with modern architectures.
                    </p>
                </div>

                {/* Project Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card group block"
                        >
                            <div className="relative h-full bg-[var(--bg-elevated)]/80 backdrop-blur-sm border border-[var(--text-primary)]/8 rounded-2xl p-6 transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--bg-elevated)] hover:shadow-xl hover:shadow-[var(--accent-primary)]/5 hover:-translate-y-1 cursor-pointer">
                                {/* Gradient Highlight on Hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-warm)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* Header with Icon and Link */}
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="p-3 bg-[var(--accent-primary)]/10 rounded-xl group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                                            <Github className="text-[var(--accent-primary)]" size={24} />
                                        </div>
                                        <ExternalLink
                                            size={18}
                                            className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors mt-1"
                                        />
                                    </div>

                                    {/* Project Name */}
                                    <h3 className="text-xl font-serif font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                        {project.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-[var(--bg-secondary)] text-xs font-mono text-[var(--accent-secondary)] rounded-lg border border-[var(--accent-primary)]/10 group-hover:border-[var(--accent-primary)]/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View More Link */}
                <div className="text-center">
                    <a
                        href={resumeData.personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 transition-all duration-300"
                    >
                        <Github size={18} className="text-[var(--accent-primary)]" />
                        <span className="text-[var(--text-primary)] font-mono text-sm uppercase tracking-wider">
                            View All Repositories
                        </span>
                        <ArrowRight
                            size={16}
                            className="text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
