"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";

const items = [
  {
    question: "Projelerde WordPress mi yoksa Next.js mi tercih ediliyor?",
    answer:
      "İhtiyaca göre karar veriyoruz. İçerik yönetimi ön plandaysa WordPress, daha özel akışlar ve performans odaklı yapı gerekiyorsa Next.js tercih ediyoruz."
  },
  {
    question: "Web sitesi içeriği Google için nasıl daha doğru hazırlanıyor?",
    answer:
      "Sayfa başlıkları, heading yapısı, alt metinler, metadata ve yerel arama dili birlikte kurgulanıyor. Buradaki amaç SEO hizmeti satmak değil, sitenin teknik olarak doğru okunmasını sağlamak."
  },
  {
    question: "E-ticaret veya SaaS projelerinde özel geliştirme yapılabiliyor mu?",
    answer:
      "Evet. Ödeme akışları, üyelik yapıları, panel ekranları ve randevu modülleri gibi özel ihtiyaçlar projeye göre planlanabiliyor."
  },
  {
    question: "Teslim sonrası destek veriliyor mu?",
    answer:
      "Yeni sayfa ekleme, görsel düzenleme, içerik güncelleme ve geliştirme ihtiyaçları için teslim sonrası destek modeli kurulabiliyor."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-space">
      <div className="shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <AnimatedSection>
          <p className="eyebrow text-accent">SSS</p>
          <h2 className="heading-lg mt-3">Karar vermeden önce en sık gelen sorular.</h2>
          <p className="body-lg mt-4">
            Kullanıcıya güven veren yapı yalnızca tasarımda değil, bilgi sunumunda
            da net olmalıdır. Bu bölüm aynı zamanda SEO tarafında da faydalı olur.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {items.map((item, index) => {
            const open = index === openIndex;

            return (
              <AnimatedSection key={item.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] shadow-panel">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-medium text-white">{item.question}</span>
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg transition ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {open ? (
                    <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-slate-300">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
