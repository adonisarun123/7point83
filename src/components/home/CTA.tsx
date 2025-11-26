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
        <section id="cta-form" ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-bg-deep relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_80%,rgba(79,255,208,0.05)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(79,255,208,0.03)_0%,transparent_50%)] pointer-events-none" />

            <div className="text-center max-w-[700px] mx-auto mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <h2 className="text-[clamp(2rem,4vw,3rem)] mb-5">Begin Your Alignment</h2>
                <p className="text-text-muted text-[1.1rem]">
                    Join the waitlist for our upcoming immersive experiences. Participation is handpicked to ensure the harmony of the group.
                </p>
            </div>

            <div className="max-w-[600px] mx-auto bg-[rgba(10,31,18,0.4)] p-16 border border-[rgba(79,255,208,0.15)] relative backdrop-blur-md reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <div className="absolute top-[-1px] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-accent-glow to-transparent" />

                <form className="space-y-7">
                    <div>
                        <label className="block mb-2.5 text-[0.85rem] tracking-[1px] text-text-primary">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2.5 text-[0.85rem] tracking-[1px] text-text-primary">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50"
                            placeholder="Where shall we send your invite?"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2.5 text-[0.85rem] tracking-[1px] text-text-primary">Mobile Number (WhatsApp preferred)</label>
                        <input
                            type="tel"
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50"
                            placeholder="For coordination"
                        />
                    </div>
                    <div>
                        <label className="block mb-2.5 text-[0.85rem] tracking-[1px] text-text-primary">The "Vibe Check" — How are you feeling right now?</label>
                        <select
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50 cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%234fffd0%27 d=%27M6 8L1 3h10z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_16px_center]"
                            required
                        >
                            <option value="" disabled selected>Select your current state...</option>
                            <option value="burnt_out">Burnt out and needing rest</option>
                            <option value="disconnected">Disconnected and seeking grounding</option>
                            <option value="curious">Curious about the 7.83Hz frequency</option>
                            <option value="ready_alpha">Ready to achieve "Alpha" status</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2.5 text-[0.85rem] tracking-[1px] text-text-primary">What does "connecting with nature" mean to you?</label>
                        <textarea
                            className="w-full p-4 bg-black/30 border border-white/10 text-text-primary font-body text-[1rem] transition-all duration-400 ease-out focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.15)] focus:bg-black/50 resize-vertical min-h-[100px]"
                            placeholder="Your thoughts..."
                            rows={3}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-transparent border border-accent-glow text-accent-glow font-body text-[0.95rem] tracking-[3px] uppercase cursor-pointer relative overflow-hidden transition-all duration-500 ease-out hover:text-bg-deep group"
                    >
                        <span className="absolute top-0 left-0 w-0 h-full bg-accent-glow transition-all duration-500 ease-out -z-10 group-hover:w-full" />
                        Apply For Access
                    </button>
                </form>
            </div>
        </section>
    );
}
