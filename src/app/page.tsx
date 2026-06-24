import { PageShell } from "@/components/PageShell";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NewsMarquee } from "@/components/NewsMarquee";
import { ResearchSection } from "@/components/ResearchSection";

export default function HomePage() {
  return (
    <PageShell fullBleedHero>
      <HeroCarousel />
      <NewsMarquee />
      <ResearchSection />
    </PageShell>
  );
}
