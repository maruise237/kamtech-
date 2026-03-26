"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

const profiles = [
  {
    title: "Services & Consulting",
    desc: "Automatisez la prise de RDV et la qualification de vos clients sur WhatsApp."
  },
  {
    title: "Immobilier & Agences",
    desc: "Envoyez instantanément vos catalogues et filtrez les curieux des acheteurs réels."
  },
  {
    title: "E-commerce & Local",
    desc: "Gérez le support client 24/7 et boostez les avis Google en automatique."
  }
];

export function ForWhoSection() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Est-ce pour vous ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si vous gérez plus de 20 messages par jour ou si vos collaborateurs perdent du temps sur Excel, la réponse est oui.
            </p>
            <div className="space-y-4">
              {profiles.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 border border-border bg-secondary hover:border-primary/30"
                >
                  <div className="bg-primary p-1 rounded-full text-primary-foreground">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-secondary border border-border overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div>
                   <p className="text-2xl font-serif italic text-foreground mb-6">"L'IA n'est plus un luxe, c'est le moteur de ceux qui vont rester dans la course."</p>
                   <div className="h-px w-12 bg-primary mx-auto mb-6" />
                   <p className="text-sm font-bold uppercase tracking-widest text-primary">Kamtech Vision</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
