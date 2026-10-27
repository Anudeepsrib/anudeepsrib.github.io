import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import resumeData from "@/data/resumeData.json";

export default function CTASection() {
  return (
    <section className="relative z-10 pb-8 pt-10" id="contact">
      <Container>
        <div className="contact-panel" aria-labelledby="contact-title">
          <div>
            <span className="section-number text-[var(--signal)]">
              06 / Let&apos;s collaborate
            </span>
            <h2
              id="contact-title"
              className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] !text-white sm:text-6xl"
            >
              Bring me the AI problem that has to hold up in production.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 !text-white/75">
              Architecture, agentic systems, or the path from a promising
              prototype to a dependable platform. Let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              className="contact-primary"
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} aria-hidden="true" /> Start a conversation{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              className="contact-secondary"
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
