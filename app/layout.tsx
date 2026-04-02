import type { Metadata } from "next";
import "./globals.css";
// Google Sans Flex is loaded via @import in globals.css (Mindvalley design system)

export const metadata: Metadata = {
  title: "EVE — Your AI Personal Growth Companion | Mindvalley",
  description:
    "Meet EVE, Mindvalley's AI-powered personal growth companion. Have transformational conversations, set goals with curated learning paths, and unlock your potential.",
  keywords: [
    "EVE",
    "Mindvalley",
    "AI companion",
    "personal growth",
    "learning assistant",
    "self-improvement",
    "AI learning",
  ],
  openGraph: {
    title: "EVE — Your AI Personal Growth Companion",
    description:
      "Transform your life with EVE — Mindvalley's AI guide built to learn, grow, and evolve alongside you.",
    type: "website",
    siteName: "Mindvalley",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVE — Your AI Personal Growth Companion",
    description: "Meet EVE, Mindvalley's AI guide for personal transformation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
