import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { corePractices } from "@/data/retreats";

export default function PhilosophyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "7point83 Club Philosophy",
    description: "A philosophy rooted in nature, rhythm, and grounded science.",
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="Science, spirit, and nature aligned at 7.83 Hz"
        subtitle="We believe modern life has tugged us away from the Earth's rhythm. Our philosophy pairs breath, stillness, movement, and nourishment so you can return to a cleaner frequency."
        overline="Philosophy"
        badge={
          <div className="inline-flex items-center gap-3 bg-accent-soft px-5 py-2 rounded-full text-[0.8rem] tracking-[3px]">
            <span className="font-display text-[1.2rem] text-accent-glow">7.83</span>
            Hertz · Earth’s heartbeat
          </div>
        }
      />

      <section className="px-[5%] py-[clamp(60px,12vw,120px)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-3">Our belief</h2>
          <p className="text-text-muted leading-[1.8]">
            Modern life pulls us away from nature’s rhythm—sleep, breath, posture, focus, and nutrition. 7point83 Club helps you return to a cleaner rhythm through structured daily practice, quiet nature immersion, and sustainable living. We anchor retreats in India-only eco stays so every gesture, meal, and session is designed around the land.
          </p>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,12vw,120px)] bg-gradient-to-br from-transparent via-bg-secondary to-transparent">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 gap-4">
            <div>
              <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Pillars</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">Movement · Stillness · Nature · Nourishment</h2>
            </div>
            <p className="text-text-muted max-w-[450px]">
              Every retreat we host traces these pillars—movement that attends to posture, stillness that trains focus, nature immersion that grounds the senses, and conscious nutrition that feeds the system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {corePractices.map((practice) => (
              <div key={practice.title} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[20px] p-6">
                <h3 className="text-[1.2rem] font-semibold mb-3">{practice.title}</h3>
                <p className="text-text-muted leading-[1.7]">{practice.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,12vw,120px)]">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-3">Our promise</h2>
          <p className="text-text-muted leading-[1.7]">
            A retreat with us is not a vacation. It is a structured reset that helps you reduce stress, rebuild daily habits, improve strength and sleep, and integrate the calm back into city life—supported by experts, conscious food, and the frequency of the Earth.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-3 border border-accent-glow rounded-full tracking-[2px] uppercase text-[0.85rem] text-accent-glow hover:bg-accent-glow hover:text-bg-deep transition"
          >
            Apply now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
