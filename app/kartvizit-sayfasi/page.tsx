import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kartvizit Sayfası",
  description: "Deniz Gökbudak için oluşturulmuş dijital kartvizit sayfası.",
};

const profile = {
  firstName: "Deniz",
  lastName: "Gökbudak",
  title: "Creative Digital Solutions",
  phone: "05536662353",
  email: "info@denizgokbudak.com",
  website: "https://denizgokbudak.com",
  linkedin: "https://www.linkedin.com/in/denizgokbudak/",
  instagram: "https://www.instagram.com/gokbudakdeniz",
  facebook: "https://www.facebook.com/deniz.gokbudak.1/",
  profilFoto: "/profile.jpg",
};

const infoRows = [
  { label: "Ad", value: profile.firstName },
  { label: "Soyad", value: profile.lastName },
  { label: "Telefon", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "E-posta", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Websitesi", value: "denizgokbudak.com", href: profile.website },
];

const socialRows = [
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
  { label: "Instagram", value: profile.instagram, href: profile.instagram },
  { label: "Facebook", value: profile.facebook, href: profile.facebook },
];

export default function BusinessCardPage() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="shell">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.34),rgba(8,19,33,0.92)_38%,rgba(77,182,244,0.24))] p-5 shadow-panel md:p-8">
            <div className="absolute left-[-60px] top-10 h-44 w-44 rounded-full bg-accentDeep/35 blur-3xl" />
            <div className="absolute bottom-[-20px] right-[-30px] h-56 w-56 rounded-full bg-accent/18 blur-3xl" />

            <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#091523]/88 p-6 md:p-8">
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(77,182,244,0.24),transparent_28%),linear-gradient(180deg,#0b1930_0%,#08111a_100%)] p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-sky-100">
                      Dijital Kartvizit
                    </span>
                    <span className="text-sm text-slate-400">QR Profile</span>
                  </div>

                  <div className="mt-8 flex items-start gap-5">
                    <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(20,81,181,0.85),rgba(77,182,244,0.55))] shadow-soft">
                      <div className="text-center">
                        <Image
                          src={profile.profilFoto}
                          alt="Kullanıcı Profil Fotoğrafı"
                          width={100}
                          height={150}
                        />
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow text-accent">
                        Creative Digital Solutions
                      </p>
                      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                        {profile.firstName}
                        <br />
                        {profile.lastName}
                      </h1>
                      <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                        Kullanıcı dostu, modern ve yüksek performanslı
                        full-stack web uygulamaları ile WordPress çözümleri
                        geliştiriyoruz. İşletmenizin dijital dünyadaki varlığını
                        güçlendirmek için fikirden yayına kadar tüm süreçte
                        profesyonel yazılım çözümleri sunuyoruz.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <Link
                      href={`tel:${profile.phone}`}
                      className="button-primary"
                    >
                      Hemen Ara
                    </Link>
                    <Link
                      href={`mailto:${profile.email}`}
                      className="button-secondary"
                    >
                      E-posta Gönder
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="eyebrow text-accent">İletişim Bilgileri</p>
                    </div>
                    <div className="hidden h-px flex-1 bg-white/10 md:block" />
                  </div>

                  <div className="space-y-1">
                    {infoRows.map((item) => (
                      <CardLine
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        href={item.href}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 ">
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                    <p className="eyebrow text-accent">Sosyal Medya</p>
                    <div className="mt-5 space-y-1">
                      {socialRows.map((item) => (
                        <CardLine
                          key={item.label}
                          label={item.label}
                          value={item.value.replace("https://", "")}
                          href={item.href}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  // İçerik tasarımı (Artık en dıştaki boşlukları bu yönetmiyor)
  const content = (
    <div className="flex flex-col gap-2 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/28 hover:bg-white/[0.05] md:flex-row md:items-center md:justify-between h-full w-full">
      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
      <span className="text-sm font-medium text-white md:text-right">
        {value}
      </span>
    </div>
  );

  // Her durumda en dışta aynı HTML yapısının (block element) kalması için
  // bileşeni ortak bir div ile sarıyoruz ve boşluğu (pb-3) buraya veriyoruz.
  return (
    <div className="pb-3 last:pb-0 w-full block">
      {href ? (
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="block"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
