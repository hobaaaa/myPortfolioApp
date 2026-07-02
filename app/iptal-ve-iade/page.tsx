import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const cancellationPolicyItems = [
  "Sunulan hizmetler dijital ve kişiye özel olarak üretildiğinden, hizmet sürecinin başlamasının ardından cayma hakkı ilgili mevzuat kapsamında sınırlı olabilir.",
  "Proje çalışmasına başlanmadan önce yapılan iptal taleplerinde ödeme durumu değerlendirilerek gerekli iade işlemleri gerçekleştirilebilir.",
  "Proje başladıktan sonra tamamlanan çalışma oranına göre ücretlendirme yapılabilir.",
  "Teslimi tamamlanmış ve müşteriye dijital olarak ulaştırılmış hizmetlerde iade yapılamamaktadır.",
  "Teknik bir nedenle hizmetin DG Digital tarafından sunulamaması durumunda müşteriye ücret iadesi veya alternatif çözüm sunulur.",
  "İade talepleri iletişim sayfasında yer alan iletişim bilgileri üzerinden yazılı olarak iletilebilir."
];

export const metadata: Metadata = {
  title: "İptal ve İade Koşulları",
  description:
    "DG Digital dijital hizmetleri için iptal, iade, cayma hakkı ve teknik nedenlere bağlı çözüm koşulları.",
  alternates: {
    canonical: "/iptal-ve-iade"
  }
};

export default function CancellationAndRefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal Bilgilendirme"
        title="İptal ve İade Koşulları"
        description="Dijital hizmetlerde iptal talepleri, iade değerlendirmesi ve proje başlangıcı sonrası geçerli koşullar."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">
              İptal ve İade Koşulları
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300 md:text-base">
              {cancellationPolicyItems.map((item, index) => (
                <p key={`cancellation-policy-${index}`}>{item}</p>
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
