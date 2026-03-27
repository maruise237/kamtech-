"use client";

import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  progress: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number; // 0 to 1, when it starts appearing
  speed?: number; // Multiplier for travel distance
  className?: string;
  fadeInOnly?: boolean;
}

export function ScrollReveal({
  children,
  progress,
  offset = 40,
  direction = "up",
  delay = 0,
  speed = 1,
  className = "",
  fadeInOnly = false,
}: ScrollRevealProps) {
  // Normalize progress based on delay
  // If delay is 0.2, normalized progress starts at 0.2
  const normalizedProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));

  // Custom easing: cubic out for smoothness
  const easedProgress = 1 - Math.pow(1 - normalizedProgress, 3);

  const opacity = easedProgress;

  let transform = "";
  if (!fadeInOnly) {
    const travel = (1 - easedProgress) * offset * speed;

    switch (direction) {
      case "up":
        transform = `translate3d(0, ${travel}px, 0)`;
        break;
      case "down":
        transform = `translate3d(0, ${-travel}px, 0)`;
        break;
      case "left":
        transform = `translate3d(${travel}px, 0, 0)`;
        break;
      case "right":
        transform = `translate3d(${-travel}px, 0, 0)`;
        break;
      case "scale":
        const scale = 0.95 + (0.05 * easedProgress);
        transform = `scale(${scale})`;
        break;
    }
  }

  return (
    <div
      className={className}
      style={{
        opacity,
        transform,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}
