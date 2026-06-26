import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

const links = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/portfolio", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" }
];

export function Footer() {
  return (
    <footer className="section-divider py-10">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <div className="max-w-xl">
            <BrandLogo className="mb-4" />
            <p className="text-sm leading-7 text-slate-400">
              Markalar için güçlü görsel yön, modern arayüz geliştirme ve
              profesyonel dijital sunum kurgusu.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Site</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">İletişim</p>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>info@denizgokbudak.com</p>
              <p>05536662353</p>
              <p>Çalışma saatleri: 09:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>2026 DG Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <Link key={`footer-${link.href}`} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
