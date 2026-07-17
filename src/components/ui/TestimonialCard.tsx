"use client";

import { ExternalLink } from "lucide-react";
import GradientCard from "@/components/ui/GradientCard";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  source: string;
  sourceUrl: string;
}

export default function TestimonialCard({
  name,
  role,
  text,
  source,
  sourceUrl,
}: TestimonialCardProps) {
  return (
    <GradientCard className="h-full p-6 sm:p-7">
      <blockquote className="text-base leading-7 text-[var(--text)] md:text-lg md:leading-8">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">{name}</p>
          <p className="mt-1 text-xs text-[var(--text-3)]">{role}</p>
        </div>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] transition-colors hover:text-[var(--text)]"
          aria-label={`View ${source} source for ${name} (opens in a new tab)`}
        >
          via {source}
          <ExternalLink size={12} />
        </a>
      </div>
    </GradientCard>
  );
}
