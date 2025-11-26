"use client";

import { useEffect, useRef } from "react";

export function RetreatOfferings() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "translate-y-[60px]");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const offerings = [
        { icon: "🧘", title: "Daily Yoga", description: "Morning and evening sessions blending Hatha, Vinyasa, and restorative practices tailored to your journey." },
        { icon: "🧠", title: "Guided Meditation", description: "Frequency-attuned meditation sessions using sound healing and breathwork to access deep states of awareness." },
        { icon: "🌿", title: "Nature Immersion", description: "Forest bathing, sunrise hikes, and grounding practices in locations chosen for their natural resonance." },
        { icon: "🥗", title: "Organic Cuisine", description: "Farm-to-table vegetarian meals prepared with high-vibrational ingredients to support detoxification." },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-gradient-to-b from-transparent via-bg-secondary to-transparent">
            <div className="text-center mb-16 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,5vw,3rem)]">The 7.83 Experience</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
                {offerings.map((offering, index) => (
                    <div
                        key={index}
                        className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[16px] p-10 text-center transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[rgba(79,255,208,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] reveal opacity-0 translate-y-[60px]"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="w-[70px] h-[70px] mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-soft to-transparent flex items-center justify-center text-[2rem]">
                            {offering.icon}
                        </div>
                        <h3 className="text-[1.4rem] mb-4 text-gold">{offering.title}</h3>
                        <p className="text-text-muted text-[0.95rem]">{offering.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
