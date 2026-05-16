"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientCard from "@/components/ui/GradientCard";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function MetricCard({
  value,
  suffix = "",
  label,
  className,
}: MetricCardProps) {
  return (
    <GradientCard className={cn("p-5 text-left sm:p-6", className)}>
      <div className="font-display text-3xl font-bold leading-none text-[var(--text)] [letter-spacing:0] md:text-4xl">
        <AnimatedCounter target={value} suffix={suffix} />
      </div>
      <p className="mt-3 text-xs font-medium leading-5 text-[var(--text-3)]">
        {label}
      </p>
    </GradientCard>
  );
}
