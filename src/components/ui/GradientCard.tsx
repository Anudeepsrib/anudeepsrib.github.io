import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientCardProps extends HTMLAttributes<HTMLDivElement> {
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
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] shadow-premium",
        'after:pointer-events-none after:absolute after:left-6 after:top-0 after:h-1 after:w-12 after:rounded-b-full after:bg-[var(--accent)] after:content-[""]',
        interactive &&
          "transition duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)]",
        featured && "border-[var(--border-strong)] bg-[var(--surface-raised)]",
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
