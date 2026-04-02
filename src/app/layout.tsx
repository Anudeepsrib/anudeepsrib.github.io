import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import resumeData from '@/data/resumeData.json';

const jetbrainsMono = JetBrains_Mono({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Anudeep Sri Bathina | AI Architect',
    description:
        'AI Architect with 11+ years building production-grade AI systems, LLM/RAG solutions, and enterprise-scale platforms at AT&T, Capgemini, Cognizant, and UMass Dartmouth.',
    keywords: [
        'AI Architect',
        'Generative AI',
        'LLM',
        'RAG Systems',
        'Machine Learning',
        'Agentic AI',
        'MLOps',
        'Computer Vision',
        'Python',
        'FastAPI',
    ],
    icons: {
        icon: [{ url: '/assets/logo.png', type: 'image/png' }],
        apple: '/assets/logo.png',
    },
    openGraph: {
        title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
        description:
            'AI Architect with 11+ years building production-grade AI systems and enterprise-scale platforms.',
        url: 'https://anudeepsri.com',
        siteName: `${resumeData.personalInfo.name} Portfolio`,
        images: [
            {
                url: '/assets/profile-pic.jpeg',
                width: 800,
                height: 600,
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.title}`,
        description:
            'AI Architect with 11+ years building production-grade AI systems.',
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
            'https://topmate.io/anudeepsrib',
            'https://substack.com/@anudeepai',
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
            'Agentic AI',
            'Computer Vision',
            'MLOps',
            'Python',
            'FastAPI',
        ],
    };

    return (
        <html lang="en" className={`${jetbrainsMono.variable} dark`} suppressHydrationWarning>
            <head>
                <link rel="preload" href="/fonts/satoshi-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/satoshi-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/cabinet-grotesk-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className="bg-[#0A0A0F] text-[#F5F5F7] antialiased selection:bg-[rgba(0,240,255,0.25)] selection:text-[#F5F5F7]"
                suppressHydrationWarning
            >
                <SmoothScroll />
                <Preloader />
                <div className="grain-overlay" />
                <div className="vignette" />
                <div className="relative min-h-screen flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    );
}
