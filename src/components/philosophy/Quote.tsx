"use client";

import { useEffect, useRef } from "react";

export function Quote() {
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
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] text-center bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(79,255,208,0.05),transparent),var(--color-bg-deep)]">
            <div className="reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <p className="font-display text-[clamp(1.8rem,4vw,3rem)] italic text-text-primary max-w-[900px] mx-auto mb-8 leading-[1.5] relative">
                    <span className="absolute -top-8 -left-5 text-[4rem] text-accent-soft font-display leading-none">"</span>
                    The Earth has music for those who listen.
                    <span className="absolute -bottom-12 -right-5 text-[4rem] text-accent-soft font-display leading-none">"</span>
                </p>
                <p className="text-gold text-[1rem] tracking-[2px]">— William Shakespeare</p>
            </div>
        </section>
    );
}
