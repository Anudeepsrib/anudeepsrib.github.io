'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    // Ensure we have at least 3 items for the stack effect
    const displayProjects = [...resumeData.projects];
    if (displayProjects.length < 3) {
        displayProjects.push({
            name: "More Systems",
            description: "Explore my GitHub for more open source contributions and experiments.",
            technologies: ["GitHub", "Open Source"],
            link: resumeData.personalInfo.github
        });
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=150%', // Pin for a bit to show off the entrance
                pin: true,
                scrub: 1,
            }
        });

        // Entrance Animation
        // Headline from left
        tl.fromTo(headerRef.current,
            { x: '-18vw', opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            0
        );

        // Card stack from right (Initial position handled by CSS or set()?)
        // We'll animate them "dealing" in.

        const cards = gsap.utils.toArray('.project-card');

        // Initial state set in CSS or via set()
        gsap.set(cards, { x: '55vw', rotationY: -10, opacity: 0 });

        // Animation to "deal" them into stack
        tl.to(cards, {
            x: (i: number) => {
                // Back: 24px, Middle: 12px, Front: 0
                // i=0 (Front), i=1 (Middle), i=2 (Back) - assuming reverse order in DOM or forward?
                // Let's assume standard order: 0 is top, 1 is middle, 2 is back
                // Wait, standard stacking context means last is on top.
                // Let's reverse the index logic for visual stacking if we use absolute positioning.
                // If using relative/grid, they don't stack. They need absolute for 3D stack.
                return (i * 24); // Simple offset
            },
            y: (i: number) => (i * 12),
            scale: (i: number) => 1 - (i * 0.05),
            opacity: (i: number) => 1 - (i * 0.15),
            rotationY: 0,
            duration: 1.5,
            stagger: 0.2, // Stagger the deal
            ease: 'power3.out'
        }, 0.2);

        // Hover effects are handled via CSS/JS events since they are interaction-based, not scroll-scrub based.

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="projects" className="min-h-screen py-24 relative overflow-hidden bg-navy-950 flex items-center">
            {/* Background */}
            <div className="absolute inset-0 bg-navy-950 z-0" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-seafoam/10 rounded-full blur-[120px] pointer-events-none" />

            <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Header Side */}
                <div ref={headerRef} className="opacity-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/10 border border-seafoam/20 mb-8">
                        <FolderGit2 size={18} className="text-seafoam" />
                        <span className="text-sm font-mono text-seafoam">Proof of Work</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold font-syne text-offwhite mb-8 tracking-tighter">
                        ENGINEERED<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam to-cyan-200">
                            SYSTEMS
                        </span>
                    </h2>

                    <p className="text-xl text-coolgray max-w-lg leading-relaxed font-light mb-12">
                        Deploying scalable AI architectures that drive business outcomes. Verified in production environments.
                    </p>

                    <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-offwhite font-mono uppercase tracking-wider text-sm hover:text-seafoam transition-colors">
                        <span className="border-b border-seafoam/50 pb-1 group-hover:border-seafoam transition-all">View Full Archive</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Stacked Cards Side */}
                <div ref={cardsRef} className="relative h-[500px] w-full perspective-[1000px]">
                    {/* Reverse map to enforce Z-index stacking (first in array = bottom, last = top) 
                        Actually standard DOM: last is top. So we map normally.
                    */}
                    {displayProjects.map((project, index) => {
                        // We want index 0 to be Front. So we need to reverse the visual order if using absolute
                        // If 0 is front, it should be highest z-index.
                        const zIndex = displayProjects.length - index;

                        return (
                            <div
                                key={index}
                                className="project-card absolute top-0 left-0 w-full md:w-[90%] bg-navy-900 border border-white/10 rounded-[24px] p-8 shadow-2xl hover:border-seafoam/50 transition-colors duration-300 origin-center"
                                style={{
                                    zIndex: zIndex,
                                    // Initial styles will be overwritten by GSAP
                                    transform: 'translateX(55vw) rotateY(-10deg)',
                                    opacity: 0
                                }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-seafoam/10 rounded-xl">
                                        <FolderGit2 className="text-seafoam" size={24} />
                                    </div>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-coolgray hover:text-offwhite transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold font-syne text-offwhite mb-3">{project.name}</h3>
                                <p className="text-coolgray text-sm leading-relaxed mb-6 font-light">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-black/20 text-xs font-mono text-seafoam/80 rounded-lg border border-seafoam/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
