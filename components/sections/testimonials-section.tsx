"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "CEO, ImmoScale",
    image: "/images/testimonial-1.png",
    quote: "KAMTECH a transformé notre gestion client. On répond 10x plus vite sur WhatsApp et on a réduit nos coûts opérationnels de 35%.",
    metric: "-35% Coûts",
  },
  {
    name: "Sarah Lemoine",
    role: "Directrice Marketing, RetailFlow",
    image: "/images/testimonial-2.png",
    quote: "L'automatisation n8n nous fait gagner 15h par semaine. Les leads sont qualifiés automatiquement avant même qu'on les contacte.",
    metric: "+40% Conversions",
  },
  {
    name: "Marc Antoine",
    role: "Fondateur, TechGrowth",
    image: "/images/testimonial-3.png",
    quote: "Déploiement en 48h chrono. Un support exceptionnel et une technologie qui marche vraiment. Je recommande sans hésiter.",
    metric: "48h Déploiement",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="testimonials" ref={sectionRef} className="bg-bg-1 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal progress={progress} offset={40} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Ils nous font confiance
            </h2>
          </ScrollReveal>
          <ScrollReveal progress={progress} offset={30} delay={0.2}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Découvrez comment nous aidons les PME à scaler grâce à l'automatisation IA.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={i}
              progress={progress}
              offset={100}
              delay={0.3 + (i * 0.1)}
              speed={0.9 + (i * 0.1)}
            >
              <div className="bg-bg-2 border border-border p-8 rounded-none flex flex-col h-full hover:border-brand/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-text-primary italic mb-8 flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <div className="relative w-12 h-12 rounded-none overflow-hidden grayscale">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">{t.name}</h4>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-bold text-brand bg-brand-subtle px-2 py-1 rounded-none">
                      {t.metric}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
