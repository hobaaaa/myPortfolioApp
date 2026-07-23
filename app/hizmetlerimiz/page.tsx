import Image from "next/image";
import type { Metadata } from "next";
import { ArtexoSpotlight } from "@/components/ArtexoSpotlight";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/data/services";

const proofItems = [
  {
    title: "Yerel aramalarda daha güçlü görünüm",
    description:
      "Hizmet başlıkları, konum uyumlu içerik dili ve temiz sayfa hiyerarşisi sayesinde Google sizi daha doğru anlamaya başlar."
  },
  {
    title: "Web tasarım ile teknik düzen birlikte yürür",
    description:
      "İyi görünen bir site yeterli değildir; metadata, heading yapısı, alt metinler ve sayfa düzeni de aynı ciddiyetle ele alınmalıdır."
  },
  {
    title: "Müşteriyi iletişime taşıyan kullanıcı akışı",
    description:
      "Site; teklif alma, WhatsApp ve iletişim adımlarını görünür tutarak ziyaretçiyi sadece bilgilendirmez, harekete de geçirir."
  }
];

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Kurumsal web sitesi, landing page, modern arayüz ve teknik güçlendirme hizmetlerini inceleyin.",
  alternates: {
    canonical: "/hizmetlerimiz"
  }
};

function ServicesHeroMockup() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-panel">
      <div className="absolute -right-8 top-0 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#091625]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4bd6a8]" />
          <div className="ml-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
            DG Digital Services
          </div>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[240px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1a2d]">
            <Image
              src="/images/hero-studio.png"
              alt="DG Digital hizmetler sayfası için örnek web arayüzü görseli"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 26vw, 100vw"
            />
          </div>

          <div className="grid gap-3">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">
                Arayüz Kararı
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                Daha kısa mesaj, daha net yönlendirme ve daha güçlü güven blokları.
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">
                Teknik Altyapı
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                Next.js, WordPress ve ölçeklenebilir içerik yapıları ile kontrollü üretim.
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">
                Çıktı
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                Daha profesyonel görünüm, daha temiz kullanıcı akışı ve daha iyi dönüşüm zemini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Web tasarım ve geliştirmede markanıza seviye kazandıran hizmetler."
        description="Her hizmet; daha profesyonel görünüm, daha net sunum ve daha temiz kullanıcı deneyimi hedefiyle planlanır."
        visual={<ServicesHeroMockup />}
      />

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Servis Alanları"
            title="Hazır kalıplar değil, işinize göre şekillenen güçlü bir dijital yön."
            description="Kurumsal sitelerden premium landing page projelerine kadar; görsel kalite, içerik hiyerarşisi ve teknik altyapı tek bir sistem içinde ele alınır."
          />
          <ServiceGrid services={services} />
        </div>
      </section>

      <ArtexoSpotlight />

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Teknik Temel"
            title="Güçlü görünen bir web sitesi, doğru okunan bir yapıyla tamamlanır."
            description="Ana sayfadan çıkardığımız teknik vurgu burada korunuyor. Böylece anasayfa daha akıcı kalırken, detaylı kalite yaklaşımı hizmetler sayfasında yaşamaya devam ediyor."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {proofItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-panel transition duration-500 hover:-translate-y-1 hover:border-accent/20"
              >
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.label}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/20"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
                  {service.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="shell grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Daha temiz görünüm",
              description:
                "Kalabalık yaratmayan ama zayıf da görünmeyen dengeli bir arayüz düzeni."
            },
            {
              title: "Daha net mesaj",
              description:
                "Kullanıcının ne sunduğunuzu ve neden size güvenmesi gerektiğini daha hızlı anlaması."
            },
            {
              title: "Daha güçlü teknik temel",
              description:
                "Mobil uyum, hız ve büyütülebilir yapı sayesinde uzun vadede de sağlıklı kullanım."
            }
          ].map((item) => (
            <div key={item.title} className="soft-line-card p-8">
              <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
