'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mentorship from '@/components/Mentorship';

export default function MentorshipPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)]">
            <Navbar />
            <Mentorship />
            <Footer />
        </main>
    );
}
