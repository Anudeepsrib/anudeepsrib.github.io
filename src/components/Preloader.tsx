'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center gap-5"
                    >
                        {/* Logo mark */}
                        <img
                            src="/assets/logo.png"
                            alt="Anudeep Logo"
                            className="w-14 h-14 rounded-xl shadow-lg"
                        />

                        {/* Simple loading bar */}
                        <div className="w-24 h-px bg-[var(--border)] overflow-hidden rounded-full">
                            <motion.div
                                className="h-full bg-[var(--blue)]"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
