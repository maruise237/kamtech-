"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";

export function HeroSectionSimple() {
  const containerRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-20 text-center md:px-6"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--brand)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center space-y-8">
        <ScrollReveal progress={progress} direction="up" delay={0.1}>
          <div className="inline-flex items-center space-x-2 rounded-full border border-border bg-bg-2 px-4 py-1.5 text-sm font-medium text-brand">
            <span>IA & Automatisation</span>
          </div>
        </ScrollReveal>

        <ScrollReveal progress={progress} direction="up" delay={0.2}>
          <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl leading-[1.1]">
            Automatisez Votre PME <br />
            <span className="text-brand">avecl&apos;IA en 48h</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal progress={progress} direction="up" delay={0.3}>
          <p className="max-w-xl text-lg text-text-secondary md:text-xl leading-relaxed">
            Chatbots WhatsApp + Workflows = <span className="text-text-primary font-semibold">Croissance 3x</span>. <br />
            Réduisez coûts 40%, Libérez 20h/semaine.
          </p>
        </ScrollReveal>

        <ScrollReveal progress={progress} direction="up" delay={0.4}>
          <div className="flex w-full flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-brand hover:bg-brand/90 text-white rounded-none">
              Démarrer ma démo gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold rounded-none border-border">
              Voir tarifs transparents
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
