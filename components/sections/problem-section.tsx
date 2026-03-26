"use client";

import { XCircle, Clock, Users, ZapOff } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Leads perdus",
    desc: "Un prospect qui attend plus de 15 minutes pour un tarif est un prospect perdu pour la concurrence."
  },
  {
    icon: Clock,
    title: "Tâches répétitives",
    desc: "Votre équipe passe 40% de son temps à copier-coller des données ou à répondre aux mêmes questions."
  },
  {
    icon: Users,
    title: "Suivi inexistant",
    desc: "80% des ventes nécessitent 5 relances. La plupart des PME n'en font aucune par manque de temps."
  },
  {
    icon: ZapOff,
    title: "Processus manuels",
    desc: "La paperasse et les erreurs humaines freinent votre croissance et frustrent vos clients."
  }
];

export function ProblemSection() {
  return (
    <section className="bg-background py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Le coût de l'ancien modèle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Travailler "à la main" en 2024 n'est plus une option. C'est un handicap qui bride votre rentabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 border border-border bg-secondary transition-all hover:border-primary/30"
            >
              <div className="bg-primary/10 p-2 text-primary">
                <p.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
