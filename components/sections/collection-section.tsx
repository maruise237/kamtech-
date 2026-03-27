"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Chatbot WhatsApp IA",
    description: "Votre commercial disponible 24h/24.  Qualifie, répond, prend RDV automatiquement.",
    price: "Sur devis",
    image: "/images/hero-side-1.png",
  },
  {
    id: 2,
    name: "Automatisation n8n",
    description: "Connectez CRM, email, WhatsApp, Google Sheets en un seul flux intelligent.",
    price: "Sur devis",
    image: "/images/hero-side-2.png",
  },
  {
    id: 3,
    name: "Site + Tunnel de conversion",
    description: "Un site qui capte, qualifie et déclenche vos automatisations IA.",
    price: "Sur devis",
    image: "/images/hero-side-4.png",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-bg-1">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-text-primary md:text-4xl">
          Nos solutions
        </h2>
      </div>

      {/* Cards */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              <div className="relative aspect-[2/3] overflow-hidden rounded-none bg-bg-2 border border-border">
                <FadeImage src={accessory.image || "/placeholder.svg"} alt={accessory.name} fill className="object-cover group-hover:scale-105" />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-text-primary">{accessory.name}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{accessory.description}</p>
                  </div>
                  <span className="text-lg font-medium text-text-primary">{accessory.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-none bg-bg-2 border border-border">
                <FadeImage src={accessory.image || "/placeholder.svg"} alt={accessory.name} fill className="object-cover group-hover:scale-105" />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-text-primary">{accessory.name}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{accessory.description}</p>
                  </div>
                  <span className="font-medium text-text-primary text-2xl">{accessory.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
