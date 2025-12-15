import Link from "next/link";

import { contactPoints, footerSections } from "@/data/retreats";

export function Footer() {
    return (
        <footer className="py-16 px-[5%] bg-bg-main border-t border-accent-glow/10 relative">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-16">
                <div className="flex flex-col gap-4">
                    <h3 className="font-display text-[1.6rem] text-accent-glow tracking-[2px]">7point83</h3>
                    <p className="text-text-muted text-[0.95rem] leading-relaxed">
                        Reconnecting people with the planet's natural frequency through India-first, eco-conscious retreats.
                        <br />
                        Small groups, mindful movement, and grounded hospitality.
                    </p>
                </div>

                {footerSections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-5">
                        <h4 className="text-[0.85rem] tracking-[2px] uppercase text-text-primary">{section.title}</h4>
                        <div className="flex flex-col gap-2">
                            {section.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-[1200px] mx-auto mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text-muted text-[0.85rem] gap-4">
                <div className="flex flex-col gap-2">
                    {contactPoints.map((point) => (
                        <span key={point.label} className="text-text-muted text-[0.95rem]">
                            <span className="uppercase tracking-[1px] text-[0.7rem] mr-2">{point.label}:</span>
                            {point.value}
                        </span>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} 7point83 Club. All rights reserved.</p>
            </div>
        </footer>
    );
}
