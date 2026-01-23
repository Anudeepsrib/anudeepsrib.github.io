
import { Suspense } from 'react';
import Timeline from '@/components/Timeline';
import Education from '@/components/Education';
import Awards from '@/components/Awards';
import JourneyHero from '@/components/JourneyHero';
import { Loader } from 'lucide-react';

export const metadata = {
    title: 'Journey | Experience & Education',
    description: 'A timeline of my professional experience in Data Science and AI, along with my academic background and awards.',
};

import Navbar from '@/components/Navbar';

export default function JourneyPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />
            <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                    <Loader className="animate-spin text-blue-400" size={48} />
                </div>
            }>
                <JourneyHero />
                <Timeline />
                <Awards />
                <Education />
            </Suspense>
        </main>
    );
}
