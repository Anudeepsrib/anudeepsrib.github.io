import {
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Mic2,
  Quote,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";
import { testimonials } from "@/data/studioData";

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
        <div className="mb-10">
          <div>
            <span className="section-number">03 / Beyond delivery</span>
            <h2 className="section-title max-w-4xl">
              Research, guest lectures, and mentorship.
            </h2>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-2)]">
            Research sharpens the evaluation practice. Teaching makes AI
            practical, while career mentorship helps people move forward.
          </p>
          <nav
            className="mt-5 flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Research and mentorship sections"
          >
            <a className="text-link min-h-11" href="#mentor-testimonials">
              Mentor testimonials <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="text-link min-h-11" href="#publications">
              Published work <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="text-link min-h-11" href="#guest-lectures">
              Guest lectures <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {teachingAndMentoringMetrics.map((metric) => (
            <div key={metric.label} className="min-w-0 bg-[var(--surface)] p-6">
              <strong className="block font-display text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
                {metric.value}
              </strong>
              <span className="mt-3 block text-base font-semibold leading-6 text-[var(--text)]">
                {metric.label}
              </span>
              <span className="mt-2 block text-sm leading-6 text-[var(--text-2)]">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        <section
          className="my-12 scroll-mt-28 sm:my-16"
          id="mentor-testimonials"
          aria-labelledby="testimonials-title"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="studio-kicker text-[var(--accent)]">
                Mentor testimonials
              </p>
              <h3
                id="testimonials-title"
                className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl"
              >
                What learners say after the conversation.
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--text-2)]">
                70+ one-to-one sessions across Topmate and ADPList, focused on
                AI careers, system design, interview preparation, and
                communicating technical work with credibility.
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <a
                className="text-link min-h-11"
                href="https://adplist.org/mentors/anudeep-sri-bathina"
                target="_blank"
                rel="noopener noreferrer"
              >
                View ADPList profile{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                className="text-link min-h-11"
                href="https://topmate.io/anudeepsri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Topmate <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex min-w-0 flex-col rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 md:last:col-span-2 sm:p-8"
              >
                <Quote
                  size={24}
                  className="text-[var(--accent)]"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 max-w-3xl flex-1 text-base leading-8 text-[var(--text)]">
                  “{testimonial.text}”
                </blockquote>
                <footer className="mt-6 border-t border-[var(--border)] pt-4">
                  <p className="text-base font-semibold text-[var(--text)]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-2)]">
                    {testimonial.role} · ADPList
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <div className="editorial-gallery">
          <div className="gallery-column scroll-mt-28" id="publications">
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

          <div className="gallery-column scroll-mt-28" id="guest-lectures">
            <div className="gallery-heading">
              <Mic2 size={17} aria-hidden="true" />
              <h3>Guest lectures &amp; speaking</h3>
              <span className="w-full text-sm leading-6 text-[var(--text-2)]">
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
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-2">
          <div className="min-w-0 bg-[var(--surface)] p-6 sm:p-8">
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
                  <p className="mt-1 text-base leading-7 text-[var(--text-2)]">
                    {item.institution} · {item.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[var(--accent)]">
              <Award size={18} aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">
                Recognition
              </h3>
            </div>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {recognitions.map((item) => (
                <div key={item.value}>
                  <p className="font-semibold text-[var(--text)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
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
