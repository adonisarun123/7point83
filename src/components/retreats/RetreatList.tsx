"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RetreatList() {
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

    const retreats = [
        {
            title: "Resonance Awakening",
            tagline: "The Foundation",
            duration: "5 Days",
            description: "A perfect introduction to frequency attunement. This retreat focuses on detoxification, grounding, and establishing a personal resonance practice.",
            highlights: ["Digital Detox", "Intro to Earthing", "Sound Healing", "Breathwork Basics"],
            location: "Bali, Indonesia",
            dates: "April 12-17, 2025",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop",
        },
        {
            title: "Deep Attunement",
            tagline: "The Immersion",
            duration: "7 Days",
            description: "Go deeper into the science and spirit of connection. Advanced meditation techniques, extended silence, and deep nature immersion.",
            highlights: ["Advanced Meditation", "Silence (2 Days)", "Forest Bathing", "Cacao Ceremony"],
            location: "Costa Rica",
            dates: "May 20-27, 2025",
            image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop",
        },
        {
            title: "Frequency Immersion",
            tagline: "The Transformation",
            duration: "14 Days",
            description: "A complete system reset. Two weeks of living in perfect resonance with Earth's frequency, allowing for profound biological and spiritual recalibration.",
            highlights: ["Full System Reset", "Silence (5 Days)", "Vision Quest", "Integration Support"],
            location: "Sacred Valley, Peru",
            dates: "July 1-15, 2025",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2940&auto=format&fit=crop",
        },
    ];

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%]">
            <div className="text-center mb-20 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                <span className="text-[0.8rem] tracking-[4px] uppercase text-accent-glow mb-4 block">Upcoming Journeys</span>
                <h2 className="text-[clamp(2rem,5vw,3rem)] mb-5">Select Your Path</h2>
                <p className="text-text-muted max-w-[600px] mx-auto">
                    Each retreat is designed to meet you where you are and guide you back to your natural state.
                </p>
            </div>

            <div className="max-w-[1300px] mx-auto">
                {retreats.map((retreat, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 last:mb-0 bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[24px] p-8 lg:p-16 transition-all duration-500 ease-out hover:border-[rgba(79,255,208,0.2)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] group reveal opacity-0 translate-y-[60px] even:lg:direction-rtl"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {/* Visual */}
                        <div className={`relative aspect-[4/3] rounded-[16px] overflow-hidden bg-gradient-to-br from-bg-secondary to-earth ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                            <img src={retreat.image} alt={retreat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[rgba(79,255,208,0.1)]" />
                            <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[0.8rem] tracking-[1px] text-accent-glow">
                                {retreat.duration}
                            </div>
                        </div>

                        {/* Content */}
                        <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : "lg:text-left"}`}>
                            <h3 className="text-[clamp(1.8rem,4vw,2.5rem)] mb-2 text-text-primary">{retreat.title}</h3>
                            <p className="font-display italic text-gold text-[1.1rem] mb-5">{retreat.tagline}</p>
                            <p className="text-text-muted mb-6 leading-[1.8]">{retreat.description}</p>

                            <div className={`grid grid-cols-2 gap-3 mb-8 ${index % 2 === 1 ? "lg:justify-items-end" : ""}`}>
                                {retreat.highlights.map((highlight, i) => (
                                    <div key={i} className={`flex items-center gap-2 text-[0.9rem] text-text-muted ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                        <span className="text-accent-glow">✧</span>
                                        {highlight}
                                    </div>
                                ))}
                            </div>

                            <div className={`flex gap-8 pt-6 border-t border-white/10 mb-8 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                                <div>
                                    <span className="block text-text-muted text-[0.75rem] tracking-[1px] uppercase mb-1">Location</span>
                                    <span className="text-[0.9rem]">{retreat.location}</span>
                                </div>
                                <div>
                                    <span className="block text-text-muted text-[0.75rem] tracking-[1px] uppercase mb-1">Dates</span>
                                    <span className="text-[0.9rem]">{retreat.dates}</span>
                                </div>
                            </div>

                            <Link
                                href="/apply"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-accent-glow text-accent-glow text-[0.9rem] tracking-[2px] uppercase rounded-[4px] transition-all duration-400 ease-out hover:bg-accent-glow hover:text-bg-deep hover:shadow-[0_0_40px_rgba(79,255,208,0.3)] group/btn"
                            >
                                Apply Now
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
