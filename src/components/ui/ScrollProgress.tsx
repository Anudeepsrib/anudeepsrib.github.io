"use client";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-[var(--blue)] opacity-40"
      style={{ scaleX }}
    />
  );
}
