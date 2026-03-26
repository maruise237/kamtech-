"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.9;
      const endOffset = windowHeight * 0.1;
      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;
      const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
      setProgress(newProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");
  
  return (
    <p ref={containerRef} className="text-3xl font-semibold leading-snug text-white md:text-4xl lg:text-5xl">
      {words.map((word, index) => {
        const appearProgress = progress * (words.length + 1);
        const wordAppearProgress = Math.max(0, Math.min(1, appearProgress - index));
        return (
          <span key={index} className="inline-block" style={{
            opacity: wordAppearProgress,
            filter: `blur(${(1 - wordAppearProgress) * 40}px)`,
            transition: 'opacity 0.1s linear, filter 0.1s linear',
            marginRight: '0.3em',
          }}>{word}</span>
        );
      })}
    </p>
  );
}

const sideImages = [
  { src: "/images/interior-view.png", alt: "Interface chatbot WhatsApp", position: "left" },
  { src: "/images/rusted-metal.png", alt: "Tableau de bord automatisation", position: "right" },
];

const textCycles = [
  "Chatbot WhatsApp IA.",
  "Automatisation n8n.",
  "Croissance mesurable.",
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textProgress, setTextProgress] = useState(0);
  
  const descriptionText = "Nos systèmes IA comprennent le contexte, qualifient vos prospects, s'intègrent à vos outils existants et s'améliorent dans le temps. Chatbot WhatsApp, automatisation n8n, tunnels de conversion — tout connecté en un flux intelligent.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 4;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      setScrollProgress(progress);

      if (textSectionRef.current) {
        const textRect = textSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startOffset = windowHeight * 0.9;
        const endOffset = windowHeight * 0.1;
        const totalDistance = startOffset - endOffset;
        const currentPosition = startOffset - textRect.top;
        setTextProgress(Math.max(0, Math.min(1, currentPosition / totalDistance)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  const centerWidth = 100 - (imageProgress * 58);
  const centerHeight = 100 - (imageProgress * 30);
  const sideWidth = imageProgress * 22;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100);
  const sideTranslateRight = 100 - (imageProgress * 100);
  const gap = imageProgress * 16;

  return (
    <section ref={sectionRef} className="relative bg-foreground">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-full w-full items-stretch justify-center" style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}>
            
            <div className="relative overflow-hidden will-change-transform" style={{ width: `${sideWidth}%`, height: "100%", transform: `translateX(${sideTranslateLeft}%)`, opacity: sideOpacity }}>
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <Image key={idx} src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
              ))}
            </div>

            <div className="relative overflow-hidden will-change-transform" style={{ width: `${centerWidth}%`, height: "100%", flex: "0 0 auto" }}>
              <Image src="/images/mono-1.png" alt="Chatbot WhatsApp KAMTECH IA" fill className="object-cover" style={{ opacity: 1 }} />
              <Image src="/images/mono-2.png" alt="Automatisation processus PME" fill className="absolute inset-0 object-cover" style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.2)), transition: 'opacity 0.3s ease' }} />
              <Image src="/images/mono-3.png" alt="Dashboard résultats IA" fill className="absolute inset-0 object-cover" style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.2)), transition: 'opacity 0.3s ease' }} />
              <Image src="/images/mono-4.png" alt="Système IA complet PME" fill className="absolute inset-0 object-cover" style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.2)), transition: 'opacity 0.3s ease' }} />
              
              <div className="absolute inset-0 bg-foreground/40" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                {textCycles.map((text, cycleIndex) => {
                  const cycleStart = cycleIndex / textCycles.length;
                  const cycleEnd = (cycleIndex + 1) / textCycles.length;
                  const words = text.split(" ");
                  
                  return (
                    <h2 key={cycleIndex} className="absolute max-w-3xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl text-5xl">
                      {words.map((w, wordIndex) => {
                        let wordOpacity = 0;
                        let wordBlur = 40;
                        if (scrollProgress >= cycleStart && scrollProgress < cycleEnd) {
                          const localProgress = (scrollProgress - cycleStart) / (cycleEnd - cycleStart);
                          if (localProgress < 0.5) {
                            const ap = (localProgress / 0.5) * (words.length + 1);
                            const wap = Math.max(0, Math.min(1, ap - wordIndex));
                            wordOpacity = wap;
                            wordBlur = (1 - wap) * 40;
                          } else {
                            const dp = ((localProgress - 0.5) / 0.5) * (words.length + 1);
                            const wdp = Math.max(0, Math.min(1, dp - wordIndex));
                            wordOpacity = 1 - wdp;
                            wordBlur = wdp * 40;
                          }
                        }
                        return (
                          <span key={wordIndex} className="inline-block" style={{ opacity: wordOpacity, filter: `blur(${wordBlur}px)`, transition: 'opacity 0.1s linear, filter 0.1s linear', marginRight: '0.3em' }}>{w}</span>
                        );
                      })}
                    </h2>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden will-change-transform" style={{ width: `${sideWidth}%`, height: "100%", transform: `translateX(${sideTranslateRight}%)`, opacity: sideOpacity }}>
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <Image key={idx} src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400vh]" />

      <div ref={textSectionRef} className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 bg-black">
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none" style={{ height: '150px', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)' }} />
        <div className="relative z-10 mx-auto max-w-4xl">
          <ScrollRevealText text={descriptionText} />
        </div>
      </div>
    </section>
  );
}
