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
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Expertise", href: "/#expertise", id: "expertise" },
  { label: "Research", href: "/#research", id: "research" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Approach", href: "/#approach", id: "approach" },
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
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <Sun className="theme-sun" size={16} aria-hidden="true" />
      <Moon className="theme-moon" size={16} aria-hidden="true" />
      <span className="theme-label-light sr-only">Switch to dark theme</span>
      <span className="theme-label-dark sr-only">Switch to light theme</span>
    </button>
  );
}

export default function Navbar() {
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
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Primary navigation"
          className={cn(
            "pointer-events-auto mx-auto flex min-h-16 max-w-[75rem] items-center justify-between border-b px-5 transition duration-200 sm:px-6 lg:min-h-[4.5rem] lg:px-8",
            scrolled
              ? "border-[var(--border)] bg-[var(--nav)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-h-11 items-center gap-2.5"
            aria-label="Anudeep Sri Bathina, home"
          >
            <Image
              src="/assets/logo.png"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-md border border-[var(--border)] object-cover"
            />
            <span className="hidden text-sm font-semibold text-[var(--text)] sm:block">
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
                    "relative px-2.5 py-6 text-[12px] font-medium transition-colors after:absolute after:bottom-3 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:transition-colors hover:text-[var(--text)] xl:px-3",
                    current
                      ? "text-[var(--accent)] after:bg-[var(--accent)]"
                      : "text-[var(--text-3)] after:bg-transparent",
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
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
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
              className="pointer-events-auto mx-4 mt-2 max-w-[75rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] shadow-premium sm:mx-6 lg:hidden"
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
