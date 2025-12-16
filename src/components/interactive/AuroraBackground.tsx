"use client";

import { useEffect, useState } from "react";

export function AuroraBackground({ className = "" }: { className?: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Deep base layer */}
            <div className="absolute inset-0 bg-bg-deep opacity-90 mix-blend-multiply z-0" />

            {/* Aurora Orbs */}
            <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-earth/20 blur-[100px] animate-aurora-1 mix-blend-screen" />
            <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-accent-glow/10 blur-[120px] animate-aurora-2 mix-blend-screen" />
            <div className="absolute -bottom-[20%] right-[10%] w-[80vw] h-[80vw] rounded-full bg-bg-secondary/40 blur-[100px] animate-aurora-3 mix-blend-overlay" />

            {/* Subtle highlight */}
            <div className="absolute top-[40%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-accent-glow/5 blur-[80px] animate-pulse mix-blend-screen duration-[10000ms]" />

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/80 via-transparent to-bg-deep/80 z-10" />
        </div>
    );
}
