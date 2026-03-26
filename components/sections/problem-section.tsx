"use client";

import { AlertTriangle, Clock, Users, Eye } from "lucide-react";

const pains = [
  { icon: Clock, text: "Prospects qui disparaissent faute de réponse rapide" },
  { icon: Users, text: "Équipes épuisées par les tâches répétitives" },
  { icon: AlertTriangle, text: "Suivi client chaotique, relances oubliées" },
  { icon: Eye, text: "Aucune visibilité sur ce qui se passe dans vos conversations" },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-bg-1 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-8 text-center">
          Votre entreprise perd de l&apos;argent<br className="hidden md:block" /> chaque jour sans le savoir
        </h2>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Un prospect vous contacte sur WhatsApp à 22h. Personne ne répond. Le lendemain matin, il a signé avec votre concurrent.
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            C&apos;est le problème n°1 des PME aujourd&apos;hui : trop de leads entrants, pas assez de réactivité. Vos équipes passent des heures à recopier des données, répondre aux mêmes questions, relancer manuellement — pendant que les vraies opportunités filent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-none bg-bg-2 border border-border transition-all hover:shadow-md hover:border-error/30"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-none bg-error/10 flex items-center justify-center">
                <pain.icon size={20} className="text-error" />
              </div>
              <p className="text-text-primary font-medium text-sm leading-relaxed pt-1.5">{pain.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-medium text-brand">
          Il existe une solution. Et elle tourne déjà dans des centaines d&apos;entreprises. ↓
        </p>
      </div>
    </section>
  );
}
