"use client";

import { TrendingUp, Clock, Zap, Quote } from "lucide-react";

const stats = [
  { value: "+62%", label: "de conversions en moyenne après déploiement chatbot WhatsApp", icon: TrendingUp },
  { value: "-70%", label: "du temps passé sur les demandes clients récurrentes", icon: Clock },
  { value: "7 jours", label: "délai moyen de déploiement d'une solution complète", icon: Zap },
];

const testimonials = [
  {
    quote: "Depuis que KAMTECH IA a mis en place notre chatbot WhatsApp, on ne rate plus aucun prospect. Le bot répond, qualifie, et nous envoie un récap. On a gagné l'équivalent d'un mi-temps.",
    author: "Directeur commercial",
    company: "PME BTP",
  },
  {
    quote: "Nos relances clients étaient un désastre. Aujourd'hui tout est automatisé. On reçoit les bons clients au bon moment, sans effort.",
    author: "Gérante",
    company: "Agence de services",
  },
];

export function ProofSection() {
  return (
    <section id="resultats" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
          Des résultats concrets,<br className="hidden md:block" /> pas des promesses
        </h2>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-8 border border-border bg-card transition-all hover:border-primary/30">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.value}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-gray-50 border border-gray-200 transition-all hover:shadow-lg">
              <Quote size={32} className="text-primary/30 mb-4" />
              <p className="text-foreground text-base leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
