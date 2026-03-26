"use client";

const steps = [
  {
    num: "01",
    title: "Audit & Stratégie",
    desc: "Nous analysons vos goulots d'étranglement et définissons les flux à automatiser en priorité."
  },
  {
    num: "02",
    title: "Architecture IA",
    desc: "Développement de vos agents WhatsApp et configuration des workflows n8n sur mesure."
  },
  {
    num: "03",
    title: "Déploiement Flash",
    desc: "Mise en service en 7 à 10 jours. On forme vos équipes et on calibre les premiers retours."
  },
  {
    num: "04",
    title: "Optimisation continue",
    desc: "Suivi des performances et ajustement des algorithmes pour maximiser votre ROI."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-foreground py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-background mb-6">
            L'IA en place en 7 jours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Pas de projet tunnel de 6 mois. On déploie vite, on mesure, on itère.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="text-6xl font-black text-white/5 mb-6 transition-colors group-hover:text-primary/20">
                {step.num}
              </div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <h3 className="text-xl font-bold text-primary-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
