import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { ValueStrip } from "@/components/ValueStrip";
import { projects } from "@/data/projects";
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

const serviceFocusBlocks = [
  {
    title: "Web Tasarım ve Geliştirme",
    text: "Kurumsal web siteleri ve özel sayfa yapılarında, markayı profesyonel gösteren modern arayüz ve temiz yazılım temeli kuruyorum."
  },
  {
    title: "WordPress ve Next.js",
    text: "İhtiyaca göre yönetilebilir WordPress yapıları ya da daha hızlı ve esnek Next.js projeleri ile doğru sistemi seçiyorum."
  },
  {
    title: "E-Ticaret ve SaaS",
    text: "Ürün vitrini, üyelik sistemleri, randevu uygulamaları ve büyüyen ürün fikirleri için arayüz ve ürün mantığı geliştiriyorum."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionTitle
            eyebrow="Hizmet Odağı"
            title="Ana odak web üretimi."
            description="Ana odak; web tasarım, web geliştirme, e-ticaret ve SaaS arayüzleri üretmek. SEO ise sunduğumuz ayrı bir hizmetten çok, ürettiğimiz sitelerin Google'da daha iyi performans göstermesi için işin içine teknik olarak dahil edilen bir kalite katmanı."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.07}>
                <div className="soft-line-card h-full p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {service.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.summary}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ValueStrip />

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Öne Çıkan Projeler"
            title="Kurumsal görünüm, temiz kullanıcı akışı ve güçlü teknik temel."
            description="Projelerde hedef sadece estetik değil; daha güvenilir sunum, daha net içerik düzeni ve güçlü dijital deneyim oluşturmaktır."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow text-accent">Neden Daha Güçlü Görünür?</p>
            <h2 className="heading-lg mt-3 max-w-2xl">
              Web tasarımın etkisi, içerik ve teknik düzenle tamamlanır.
            </h2>
          </div>

          <div className="space-y-6">
            {proofItems.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="relative border-l border-white/10 pl-6 transition duration-500 hover:translate-x-1">
                  <span className="absolute left-[-7px] top-1 h-3.5 w-3.5 rounded-full bg-accent shadow-soft" />
                  <p className="text-sm text-accent">0{index + 1}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Teknik Temel"
            title="Google'ın doğru okuyacağı yapı, üretimin doğal parçası."
            description="Alt metinler, metadata, robots, sitemap ve heading düzeni ayrı bir SEO paketi satmak için değil; ürettiğimiz web sitelerinin daha sağlıklı indexlenmesi için baştan doğru kuruluyor."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceFocusBlocks.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/25">
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}
