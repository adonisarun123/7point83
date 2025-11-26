"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Activity } from "lucide-react";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const audioContextRef = useRef<AudioContext | null>(null);
    const masterGainRef = useRef<GainNode | null>(null);
    const binauralGainRef = useRef<GainNode | null>(null);
    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const oscillatorsRef = useRef<OscillatorNode[]>([]);

    const ambientTracks = [
        { name: "Healing Meditation", url: "https://cdn.pixabay.com/audio/2024/11/04/audio_a8a769ea26.mp3" },
        { name: "Peaceful Ambient", url: "https://cdn.pixabay.com/audio/2024/09/17/audio_d93fc26b6f.mp3" },
        { name: "Deep Relaxation", url: "https://cdn.pixabay.com/audio/2023/10/30/audio_345a8acfc9.mp3" },
    ];

    const initAudio = () => {
        if (!audioContextRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            audioContextRef.current = new AudioContextClass();

            masterGainRef.current = audioContextRef.current.createGain();
            masterGainRef.current.gain.value = volume;
            masterGainRef.current.connect(audioContextRef.current.destination);
        }
    };

    const createBinauralUndertone = () => {
        if (!audioContextRef.current || !masterGainRef.current) return;

        const ctx = audioContextRef.current;
        const baseFreq = 110; // Low A
        const beatFreq = 7.83;

        const leftOsc = ctx.createOscillator();
        const rightOsc = ctx.createOscillator();

        leftOsc.type = 'sine';
        rightOsc.type = 'sine';
        leftOsc.frequency.value = baseFreq;
        rightOsc.frequency.value = baseFreq + beatFreq;

        const leftFilter = ctx.createBiquadFilter();
        const rightFilter = ctx.createBiquadFilter();
        leftFilter.type = 'lowpass';
        rightFilter.type = 'lowpass';
        leftFilter.frequency.value = 150;
        rightFilter.frequency.value = 150;

        const leftGain = ctx.createGain();
        const rightGain = ctx.createGain();
        leftGain.gain.value = 0.015; // Subtle
        rightGain.gain.value = 0.015;

        const leftPanner = ctx.createStereoPanner();
        const rightPanner = ctx.createStereoPanner();
        leftPanner.pan.value = -1;
        rightPanner.pan.value = 1;

        binauralGainRef.current = ctx.createGain();
        binauralGainRef.current.gain.value = volume;

        leftOsc.connect(leftFilter);
        rightOsc.connect(rightFilter);
        leftFilter.connect(leftGain);
        rightFilter.connect(rightGain);
        leftGain.connect(leftPanner);
        rightGain.connect(rightPanner);
        leftPanner.connect(binauralGainRef.current);
        rightPanner.connect(binauralGainRef.current);
        binauralGainRef.current.connect(ctx.destination);

        leftOsc.start();
        rightOsc.start();

        oscillatorsRef.current.push(leftOsc, rightOsc);
    };

    const playAmbientMusic = async () => {
        if (!audioContextRef.current || !masterGainRef.current) return;

        const track = ambientTracks[Math.floor(Math.random() * ambientTracks.length)];

        if (!audioElementRef.current) {
            audioElementRef.current = new Audio();
            audioElementRef.current.crossOrigin = "anonymous";
            audioElementRef.current.loop = true;

            // Connect to Web Audio API
            const source = audioContextRef.current.createMediaElementSource(audioElementRef.current);
            source.connect(masterGainRef.current);
        }

        audioElementRef.current.src = track.url;
        audioElementRef.current.volume = 1;

        try {
            await audioElementRef.current.play();
        } catch (error) {
            console.error("Audio playback failed:", error);
        }
    };

    const togglePlay = async () => {
        if (!isPlaying) {
            initAudio();
            if (audioContextRef.current?.state === 'suspended') {
                await audioContextRef.current.resume();
            }

            createBinauralUndertone();
            await playAmbientMusic();

            setIsPlaying(true);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        } else {
            // Stop everything
            oscillatorsRef.current.forEach(osc => {
                try { osc.stop(); } catch (e) { }
            });
            oscillatorsRef.current = [];

            if (audioElementRef.current) {
                audioElementRef.current.pause();
            }

            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);

        if (masterGainRef.current) {
            masterGainRef.current.gain.value = newVolume;
        }
        if (binauralGainRef.current) {
            binauralGainRef.current.gain.value = newVolume;
        }

        if (newVolume === 0) setIsMuted(true);
        else setIsMuted(false);
    };

    return (
        <>
            {/* Audio Control Panel */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
                {/* Notification */}
                <div
                    className={`bg-bg-deep/90 backdrop-blur-md border border-accent-glow/30 p-4 rounded-lg shadow-[0_0_30px_rgba(79,255,208,0.1)] transition-all duration-500 transform ${showNotification ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex items-center gap-2 text-accent-glow mb-1">
                        <Activity className="w-4 h-4" />
                        <span className="font-display text-sm tracking-wider">FREQUENCY ACTIVE</span>
                    </div>
                    <p className="text-text-muted text-xs">7.83Hz Binaural Beats + Ambient</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 bg-bg-deep/80 backdrop-blur-md p-2 rounded-full border border-white/10 hover:border-accent-glow/50 transition-colors duration-300">
                    {isPlaying && (
                        <div className="hidden md:flex items-center gap-2 px-2 animate-fade-in">
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-glow"
                            />
                        </div>
                    )}

                    <button
                        onClick={togglePlay}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying
                                ? 'bg-accent-glow text-bg-deep shadow-[0_0_20px_rgba(79,255,208,0.4)]'
                                : 'bg-white/5 text-white hover:bg-white/10'
                            }`}
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                    </button>
                </div>
            </div>
        </>
    );
}
