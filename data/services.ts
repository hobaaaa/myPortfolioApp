export type Service = {
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
  outcomes: string[];
  technologies: string[];
  label: string;
};

export const services: Service[] = [
  {
    title: "Kurumsal Web Sitesi",
    summary:
      "Markanızı ilk bakışta daha güven veren, daha düzenli ve daha profesyonel gösteren kurumsal web siteleri üretiyoruz.",
    detail:
      "WordPress ya da Next.js tabanlı yapılarda; içerik akışını, mobil deneyimi ve teknik kaliteyi aynı sistemde çözüyoruz.",
    deliverables: [
      "Kurumsal sayfa mimarisi",
      "Özel arayüz tasarımı",
      "Hızlı ve indekslenebilir altyapı"
    ],
    outcomes: [
      "Daha profesyonel görünüm",
      "Daha yüksek güven",
      "Daha güçlü teklif dönüşümü"
    ],
    technologies: ["WordPress", "Next.js", "TypeScript"],
    label: "Kurumsal"
  },
  {
    title: "Landing Page",
    summary:
      "Reklam ve kampanyalar için daha net teklif sunan, daha hızlı aksiyon aldıran landing page yapıları hazırlıyoruz.",
    detail:
      "Mesaj kurgusu, güven blokları ve mobil dönüşüm akışı ile ziyaretçiyi karar adımına daha hızlı taşıyoruz.",
    deliverables: [
      "Mesaj ve teklif akışı",
      "Dönüşüm odaklı bölüm kurgusu",
      "Reklam trafiğine uygun sayfa yapısı"
    ],
    outcomes: [
      "Daha yüksek dönüşüm",
      "Daha fazla form talebi",
      "Daha kaliteli müşteri adayı"
    ],
    technologies: ["Next.js", "TypeScript", "Analytics"],
    label: "Landing"
  },
  {
    title: "E-Ticaret Sistemleri",
    summary:
      "Ürünlerinizi daha güçlü sunan, satın alma sürecini sadeleştiren e-ticaret deneyimleri geliştiriyoruz.",
    detail:
      "Kategori yapısını, ürün kartlarını ve mobil alışveriş akışını tek bir satış vitrini mantığıyla kurguluyoruz.",
    deliverables: [
      "Kategori ve ürün sunumu",
      "Mobil alışveriş deneyimi",
      "Kampanya ve koleksiyon alanları"
    ],
    outcomes: [
      "Daha güçlü ürün sunumu",
      "Daha rahat satın alma akışı",
      "Daha yüksek sepet potansiyeli"
    ],
    technologies: ["WooCommerce", "Shopify", "Next.js"],
    label: "E-Ticaret"
  },
  {
    title: "Özel Web Uygulamaları",
    summary:
      "Ekiplerin iş akışını hızlandıran panel, yönetim ekranı ve süreç odaklı web uygulamaları geliştiriyoruz.",
    detail:
      "Sadece iyi görünen değil, günlük kullanımda gerçekten iş çözen yönetim paneli ve özel ürün arayüzleri kuruyoruz.",
    deliverables: [
      "Dashboard ve panel arayüzü",
      "Özel kullanıcı akışları",
      "Geliştirilebilir komponent yapısı"
    ],
    outcomes: [
      "Daha düzenli operasyon",
      "Daha hızlı ekip kullanımı",
      "Daha ölçeklenebilir ürün altyapısı"
    ],
    technologies: ["Next.js", "Supabase", "TypeScript"],
    label: "Uygulama"
  },
  {
    title: "SaaS Ürün Arayüzleri",
    summary:
      "Randevu uygulamaları, üyelik sistemleri ve büyüyen ürün fikirleri için ölçeklenebilir SaaS arayüzleri tasarlıyoruz.",
    detail:
      "Onboarding akışını, panel düzenini ve kullanıcı etkileşimini sade bir ürün mantığıyla daha anlaşılır hale getiriyoruz.",
    deliverables: [
      "SaaS ekran planlaması",
      "Kullanıcı ve yönetici panelleri",
      "Ürünleşmeye uygun arayüz sistemi"
    ],
    outcomes: [
      "Daha net ürün deneyimi",
      "Daha kolay kullanıcı adaptasyonu",
      "Daha güçlü ürün algısı"
    ],
    technologies: ["Next.js", "Supabase", "TypeScript"],
    label: "SaaS"
  },
  {
    title: "Bakım ve Geliştirme",
    summary:
      "Yayına çıktıktan sonra da sitenizin güncel, kontrollü ve gelişime açık kalması için düzenli destek veriyoruz.",
    detail:
      "Yeni sayfa ekleme, içerik güncelleme ve performans iyileştirme işlerini tek bir bakım akışı içinde yönetiyoruz.",
    deliverables: [
      "Aylık geliştirme listesi",
      "İçerik ve görsel güncellemeler",
      "Sürekli kalite kontrol"
    ],
    outcomes: [
      "Daha güncel site yapısı",
      "Daha az teknik aksama",
      "Daha sürdürülebilir büyüme"
    ],
    technologies: ["WordPress", "Next.js", "Support"],
    label: "Destek"
  }
];
