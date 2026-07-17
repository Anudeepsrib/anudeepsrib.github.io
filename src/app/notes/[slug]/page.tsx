import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllNotes, getNote } from "@/lib/content";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: `${note.title} | Field Notes | Anudeep Sri Bathina`,
    description: `Technical field note: ${note.title}`,
  };
}

export async function generateStaticParams() {
  return getAllNotes().map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <article className="container mx-auto max-w-4xl px-6 py-20">
        <ScrollReveal>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-[var(--text-2)] transition-colors hover:text-[var(--accent-2)]"
          >
            <ArrowLeft size={16} />
            Back to Field Notes
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-2 font-mono text-sm text-[var(--accent-2)]">
              <FileText size={16} />
              FIELD NOTE
            </div>

            <h1 className="mb-6 font-heading text-4xl font-black tracking-[-0.04em] text-[var(--text)] md:text-6xl">
              {note.title}
            </h1>

            <div className="flex items-center gap-2 text-[var(--text-2)]">
              <Clock size={16} />
              {note.readTime} min read
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="portfolio-prose prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="font-cabinet-grotesk mb-6 mt-12 text-3xl font-bold text-[var(--text)]">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-cabinet-grotesk mb-4 mt-8 text-2xl font-bold text-[var(--text)]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-cabinet-grotesk mb-3 mt-6 text-xl font-semibold text-[var(--text)]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 leading-relaxed text-[var(--text-2)]">
                    {children}
                  </p>
                ),
                code: ({ children, className }) => (
                  <code
                    className={
                      className ??
                      "rounded border border-[var(--border)] bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-sm text-[var(--accent-2)]"
                    }
                  >
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="mb-6 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                    {children}
                  </pre>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 list-inside list-disc space-y-2 text-[var(--text-2)]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 list-inside list-decimal space-y-2 text-[var(--text-2)]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent-2)]/80 text-[var(--accent-2)] underline"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="bg-[var(--accent-2)]/5 my-6 rounded-r-lg border-l-4 border-[var(--accent-2)] py-2 pl-4">
                    <p className="italic text-[var(--text-2)]">{children}</p>
                  </blockquote>
                ),
              }}
            >
              {note.content}
            </ReactMarkdown>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 border-t border-[var(--border)] pt-8">
            <Link
              href="/blog"
              className="hover:bg-[var(--accent-2)]/90 inline-flex items-center gap-2 rounded-lg bg-[var(--accent-2)] px-4 py-2 text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Field Notes
            </Link>
          </div>
        </ScrollReveal>
      </article>

      <Footer />
    </main>
  );
}
