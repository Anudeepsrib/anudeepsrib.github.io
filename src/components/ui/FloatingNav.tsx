"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { cn } from "@/lib/utils";

const links = [
  { label: "Proof", href: "/#proof", id: "proof" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Expertise", href: "/#skills", id: "skills" },
  { label: "Work", href: "/#projects", id: "projects" },
  { label: "Mentoring", href: "/#mentoring", id: "mentoring" },
  { label: "Research", href: "/#research", id: "research" },
  { label: "Contact", href: "/#contact", id: "contact" },
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
    >
      <Sun className="theme-sun" size={16} aria-hidden="true" />
      <Moon className="theme-moon" size={16} aria-hidden="true" />
      <span className="theme-label-light sr-only">Switch to dark theme</span>
      <span className="theme-label-dark sr-only">Switch to light theme</span>
    </button>
  );
}

export default function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenu, setMobileMenu] = useState({ pathname: "", open: false });
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const open = mobileMenu.pathname === pathname && mobileMenu.open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      () => {
        const marker = window.innerHeight * 0.3;
        const current = sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom >= marker;
        });

        setActiveSection(current?.id ?? "");
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileMenu({ pathname, open: false });
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, pathname]);

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
            className="flex min-h-11 items-center gap-2.5 rounded-full px-2"
            aria-label="Anudeep Sri Bathina, home"
          >
            <Image
              src="/assets/logo.png"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-lg border border-[var(--border-strong)] object-cover"
            />
            <span className="hidden text-sm font-bold text-[var(--text)] sm:block">
              Anudeep Sri
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {links.map((link) => {
              const current = pathname === "/" && activeSection === link.id;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "location" : undefined}
                  className={cn(
                    "rounded-full px-2.5 py-2 text-[12px] font-semibold transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)] xl:px-3",
                    current
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--text-3)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
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
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.5rem] border border-[var(--border-strong)] bg-[var(--surface-raised)] shadow-premium lg:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <div className="grid grid-cols-2 gap-1 p-3">
                {links.map((link) => {
                  const current = pathname === "/" && activeSection === link.id;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={current ? "location" : undefined}
                      className={cn(
                        "flex min-h-12 items-center rounded-xl px-3 text-sm font-semibold transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text)]",
                        current
                          ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                          : "text-[var(--text-2)]",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
