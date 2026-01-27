import type { Metadata } from 'next';
import { Syne, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import BackgroundGraph from '@/components/BackgroundGraph';
import resumeData from '@/data/resumeData.json';

const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne',
    display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-mono',
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
        <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable} dark`} suppressHydrationWarning>
            <body
                className="font-inter bg-background text-foreground antialiased selection:bg-gold-glow/30 selection:text-gold-dim"
                suppressHydrationWarning
            >
                <div className="relative min-h-screen flex flex-col">
                    <BackgroundGraph />

                    {children}
                </div>
            </body>
        </html>
    );
}
