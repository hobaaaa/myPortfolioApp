export const analysisMetrics = [
  {
    label: "Performance",
    score: "92/100",
    detail: "Core Web Vitals, yüklenme akışı ve kritik render davranışı"
  },
  {
    label: "SEO",
    score: "88/100",
    detail: "Başlık yapısı, indekslenebilirlik ve sayfa sinyalleri"
  },
  {
    label: "Mobil Deneyim",
    score: "95/100",
    detail: "Dokunmatik kullanım, spacing dengesi ve okunabilirlik"
  },
  {
    label: "Güven ve Dönüşüm",
    score: "90/100",
    detail: "Mesaj netliği, teklif akışı ve ikna unsurlarının yerleşimi"
  }
] as const;

export const analysisAreas = [
  {
    title: "Teknik SEO",
    description:
      "Başlık yapısı, indekslenebilirlik, metadata tutarlılığı ve sayfa iskeletini inceliyoruz."
  },
  {
    title: "Sayfa Hızı",
    description:
      "İlk yüklenme algısı, görsel optimizasyonu ve performansı etkileyen dar boğazları tespit ediyoruz."
  },
  {
    title: "Mobil Kullanılabilirlik",
    description:
      "Mobil kırılımlarda okunabilirlik, CTA görünürlüğü ve akış konforunu değerlendiriyoruz."
  },
  {
    title: "İçerik ve Mesaj Netliği",
    description:
      "Ziyaretçinin ne sunduğunuzu ilk bakışta anlayıp anlamadığını içerik akışı üzerinden test ediyoruz."
  },
  {
    title: "Görsel Güven Algısı",
    description:
      "Sunum kalitesi, hiyerarşi ve profesyonellik hissinin marka güvenine etkisini ele alıyoruz."
  },
  {
    title: "Teklif / İletişim Akışı",
    description:
      "Formlar, WhatsApp adımları ve teklif alma noktalarının dönüşüm potansiyelini gözden geçiriyoruz."
  }
] as const;

export const analysisDeliverables = [
  "Mevcut sitenizdeki kritik problemler",
  "Öncelikli iyileştirme önerileri",
  "Teknik ve görsel kalite değerlendirmesi",
  "Dönüşüm artırma fırsatları",
  "Net aksiyon listesi"
] as const;

export const analysisAudience = [
  "Kurumsal web sitesi olan işletmeler",
  "Daha fazla teklif almak isteyen firmalar",
  "Google'da daha iyi görünmek isteyen yerel işletmeler",
  "Eski veya yavaş sitesi olan markalar",
  "Yeni site yaptırmadan önce mevcut durumunu görmek isteyenler"
] as const;

export const analysisInterestOptions = [
  "Web Tasarım",
  "WordPress",
  "Next.js",
  "E-Ticaret",
  "Landing Page",
  "SaaS Arayüzü",
  "Emin Değilim"
] as const;
