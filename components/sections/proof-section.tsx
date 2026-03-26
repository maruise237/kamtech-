"use client";

import { BarChart3, TrendingUp, Users2, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Temps de réponse", value: "-90%", icon: BarChart3 },
  { label: "Cout d'acquisition", value: "-45%", icon: TrendingUp },
  { label: "Leads qualifiés", value: "+120%", icon: Users2 },
  { label: "Fiabilité process", value: "99.9%", icon: ShieldCheck },
];

export function ProofSection() {
  return (
    <section id="results" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 border border-border bg-card transition-all hover:border-primary/30"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
