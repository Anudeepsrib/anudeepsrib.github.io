"use client";

import type { LucideIcon } from "lucide-react";
import GradientCard from "@/components/ui/GradientCard";

interface SkillCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  techs: string[];
}

export default function SkillCategoryCard({
  icon: Icon,
  title,
  description,
  techs,
}: SkillCategoryCardProps) {
  return (
    <GradientCard interactive className="h-full p-5 sm:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
          <Icon size={17} strokeWidth={1.7} />
        </div>
        <div>
          <h3 className="text-lg font-bold leading-snug text-[var(--text)]">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </GradientCard>
  );
}
