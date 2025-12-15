"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioUrl = useMemo(
    () => "https://cdn.pixabay.com/download/audio/2021/10/26/audio_3c2797b0c8.mp3?filename=ambient-nature-114368.mp3",
    []
  );

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.3)] text-[0.75rem] tracking-[2px] uppercase transition-all duration-300 hover:border-accent-glow hover:text-accent-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-glow"
      onClick={() => setIsPlaying((prev) => !prev)}
      aria-pressed={isPlaying}
    >
      <span
        className={`w-3 h-3 rounded-full bg-accent-glow transition-transform duration-300 ${
          isPlaying ? "scale-125" : "scale-75"
        }`}
      />
      {isPlaying ? "Pause ambience" : "Play ambience"}
    </button>
  );
}
