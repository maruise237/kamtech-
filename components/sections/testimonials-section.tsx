"use client";

import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    name: "Thomas Dubois",
    role: "CEO, Dubois Immobilier",
    content: "Depuis que Kamtech a installé notre chatbot WhatsApp, nous ne perdons plus aucun lead le week-end. Nos conversions ont bondi de 45% en seulement deux mois.",
    image: "/images/hero-side-1.png",
  },
  {
    name: "Sarah Martin",
    role: "Directrice Opérations, Innovateurs SAS",
    content: "L'automatisation de nos rapports avec n8n nous a libéré 15 heures par semaine. Mon équipe peut enfin se concentrer sur des tâches à haute valeur ajoutée.",
    image: "/images/hero-side-2.png",
  },
  {
    name: "Marc Lefebvre",
    role: "Fondateur, GreenTech Solutions",
    content: "Un ROI immédiat. Le système est robuste, transparent et l'accompagnement de Kamtech est exemplaire. Je recommande à toute PME en croissance.",
    image: "/images/hero-side-3.png",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="testimonials" ref={sectionRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <ScrollReveal progress={progress} direction="up" delay={0.1}>
            <span className="text-sm font-bold uppercase tracking-widest text-brand">Témoignages</span>
          </ScrollReveal>
          <ScrollReveal progress={progress} direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
              Ils ont fait le choix de <br className="hidden md:block" />
              <span className="text-text-secondary">la performance avec Kamtech</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={i}
              progress={progress}
              direction="up"
              delay={0.3 + i * 0.1}
              className="h-full"
            >
              <div className="h-full flex flex-col p-8 bg-bg-2 border border-border rounded-none relative">
                <Quote className="absolute top-6 right-6 text-brand/10 w-12 h-12" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand text-brand" />
                  ))}
                </div>

                <p className="text-lg text-text-primary italic mb-8 relative z-10">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="mt-auto flex items-center space-x-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-none border border-border">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{t.name}</p>
                    <p className="text-sm text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal progress={progress} direction="up" delay={0.7} className="mt-20 flex flex-center justify-center">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-bg-2 border border-border">
                <div className="text-center">
                    <p className="text-2xl font-bold text-text-primary">150+</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">PME Automatisées</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                    <p className="text-2xl font-bold text-text-primary">4.9/5</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Satisfaction Client</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                    <p className="text-2xl font-bold text-text-primary">24h</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Support Réactif</p>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
