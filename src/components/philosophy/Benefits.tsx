"use client";

import { useEffect, useRef } from "react";

export function Benefits() {
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

    const benefits = [
        { icon: "😴", title: "Restored Sleep", description: "Deep, restorative sleep often returns within the first few nights. Many participants report the best sleep they've had in years, continuing long after the retreat ends." },
        { icon: "🧠", title: "Mental Clarity", description: "The fog lifts. Decisions become clearer. Creativity flows more freely. Participants describe a return to a sharper, more present way of thinking." },
        { icon: "💚", title: "Emotional Balance", description: "Anxiety decreases. Emotional reactivity softens. A sense of groundedness and equanimity emerges that makes daily challenges more manageable." },
        { icon: "⚡", title: "Natural Energy", description: "Not the jittery energy of caffeine, but a steady, sustainable vitality that comes from a well-regulated nervous system and proper rest." },
        { icon: "🌿", title: "Renewed Connection", description: "To nature, to others, to oneself. Many participants describe a profound shift in how they relate to the world—less isolated, more interconnected." },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-bg-secondary">
            <div className="text-center mb-16 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,2.8rem)]">What Participants Experience</h2>
            </div>

            <div className="max-w-[900px] mx-auto">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-8 py-10 border-b border-white/5 items-start last:border-none reveal opacity-0 translate-y-[60px]"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="w-20 h-20 bg-accent-soft rounded-full flex items-center justify-center text-[2rem] mx-auto sm:mx-0">
                            {benefit.icon}
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="text-[1.4rem] text-text-primary mb-2">{benefit.title}</h4>
                            <p className="text-text-muted leading-[1.8]">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
