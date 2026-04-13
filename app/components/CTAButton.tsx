"use client";

import { ReactNode, MouseEvent } from "react";

interface CTAButtonProps {
  className?: string;
  children: ReactNode;
}

export default function CTAButton({ className, children }: CTAButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "com.mindvalley.mvacademy://eve";
    } else {
      window.open("https://home.mindvalley.com/today?open_eve_chat=true", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a
      href="https://home.mindvalley.com/today?open_eve_chat=true"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
