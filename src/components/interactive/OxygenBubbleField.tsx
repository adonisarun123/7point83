"use client";

import { useMemo } from "react";

type OxygenBubbleLayerProps = {
  count?: number;
  className?: string;
};

type OxygenBubble = {
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
};

const createBubbles = (count: number): OxygenBubble[] => {
  const bubbles: OxygenBubble[] = [];

  for (let i = 0; i < count; i += 1) {
    bubbles.push({
      size: 24 + Math.random() * 80,
      left: Math.random() * 100,
      duration: 12 + Math.random() * 16,
      delay: -Math.random() * 18,
      opacity: 0.25 + Math.random() * 0.35,
    });
  }

  return bubbles;
};

export function OxygenBubbleField({ count = 16, className = "" }: OxygenBubbleLayerProps) {
  const bubbles = useMemo(() => createBubbles(count), [count]);

  return (
    <div className={`oxygen-field pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {bubbles.map((bubble, index) => (
        <span
          key={`oxygen-${index}`}
          className="oxygen-bubble absolute rounded-full transform-gpu"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: `-${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}

