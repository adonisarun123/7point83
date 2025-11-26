"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let time = 0;
        let animationFrameId: number;

        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(79, 255, 208, ${0.1 - i * 0.03})`;
                ctx.lineWidth = 2 - i * 0.5;

                for (let x = 0; x <= canvas.width; x += 5) {
                    const y =
                        canvas.height / 2 +
                        Math.sin(x * 0.005 + time + i * 0.5) * (40 - i * 10) +
                        Math.sin(x * 0.01 + time * 0.783 + i * 0.3) * (20 - i * 5);

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.stroke();
            }

            time += 0.02;
            animationFrameId = requestAnimationFrame(drawWave);
        };

        drawWave();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-[5%] relative overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-20">
                <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2874&auto=format&fit=crop"
                    alt="Nature Background"
                    className="w-full h-full object-cover brightness-[0.3] saturate-[0.7]"
                />
            </div>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center_bottom,transparent_0%,#020a05_70%)] -z-10" />

            {/* Wave Canvas */}
            <canvas
                ref={canvasRef}
                id="waveCanvas"
                className="absolute bottom-0 left-0 w-full h-[40%] -z-10 opacity-40"
            />

            {/* Particles */}
            <div className="particle absolute w-1 h-1 bg-accent-glow rounded-full opacity-0 animate-float-particle left-[20%]" style={{ animationDelay: "0s" }} />
            <div className="particle absolute w-1 h-1 bg-accent-glow rounded-full opacity-0 animate-float-particle left-[50%]" style={{ animationDelay: "2s" }} />
            <div className="particle absolute w-1 h-1 bg-accent-glow rounded-full opacity-0 animate-float-particle left-[80%]" style={{ animationDelay: "4s" }} />

            {/* Content */}
            <div className="relative z-10 max-w-[900px] flex flex-col items-center">
                <p className="text-[clamp(0.75rem,1.5vw,0.9rem)] tracking-[6px] uppercase text-accent-glow mb-6 opacity-0 animate-fade-in-up [animation-delay:0.3s]">
                    Tune Into Earth's Frequency
                </p>

                <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-light mb-6 bg-gradient-to-br from-text-primary via-accent-glow to-text-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer opacity-0 animate-fade-in-up [animation-delay:0.5s]">
                    Reconnect with the <br />
                    Rhythm of Life
                </h1>

                <p className="text-[clamp(1rem,2vw,1.25rem)] max-w-[600px] mx-auto mb-12 text-text-muted opacity-0 animate-fade-in-up [animation-delay:0.7s]">
                    Experience the profound healing power of the Schumann Resonance.
                    Align your body, mind, and spirit with the heartbeat of the planet.
                </p>

                <Link
                    href="/retreats"
                    className="inline-flex items-center gap-3 px-12 py-4.5 bg-transparent text-accent-glow border border-accent-glow font-body text-[0.9rem] tracking-[3px] uppercase relative overflow-hidden transition-all duration-500 ease-out group opacity-0 animate-fade-in-up [animation-delay:0.9s] hover:text-bg-deep hover:shadow-[0_0_50px_rgba(79,255,208,0.4)]"
                >
                    <span className="absolute top-0 left-[-100%] w-full h-full bg-accent-glow transition-all duration-500 ease-out group-hover:left-0 -z-10" />
                    Explore Retreats
                    <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-out group-hover:translate-x-1.5" />
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-[0.75rem] tracking-[2px] uppercase opacity-0 animate-fade-in-up [animation-delay:1.2s]">
                <span>Scroll</span>
                <div className="w-[1px] h-[60px] bg-gradient-to-b from-accent-glow to-transparent animate-[scroll-pulse_2s_ease-in-out_infinite]" />
            </div>
        </section>
    );
}
