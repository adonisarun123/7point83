"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function PhilosophyPreview() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
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
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-bg-main relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-glow to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto">
                {/* Visual */}
                <div className="flex justify-center items-center relative reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                    <div className="relative w-[320px] h-[320px] flex justify-center items-center">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="absolute rounded-full border border-accent-glow animate-ring-pulse"
                                style={{
                                    width: `${100 - i * 20}%`,
                                    height: `${100 - i * 20}%`,
                                    opacity: 0.1 + i * 0.1,
                                    animationDelay: `${i * 0.5}s`,
                                }}
                            />
                        ))}
                        <div className="relative z-10 text-center">
                            <div className="font-display text-[3.5rem] font-light text-accent-glow drop-shadow-[0_0_40px_rgba(79,255,208,0.5)] leading-none">
                                7.83
                            </div>
                            <div className="text-[1.5rem] text-text-muted">Hz</div>
                            <div className="mt-2 text-[0.85rem] tracking-[3px] uppercase text-text-muted">
                                Earth's Heartbeat
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out delay-200">
                    <h2 className="text-[clamp(2rem,4vw,3rem)] mb-8 text-text-primary leading-tight">
                        The Science & <span className="text-accent-glow italic">Spirit</span> of Resonance
                    </h2>
                    <p className="text-[1.1rem] text-text-muted mb-6">
                        For billions of years, all life on Earth evolved in harmony with a fundamental frequency.
                        Modern life has disconnected us from this ancient rhythm.
                    </p>
                    <p className="text-[1.1rem] text-text-muted mb-8">
                        Our mission is to restore that connection through immersive experiences in nature,
                        guided practices, and a return to simplicity.
                    </p>
                    <Link
                        href="/philosophy"
                        className="text-text-primary font-normal border-b border-accent-glow pb-1 hover:text-accent-glow transition-colors"
                    >
                        Read Our Philosophy
                    </Link>
                </div>
            </div>
        </section>
    );
}
