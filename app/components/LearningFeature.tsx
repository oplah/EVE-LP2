"use client";

import { useState, useRef } from "react";

function IPhoneFrame({ videoSrc }: { videoSrc?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative mx-auto" style={{ width: 300 }}>
      {/* iPhone body */}
      <div
        className="relative rounded-[52px] p-[10px] shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
          boxShadow: "0 0 0 1px #3a3a3a, 0 30px 80px rgba(0,0,0,0.35), 0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Side buttons — volume */}
        <div className="absolute -left-[3px] top-[88px] w-[3px] h-[32px] rounded-l-full" style={{ background: "#3a3a3a" }} />
        <div className="absolute -left-[3px] top-[130px] w-[3px] h-[56px] rounded-l-full" style={{ background: "#3a3a3a" }} />
        <div className="absolute -left-[3px] top-[196px] w-[3px] h-[56px] rounded-l-full" style={{ background: "#3a3a3a" }} />
        {/* Power button */}
        <div className="absolute -right-[3px] top-[148px] w-[3px] h-[72px] rounded-r-full" style={{ background: "#3a3a3a" }} />

        {/* Screen bezel */}
        <div className="rounded-[44px] overflow-hidden bg-black" style={{ aspectRatio: "9/19.5" }}>
          {/* Dynamic Island */}
          <div className="relative z-10 flex justify-center pt-3 pb-1">
            <div className="w-[88px] h-[30px] bg-black rounded-full" />
          </div>

          {/* Video / placeholder area */}
          <div className="relative w-full" style={{ height: "calc(100% - 50px)" }}>
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              /* Placeholder */
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-3"
                style={{ background: "linear-gradient(160deg, #0D0920 0%, #1a1040 100%)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", opacity: 0.3 }}
                />
                <p className="text-white/20 text-xs font-medium">Video coming soon</p>
              </div>
            )}

            {/* Play button overlay */}
            {(!isPlaying) && videoSrc && (
              <button
                onClick={() => videoRef.current?.play()}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-105">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
            {/* Play button for placeholder */}
            {!videoSrc && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(86,147,246,0.15)", border: "1px solid rgba(86,147,246,0.3)" }}>
                  <svg className="w-6 h-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "#5693F6" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reflection / glow beneath */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-10 blur-2xl rounded-full opacity-30"
        style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}
        aria-hidden="true"
      />
    </div>
  );
}

const BULLETS = [
  "Ask questions about what you just watched — in plain language",
  "Get clear summaries of the key ideas from each lesson",
  "Explore how to apply each lesson to your own situation",
];

export default function LearningFeature() {
  return (
    <section
      id="learning-feature"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #DBE9FE 0%, #E5E6FA 45%, #FAFBFF 75%, #FFFFFF 100%)" }}
      aria-label="Learning Assistant feature"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: iPhone frame */}
          <div className="flex justify-center lg:justify-start">
            <IPhoneFrame />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="title-bold-3 text-[#1A1A1A] mb-6">
              Turn every lesson
              <br />into lasting change.
            </h2>
            <p className="body text-gray-500 mb-8 max-w-lg">
              Watching a lesson is just the beginning. The real transformation
              happens when you reflect, ask questions, and connect what you&apos;ve
              learned to your own life. Eve is built into every lesson to make
              that happen naturally.
            </p>

            {/* Bullet list */}
            <ul className="space-y-3">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}
                    aria-hidden="true"
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="body-small text-gray-600">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
