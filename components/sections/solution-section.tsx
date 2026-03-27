"use client";

import { MessageSquare, Cog, Globe } from "lucide-react";
import { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    icon: MessageSquare,
    title: "Chatbot WhatsApp IA",
    subtitle: "Votre commercial disponible 24h/24 sur WhatsApp",
    description: "Votre chatbot répond instantanément, qualifie vos prospects, envoie vos tarifs, prend des rendez-vous — même à 3h du matin. Seuls les contacts sérieux arrivent à vous.",
    result: "Résultat typique : temps de réponse ÷10, conversions +30 à +60%",
  },
  {
    icon: Cog,
    title: "Automatisation des processus (n8n)",
    subtitle: "Éliminez les tâches répétitives de votre équipe",
    description: "Facturation, saisie de données, relances clients, rapports hebdomadaires — tout ce qui se fait manuellement peut être automatisé. On connecte vos outils (CRM, Google Sheets, email, WhatsApp) en un seul flux intelligent.",
    result: "Résultat typique : 10 à 13h gagnées par semaine et par collaborateur",
  },
  {
    icon: Globe,
    title: "Site web + Tunnel de conversion",
    subtitle: "Un site qui capte, qualifie et déclenche l'automatisation",
    description: "Votre site n'est pas une vitrine. C'est le point d'entrée de votre système IA. Chaque formulaire, chaque clic déclenche une action automatique — guide envoyé, séquence WhatsApp lancée, lead enregistré dans votre CRM.",
    result: "Technologie : WordPress / Kadence — Optimisé conversion + SEO",
  },
];

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="solutions" ref={sectionRef} className="bg-bg-2 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal progress={progress} offset={40} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              KAMTECH IA : votre système de<br className="hidden md:block" /> croissance automatisé
            </h2>
          </ScrollReveal>
          <ScrollReveal progress={progress} offset={30} delay={0.2}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Nous ne vendons pas des outils. Nous construisons des systèmes qui travaillent à votre place — sur WhatsApp, sur votre site, dans vos process internes.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            return (
              <ScrollReveal
                key={i}
                progress={progress}
                offset={100}
                delay={0.3 + (i * 0.1)}
                speed={0.9 + (i * 0.15)}
              >
                <div
                  className="group relative h-full rounded-none border border-border bg-bg-1 p-8 transition-all duration-300 hover:shadow-md hover:border-brand/30"
                >
                  <div className="w-14 h-14 rounded-none bg-bg-3 flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-brand" />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-text-secondary mb-4">{service.subtitle}</p>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">{service.description}</p>

                  <div className="inline-block px-3 py-1.5 rounded-none text-xs font-semibold bg-brand-subtle text-brand">
                    {service.result}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
