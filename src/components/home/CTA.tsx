"use client";

import { useEffect, useRef } from "react";

export function CTA() {
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
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-bg-deep relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_80%,rgba(79,255,208,0.05)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(79,255,208,0.03)_0%,transparent_50%)] pointer-events-none" />

            <div className="max-w-[600px] mx-auto bg-[rgba(10,31,18,0.4)] p-16 border border-[rgba(79,255,208,0.15)] relative backdrop-blur-md reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <div className="absolute top-[-1px] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-accent-glow to-transparent" />

                <h2 className="text-[2rem] text-center mb-8">Join the Waitlist</h2>

                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-[0.85rem] tracking-[1px] text-text-primary">Name</label>
                        <input
                            type="text"
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-[0.85rem] tracking-[1px] text-text-primary">Email</label>
                        <input
                            type="email"
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50"
                            placeholder="Your email address"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-transparent border border-accent-glow text-accent-glow font-body text-[0.95rem] tracking-[3px] uppercase cursor-pointer relative overflow-hidden transition-all duration-500 ease-out hover:text-bg-deep group"
                    >
                        <span className="absolute top-0 left-0 w-0 h-full bg-accent-glow transition-all duration-500 ease-out -z-10 group-hover:w-full" />
                        Begin Alignment
                    </button>
                </form>
            </div>
        </section>
    );
}
