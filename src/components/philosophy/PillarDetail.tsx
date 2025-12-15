"use client";

import { PillarDetail } from "@/data/philosophy";

export function PillarDetail({ pillar }: { pillar: PillarDetail }) {
  return (
    <div className="px-[5%] py-[clamp(80px,12vw,140px)] bg-gradient-to-b from-transparent via-[rgba(5,17,8,0.8)] to-transparent">
      <div className="max-w-[1100px] mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <span className="text-[0.75rem] tracking-[4px] uppercase text-accent-glow">{pillar.heroBadge}</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-light">{pillar.title}</h1>
          <p className="text-[1.15rem] text-text-muted leading-[1.7]">{pillar.summary}</p>
          <p className="text-text-accent-accent text-[0.95rem] text-text-muted italic">{pillar.dailyRitual}</p>
          <p className="text-[0.95rem] text-text-muted">{pillar.rituals}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pillar.sections.map((section) => (
            <div key={section.title} className="bg-bg-card border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6">
              <h3 className="text-[1.25rem] font-semibold mb-2">{section.title}</h3>
              <p className="text-text-muted leading-[1.7] mb-3">{section.text}</p>
              {section.bullets && (
                <ul className="space-y-2 text-text-muted text-[0.9rem]">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent-glow">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[rgba(2,10,5,0.7)] border border-[rgba(255,255,255,0.15)] p-6 rounded-[20px] text-text-muted">
          <p className="text-[0.85rem] tracking-[3px] uppercase text-text-muted">Legacy</p>
          <p className="text-[1rem] font-semibold text-text-primary leading-[1.6] mt-2">{pillar.takeaway}</p>
        </div>
      </div>
    </div>
  );
}
