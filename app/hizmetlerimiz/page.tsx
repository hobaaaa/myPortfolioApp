import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Kurumsal web sitesi, landing page, modern arayüz ve teknik güçlendirme hizmetlerini inceleyin."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Web tasarım ve geliştirmede markanıza seviye kazandıran hizmetler."
        description="Her hizmet; daha profesyonel görünüm, daha net sunum ve daha temiz kullanıcı deneyimi hedefiyle planlanır."
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
      <section className="pb-14 md:pb-18">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Daha temiz görünüm",
              description:
                "Fazla kalabalık yaratmayan ama zayıf da görünmeyen dengeli bir arayüz düzeni."
            },
            {
              title: "Daha net mesaj",
              description:
                "Kullanıcının ne sunduğunuzu ve neden size güvenmesi gerektiğini daha hızlı anlaması."
            },
            {
              title: "Daha güçlü teknik temel",
              description:
                "Mobil uyum, hız ve ileride büyütülebilir yapı sayesinde uzun vadede de sağlıklı kullanım."
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
