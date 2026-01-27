import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import StatsBanner from '@/components/StatsBanner';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Recognitions from '@/components/Recognitions';
import Impact from '@/components/Impact';
import Authorship from '@/components/Authorship';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <WhyWorkWithMe />
            <StatsBanner />
            <Skills />
            <Projects />
            <Impact />
            <Authorship />
            <CTASection />
            <Footer />
        </main>
    );
}
