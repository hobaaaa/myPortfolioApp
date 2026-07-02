import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const privacySections = [
  {
    title: "1. Veri Sorumlusu",
    paragraphs: [
      "Bu internet sitesi aşağıdaki işletme tarafından yönetilmektedir.",
      "İşletme Adı: DG Digital",
      "Web Sitesi: https://www.denizgokbudak.com",
      "E-posta: info@denizgokbudak.com"
    ]
  },
  {
    title: "2. Toplanan Bilgiler",
    paragraphs: [
      "Web sitemizi ziyaret ettiğinizde aşağıdaki bilgiler toplanabilir.",
      "Kimlik Bilgileri",
      "Ad Soyad",
      "İletişim Bilgileri",
      "E-posta adresi",
      "Telefon numarası",
      "Firma Bilgileri",
      "Firma adı",
      "Web sitesi adresi",
      "Mesaj İçeriği",
      "İletişim formu veya ücretsiz analiz formu aracılığıyla tarafımıza ilettiğiniz açıklamalar, talepler ve mesajlar.",
      "Teknik Bilgiler",
      "Web sitemizin güvenliğini ve performansını artırmak amacıyla aşağıdaki teknik veriler işlenebilir.",
      "IP adresi",
      "Tarayıcı bilgisi",
      "İşletim sistemi",
      "Cihaz türü",
      "Sayfa ziyaretleri",
      "Trafik kaynakları",
      "Çerez verileri"
    ]
  },
  {
    title: "3. Bilgileriniz Hangi Amaçlarla Kullanılır?",
    paragraphs: [
      "Toplanan kişisel veriler aşağıdaki amaçlarla kullanılabilir.",
      "Taleplerinizi değerlendirmek",
      "İletişim kurmak",
      "Teklif hazırlamak",
      "Ücretsiz web sitesi analizi sunmak",
      "Satın alınan hizmetleri yürütmek",
      "Teknik destek sağlamak",
      "Müşteri ilişkilerini yönetmek",
      "Hizmet kalitesini geliştirmek",
      "Güvenliği sağlamak",
      "Yasal yükümlülükleri yerine getirmek"
    ]
  },
  {
    title: "4. Bilgileriniz Kimlerle Paylaşılır?",
    paragraphs: [
      "DG Digital, kişisel verilerinizi üçüncü kişilere satmaz, kiralamaz veya ticari amaçla paylaşmaz.",
      "Ancak aşağıdaki durumlarda hizmet sağlayıcılarla paylaşım yapılabilir.",
      "Barındırma (Hosting) hizmetleri",
      "Bulut altyapısı",
      "E-posta hizmet sağlayıcıları",
      "Analitik servisleri",
      "Ödeme altyapısı sağlayıcıları",
      "Yasal yükümlülükler kapsamında resmi kurumlar"
    ]
  },
  {
    title: "5. Kullanılan Hizmet Sağlayıcılar",
    paragraphs: [
      "Web sitemizde aşağıdaki üçüncü taraf hizmetlerinden yararlanılabilir.",
      "Vercel (Web barındırma)",
      "Cloudflare (DNS ve güvenlik)",
      "Supabase (Veri tabanı)",
      "Resend (E-posta gönderimi)",
      "PAYTR (Ödeme altyapısı)",
      "Google Analytics (Kullanım analizi)",
      "Microsoft Clarity (Kullanıcı deneyimi analizi)",
      "Meta Pixel (Reklam ölçümleme)",
      "Bu hizmet sağlayıcılar yalnızca kendi hizmetlerini sunabilmek amacıyla gerekli teknik verilere erişebilir."
    ]
  },
  {
    title: "6. Çerezler",
    paragraphs: [
      "Web sitemizde kullanıcı deneyimini geliştirmek, performansı analiz etmek ve hizmet kalitesini artırmak amacıyla çerezler kullanılabilir.",
      "Çerezler hakkında detaylı bilgiye Çerez Politikası sayfasından ulaşabilirsiniz."
    ]
  },
  {
    title: "7. Kişisel Verilerin Saklanması",
    paragraphs: [
      "Toplanan kişisel veriler;",
      "yalnızca gerekli olduğu süre boyunca,",
      "yasal yükümlülüklerin gerektirdiği süre kadar,",
      "hizmet ilişkisinin devam ettiği süre boyunca",
      "güvenli sistemlerde saklanmaktadır.",
      "Saklama süresi sona eren veriler güvenli yöntemlerle silinir veya anonim hale getirilir."
    ]
  },
  {
    title: "8. Veri Güvenliği",
    paragraphs: [
      "DG Digital kişisel verilerin güvenliği için gerekli teknik ve idari tedbirleri almaktadır.",
      "Bunlardan bazıları şunlardır.",
      "SSL şifreleme",
      "Güvenli sunucu altyapısı",
      "Yetkisiz erişime karşı koruma",
      "Güncel yazılım kullanımı",
      "Düzenli güvenlik güncellemeleri",
      "Erişim yetkilendirmeleri",
      "Bununla birlikte internet üzerinden gerçekleştirilen hiçbir veri aktarımının %100 güvenli olduğu garanti edilemez."
    ]
  },
  {
    title: "9. Harici Bağlantılar",
    paragraphs: [
      "Web sitemiz üçüncü taraf internet sitelerine bağlantılar içerebilir.",
      "Bu sitelerin gizlilik uygulamalarından DG Digital sorumlu değildir.",
      "İlgili sitelerin kendi gizlilik politikalarının incelenmesi tavsiye edilir."
    ]
  },
  {
    title: "10. Çocukların Gizliliği",
    paragraphs: [
      "Web sitemiz 18 yaş altındaki bireylere yönelik olarak tasarlanmamıştır.",
      "Bilerek çocuklara ait kişisel veri toplanmamaktadır."
    ]
  },
  {
    title: "11. Haklarınız",
    paragraphs: [
      "Yürürlükteki kişisel verilerin korunmasına ilişkin mevzuat kapsamında aşağıdaki haklara sahip olabilirsiniz.",
      "Hangi verilerinizin işlendiğini öğrenme",
      "Verilerin düzeltilmesini talep etme",
      "Verilerin silinmesini isteme",
      "İşlemeye itiraz etme",
      "Veri taşınabilirliği talebinde bulunma",
      "Kanun kapsamında diğer haklarınızı kullanma",
      "Başvurularınızı aşağıdaki iletişim adresi üzerinden iletebilirsiniz.",
      "E-posta: info@denizgokbudak.com"
    ]
  },
  {
    title: "12. Politika Değişiklikleri",
    paragraphs: [
      "DG Digital bu Gizlilik Politikasını gerekli gördüğü durumlarda güncelleyebilir.",
      "Güncellenen politika bu sayfada yayımlandığı tarihten itibaren yürürlüğe girer."
    ]
  },
  {
    title: "13. İletişim",
    paragraphs: [
      "Bu Gizlilik Politikası hakkında sorularınız için bizimle iletişime geçebilirsiniz.",
      "DG Digital",
      "Web Sitesi: https://www.denizgokbudak.com",
      "E-posta: info@denizgokbudak.com"
    ]
  }
];

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "DG Digital gizlilik politikası, toplanan veriler, kullanım amaçları, hizmet sağlayıcılar ve veri güvenliği yaklaşımı.",
  alternates: {
    canonical: "/gizlilik-politikasi"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal Bilgilendirme"
        title="Gizlilik Politikası"
        description="Kişisel verilerin hangi amaçlarla işlendiği, hangi hizmetlerle desteklendiği ve nasıl korunduğuna ilişkin bilgilendirme metni."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">
              Gizlilik Politikası
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Son Güncelleme Tarihi: 02 Temmuz 2026
            </p>
            <p className="mt-6 text-sm leading-8 text-slate-300 md:text-base">
              DG Digital ("Şirket", "biz", "bize" veya "bizim") olarak
              ziyaretçilerimizin ve müşterilerimizin gizliliğine önem veriyoruz. Bu
              Gizlilik Politikası, www.denizgokbudak.com adresini ziyaret ettiğinizde
              hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını ve
              nasıl korunduğunu açıklamaktadır.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">
              Web sitemizi kullanarak bu politikada belirtilen uygulamaları kabul etmiş
              sayılırsınız.
            </p>

            <div className="mt-10 space-y-8">
              {privacySections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {section.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-8 text-slate-300 md:text-base">
                    {section.paragraphs.map((item, index) => (
                      <p key={`${section.title}-${index}`}>{item}</p>
                    ))}
                  </div>
                </div>
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
