"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  children: ReactNode;
  className?: string;
}

export default function StatusPill({ children, className }: StatusPillProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-emerald-300/[0.18] bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-medium text-emerald-200",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        {!reduceMotion && (
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-300"
            animate={{ opacity: [0.6, 0], scale: [1, 2.1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
      </span>
      {children}
    </span>
  );
}
