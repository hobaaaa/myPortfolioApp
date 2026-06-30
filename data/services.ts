export type Service = {
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
  label: string;
};

export const services: Service[] = [
  {
    title: "Kurumsal Web Sitesi",
    summary:
      "Markanızı ilk bakışta güven veren, düzenli ve profesyonel gösteren kurumsal web siteleri tasarlıyor ve geliştiriyorum.",
    detail:
      "WordPress ya da Next.js tabanlı yapılarda; içerik akışı, görsel hiyerarşi, mobil deneyim ve teknik kaliteyi aynı sistem içinde kuruyorum.",
    deliverables: [
      "Kurumsal sayfa mimarisi",
      "Özel arayüz tasarımı",
      "Hızlı ve indekslenebilir altyapı"
    ],
    label: "Kurumsal"
  },
  {
    title: "Landing Page",
    summary:
      "Reklam, kampanya veya belirli hizmetler için daha net teklif sunan ve aksiyon aldıran landing page yapıları hazırlıyorum.",
    detail:
      "Başlık kurgusu, güven blokları, dönüşüm akışı ve mobil kullanım dengesi ile ziyaretçiyi karar adımına daha hızlı taşıyan sayfalar oluşturuyorum.",
    deliverables: [
      "Mesaj ve teklif akışı",
      "Dönüşüm odaklı bölüm kurgusu",
      "Reklam trafiğine uygun sayfa yapısı"
    ],
    label: "Landing"
  },
  {
    title: "E-Ticaret Sistemleri",
    summary:
      "Ürünlerinizi daha güçlü sunan, marka algısını yükselten ve satın alma sürecini sadeleştiren e-ticaret deneyimleri geliştiriyorum.",
    detail:
      "Koleksiyon yapısı, ürün kartları, mobil alışveriş akışı ve kampanya alanlarını birlikte ele alarak daha rafine bir satış vitrini kuruyorum.",
    deliverables: [
      "Kategori ve ürün sunumu",
      "Mobil alışveriş deneyimi",
      "Kampanya ve koleksiyon alanları"
    ],
    label: "E-Ticaret"
  },
  {
    title: "Özel Web Uygulamaları",
    summary:
      "Ekiplerin iş akışına hız katan paneller, yönetim ekranları ve süreç odaklı web uygulamaları geliştiriyorum.",
    detail:
      "Sadece görsel olarak iyi duran değil, günlük kullanımda da iş çözen yönetim paneli ve özel ürün arayüzleri inşa ediyorum.",
    deliverables: [
      "Dashboard ve panel arayüzü",
      "Özel kullanıcı akışları",
      "Geliştirilebilir komponent yapısı"
    ],
    label: "Uygulama"
  },
  {
    title: "SaaS Ürün Arayüzleri",
    summary:
      "Randevu uygulamaları, üyelik sistemleri ve büyüyen ürün fikirleri için ölçeklenebilir SaaS arayüzleri tasarlıyorum.",
    detail:
      "Ürün mantığı, onboarding akışı, panel düzeni ve kullanıcı etkileşimini sade bir tasarım diliyle çözerek yazılımı daha anlaşılır hale getiriyorum.",
    deliverables: [
      "SaaS ekran planlaması",
      "Kullanıcı ve yönetici panelleri",
      "Ürünleşmeye uygun arayüz sistemi"
    ],
    label: "SaaS"
  },
  {
    title: "Bakım ve Geliştirme",
    summary:
      "Yayına çıktıktan sonra da sitenizin güncel, kontrollü ve gelişime açık kalması için düzenli destek veriyorum.",
    detail:
      "Yeni sayfa ekleme, içerik güncelleme, performans iyileştirme ve görsel düzenleme gibi işleri tek bir bakım akışı içinde yürütebiliyorum.",
    deliverables: [
      "Aylık geliştirme listesi",
      "İçerik ve görsel güncellemeler",
      "Sürekli kalite kontrol"
    ],
    label: "Destek"
  }
];
