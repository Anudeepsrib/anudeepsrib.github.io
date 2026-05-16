"use client";

import { ArrowUpRight } from "lucide-react";
import GradientCard from "@/components/ui/GradientCard";

interface PublicationCardProps {
  title: string;
  venue: string;
  description: string;
  link: string;
}

export default function PublicationCard({
  title,
  venue,
  description,
  link,
}: PublicationCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <GradientCard interactive className="h-full p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium text-[var(--accent)]">
              {venue}
            </p>
            <h3 className="text-lg font-semibold leading-snug text-[var(--text)]">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[var(--text-2)]">
              {description}
            </p>
          </div>
          <ArrowUpRight
            size={17}
            className="mt-1 shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--accent)]"
          />
        </div>
      </GradientCard>
    </a>
  );
}
