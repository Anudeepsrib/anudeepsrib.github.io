import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-obsidian-900 text-foreground selection:bg-gold-glow/30">
            <Navbar />
            <div className="pt-20">
                <Blog />
            </div>
        </main>
    );
}
