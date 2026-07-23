import type { Metadata } from "next";
import { ArtexoSpotlight } from "@/components/ArtexoSpotlight";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { TechnologyStrip } from "@/components/TechnologyStrip";
import { projects } from "@/data/projects";

const portfolioSupportCards = [
  {
    title: "Kurumsal web tasarım yaklaşımı",
    description:
      "Markanın profesyonel görünümünü güçlendiren içerik hiyerarşisi, net bölüm akışı ve güven veren sunum dili.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 20V7l8-4 8 4v13" />
        <path d="M9 20v-6h6v6" />
      </svg>
    )
  },
  {
    title: "Dönüşüm odaklı landing page kurgusu",
    description:
      "Karar sürecini kısaltan başlık yapısı, güven blokları ve teklif/form yönlendirmeleriyle daha net aksiyon akışı.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10h10" />
        <path d="M7 14h6" />
      </svg>
    )
  },
  {
    title: "Premium marka sunumu",
    description:
      "Güçlü görsel seçimler, dengeli boşluk kullanımı ve responsive deneyimle üst segment bir dijital algı oluşturma yaklaşımı.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" />
      </svg>
    )
  }
];

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "DG Digital projelerini, arayüz yaklaşımını ve farklı sektörlerdeki web tasarım yönlerini inceleyin.",
  alternates: {
    canonical: "/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Projeler"
        title="Markaya seviye kazandıran, güven veren ve iyi sunan dijital projeler."
        description="Buradaki örnekler; web tasarım, landing page ve premium sunum kalitesinin farklı sektörlerde nasıl uygulandığını göstermek için hazırlandı."
      />
      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Seçili Çalışmalar"
            title="Her proje; görünüm, içerik akışı ve kullanıcı deneyimini birlikte düşünür."
            description="Amaç sadece iyi görünen ekranlar üretmek değil; daha güvenilir, daha net ve daha profesyonel bir dijital deneyim kurmaktır."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>
      <ArtexoSpotlight />
      <section className="pb-10 md:pb-12">
        <div className="shell grid gap-4 md:grid-cols-3">
          {portfolioSupportCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.05]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-100">
                {item.icon}
              </div>
              <p className="mt-5 font-display text-3xl font-semibold text-white">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <TechnologyStrip />
      <CTASection />
    </>
  );
}


