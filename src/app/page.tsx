import Link from "next/link";

import { AmbientPlayer } from "@/components/interactive/AmbientPlayer";
import { AuroraBackground } from "@/components/interactive/AuroraBackground";
import { FloatingParticles } from "@/components/interactive/FloatingParticles";
import { GradientPulse } from "@/components/interactive/GradientPulse";
import { HeroTagline } from "@/components/interactive/HeroTagline";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Schema } from "@/components/seo/Schema";
import { WaveGraphic } from "@/components/interactive/WaveGraphic";

import {
  applicationFlow,
  corePractices,
  destinationPlaybook,
  heroCopy,
  homeJourney,
  retreatMatrix,
  safetyNotes,
  whatIncluded,
} from "@/data/retreats";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "7point83 Club",
    url: "https://7point83.club",
    logo: "https://7point83.club/logo.png",
    description:
      "India-first retreats blending mindful movement, nature immersion, and conscious living to help guests reset their rhythms.",
    sameAs: ["https://instagram.com/7point83club", "https://twitter.com/7point83club"],
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />

      <section className="relative isolate min-h-[85vh] px-[5%] pt-28 pb-20 overflow-hidden">
        <AuroraBackground className="-z-10" />
        <FloatingParticles />
        <GradientPulse />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,255,208,0.08),_transparent_40%)] -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,10,5,0.95)] via-[rgba(2,10,5,0.9)] to-transparent -z-10" />
        <div className="relative max-w-[1100px]">
          <p className="text-sm tracking-[0.2em] uppercase text-accent-glow mb-8 animate-fade-in" aria-live="polite">
            <HeroTagline />
          </p>
          <h1 className="text-[clamp(3.5rem,6vw,6rem)] font-light mb-8 heading-display">{heroCopy.title}</h1>
          <p className="text-lg text-text-muted max-w-[600px] mb-10 leading-relaxed">{heroCopy.subtitle}</p>
          <div className="flex flex-wrap gap-4 mb-16">
            {heroCopy.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="px-8 py-4 border border-white/20 rounded-full text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:border-accent-glow hover:text-accent-glow hover:bg-white/5 button-glow"
              >
                {cta.label}
              </Link>
            ))}
            <AmbientPlayer />
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8 border-t border-white/10 pt-8">
            {heroCopy.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-4xl font-light font-display mb-1">{metric.value}</p>
                <p className="text-xs uppercase tracking-widest text-text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <WaveGraphic className="-z-20" />
      </section>

      <section className="section-padding relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Our approach</p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] heading-display mb-6">Attune · Restore · Integrate</h2>
            <p className="text-text-primary/70 max-w-[700px] text-lg font-light leading-relaxed">
              Small, India-only groups move through intentional practices, guided therapies, and calm living that stays with you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {homeJourney.map((step) => (
              <div
                key={step.title}
                className="glass-card p-10 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent-glow/80 mb-4">{step.title}</p>
                  <p className="text-lg leading-relaxed text-text-primary/90">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Retreat matrix</p>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] heading-display">Choose by time or focus</h2>
            </div>
            <p className="text-text-primary/70 max-w-[400px] leading-relaxed text-right lg:text-left">
              Four durations, six tracks, twenty-four detail pages that pair your time horizon with your reset intention.
            </p>
          </div>
          <div className="grid gap-8">
            {retreatMatrix.map((block) => (
              <div key={block.duration.id} className="glass-card p-8 lg:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-6 mb-8 border-b border-white/5 pb-6">
                  <div>
                    <p className="text-sm tracking-widest uppercase text-accent-glow mb-2">{block.duration.label}</p>
                    <p className="text-3xl font-light font-display">{block.duration.tagline}</p>
                  </div>
                  <span className="text-sm border border-white/10 px-4 py-2 rounded-full text-text-muted">{block.duration.priceRange}</span>
                </div>
                <p className="text-text-primary/70 mb-8 text-lg max-w-2xl">{block.duration.summary}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.tracks.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/retreats/${entry.slug}`}
                      className="group rounded-xl border border-white/5 bg-white/[0.02] px-6 py-5 flex flex-col gap-2 hover:border-accent-glow/50 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-white group-hover:text-accent-glow transition-colors">{entry.track.label}</p>
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-glow">
                          →
                        </span>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed">{entry.track.focus}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">What we practice</p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] heading-display">Core rituals present on every retreat</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {corePractices.map((practice) => (
              <div key={practice.title} className="glass-card p-8">
                <h3 className="text-2xl font-display mb-4">{practice.title}</h3>
                <p className="text-text-primary/80 leading-relaxed">{practice.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-16 gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Destinations</p>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] heading-display">Seasonal India playbook</h2>
            </div>
            <p className="text-text-muted max-w-[400px] text-lg font-light leading-relaxed">
              Each property is selected for sustainability, quiet nature, and kitchens that serve the ritual meals we describe.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {destinationPlaybook.map((place) => (
              <div key={place.title} className="glass-card p-10 bg-[rgba(5,17,8,0.4)]">
                <h3 className="text-2xl font-display mb-3">{place.title}</h3>
                <p className="text-text-primary/70 leading-relaxed">{place.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card p-10 lg:p-12 border-accent-glow/20">
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">What to expect</p>
              <p className="text-2xl font-display text-text-primary mb-8 leading-snug">
                Every day blends breathwork, yoga/mobility, nourishment, and reflection. Want the full sample rhythm? Explore any retreat detail to see the complete daily flow.
              </p>
              <Link
                href="/retreats"
                className="inline-flex items-center gap-3 px-8 py-4 border border-accent-glow rounded-full tracking-widest uppercase text-xs text-accent-glow hover:bg-accent-glow hover:text-bg-deep transition-all duration-300"
              >
                See daily flow
                <span>→</span>
              </Link>
            </div>
            <div className="glass-card p-10 bg-white/[0.02]">
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8">Path to Alpha</p>
              <div className="space-y-8">
                {applicationFlow.slice(0, 3).map((step, index) => (
                  <div key={step.title} className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full border border-accent-glow/40 flex flex-shrink-0 items-center justify-center text-accent-glow text-sm font-body">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-display text-xl mb-2">{step.title}</p>
                      <p className="text-sm text-text-muted leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(100px,15vw,180px)] px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,31,18,0.8)] to-transparent -z-10" />
        <div className="max-w-[1200px] mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8">Application flow</p>
            <div className="space-y-10">
              {applicationFlow.map((step, index) => (
                <div key={step.title} className="group flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex flex-shrink-0 items-center justify-center text-accent-glow group-hover:border-accent-glow transition-colors duration-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-2 group-hover:text-accent-glow transition-colors">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed max-w-sm">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8 relative z-10">Safety + our container</p>
            <ul className="space-y-4 text-text-primary/80 text-lg mb-12 text-left inline-block relative z-10">
              {safetyNotes.map((note) => (
                <li key={note} className="flex gap-4 items-center">
                  <span className="text-accent-glow">✦</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
            <div className="relative z-10">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-accent-glow rounded-full tracking-[0.15em] uppercase text-sm hover:bg-accent-glow hover:text-bg-deep transition-all duration-300 shadow-[0_0_20px_rgba(79,255,208,0.1)] hover:shadow-[0_0_40px_rgba(79,255,208,0.3)]"
              >
                Apply for your retreat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
