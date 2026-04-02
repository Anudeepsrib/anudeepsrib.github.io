'use client';
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const nav = [
    { label: 'Experience', href: '/journey' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'Recognitions', href: '/recognitions' },
    { label: 'Blog', href: '/blog' },
];

const connect = [
    { label: 'GitHub', href: 'https://github.com/anudeepsrib' },
    { label: 'ADPList', href: 'https://adplist.org/mentors/anudeep-sri-bathina' },
    { label: 'Topmate', href: 'https://topmate.io/anudeepsrib' },
    { label: 'Substack', href: 'https://substack.com/@anudeepai' },
    { label: 'Email', href: 'mailto:anudeepSri108@gmail.com' },
];

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)]">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20 mb-12">
                        <div>
                            <p className="text-sm font-display font-semibold text-[var(--text)] mb-1">
                                Anudeep Sri Bathina
                            </p>
                            <p className="text-[13px] text-[var(--text-3)] max-w-xs">
                                AI Architect. Building production systems that scale.
                            </p>
                        </div>

                        <div>
                            <p className="text-[11px] font-mono text-[var(--text-3)] uppercase tracking-wider mb-3">
                                Pages
                            </p>
                            <div className="flex flex-col gap-2">
                                {nav.map((l) => (
                                    <Link key={l.href} href={l.href} className="text-[13px] text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-mono text-[var(--text-3)] uppercase tracking-wider mb-3">
                                Connect
                            </p>
                            <div className="flex flex-col gap-2">
                                {connect.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        target={l.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel={l.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                        className="text-[13px] text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
                    <p className="text-[11px] text-[var(--text-3)] font-mono">
                        &copy; 2026
                    </p>
                    <p className="text-[11px] text-[var(--text-3)] font-mono">
                        Next.js &middot; TypeScript
                    </p>
                </div>
            </div>
        </footer>
    );
}
