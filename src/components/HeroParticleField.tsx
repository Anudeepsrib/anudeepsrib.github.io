'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * HeroParticleField — GPU-accelerated Three.js particle system
 * - Lazy-loads Three.js only on capable devices
 * - Dynamic resolution based on device (mobile = 0.5x, low-end = 0.75x, desktop = 1x)
 * - Cursor-reactive (subtle follow)
 * - Respects prefers-reduced-motion with CSS fallback
 * - ~40KB gzipped (with Three.js minified)
 */
const HeroParticleField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const particlesRef = useRef<any>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  // Device capability detection
  const getDeviceProfile = () => {
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    const isMobile = /iPhone|iPad|Android|Mobile/i.test(navigator.userAgent);

    if (isMobile) return { dpr: 0.5, maxParticles: 2000, quality: 'low' };
    if (cores <= 2 || memory <= 2) return { dpr: 0.75, maxParticles: 3000, quality: 'medium' };
    return { dpr: 1, maxParticles: 5000, quality: 'high' };
  };

  useEffect(() => {
    // Skip if prefers-reduced-motion is set
    if (reduceMotion) {
      setIsLoading(false);
      return;
    }

    // Check WebGL support
    if (!window.requestAnimationFrame || !window.WebGLRenderingContext) {
      setIsSupported(false);
      setIsLoading(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    const profile = getDeviceProfile();

    // Lazy-load Three.js
    const loadAndInit = async () => {
      try {
        const THREE = await import('three');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

        camera.position.z = 5;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * profile.dpr);
        renderer.setClearColor(0x000000, 0);

        // Create particles
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(profile.maxParticles * 3);
        const colors = new Float32Array(profile.maxParticles * 3);
        const scales = new Float32Array(profile.maxParticles);

        const cyanGlow = new THREE.Color(0x06B6D4);
        const royalGlow = new THREE.Color(0x3b82f6);

        for (let i = 0; i < profile.maxParticles; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

          const color = Math.random() > 0.5 ? cyanGlow : royalGlow;
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;

          scales[i] = Math.random() * 2 + 1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        const material = new THREE.PointsMaterial({
          size: 0.1,
          vertexColors: true,
          transparent: true,
          opacity: 0.6,
          sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = particles;

        // Mouse interaction (subtle)
        let mouseX = 0;
        let mouseY = 0;
        const onMouseMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // Animation loop
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);

          particles.rotation.x += 0.0001;
          particles.rotation.y += 0.0002;

          // Subtle mouse-based rotation
          particles.rotation.y += (mouseX * 0.1 - particles.rotation.y) * 0.05;
          particles.rotation.x += (mouseY * 0.1 - particles.rotation.x) * 0.05;

          renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const onResize = () => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * profile.dpr);
        };
        window.addEventListener('resize', onResize);

        setIsLoading(false);

        return () => {
          cancelAnimationFrame(animationFrameId);
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', onResize);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
        };
      } catch (error) {
        console.warn('Failed to load Three.js particle field:', error);
        setIsSupported(false);
        setIsLoading(false);
      }
    };

    loadAndInit();
  }, [reduceMotion]);

  // Fallback: CSS gradient animation if particles not supported or reduced-motion
  if (!isSupported || reduceMotion) {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-obsidian-900 animate-gradient pointer-events-none"
      />
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-obsidian-900 animate-gradient pointer-events-none" />
      )}
    </>
  );
};

export default HeroParticleField;
