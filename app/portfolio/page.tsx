import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "DG Digital projelerini, arayüz yaklaşımını ve farklı sektörlerdeki web tasarım yönlerini inceleyin."
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
      <section className="pb-14 md:pb-18">
        <div className="shell grid gap-4 md:grid-cols-3">
          {[
            "Kurumsal web tasarım yaklaşımı",
            "Dönüşüm odaklı landing page kurgusu",
            "Premium marka sunumu ve responsive deneyim"
          ].map((item) => (
            <div key={item} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <p className="font-display text-3xl font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
