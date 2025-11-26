"use client";

import { Check } from "lucide-react";

export function ComparisonTable() {
    return (
        <section className="py-[clamp(80px,12vw,140px)] px-[5%] bg-bg-secondary">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(2rem,4vw,2.8rem)]">Compare Programs</h2>
            </div>

            <div className="max-w-[1200px] mx-auto overflow-x-auto">
                <table className="w-full border-collapse min-w-[800px]">
                    <thead>
                        <tr>
                            <th className="p-5 text-left font-display font-normal text-[1.1rem] text-accent-glow pb-8 border-b border-white/5">Feature</th>
                            <th className="p-5 text-center font-display font-normal text-[1.1rem] text-accent-glow pb-8 border-b border-white/5">Resonance (5 Days)</th>
                            <th className="p-5 text-center font-display font-normal text-[1.1rem] text-accent-glow pb-8 border-b border-white/5">Attunement (7 Days)</th>
                            <th className="p-5 text-center font-display font-normal text-[1.1rem] text-accent-glow pb-8 border-b border-white/5">Immersion (14 Days)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { feature: "Daily Yoga & Meditation", r5: true, r7: true, r14: true },
                            { feature: "Sound Healing Sessions", r5: "3 Sessions", r7: "Daily", r14: "Daily + Private" },
                            { feature: "Nature Excursions", r5: "2", r7: "4", r14: "Unlimited" },
                            { feature: "Digital Detox", r5: true, r7: true, r14: true },
                            { feature: "Silent Days", r5: "-", r7: "2 Days", r14: "5 Days" },
                            { feature: "1-on-1 Mentorship", r5: "-", r7: "1 Session", r14: "3 Sessions" },
                            { feature: "Post-Retreat Support", r5: "1 Month", r7: "3 Months", r14: "Lifetime" },
                        ].map((row, index) => (
                            <tr key={index} className="hover:bg-[rgba(79,255,208,0.03)] transition-colors">
                                <td className="p-5 text-left text-text-muted text-[0.95rem] border-b border-white/5">{row.feature}</td>
                                <td className="p-5 text-center text-text-primary border-b border-white/5">
                                    {row.r5 === true ? <Check className="inline text-accent-glow w-5 h-5" /> : row.r5}
                                </td>
                                <td className="p-5 text-center text-text-primary border-b border-white/5">
                                    {row.r7 === true ? <Check className="inline text-accent-glow w-5 h-5" /> : row.r7}
                                </td>
                                <td className="p-5 text-center text-text-primary border-b border-white/5">
                                    {row.r14 === true ? <Check className="inline text-accent-glow w-5 h-5" /> : row.r14}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
