import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Post {
    title: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    description: string;
    content: string;
    readTime: number;
}

async function getPost(slug: string): Promise<Post | null> {
    const postsDir = path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDir, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter
    const frontmatterMatch = fileContents.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!frontmatterMatch) return null;
    
    const frontmatter = frontmatterMatch[1];
    const content = frontmatterMatch[2];
    
    const parseFrontmatter = (text: string) => {
        const data: any = {};
        const lines = text.split('\n');
        
        lines.forEach(line => {
            const match = line.match(/^(\w+):\s*(.+)$/);
            if (match) {
                const [, key, value] = match;
                
                if (key === 'tags') {
                    data[key] = value.replace(/\[|\]/g, '').split(', ').map(v => v.replace(/"/g, ''));
                } else {
                    data[key] = value.replace(/"/g, '');
                }
            }
        });
        
        return data;
    };
    
    const parsed = parseFrontmatter(frontmatter);
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    
    return {
        title: parsed.title || '',
        date: parsed.date || '',
        author: parsed.author || 'Anudeep Sri Bathina',
        tags: parsed.tags || [],
        category: parsed.category || '',
        description: parsed.description || '',
        content,
        readTime,
    } as Post;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPost(params.slug);
    
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }
    
    return {
        title: `${post.title} | Anudeep Sri Bathina`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), 'posts');
    const fileNames = fs.readdirSync(postsDir);
    
    return fileNames
        .filter(name => name.endsWith('.md'))
        .map(fileName => ({
            slug: fileName.replace(/\.md$/, ''),
        }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    
    if (!post) {
        notFound();
    }
    
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
            <Navbar />
            
            <article className="container mx-auto px-6 py-20 max-w-4xl">
                <ScrollReveal>
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-[var(--text-2)] hover:text-[var(--accent-1)] transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Back to Blog
                    </Link>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-4 text-[var(--text-2)] mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                {post.readTime} min read
                            </div>
                            <div>
                                By {post.author}
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20 text-xs font-mono text-[var(--accent-1)]"
                                >
                                    <Tag size={12} />
                                    {tag}
                                </span>
                            ))}
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
                                        <code className="bg-[var(--bg-secondary)] border border-[var(--border)] px-1.5 py-0.5 rounded text-sm font-mono text-[var(--accent-1)]">
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
                                        className="text-[var(--accent-1)] hover:text-[var(--accent-1)]/80 underline"
                                    >
                                        {children}
                                    </a>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-[var(--accent-1)] pl-4 py-2 my-6 bg-[var(--accent-1)]/5 rounded-r-lg">
                                        <p className="text-[var(--text-2)] italic">
                                            {children}
                                        </p>
                                    </blockquote>
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                    <div className="mt-16 pt-8 border-t border-[var(--border)]">
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-1)] text-white rounded-lg hover:bg-[var(--accent-1)]/90 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Back to Blog
                        </Link>
                    </div>
                </ScrollReveal>
            </article>
            
            <Footer />
        </main>
    );
}
