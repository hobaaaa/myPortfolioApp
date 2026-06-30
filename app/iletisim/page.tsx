import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "DG Digital ile iletişime geçin. Web tasarım, web geliştirme ve e-ticaret projeleriniz için teklif alın."
};

const fields = [
  { id: "name", label: "Ad Soyad", type: "text", placeholder: "Ad Soyad" },
  {
    id: "email",
    label: "E-posta",
    type: "email",
    placeholder: "ornek@firma.com"
  },
  {
    id: "phone",
    label: "Telefon",
    type: "tel",
    placeholder: "0553 666 23 53"
  }
];

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
          <form
            className="rounded-[30px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10"
            aria-label="İletişim formu"
          >
            <div>
              <p className="eyebrow text-accent">Teklif Formu</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">
                İhtiyacınızı anlatın, doğru çerçeveyi birlikte kuralım.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <label key={field.id} htmlFor={field.id} className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">
                    {field.label}
                  </span>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
                  />
                </label>
              ))}
            </div>

            <label htmlFor="message" className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-200">
                Mesaj
              </span>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="İşinizi, hedefinizi ve mevcut yapıda geliştirilmesini istediğiniz tarafları kısaca paylaşabilirsiniz."
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
              />
            </label>

            <button type="submit" className="button-primary mt-6">
              Gönder
            </button>
          </form>

          <div className="space-y-5">
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.24),rgba(9,18,32,0.8)_48%,rgba(77,182,244,0.16))] p-8">
              <p className="eyebrow text-mist">Doğrudan İletişim</p>
              <div className="mt-6 space-y-4 text-slate-200">
                <p>E-posta: info@denizgokbudak.com</p>
                <p>Telefon: 05536662353</p>
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
