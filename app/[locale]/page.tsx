import { HeroSection } from "@/components/sections/home/HeroSection";
import { StageSelectorSection } from "@/components/sections/home/StageSelectorSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { PillarsSection } from "@/components/sections/home/PillarsSection";
import { CompareSection } from "@/components/sections/home/CompareSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StageSelectorSection />
      <ProblemSection />
      <PillarsSection />
      <CompareSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <StickyDownloadBar />
    </>
  );
}
