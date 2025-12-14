import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { faqList } from "@/data/retreats";

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Frequently Asked Questions",
    description: "Common questions about the India-only 7point83 Club retreats.",
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="Questions we hear often"
        subtitle="Everything from what’s included to our selection process, answered with clarity so you can decide with confidence."
        overline="FAQs"
      />

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[1100px] mx-auto grid gap-4">
          {faqList.map((faq) => (
            <details
              key={faq.question}
              className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[16px] p-6 text-text-muted"
            >
              <summary className="cursor-pointer text-lg font-semibold mb-2">{faq.question}</summary>
              <p className="mt-3 leading-[1.7]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
