'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StaggerContainer from '@/components/ui/StaggerContainer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
    { value: 11, suffix: '+', label: 'Years building AI' },
    { value: 1000, suffix: '+', label: 'Learners reached' },
    { value: 500, suffix: '+', label: 'Teaching hours' },
    { value: 20, suffix: '+', label: 'Countries' },
];

const testimonials = [
    {
        name: 'Michael',
        role: 'Freelance Developer',
        text: 'Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial.',
        source: 'ADPList',
        sourceUrl: 'https://adplist.org/mentors/anudeep-sri-bathina',
    },
    {
        name: 'Shashank H.V.',
        role: 'Student, UMass Dartmouth',
        text: "Extremely insightful and valuable discussion. Anudeep's depth of knowledge in Data and AI is evident, and his willingness to openly share his expertise is commendable.",
        source: 'ADPList',
        sourceUrl: 'https://adplist.org/mentors/anudeep-sri-bathina',
    },
    {
        name: 'Baran Khazaee',
        role: 'MSc CS, UC Davis',
        text: 'His tailored advice on skills, job applications, and interviews was practical and insightful, leaving me confident and motivated.',
        source: 'ADPList',
        sourceUrl: 'https://adplist.org/mentors/anudeep-sri-bathina',
    },
    {
        name: 'Nelisa Sebastian',
        role: 'Data Analyst, Northeastern',
        text: 'His strategic guidance and ability to simplify complex AI and career paths into clear, actionable steps were incredibly helpful.',
        source: 'ADPList',
        sourceUrl: 'https://adplist.org/mentors/anudeep-sri-bathina',
    },
    {
        name: 'Mide Sowunmi',
        role: 'UX/UI Designer, Comcast',
        text: 'An exceptional session, making complex Agentic AI concepts easy to understand. His motivating approach inspired me to take bold steps.',
        source: 'ADPList',
        sourceUrl: 'https://adplist.org/mentors/anudeep-sri-bathina',
    },
];

const partners = [
    'UMass Dartmouth', 'NKU', 'VIT University', 'DeepLearning.AI',
    'BSBI Berlin', 'Great Learning', 'Wiley', 'Verzeo',
    'Analytics Vidhya', 'Kaggle',
];

const statItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Impact() {
    const [active, setActive] = useState(0);

    const next = useCallback(() => {
        setActive((p) => (p + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        const t = setInterval(next, 6000);
        return () => clearInterval(t);
    }, [next]);

    return (
        <section className="relative py-28 md:py-36" id="impact">
            <div className="mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 tracking-tight">
                        Teaching & impact
                    </h2>
                    <p className="text-[var(--text-2)] max-w-lg mb-16 text-base">
                        Mentoring AI practitioners across 20+ countries through hands-on sessions, guest lectures, and workshops.
                    </p>
                </ScrollReveal>

                {/* Stats row */}
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] rounded-lg overflow-hidden border border-[var(--border)] mb-20">
                    {stats.map((s) => (
                        <motion.div
                            key={s.label}
                            variants={statItem}
                            className="bg-[var(--bg)] p-5 text-center"
                        >
                            <div className="text-2xl md:text-3xl font-display font-bold text-[var(--text)] mb-1">
                                <AnimatedCounter target={s.value} suffix={s.suffix} />
                            </div>
                            <p className="text-[12px] font-mono text-[var(--text-3)]">
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* Testimonial — just text, no heavy card */}
                <ScrollReveal className="mb-20">
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                <blockquote className="text-lg md:text-xl text-[var(--text)] leading-relaxed mb-4 font-body">
                                    &ldquo;{testimonials[active].text}&rdquo;
                                </blockquote>
                                <p className="text-sm text-[var(--text-3)] mb-2">
                                    {testimonials[active].name}
                                    <span className="mx-1.5 text-[var(--border)]">&mdash;</span>
                                    {testimonials[active].role}
                                </p>
                                <a 
                                    href={testimonials[active].sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-[var(--accent-1)] hover:text-[var(--accent-1)]/80 transition-colors"
                                >
                                    via {testimonials[active].source} →
                                </a>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-1.5 mt-6">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        i === active
                                            ? 'w-6 bg-[var(--text)]'
                                            : 'w-1.5 bg-[var(--text-3)]'
                                    }`}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Partners — simple flowing text, no marquee animation */}
                <ScrollReveal>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {partners.map((name) => (
                            <span key={name} className="text-xs font-mono text-[var(--text-3)]">
                                {name}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
