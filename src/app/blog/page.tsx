import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export const metadata = {
    title: 'Blog | AI & Data Science Insights',
    description: 'Technical articles and insights on Generative AI, LLMs, RAG systems, and production ML. Written by Anudeep Sri Bathina, Lead Data Scientist at AT&T.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)]">
            <Navbar />
            <div className="pt-20">
                <Blog />
            </div>
            <Footer />
        </main>
    );
}
