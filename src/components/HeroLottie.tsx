'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';

interface HeroLottieProps {
  animationPath?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

/**
 * HeroLottie — Lightweight Lottie animation component
 * Renders theme-colored AI assistant animation on the right side of hero
 * Uses lottie-web directly (already installed) for minimal overhead
 */
export default function HeroLottie({
  animationPath = '/animations/hero-ai-demo-themed.json',
  loop = true,
  autoplay = true,
  speed = 1,
}: HeroLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path: animationPath,
    });

    animationRef.current = animation;

    // Set speed
    animation.setSpeed(speed);

    // Cleanup
    return () => {
      animation?.destroy();
    };
  }, [animationPath, loop, autoplay, speed]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      aria-label="AI assistant animation"
    />
  );
}
