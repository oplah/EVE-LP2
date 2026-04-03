"use client";

import { useState, useRef } from "react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="hero"
      className="relative overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(135deg, #DBE9FE 0%, #E5E6FA 100%)" }}
      aria-label="Hero section"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-200/35 blur-[100px]" />
      </div>

      {/* Text content — centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-36 flex flex-col items-center text-center" style={{ paddingBottom: "33px" }}>
        <h1 className="title-bold-1 text-[#1A1A1A] mb-6">
          Meet EVE AI
        </h1>
        <p className="title-6 text-content-secondary max-w-2xl mb-8">
          Your AI companion for personal transformation.
          EVE learns your story, understands your goals, and guides you
          toward the best version of yourself — every single day.
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 flex-shrink-0" style={{ background: "linear-gradient(90deg, transparent, #5693F6)" }} />
          <p className="body text-gray-500 text-center">
            Over{" "}
            <span className="font-semibold" style={{ color: "#5693F6" }}>220,000 members</span>
            {" "}have already used Eve to define their growth path
          </p>
          <div className="h-px w-12 flex-shrink-0" style={{ background: "linear-gradient(90deg, #8A87EF, transparent)" }} />
        </div>
      </div>

      {/* Video — full width, no shadow */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-8 pb-0">
        <div
          className="relative w-full rounded-t-3xl overflow-hidden border border-black/8 border-b-0 bg-[#0D0920]"
          style={{ aspectRatio: "16/9" }}
          aria-label="EVE product demo video"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/eve.mp4"
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            aria-label="See EVE in action"
          />

          {/* Play button overlay — shown when paused */}
          {!isPlaying && (
            <button
              onClick={() => { setIsMuted(false); videoRef.current?.play(); }}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}

          {/* Mute / unmute toggle */}
          <button
            onClick={() => setIsMuted((m) => !m)}
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-200 text-white"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </button>
        </div>
      </div>

    </section>
  );
}
