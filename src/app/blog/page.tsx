import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export const metadata = {
    title: 'Blog | Anudeep Sri Bathina',
    description: 'Technical articles and insights on Generative AI, LLMs, RAG systems, and production ML. Written by Anudeep Sri Bathina, AI Architect at AT&T.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Blog />
            <Footer />
        </main>
    );
}
