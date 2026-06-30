import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "Yeni site ile marka sunumumuz çok daha netleşti. Teklif isteme oranı kısa sürede gözle görülür biçimde arttı.",
    name: "Merve A.",
    role: "Kurucu, Örnek Klinik"
  },
  {
    quote:
      "Hem tasarım dili hem de içerik akışı daha kurumsal hale geldi. Mobildeki deneyim özellikle önceki yapıya göre çok daha güçlü.",
    name: "Burak T.",
    role: "Yönetici, Örnek E-Ticaret Markası"
  },
  {
    quote:
      "Süreç boyunca hızlı karar alabildik. Ortaya çıkan iş sadece şık değil, gerçekten güven veren bir vitrin oldu.",
    name: "Selin K.",
    role: "Kurucu, Örnek Danışmanlık Markası"
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <AnimatedSection className="max-w-3xl">
          <p className="eyebrow text-accent">Referanslar</p>
          <h2 className="heading-lg mt-3">
            Güven hissi yalnızca tasarımla değil, deneyimle de oluşur.
          </h2>
          <p className="body-lg mt-4">
            Şimdilik örnek yorumlar kullanıyoruz. Yapı, ileride gerçek Google
            yorumlarıyla kolayca güncellenebilecek şekilde kurgulandı.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.08}>
              <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-panel transition duration-500 hover:-translate-y-1 hover:border-accent/25">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-100">
                    Müşteri Yorumu
                  </div>
                  <div className="text-sm tracking-[0.16em] text-[#f5d37a]">★★★★★</div>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-200">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
