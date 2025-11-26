"use client";

import { useEffect, useRef } from "react";

export function Science() {
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

    const items = [
        {
            title: "Brainwave Synchronization",
            subtitle: "Alpha-Theta Border Zone",
            description: "The 7.83 Hz frequency falls at the boundary between alpha and theta brainwave states—the zone associated with deep relaxation, enhanced creativity, and meditative awareness. Regular exposure may help the brain naturally access these beneficial states.",
        },
        {
            title: "Circadian Regulation",
            subtitle: "Natural Rhythm Restoration",
            description: "Research suggests that Earth's electromagnetic fields play a role in regulating our circadian rhythms. Time in natural environments, away from artificial EMF, can help restore healthy sleep-wake cycles and hormonal balance.",
        },
        {
            title: "Grounding Benefits",
            subtitle: "Electron Transfer",
            description: "Direct contact with Earth—walking barefoot, swimming in natural water—allows the transfer of electrons that may reduce inflammation, improve sleep, and lower stress hormones. This practice, called \"earthing,\" is central to our retreats.",
        },
        {
            title: "Heart Rate Variability",
            subtitle: "Autonomic Balance",
            description: "Studies show that time in nature significantly improves heart rate variability—a key marker of nervous system health and resilience. Higher HRV correlates with lower stress, better emotional regulation, and improved cognitive function.",
        },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-gradient-to-b from-transparent via-bg-secondary to-transparent">
            <div className="text-center mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <span className="text-[0.8rem] tracking-[4px] uppercase text-accent-glow mb-4 block">The Research</span>
                <h2 className="text-[clamp(2rem,5vw,3rem)] mb-5">What Science Tells Us</h2>
                <p className="text-text-muted max-w-[600px] mx-auto">
                    A growing body of research supports the connection between Earth's natural frequencies and human wellbeing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[20px] p-12 transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[rgba(79,255,208,0.25)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] reveal opacity-0 translate-y-[60px]"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <h3 className="text-[1.5rem] mb-2 text-accent-glow">{item.title}</h3>
                        <p className="font-display italic text-gold mb-5">{item.subtitle}</p>
                        <p className="text-text-muted leading-[1.8]">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
