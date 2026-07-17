"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { cn } from "@/lib/utils";

const links = [
  { label: "Proof", href: "/#proof" },
  { label: "Experience", href: "/#experience" },
  { label: "Expertise", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Mentoring", href: "/#mentoring" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label="Switch color theme"
      title="Switch color theme"
    >
      <Sun className="theme-sun" size={16} aria-hidden="true" />
      <Moon className="theme-moon" size={16} aria-hidden="true" />
    </button>
  );
}

export default function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState({ pathname: "", open: false });
  const reduceMotion = useReducedMotion();
  const open = mobileMenu.pathname === pathname && mobileMenu.open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileMenu({ pathname, open: false });
  const toggleMenu = () =>
    setMobileMenu((state) => ({
      pathname,
      open: state.pathname === pathname ? !state.open : true,
    }));

  return (
    <>
      <ScrollProgress />
      <header className="pointer-events-none fixed left-0 right-0 top-3 z-50 px-3 sm:top-4">
        <nav
          aria-label="Primary navigation"
          className={cn(
            "pointer-events-auto mx-auto flex min-h-14 max-w-7xl items-center justify-between rounded-full border px-2.5 transition duration-200 sm:px-3",
            scrolled
              ? "border-[var(--border-strong)] bg-[var(--nav)] shadow-premium backdrop-blur-xl"
              : "border-[var(--border)] bg-[var(--nav)] backdrop-blur-md",
          )}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-h-11 items-center gap-2.5 rounded-full px-2 outline-none"
            aria-label="Anudeep Sri Bathina, home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--text)] font-mono text-[10px] font-semibold text-[var(--bg)]">
              ASB
            </span>
            <span className="hidden text-sm font-bold text-[var(--text)] sm:block">
              Anudeep Sri
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2.5 py-2 text-[12px] font-semibold text-[var(--text-3)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)] xl:px-3"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
              onClick={toggleMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.5rem] border border-[var(--border-strong)] bg-[var(--surface-raised)] shadow-premium lg:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <div className="grid grid-cols-2 gap-1 p-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center rounded-xl px-3 text-sm font-semibold text-[var(--text-2)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
