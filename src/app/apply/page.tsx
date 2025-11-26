import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Process } from "@/components/apply/Process";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { FAQ } from "@/components/apply/FAQ";
import { Schema } from "@/components/seo/Schema";

export default function ApplyPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Apply for a Retreat",
        "description": "Application form for 7point83 Club retreats.",
        "publisher": {
            "@type": "Organization",
            "name": "7point83 Club"
        }
    };

    return (
        <main className="min-h-screen bg-bg-deep text-text-primary font-body selection:bg-accent-glow selection:text-bg-deep">
            <Schema schema={schema} />
            <Header />
            <PageHero
                title="Apply for a Retreat"
                subtitle="Our retreats are limited to small, carefully curated groups. Complete this application to begin the conversation about your transformation."
                overline="Start Your Journey"
            />
            <Process />
            <ApplicationForm />
            <FAQ />
            <Footer />
        </main>
    );
}
