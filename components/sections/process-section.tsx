"use client";

import { Search, Settings, BarChart3 } from "lucide-react";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit gratuit",
    description: "On analyse vos processus, vos canaux de communication et vos points de friction. On identifie exactement où vous perdez du temps et de l'argent.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Déploiement sur mesure",
    description: "On configure votre système IA en fonction de votre secteur, votre ton, vos besoins spécifiques. Aucune connaissance technique requise de votre côté.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Croissance mesurable",
    description: "Vous suivez vos résultats en temps réel. Chaque semaine, votre système devient plus performant. Vous scalez sans recruter.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="processus" ref={sectionRef} className="bg-bg-2 py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal progress={progress} offset={40} delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 text-center">
            3 étapes pour automatiser<br className="hidden md:block" /> votre croissance
          </h2>
        </ScrollReveal>
        <ScrollReveal progress={progress} offset={30} delay={0.2}>
          <p className="text-text-secondary text-center mb-16 max-w-lg mx-auto">
            Un processus simple, rapide et sans friction. Zéro compétence technique requise.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal
                key={i}
                progress={progress}
                offset={100}
                delay={0.3 + (i * 0.1)}
                speed={0.9 + (i * 0.1)}
              >
                <div className="relative group text-center h-full">
                  {/* Step number */}
                  <div className="relative z-10 w-20 h-20 rounded-none bg-bg-3 border border-border flex items-center justify-center mx-auto mb-6 group-hover:bg-brand/10 group-hover:border-brand/30 transition-all duration-300">
                    <step.icon size={32} className="text-brand" />
                  </div>

                  <span className="inline-block text-xs font-mono text-brand tracking-widest mb-3">{step.number}</span>
                  <h3 className="text-xl font-bold text-text-primary mb-4">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
