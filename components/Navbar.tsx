"use client";

import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/portfolio", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-1.5 md:pt-2">
        <div className="rounded-[24px] border border-white/10 bg-[#081321]/92 px-4 py-3 shadow-panel backdrop-blur-2xl md:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <BrandLogo compact />
              <Link href="/iletisim" className="button-primary text-xs md:hidden">
                Teklif Al
              </Link>
            </div>

            <nav
              aria-label="Ana navigasyon"
              className="flex gap-2 overflow-x-auto pb-1 lg:flex-1 lg:justify-center lg:pb-0"
            >
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? "bg-accent text-slate-950 shadow-soft"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/iletisim"
              className="button-primary hidden text-sm md:inline-flex"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
