"use client";

import { useEffect, useRef } from "react";

export function Journey() {
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

    const steps = [
        { number: "1", title: "The Initiate", description: "Apply for access and attend your first open grounding event." },
        { number: "2", title: "The Member", description: "Demonstrate alignment through regular participation in our programs." },
        { number: "3", title: "Alpha 7.83", description: "A closed circle with access to exclusive retreats and deepest restorative experiences." },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-gradient-to-b from-bg-main to-bg-secondary relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(79,255,208,0.03)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="text-center max-w-[700px] mx-auto mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,3rem)] mb-5">The Path to 'Alpha'</h2>
                <p className="text-text-muted text-[1.1rem]">
                    This is not a mailing list. It is a pathway to a curated community. Participation is by selection only.
                </p>
            </div>

            <div className="relative max-w-[1100px] mx-auto">
                {/* Line */}
                <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-earth via-accent-glow via-earth to-transparent" />

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex-1 text-center p-8 relative bg-[rgba(5,17,8,0.5)] border border-transparent transition-all duration-400 ease-out hover:border-[rgba(79,255,208,0.2)] hover:bg-[rgba(10,31,18,0.6)] group reveal opacity-0 translate-y-[60px]"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 bg-bg-deep border-2 border-accent-glow rounded-full font-display text-[1.5rem] text-accent-glow relative z-10 transition-all duration-400 ease-out group-hover:bg-accent-glow group-hover:text-bg-deep group-hover:shadow-[0_0_30px_rgba(79,255,208,0.5)]">
                                {step.number}
                            </div>
                            <h4 className="text-[1.4rem] mb-3 text-text-primary">{step.title}</h4>
                            <p className="text-text-muted text-[0.9rem]">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
