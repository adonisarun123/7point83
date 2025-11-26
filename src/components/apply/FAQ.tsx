"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Do I need previous experience with meditation?",
            answer: "No. Our retreats are designed to be accessible to everyone, regardless of experience level. We guide you through all practices step-by-step."
        },
        {
            question: "What is included in the price?",
            answer: "Everything except your flights. Accommodation, all organic meals, daily classes, workshops, excursions, and airport transfers are included."
        },
        {
            question: "Can I come alone?",
            answer: "Absolutely. In fact, about 70% of our participants come solo. It's a wonderful way to connect with like-minded people."
        },
        {
            question: "What is the cancellation policy?",
            answer: "Deposits are non-refundable but transferable to another retreat within 12 months. Full balance is refundable up to 60 days before the retreat start date."
        }
    ];

    return (
        <section className="py-[clamp(80px,12vw,140px)] px-[5%]">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(2rem,4vw,2.8rem)]">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-[800px] mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/5">
                        <button
                            className="w-full flex justify-between items-center py-6 cursor-pointer text-left group"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <h4 className="text-[1.1rem] font-normal text-text-primary group-hover:text-accent-glow transition-colors">
                                {faq.question}
                            </h4>
                            <Plus
                                className={cn(
                                    "text-text-muted transition-transform duration-300",
                                    openIndex === index ? "rotate-45 text-accent-glow" : ""
                                )}
                            />
                        </button>
                        <div
                            className={cn(
                                "overflow-hidden transition-all duration-400 ease-out",
                                openIndex === index ? "max-h-[300px] pb-6" : "max-h-0"
                            )}
                        >
                            <p className="text-text-muted leading-[1.8]">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
