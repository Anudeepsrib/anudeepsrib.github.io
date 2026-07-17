"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
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
        "group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] shadow-premium",
        'after:pointer-events-none after:absolute after:left-6 after:top-0 after:h-1 after:w-12 after:rounded-b-full after:bg-[var(--accent)] after:content-[""]',
        interactive &&
          "transition-colors duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)]",
        featured && "border-[var(--border-strong)] bg-[var(--surface-raised)]",
        className,
      )}
      whileHover={
        interactive && !reduceMotion ? { y: -5, scale: 1.005 } : undefined
      }
      whileTap={interactive && !reduceMotion ? { scale: 0.995 } : undefined}
      transition={{ type: "spring", stiffness: 340, damping: 28, mass: 0.7 }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
