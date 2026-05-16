import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllNotes, getAllPosts } from "@/lib/content";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Anudeep Sri Bathina",
  description:
    "Technical articles and insights on Generative AI, LLMs, RAG systems, and production ML. Written by Anudeep Sri Bathina, AI Architect at AT&T.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = getAllPosts();
  const notes = getAllNotes();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h1 className="font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Blog & Notes
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-[var(--text-2)]">
              Technical articles and field notes on Generative AI, LLMs, RAG
              systems, and production machine learning.
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Posts */}
        {posts.length > 0 && (
          <section className="mb-20">
            <ScrollReveal>
              <h2 className="font-cabinet-grotesk mb-8 text-2xl font-bold">
                Articles
              </h2>
            </ScrollReveal>

            <StaggerContainer className="space-y-6">
              {posts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="hover:border-[var(--accent-1)]/30 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                      <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <h3 className="font-cabinet-grotesk mb-2 text-xl font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-1)]">
                            {post.title}
                          </h3>
                          <p className="mb-4 line-clamp-2 text-[var(--text-2)]">
                            {post.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-3)]">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              {post.readTime} min read
                            </div>
                            <div className="flex items-center gap-1">
                              <span>By {post.author}</span>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-[var(--accent-1)]/10 border-[var(--accent-1)]/20 rounded border px-2 py-1 font-mono text-xs text-[var(--accent-1)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ArrowRight
                          size={20}
                          className="mt-4 flex-shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--accent-1)] lg:ml-4 lg:mt-0"
                        />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </section>
        )}

        {/* Field Notes */}
        {notes.length > 0 && (
          <section className="mb-20">
            <ScrollReveal>
              <h2 className="font-cabinet-grotesk mb-8 text-2xl font-bold">
                Field Notes
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {notes.map((note, index) => (
                <ScrollReveal key={note.slug} delay={index * 0.1}>
                  <Link href={`/notes/${note.slug}`} className="group block">
                    <div className="hover:border-[var(--accent-2)]/30 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                      <h3 className="font-cabinet-grotesk mb-2 text-lg font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-2)]">
                        {note.title}
                      </h3>

                      <div className="mb-3 flex items-center gap-2 text-sm text-[var(--text-3)]">
                        <Clock size={14} />
                        {note.readTime} min read
                      </div>

                      <div className="flex items-center gap-1 text-sm text-[var(--accent-2)]">
                        <span>Note</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </section>
        )}

        {/* External Publications */}
        <ScrollReveal>
          <section>
            <h2 className="font-cabinet-grotesk mb-8 text-2xl font-bold">
              Also Published On
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <a
                href="https://anudeepsrib.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-[var(--accent-1)]/30 group rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-cabinet-grotesk text-lg font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-1)]">
                    Substack
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[var(--text-3)] transition-colors group-hover:text-[var(--accent-1)]"
                  />
                </div>
                <p className="text-sm text-[var(--text-2)]">
                  Deep dives on AI architecture, production ML systems, and
                  technical leadership.
                </p>
              </a>

              <a
                href="https://medium.com/@anudeepsri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-[var(--accent-1)]/30 group rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-cabinet-grotesk text-lg font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-1)]">
                    Medium
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[var(--text-3)] transition-colors group-hover:text-[var(--accent-1)]"
                  />
                </div>
                <p className="text-sm text-[var(--text-2)]">
                  Technical tutorials and case studies on modern AI/ML
                  engineering.
                </p>
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}
