import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { values } from "@/data/values";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "DG Digital yaklaşımını, çalışma biçimini ve profesyonel web tasarım odağını keşfedin."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Amacımız yalnızca site teslim etmek değil; markayı dijitalde daha güçlü konumlandırmak."
        description="DG Digital, premium sunum anlayışı ve temiz geliştirme disipliniyle ajans mantığında ilerleyen bir dijital üretim yapısıdır."
      />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <SectionTitle
              eyebrow="Kiminle Çalışıyorsunuz?"
              title="Ekranın arkasında, işi doğrudan üreten gerçek bir iletişim vardır."
              description="Bu yapı büyük ekip karmaşası yaratmadan; tasarım, geliştirme ve stratejik kararların aynı çatı altında ilerlemesini sağlar."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-white">Küçük Hikâye</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tasarım ve yazılımı aynı disiplin içinde ele alan üretim yaklaşımı.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-white">Çalışma Yaklaşımı</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Gereksiz kalabalık yerine net kararlar, hızlı geri dönüş ve yüksek kalite.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold text-white">Misyon</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Markalara daha profesyonel, daha güçlü ve daha güvenilir bir dijital vitrin kazandırmak.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,81,181,0.18),rgba(255,255,255,0.02))] p-4 shadow-panel">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-[26px]">
              <Image
                src="/profile.jpg"
                alt="DG Digital kurucusu Deniz Gökbudak"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/10 bg-[#071320]/80 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.22em] text-sky-100/80">
                Kurucu . Gelecekte profesyonel portre ile güncellenebilir
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                Deniz Gökbudak
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Web tasarım, WordPress ve Next.js ekseninde çalışan; estetik
                kararları teknik kaliteyle birleştiren üretim yaklaşımı.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <SectionTitle
            eyebrow="İlkeler"
            title="Kararları yöneten temel yaklaşım."
            description="Her projede kaliteyi koruyan birkaç net ilke bulunur."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="soft-line-card p-6">
                <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
