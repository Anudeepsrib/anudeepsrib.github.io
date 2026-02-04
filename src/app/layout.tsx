import type { Metadata } from 'next';
import { Syne, IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import BackgroundGraph from '@/components/BackgroundGraph';
import SmoothScroll from '@/components/SmoothScroll';
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

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Anudeep | AI Architect',
    description: "Lead Data Scientist and AI Architect specializing in Generative AI, LLMs, and scalable machine learning systems. Expert in building production-grade AI solutions associated with high-impact business outcomes.",
    keywords: ["Lead Data Scientist", "AI Architect", "Generative AI", "LLM", "Machine Learning", "Dallas", "USA", "RAG", "Vector Search", "Python", "Data Engineering"],
    icons: {
        icon: [
            { url: '/assets/logo.png', type: 'image/png' },
        ],
        apple: '/assets/logo.png',
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
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: resumeData.personalInfo.name,
        jobTitle: resumeData.personalInfo.title,
        description: resumeData.personalInfo.summary,
        url: 'https://anudeepsri.com',
        image: 'https://anudeepsri.com/assets/profile-pic.jpeg',
        email: resumeData.personalInfo.email,
        sameAs: [
            resumeData.personalInfo.github,
            resumeData.personalInfo.linkedin,
            'https://adplist.org/mentors/anudeep-sri-bathina',
            'https://topmate.io/anudeepsri',
        ],
        alumniOf: [
            {
                '@type': 'EducationalOrganization',
                name: 'University of Massachusetts Dartmouth',
            },
            {
                '@type': 'EducationalOrganization',
                name: 'VIT University',
            },
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'AT&T',
        },
        knowsAbout: [
            'Generative AI',
            'Large Language Models',
            'RAG Systems',
            'Machine Learning',
            'Data Engineering',
            'Python',
            'FastAPI',
        ],
    };

    return (
        <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable} ${inter.variable} dark`} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className="bg-navy-950 text-offwhite antialiased selection:bg-seafoam/30 selection:text-seafoam"
                suppressHydrationWarning
            >
                <SmoothScroll />
                <div className="grain-overlay" />
                <div className="vignette" />
                <div className="relative min-h-screen flex flex-col">
                    <BackgroundGraph />
                    {children}
                </div>
            </body>
        </html>
    );
}
