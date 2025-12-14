import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { aboutSections } from "@/data/retreats";

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About 7point83 Club",
    description: "About our India-only retreat collective rooted in rhythm, nature, and sustainability.",
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="An India-first club for intentional resets"
        subtitle="We partner with eco-friendly properties, compassionate facilitators, and local communities to host retreats that reset your body, mind, and habits in harmony with the Earth."
        overline="About"
      />

      <section className="px-[5%] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1100px] mx-auto grid gap-8 md:grid-cols-2">
          {aboutSections.map((section) => (
            <div key={section.title} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[20px] p-6">
              <h3 className="text-[1.2rem] font-semibold mb-3">{section.title}</h3>
              <p className="text-text-muted leading-[1.7]">{section.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[5%] py-[clamp(40px,8vw,80px)] text-center">
        <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Next step</p>
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)]">Ready to bring 7.83 Hz into your life?</h2>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 mt-5 px-10 py-3 border border-accent-glow rounded-full tracking-[2px] uppercase text-[0.85rem] text-accent-glow hover:bg-accent-glow hover:text-bg-deep transition"
        >
          Apply now
        </Link>
      </section>

      <Footer />
    </main>
  );
}
