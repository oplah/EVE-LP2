const stories = [
  {
    quote:
      "I've tried so many apps for personal growth. Eve is the first one that actually feels like it understands where I am and where I want to go. The Goal AI conversation changed my whole perspective on what I should focus on.",
    name: "Margaret T., 52",
    location: "Portland, Oregon",
  },
  {
    quote:
      "I wasn't sure what an AI companion could offer me. But after my first conversation with Eve about my relationship with my adult children, I realised this is something completely different. She asks the right questions.",
    name: "Robert H., 58",
    location: "Amsterdam, Netherlands",
  },
  {
    quote:
      "The Learning Assistant is what I didn't know I needed. I'm in my second quest and being able to ask questions about the lesson — in my own words — makes everything land so much more deeply.",
    name: "Sandra M., 47",
    location: "London, UK",
  },
];

export default function MemberStories() {
  return (
    <section
      className="py-24 md:py-32 px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #DBE9FE 0%, #E5E6FA 100%)" }}
      aria-label="Member stories"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="title-bold-3 text-[#1A1A1A] text-center mb-10">
          Thousands already
          <br />
          on their path with Eve
        </h2>

        {/* Stats */}
        <div className="flex justify-center gap-16 mb-14">
          <div className="text-center">
            <p
              className="text-4xl font-bold mb-1"
              style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              220K+
            </p>
            <p className="text-xs text-gray-500">Members growing with Eve</p>
          </div>
          <div className="text-center">
            <p
              className="text-4xl font-bold mb-1 flex items-center gap-1 justify-center"
              style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              4.8
              <svg className="w-7 h-7 inline-block flex-shrink-0" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5693F6" />
                    <stop offset="100%" stopColor="#8A87EF" />
                  </linearGradient>
                </defs>
                <path fill="url(#starGrad)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </p>
            <p className="text-xs text-gray-500">Average member rating</p>
          </div>
          <div className="text-center">
            <p
              className="text-4xl font-bold mb-1"
              style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              190+
            </p>
            <p className="text-xs text-gray-500">Countries represented</p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map(({ quote, name, location }) => (
            <div
              key={name}
              className="rounded-2xl p-6 flex flex-col gap-4 bg-white/70 backdrop-blur-sm"
              style={{ border: "1px solid rgba(86,147,246,0.15)" }}
            >
              {/* Opening quote mark */}
              <span
                className="text-5xl leading-none font-serif"
                style={{
                  background: "linear-gradient(135deg, #5693F6, #8A87EF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  opacity: 0.5,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-sm text-gray-600 italic leading-relaxed flex-1">
                {quote}
              </p>

              {/* Attribution */}
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">{name}</p>
                <p className="text-xs text-gray-400">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
