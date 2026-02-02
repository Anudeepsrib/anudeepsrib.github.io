import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

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
