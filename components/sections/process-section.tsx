"use client";

import { Search, Settings, BarChart3 } from "lucide-react";

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
  return (
    <section id="processus" className="bg-gray-950 py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 text-center">
          3 étapes pour automatiser<br className="hidden md:block" /> votre croissance
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-lg mx-auto">
          Un processus simple, rapide et sans friction. Zéro compétence technique requise.
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group text-center">
                {/* Step number */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                  <step.icon size={32} className="text-emerald-400" />
                </div>

                <span className="inline-block text-xs font-mono text-emerald-500 tracking-widest mb-3">{step.number}</span>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
