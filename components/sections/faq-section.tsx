"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que c'est compliqué à mettre en place ?",
    a: "Non. On s'occupe de tout. Vous n'avez besoin d'aucune compétence technique. Délai moyen de déploiement : 7 jours.",
  },
  {
    q: "Est-ce que ça fonctionne pour mon secteur ?",
    a: "Oui. Nos solutions s'adaptent à tous les secteurs : commerce, immobilier, BTP, services, restauration, santé, éducation. On configure en fonction de votre activité spécifique.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est différent. C'est pourquoi on commence par un audit gratuit pour vous proposer une solution adaptée à votre budget et vos objectifs. Pas de forfait rigide.",
  },
  {
    q: "Quelle différence avec un simple chatbot basique ?",
    a: "Un chatbot basique répond à des questions préenregistrées. Nos systèmes IA comprennent le contexte, qualifient les prospects, s'intègrent à vos outils existants et s'améliorent dans le temps.",
  },
  {
    q: "Est-ce que je garde le contrôle ?",
    a: "Totalement. Vous définissez le ton, les réponses, les scénarios. On vous forme à l'utilisation. Vous restez maître de votre système.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-12 text-center">
          Questions fréquentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${openIndex === i ? 'bg-white border-primary/30 shadow-md' : 'bg-white border-gray-200 hover:border-gray-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
