"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate progress:
    // 0 when the top of the element is at the bottom of the viewport
    // 1 when the bottom of the element is at the top of the viewport
    const elementTop = rect.top;
    const elementHeight = rect.height;

    // Start tracking when the element enters the viewport
    const start = windowHeight;
    const end = -elementHeight;

    const currentProgress = (start - elementTop) / (start - end);
    const clampedProgress = Math.max(0, Math.min(1, currentProgress));

    setProgress(clampedProgress);
  }, [ref]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    // Initial check
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  return progress;
}
