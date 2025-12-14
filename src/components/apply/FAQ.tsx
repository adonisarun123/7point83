"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

import { faqList } from "@/data/retreats";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[clamp(80px,12vw,140px)] px-[5%]">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(2rem,4vw,2.8rem)]">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        {faqList.map((faq, index) => (
          <div key={faq.question} className="border-b border-white/5">
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
