import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "DG Digital ile iletişime geçin. Web tasarım, web geliştirme ve e-ticaret projeleriniz için teklif alın.",
  alternates: {
    canonical: "/iletisim"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projenizi birlikte netleştirelim."
        description="Kısa bir özet bırakın; size uygun yapı, kapsam ve görsel yön için hızlıca geri dönüş sağlayalım."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <LeadCaptureForm
            formId="contact-form"
            eyebrow="Teklif Formu"
            title="İhtiyacınızı anlatın, doğru çerçeveyi birlikte kuralım."
            description="Kurumsal web sitesi, landing page, e-ticaret veya özel yazılım ihtiyacınızı paylaşın; size uygun kapsamı netleştirelim."
            submitLabel="Gönder"
            successMessage="Mesajınız alındı. Projenizi değerlendirmek için size kısa süre içinde dönüş yapacağız."
            helperText="Form doğrudan lead sistemine kaydedilir ve tarafımıza bildirim olarak iletilir."
            source="website_contact"
          />

          <div className="space-y-5">
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.24),rgba(9,18,32,0.8)_48%,rgba(77,182,244,0.16))] p-8">
              <p className="eyebrow text-mist">Doğrudan İletişim</p>
              <div className="mt-6 space-y-4 text-slate-200">
                <p>E-posta: info@denizgokbudak.com</p>
                <p>Telefon: 05536662353</p>
                <p>Adres: Değirmenönü Mh. 1739 Sk. No:18 Daire:7 Merkezefendi/DENİZLİ</p>
                <p>Çalışma saatleri: 09:00-18:00</p>
              </div>
              <Link
                href="https://wa.me/905536662353"
                target="_blank"
                rel="noreferrer"
                className="button-secondary mt-8"
              >
                WhatsApp ile Yaz
              </Link>
            </div>

            <div className="soft-line-card p-8">
              <h3 className="font-display text-2xl font-semibold">
                Hangi işler için yazabilirsiniz?
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Kurumsal web sitesi yenileme</li>
                <li>Landing page tasarımı ve geliştirme</li>
                <li>E-ticaret arayüzü ve kullanıcı deneyimi iyileştirme</li>
                <li>SaaS, randevu ve özel panel projeleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
