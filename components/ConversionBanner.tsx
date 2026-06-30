import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ConversionBanner() {
  return (
    <section className="pb-4">
      <div className="shell">
        <AnimatedSection className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.24),rgba(8,20,35,0.86)_40%,rgba(77,182,244,0.18))] px-6 py-7 shadow-panel md:px-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-mist">Hızlı Başlangıç</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[2.6rem]">
                Güçlü bir ilk izlenim için projenizi birlikte netleştirelim.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                Sayfa aşağı indikçe teklif kararını erteletmeyen, net mesaj veren
                ve markanızı profesyonel gösteren bir yapı kuruyoruz.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/iletisim" className="button-primary">
                Ücretsiz Ön Görüşme
              </Link>
              <Link href="https://wa.me/905536662353" className="button-secondary">
                WhatsApp ile Yaz
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
