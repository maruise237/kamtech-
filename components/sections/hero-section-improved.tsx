"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";

export function HeroSectionImproved() {
  const containerRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--brand)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col space-y-8">
            <ScrollReveal progress={progress} direction="up" delay={0.1}>
              <div className="inline-flex items-center space-x-2 rounded-full border border-border bg-bg-2 px-4 py-1.5 text-sm font-medium text-brand">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
                </span>
                <span>Propulsé par l&apos;IA & n8n</span>
              </div>
            </ScrollReveal>

            <ScrollReveal progress={progress} direction="up" delay={0.2} speed={1.2}>
              <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                Automatisez Votre PME <br />
                <span className="text-brand">avec l&apos;IA en 48h</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal progress={progress} direction="up" delay={0.3} speed={1.1}>
              <p className="max-w-[540px] text-lg text-text-secondary md:text-xl leading-relaxed">
                Chatbots WhatsApp + Workflows = <span className="text-text-primary font-semibold">Croissance 3x</span>. 
                Réduisez vos coûts de 40% et libérez jusqu&apos;à 20h par semaine.
              </p>
            </ScrollReveal>

            <ScrollReveal progress={progress} direction="up" delay={0.4}>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-brand hover:bg-brand/90 text-white rounded-none">
                  Démarrer ma démo gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold rounded-none border-border">
                  Voir tarifs transparents
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal progress={progress} direction="up" delay={0.5}>
              <div className="flex items-center space-x-4 grayscale opacity-60">
                <p className="text-sm font-medium uppercase tracking-wider text-text-muted">Partenaires</p>
                <div className="h-px flex-1 bg-border/50" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal progress={progress} direction="right" delay={0.3} speed={0.8} className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <div className="relative h-full w-full overflow-hidden rounded-none border border-border bg-bg-2 p-2 shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-brand/10 to-transparent" />
              <Image
                src="/images/hero-mono.png"
                alt="Interface Kamtech IA"
                priority
                fill
                className="object-cover"
              />
              
              {/* Floating element 1 */}
              <div className="absolute top-10 -left-10 z-20 hidden animate-float md:block rounded-none border border-border bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">Croissance x3</p>
                    <p className="text-xs text-text-secondary">Workflows optimisés</p>
                  </div>
                </div>
              </div>

              {/* Floating element 2 */}
              <div className="absolute bottom-10 -right-10 z-20 hidden animate-float md:block rounded-none border border-border bg-white p-4 shadow-lg" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">-20h/semaine</p>
                    <p className="text-xs text-text-secondary">Automatisation n8n</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
