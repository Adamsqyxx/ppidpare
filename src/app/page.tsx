import { ActionCardsSection } from "@/components/beranda/action-cards-section";
import { HeroSection } from "@/components/beranda/hero-section";
import { MaklumatSection } from "@/components/beranda/maklumat-section";
import { MetricsSection } from "@/components/beranda/metrics-section";
import { NewsSection } from "@/components/beranda/news-section";
import { ProcessSection } from "@/components/beranda/process-section";
import { QuickDocSearch } from "@/components/beranda/quick-doc-search";
import { TransparencyNotice } from "@/components/beranda/transparency-notice";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <TransparencyNotice />
      <HeroSection />
      <ActionCardsSection />
      <MetricsSection />
      <ProcessSection />
      <NewsSection />
      <QuickDocSearch />
      <MaklumatSection />
    </div>
  );
}
