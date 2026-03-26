"use client";

import { MessageSquare, Cog, Globe } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Chatbot WhatsApp IA",
    subtitle: "Votre commercial disponible 24h/24 sur WhatsApp",
    description: "Votre chatbot répond instantanément, qualifie vos prospects, envoie vos tarifs, prend des rendez-vous — même à 3h du matin. Seuls les contacts sérieux arrivent à vous.",
    result: "Résultat typique : temps de réponse ÷10, conversions +30 à +60%",
    color: "emerald",
  },
  {
    icon: Cog,
    title: "Automatisation des processus (n8n)",
    subtitle: "Éliminez les tâches répétitives de votre équipe",
    description: "Facturation, saisie de données, relances clients, rapports hebdomadaires — tout ce qui se fait manuellement peut être automatisé. On connecte vos outils (CRM, Google Sheets, email, WhatsApp) en un seul flux intelligent.",
    result: "Résultat typique : 10 à 13h gagnées par semaine et par collaborateur",
    color: "blue",
  },
  {
    icon: Globe,
    title: "Site web + Tunnel de conversion",
    subtitle: "Un site qui capte, qualifie et déclenche l'automatisation",
    description: "Votre site n'est pas une vitrine. C'est le point d'entrée de votre système IA. Chaque formulaire, chaque clic déclenche une action automatique — guide envoyé, séquence WhatsApp lancée, lead enregistré dans votre CRM.",
    result: "Technologie : WordPress / Kadence — Optimisé conversion + SEO",
    color: "purple",
  },
];

const colorMap = {
  emerald: { bg: "bg-accent",   iconBg: "bg-primary/10", iconColor: "text-primary",   border: "border-border",  badge: "bg-primary/10 text-primary" },
  blue:    { bg: "bg-secondary", iconBg: "bg-primary/10", iconColor: "text-primary",   border: "border-border",  badge: "bg-muted text-muted-foreground" },
  purple:  { bg: "bg-secondary", iconBg: "bg-primary/10", iconColor: "text-primary",   border: "border-border",  badge: "bg-muted text-muted-foreground" },
}

export function SolutionSection() {
  return (
    <section id="solutions" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            KAMTECH IA : votre système de<br className="hidden md:block" /> croissance automatisé
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous ne vendons pas des outils. Nous construisons des systèmes qui travaillent à votre place — sur WhatsApp, sur votre site, dans vos process internes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div
                key={i}
                className={`group relative rounded-none border ${colors.border} ${colors.bg} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30`}
              >
                <div className={`w-14 h-14 rounded-none ${colors.iconBg} flex items-center justify-center mb-6`}>
                  <service.icon size={28} className={colors.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <div className={`inline-block px-3 py-1.5 rounded-none text-xs font-semibold ${colors.badge}`}>
                  {service.result}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
