'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-foreground/10 bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-outfit text-white mb-2">Anudeep Sri Bathina</h3>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved. Built with Next.js 15 & Framer Motion.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={resumeData.personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={resumeData.personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${resumeData.personalInfo.email}`}
                        className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
