export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #202548 0%, #454468 100%)" }}
      aria-label="Get started with EVE"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            {/* Headline */}
            <h2 className="title-bold-1 text-white mb-6">
              Begin your{" "}
              <span className="text-white">transformation</span>
              {" "}today
            </h2>

            <p className="body-large text-white/55 max-w-xl mb-12">
              Join over a million learners who use EVE to unlock their potential,
              deepen their learning, and grow every single day.
            </p>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* App Store */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-7 py-4 rounded-2xl bg-black hover:bg-gray-900 transition-all duration-200 group"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white flex-shrink-0" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Download on the</div>
                  <div className="text-white font-bold text-lg leading-tight">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-7 py-4 rounded-2xl bg-black hover:bg-gray-900 transition-all duration-200 group"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="none">
                  <path d="M3.18 23.76C3.06 23.65 3 23.47 3 23.24V0.76C3 0.53 3.07 0.35 3.2 0.24L3.27 0.17L12.81 9.71v0.22L3.27 19.59 3.18 23.76Z" fill="#EA4335" />
                  <path d="M15.96 13L12.81 9.93V9.71L15.97 6.55 16.05 6.6 19.77 8.73C20.83 9.33 20.83 10.31 19.77 10.91L16.05 13.04 15.96 13Z" fill="#FBBC04" />
                  <path d="M16.05 13.04L12.81 9.82 3.18 19.45C3.54 19.83 4.13 19.88 4.79 19.51L16.05 13.04Z" fill="#34A853" />
                  <path d="M16.05 6.6L4.79 0.13C4.13-0.24 3.54-0.19 3.18 0.19L12.81 9.82 16.05 6.6Z" fill="#4285F4" />
                </svg>
                <div className="text-left">
                  <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Get it on</div>
                  <div className="text-white font-bold text-lg leading-tight">Google Play</div>
                </div>
              </a>
            </div>

            {/* OR divider */}
            <div className="flex items-center gap-4 mb-8 max-w-xs">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-sm font-medium">or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Web CTA */}
            <a
              href="https://mindvalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base active:scale-95 mb-10"
            >
              Explore Mindvalley membership
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 text-white/30 text-xs">
              {[
                "✓ Free with Mindvalley membership",
                "✓ Privacy-first design",
              ].map((item) => (
                <span key={item} className="font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Placeholder image */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="w-full rounded-3xl flex items-center justify-center"
              style={{
                aspectRatio: "4/5",
                background: "rgba(255,255,255,0.04)",
                border: "1px dashed rgba(255,255,255,0.12)",
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <svg className="w-7 h-7 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <p className="text-white/20 text-sm font-medium">Image placeholder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
