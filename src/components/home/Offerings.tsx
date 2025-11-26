"use client";

import { useEffect, useRef } from "react";
import { Home, Zap, Clock } from "lucide-react";

export function Offerings() {
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
        {
            icon: <Home size={24} />,
            title: "Resonance Stays",
            description: "Off-grid accommodations situated in high-energy natural landscapes, architecturally designed for silence and restoration.",
        },
        {
            icon: <Zap size={24} />,
            title: "Grounding Workshops",
            description: "Curated activities designed to physically reconnect your biology with the earth's electrical charge and natural rhythms.",
        },
        {
            icon: <Clock size={24} />,
            title: "Frequency Alignment",
            description: "Guided sessions using sound and environment to lower stress responses and recharge your internal energy systems.",
        },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-bg-deep relative">
            <div className="text-center max-w-[700px] mx-auto mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,3rem)] mb-5">Immersive Offerings</h2>
                <p className="text-text-muted text-[1.1rem]">
                    We are crafting ecosystems designed to align you with the elements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {offerings.map((offering, index) => (
                    <div
                        key={index}
                        className="bg-bg-card border border-[rgba(79,255,208,0.1)] p-12 relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[rgba(79,255,208,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] group reveal opacity-0 translate-y-[60px]"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(79,255,208,0.05)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="flex items-center justify-center w-16 h-16 mb-6 border border-accent-glow rounded-full text-accent-glow text-[1.5rem] transition-all duration-400 ease-out group-hover:bg-accent-glow group-hover:text-bg-deep group-hover:shadow-[0_0_30px_rgba(79,255,208,0.4)]">
                            {offering.icon}
                        </div>

                        <h3 className="text-[1.5rem] mb-4 text-text-primary transition-colors duration-300 group-hover:text-accent-glow">
                            {offering.title}
                        </h3>

                        <p className="text-text-muted text-[0.95rem] leading-relaxed">
                            {offering.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
