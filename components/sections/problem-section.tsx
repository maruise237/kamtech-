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
    <section id="problem" className="bg-background py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-center">
          Votre entreprise perd de l&apos;argent<br className="hidden md:block" /> chaque jour sans le savoir
        </h2>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Un prospect vous contacte sur WhatsApp à 22h. Personne ne répond. Le lendemain matin, il a signé avec votre concurrent.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            C&apos;est le problème n°1 des PME aujourd&apos;hui : trop de leads entrants, pas assez de réactivité. Vos équipes passent des heures à recopier des données, répondre aux mêmes questions, relancer manuellement — pendant que les vraies opportunités filent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-red-50 border border-red-100 transition-all hover:shadow-md"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <pain.icon size={20} className="text-red-500" />
              </div>
              <p className="text-foreground font-medium text-sm leading-relaxed pt-1.5">{pain.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-medium text-emerald-600">
          Il existe une solution. Et elle tourne déjà dans des centaines d&apos;entreprises. ↓
        </p>
      </div>
    </section>
  );
}
