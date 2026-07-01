import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FreeAnalysisForm } from "@/components/FreeAnalysisForm";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import {
  analysisAreas,
  analysisAudience,
  analysisDeliverables,
  analysisMetrics
} from "@/data/freeAnalysis";

export const metadata: Metadata = {
  title: "Ücretsiz Web Sitesi Analizi | DG Digital",
  description:
    "Web sitenizin SEO, hız, mobil deneyim, içerik akışı ve dönüşüm potansiyelini ücretsiz analiz edin. DG Digital ile teknik ve görsel kalite yol haritanızı çıkarın.",
  alternates: {
    canonical: "/ucretsiz-web-sitesi-analizi"
  },
  openGraph: {
    title: "Ücretsiz Web Sitesi Analizi | DG Digital",
    description:
      "Web sitenizin SEO, hız, mobil deneyim, içerik akışı ve dönüşüm potansiyelini ücretsiz analiz edin. DG Digital ile teknik ve görsel kalite yol haritanızı çıkarın.",
    url: "https://denizgokbudak.com/ucretsiz-web-sitesi-analizi",
    siteName: "DG Digital",
    locale: "tr_TR",
    type: "website"
  }
};

function AnalysisHeroVisual() {
  return (
    <div className="panel relative overflow-hidden rounded-[34px] p-4 md:p-5">
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-accent/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 md:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="eyebrow text-mist">Analiz Özeti</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">İlk bakış denetimi</h2>
          </div>
          <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Ücretsiz
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {analysisMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 transition duration-500 hover:-translate-y-1 hover:border-accent/25"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold text-white">
                    {metric.score}
                  </p>
                </div>
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(77,182,244,0.55)]" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{metric.detail}</p>
            </div>
          ))}
        </div>

        <Link href="#analysis-form" className="button-secondary mt-5 w-full">
          Analiz Talep Et
        </Link>
      </div>
    </div>
  );
}

export default function FreeAnalysisPage() {
  return (
    <>
      <PageHero
        eyebrow="Ücretsiz Analiz"
        title="Web sitenizin teknik ve dönüşüm potansiyelini ücretsiz analiz edelim."
        description="Performans, SEO, mobil deneyim, içerik akışı ve kullanıcı güveni açısından sitenizi inceleyip size net bir iyileştirme yol haritası çıkaralım."
        visual={<AnalysisHeroVisual />}
      />

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Analiz Başlıkları"
            title="Neleri analiz ediyoruz?"
            description="İlk incelemede yalnızca teknik puana değil, ziyaretçinin sitenizi nasıl algıladığına ve iletişime geçme ihtimalini etkileyen katmanlara da bakıyoruz."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {analysisAreas.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.05}>
                <div className="soft-line-card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold text-accent">
                      0{index + 1}
                    </span>
                    <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <AnimatedSection className="panel p-7 md:p-9">
            <p className="eyebrow text-accent">Çıktı</p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-[2.4rem]">
              Analiz sonunda ne alacaksınız?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Hedefimiz size uzun bir rapor bırakmak değil; hangi başlıkların öncelikli
              olduğunu netleştirip geliştirme kararlarını hızlandırmak.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2">
            {analysisDeliverables.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.05}>
                <div className="soft-line-card h-full p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">
                    Öncelik {index + 1}
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Uygunluk"
            title="Kimler için uygun?"
            description="Bu sayfa özellikle mevcut sitesini daha iyi kullanmak, teklif akışını güçlendirmek veya yeni yatırım öncesinde mevcut durumu net görmek isteyen markalar için tasarlandı."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {analysisAudience.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.05}>
                <div className="soft-line-card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 12.5L10 16.5L18.5 8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2 md:pb-14">
        <div className="shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <FreeAnalysisForm />

          <AnimatedSection className="panel rounded-[32px] p-7 md:p-9">
            <p className="eyebrow text-mist">Nasıl ilerliyoruz?</p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-[2.35rem]">
              İlk inceleme, net öneri, doğru aksiyon.
            </h2>
            <div className="mt-6 space-y-5">
              {[
                {
                  step: "01",
                  title: "Talebinizi alıyoruz",
                  description:
                    "Sitenizin adresini ve mevcut ihtiyacınızı değerlendirerek inceleme kapsamını belirliyoruz."
                },
                {
                  step: "02",
                  title: "Temel sorunları işaretliyoruz",
                  description:
                    "Teknik yapı, görsel güven, mobil deneyim ve teklif akışındaki kritik kırılmaları ayıklıyoruz."
                },
                {
                  step: "03",
                  title: "Uygulanabilir yol haritası paylaşıyoruz",
                  description:
                    "Önce hangi adımın atılması gerektiğini netleştirip gereksiz karmaşayı ortadan kaldırıyoruz."
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {item.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell">
          <AnimatedSection className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.34),rgba(6,17,29,0.88)_42%,rgba(77,182,244,0.22))] px-8 py-10 md:px-12 md:py-14">
            <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/18 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-mist">Sonraki Adım</p>
                <h2 className="heading-lg mt-4">
                  Markanız dijitalde daha güçlü görünmeye hazırsa, önce mevcut durumunuzu
                  netleştirelim.
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#analysis-form" className="button-primary">
                  Analiz Talep Et
                </Link>
                <Link
                  href="https://wa.me/905536662353"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  WhatsApp ile Ulaş
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
