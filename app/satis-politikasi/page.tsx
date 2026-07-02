import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const salesPolicyItems = [
  "DG Digital üzerinden satın alınan hizmetler dijital yazılım ve web geliştirme hizmetleridir.",
  "Siparişin oluşturulmasının ardından müşteri ile iletişime geçilerek ihtiyaç analizi yapılır ve hizmet kapsamı netleştirilir.",
  "Müşteri tarafından sağlanan içerik, görsel, logo ve diğer materyallerin doğruluğundan müşteri sorumludur.",
  "Proje sürecinde talep edilen revizyonlar, teklif kapsamında belirtilen revizyon hakkı çerçevesinde değerlendirilir.",
  "Teklif dışında talep edilen ek özellikler veya kapsam değişiklikleri ayrıca fiyatlandırılabilir.",
  "Hizmet tamamlandıktan sonra müşteriye dijital teslim gerçekleştirilir ve proje kapanış onayı alınır.",
  "DG Digital, teknik zorunluluklar veya proje gereksinimleri doğrultusunda müşteriyi bilgilendirerek uygun çözümler sunma hakkını saklı tutar."
];

export const metadata: Metadata = {
  title: "Satış Politikası",
  description:
    "DG Digital satış politikası, hizmet kapsamı netleştirme süreci, revizyon çerçevesi ve dijital teslim koşulları.",
  alternates: {
    canonical: "/satis-politikasi"
  }
};

export default function SalesPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal Bilgilendirme"
        title="Satış Politikası"
        description="Satın alınan dijital hizmetlerin kapsamı, süreç yönetimi, revizyon sınırları ve proje teslim yaklaşımı."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">
              Satış Politikası
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300 md:text-base">
              {salesPolicyItems.map((item, index) => (
                <p key={`sales-policy-${index}`}>{item}</p>
              ))}
            </div>

            <p className="mt-10 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400">
              Bu sayfada yer alan koşullar, DG Digital tarafından sunulan dijital
              hizmetler için geçerlidir. Güncel bilgiler gerektiğinde önceden haber
              verilmeksizin güncellenebilir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
