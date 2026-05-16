"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";

const blogLinks = [
  {
    title: "Substack",
    description: "Architecture deep dives and industry analysis.",
    url: "https://anudeepsri.substack.com/",
  },
  {
    title: "Medium",
    description: "Technical articles and GenAI tutorials.",
    url: "https://medium.com/@anudeepsri",
  },
];

const socialLinks = [
  {
    title: "Instagram",
    description: "AI insights and behind-the-scenes.",
    url: "https://www.instagram.com/anudeep.ai/",
  },
  {
    title: "YouTube",
    description: "Video tutorials and deep-dive sessions.",
    url: "https://www.youtube.com/@AnudeepsriBathina",
  },
];

const card = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Blog() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section id="blog" className="relative py-24 pt-32 md:pt-40">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div ref={heroRef} className="mb-16">
          <motion.h1
            className="mb-4 font-display text-4xl font-bold tracking-tighter md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Writing
          </motion.h1>
          <motion.p
            className="max-w-md text-[15px] text-[var(--text-2)]"
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Knowledge sharing on production AI systems and architecture
            decisions.
          </motion.p>
        </div>

        {/* Blog Links */}
        <StaggerContainer className="mb-14 grid max-w-3xl gap-4 md:grid-cols-2">
          {blogLinks.map((blog) => (
            <motion.a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={card}
              className="glass-card group flex items-start justify-between p-5"
            >
              <div>
                <h3 className="mb-1 font-display text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--blue)]">
                  {blog.title}
                </h3>
                <p className="text-[13px] text-[var(--text-2)]">
                  {blog.description}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="mt-0.5 flex-shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--text-2)]"
              />
            </motion.a>
          ))}
        </StaggerContainer>

        {/* Divider */}
        <div className="mb-10 flex max-w-3xl items-center gap-4">
          <div className="h-px flex-grow bg-[var(--border)]" />
          <span className="font-mono text-[11px] text-[var(--text-3)]">
            Also
          </span>
          <div className="h-px flex-grow bg-[var(--border)]" />
        </div>

        {/* Social */}
        <StaggerContainer className="grid max-w-3xl gap-4 md:grid-cols-2">
          {socialLinks.map((social) => (
            <motion.a
              key={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={card}
              className="glass-card group flex items-start justify-between p-5"
            >
              <div>
                <h3 className="mb-1 font-display text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--warm)]">
                  {social.title}
                </h3>
                <p className="text-[13px] text-[var(--text-2)]">
                  {social.description}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="mt-0.5 flex-shrink-0 text-[var(--text-3)] transition-colors group-hover:text-[var(--text-2)]"
              />
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
