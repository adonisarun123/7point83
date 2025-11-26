"use client";

import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle: string;
    overline?: string;
    badge?: React.ReactNode;
}

export function PageHero({ title, subtitle, overline, badge }: PageHeroProps) {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-[5%] pt-[140px] pb-[80px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(79,255,208,0.08),transparent),radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(61,92,63,0.1),transparent),var(--color-bg-deep)] relative">
            <div className="reveal opacity-0 translate-y-[60px] animate-fade-in-up">
                {badge && <div className="mb-10">{badge}</div>}
                {overline && (
                    <span className="block text-[0.8rem] tracking-[4px] uppercase text-accent-glow mb-6">
                        {overline}
                    </span>
                )}
                <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-light mb-8 max-w-[900px] mx-auto">
                    {title}
                </h1>
                <p className="text-[1.2rem] text-text-muted max-w-[650px] mx-auto leading-[1.9]">
                    {subtitle}
                </p>
            </div>

            <div className="w-full max-w-[600px] h-[100px] mt-10 relative reveal opacity-0 translate-y-[60px] animate-fade-in-up [animation-delay:0.1s]">
                <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
                    <path
                        d="M0,50 C150,100 300,0 450,50 C525,75 600,50 600,50"
                        fill="none"
                        stroke="var(--color-accent-glow)"
                        strokeWidth="2"
                        className="opacity-60"
                    />
                </svg>
            </div>
        </section>
    );
}
