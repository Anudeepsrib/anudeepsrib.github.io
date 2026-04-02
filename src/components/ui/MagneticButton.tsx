'use client';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export default function MagneticButton({ children, className, strength = 0.15 }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouse = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left - rect.width / 2) * strength);
        y.set((e.clientY - rect.top - rect.height / 2) * strength);
    };

    const reset = () => {
        animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
        animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ x, y }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
}
