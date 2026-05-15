'use client';

import type { LucideIcon } from 'lucide-react';
import GradientCard from '@/components/ui/GradientCard';

interface SkillCategoryCardProps {
    icon: LucideIcon;
    title: string;
    techs: string[];
}

export default function SkillCategoryCard({ icon: Icon, title, techs }: SkillCategoryCardProps) {
    return (
        <GradientCard interactive className="h-full p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(125,211,252,0.16)] bg-[rgba(125,211,252,0.08)] text-[var(--accent)]">
                    <Icon size={17} strokeWidth={1.7} />
                </div>
                <h3 className="text-[15px] font-semibold leading-snug text-[var(--text)]">
                    {title}
                </h3>
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
