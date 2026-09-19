"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play, RotateCcw } from "lucide-react";
import Container from "@/components/ui/Container";

const stages = [
  {
    id: "ask",
    number: "01",
    label: "Ask",
    short: "Policy question",
    detail:
      "A staff member asks a policy question. The interface can request clarification before retrieval when patient or department context is ambiguous.",
  },
  {
    id: "scope",
    number: "02",
    label: "Scope",
    short: "JWT · RBAC · department",
    detail:
      "Authentication, role checks, and department scope establish which knowledge boundary the request may reach.",
  },
  {
    id: "retrieve",
    number: "03",
    label: "Retrieve",
    short: "Search · grade · cite",
    detail:
      "The graph retrieves from the allowed index, grades relevance, and passes source context forward rather than relying on model memory.",
  },
  {
    id: "verify",
    number: "04",
    label: "Verify",
    short: "Grounded answer",
    detail:
      "The response is checked for groundedness and returned with source context, or fails conservatively when evidence is insufficient.",
  },
] as const;

export default function SystemWalkthrough() {
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;

    timerRef.current = setInterval(() => {
      setActiveStage((current) => {
        if (current === stages.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 900);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing]);

  const startPlayback = () => {
    if (reduceMotion) {
      setActiveStage(stages.length - 1);
      setPlaying(false);
      return;
    }
    setActiveStage(0);
    setPlaying(true);
  };

  return (
    <section className="premium-section relative z-10">
      <Container>
        <figure
          className="architecture-board mx-auto max-w-5xl"
          aria-labelledby="architecture-title"
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
            <div>
              <p className="studio-kicker">System walkthrough · ClinIQ</p>
              <h2
                id="architecture-title"
                className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
              >
                One request, four guarded stages.
              </h2>
            </div>
            <span className="evidence-chip">Verified repo</span>
          </div>

          <div
            className="architecture-flow"
            role="group"
            aria-label="ClinIQ request stages"
          >
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                className="architecture-stage"
                data-active={activeStage === index}
                data-passed={activeStage > index}
                aria-current={activeStage === index ? "step" : undefined}
                onClick={() => {
                  setPlaying(false);
                  setActiveStage(index);
                }}
              >
                <span className="stage-number">{stage.number}</span>
                <span>
                  <span className="block font-semibold text-white">
                    {stage.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-white/55">
                    {stage.short}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div
            className="mt-5 min-h-28 rounded-xl border border-white/15 bg-white/[0.055] p-5"
            aria-live="polite"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--signal)]">
              {stages[activeStage].number} / {stages[activeStage].label}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              {stages[activeStage].detail}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                className="architecture-control"
                onClick={playing ? () => setPlaying(false) : startPlayback}
                aria-label={
                  playing
                    ? "Stop request walkthrough"
                    : "Play request walkthrough"
                }
              >
                {playing ? (
                  <Pause size={15} aria-hidden="true" />
                ) : (
                  <Play size={15} aria-hidden="true" />
                )}
                {playing ? "Stop" : "Trace request"}
              </button>
              {!playing && activeStage === stages.length - 1 && (
                <button
                  type="button"
                  className="architecture-control"
                  onClick={startPlayback}
                >
                  <RotateCcw size={15} aria-hidden="true" /> Replay
                </button>
              )}
            </div>
            <p className="max-w-[17rem] text-xs leading-5 text-white/50">
              <strong className="text-[var(--signal)]">Decision:</strong>{" "}
              separate department indexes make the access boundary explicit, at
              the cost of more index management.
            </p>
          </div>

          <figcaption className="sr-only">
            A ClinIQ policy request is clarified, checked against role and
            department scope, retrieved from an allowed knowledge index, graded
            for relevance, generated with citations, and verified for
            groundedness before the answer is returned.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
