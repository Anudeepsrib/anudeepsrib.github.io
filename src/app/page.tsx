import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Recognitions from '@/components/Recognitions';
import Impact from '@/components/Impact';
import Authorship from '@/components/Authorship';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Skills />
            <Impact />
            <Authorship />
            <Footer />
        </main>
    );
}
