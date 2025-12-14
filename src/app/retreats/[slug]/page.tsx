import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import {
  applicationFlow,
  corePractices,
  foodPrinciples,
  getRetreatBySlug,
  packingList,
  retreatCatalog,
  sampleDailyFlow,
  safetyNotes,
  whatIncluded,
  whatNotIncluded,
  faqList,
} from "@/data/retreats";

interface RetreatPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return retreatCatalog.map((retreat) => ({ slug: retreat.slug }));
}

export async function generateMetadata({ params }: RetreatPageProps) {
  const retreat = getRetreatBySlug(params.slug);
  if (!retreat) {
    return {};
  }

  return {
    title: `${retreat.title} | 7point83 Club`,
    description: `${retreat.track.promise}  ${retreat.duration.summary}`,
  };
}

export default function RetreatDetailPage({ params }: RetreatPageProps) {
  const retreat = getRetreatBySlug(params.slug);
  if (!retreat) {
    notFound();
  }

  const { duration, track } = retreat!;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: retreat!.title,
    description: track.focus,
    url: `https://7point83.club/retreats/${retreat!.slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://7point83.club/" },
        { "@type": "ListItem", position: 2, name: "Retreats", item: "https://7point83.club/retreats" },
        { "@type": "ListItem", position: 3, name: retreat!.title, item: `https://7point83.club/retreats/${retreat!.slug}` },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title={retreat.title}
        subtitle={`${track.summary} — ${duration.note}`}
        overline={`${duration.label} · ${track.label}`}
        badge={
          <div className="inline-flex items-center gap-3 bg-accent-soft px-5 py-2 rounded-full text-[0.8rem] tracking-[3px]">
            <span className="font-display text-[1.2rem] text-accent-glow">{duration.length} days</span>
            {track.label}
          </div>
        }
      />

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[1200px] mx-auto grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-3">Who this retreat is for</h3>
            <p className="text-text-muted leading-[1.7]">
              This {duration.label.toLowerCase()} journey is built for people who want {track.focus.toLowerCase()} while staying grounded in nature, nourishment,
              and thoughtful pacing.
            </p>
          </div>
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-3">What makes this unique</h3>
            <ul className="space-y-2 text-text-muted">
              {track.unique.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-glow">•</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex gap-2">
                <span className="text-accent-glow">•</span>
                <span>{duration.note}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)] bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-4">Outcomes</h3>
            <ul className="grid gap-3 text-text-muted">
              {track.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="text-accent-glow">✔</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[1.2rem] font-semibold mb-4">Day-by-day highlights</h3>
            <ul className="space-y-2 text-text-muted">
              {duration.dayHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-accent-glow">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-2">
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">Sample daily flow</h3>
            <div className="grid gap-3">
              {sampleDailyFlow.map((slot) => (
                <div key={slot.time} className="flex justify-between text-sm text-text-muted">
                  <span className="font-semibold text-text-primary">{slot.time}</span>
                  <span>{slot.session}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">Core practices</h3>
            <div className="grid gap-3 text-text-muted">
              {corePractices.map((practice) => (
                <p key={practice.title} className="border-b border-white/5 pb-3 last:border-0">
                  <span className="font-semibold text-text-primary">{practice.title}: </span> {practice.detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)] bg-gradient-to-b from-transparent via-bg-secondary to-transparent">
        <div className="max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-2">
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">Therapies & recovery</h3>
            <p className="text-text-muted mb-3">Included sessions: {duration.therapySessions}</p>
            <ul className="text-text-muted space-y-2">
              {track.therapies.map((therapy) => (
                <li key={therapy} className="flex gap-2">
                  <span className="text-accent-glow">•</span>
                  <span>{therapy}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">Food & nutrition</h3>
            <ul className="text-text-muted space-y-2">
              {foodPrinciples.map((principle) => (
                <li key={principle} className="flex gap-2">
                  <span className="text-accent-glow">•</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-2">
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">What’s included</h3>
            <ul className="space-y-2 text-text-muted">
              {whatIncluded.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-glow">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">What’s not included</h3>
            <ul className="space-y-2 text-text-muted">
              {whatNotIncluded.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-glow">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)] bg-gradient-to-b from-transparent via-[rgba(10,31,18,0.9)] to-transparent">
        <div className="max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-2">
          <div className="bg-[rgba(10,31,18,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">Application + safety</h3>
            <ul className="space-y-4 text-text-muted text-[0.95rem]">
              {applicationFlow.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span className="w-8 h-8 rounded-full border border-[rgba(79,255,208,0.5)] flex items-center justify-center text-accent-glow font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p>{step.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[24px] p-6">
            <h3 className="text-[1.2rem] font-semibold mb-4">Packing list</h3>
            <ul className="space-y-2 text-text-muted">
              {packingList.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-glow">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[1.2rem] font-semibold mb-4">Integration support</h3>
          <p className="text-text-muted leading-[1.7] mb-6">
            {duration.integration} We also offer habit checklists and optional calls to keep the rhythm alive back home.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="px-6 py-3 border border-accent-glow rounded-full text-[0.85rem] tracking-[2px] uppercase text-accent-glow hover:bg-accent-glow hover:text-bg-deep transition"
            >
              Apply now
            </Link>
            <Link
              href="/retreats"
              className="px-6 py-3 border border-white/20 rounded-full text-[0.85rem] tracking-[2px] uppercase text-text-muted hover:border-accent-glow hover:text-accent-glow transition"
            >
              View all retreats
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-[clamp(60px,10vw,120px)] bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[1.2rem] font-semibold mb-6">FAQs</h3>
          <div className="grid gap-4">
            {faqList.map((faq) => (
              <details key={faq.question} className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[16px] p-5">
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <p className="mt-3 text-text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
