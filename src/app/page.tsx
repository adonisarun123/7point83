import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PhilosophyPreview } from "@/components/home/PhilosophyPreview";
import { Offerings } from "@/components/home/Offerings";
import { Journey } from "@/components/home/Journey";
import { CTA } from "@/components/home/CTA";
import { Schema } from "@/components/seo/Schema";

import { AudioPlayer } from "@/components/layout/AudioPlayer";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "7point83 Club",
    "url": "https://7point83.club",
    "logo": "https://7point83.club/logo.png",
    "description": "A wellness community dedicated to reconnecting humanity with Earth's natural frequency of 7.83Hz.",
    "sameAs": [
      "https://instagram.com/7point83club",
      "https://twitter.com/7point83club"
    ]
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <Hero />
      <PhilosophyPreview />
      <Offerings />
      <Journey />
      <CTA />
      <Footer />
      <AudioPlayer />
    </main>
  );
}
