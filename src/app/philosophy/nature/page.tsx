import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Schema } from "@/components/seo/Schema";
import { PillarDetail, getPillarBySlug } from "@/data/philosophy";
import { PillarDetail as PillarDetailComponent } from "@/components/philosophy/PillarDetail";

export const metadata = {
  title: "Nature Immersion · 7point83 Club",
  description: "Forest, river, and hill immersion rituals that slow your rhythm.",
};

export default function NaturePage() {
  const pillar = getPillarBySlug("nature") as PillarDetail;
  if (!pillar) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={{ "@context": "https://schema.org", "@type": "WebPage", name: pillar.title, description: pillar.summary }} />
      <Header />
      <PillarDetailComponent pillar={pillar} />
      <Footer />
    </main>
  );
}
