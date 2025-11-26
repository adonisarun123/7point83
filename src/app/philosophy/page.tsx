import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Story } from "@/components/philosophy/Story";
import { Science } from "@/components/philosophy/Science";
import { Pillars } from "@/components/philosophy/Pillars";
import { Benefits } from "@/components/philosophy/Benefits";
import { Quote } from "@/components/philosophy/Quote";
import { CTA } from "@/components/home/CTA";
import { Schema } from "@/components/seo/Schema";

export default function PhilosophyPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "The Science & Spirit of Resonance",
        "description": "Explore the science behind the Schumann Resonance (7.83Hz) and our philosophy of reconnection.",
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
                title="The Science & Spirit of Resonance"
                subtitle="For billions of years, all life on Earth evolved in harmony with a fundamental frequency. Modern life has disconnected us from this ancient rhythm. Our mission is to restore that connection."
                badge={
                    <div className="inline-flex items-center gap-3 bg-accent-soft px-7 py-3 rounded-full text-[1.1rem] tracking-[3px]">
                        <span className="font-display text-[1.8rem] text-accent-glow">7.83</span> Hz — Earth's Heartbeat
                    </div>
                }
            />
            <Story />
            <Science />
            <Pillars />
            <Benefits />
            <Quote />
            <CTA />
            <Footer />
        </main>
    );
}
