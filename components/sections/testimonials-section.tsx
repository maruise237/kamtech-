"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-bg-1">
      {/* About Image with Text Overlay */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/testimonial-house.png"
          alt="KAMTECH IA — Automatisation intelligente pour PME"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-1/70 via-bg-1/30 to-transparent" />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-text-primary md:text-3xl lg:text-[2.5rem] lg:leading-snug text-center">
            Votre prochain client vous attend déjà sur WhatsApp.
            Chaque heure sans automatisation est une heure perdue.
          </p>
        </div>
      </div>
    </section>
  );
}
