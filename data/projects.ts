export type Project = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  outcome: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  challenge: string;
  solution: string;
  result: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Liora House",
    slug: "liora-house",
    category: "Kurumsal Web Sitesi",
    summary:
      "Butik otelin premium konumlanmasını destekleyen, rezervasyon niyeti yaratan ve mobilde güçlü hissettiren bir web sitesi deneyimi.",
    outcome: "Daha üst segment marka algısı ve daha net rezervasyon akışı",
    image: "/images/case-hotel.png",
    imageAlt: "Butik otel markası için hazırlanmış premium kurumsal web sitesi arayüzü",
    highlights: ["WordPress/Next.js yapı", "Konumlandırma", "Mobil rezervasyon akışı"],
    challenge:
      "Marka üst segment görünmek istiyordu ancak mevcut dijital sunum bu hissi yeterince taşımıyordu.",
    solution:
      "Daha rafine görsel dil, temiz içerik akışı ve rezervasyon niyetini güçlendiren mobil yapı kuruldu.",
    result:
      "Daha güçlü ilk izlenim, daha net rezervasyon akışı ve daha premium marka algısı oluştu.",
    href: "/portfolio#liora-house"
  },
  {
    title: "Meridien Clinic",
    slug: "meridien-clinic",
    category: "Landing Page",
    summary:
      "Kliniğin hizmetlerini daha güvenilir gösteren ve başvuru talebini sadeleştiren odaklı landing page kurgusu.",
    outcome: "Daha temiz mesaj yapısı ve daha kısa başvuru yolu",
    image: "/images/case-clinic.png",
    imageAlt: "Sağlık kliniği için hazırlanmış dönüşüm odaklı landing page tasarımı",
    highlights: ["Lead UX", "Güven blokları", "Randevu odaklı yapı"],
    challenge:
      "Hizmetler doğru anlatılmasına rağmen ziyaretçi için karar verme süreci yeterince hızlı değildi.",
    solution:
      "Başlık akışı, güven blokları ve form yönlendirmesi daha kısa ve daha ikna edici hale getirildi.",
    result:
      "Başvuru yolculuğu sadeleşti, mesaj daha netleşti ve form odaklı dönüşüm zemini güçlendi.",
    href: "/portfolio#meridien-clinic"
  },
  {
    title: "Aurel Edit",
    slug: "aurel-edit",
    category: "E-Ticaret Arayüzü",
    summary:
      "Lifestyle markasının ürünlerini katalog gibi değil, editoryal bir deneyim olarak sunan premium e-ticaret vitrini.",
    outcome: "Daha güçlü ürün sunumu ve daha rafine satın alma hissi",
    image: "/images/case-commerce.png",
    imageAlt: "Premium lifestyle markası için hazırlanmış e-ticaret arayüz tasarımı",
    highlights: ["E-ticaret vitrin", "Luxury UI", "Responsive commerce"],
    challenge:
      "Ürünler güçlüydü ancak dijital vitrin marka seviyesini ve satın alma hissini yeterince taşımıyordu.",
    solution:
      "Editoryal düzen, güçlü ürün görselleri ve daha akışkan responsive e-ticaret deneyimi kurgulandı.",
    result:
      "Ürün sunumu güçlendi, marka algısı yükseldi ve satın alma deneyimi daha rafine hale geldi.",
    href: "/portfolio#aurel-edit"
  }
];
