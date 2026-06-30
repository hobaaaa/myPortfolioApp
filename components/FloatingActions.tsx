"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 360);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a1626]/92 text-white shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-[#0d2036]"
          aria-label="Sayfanın başına dön"
        >
          ↑
        </button>
      ) : null}

      <Link
        href="https://wa.me/905536662353"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-full bg-[#20c65a] px-5 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-[#27d366]"
      >
        <span className="text-base">✆</span>
        <span>WhatsApp</span>
      </Link>
    </div>
  );
}
