import { Suspense } from 'react';
import Timeline from '@/components/Timeline';
import Education from '@/components/Education';
import Awards from '@/components/Awards';
import JourneyHero from '@/components/JourneyHero';
import Footer from '@/components/Footer';
import { Loader } from 'lucide-react';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Journey | Experience & Education',
    description: 'A timeline of my professional experience in Data Science and AI, along with my academic background and awards.',
};

export default function JourneyPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] pt-20">
            <Navbar />
            <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                    <Loader className="animate-spin text-accent" size={48} />
                </div>
            }>
                <JourneyHero />
                <Timeline />
                <Awards />
                <Education />
            </Suspense>
            <Footer />
        </main>
    );
}
