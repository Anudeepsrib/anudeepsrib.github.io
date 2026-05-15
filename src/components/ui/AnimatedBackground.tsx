'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedBackground() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-[var(--bg)]" />
            <div className="soft-grid absolute inset-0 opacity-70" />
            <motion.div
                className="absolute -inset-x-16 -top-40 h-[38rem]"
                style={{
                    background:
                        'radial-gradient(ellipse at 50% 0%, rgba(125,211,252,0.18), transparent 58%), radial-gradient(ellipse at 82% 26%, rgba(167,243,208,0.07), transparent 38%)',
                }}
                animate={
                    reduceMotion
                        ? undefined
                        : {
                              opacity: [0.72, 0.95, 0.78],
                              scale: [1, 1.025, 1.01],
                              x: ['-1%', '1%', '-0.5%'],
                          }
                }
                transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(5,6,10,0.58)_100%)]" />
        </div>
    );
}
