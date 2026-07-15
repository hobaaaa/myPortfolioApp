"use client";

import { useEffect, useState } from "react";

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  );
}

export function BackToTopButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showTop) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0a1626]/88 px-4 py-3 text-sm font-semibold text-white shadow-panel backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-[#0d2036]"
        aria-label="Sayfanın başına dön"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
          <ArrowUpIcon />
        </span>
        <span className="hidden sm:inline">Back To Top</span>
      </button>
    </div>
  );
}
