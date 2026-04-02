'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] hero-glow" />

            <div className="relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-[100px] md:text-[160px] font-display font-black text-[var(--text)] leading-none tracking-tighter mb-2">
                        404
                    </h1>

                    <p className="text-[15px] text-[var(--text-2)] mb-8">
                        This page doesn&apos;t exist.
                    </p>

                    <div className="flex items-center gap-3">
                        <Link href="/" className="btn-primary">
                            <Home size={14} />
                            Home
                        </Link>
                        <button
                            onClick={() => typeof window !== 'undefined' && window.history.back()}
                            className="btn-secondary"
                        >
                            <ArrowLeft size={14} />
                            Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
