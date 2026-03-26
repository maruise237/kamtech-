"use client";

import Link from "next/link";

export function FooterSection() {
  return (
    <footer id="reserve" className="bg-foreground text-background">
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* CTA */}
          <div className="mb-20">
            <h2 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Prêt à automatiser<br />votre croissance ?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-background/60 leading-relaxed">
              Prenez 30 minutes avec notre équipe — gratuitement — pour voir exactement comment KAMTECH IA peut transformer votre activité.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/237658992588?text=Bonjour%20KAMTECH%20IA%2C%20je%20souhaite%20un%20audit%20gratuit"
                target="_blank"
                className="inline-block rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-all hover:opacity-80"
              >
                Réserver mon audit gratuit →
              </Link>
              <Link
                href="https://wa.me/237658992588"
                target="_blank"
                className="inline-block rounded-full border border-background/30 px-8 py-4 text-sm font-medium text-background transition-all hover:bg-background/10"
              >
                WhatsApp : +237 658 992 588
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-background/10 pt-10">
            <div>
              <p className="text-2xl font-medium tracking-tight">KAMTECH IA</p>
              <p className="mt-2 text-sm text-background/40">
                Automatisation IA & Chatbots WhatsApp pour PME
              </p>
            </div>
            <div className="flex gap-8 text-sm text-background/40">
              <Link href="#products" className="hover:text-background transition-colors">Solutions</Link>
              <Link href="#technology" className="hover:text-background transition-colors">Résultats</Link>
              <Link href="#accessories" className="hover:text-background transition-colors">Offres</Link>
              <Link href="#about" className="hover:text-background transition-colors">À propos</Link>
            </div>
          </div>

          <p className="mt-8 text-xs text-background/30">
            © 2026 KAMTECH IA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
