import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Recognitions from '@/components/Recognitions';

export const metadata = {
    title: 'Recognitions | Anudeep Sri Bathina',
    description:
        'Speaking engagements, CRC Press publications, KaggleX fellowship, and industry recognition. Invited speaker at BSBI, DeepLearning.AI, and 18+ guest lectures.',
};

export default function RecognitionsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Recognitions />
            <Footer />
        </main>
    );
}
