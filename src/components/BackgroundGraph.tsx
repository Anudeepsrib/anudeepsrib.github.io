"use client";

import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    active: number; // 0 to 1, for glow intensity
}

const BackgroundGraph: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = container.offsetWidth;
        let height = container.offsetHeight;
        let points: Point[] = [];
        const pointCount = 60; // Adjust density
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            initPoints();
        };

        const initPoints = () => {
            points = [];
            for (let i = 0; i < pointCount; i++) {
                points.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    active: 0
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update points
            points.forEach(point => {
                point.x += point.vx;
                point.y += point.vy;

                // Bounce off walls
                if (point.x < 0 || point.x > width) point.vx *= -1;
                if (point.y < 0 || point.y > height) point.vy *= -1;

                // Mouse interaction / Activity decay
                const dx = mouse.x - point.x;
                const dy = mouse.y - point.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseDistance) {
                    point.active = Math.min(point.active + 0.05, 1);
                } else {
                    point.active = Math.max(point.active - 0.02, 0);
                }
            });

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const p1 = points[i];
                    const p2 = points[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = 1 - dist / connectionDistance;
                        // Color blending: Default subtle lines vs Active Cyan lines
                        // If either point is active, line gets brighter/more cyan
                        const activity = Math.max(p1.active, p2.active);

                        if (activity > 0.1) {
                            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * activity * 0.8})`; // Cyan glow
                        } else {
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.05})`; // Subtle white
                        }

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw points
            points.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);

                if (point.active > 0.01) {
                    ctx.fillStyle = `rgba(0, 240, 255, ${0.5 + point.active * 0.5})`;
                    ctx.shadowBlur = point.active * 15;
                    ctx.shadowColor = "#00F0FF";
                } else {
                    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
                ctx.shadowBlur = 0; // Reset
            });

            requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none bg-background">
            {/* Gradient Mesh Overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,176,46,0.03),transparent_40%)]" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
};

export default BackgroundGraph;
