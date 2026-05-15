'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientCardProps extends HTMLMotionProps<'div'> {
    interactive?: boolean;
    featured?: boolean;
}

export default function GradientCard({
    children,
    className,
    interactive = false,
    featured = false,
    ...props
}: GradientCardProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={cn(
                'group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.078),rgba(255,255,255,0.024)),var(--surface)] shadow-premium',
                'before:pointer-events-none before:absolute before:inset-px before:rounded-[7px] before:bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.12),transparent_32rem)] before:opacity-70 before:content-[""]',
                'after:pointer-events-none after:absolute after:inset-x-6 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:content-[""]',
                interactive && 'cursor-pointer transition-colors duration-200 hover:border-[rgba(125,211,252,0.28)] hover:bg-[var(--surface-raised)] hover:shadow-glow',
                featured && 'border-[rgba(125,211,252,0.24)] bg-[rgba(125,211,252,0.055)]',
                className,
            )}
            whileHover={interactive && !reduceMotion ? { y: -6 } : undefined}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            {...props}
        >
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
