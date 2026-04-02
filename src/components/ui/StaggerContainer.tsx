'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
}

export default function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    delayChildren = 0.2,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: staggerDelay, delayChildren },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
