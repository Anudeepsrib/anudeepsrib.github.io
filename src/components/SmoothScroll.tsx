"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
    useEffect(() => {
        // Global snapping logic removed as it was interfering with natural scrolling and causing jumps.
        // Snapping should be handled individually by components that need it (e.g., Hero, CTA).
    }, []);

    return null;
}
