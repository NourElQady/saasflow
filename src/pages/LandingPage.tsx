import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBuyBar } from "@/components/ui/StickyBuyBar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Features } from "@/components/sections/Features";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatIsIncluded } from "@/components/sections/WhatIsIncluded";
import { UseCases } from "@/components/sections/UseCases";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Roadmap } from "@/components/sections/Roadmap";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30 selection:text-foreground">
      <Navbar />
      <ScrollProgress />
      <StickyBuyBar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <TechMarquee />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <WhatIsIncluded />
        <UseCases />
        <ComparisonTable />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Roadmap />
        <NewsletterCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
