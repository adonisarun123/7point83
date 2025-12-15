import Link from "next/link";

import { AmbientPlayer } from "@/components/interactive/AmbientPlayer";
import { FloatingParticles } from "@/components/interactive/FloatingParticles";
import { GradientPulse } from "@/components/interactive/GradientPulse";
import { HeroTagline } from "@/components/interactive/HeroTagline";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Schema } from "@/components/seo/Schema";

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
*** End Patch