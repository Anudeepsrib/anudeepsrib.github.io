'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    duration?: number;
}

export default function AnimatedCounter({
    target,
    suffix = '',
    prefix = '',
    className,
    duration = 2,
}: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));

    useEffect(() => {
        if (reduceMotion) {
            count.set(target);
            return;
        }

        if (isInView) {
            animate(count, target, { duration, ease: 'easeOut' });
        }
    }, [isInView, target, count, duration, reduceMotion]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}
