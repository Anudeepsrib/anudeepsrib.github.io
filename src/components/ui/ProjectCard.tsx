"use client";

import { ArrowUpRight } from "lucide-react";
import GradientCard from "@/components/ui/GradientCard";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    tags: string[];
    metrics: string;
    hero?: boolean;
    openSourceCategory?: string;
    patternFor?: string;
  };
  onClick: (trigger: HTMLButtonElement) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const descriptionId = `project-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-description`;

  return (
    <article className="group relative h-full">
      <GradientCard
        interactive
        featured={project.hero}
        className={`h-full ${project.hero ? "p-6 md:p-8" : "p-6"}`}
      >
        <div className="flex h-full flex-col">
          <div className="mb-5 flex items-start justify-between gap-6">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold leading-tight text-[var(--text)] md:text-2xl">
                  {project.name}
                </h3>
                {project.hero && (
                  <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase text-[var(--accent)]">
                    Featured
                  </span>
                )}
                {project.openSourceCategory && (
                  <span className="rounded-full bg-[var(--sage-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase text-[var(--accent-2)]">
                    Open source
                  </span>
                )}
              </div>
              {project.patternFor && (
                <div className="mb-2 text-[10px] font-medium text-[var(--text-3)]">
                  {project.patternFor}
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-3)]">
                <span className="font-mono text-[var(--accent)]">
                  {project.metrics}
                </span>
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--accent)]"
            />
          </div>

          <p
            id={descriptionId}
            className="mb-6 text-sm leading-6 text-[var(--text-2)] md:text-[15px]"
          >
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GradientCard>
      <button
        type="button"
        onClick={(event) => onClick(event.currentTarget)}
        className="absolute inset-0 z-20 rounded-[1.5rem]"
        aria-describedby={descriptionId}
      >
        <span className="sr-only">Open details about {project.name}</span>
      </button>
    </article>
  );
}
