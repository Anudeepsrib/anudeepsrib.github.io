import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Note {
    title: string;
    content: string;
    readTime: number;
}

async function getNote(slug: string): Promise<Note | null> {
    const notesDir = path.join(process.cwd(), 'notes');
    const fullPath = path.join(notesDir, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract title from first h1 or filename
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    
    return {
        title,
        content,
        readTime,
    } as Note;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const note = await getNote(params.slug);
    
    if (!note) {
        return {
            title: 'Note Not Found',
        };
    }
    
    return {
        title: `${note.title} | Field Notes | Anudeep Sri Bathina`,
        description: `Technical field note: ${note.title}`,
    };
}

export async function generateStaticParams() {
    const notesDir = path.join(process.cwd(), 'notes');
    const fileNames = fs.readdirSync(notesDir);
    
    return fileNames
        .filter(name => name.endsWith('.md'))
        .map(fileName => ({
            slug: fileName.replace(/\.md$/, ''),
        }));
}

export default async function NotePage({ params }: { params: { slug: string } }) {
    const note = await getNote(params.slug);
    
    if (!note) {
        notFound();
    }
    
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
            <Navbar />
            
            <article className="container mx-auto px-6 py-20 max-w-4xl">
                <ScrollReveal>
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-[var(--text-2)] hover:text-[var(--accent-2)] transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Back to Field Notes
                    </Link>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                    <header className="mb-12">
                        <div className="flex items-center gap-2 text-[var(--accent-2)] text-sm font-mono mb-4">
                            <FileText size={16} />
                            FIELD NOTE
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-1)] bg-clip-text text-transparent">
                            {note.title}
                        </h1>
                        
                        <div className="flex items-center gap-2 text-[var(--text-2)]">
                            <Clock size={16} />
                            {note.readTime} min read
                        </div>
                    </header>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                    <div className="prose prose-invert max-w-none">
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => (
                                    <h1 className="text-3xl font-bold font-cabinet-grotesk mb-6 mt-12 text-[var(--text)]">
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children }) => (
                                    <h2 className="text-2xl font-bold font-cabinet-grotesk mb-4 mt-8 text-[var(--text)]">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className="text-xl font-semibold font-cabinet-grotesk mb-3 mt-6 text-[var(--text)]">
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p className="text-[var(--text-2)] leading-relaxed mb-6">
                                        {children}
                                    </p>
                                ),
                                code: ({ inline, children }) => (
                                    inline ? (
                                        <code className="bg-[var(--bg-secondary)] border border-[var(--border)] px-1.5 py-0.5 rounded text-sm font-mono text-[var(--accent-2)]">
                                            {children}
                                        </code>
                                    ) : (
                                        <code className="block bg-[var(--bg-secondary)] border border-[var(--border)] p-4 rounded-lg text-sm font-mono text-[var(--text)] overflow-x-auto">
                                            {children}
                                        </code>
                                    )
                                ),
                                pre: ({ children }) => (
                                    <pre className="bg-[var(--bg-secondary)] border border-[var(--border)] p-4 rounded-lg overflow-x-auto mb-6">
                                        {children}
                                    </pre>
                                ),
                                ul: ({ children }) => (
                                    <ul className="list-disc list-inside space-y-2 mb-6 text-[var(--text-2)]">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="list-decimal list-inside space-y-2 mb-6 text-[var(--text-2)]">
                                        {children}
                                    </ol>
                                ),
                                li: ({ children }) => (
                                    <li className="leading-relaxed">
                                        {children}
                                    </li>
                                ),
                                a: ({ href, children }) => (
                                    <a 
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--accent-2)] hover:text-[var(--accent-2)]/80 underline"
                                    >
                                        {children}
                                    </a>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-[var(--accent-2)] pl-4 py-2 my-6 bg-[var(--accent-2)]/5 rounded-r-lg">
                                        <p className="text-[var(--text-2)] italic">
                                            {children}
                                        </p>
                                    </blockquote>
                                ),
                            }}
                        >
                            {note.content}
                        </ReactMarkdown>
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                    <div className="mt-16 pt-8 border-t border-[var(--border)]">
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-2)] text-white rounded-lg hover:bg-[var(--accent-2)]/90 transition-colors"
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
