"use client";

import { AlertCircle, TrendingDown, ZapOff, Clock, Coins, BrainCircuit } from "lucide-react";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const problems = [
  {
    icon: Clock,
    title: "Processus Manuels Chronophages",
    description: "Vos équipes passent 40% de leur temps sur des saisies de données répétitives au lieu de vendre.",
    agitation: "Chaque minute perdue est un lead qui refroidit.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Coins,
    title: "Coûts Opérationnels Explosifs",
    description: "Embaucher pour gérer le flux de messages WhatsApp devient insoutenable pour votre rentabilité.",
    agitation: "Vos marges fondent à cause d'une gestion inefficace.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: BrainCircuit,
    title: "Manque d'Intelligence Actionnable",
    description: "Sans IA, vous n'avez aucune vision sur les motifs d'achat ou les points de friction de vos prospects.",
    agitation: "Vous pilotez votre PME à l'aveugle dans un marché qui s'accélère.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="problem" ref={sectionRef} className="relative bg-bg-2 py-24 md:py-32 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <ScrollReveal progress={progress} direction="up" delay={0.1}>
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">Le Constat</span>
          </ScrollReveal>
          <ScrollReveal progress={progress} direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
              Votre PME perd de l&apos;argent <br className="hidden md:block" />
              <span className="text-text-secondary">chaque jour sans l&apos;IA</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <ScrollReveal
              key={i}
              progress={progress}
              direction="up"
              delay={0.3 + i * 0.1}
              speed={1 + i * 0.1}
              className="group"
            >
              <div className="relative h-full flex flex-col p-8 bg-background border border-border rounded-none transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1">
                <div className={`w-12 h-12 ${prob.bg} ${prob.color} flex items-center justify-center mb-6 rounded-none`}>
                  <prob.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">{prob.title}</h3>
                <p className="text-text-secondary mb-4">
                  {prob.description}
                </p>
                
                <div className="mt-auto h-px w-full bg-border mb-4" />
                
                <p className="text-sm font-semibold text-red-500 italic">
                  {prob.agitation}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal progress={progress} direction="up" delay={0.7} className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-text-primary font-medium border-b border-brand pb-1">
            <span>Découvrez comment nous inversons la tendance</span>
            <AlertCircle size={18} className="text-brand" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
