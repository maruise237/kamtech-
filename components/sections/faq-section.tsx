"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce compliqué à installer ?",
    a: "Non. On s'occupe de TOUT. On branche les API, on configure les serveurs n8n et on crée les scénarios. Vous n'avez qu'à valider le ton de voix de votre chatbot."
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "On privilégie n8n pour l'automatisation (plus puissant et moins cher que Zapier), WhatsApp Business API pour la messagerie, et OpenAI pour l'intelligence des réponses."
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est sur mesure. Cependant, un système d'automatisation KAMTECH se rentabilise généralement en moins de 3 mois grâce au temps gagné par vos équipes."
  },
  {
    q: "Et si l'IA dit n'importe quoi ?",
    a: "On installe des garde-fous stricts. L'IA travaille sur VOTRE base de données (PDF, site, docs internes). Si elle ne sait pas, elle transfère l'appel à un humain."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card px-6 transition-all data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="hover:no-underline text-left font-bold text-foreground py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
