import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mentorship from '@/components/Mentorship';

export const metadata = {
    title: 'Mentorship | 1:1 AI & Data Science Coaching',
    description: 'Book a mentorship session with Anudeep Sri Bathina. Get personalized guidance on AI careers, interview prep, LLM/RAG systems, and data science roadmaps. 200+ sessions completed via ADPList and Topmate.',
};

export default function MentorshipPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)]">
            <Navbar />
            <Mentorship />
            <Footer />
        </main>
    );
}
