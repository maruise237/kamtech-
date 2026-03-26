import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProofSection } from "@/components/sections/proof-section";
import { ForWhoSection } from "@/components/sections/for-who-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ProofSection />
      <ForWhoSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
