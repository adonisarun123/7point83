import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { RetreatOfferings } from "@/components/retreats/RetreatOfferings";
import { RetreatList } from "@/components/retreats/RetreatList";
import { ComparisonTable } from "@/components/retreats/ComparisonTable";
import { CTA } from "@/components/home/CTA";
import { Schema } from "@/components/seo/Schema";

export default function RetreatsPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Earth Frequency Retreats",
        "description": "Join our immersive wellness retreats in Bali, Costa Rica, and Peru.",
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
                title="Reconnect. Restore. Resonate."
                subtitle="Handcrafted wellness journeys designed to attune your body and mind to Earth's natural frequency of 7.83Hz through yoga, meditation, nature immersion, and conscious living."
                overline="Earth Frequency Retreats"
            />

            {/* Philosophy Quote Section */}
            <section className="py-[clamp(80px,12vw,140px)] px-[5%] max-w-[1000px] mx-auto text-center">
                <div className="reveal opacity-0 translate-y-[60px] animate-fade-in-up">
                    <p className="font-display text-[clamp(1.5rem,3vw,2.2rem)] italic text-text-primary leading-[1.6] mb-10 relative">
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8rem] text-accent-soft font-display leading-none">"</span>
                        When we align with Earth's heartbeat, we don't just heal—we remember who we truly are.
                    </p>
                    <p className="text-text-muted text-[1.1rem] leading-loose">
                        Our retreats are not just vacations. They are carefully designed transformational journeys that bring together a small community of seekers in extraordinary locations. Through daily practices rooted in ancient wisdom and modern neuroscience, we guide you back to your natural state of coherence.
                    </p>
                </div>
            </section>

            <RetreatOfferings />
            <RetreatList />
            <ComparisonTable />
            <CTA />
            <Footer />
        </main>
    );
}
