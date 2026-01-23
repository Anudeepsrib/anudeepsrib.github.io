import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import resumeData from '@/data/resumeData.json';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
    description: "Lead Data Scientist and AI Architect specializing in Generative AI, LLMs, and scalable machine learning systems. Expert in building production-grade AI solutions associated with high-impact business outcomes.",
    keywords: ["Lead Data Scientist", "AI Architect", "Generative AI", "LLM", "Machine Learning", "Dallas", "USA", "RAG", "Vector Search", "Python", "Data Engineering"],
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
        description: "Lead Data Scientist and AI Architect specializing in Generative AI, LLMs, and scalable machine learning systems.",
        url: resumeData.personalInfo.website,
        siteName: `${resumeData.personalInfo.name} Portfolio`,
        images: [
            {
                url: resumeData.personalInfo.image,
                width: 800,
                height: 600,
            },
        ],
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable} dark`} suppressHydrationWarning>
            <body
                className="font-inter bg-background text-foreground antialiased selection:bg-gold-glow/30 selection:text-gold-dim"
                suppressHydrationWarning
            >
                <div className="relative min-h-screen flex flex-col">
                    {/* Background Grid Pattern */}
                    <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_800px_at_50%_-20%,#7c3aed1a,transparent)]"></div>

                    {children}
                </div>
            </body>
        </html>
    );
}
