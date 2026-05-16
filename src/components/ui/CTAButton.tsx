"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external,
  icon,
  className,
}: CTAButtonProps) {
  const reduceMotion = useReducedMotion();
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost:
      "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-[var(--text-2)] transition-colors hover:text-[var(--text)]",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(classes[variant], "group", className)}
      whileHover={reduceMotion ? undefined : { x: 2, y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      {icon}
      {children}
      {variant === "primary" && (
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      )}
    </motion.a>
  );
}
