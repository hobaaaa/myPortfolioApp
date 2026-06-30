export type Project = {
  title: string;
  category: string;
  summary: string;
  outcome: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Liora House",
    category: "Kurumsal Web Sitesi",
    summary:
      "Butik otelin premium konumlanmasını destekleyen, rezervasyon niyeti yaratan ve mobilde güçlü hissettiren bir web sitesi deneyimi.",
    outcome: "Daha üst segment marka algısı ve daha net rezervasyon akışı",
    image: "/images/case-hotel.png",
    imageAlt: "Butik otel markası için hazırlanmış premium kurumsal web sitesi arayüzü",
    highlights: ["WordPress/Next.js yapı", "Konumlandırma", "Mobil rezervasyon akışı"]
  },
  {
    title: "Meridien Clinic",
    category: "Landing Page",
    summary:
      "Kliniğin hizmetlerini daha güvenilir gösteren ve başvuru talebini sadeleştiren odaklı landing page kurgusu.",
    outcome: "Daha temiz mesaj yapısı ve daha kısa başvuru yolu",
    image: "/images/case-clinic.png",
    imageAlt: "Sağlık kliniği için hazırlanmış dönüşüm odaklı landing page tasarımı",
    highlights: ["Lead UX", "Güven blokları", "Randevu odaklı yapı"]
  },
  {
    title: "Aurel Edit",
    category: "E-Ticaret Arayüzü",
    summary:
      "Lifestyle markasının ürünlerini katalog gibi değil, editoryal bir deneyim olarak sunan premium e-ticaret vitrini.",
    outcome: "Daha güçlü ürün sunumu ve daha rafine satın alma hissi",
    image: "/images/case-commerce.png",
    imageAlt: "Premium lifestyle markası için hazırlanmış e-ticaret arayüz tasarımı",
    highlights: ["E-ticaret vitrin", "Luxury UI", "Responsive commerce"]
  }
];
