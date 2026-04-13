import CTAButton from "./CTAButton";

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
            <h2 className="title-bold-3 text-white mb-6">
              Begin your{" "}
              <span className="text-white">transformation</span>
              {" "}today
            </h2>

            <p className="body-large text-white/55 max-w-xl mb-6">
              Join over a million learners who use EVE to unlock their potential,
              deepen their learning, and grow every single day.
            </p>

            {/* CTA */}
            <CTAButton className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base active:scale-95 mb-5">
              Try EVE AI
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </CTAButton>

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

          {/* Right: Image */}
          <div className="hidden lg:block">
            <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/endsection-eve.jpg"
                alt="Begin your transformation with EVE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
