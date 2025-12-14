"use client";

import { useEffect, useRef } from "react";

import { applicationFlow } from "@/data/retreats";

export function Process() {
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
        <section ref={sectionRef} className="pt-[60px] pb-[clamp(80px,12vw,140px)] px-[5%] max-w-[1100px] mx-auto">
            <div className="text-center mb-16 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] mb-4">How It Works</h2>
                <p className="text-text-muted">Our selection process ensures the right fit for both you and our community.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {applicationFlow.map((step, index) => (
                    <div
                        key={step.title}
                        className="text-center relative reveal opacity-0 translate-y-[60px]"
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        {index < applicationFlow.length - 1 && (
                            <div className="hidden lg:block absolute top-[35px] left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-accent-glow to-transparent" />
                        )}

                        <div className="w-[70px] h-[70px] mx-auto mb-5 bg-accent-soft border border-accent-glow rounded-full flex items-center justify-center font-display text-[1.8rem] text-accent-glow">
                            {index + 1}
                        </div>
                        <h4 className="text-[1.1rem] text-gold mb-2">{step.title}</h4>
                        <p className="text-[0.9rem] text-text-muted">{step.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
