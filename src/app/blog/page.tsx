import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog | Anudeep Sri Bathina',
    description: 'Technical articles and insights on Generative AI, LLMs, RAG systems, and production ML. Written by Anudeep Sri Bathina, AI Architect at AT&T.',
};

interface Post {
    slug: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    description: string;
    content: string;
    readTime: number;
}

interface Note {
    slug: string;
    title: string;
    content: string;
    readTime: number;
}

async function getPosts(): Promise<Post[]> {
    const postsDir = path.join(process.cwd(), 'posts');
    const fileNames = fs.readdirSync(postsDir);
    
    const posts = await Promise.all(
        fileNames
            .filter(name => name.endsWith('.md'))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = path.join(postsDir, fileName);
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
                    slug,
                    title: parsed.title || '',
                    date: parsed.date || '',
                    author: parsed.author || 'Anudeep Sri Bathina',
                    tags: parsed.tags || [],
                    category: parsed.category || '',
                    description: parsed.description || '',
                    content,
                    readTime,
                } as Post;
            })
    );
    
    return posts.filter((post): post is Post => post !== null)
               .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

async function getNotes(): Promise<Note[]> {
    const notesDir = path.join(process.cwd(), 'notes');
    const fileNames = fs.readdirSync(notesDir);
    
    const notes = await Promise.all(
        fileNames
            .filter(name => name.endsWith('.md'))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = path.join(notesDir, fileName);
                const content = fs.readFileSync(fullPath, 'utf8');
                
                // Extract title from first h1 or filename
                const titleMatch = content.match(/^#\s+(.+)$/m);
                const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                
                const wordsPerMinute = 200;
                const wordCount = content.split(/\s+/).length;
                const readTime = Math.ceil(wordCount / wordsPerMinute);
                
                return {
                    slug,
                    title,
                    content,
                    readTime,
                } as Note;
            })
    );
    
    return notes.filter((note): note is Note => note !== null);
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

export default async function BlogPage() {
    const posts = await getPosts();
    const notes = await getNotes();

    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
            <Navbar />
            
            <div className="container mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-cabinet-grotesk mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                            Blog & Notes
                        </h1>
                        <p className="text-lg text-[var(--text-2)] max-w-3xl mx-auto">
                            Technical articles and field notes on Generative AI, LLMs, RAG systems, and production machine learning.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Blog Posts */}
                {posts.length > 0 && (
                    <section className="mb-20">
                        <ScrollReveal>
                            <h2 className="text-2xl font-bold font-cabinet-grotesk mb-8">Articles</h2>
                        </ScrollReveal>
                        
                        <StaggerContainer className="space-y-6">
                            {posts.map((post, index) => (
                                <ScrollReveal key={post.slug} delay={index * 0.1}>
                                    <Link href={`/blog/${post.slug}`} className="block group">
                                        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[var(--accent-1)]/30">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold font-cabinet-grotesk mb-2 text-[var(--text)] group-hover:text-[var(--accent-1)] transition-colors">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-[var(--text-2)] mb-4 line-clamp-2">
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
                                                    
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {post.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="px-2 py-1 rounded bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20 text-xs font-mono text-[var(--accent-1)]"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <ArrowRight 
                                                    size={20} 
                                                    className="text-[var(--text-3)] group-hover:text-[var(--accent-1)] transition-colors flex-shrink-0 mt-4 lg:mt-0 lg:ml-4"
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
                            <h2 className="text-2xl font-bold font-cabinet-grotesk mb-8">Field Notes</h2>
                        </ScrollReveal>
                        
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {notes.map((note, index) => (
                                <ScrollReveal key={note.slug} delay={index * 0.1}>
                                    <Link href={`/notes/${note.slug}`} className="block group">
                                        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[var(--accent-2)]/30">
                                            <h3 className="text-lg font-semibold font-cabinet-grotesk mb-2 text-[var(--text)] group-hover:text-[var(--accent-2)] transition-colors">
                                                {note.title}
                                            </h3>
                                            
                                            <div className="flex items-center gap-2 text-sm text-[var(--text-3)] mb-3">
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
                        <h2 className="text-2xl font-bold font-cabinet-grotesk mb-8">Also Published On</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a
                                href="https://anudeepsrib.substack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[var(--accent-1)]/30 group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold font-cabinet-grotesk text-[var(--text)] group-hover:text-[var(--accent-1)] transition-colors">
                                        Substack
                                    </h3>
                                    <ExternalLink size={16} className="text-[var(--text-3)] group-hover:text-[var(--accent-1)] transition-colors" />
                                </div>
                                <p className="text-[var(--text-2)] text-sm">
                                    Deep dives on AI architecture, production ML systems, and technical leadership.
                                </p>
                            </a>
                            
                            <a
                                href="https://medium.com/@anudeepsri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[var(--accent-1)]/30 group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold font-cabinet-grotesk text-[var(--text)] group-hover:text-[var(--accent-1)] transition-colors">
                                        Medium
                                    </h3>
                                    <ExternalLink size={16} className="text-[var(--text-3)] group-hover:text-[var(--accent-1)] transition-colors" />
                                </div>
                                <p className="text-[var(--text-2)] text-sm">
                                    Technical tutorials and case studies on modern AI/ML engineering.
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
