"use client";

import { useMemo } from "react";

type BubbleLayerProps = {
  count?: number;
  className?: string;
};

type Bubble = {
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
};

const createBubbles = (count: number): Bubble[] => {
  const bubbles: Bubble[] = [];

  for (let i = 0; i < count; i += 1) {
    bubbles.push({
      size: 30 + Math.random() * 100,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 12,
      delay: -Math.random() * 12,
      opacity: 0.25 + Math.random() * 0.45,
    });
  }

  return bubbles;
};

export function BubbleField({ count = 14, className = "" }: BubbleLayerProps) {
  const bubbles = useMemo(() => createBubbles(count), [count]);

  return (
    <div
      className={`bubble-field absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {bubbles.map((bubble, index) => (
        <span
          key={`bubble-${index}`}
          className="bubble absolute rounded-full transform-gpu"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: `-${bubble.size * 0.3}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}

