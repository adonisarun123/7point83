import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { policySections } from "@/data/retreats";

export default function PoliciesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Policies",
    description: "Privacy, terms, health, and conduct policies for 7point83 Club retreats.",
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="Policies to keep every retreat safe, respectful, and aligned"
        subtitle="We operate with transparency across privacy, cancellation, health support, and the code of conduct for small cohorts."
        overline="Policies"
      />

      <section className="px-[5%] py-[clamp(60px,10vw,120px)]">
        <div className="max-w-[1200px] mx-auto grid gap-6 md:grid-cols-2">
          {policySections.map((policy) => (
            <div key={policy.id} className="bg-bg-card border border-[rgba(79,255,208,0.15)] rounded-[20px] p-6">
              <h3 className="text-[1.2rem] font-semibold mb-3">{policy.title}</h3>
              <p className="text-text-muted leading-[1.7]">{policy.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
