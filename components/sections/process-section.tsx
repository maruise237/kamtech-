"use client";

import { Search, Settings, GraduationCap, LifeBuoy, Check } from "lucide-react";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    icon: Search,
    title: "Audit Métier & IA",
    description: "Analyse profonde de vos goulots d'étranglement et identification des opportunités d'automatisation rentables.",
    color: "bg-blue-500",
  },
  {
    icon: Settings,
    title: "Configuration Technique",
    description: "Déploiement de vos chatbots WhatsApp et workflows n8n sur mesure, connectés à vos outils existants.",
    color: "bg-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Formation & Onboarding",
    description: "Accompagnement de vos équipes pour une prise en main fluide du nouveau système d'exploitation IA.",
    color: "bg-amber-500",
  },
  {
    icon: LifeBuoy,
    title: "Support & Optimisation",
    description: "Suivi hebdomadaire de la performance et ajustements continus pour maximiser votre ROI.",
    color: "bg-green-500",
  },
];

import { Button } from "@/components/ui/button";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="processus" ref={sectionRef} className="relative bg-bg-2 py-24 md:py-32 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <ScrollReveal progress={progress} direction="up" delay={0.1}>
            <span className="text-sm font-bold uppercase tracking-widest text-brand">Le Processus</span>
          </ScrollReveal>
          <ScrollReveal progress={progress} direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
              De l&apos;audit au déploiement <br className="hidden md:block" />
              <span className="text-text-secondary">en un temps record</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Bar Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" />
          
          {/* Animated Progress Fill */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-brand -translate-x-1/2 z-10 transition-all duration-300 ease-out hidden md:block" 
            style={{ height: `${progress * 100}%` }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isActive = progress > (i / steps.length);
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step Marker */}
                  <div className="translate-y-0 absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-background border-4 border-border z-20 -translate-x-1/2 flex items-center justify-center transition-colors duration-500"
                    style={{ 
                      borderColor: isActive ? 'var(--brand)' : 'var(--border)',
                      backgroundColor: isActive ? 'var(--brand)' : 'var(--bg-1)'
                    }}
                  >
                    {isActive ? <Check size={20} className="text-white" /> : <span className="text-sm font-bold text-text-muted">{i + 1}</span>}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ml-12 md:ml-0`}>
                    <ScrollReveal 
                      progress={progress} 
                      direction={i % 2 === 0 ? "left" : "right"} 
                      delay={0.1}
                      className="p-8 bg-background border border-border rounded-none shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 ${step.color} text-white flex items-center justify-center mb-6 rounded-none`}>
                        <step.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </ScrollReveal>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        <ScrollReveal progress={progress} direction="up" delay={0.8} className="mt-20 text-center">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-brand hover:bg-brand/90 text-white rounded-none shadow-lg hover:shadow-brand/20 transition-all">
                Démarrer mon audit gratuit
            </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

