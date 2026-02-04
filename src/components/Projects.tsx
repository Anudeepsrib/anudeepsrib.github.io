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
            className="py-24 md:py-32 relative overflow-hidden bg-navy-950"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-navy-950 z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seafoam/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/10 border border-seafoam/20 mb-6">
                        <FolderGit2 size={18} className="text-seafoam" />
                        <span className="text-sm font-mono text-seafoam">Proof of Work</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-syne text-offwhite mb-6 tracking-tight">
                        Open Source{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam via-cyan-300 to-seafoam">
                            Projects
                        </span>
                    </h2>

                    <p className="text-lg text-coolgray max-w-2xl mx-auto leading-relaxed font-light">
                        Production-grade AI systems and tools, built in the open. Each project represents real-world engineering challenges solved with modern architectures.
                    </p>
                </div>

                {/* Project Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card group block"
                        >
                            <div className="relative h-full bg-navy-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-seafoam/40 hover:bg-navy-900 hover:shadow-xl hover:shadow-seafoam/5 hover:-translate-y-1 cursor-pointer">
                                {/* Gradient Highlight on Hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-seafoam/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* Header with Icon and Link */}
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="p-3 bg-seafoam/10 rounded-xl group-hover:bg-seafoam/20 transition-colors">
                                            <Github className="text-seafoam" size={24} />
                                        </div>
                                        <ExternalLink
                                            size={18}
                                            className="text-coolgray group-hover:text-seafoam transition-colors mt-1"
                                        />
                                    </div>

                                    {/* Project Name */}
                                    <h3 className="text-xl font-bold font-syne text-offwhite mb-3 group-hover:text-seafoam transition-colors">
                                        {project.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-coolgray text-sm leading-relaxed mb-6 font-light line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-black/30 text-xs font-mono text-seafoam/90 rounded-lg border border-seafoam/10 group-hover:border-seafoam/20 transition-colors"
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
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-seafoam/40 hover:bg-seafoam/10 transition-all duration-300"
                    >
                        <Github size={18} className="text-seafoam" />
                        <span className="text-offwhite font-mono text-sm uppercase tracking-wider">
                            View All Repositories
                        </span>
                        <ArrowRight
                            size={16}
                            className="text-seafoam group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
