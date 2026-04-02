'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="relative py-28 md:py-36" id="contact">
            <motion.div
                ref={ref}
                className="mx-auto max-w-6xl px-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight leading-[1.15]">
                        Let&apos;s talk.
                    </h2>

                    <p className="text-[var(--text-2)] text-[15px] mb-8 leading-relaxed">
                        AI consulting, speaking, mentorship, or research collaboration.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mb-12">
                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Book a session
                            <ArrowRight size={14} />
                        </a>
                        <a
                            href="mailto:anudeepSri108@gmail.com"
                            className="btn-secondary"
                        >
                            <Mail size={14} />
                            Email
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                        {[
                            { label: 'Experience', href: '/journey' },
                            { label: 'Recognitions', href: '/recognitions' },
                            { label: 'Blog', href: '/blog' },
                        ].map((l) => (
                            <Link
                                key={l.label}
                                href={l.href}
                                className="text-xs text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
