"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const situations = [
  "Vous répondez vous-même à vos messages WhatsApp le soir",
  "Vous avez perdu des clients parce que vous n'étiez pas disponible",
  "Votre équipe passe trop de temps sur des tâches sans valeur",
  "Vous voulez scaler votre activité sans embaucher",
  "Vous cherchez un partenaire technique qui parle votre langue, pas du jargon",
];

export function ForWhoSection() {
  return (
    <section className="bg-bg-1 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 text-center">
          KAMTECH IA est fait pour vous si…
        </h2>
        <p className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Vous êtes une PME, un entrepreneur ou un indépendant et vous reconnaissez au moins une de ces situations :
        </p>

        <div className="space-y-4 mb-12 max-w-xl mx-auto">
          {situations.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-none bg-bg-2 border border-border transition-all hover:shadow-md hover:border-brand/30">
              <div className="flex-shrink-0 w-6 h-6 rounded-none bg-brand flex items-center justify-center mt-0.5">
                <Check size={14} className="text-text-inverse" strokeWidth={3} />
              </div>
              <p className="text-text-primary text-sm font-medium leading-relaxed">{s}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#cta-final"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-none bg-text-primary text-text-inverse hover:opacity-90 transition-all shadow-lg"
          >
            Parler à un expert KAMTECH IA
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
