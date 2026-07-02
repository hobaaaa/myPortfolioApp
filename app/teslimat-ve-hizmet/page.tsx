import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const deliveryTerms = [
  "DG Digital tarafından sunulan hizmetler dijital hizmet niteliğindedir. Fiziksel ürün gönderimi yapılmamaktadır.",
  "Satın alınan hizmete ilişkin çalışma süreci, ödemenin onaylanmasının ardından müşteri ile iletişime geçilerek başlatılır.",
  "Hizmet teslim süresi; satın alınan hizmetin kapsamına, proje büyüklüğüne ve müşteri tarafından gerekli bilgi ve içeriklerin sağlanma sürecine bağlı olarak değişiklik gösterebilir."
];

const deliveryTimes = [
  "Landing Page: 3-7 iş günü",
  "Kurumsal Web Sitesi: 7-15 iş günü",
  "E-Ticaret Sitesi: 10-20 iş günü",
  "Özel Yazılım ve SaaS Projeleri: Proje kapsamına göre belirlenir."
];

export const metadata: Metadata = {
  title: "Teslimat ve Hizmet Sunum Koşulları",
  description:
    "DG Digital dijital hizmet teslim süreçleri, hizmet sunum koşulları ve genel proje teslim süreleri.",
  alternates: {
    canonical: "/teslimat-ve-hizmet"
  }
};

export default function DeliveryAndServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal Bilgilendirme"
        title="Teslimat ve Hizmet Sunum Koşulları"
        description="DG Digital tarafından sunulan dijital hizmetlerin teslim şekli, süreç başlangıcı ve genel teslim zamanları."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">
              Teslimat ve Hizmet Sunum Koşulları
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300 md:text-base">
              {deliveryTerms.map((item, index) => (
                <p key={`delivery-term-${index}`}>{item}</p>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-2xl font-semibold text-white">
                Genel teslim süreleri
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
                {deliveryTimes.map((item, index) => (
                  <li key={`delivery-time-${index}`}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm leading-8 text-slate-300 md:text-base">
              Teslimatlar dijital ortam üzerinden gerçekleştirilir. Gerekli durumlarda
              erişim bilgileri, proje dosyaları veya yayınlanan web sitesi müşteriye
              elektronik ortamda teslim edilir.
            </p>

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
