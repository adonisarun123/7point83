import Link from "next/link";

import { AmbientPlayer } from "@/components/interactive/AmbientPlayer";
import { OxygenBubbleField } from "@/components/interactive/OxygenBubbleField";
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
        <OxygenBubbleField className="-z-10" />
        <FloatingParticles />
        <GradientPulse />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,255,208,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,10,5,0.95)] via-[rgba(2,10,5,0.9)] to-transparent z-0" />
        <div className="relative max-w-[1100px]">
          <p className="text-[0.85rem] tracking-[4px] uppercase text-accent-glow mb-6" aria-live="polite">
            <HeroTagline />
          </p>
          <h1 className="text-[clamp(2.6rem,5vw,4.8rem)] leading-[1.1] mb-6 font-light">{heroCopy.title}</h1>
          <p className="text-[1.15rem] text-text-muted max-w-[780px] mb-8">{heroCopy.subtitle}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            {heroCopy.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="px-6 py-3 border border-[rgba(255,255,255,0.3)] rounded-full text-[0.85rem] tracking-[2px] uppercase transition-all duration-300 hover:border-accent-glow hover:text-accent-glow button-glow"
              >
                {cta.label}
              </Link>
            ))}
            <AmbientPlayer />
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-[640px]">
            {heroCopy.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-[1.8rem] font-bold">{metric.value}</p>
                <p className="text-[0.75rem] uppercase tracking-[3px] text-text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <WaveGraphic className="-z-20" />
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Our approach</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Attune · Restore · Integrate</h2>
            <p className="text-text-muted max-w-[700px] mx-auto mt-3">
              Small, India-only groups move through intentional practices, guided therapies, and calm living that stays with you.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {homeJourney.map((step) => (
              <div
                key={step.title}
                className="bg-bg-main shadow-[0_0_40px_rgba(0,0,0,0.3)] p-6 rounded-[18px] border border-[rgba(79,255,208,0.1)]"
              >
                <p className="text-[0.75rem] tracking-[3px] uppercase text-text-muted">{step.title}</p>
                <p className="mt-3 text-[1rem] leading-[1.7]">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,12vw,140px)] px-[5%] bg-gradient-to-b from-transparent via-bg-secondary to-transparent">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 gap-4">
            <div>
              <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Retreat matrix</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">Choose by time or focus</h2>
            </div>
            <p className="text-text-muted max-w-[400px]">
              Four durations, six tracks, twenty-four detail pages that pair your time horizon with your reset intention.
            </p>
          </div>
          <div className="grid gap-6">
            {retreatMatrix.map((block) => (
              <div key={block.duration.id} className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[1rem] tracking-[3px] uppercase text-text-muted">{block.duration.label}</p>
                    <p className="text-[1.3rem] font-semibold">{block.duration.tagline}</p>
                  </div>
                  <span className="text-[0.9rem] text-text-muted">{block.duration.priceRange}</span>
                </div>
                <p className="text-text-muted mb-4">{block.duration.summary}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {block.tracks.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/retreats/${entry.slug}`}
                      className="rounded-[14px] border border-[rgba(255,255,255,0.1)] px-4 py-3 flex flex-col gap-1 hover:border-accent-glow transition"
                    >
                      <p className="font-semibold">{entry.track.label}</p>
                      <p className="text-sm text-text-muted leading-tight">{entry.track.focus}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">What we practice</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Core rituals present on every retreat</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {corePractices.map((practice) => (
              <div key={practice.title} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[18px] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.2)]">
                <h3 className="text-[1.2rem] mb-3">{practice.title}</h3>
                <p className="text-text-muted leading-[1.7]">{practice.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)] bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-3">
            <div>
              <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted">Destinations</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">Seasonal India playbook</h2>
            </div>
            <p className="text-text-muted max-w-[400px]">
              Each property is selected for sustainability, quiet nature, and kitchens that serve the ritual meals we describe.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {destinationPlaybook.map((place) => (
              <div key={place.title} className="border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 bg-[rgba(5,17,8,0.7)]">
                <h3 className="text-[1.1rem] font-semibold mb-2">{place.title}</h3>
                <p className="text-text-muted text-[0.95rem]">{place.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-8">
              <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted mb-4">What to expect</p>
              <p className="text-lg text-text-primary mb-4">
                Every day blends breathwork, yoga/mobility, nourishment, and reflection. Want the full sample rhythm? Explore any retreat detail to see the complete daily flow.
              </p>
              <Link
                href="/retreats"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent-glow rounded-full tracking-[2px] uppercase text-[0.85rem] text-accent-glow hover:bg-accent-glow hover:text-bg-deep transition"
              >
                See daily flow
              </Link>
            </div>
            <div className="bg-[rgba(10,31,18,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 text-text-muted">
              <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted mb-4">Path to Alpha</p>
              <div className="space-y-4">
                {applicationFlow.slice(0, 3).map((step, index) => (
                  <div key={step.title} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full border border-[rgba(79,255,208,0.4)] flex items-center justify-center text-accent-glow font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm leading-[1.6]">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(80px,12vw,140px)] bg-gradient-to-b from-transparent via-[rgba(10,31,18,0.9)] to-transparent">
        <div className="max-w-[1200px] mx-auto grid gap-10 lg:grid-cols-2">
          <div className="bg-[rgba(10,31,18,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-6">
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted mb-6">Application flow</p>
            <div className="space-y-5">
              {applicationFlow.map((step, index) => (
                <div key={step.title} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full border border-[rgba(79,255,208,0.5)] flex items-center justify-center text-accent-glow font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-sm text-text-muted leading-[1.6]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <p className="text-[0.85rem] tracking-[4px] uppercase text-text-muted mb-6">Safety + our container</p>
            <ul className="space-y-3 text-text-muted text-[0.95rem]">
              {safetyNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="text-accent-glow">⚡</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-accent-glow rounded-full tracking-[2px] uppercase text-[0.85rem] hover:bg-accent-glow hover:text-bg-deep transition"
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
