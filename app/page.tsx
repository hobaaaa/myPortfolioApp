import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ValueStrip } from "@/components/ValueStrip";
import { projects } from "@/data/projects";
import { ConversionBanner } from "@/components/ConversionBanner";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { AboutPreview } from "@/components/AboutPreview";

const serviceQuickCards = [
  {
    label: "Kurumsal",
    title: "İlk bakışta güven veren web sunumu"
  },
  {
    label: "E-Ticaret",
    title: "Satış hissini güçlendiren dijital vitrin"
  },
  {
    label: "SaaS",
    title: "Büyümeye uygun ürün arayüzleri"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-space">
        <div className="shell grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <SectionTitle
            eyebrow="Hizmet Odağı"
            title="Ana odak web üretimi."
            description="Ana odak; web tasarım, web geliştirme, e-ticaret ve SaaS arayüzleri üretmek. Teknik SEO yaklaşımı ise sunduğumuz ayrı bir hizmetten çok, ürettiğimiz sitelerin Google'da daha sağlıklı performans göstermesi için işin içine baştan dahil edilen kalite katmanıdır."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {serviceQuickCards.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.07}>
                <div className="soft-line-card h-full p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {service.label}
                  </p>
                  <h3 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight">
                    {service.title}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ConversionBanner />
      <ValueStrip />
      <StatsSection />

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Öne Çıkan Projeler"
            title="Kurumsal görünüm, temiz kullanıcı akışı ve güçlü teknik temel."
            description="Projelerde hedef yalnızca estetik değil; daha güvenilir sunum, daha net içerik düzeni ve daha profesyonel dijital deneyim oluşturmaktır."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <TestimonialsSection />
      <AboutPreview />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
