"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Phone, Lock, X, CheckCircle } from "lucide-react";

export function ApplicationForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const [showModal, setShowModal] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
        // In a real app, you would send data to API here
    };

    return (
        <section ref={sectionRef} className="py-[clamp(80px,12vw,140px)] px-[5%] bg-gradient-to-b from-bg-secondary to-bg-deep relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 max-w-[1200px] mx-auto">
                {/* Info */}
                <div className="reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] mb-6">We'd Love to Meet You</h2>
                    <p className="text-text-muted mb-5 leading-[1.8]">
                        Every participant shapes the collective experience. We select individuals who are genuinely committed to inner work, open to growth, and capable of contributing positively to a small community living together.
                    </p>
                    <p className="text-text-muted mb-10 leading-[1.8]">
                        There are no perfect answers—we simply want to understand where you are in your journey and how we might serve you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center shrink-0 text-accent-glow">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4 className="text-[1rem] mb-1 text-text-primary">10-15 Minutes</h4>
                                <p className="text-[0.9rem] text-text-muted">Time needed to complete this application</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center shrink-0 text-accent-glow">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="text-[1rem] mb-1 text-text-primary">48-Hour Response</h4>
                                <p className="text-[0.9rem] text-text-muted">We review applications within two business days</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center shrink-0 text-accent-glow">
                                <Lock size={20} />
                            </div>
                            <div>
                                <h4 className="text-[1rem] mb-1 text-text-primary">Confidential</h4>
                                <p className="text-[0.9rem] text-text-muted">Your information is kept strictly private</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[24px] p-8 md:p-12 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out delay-200">
                    <div className="mb-10">
                        <h3 className="text-[0.8rem] tracking-[3px] uppercase text-accent-glow mb-6 pb-3 border-b border-[rgba(79,255,208,0.2)]">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="flex flex-col">
                                <label className="text-[0.85rem] text-text-muted mb-2 tracking-[0.5px]">First Name <span className="text-gold">*</span></label>
                                <input type="text" required className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.1)]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[0.85rem] text-text-muted mb-2 tracking-[0.5px]">Last Name <span className="text-gold">*</span></label>
                                <input type="text" required className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.1)]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="flex flex-col">
                                <label className="text-[0.85rem] text-text-muted mb-2 tracking-[0.5px]">Email Address <span className="text-gold">*</span></label>
                                <input type="email" required className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.1)]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[0.85rem] text-text-muted mb-2 tracking-[0.5px]">Phone Number <span className="text-gold">*</span></label>
                                <input type="tel" placeholder="+91" className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.1)]" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-[0.8rem] tracking-[3px] uppercase text-accent-glow mb-6 pb-3 border-b border-[rgba(79,255,208,0.2)]">Retreat Preferences</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="flex flex-col">
                                <label className="text-[0.85rem] text-text-muted mb-2 tracking-[0.5px]">Preferred Program <span className="text-gold">*</span></label>
                                <select required className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.1)] appearance-none cursor-pointer">
                                    <option value="" className="bg-bg-deep">Select a program</option>
                                    <option value="5-day" className="bg-bg-deep">Resonance Awakening (5 Days)</option>
                                    <option value="7-day" className="bg-bg-deep">Deep Attunement (7 Days)</option>
                                    <option value="14-day" className="bg-bg-deep">Frequency Immersion (14 Days)</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[0.85rem] text-text-muted mb-2 tracking-[0.5px]">Preferred Location</label>
                                <select className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow focus:shadow-[0_0_20px_rgba(79,255,208,0.1)] appearance-none cursor-pointer">
                                    <option value="" className="bg-bg-deep">Any Location</option>
                                    <option value="bali" className="bg-bg-deep">Bali, Indonesia</option>
                                    <option value="costa-rica" className="bg-bg-deep">Costa Rica</option>
                                    <option value="peru" className="bg-bg-deep">Sacred Valley, Peru</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4.5 bg-accent-glow text-bg-deep font-body text-[1rem] font-semibold tracking-[2px] uppercase rounded-lg cursor-pointer transition-all duration-400 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(79,255,208,0.4)]"
                    >
                        Submit Application
                    </button>

                    <p className="text-center text-text-muted text-[0.85rem] mt-5">
                        We respect your privacy and will never share your information.
                    </p>
                </form>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-[rgba(2,10,5,0.9)] backdrop-blur-md flex items-center justify-center z-[1000] animate-fade-in-up" onClick={() => setShowModal(false)}>
                    <div className="bg-bg-secondary border border-[rgba(79,255,208,0.2)] rounded-[24px] p-16 text-center max-w-[500px] m-5" onClick={(e) => e.stopPropagation()}>
                        <CheckCircle className="w-16 h-16 text-accent-glow mx-auto mb-6" />
                        <h3 className="text-[2rem] mb-4">Application Received</h3>
                        <p className="text-text-muted mb-8">
                            Thank you for taking the first step. We have received your application and will be in touch within 48 hours.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-8 py-3.5 bg-transparent border border-accent-glow text-accent-glow font-body text-[0.9rem] tracking-[2px] uppercase rounded-[4px] transition-all duration-300 hover:bg-accent-glow hover:text-bg-deep"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
