import { AnimatedSection } from "@/components/AnimatedSection";

const items = [
  "Kurumsal görünüm",
  "Landing page kurgusu",
  "Hızlı altyapı",
  "Responsive tasarım",
  "Sürdürülebilir geliştirme"
];

export function ValueStrip() {
  return (
    <section className="pb-2">
      <div className="shell">
        <AnimatedSection className="flex flex-wrap items-center justify-center gap-3 border-y border-white/10 py-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-100"
            >
              {item}
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
