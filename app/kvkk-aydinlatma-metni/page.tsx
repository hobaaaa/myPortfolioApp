import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const kvkkSections = [
  {
    title: "1. Veri Sorumlusu",
    paragraphs: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla aşağıda bilgileri yer alan DG Digital tarafından işlenmektedir.",
      "İşletme Adı: DG Digital",
      "Web Sitesi: https://www.denizgokbudak.com",
      "E-posta: info@denizgokbudak.com",
      "Bu Aydınlatma Metni, internet sitemizi ziyaret eden kullanıcılar, iletişim formu aracılığıyla bizimle iletişime geçen kişiler ve hizmet talebinde bulunan müşteriler için hazırlanmıştır."
    ]
  },
  {
    title: "2. İşlenen Kişisel Veriler",
    paragraphs: [
      "İnternet sitemizi kullanmanız veya bizimle iletişime geçmeniz halinde aşağıdaki kişisel veriler işlenebilir.",
      "Kimlik Bilgileri",
      "Ad Soyad",
      "İletişim Bilgileri",
      "E-posta adresi",
      "Telefon numarası",
      "Müşteri Bilgileri",
      "Firma adı",
      "Web sitesi adresi",
      "Talep ve Mesaj Bilgileri",
      "İletişim formu içerikleri",
      "Ücretsiz analiz talepleri",
      "Hizmet talepleri",
      "Teklif talepleri",
      "İşlem Güvenliği Verileri",
      "IP adresi",
      "Tarayıcı bilgileri",
      "İşletim sistemi",
      "Cihaz bilgileri",
      "Log kayıtları",
      "Trafik verileri"
    ]
  },
  {
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    paragraphs: [
      "Toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir.",
      "İletişim taleplerinin değerlendirilmesi",
      "Teklif hazırlanması",
      "Ücretsiz web sitesi analizi hizmetinin sunulması",
      "Satın alınan hizmetlerin yürütülmesi",
      "Müşteri ilişkilerinin yönetilmesi",
      "Teknik destek sağlanması",
      "Hizmet kalitesinin geliştirilmesi",
      "İnternet sitesi güvenliğinin sağlanması",
      "Hukuki yükümlülüklerin yerine getirilmesi",
      "Finansal işlemlerin yürütülmesi",
      "Ödeme süreçlerinin yönetilmesi",
      "Olası uyuşmazlıklarda delil niteliğinde kayıt tutulması"
    ]
  },
  {
    title: "4. Kişisel Verilerin Toplanma Yöntemi",
    paragraphs: [
      "Kişisel verileriniz aşağıdaki yöntemlerle otomatik veya kısmen otomatik yollarla toplanabilir.",
      "İletişim formu",
      "Ücretsiz analiz başvuru formu",
      "Teklif talep formları",
      "Çerezler",
      "Web sitesi kullanım kayıtları",
      "Elektronik posta yazışmaları",
      "Telefon görüşmeleri",
      "Online ödeme süreçleri"
    ]
  },
  {
    title: "5. Kişisel Verilerin İşlenmesinin Hukuki Sebebi",
    paragraphs: [
      "Kişisel verileriniz KVKK'nın 5. maddesi kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir.",
      "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması",
      "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi",
      "Bir hakkın tesisi, kullanılması veya korunması",
      "Veri sorumlusunun meşru menfaatleri için veri işlemenin zorunlu olması",
      "Kanunlarda açıkça öngörülmesi",
      "İlgili kişinin açık rızasının bulunması gereken durumlarda açık rıza verilmesi"
    ]
  },
  {
    title: "6. Kişisel Verilerin Aktarılması",
    paragraphs: [
      "Toplanan kişisel veriler, yukarıda belirtilen amaçların yerine getirilebilmesi için gerekli olduğu ölçüde aşağıdaki kişi ve kuruluşlarla paylaşılabilir.",
      "Ödeme hizmet sağlayıcıları (PAYTR)",
      "Barındırma hizmet sağlayıcıları",
      "Bulut altyapı sağlayıcıları",
      "Teknik destek hizmeti alınan firmalar",
      "E-posta hizmet sağlayıcıları",
      "Analitik hizmet sağlayıcıları",
      "Yetkili kamu kurum ve kuruluşları",
      "Mahkemeler ve diğer resmi merciler",
      "DG Digital, kişisel verilerinizi ticari amaçlarla üçüncü kişilere satmaz veya kiralamaz."
    ]
  },
  {
    title: "7. Kullanılan Hizmet Sağlayıcıları",
    paragraphs: [
      "İnternet sitemizde aşağıdaki teknolojilerden ve hizmet sağlayıcılardan yararlanılabilir.",
      "Vercel",
      "Cloudflare",
      "Supabase",
      "Resend",
      "PAYTR",
      "Google Analytics",
      "Microsoft Clarity",
      "Meta Pixel",
      "Bu hizmetler yalnızca sunulan hizmetlerin yerine getirilebilmesi amacıyla kullanılmaktadır."
    ]
  },
  {
    title: "8. Kişisel Verilerin Saklanma Süresi",
    paragraphs: [
      "Kişisel veriler;",
      "hizmet ilişkisinin devam ettiği süre boyunca,",
      "ilgili mevzuatta öngörülen süreler boyunca,",
      "hukuki yükümlülüklerin gerektirdiği süre kadar",
      "saklanmaktadır.",
      "Saklama süresinin sona ermesi halinde kişisel veriler güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir."
    ]
  },
  {
    title: "9. Veri Sahibinin Hakları",
    paragraphs: [
      "KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz.",
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
      "İşlenen verilere ilişkin bilgi talep etme",
      "İşlenme amacını öğrenme",
      "Verilerin amacına uygun kullanılıp kullanılmadığını öğrenme",
      "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme",
      "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
      "Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
      "Yapılan düzeltme veya silme işlemlerinin üçüncü kişilere bildirilmesini isteme",
      "Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
      "Kanuna aykırı veri işlenmesi nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme"
    ]
  },
  {
    title: "10. Başvuru Usulü",
    paragraphs: [
      "KVKK kapsamındaki taleplerinizi aşağıdaki iletişim adresi üzerinden tarafımıza iletebilirsiniz.",
      "E-posta: info@denizgokbudak.com",
      "Başvurular, yürürlükte bulunan KVKK ve ilgili mevzuat hükümleri çerçevesinde değerlendirilecek ve yasal süre içerisinde sonuçlandırılacaktır."
    ]
  },
  {
    title: "11. Güncellemeler",
    paragraphs: [
      "DG Digital, işbu Aydınlatma Metni'ni yürürlükteki mevzuat veya sunulan hizmetlerde meydana gelebilecek değişiklikler doğrultusunda güncelleme hakkını saklı tutar.",
      "Güncellenen metin, internet sitesinde yayımlandığı tarihten itibaren yürürlüğe girer."
    ]
  },
  {
    title: "İletişim",
    paragraphs: [
      "DG Digital",
      "Web Sitesi: https://www.denizgokbudak.com",
      "E-posta: info@denizgokbudak.com"
    ]
  }
];

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "DG Digital KVKK aydınlatma metni, işlenen kişisel veriler, hukuki sebepler, aktarım süreçleri ve veri sahibi hakları.",
  alternates: {
    canonical: "/kvkk-aydinlatma-metni"
  }
};

export default function KvkkDisclosurePage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal Bilgilendirme"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı KVKK kapsamında işlenen veriler, işleme amaçları, hukuki dayanaklar ve başvuru usulüne ilişkin bilgilendirme."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">
              KVKK Aydınlatma Metni
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Son Güncelleme Tarihi: 02 Temmuz 2026
            </p>

            <div className="mt-10 space-y-8">
              {kvkkSections.map((section) => (
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
