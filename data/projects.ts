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
    title: "Makros Otomasyon",
    slug: "makros-otomasyon",
    category: "Kurumsal Web Sitesi",
    summary:
      "Endüstriyel otomasyon alanındaki uzmanlığını güçlü bir dijital kimlikle yansıtan, güven oluşturan ve potansiyel müşterilerin hizmetlere hızlıca ulaşmasını sağlayan kurumsal web sitesi deneyimi.",
    outcome: "Daha güçlü kurumsal algı ve daha profesyonel ilk izlenim",
    image: "/images/makros-otomasyon.png",
    imageAlt: "Makros Otomasyon için tasarlanmış kurumsal web sitesi arayüzü",
    highlights: [
      "WordPress Altyapısı",
      "Responsive Tasarım",
      "Performans Optimizasyonu",
    ],
    challenge:
      "Firmanın teknik uzmanlığını ve sektördeki deneyimini yansıtan profesyonel bir dijital vitrine ihtiyacı vardı. Mevcut yapı güven veren kurumsal kimliği yeterince desteklemiyordu.",
    solution:
      "Markanın kurumsal kimliğine uygun modern bir arayüz tasarlanarak hizmet odaklı bilgi mimarisi oluşturuldu. Responsive yapı, performans optimizasyonu ve kullanıcı odaklı içerik akışıyla ziyaretçilerin ihtiyaç duydukları bilgilere hızlıca ulaşmaları sağlandı.",
    result:
      "Makros Otomasyon'un dijital marka algısı güçlendirildi, kurumsal güven hissi artırıldı ve potansiyel müşterilerin firma hakkında daha hızlı bilgi edinmesini sağlayan modern bir web deneyimi oluşturuldu.",
    href: "/portfolio#makros-otomasyon",
  },
  {
    title: "BY Damla Su Teknolojileri",
    slug: "by-damla-su-teknolojileri",
    category: "Kurumsal Web Sitesi",
    summary:
      "Su arıtma teknolojileri alanındaki uzmanlığını güven veren bir dijital deneyimle buluşturan, hizmet ve ürünlerini modern bir yapıda sunan kurumsal web sitesi.",
    outcome: "Daha güçlü kurumsal güven ve daha kolay hizmet talebi süreci",
    image: "/images/bydamla-su-teknolojileri.png",
    imageAlt:
      "BY Damla Su Teknolojileri için tasarlanmış kurumsal web sitesi arayüzü",
    highlights: ["WordPress", "Responsive Tasarım", "Hizmet Odaklı UX"],
    challenge:
      "Firma; ürünlerini, hizmetlerini ve teknik uzmanlığını tek bir platformda güven veren ve profesyonel bir şekilde sunabileceği modern bir web sitesine ihtiyaç duyuyordu.",
    solution:
      "Kurumsal kimliği destekleyen modern bir arayüz, hizmet odaklı bilgi mimarisi ve güçlü çağrı aksiyonlarıyla ziyaretçilerin ihtiyaç duydukları çözümlere hızlıca ulaşabilecekleri kullanıcı deneyimi tasarlandı.",
    result:
      "Markanın dijital görünürlüğü güçlendirildi, kurumsal güven algısı artırıldı ve potansiyel müşterilerin teklif alma ve iletişim süreçleri daha erişilebilir hale getirildi.",
    href: "/portfolio#by-damla-su-teknolojileri",
  },
  {
    title: "Safir Yapı",
    slug: "safir-yapi",
    category: "Kurumsal Web Sitesi",
    summary:
      "Havuz yapımı ve peyzaj projelerini güçlü görsellerle öne çıkaran, hizmetlerini güven veren bir yapıda sunan modern kurumsal web sitesi.",
    outcome: "Daha güçlü proje sunumu ve daha profesyonel marka algısı",
    image: "/images/safir-yapi.png",
    imageAlt:
      "Safir Yapı için tasarlanmış havuz yapımı odaklı kurumsal web sitesi arayüzü",
    highlights: ["WordPress", "Proje Odaklı UX", "Responsive Tasarım"],
    challenge:
      "Firmanın tamamladığı projeler yüksek kaliteye sahip olmasına rağmen dijital sunum, bu kaliteyi ve uzmanlığı yeterince yansıtmıyordu. Ziyaretçilerin hizmetleri ve referans projeleri hızlıca inceleyebileceği modern bir deneyime ihtiyaç vardı.",
    solution:
      "Projeleri ön plana çıkaran görsel odaklı bir arayüz, sade bilgi mimarisi ve mobil uyumlu kullanıcı deneyimi tasarlanarak ziyaretçilerin hizmetlere ve iletişim kanallarına daha hızlı ulaşması sağlandı.",
    result:
      "Markanın dijital vitrini modernleştirildi, tamamlanan projelerin sunumu güçlendirildi ve potansiyel müşteriler için daha güven veren bir ilk izlenim oluşturuldu.",
    href: "/portfolio#safir-yapi",
  },
];
