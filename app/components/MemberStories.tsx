export default function MemberStories() {
  return (
    <section
      className="py-24 md:py-32 px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #DBE9FE 0%, #E5E6FA 100%)" }}
      aria-label="Member stories"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="title-bold-3 text-[#1A1A1A] text-center mb-16">
          Thousands already
          <br />
          on their path with Eve
        </h2>

        {/* Stats with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">

          {/* 220K+ Members */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "linear-gradient(135deg, rgba(86,147,246,0.15), rgba(138,135,239,0.15))", border: "1px solid rgba(86,147,246,0.25)" }}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                <defs>
                  <linearGradient id="statGrad-members" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5693F6" />
                    <stop offset="100%" stopColor="#8A87EF" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#statGrad-members)" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <p
              className="text-6xl font-bold mb-3"
              style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              220K+
            </p>
            <p className="body-small text-gray-500 font-medium">Members growing with Eve</p>
          </div>

          {/* 4.8 Rating */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "linear-gradient(135deg, rgba(86,147,246,0.15), rgba(138,135,239,0.15))", border: "1px solid rgba(86,147,246,0.25)" }}
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="statGrad-star" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5693F6" />
                    <stop offset="100%" stopColor="#8A87EF" />
                  </linearGradient>
                </defs>
                <path fill="url(#statGrad-star)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <p
              className="text-6xl font-bold mb-3"
              style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              4.8
            </p>
            <p className="body-small text-gray-500 font-medium">Average member rating</p>
          </div>

          {/* 190+ Countries */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "linear-gradient(135deg, rgba(86,147,246,0.15), rgba(138,135,239,0.15))", border: "1px solid rgba(86,147,246,0.25)" }}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                <defs>
                  <linearGradient id="statGrad-globe" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5693F6" />
                    <stop offset="100%" stopColor="#8A87EF" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#statGrad-globe)" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <p
              className="text-6xl font-bold mb-3"
              style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              190+
            </p>
            <p className="body-small text-gray-500 font-medium">Countries represented</p>
          </div>

        </div>
      </div>
    </section>
  );
}
