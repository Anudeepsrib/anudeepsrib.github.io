'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ScrollProgress from '@/components/ui/ScrollProgress';

const links = [
    { label: 'Experience', href: '/journey' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'Awards', href: '/recognitions' },
    { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', h, { passive: true });
        return () => window.removeEventListener('scroll', h);
    }, []);

    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <>
            <ScrollProgress />
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                    scrolled
                        ? 'bg-[rgba(10,10,15,0.92)] backdrop-blur-md border-b border-[var(--border)]'
                        : 'bg-transparent'
                }`}
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
                        <img
                            src="/assets/logo.png"
                            alt=""
                            className="w-7 h-7 rounded"
                        />
                        <span className="text-sm font-display font-semibold text-[var(--text)]">
                            anudeep
                        </span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`text-[13px] transition-colors ${
                                    pathname === l.href
                                        ? 'text-[var(--text)]'
                                        : 'text-[var(--text-3)] hover:text-[var(--text-2)]'
                                }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile */}
                    <button
                        className="md:hidden p-1.5 text-[var(--text-2)]"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? 'Close' : 'Menu'}
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </nav>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            className="md:hidden border-t border-[var(--border)] bg-[rgba(10,10,15,0.97)] backdrop-blur-md"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="px-6 py-5 flex flex-col gap-3">
                                {links.map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className={`text-sm ${
                                            pathname === l.href ? 'text-[var(--text)]' : 'text-[var(--text-3)]'
                                        }`}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}
