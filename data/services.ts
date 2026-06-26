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
      "Markanızın ilk bakışta güven veren, premium ve düzenli görünmesini sağlayan kurumsal deneyimler tasarlıyorum.",
    detail:
      "Mesaj mimarisi, sayfa akışı, içerik düzeni ve teknik performansı aynı çatı altında ele alarak satış ekiplerinin de rahat kullanacağı bir dijital vitrin kuruyorum.",
    deliverables: [
      "Pozisyonlama ve içerik akışı",
      "Özel arayüz tasarımı",
      "Hızlı ve SEO uyumlu altyapı"
    ],
    label: "Marka Vitrini"
  },
  {
    title: "Landing Page Tasarımı",
    summary:
      "Reklam trafiğini boşa harcamayan, net mesaj veren ve tek hedefe odaklanan yüksek dönüşümlü sayfalar hazırlıyorum.",
    detail:
      "Kampanya yapısına uygun teklif akışı, güven öğeleri, CTA kurgusu ve görsel ritim ile ziyaretçiyi karar vermeye iten bir sayfa yapısı oluşturuyorum.",
    deliverables: [
      "Teklif ve CTA kurgusu",
      "Dönüşüm odaklı blok yapısı",
      "A/B testine açık komponentler"
    ],
    label: "Dönüşüm"
  },
  {
    title: "E-Ticaret Deneyimi",
    summary:
      "Ürün sunumu, koleksiyon düzeni ve satın alma akışına premium marka algısı ekleyen commerce arayüzleri kuruyorum.",
    detail:
      "Kategori yapısından ürün kartlarına, kampanya alanlarından mobil checkout deneyimine kadar her dokunuş satış kalitesini artıracak şekilde planlanır.",
    deliverables: [
      "Kategori ve ürün sunumu",
      "Mobil satış akışı",
      "Kampanya ve merchandising alanları"
    ],
    label: "Commerce"
  },
  {
    title: "Özel Web Uygulaması",
    summary:
      "Sadece şık görünen değil, ekiplerin günlük iş akışına hız kazandıran panel ve araçlar geliştiriyorum.",
    detail:
      "Operasyonel ihtiyaçları sadeleştiren dashboard, yönetim paneli ve müşteri ekranları için esnek ve sürdürülebilir bir ürün mantığı kuruyorum.",
    deliverables: [
      "Dashboard ve panel tasarımı",
      "Komponent tabanlı arayüz mimarisi",
      "Geliştirilebilir kod altyapısı"
    ],
    label: "Operasyon"
  },
  {
    title: "Teknik Güçlendirme",
    summary:
      "Var olan sitenizi daha hızlı, daha güven veren ve daha iyi performans gösteren bir yapıya taşıyorum.",
    detail:
      "Core Web Vitals, sayfa hiyerarşisi, teknik SEO ve içerik düzeni tarafında görünmeyen ama dönüşümü doğrudan etkileyen katmanı güçlendiriyorum.",
    deliverables: [
      "Hız ve teknik kalite analizi",
      "UX ve içerik iyileştirmeleri",
      "Performans odaklı yeniden düzenleme"
    ],
    label: "Optimization"
  },
  {
    title: "Sürekli İyileştirme",
    summary:
      "Yayına çıktıktan sonra da sitenizin güncel, kontrollü ve bakımlı kalması için düzenli destek veriyorum.",
    detail:
      "Yeni bölüm ekleme, içerik güncelleme, teknik bakım ve iteratif tasarım iyileştirmeleriyle siteyi yaşayan bir satış varlığı olarak yönetiyorum.",
    deliverables: [
      "Aylık geliştirme listesi",
      "İçerik ve sayfa güncellemeleri",
      "Sürekli kalite kontrol"
    ],
    label: "Retainer"
  }
];
