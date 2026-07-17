"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      aria-label={
        external ? `${String(children)} (opens in a new tab)` : undefined
      }
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
