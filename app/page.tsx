import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ValueStrip } from "@/components/ValueStrip";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const proofItems = [
  {
    title: "Hazır tema gibi görünmeyen sunum dili",
    description:
      "Tipografi, boşluk, section akışı ve renk kararları bir araya gelerek daha pahalı görünen bir marka hissi üretir."
  },
  {
    title: "Doğru içerik sırası",
    description:
      "Ziyaretçi önce ne yaptığınızı anlar, sonra güven duyar, sonra aksiyon alma eşiğine gelir."
  },
  {
    title: "Geliştirilebilir yapı",
    description:
      "Site lansman sonrası da yeni hizmetler, referanslar ve sayfalar için sağlıklı biçimde büyümeye devam eder."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Hizmet Odağı"
            title="Web tasarım, landing page ve modern arayüz geliştirmede güçlü bir dijital vitrin kuruyorum."
            description="Amaç sadece iyi görünmek değil; markayı güvenilir hissettirmek, içeriği daha etkili sunmak ve dönüşüm yolunu netleştirmek."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{service.label}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValueStrip />

      <section className="section-space">
        <div className="shell">
          <SectionTitle
            eyebrow="Öne Çıkan Projeler"
            title="Farklı sektörler için aynı kalite standardını koruyan projeler."
            description="Kurumsal sunum, landing page ve premium commerce tarafında; markayı bir adım yukarı taşıyan görsel yön ve kullanıcı akışı kurgusu."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow text-accent">Neden Daha Güçlü Görünüyor?</p>
            <h2 className="heading-lg mt-4 max-w-2xl">
              Profesyonel görünüm, küçük kararların toplamıyla oluşur.
            </h2>
          </div>

          <div className="space-y-6">
            {proofItems.map((item, index) => (
              <AnimatedProof key={item.title} index={index + 1} {...item} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}

function AnimatedProof({
  index,
  title,
  description
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative border-l border-white/10 pl-6">
      <span className="absolute left-[-7px] top-1 h-3.5 w-3.5 rounded-full bg-accent shadow-soft" />
      <p className="text-sm text-accent">0{index}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}
