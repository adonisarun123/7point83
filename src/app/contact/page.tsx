import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { contactPoints } from "@/data/retreats";

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact 7point83 Club",
    description: "Find the right channel to reach our retreat team.",
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="Let’s connect"
        subtitle="Email hello@7point83.club, WhatsApp +91 80 1234 5678, or visit our Bengaluru office. We’ll guide you to the right retreat."
        overline="Contact"
      />

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[800px] mx-auto grid gap-4">
          {contactPoints.map((point) => (
            <div key={point.label} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[18px] p-6">
              <p className="text-[0.75rem] tracking-[3px] uppercase text-text-muted">{point.label}</p>
              <p className="text-[1rem] mt-2">{point.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
