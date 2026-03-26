"use client";

import Link from "next/link";

export function FooterSection() {
  return (
    <footer id="reserve" className="bg-bg-1 text-text-primary">
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* CTA */}
          <div className="mb-20">
            <h2 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-text-primary">
              Prêt à automatiser<br />votre croissance ?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-text-primary/60 leading-relaxed">
              Prenez 30 minutes avec notre équipe — gratuitement — pour voir exactement comment KAMTECH IA peut transformer votre activité.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/237658992588?text=Bonjour%20KAMTECH%20IA%2C%20je%20souhaite%20un%20audit%20gratuit"
                target="_blank"
                className="inline-block rounded-none bg-brand px-8 py-4 text-sm font-medium text-text-inverse transition-all hover:opacity-80"
              >
                Réserver mon audit gratuit →
              </Link>
              <Link
                href="https://wa.me/237658992588"
                target="_blank"
                className="inline-block rounded-none border border-border px-8 py-4 text-sm font-medium text-text-primary transition-all hover:bg-bg-3"
              >
                WhatsApp : +237 658 992 588
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-border pt-10">
            <div>
              <p className="text-2xl font-medium tracking-tight text-text-primary">KAMTECH IA</p>
              <p className="mt-2 text-sm text-text-primary/40">
                Automatisation IA & Chatbots WhatsApp pour PME
              </p>
            </div>
            <div className="flex gap-8 text-sm text-text-primary/40">
              <Link href="#solutions" className="hover:text-text-primary transition-colors">Solutions</Link>
              <Link href="#resultats" className="hover:text-text-primary transition-colors">Résultats</Link>
              <Link href="#processus" className="hover:text-text-primary transition-colors">Processus</Link>
              <Link href="#faq" className="hover:text-text-primary transition-colors">FAQ</Link>
            </div>
          </div>

          <p className="mt-8 text-xs text-text-primary/30">
            © 2026 KAMTECH IA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
