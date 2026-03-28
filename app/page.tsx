import { Header } from "@/components/header";
import { HeroSectionImproved } from "@/components/sections";
import { ProblemSection } from "@/components/sections";
import { SolutionSection } from "@/components/sections";
import { ProcessSection } from "@/components/sections";
import { TestimonialsSection } from "@/components/sections";
import { FaqSection } from "@/components/sections";
import { FooterSection } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-1">
      <Header />
      <HeroSectionImproved />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}

