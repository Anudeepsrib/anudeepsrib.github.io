import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextUIProvider } from "@/components/NextUIProvider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Anudeep Sri Bathina",
    default: "Anudeep Sri Bathina",
  },
  description: "Lead Data Scientist & AI Architect Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextUIProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="py-8 px-4 md:px-6 mx-auto max-w-7xl">
                {children}
              </main>
              <Footer />
            </div>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
