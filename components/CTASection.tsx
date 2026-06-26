import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export function CTASection() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="shell">
        <AnimatedSection className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.34),rgba(6,17,29,0.88)_42%,rgba(77,182,244,0.22))] px-8 py-10 md:px-12 md:py-14">
          <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/18 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-mist">Bir Sonraki Adım</p>
              <h2 className="heading-lg mt-4">
                Markanız dijitalde daha güçlü görünmeye hazırsa, doğru yerden başlayalım.
              </h2>
              <p className="body-lg mt-4">
                Yeni bir site, dönüşüm odaklı landing page ya da mevcut yapınızın
                daha üst seviyede yeniden tasarlanması için birlikte net bir yol haritası çıkaralım.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/iletisim" className="button-primary">
                Teklif Al
              </Link>
              <Link href="/portfolio" className="button-secondary">
                Projeleri Gör
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
