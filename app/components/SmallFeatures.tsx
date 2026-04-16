import Image from "next/image";

const features = [
  {
    id: "voice",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <defs>
          <linearGradient id="iconGrad-voice" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5693F6" />
            <stop offset="100%" stopColor="#8A87EF" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#iconGrad-voice)" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Voice Input",
    tagline: "Speak your mind",
    desc: "Talk to EVE hands-free — just like a conversation with a trusted friend. No typing required.",
    badge: "New",
  },
  {
    id: "mood",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <defs>
          <linearGradient id="iconGrad-mood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5693F6" />
            <stop offset="100%" stopColor="#8A87EF" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#iconGrad-mood)" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "Memory Management",
    tagline: "Remembers what matters",
    desc: "EVE remembers your goals, conversations, and progress — building a rich understanding of you that deepens with every interaction.",
    badge: null,
  },
  {
    id: "incognito",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <defs>
          <linearGradient id="iconGrad-incognito" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5693F6" />
            <stop offset="100%" stopColor="#8A87EF" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#iconGrad-incognito)" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "Ask a friend",
    tagline: "Your private space",
    desc: "Ask the questions you wouldn't ask anyone else. This keeps your most personal conversations completely private.",
    badge: null,
  },
  {
    id: "daily",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <defs>
          <linearGradient id="iconGrad-daily" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5693F6" />
            <stop offset="100%" stopColor="#8A87EF" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#iconGrad-daily)" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Multi-Language Support",
    tagline: "Grow in your language",
    desc: "EVE supports multiple languages so you can learn, reflect, and grow in the language that feels most natural to you.",
    badge: null,
  },
];

export default function SmallFeatures() {
  return (
    <section
      id="more-features"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
      aria-label="Additional features"
    >
      {/* Animated EVE-brand blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="animate-blob-1 absolute top-1/4 -left-16 w-[480px] h-[480px] rounded-full blur-[110px] opacity-[0.12]" style={{ background: "#1B68E4" }} />
        <div className="animate-blob-2 absolute top-1/3 right-0 w-[380px] h-[380px] rounded-full blur-[90px] opacity-[0.12]" style={{ background: "#8A87EF" }} />
        <div className="animate-blob-3 absolute bottom-1/4 left-1/2 w-[320px] h-[320px] rounded-full blur-[100px] opacity-[0.10]" style={{ background: "#1B68E4" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title-bold-3 text-[#1A1A1A] mb-4">
            Every detail, designed <span className="text-[#1A1A1A]">for you</span>
          </h2>
          <p className="body-large text-gray-500 max-w-xl mx-auto">
            EVE goes beyond content delivery. She&apos;s a companion built for the
            full richness of your personal growth journey.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ id, icon, title, tagline, desc, badge }) => (
            <div
              key={id}
              className="group relative rounded-3xl p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(86,147,246,0.12) 0%, rgba(138,135,239,0.06) 70%)" }}
              />

              <div className="relative">
                {/* Icon — no bg square, just the gradient SVG */}
                <div className="mb-5">
                  {icon}
                </div>

                {/* Badge */}
                {badge && (
                  <span
                    className="absolute top-0 right-0 text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}
                  >
                    {badge}
                  </span>
                )}

                {/* Text */}
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: "#5693F6" }}
                >
                  {tagline}
                </p>
                <h3 className="title-bold-5 text-[#1A1A1A] mb-3">{title}</h3>
                <p className="body-small text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
