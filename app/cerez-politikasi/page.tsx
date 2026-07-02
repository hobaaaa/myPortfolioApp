import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const cookieSections = [
  {
    title: "1. Amaç",
    paragraphs: [
      "Bu Çerez Politikası, DG Digital (\"Şirket\", \"biz\", \"bize\" veya \"bizim\") tarafından işletilen www.denizgokbudak.com internet sitesini ziyaret ettiğinizde kullanılan çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.",
      "Çerezler; internet sitemizin güvenli, verimli ve kullanıcı dostu şekilde çalışmasını sağlamak, kullanıcı deneyimini geliştirmek ve hizmetlerimizi iyileştirmek amacıyla kullanılmaktadır."
    ]
  },
  {
    title: "2. Çerez Nedir?",
    paragraphs: [
      "Çerez (Cookie), ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır.",
      "Çerezler sayesinde;",
      "tercihlerinizi hatırlayabilir,",
      "oturumunuzu yönetebilir,",
      "internet sitesinin performansını ölçebilir,",
      "kullanıcı deneyimini geliştirebiliriz.",
      "Çerezler bilgisayarınıza zarar vermez ve kişisel dosyalarınıza erişemez."
    ]
  },
  {
    title: "3. Hangi Tür Çerezleri Kullanıyoruz?",
    paragraphs: [
      "A) Zorunlu Çerezler",
      "Bu çerezler internet sitesinin temel fonksiyonlarının çalışabilmesi için gereklidir.",
      "Örneğin;",
      "güvenlik",
      "oturum yönetimi",
      "form gönderimi",
      "sayfa yönlendirmeleri",
      "Bu çerezler devre dışı bırakılamaz.",
      "B) Performans ve Analitik Çerezleri",
      "Bu çerezler internet sitesinin nasıl kullanıldığını anlamamıza yardımcı olur.",
      "Toplanan bilgiler anonim veya toplu olarak değerlendirilir.",
      "Bu kapsamda aşağıdaki hizmetler kullanılabilir:",
      "Google Analytics",
      "Microsoft Clarity",
      "Bu veriler;",
      "ziyaret edilen sayfalar",
      "oturum süresi",
      "cihaz türü",
      "tarayıcı bilgisi",
      "trafik kaynakları",
      "gibi analizlerde kullanılabilir.",
      "C) Pazarlama ve Reklam Çerezleri",
      "Reklam kampanyalarının etkinliğini ölçmek ve ziyaretçilere daha ilgili içerikler sunabilmek amacıyla pazarlama çerezleri kullanılabilir.",
      "Bu kapsamda aşağıdaki servislerden yararlanılabilir.",
      "Meta Pixel",
      "Bu çerezler;",
      "reklam performansının ölçülmesi,",
      "dönüşüm takibi,",
      "yeniden pazarlama (remarketing)",
      "amaçlarıyla kullanılabilir.",
      "D) Fonksiyonel Çerezler",
      "Bu çerezler kullanıcı tercihlerini hatırlayarak daha kişiselleştirilmiş bir deneyim sunulmasını sağlar.",
      "Örneğin;",
      "dil tercihi",
      "kullanıcı tercihleri",
      "tema ayarları",
      "gibi bilgiler saklanabilir."
    ]
  },
  {
    title: "4. Kullandığımız Üçüncü Taraf Hizmetler",
    paragraphs: [
      "İnternet sitemizde aşağıdaki üçüncü taraf hizmet sağlayıcılarından yararlanılabilir.",
      "Google Analytics",
      "Microsoft Clarity",
      "Meta Pixel",
      "Cloudflare",
      "Vercel",
      "Supabase",
      "Resend",
      "PAYTR",
      "Bu hizmet sağlayıcılar kendi gizlilik ve çerez politikaları kapsamında veri işleyebilir.",
      "DG Digital, üçüncü taraf hizmet sağlayıcılarının veri işleme faaliyetlerinden sorumlu değildir."
    ]
  },
  {
    title: "5. Çerezlerin Saklama Süresi",
    paragraphs: [
      "Çerezler kullanım amaçlarına göre farklı sürelerle saklanabilir.",
      "Oturum çerezleri",
      "Kalıcı çerezler",
      "Kalıcı çerezlerin saklama süresi kullanılan hizmete göre değişiklik gösterebilir."
    ]
  },
  {
    title: "6. Çerezleri Nasıl Kontrol Edebilirsiniz?",
    paragraphs: [
      "Tarayıcınızın ayarlarını kullanarak;",
      "çerezleri kabul edebilir,",
      "reddedebilir,",
      "mevcut çerezleri silebilir,",
      "belirli internet siteleri için çerez kullanımını engelleyebilirsiniz.",
      "Ancak bazı çerezlerin devre dışı bırakılması internet sitesinin bazı özelliklerinin doğru çalışmamasına neden olabilir."
    ]
  },
  {
    title: "7. Açık Rıza",
    paragraphs: [
      "Zorunlu olmayan çerezler yalnızca yürürlükteki mevzuat kapsamında gerekli olduğu durumlarda kullanıcı tercihine bağlı olarak kullanılacaktır.",
      "İnternet sitemizi ilk ziyaretinizde sunulan çerez tercih paneli üzerinden tercihlerinizi dilediğiniz zaman değiştirebilirsiniz."
    ]
  },
  {
    title: "8. Çerez Tercihlerinin Güncellenmesi",
    paragraphs: [
      "Çerez tercihlerinizi;",
      "internet sitemizde sunulan çerez yönetim paneli üzerinden,",
      "tarayıcı ayarlarınızı kullanarak",
      "dilediğiniz zaman değiştirebilirsiniz."
    ]
  },
  {
    title: "9. Güncellemeler",
    paragraphs: [
      "DG Digital bu Çerez Politikası'nı yürürlükte bulunan mevzuat veya kullanılan teknolojiler doğrultusunda güncelleyebilir.",
      "Güncellenen politika internet sitesinde yayımlandığı tarihten itibaren yürürlüğe girer."
    ]
  },
  {
    title: "10. İletişim",
    paragraphs: [
      "Çerez Politikası hakkında sorularınız için bizimle iletişime geçebilirsiniz.",
      "DG Digital",
      "Web Sitesi: https://www.denizgokbudak.com",
      "E-posta: info@denizgokbudak.com"
    ]
  }
];

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "DG Digital çerez politikası, kullanılan çerez türleri, üçüncü taraf servisler ve çerez tercih yönetimi.",
  alternates: {
    canonical: "/cerez-politikasi"
  }
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal Bilgilendirme"
        title="Çerez Politikası"
        description="Sitede kullanılan çerezler, amaçları, analiz ve pazarlama teknolojileri ile tercih yönetimi hakkında bilgilendirme."
      />

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-panel backdrop-blur-xl md:p-10">
            <h2 className="font-display text-3xl font-semibold text-white">
              Çerez Politikası
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Son Güncelleme Tarihi: 02 Temmuz 2026
            </p>

            <div className="mt-10 space-y-8">
              {cookieSections.map((section) => (
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
