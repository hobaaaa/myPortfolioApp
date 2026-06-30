import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    title: "Keşif ve yön belirleme",
    description:
      "Markanın mevcut algısını, hedef kitlesini ve sitenin hangi işi yapması gerektiğini netleştiriyoruz."
  },
  {
    title: "İçerik ve arayüz kurgusu",
    description:
      "Başlık yapısı, section sıralaması, görsel ton ve kullanıcı akışı markanın seviyesine göre kuruluyor."
  },
  {
    title: "Geliştirme ve animasyon katmanı",
    description:
      "Tasarım sadece görselde kalmıyor; modern arayüz geçişleri, responsive düzen ve performansla üretime taşınıyor."
  },
  {
    title: "Yayın ve iyileştirme",
    description:
      "Son kontrol sonrası yayına alıyor, gerekirse sonraki geliştirme adımlarını da net şekilde planlıyoruz."
  }
];

export function ProcessSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionTitle
          eyebrow="Çalışma Süreci"
          title="Kararları yormayan, üretimi hızlandıran net bir akış."
          description="Süreç; gereksiz toplantılarla değil, doğru karar anları ve hızlı uygulama disipliniyle ilerler."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.08}>
              <div className="h-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/25">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-display text-3xl text-accent">0{index + 1}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
