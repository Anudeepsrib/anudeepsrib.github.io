import {
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Mic2,
  Users,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";

const teachingAndMentoringMetrics = [
  {
    value: "500+",
    label: "AI teaching hours",
    detail: "Including 306 hours at UT Austin",
  },
  {
    value: "200+",
    label: "Session attendees",
    detail: "Across hands-on AI programs",
  },
  {
    value: "1,000+",
    label: "Learners reached",
    detail: "Through teaching and community",
  },
  {
    value: "70+",
    label: "Career mentorship sessions",
    detail: "Across Topmate and ADPList",
  },
];

const recognitions = [
  { value: "RISE Award", label: "AT&T · production GenAI delivery" },
  { value: "Extra Mile", label: "Capgemini · data and ML delivery" },
  { value: "4.76 / 5", label: "UT Austin · learner rating" },
];

export default function Authorship() {
  return (
    <section className="premium-section relative z-10" id="research">
      <Container>
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <span className="section-number">03 / Beyond delivery</span>
            <h2 className="section-title">
              Research, guest lectures, and mentorship.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[var(--text-2)] lg:justify-self-end">
            Research sharpens the evaluation practice. Teaching makes AI
            practical, while career mentorship helps people move forward.
          </p>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
          {teachingAndMentoringMetrics.map((metric) => (
            <div key={metric.label} className="bg-[var(--surface)] p-5">
              <strong className="block font-display text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
                {metric.value}
              </strong>
              <span className="mt-2 block text-sm font-semibold text-[var(--text)]">
                {metric.label}
              </span>
              <span className="mt-1 block text-xs leading-5 text-[var(--text-3)]">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="editorial-gallery">
          <div className="gallery-column gallery-column-wide">
            <div className="gallery-heading">
              <BookOpen size={17} aria-hidden="true" />
              <h3>Published work</h3>
            </div>
            {resumeData.publications.map((publication) => (
              <a
                key={publication.title}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-row"
              >
                <span className="gallery-year">{publication.year}</span>
                <span>
                  <strong>{publication.title}</strong>
                  <small>{publication.publisher}</small>
                  <span>{publication.description}</span>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="gallery-column">
            <div className="gallery-heading">
              <Mic2 size={17} aria-hidden="true" />
              <h3>Guest lectures &amp; speaking</h3>
              <span className="ml-auto text-right font-mono text-[11px] text-[var(--text-3)]">
                18+ engagements · 5+ universities
              </span>
            </div>
            {resumeData.talks.map((talk) => (
              <a
                key={`${talk.title}-${talk.year}`}
                href={talk.links[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-row gallery-row-compact"
              >
                <span className="gallery-year">{talk.year}</span>
                <span>
                  <strong>{talk.title}</strong>
                  <small>{talk.event}</small>
                </span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
            <Link
              href="/recognitions"
              className="flex min-h-12 items-center justify-between px-5 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--bg-secondary)]"
            >
              View all guest lectures
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <aside className="mentoring-note">
            <Users size={20} aria-hidden="true" />
            <p className="studio-kicker mt-5 text-[var(--signal-dark)]">
              Career mentorship
            </p>
            <h3 className="mt-2 text-3xl font-semibold">
              Make the path easier to see.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-2)]">
              70+ one-to-one sessions across Topmate and ADPList, focused on AI
              careers, system design, interview preparation, and communicating
              technical work with credibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="text-link"
                href="https://adplist.org/mentors/anudeep-sri-bathina"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADPList <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="https://topmate.io/anudeepsri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Topmate <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-2">
          <div className="bg-[var(--surface)] p-6">
            <div className="flex items-center gap-2 text-[var(--accent)]">
              <GraduationCap size={18} aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">
                Education
              </h3>
            </div>
            <div className="mt-5 space-y-5">
              {resumeData.education.map((item) => (
                <div key={item.institution}>
                  <p className="font-semibold text-[var(--text)]">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-2)]">
                    {item.institution} · {item.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--surface)] p-6">
            <div className="flex items-center gap-2 text-[var(--accent)]">
              <Award size={18} aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">
                Recognition
              </h3>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {recognitions.map((item) => (
                <div key={item.value}>
                  <p className="font-semibold text-[var(--text)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
