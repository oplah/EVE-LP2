"use client";

import { useState, useRef } from "react";

function IPhoneFrame({ videoSrc }: { videoSrc?: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

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

        {/* Screen — video fills 100%, Dynamic Island floats on top */}
        <div
          className="relative rounded-[44px] overflow-hidden bg-black cursor-pointer"
          style={{ aspectRatio: "9/19.5", transform: "translateZ(0)" }}
          onClick={togglePlay}
        >

          {/* Video / placeholder — full screen */}
          <div className="absolute inset-0">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-3"
                style={{ background: "linear-gradient(160deg, #0D0920 0%, #1a1040 100%)" }}
              >
                <p className="text-white/20 text-xs font-medium">Video coming soon</p>
              </div>
            )}
          </div>

          {/* Dynamic Island — floats over the video, iPhone 16 style */}
          <div className="absolute top-3 inset-x-0 z-20 flex justify-center pointer-events-none">
            <div className="w-[84px] h-[26px] bg-black rounded-full" />
          </div>

          {/* Pause / Play overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.985V5.653z" />
                </svg>
              </div>
            </div>
          )}

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
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #DBE9FE 0%, #E5E6FA 45%, #FAFBFF 75%, #FFFFFF 100%)" }}
      aria-label="Learning Assistant feature"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: iPhone frame */}
          <div className="flex justify-center order-2 lg:order-1">
            <IPhoneFrame videoSrc="/Video-LA.MP4" />
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
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
