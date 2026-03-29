import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ProofSection } from "@/components/sections/proof-section";
import { ProcessSection } from "@/components/sections/process-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { ForWhoSection } from "@/components/sections/for-who-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-1">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <ProcessSection />
      <GallerySection />
      <CollectionSection />
      <ForWhoSection />
      <TechnologySection />
      <EditorialSection />
      <PhilosophySection />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
