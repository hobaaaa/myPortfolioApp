import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/portfolio", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/ucretsiz-web-sitesi-analizi", label: "Ücretsiz Analiz" }
];

const socials = [
  { href: "https://wa.me/905536662353", label: "WhatsApp" },
  { href: "https://www.linkedin.com/in/denizgokbudak/", label: "LinkedIn" },
  { href: "https://github.com/hobaaaa", label: "GitHub" },
  { href: "/iletisim", label: "Upwork" }
];

const legalLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kvkk-aydinlatma-metni", label: "KVKK Aydınlatma Metni" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/teslimat-ve-hizmet", label: "Teslimat ve Hizmet" },
  { href: "/satis-politikasi", label: "Satış Politikası" },
  { href: "/iptal-ve-iade", label: "İptal ve İade" }
];

export function Footer() {
  return (
    <footer className="section-divider pb-36 pt-12 md:pb-20">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr_0.95fr]">
          <div className="max-w-xl">
            <BrandLogo className="mb-4" />
            <p className="text-sm leading-7 text-slate-400">
              DG Digital; web tasarım, web geliştirme, WordPress, Next.js, e-ticaret
              ve SaaS arayüzleri için premium sunum kalitesini teknik disiplinle
              birleştiren dijital üretim partneridir.
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
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Yasal</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">İletişim</p>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>info@denizgokbudak.com</p>
              <p>05536662353</p>
              <p>Değirmenönü Mh. 1739 Sk. No:18 Daire:7 Merkezefendi/DENİZLİ</p>
              <p>Çalışma saatleri: 09:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>2026 DG Digital. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-4">
            {socials.map((item) => (
              <Link
                key={`footer-${item.label}`}
                href={item.href}
                className="transition hover:text-white"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
