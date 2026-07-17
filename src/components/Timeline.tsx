import Image from "next/image";
import resumeData from "@/data/resumeData.json";

const phases = [
  { period: "2011 - 2015", label: "Foundation", color: "var(--text-3)" },
  { period: "2015 - 2021", label: "Growth", color: "var(--text-2)" },
  { period: "2021 - 2024", label: "Research", color: "var(--warm)" },
  { period: "2024 - Present", label: "Impact", color: "var(--blue)" },
];

export default function Timeline() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Phase Overview */}
        <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.label} className="bg-[var(--bg-secondary)] p-5">
              <div className="font-mono text-[10px] tracking-widest text-[var(--text-3)]">
                {phase.period}
              </div>
              <div
                className="mt-1 font-display text-lg font-semibold"
                style={{ color: phase.color }}
              >
                {phase.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.startDate}`}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-7 transition-all hover:border-[var(--accent-1)]/20"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Company Info */}
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <div className="mt-1 h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-white/5 p-1.5">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain opacity-90"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                        {exp.company}
                      </h3>
                      {index === 0 && (
                        <span className="rounded-full bg-[var(--accent-1)]/10 px-2.5 py-0.5 text-[10px] font-medium tracking-widest text-[var(--accent-1)]">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-[15px] font-medium text-[var(--text-2)]">
                      {exp.position}
                    </p>
                    <p className="text-xs text-[var(--text-3)]">
                      {exp.startDate} - {exp.endDate} · {exp.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 text-[14.5px] leading-relaxed text-[var(--text-2)]">
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
