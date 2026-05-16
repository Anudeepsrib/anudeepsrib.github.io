"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/animation";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  staggerChildren?: boolean;
  variants?: Variants;
}

export default function MotionWrapper({
  children,
  className,
  delay = 0,
  once = true,
  staggerChildren = false,
  variants,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const selectedVariants = variants ?? (staggerChildren ? stagger : fadeUp);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={selectedVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
