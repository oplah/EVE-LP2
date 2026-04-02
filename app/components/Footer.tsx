import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/EVE-icon.svg" alt="EVE" width={28} height={28} />
              <span className="font-bold text-[#1A1A1A]">EVE</span>
              <span className="text-xs text-gray-400">by Mindvalley</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
              Your AI companion for personal transformation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Get Started", href: "#get-started" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-gray-500 hover:text-[#1A1A1A] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mindvalley */}
          <div>
            <h3 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">Mindvalley</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Membership", href: "https://mindvalley.com/membership/overview" },
                { label: "Programs", href: "https://mindvalley.com" },
                { label: "Community", href: "https://mindvalley.com" },
                { label: "Blog", href: "https://blog.mindvalley.com" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", href: "https://mindvalley.com/privacy" },
                { label: "Terms of Use", href: "https://mindvalley.com/terms" },
                { label: "Cookie Policy", href: "https://mindvalley.com/cookies" },
                { label: "Support", href: "https://support.mindvalley.com" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-[#1A1A1A] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {year} Mindvalley Sdn Bhd. All rights reserved. EVE is a Mindvalley product.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              {
                label: "Instagram",
                href: "https://instagram.com/mindvalley",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                href: "https://facebook.com/mindvalley",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "https://youtube.com/mindvalley",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-violet-100 hover:text-violet-600 transition-all duration-200"
                aria-label={`Follow Mindvalley on ${label}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
