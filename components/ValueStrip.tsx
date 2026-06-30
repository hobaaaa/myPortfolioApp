import { AnimatedSection } from "@/components/AnimatedSection";

const items = [
  "WordPress ile kurumsal web sitesi çözümleri",
  "Next.js ile modern ve hızlı web projeleri",
  "Yerel müşterilere hitap eden web tasarım içeriği",
  "E-ticaret sistemleri ve ürün vitrini kurgusu",
  "Randevu uygulamaları ve gelişen SaaS arayüzleri"
];

const loopItems = [...items, ...items];

export function ValueStrip() {
  return (
    <section className="pb-2">
      <div className="shell overflow-hidden">
        <AnimatedSection className="rounded-[26px] border border-white/10 bg-white/[0.025] p-3">
          <div className="marquee-mask">
            <div className="marquee-track">
              {loopItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="mx-2 min-w-[300px] rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5 transition duration-500 hover:-translate-y-1 hover:border-accent/30"
                >
                  <p className="text-lg font-medium leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
