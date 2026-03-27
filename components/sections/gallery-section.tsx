"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "/images/mono-1.png", alt: "Étape 1 — Audit gratuit KAMTECH IA" },
    { src: "/images/mono-2.png", alt: "Étape 2 — Déploiement sur mesure" },
    { src: "/images/mono-3.png", alt: "Étape 3 — Croissance mesurable" },
    { src: "/images/mono-4.png", alt: "Résultat — Système IA performant" },
  ];

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = galleryRef.current.offsetHeight;
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    setScrollProgress(Math.max(0, Math.min(1, scrolled / scrollableRange)));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTransform);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateTransform]);

  const isLastImage = images.length - 1;
  const fullscreenStartProgress = 0.6;
  const fullscreenProgress = Math.max(0, Math.min(1, (scrollProgress - fullscreenStartProgress) / (1 - fullscreenStartProgress)));
  const easedFullscreenProgress = 1 - Math.pow(1 - fullscreenProgress, 3);

  return (
    <section id="gallery" ref={galleryRef} className="relative bg-bg-1" style={{ minHeight: `${(images.length + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]">
          {images.map((image, index) => {
            const isLast = index === isLastImage;
            const imageProgress = (scrollProgress * images.length) - index;
            const stackProgress = Math.max(0, Math.min(1, imageProgress));
            let translateY = (1 - stackProgress) * 100;
            let scale = 0.8 + (stackProgress * 0.2);
            let opacity = stackProgress;
            if (isLast) {
              const normalScale = 0.8 + (stackProgress * 0.2);
              const expandedScale = 1 + (easedFullscreenProgress * 0.8);
              scale = normalScale + (Math.max(0, stackProgress - 0.8) * 5) * (expandedScale - normalScale);
            }
            const zIndex = index;
            
            return (
              <div key={index} className="absolute inset-0 flex items-center justify-center" style={{
                zIndex,
                transform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                opacity,
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity',
              }}>
                <div className="relative w-full h-full overflow-hidden rounded-none border border-border bg-bg-2">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" priority={index < 3} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
