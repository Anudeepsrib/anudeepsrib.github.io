"use client";

import React from 'react';

const BackgroundGraph: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[var(--bg-primary)]">
            {/* Warm ambient gradient blobs */}
            <div
                className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-60"
                style={{
                    background: 'radial-gradient(circle, rgba(200, 149, 108, 0.08) 0%, transparent 70%)',
                    animation: 'blob-float 25s infinite alternate ease-in-out',
                }}
            />
            <div
                className="absolute top-[30%] -right-[5%] w-[500px] h-[500px] rounded-full opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 123, 79, 0.06) 0%, transparent 70%)',
                    animation: 'blob-float 20s infinite alternate-reverse ease-in-out',
                    animationDelay: '-7s',
                }}
            />
            <div
                className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-40"
                style={{
                    background: 'radial-gradient(circle, rgba(232, 185, 144, 0.05) 0%, transparent 70%)',
                    animation: 'blob-float 30s infinite alternate ease-in-out',
                    animationDelay: '-15s',
                }}
            />

            {/* Subtle blue edge glow — like Perplexity's edge tints */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,200,230,0.06),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,180,150,0.04),transparent_40%)]" />
        </div>
    );
};

export default BackgroundGraph;
