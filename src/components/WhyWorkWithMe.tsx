'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animation';
import { Sparkles } from 'lucide-react';

const WhyWorkWithMe = () => {
    return (
        <section className="py-16 bg-charcoal-900 border-b border-white/5 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-400/5 rounded-[100%] blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-6">
                        <Sparkles size={14} />
                        <span>Why Work With Me</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-syne text-white mb-6">
                        More Than Just Code
                    </h2>

                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Unlike generalist developers or pure academics, I bring a hybrid expertise:
                        <span className="text-cyan-400 font-medium"> deep research rigor </span>
                        combined with
                        <span className="text-amber-400 font-medium"> battle-hardened production engineering</span>.
                        I don't just build models that work involved in notebooks; I engineer resilient systems that survive real-world scale, handling everything from data pipelines to deployment strategy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyWorkWithMe;
