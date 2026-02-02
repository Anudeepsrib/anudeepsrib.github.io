'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Recognitions from '@/components/Recognitions';

export default function RecognitionsPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)]">
            <Navbar />
            <Recognitions />
            <Footer />
        </main>
    );
}
