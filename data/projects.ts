export type Project = {
  title: string;
  category: string;
  summary: string;
  outcome: string;
  image: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Liora House",
    category: "Hospitality Experience",
    summary:
      "Butik otelin premium konumlanmasını destekleyen, rezervasyon niyeti yaratan ve mobilde güçlü hissettiren bir web deneyimi.",
    outcome: "Rezervasyon odaklı akış ve daha üst segment bir marka algısı",
    image: "/images/case-hotel.png",
    highlights: ["Konumlandırma", "Editorial tasarım", "Mobil rezervasyon akışı"]
  },
  {
    title: "Meridien Clinic",
    category: "Lead Generation Landing Page",
    summary:
      "Kliniğin güven unsurlarını öne çıkaran, randevu talebini hızlandıran ve karmaşayı azaltan odaklı landing page kurgusu.",
    outcome: "Randevu formuna daha kısa yol ve daha temiz karar akışı",
    image: "/images/case-clinic.png",
    highlights: ["Lead UX", "Güven blokları", "Hızlı kampanya yapısı"]
  },
  {
    title: "Aurel Edit",
    category: "Premium E-Commerce",
    summary:
      "Lifestyle markasının ürünlerini katalog gibi değil, editoryal bir deneyim olarak sunan premium commerce vitrini.",
    outcome: "Daha güçlü ürün sunumu ve daha rafine satın alma hissi",
    image: "/images/case-commerce.png",
    highlights: ["Merchandising", "Luxury UI", "Responsive commerce"]
  }
];
