"use client";

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(circle_at_top,_rgba(0,0,0,1),_rgba(0,0,0,0))]">
      {[...Array(8)].map((_, index) => (
        <span
          key={index}
          className="absolute block w-2 h-2 bg-accent-glow/60 rounded-full animate-float-particle opacity-0"
          style={{
            left: `${10 + index * 12}%`,
            animationDelay: `${index * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}
