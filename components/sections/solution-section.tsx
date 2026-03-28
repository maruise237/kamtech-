"use client";

import { MessageSquare, Workflow, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const solutions = [
  {
    icon: MessageSquare,
    title: "Chatbots WhatsApp IA",
    feature: "Agent conversationnel intelligent disponible 24/7.",
    advantage: "Réponse instantanée à 100% des leads, même la nuit.",
    benefit: "Augmentez vos conversions de 30% sans recruter.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Workflow,
    title: "Workflows n8n",
    feature: "Automatisation de bout en bout de vos processus métier.",
    advantage: "Élimine les erreurs humaines et la double saisie.",
    benefit: "Libérez 10h à 20h par semaine pour vos collaborateurs.",
    color: "text-brand",
    bg: "bg-brand/10",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard IA",
    feature: "Centralisation et analyse de toutes vos données.",
    advantage: "Vision claire sur la performance en temps réel.",
    benefit: "Prenez des décisions basées sur des faits, pas du ressenti.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="solution" ref={sectionRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <ScrollReveal progress={progress} direction="up" delay={0.1}>
            <span className="text-sm font-bold uppercase tracking-widest text-brand">La Solution</span>
          </ScrollReveal>
          <ScrollReveal progress={progress} direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
              Le système de croissance <br className="hidden md:block" />
              <span className="text-text-secondary">qui travaille pendant que vous dormez</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <ScrollReveal
              key={i}
              progress={progress}
              direction="up"
              delay={0.3 + i * 0.1}
              speed={1.1}
            >
              <div className="h-full flex flex-col p-10 bg-bg-2 border border-border rounded-none shadow-sm hover:shadow-2xl hover:border-brand/40 transition-all duration-500">
                <div className={`w-16 h-16 ${sol.bg} ${sol.color} flex items-center justify-center mb-8 rounded-none`}>
                  <sol.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-6">{sol.title}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Fonctionnalité</p>
                      <p className="text-text-primary font-medium">{sol.feature}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Avantage</p>
                      <p className="text-text-primary font-medium">{sol.advantage}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Bénéfice</p>
                      <p className="text-text-primary font-bold">{sol.benefit}</p>
                    </div>
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
