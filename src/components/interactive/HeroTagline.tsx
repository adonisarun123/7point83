"use client";

import { useEffect, useMemo, useState } from "react";

const phrases = ["India · nature · resonance", "Attune · Restore · Integrate"];

export function HeroTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % phrases.length), 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="animated-tagline inline-block" aria-live="polite">
      {phrases[index]}
    </span>
  );
}
