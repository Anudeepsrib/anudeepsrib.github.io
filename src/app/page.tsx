import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Skills from '@/components/Skills';
import Impact from '@/components/Impact';
import Authorship from '@/components/Authorship';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <StatsBanner />
            <WhyWorkWithMe />
            <Skills />
            <Impact />
            <Authorship />
            <CTASection />
            <Footer />
        </main>
    );
}
