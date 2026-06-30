"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/portfolio", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-1.5">
        <div className="rounded-[22px] border border-white/10 bg-[#081321]/88 px-4 py-2.5 shadow-panel backdrop-blur-2xl md:px-5">
          <div className="flex items-center justify-between gap-4">
            <BrandLogo compact />

            <nav
              aria-label="Ana navigasyon"
              className="hidden items-center gap-1 lg:flex"
            >
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-[14px] font-medium transition ${
                      active
                        ? "bg-accent text-slate-950 shadow-soft"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/iletisim"
                className="button-primary hidden min-w-[124px] py-2.5 text-sm md:inline-flex"
              >
                Teklif Al
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:bg-white/[0.09] lg:hidden"
                onClick={() => setMenuOpen((value) => !value)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label="Menüyü aç"
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="pt-3 lg:hidden"
              >
                <div className="rounded-[22px] border border-white/10 bg-[#091728]/92 p-3 shadow-panel">
                  <div className="flex flex-col gap-2">
                    {links.map((link) => {
                      const active = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-2xl px-4 py-3 text-[15px] font-medium transition ${
                            active
                              ? "bg-accent text-slate-950"
                              : "text-slate-200 hover:bg-white/8"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/iletisim"
                    className="button-primary mt-4 w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Teklif Al
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
