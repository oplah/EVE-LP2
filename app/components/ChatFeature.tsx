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
          boxShadow: "0 0 0 1px #3a3a3a, 0 30px 80px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[88px] w-[3px] h-[32px] rounded-l-full" style={{ background: "#3a3a3a" }} />
        <div className="absolute -left-[3px] top-[130px] w-[3px] h-[56px] rounded-l-full" style={{ background: "#3a3a3a" }} />
        <div className="absolute -left-[3px] top-[196px] w-[3px] h-[56px] rounded-l-full" style={{ background: "#3a3a3a" }} />
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
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(160deg, #0D0920 0%, #1a1040 100%)" }}
              >
                <p className="text-white/20 text-xs font-medium">Video coming soon</p>
              </div>
            )}
          </div>

          {/* Dynamic Island */}
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

      {/* Glow */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-10 blur-2xl rounded-full opacity-40"
        style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function ChatFeature() {
  return (
    <section
      id="chat-feature"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #202548 0%, #454468 100%)" }}
      aria-label="Conversational AI feature"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-900/15 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: iPhone frame */}
          <div className="flex justify-center order-2 lg:order-1">
            <IPhoneFrame videoSrc="/Video-EVE.mp4" />
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <h2 className="title-bold-3 text-white mb-6">
              Conversations that <span className="text-white">transform</span>
            </h2>
            <p className="body text-white/70 max-w-lg">
              EVE engages with you like a knowledgeable friend who truly knows
              you. Ask anything, explore ideas, and receive guidance that&apos;s
              always grounded in your personal growth journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
