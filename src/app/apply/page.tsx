import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Schema } from "@/components/seo/Schema";

import { safetyNotes } from "@/data/retreats";
import { Process } from "@/components/apply/Process";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { FAQ } from "@/components/apply/FAQ";

export default function ApplyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Apply for a Retreat",
    description: "Submit an application to join a small-group 7point83 Club retreat.",
  };

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
      <Schema schema={schema} />
      <Header />
      <PageHero
        title="Apply to join a small, India-only retreat"
        subtitle="We curate cohorts of 12-20 guests. The application helps us understand your intentions, health, and readiness for a nature-rooted reset."
        overline="Apply"
      />

      <div className="px-[5%]">
        <Process />
      </div>

      <ApplicationForm />

      <section className="px-[5%] py-[clamp(40px,8vw,80px)]">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[1.2rem] font-semibold mb-4">Safety & Screening</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {safetyNotes.map((note) => (
              <div key={note} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[18px] p-4 text-text-muted text-[0.95rem]">
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
