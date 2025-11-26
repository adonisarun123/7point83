"use client";

import { useEffect, useRef } from "react";

export function Pillars() {
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

    const pillars = [
        { number: "01", title: "Movement", description: "Yoga, hiking, and embodied practices that reconnect mind and body through conscious physical expression." },
        { number: "02", title: "Stillness", description: "Meditation, breathwork, and silence that allow the nervous system to reset and wisdom to arise." },
        { number: "03", title: "Nature", description: "Forest bathing, grounding, and wild immersion that restore our connection to the living Earth." },
        { number: "04", title: "Nourishment", description: "Organic, sattvic cuisine and digital fasting that cleanse body and mind of accumulated toxins." },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%]">
            <div className="text-center mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,5vw,3rem)]">Our Four Pillars</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="text-center p-10 bg-bg-card border border-[rgba(79,255,208,0.08)] rounded-[20px] relative overflow-hidden transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[rgba(79,255,208,0.2)] group reveal opacity-0 translate-y-[60px]"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent-glow to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                        <div className="font-display text-[3rem] text-accent-soft mb-4">{pillar.number}</div>
                        <h3 className="text-[1.3rem] text-gold mb-3">{pillar.title}</h3>
                        <p className="text-text-muted text-[0.9rem] leading-[1.7]">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
