import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const highlights = [
  "Performans ve teknik kalite",
  "Mobil deneyim ve kullanıcı akışı",
  "Güven algısı ve teklif potansiyeli"
];

export function FreeAnalysisHighlight() {
  return (
    <section className="section-space">
      <div className="shell">
        <AnimatedSection className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.2),rgba(8,20,35,0.88)_42%,rgba(77,182,244,0.16))] px-6 py-7 shadow-panel md:px-8 md:py-8">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-accent/18 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="eyebrow text-mist">Ücretsiz Site Analizi</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[2.5rem]">
                Web sitenizin güçlü ve zayıf taraflarını ücretsiz olarak netleştirelim.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                Mevcut yapınızı teknik, görsel ve dönüşüm odaklı açıdan inceleyip
                uygulanabilir iyileştirme başlıklarını size kısa ve net şekilde sunalım.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm leading-6 text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/ucretsiz-web-sitesi-analizi" className="button-primary">
                  Ücretsiz Analiz Al
                </Link>
                <Link href="/iletisim" className="button-secondary">
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
