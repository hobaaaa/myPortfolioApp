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
        title="Amaç yalnızca site teslim etmek değil; markayı dijitalde daha iyi göstermek."
        description="DG Digital, dark temalı modern tasarım dili, premium sunum anlayışı ve temiz geliştirme disipliniyle çalışan bağımsız bir dijital üretim pratiğidir."
      />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <SectionTitle
              eyebrow="Yaklaşım"
              title="Şık görünen ekranlar kadar, güven veren akışlar da önemli."
              description="Bu yüzden her projede tasarım, içerik sıralaması, boşluk dengesi, görsel ton ve teknik altyapı birlikte ele alınır."
            />
            <p className="body-lg mt-6">
              Hedefim; ziyaretçiye ilk bakışta profesyonellik hissi veren,
              markayı daha ciddi gösteren ve iletişim kurma isteğini artıran
              dijital deneyimler üretmek.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,81,181,0.18),rgba(255,255,255,0.02))] p-8 md:p-10">
            <p className="eyebrow text-accent">Odak Alanları</p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Kurumsal web tasarım</li>
              <li>Landing page stratejisi ve tasarımı</li>
              <li>Dark tema ve premium görsel yön</li>
              <li>Temiz arayüz geliştirme</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <SectionTitle
            eyebrow="İlkeler"
            title="Kararları yöneten temel yaklaşım."
            description="Her işte kaliteyi koruyan birkaç temel prensip bulunur."
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
