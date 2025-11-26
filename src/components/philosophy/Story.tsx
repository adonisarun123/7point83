"use client";

import { useEffect, useRef } from "react";

export function Story() {
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

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] max-w-[900px] mx-auto">
            <div className="mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,2.8rem)] mb-8 text-text-primary">The Discovery</h2>
                <p className="text-text-muted text-[1.1rem] leading-loose mb-6">
                    In 1952, physicist Winfried Otto Schumann mathematically predicted that the space between Earth's surface and the ionosphere would act as a resonant cavity, capable of sustaining electromagnetic waves at specific frequencies.
                </p>
                <p className="text-text-muted text-[1.1rem] leading-loose mb-6">
                    The fundamental frequency—7.83 Hz—became known as the Schumann Resonance. This frequency has remained remarkably stable throughout Earth's history, creating a consistent electromagnetic environment in which all life evolved.
                </p>
                <div className="font-display text-[1.4rem] italic text-gold border-l-2 border-accent-glow pl-8 my-10">
                    "We didn't just evolve on Earth. We evolved in tune with Earth."
                </div>
            </div>

            <div className="mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,2.8rem)] mb-8 text-text-primary">The Disconnection</h2>
                <p className="text-text-muted text-[1.1rem] leading-loose mb-6">
                    Modern life surrounds us with artificial electromagnetic frequencies—WiFi, cellular networks, electrical grids—that can interfere with our natural attunement to Earth's frequency. Concrete buildings insulate us from the ground. Rubber-soled shoes prevent natural grounding. Air travel, artificial lighting, and constant screen exposure further disrupt our biological rhythms.
                </p>
                <p className="text-text-muted text-[1.1rem] leading-loose">
                    The result? Chronic stress, sleep disorders, weakened immune function, and a pervasive sense of disconnection from ourselves and the natural world.
                </p>
            </div>

            <div className="reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,2.8rem)] mb-8 text-text-primary">The Return</h2>
                <p className="text-text-muted text-[1.1rem] leading-loose mb-6">
                    7point83club exists to facilitate reconnection—not through technology, but through its absence. By immersing ourselves in carefully selected natural environments, engaging in practices that attune our nervous systems, and allowing our bodies the time and space to recalibrate, we can restore our natural resonance.
                </p>
                <p className="text-text-muted text-[1.1rem] leading-loose">
                    This is not a retreat from life. It is a return to life—to the life our bodies and minds were designed to live.
                </p>
            </div>
        </section>
    );
}
