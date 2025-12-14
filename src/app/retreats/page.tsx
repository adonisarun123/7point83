import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { retreatMatrix, durations, tracks } from "@/data/retreats";

export default function RetreatsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "7point83 Club Retreats",
    description: "India-only retreats that blend mindful movement, therapies, and conscious living.",
    publisher: {
      "@type": "Organization",
      name: "7point83 Club",
    },
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="India-first retreats for every reset rhythm"
        subtitle="Choose from four durations and six specialization tracks. Every page is rooted in eco-friendly nature stays, conscious food, movement, breath, and healing therapies."
        overline="Retreats"
      />

      <section className="px-[5%] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-6">
            <div>
              <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Quick chooser</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">Pick by time or focus</h2>
            </div>
            <p className="text-text-muted max-w-[400px]">
              Each duration pairs with a track specialization so you can opt for fast nervous-system resets or deep behind-the-scenes transformations.
            </p>
          </div>
          <div className="grid gap-6">
            {retreatMatrix.map((block) => (
              <div key={block.duration.id} className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <p className="text-[1rem] tracking-[3px] uppercase text-text-muted">{block.duration.label}</p>
                    <p className="text-[1.4rem] font-semibold">{block.duration.summary}</p>
                  </div>
                  <span className="text-[0.9rem] text-text-muted">{block.duration.priceRange}</span>
                </div>
                <p className="text-text-muted mb-4">{block.duration.note}</p>
                <div className="flex flex-wrap gap-2">
                  {block.tracks.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/retreats/${entry.slug}`}
                      className="rounded-full border border-[rgba(255,255,255,0.15)] px-4 py-2 text-sm tracking-[1px] uppercase text-text-muted hover:border-accent-glow transition"
                    >
                      {entry.track.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)] bg-gradient-to-b from-transparent via-bg-secondary to-transparent">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Tracks</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Six specializations without compromise</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <div key={track.id} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[24px] p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-[1.3rem] font-semibold">{track.label}</h3>
                  <span className="text-xs tracking-[3px] uppercase text-text-muted">{track.emphasis.split(".")[0]}</span>
                </div>
                <p className="text-text-muted mb-4">{track.promise}</p>
                <ul className="space-y-2 text-text-muted text-[0.95rem] mb-4">
                  {track.unique.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent-glow">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/retreats/r5-${track.slug}`}
                  className="inline-flex items-center gap-2 text-[0.85rem] tracking-[2px] uppercase border-b border-accent-glow text-accent-glow"
                >
                  Start with 5 days
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-6">
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Duration comparison</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Transparently tiered, always grounded</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-sm uppercase tracking-[2px] text-text-muted">Program</th>
                  <th className="p-4 text-sm uppercase tracking-[2px] text-text-muted">Therapies</th>
                  <th className="p-4 text-sm uppercase tracking-[2px] text-text-muted">Price</th>
                  <th className="p-4 text-sm uppercase tracking-[2px] text-text-muted">Integration</th>
                </tr>
              </thead>
              <tbody>
                {durations.map((duration) => (
                  <tr key={duration.id} className="border-b border-white/5 hover:bg-[rgba(79,255,208,0.03)]">
                    <td className="p-4">
                      <p className="font-semibold">{duration.label}</p>
                      <p className="text-sm text-text-muted">{duration.tagline}</p>
                    </td>
                    <td className="p-4">{duration.therapySessions} therapy session{duration.therapySessions > 1 ? "s" : ""}</td>
                    <td className="p-4">{duration.priceRange}</td>
                    <td className="p-4 text-sm text-text-muted">{duration.integration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)] bg-gradient-to-b from-transparent via-[rgba(5,17,8,0.9)] to-transparent">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Ready to join?</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Applications open to curious, committed guests</h2>
            <p className="text-text-muted max-w-[520px] mt-3">
              We curate cohorts of 12–20 people, review every application for intention and safety, and limit availability to keep the experience intimate.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-accent-glow rounded-full tracking-[2px] uppercase text-[0.85rem] text-accent-glow hover:bg-accent-glow hover:text-bg-deep transition"
          >
            Apply now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
