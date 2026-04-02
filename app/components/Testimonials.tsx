const testimonials = [
  {
    initials: "S M",
    name: "Sarah M.",
    role: "Life Coach",
    location: "London, United Kingdom",
    quote:
      "EVE feels like having a wise mentor available any time of day. She remembers my goals, challenges my thinking, and keeps me accountable in a way no other app has managed.",
  },
  {
    initials: "M T",
    name: "Marcus T.",
    role: "Entrepreneur",
    location: "Austin, Texas",
    quote:
      "I've tried every productivity and growth app out there. EVE is the first one that actually understands context — she connects the dots between my habits, goals, and the lessons I'm working through.",
  },
  {
    initials: "P K",
    name: "Priya K.",
    role: "Wellness Practitioner",
    location: "Singapore",
    quote:
      "The way EVE personalises each conversation is remarkable. It's not generic advice — it genuinely feels like she knows me and is growing alongside me.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20 px-6 lg:px-8" aria-label="Testimonials">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          What members are saying
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ initials, name, role, location, quote }) => (
            <div
              key={name}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}
                aria-hidden="true"
              >
                {initials}
              </div>

              {/* Quote */}
              <p className="body-small text-[#1A1A1A] leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Attribution */}
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">{name}</p>
                <p className="text-xs text-gray-400">{role}</p>
                <p className="text-xs text-gray-400">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
